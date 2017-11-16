/*
 * @Author: Jacky Chen
 * @Date: 2017-09-26 14:10:09 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-09-26 15:57:53
 */

;( function(global, factory) {

	if (typeof module === 'object' && typeof module.exports === 'ojbect') {
		module.exports = global.document ?
			factory(global, true) : 
			function(w) {
				if (!w.document) {
					throw new Error('ksQuery requires a window with a document')
				}
				return factory(w);
			}
	} else {
		factory(global);
	}
	
})(typeof window !== 'undefined' ? window : this, function(window) {
	
	var document = window.document;

	var arr = [];
	var slice = arr.slice;
	var concat = arr.concat;
	var push = arr.push;
	var indexOf = arr.indexOf;

	var class2type = {};
	var toString = class2type.toString;
	var hasOwn = class2type.hasOwnProperty;






	var	toString = Object.prototype.toString,
		strArray = '[object Array]',
		strFunction = '[object Function]',
		strObject = '[object Object]',
		trimExpr = /^(\s|\u00A0)+|(\s|\u00A0)+$/g; //  简单版: /(^\s*)|(\s*$)/g    jquery版: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
		
	var ksQuery = function(selector) {
			return new ksQuery.fn.init(selector);
	};

	ksQuery.fn = ksQuery.prototype = {
			name: 'Jacky',
			init: function(selector) {
			this.selector = selector;
			sizzle(this, selector);
			return this;
		},
		constructor: ksQuery,

		each: function(callback) {
			return ksQuery.each(this, callback);
		},

		append: function() {

		},
		prepend: function() {

		},
		appendTo: function() {

		},
		
		parent: function() {
			return dir.call(this, 'parentNode', 0, selector);
		},
		parents: function() {
			
		},
		parentsUntil: function() {
			
		}
	};

	var sizzle =  function(newA, selector){
		var domlist = document.querySelectorAll(selector);
		Array.prototype.push.apply(newA, domlist);
		return newA;
	};

	ksQuery.fn.init.prototype = ksQuery.fn;

	ksQuery.extend = ksQuery.fn.extend = function() {
		var options,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length;

		//只有一个参数，就是对jQuery自身的扩展处理
		//extend,fn.extend
		if (i === length) {
			target = this; //调用的上下文对象jQuery/或者实例
			i--;
		}
		for (; i < length; i++) {
			if ((options = arguments[i]) != null) {
				for (var name in options) {
					target[name] = options[name];
				}
			}
		}
		return target;
	};

	ksQuery.extend({

		each: function(obj, callback){
			var value,
				i = 0,
				length = obj.length,
				isArray = ksQuery.isArray( obj );

			if ( isArray ) {
				console.log('in');
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}

			return obj;
		},

		isArray: Array.isArray,

		isFunction: function(obj, type) {
			return toString.call(obj) === strFunction;  // strFunction = '[object Function]'
		},

		isObject: function(obj){
			return typeof obj == 'object' && toString.call(obj) === strObject;  // strObject = '[object Object]'
		},

		trim: function(str){
			if(String.prototype.trim) {
				return str.trim();
			}
			return str.replace(trimExpr, '');
		},

		type: function(obj) {
			if (obj == null) {
				return obj + '';
			}

			return typeof obj === 'object' || typeof obj === 'function' ?
				class2type[toString.call(obj)] || 'object' :
				typeof obj;
		},

		/* Demo for myself */
		removeAllImgs : function() {
			var imgs = document.querySelectorAll('img');
			for(var i = 0; i < imgs.length; i++ ) {
				var img = imgs[i];
				if(img.remove) {
					img.remove();
				}else {
					imgs[i].parentNode.removeChild(img);
				}
			}
		}
	});

	// ksQuery.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function(i, name) {
	// 	class2type['[object ' + name + ']'] = name.toLowerCase();
	// })

	function dir(elem, dir, until) {
		var arr = [];
		
		
		return arr;
	}


	ksQuery.fn.extend({
		/*setName: function(myName) {
			this.myName = myName;
			return this;
		},
		getName: function() {
			console.log(this.myName);
			return this;
		}*/
	});
	

	if (typeof define === 'function' && define.amd) {
		define('ksQuery', [], function() {
			return ksQuery;
		});
	}

	window.ksQuery = window.$ = ksQuery;

	return ksQuery;
});


