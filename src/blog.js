angular
.module('jbm.blog', [
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {


    var scripts = document.getElementsByTagName("script");
   var currentScriptPath = scripts[scripts.length-1].src;
   console.log("currentScriptPath:"+currentScriptPath);
   var baseUrl = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1);
   console.log("QCRIPTS baseUrl:"+baseUrl);



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
      templateUrl:  baseUrl+'index.html',
      url:          ''
    })
    ;
  }
])
;
