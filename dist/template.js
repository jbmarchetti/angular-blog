angular.module('angular-my-directives').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/posts.html',
    "posts.htmlk tests\n"
  );

}]);
