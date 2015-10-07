angular
.module('jbm.blog', [
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('blog', {
      //abstract:true,
      controller:   'BlogCtrl',
      templateUrl:  'index.html',
      url:          '/blog'
    })
    ;
  }
])
;
