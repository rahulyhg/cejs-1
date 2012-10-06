/**
 * @name CeL function for dependency net
 * @fileoverview 本檔案包含了相依, dependency relation, dependency net 用的 functions。
 *               TODO:
 * @since
 * @example <code>
 * </code>
 * @see
 */

'use strict';
if (typeof CeL === 'function') {
	CeL.object_hash = (function(library_namespace) {

		function object_hash() {
			this.list_of_hash_to_object = {};
		}

		function hash_of_object(object, add_it) {
			if (arguments.length === 0)
				return;

			var hash, type = typeof object, list_of_hash_to_object = this.list_of_hash_to_object;
			// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof
			switch (type) {
			case 'boolean':
			case 'number':
			case 'undefined':
			case 'string':
				hash = String(object);
				break;
			// 對純量，無法判別個別 instance。

			case 'function':
				if (library_namespace.is_Function(object)) {
					// 若設定 function.toString，僅能得到 object.toString()。
					hash = String(object);
					hash = hash.length + '|' + hash;
					break;
				}
			case 'object':
				if (Array.isArray(object)) {
					hash = (2 * object.length < this.max_hash_length ? object
							: object.slice(0, this.max_hash_length / 2))
							.toString();
					break;
				}
				if (library_namespace.is_Object(object)) {
					hash = '{';
					var i;
					for (i in object) {
						hash += i + ':' + object[i];
						// 不須過長。
						if (hash.length > this.max_hash_length) {
							i = null;
							break;
						}
					}
					if (i !== null)
						hash += +'}';
					break;
				}
			case 'xml':
			case 'date':
			default:
				hash = library_namespace.is_type(object) + object;
				break;
			}

			// 正規化。
			hash = hash.slice(0, this.max_hash_length)
					.replace(/_(\d+)$/, '-$1');
			if (library_namespace.is_debug(2) && library_namespace.is_WWW())
				library_namespace.debug('hash: [' + hash + ']', 1,
						'hash_of_object');

			if (hash in list_of_hash_to_object) {
				var list = list_of_hash_to_object[hash],
				//
				index = list.indexOf(object);

				if (library_namespace.is_debug(2) && library_namespace.is_WWW())
					library_namespace.debug('衝突(collision) @ hash [' + hash
							+ '], index ' + index + ' / ' + list.length, 1,
							'hash_of_object');

				if (index === -1) {
					//	TODO: 偵測 ELEMENT_NODE.isSameNode, Array 之深度檢測等。
					// incase NaN. 但不可用 isNaN(object), 因為 isNaN(undefined) === true.
					if (object !== object) {
						index = 0;
					} else if (add_it)
						index = list.push(object) - 1;
					else
						hash = undefined;
				}

			} else if (add_it) {
				// add new one.
				list_of_hash_to_object[hash] = [ object ];
				index = 0;
			} else
				hash = undefined;

			return hash && [ hash, index ];
		}

		function object_of_hash(hash, allow_throw) {
			try {
				var list, match = hash.match(/_(\d+)$/);
				if (match) {
					match = parseInt(match[1]);
					list = this.list_of_hash_to_object[hash
							.replace(/_\d+$/, '')];
					return match in list && list[match];
				}

			} catch (e) {
				if (allow_throw)
					throw e;
			}
		}

		function remove_object(object) {
			var hash = this.hash_of_object(object), list_of_hash_to_object, list, key;
			if (hash) {
				list_of_hash_to_object = this.list_of_hash_to_object;
				list = list_of_hash_to_object[key = hash[0]];
				if (list.length < 2)
					delete list_of_hash_to_object[key];
				else
					delete list[hash[1]];
			}
		}

		function remove_hash(hash) {
			if (hash)
				delete this.list_of_hash_to_object[hash];
		}

		library_namespace.extend({
			item : object_of_hash,
			add : function(object, add_it) {
				var hash = this.hash_of_object(object, add_it);
				return hash && hash.join('_');
			},
			max_hash_length : 200
		}, object_hash.prototype);

		return (object_hash// JSDT:_module_
		);
	})(CeL);

	// -----------------------------------------------------------

	CeL.dependency_net = (function(library_namespace) {

		function dependency_net() {
			this.hashs = new library_namespace.object_hash();
			// hashs_needs[hash key] = [所有需要此 hash 的; 所有依賴此 hash 者]。
			this.hashs_needs = {};
			// hashs_required_by[hash key] = [所有此 hash 需要的; 所有此 hash 依賴者]。
			this.hashs_required_by = {};
		}

		function has_hash() {
			for ( var hash in this.hashs_needs)
				return true;
			return false;
		}

		// independent → dependent
		function add_need(independent_hash, dependent_hash) {
			// 維護雙向指標。
			var list = this.hashs_needs;
			if (!(independent_hash in list))
				list[independent_hash] = [ dependent_hash ];
			else if (list[independent_hash].indexOf(dependent_hash) === -1)
				list[independent_hash].push(dependent_hash);

			list = this.hashs_required_by;
			if (!(dependent_hash in list))
				list[dependent_hash] = [ independent_hash ];
			else if (list[dependent_hash].indexOf(independent_hash) === -1)
				list[dependent_hash].push(independent_hash);

		}

		// 設定 hash 無須任何 requires。
		function set_free(hash) {
			var hashs_required_by = this.hashs_required_by;
			if (hash in hashs_required_by) {
				// 維護雙向指標。
				hashs_required_by[hash].forEach(function(o) {
					var l = this.hashs_needs[o],
					// Array.prototype.indexOf()
					i = l.indexOf(o);
					if (i === -1)
						throw 'data error!';
					// remove specified index from Array
					delete l[i];
				}, this);
				delete hashs_required_by[hash];
			}
		}

		// get need of
		function get_need(object) {
			var hash = this.hashs.add(object);

			if (hash && (hash in this.hashs_required_by))
				return this.hashs_required_by[hash];
		}

		// set need of
		// 解決順序: needs__object_list → hash → needed_by__object_list
		function set_need(object, needs__object_list, needed_by__object_list) {
			var hashs = this.hashs, hash = hashs.add(object, true);

			if (hash) {
				if (needs__object_list) {
					if (!Array.isArray(needs__object_list))
						needs__object_list = [ needs__object_list ];
					needs__object_list.forEach(function(o) {
						this.add_need(hashs.add(o, true), hash);
					}, this);
				}

				if (needed_by__object_list) {
					if (!Array.isArray(needed_by__object_list))
						needed_by__object_list = [ needed_by__object_list ];
					needed_by__object_list.forEach(function(o) {
						this.add_need(hash, hashs.add(o, true));
					}, this);
				}
			} else
				return true;
		}

		function get_independent(object, return_hash) {
			var hashs_needs = this.hashs_needs, hash;
			if (!object)
				for (object in hashs_needs)
					if (object = this.get_independent(object, return_hash))
						return object;

			if (hash = this.hashs.add(object)) {
				var dependent_hash = {}, independent_hash = {}, hashs_required_by = this.hashs_required_by,
				//
				add_hash_to_pool = function(hash, parent_serial) {
					if (!(hash in hashs_required_by))
						// 沒有需要的。
						independent_hash[hash] = parent_serial.length;

					else if (!(hash in dependent_hash)) {
						// 處理所有上層。
						dependent_hash[hash] = parent_serial.length;
						parent_serial = parent_serial.concat(hash);
						hashs_required_by[hash].forEach(function(h) {
							add_hash_to_pool(h, parent_serial);
						});

					} else if (parent_serial.indexOf(hash) !== -1) {
						// 循環參照(circular dependencies)。將之改作 independent。
						delete dependent_hash[hash];
						independent_hash[hash] = null;
					}

				};

				add_hash_to_pool(hash, []);
				if (return_hash)
					return independent_hash;

				object = [];
				for (hash in independent_hash)
					object.push(this.hashs.item(hash));
				if (object.length)
					return object;
			}
		}

		function handle_daemon() {
			if (typeof this.daemon_handle !== 'function'
					|| this.daemon_is_running)
				return;

			this.daemon_is_running = true;
			// 開始測試是否有獨立 object 可直接處理/解決。
			var independent_list = get_independent(object, true);
			if (!independent_list || !independent_list.length) {
				if (this.has_hash())
					library_namespace.warn('已無獨立元素，卻仍有元素未處理。');
				this.daemon_is_running = false;
				return;
			}

			// 開始處理。
			independent_list.forEach(function(h) {
				// 最後確認，independent_list 元素獨立才處理。
				if (!(h in this.hashs_required_by))
					this.daemon_handle(this.hashs.item(h));
			});

			setTimeout(handle_daemon, 0);
		}

		// public interface.
		library_namespace.extend({
			item : function(hash) {
				return this.hashs.item(hash);
			},
			add : function(object) {
				return this.hashs.add(object, true);
			},
			'delete' : set_free,
			get_need : get_need,
			set_need : set_need,
			get_independent : get_independent,
			handle_daemon : handle_daemon
		}, dependency_net.prototype);

		return (dependency_net// JSDT:_module_
		);

	})(CeL);

	(function(_) {
		var need_net = new CeL.dependency_net();
		need_net.daemon_handle = function(object) {
			;
		};

		_.run = function() {
			var index = 1, length = arguments.length;
			// 登記。
			for (; index < length; index++) {
				need_net.set_need(arguments[index - 1], arguments[index]);
			}
			need_net.handle_daemon();
		};
	})(CeL);

}

/*******************************************************************************
 * 
 * <code>

 CeL.set_debug(2);
 var need = new CeL.dependency_net;
 var a=function(){};need.add(a);
 CeL.assert(['13|function (){}_1',need.add(function(){})]);
 need.add(a);
 </code>
 * 
 * <code>

 CeL.set_debug(2);
 var need = new CeL.dependency_net;
 need.set_need('2_1', [ '1_1', '1_2', '1-1', '1:1' ]);
 need.set_need('3_1', '2_1');
 need.set_need('2_2', [ '1_1', '1-1' ]);
 need.set_need('4_1', ['3_1','3_2']);
 need.set_need('1_1', '4_1');
 //	test
 CeL.assert([ , need.get_need('1_1') ]);
 //	test
 need.get_independent();
 //	test
 need.get_independent('2_1');
 //	test
 need.get_independent('4_1');

 </code>
 * 
 */

