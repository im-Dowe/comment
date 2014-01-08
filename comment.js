/**
 * Created by Du on 13-12-25.
 * angularJS 构建评论组件
 * angularJS -v 1.2.6
 */
/*var comment = (function(){
	var head = document.getElementsByTagName('head'),
		style = document.createElement('link');
	style.setAttribute('href','http://assets.dxycdn.com/app/info/css/layout.css');
	style.setAttribute('type','text/css');
	style.setAttribute('rel','stylesheet');
	head[0].appendChild(style);

	var myComment = {
		init: function(id){
			var box = document.getElementById(id);
			if(box){

			}
		},
		create: function(){
			var app = angular.module('comment',[]);
			app.controller('comCont',['$scope',function($scope){
				$scope.comTxt = '';
				$scope.postComment = function(){
					alert($scope.comTxt);
				}
			}]);
		}
	};
	return myComment;
})();*/

/*
var myJs = document.createElement('script');
myJs.type = 'text/javascript';
myJs.src = 'http://assets.dxycdn.com/docs/plugin/comment/comment.js';
document.getElementsByTagName('head')[0].appendChild(myJs);
*/

var head = document.getElementsByTagName('head'),
	style = document.createElement('link');
style.setAttribute('href','http://assets.dxycdn.com/app/info/css/layout.css');
style.setAttribute('type','text/css');
style.setAttribute('rel','stylesheet');
head[0].appendChild(style);

var comment = angular.module('commentApp',[]);

comment.factory('pageComment',['$http',function($http){
	var commentData = {},
		pathname = window.location.pathname;

	function getPageId(pathname){
		if(pathname.indexOf('/') == -1){
			return pathname;
		}else{
			return getPageId(pathname.slice(pathname.indexOf('/')+1));
		}
	}
	var id = getPageId(pathname);
	$http({
		method: 'get',
		url: '/webservices/interface/gotcomment/'+ 62649 //id
	}).success(function(data){
			console.log(data);
		commentData = data;
	});

	return commentData;
}]);

comment.controller('commentCtrl',['$scope','pageComment',function($scope,pageComment){
	//var data = pageComment;
	var data = {"rowcount":3,"contents":[{"id":255318,"body":"以前听说过类似病例，如果能说外语那算不算因祸得福呢&hellip;&hellip;","username":"陈济堂","created":"2013-12-09 19:37:12.0","digg":0,"bury":0,"head":"http://i.dxy.cn/pub/avatar/48/陈济堂","refComment":{"body":"我曾经遇到一个病人类似情况，山东人农民，脑梗后出现东北口音，很标准","username":"我爱蛋塔","head":"http://i.dxy.cn/pub/avatar/48/我爱蛋塔"}},{"id":249118,"body":"又学到新知识了，谢谢","username":"oscar_chan","created":"2013-11-06 20:33:54.0","digg":0,"bury":0,"head":"http://i.dxy.cn/pub/avatar/48/oscar_chan"},{"id":249039,"body":"我曾经遇到一个病人类似情况，山东人农民，脑梗后出现东北口音，很标准","username":"我爱蛋塔","created":"2013-11-06 10:48:19.0","digg":0,"bury":0,"head":"http://i.dxy.cn/pub/avatar/48/我爱蛋塔"}],"status":1}

	$scope.comment = data;

}]);






