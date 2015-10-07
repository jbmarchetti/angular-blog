angular.module('jbm.blog').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/posts.html',
    "posts.htmlk tests\n"
  );

}]);
