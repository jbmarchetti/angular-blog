angular
.module('jbm.angular-blog', [
  'ui.router'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('main.blog', {
      controller:   'BlogCtrl',
      url:          '/blog',
      templateUrl:  'client/views/layout.html',
      abstract: true
    })
    .state('main.blog.index', {
      controller:   'BlogIndexCtrl',
      templateUrl:  'client/views/index.html',
      url:          '',
      ncyBreadcrumb: {
        parent: 'main.homepage',
        label: 'Blog'
      }
    })
    .state('main.blog.by_tag', {
      controller:   'BlogTagCtrl',
      templateUrl:  'client/views/index.html',
      url:          '/tag/:tag',
      ncyBreadcrumb: {
        parent: 'main.blog.index',
        label: '{{tag}}'
      }
    })
    .state('main.blog.show_post', {
      controller:   'BlogShowCtrl',
      templateUrl:  'client/views/show.html',
      url:          '/:slug',
      ncyBreadcrumb: {
        parent: 'main.blog.index',
        label: '{{post.title}}'
      }
    })
    ;
  }
])
;
