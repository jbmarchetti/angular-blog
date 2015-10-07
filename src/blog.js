angular
.module('jbm.blog', [
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('main.blog', {
      controller:   'BlogCtrl',
      url:          '/blog',
      templateUrl:  'template/layout.html',
      abstract: true
    })
    .state('main.blog.index', {
      controller:   'BlogIndexCtrl',
      templateUrl:  'template/index.html',
      url:          ''
    })
    .state('main.blog.show', {
      controller:   'BlogShowCtrl',
      templateUrl:  'template/show.html',
      url:          ':slug'
    })
    ;
  }
])
;
