angular.module('jbm.angular-blog')
.directive('jbmBlogPosts', ['$http', function($http){
  return {
    restrict : 'E',
    scope: {
      posts:'='
    },
    transclude: true,
    templateUrl: function(element, attrs) {
      if ( typeof attrs.templateUrl == 'undefined' ) {
        return 'client/views/partials/posts.html';
      } else {
        return attrs.templateUrl;
      }
    },

  };
}])
.directive('jbmBlogPost', ['$http', function(){
  return {
    restrict : 'E',
    scope: {
      post:'='
    },
    transclude: true,
    templateUrl: function(element, attrs) {
      if ( typeof attrs.templateUrl == 'undefined' ) {
        return 'client/views/partials/post.html';
      } else {
        return attrs.templateUrl;
      }
    }
  };
}])
.directive('jbmBlogPostSm', ['$http', function(){
  return {
    restrict : 'E',
    scope: {
      post: '='
    },
    transclude: true,
    templateUrl: function(element, attrs) {
      if ( typeof attrs.templateUrl == 'undefined' ) {
        return 'client/views/partials/post-small.html';
      } else {
        return attrs.templateUrl;
      }
    }
  };
}]);
