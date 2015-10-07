angular.module('jbm.blog').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/layout.html',
    "<div ui-view></div>\n"
  );


  $templateCache.put('templates/post-directive.html',
    ""
  );


  $templateCache.put('templates/posts-directive.html',
    "posts.htmlk tests\n"
  );

}]);
