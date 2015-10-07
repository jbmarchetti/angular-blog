angular.module('jbm.blog')
.directive('ngPosts', ['$http', function($http){
  return {
    restrict : 'E',
    scope: {

    },
    transclude: true,
    templateUrl: function(element, attrs) {
      if ( typeof attrs.templateUrl == 'undefined' ) {
        return 'template/posts.html';
      } else {
        return attrs.templateUrl;
      }
    }
  };
}]);
