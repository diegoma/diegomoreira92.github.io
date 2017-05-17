var common = (function () {
	'use strict';

	return {  
		init: function () {
		  // common.ChildHeightFull(".skills-colunm");
		},

		ChildHeightFull: function(selector){
			var parentElem = document.querySelector(selector).parentElement;
			var paretnHeight = parentElem.clientHeight;
			var childs = parentElem.querySelectorAll(selector);

			for (var i = 0; i < childs.length; ++i) {
			  childs[i].setAttribute('style', 'height:' + paretnHeight + 'px');
			}
		}
	};

})();

document.addEventListener('DOMContentLoaded', function() {
	common.init();
});