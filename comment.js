/**
 * Created by Du on 13-12-25.
 * angularJS 构建评论组件
 * angularJS -v 1.26
 */

var comment = (function(){
	var head = document.getElementsByTagName('head'),
		style = document.createElement('link');
	style.setAttribute('src','style.css');
	style.setAttribute('type','text/css');
	head[0].appendChild(style);

	var myComment = {
		init: function(id){
			var box = document.getElementById(id);
			if(box){

			}
		}
	};
	return myComment;
})();


