angular
.module('jbm.blog', [
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('main.blog', {
      //abstract:true,
      controller:   'BlogCtrl',
      url:          '/blog',
      abstract: true
    })
    .state('main.blog.index', {
      //abstract:true,
      controller:   'BlogIndexCtrl',
      templateUrl:  'src/index.html',
      url:          ''
    })
    ;
  }
])
;
