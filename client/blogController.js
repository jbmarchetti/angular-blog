
angular.module('jbm.angular-blog')
.controller('BlogCtrl', function ($scope, $http, $state) {

  /*Get latests posts */


  $http({
    method: 'GET',
    url: '/api/posts?filter={"order":"created_at DESC", "limit":5}'
  }).then(function successCallback(response) {
    $scope.latest_posts = response.data;
  }, function errorCallback(response) {

  });


  $http({
    method: 'GET',
    url: '/api/posts/distinct_tags'
  }).then(function successCallback(response) {
    var tags = response.data;

    for (var t in tags)
    {
      tags[t].link = $state.href("main.blog.by_tag",{tag: tags[t].text});
    }
    $('#tags-container').jQCloud(tags);


  }, function errorCallback(response) {

  });


})
.controller('BlogIndexCtrl', function ($scope, RemoteISPosts, $http) {

  $scope.remoteIS = new RemoteISPosts('/api/posts', 10, 'created_at DESC');

  //
  //
  //
  //
  // $scope.posts= [];
  // $http({
  //   method: 'GET',
  //   url: '/api/posts?filter={"order":"created_at DESC"}'
  // }).then(function successCallback(response) {
  //   $scope.posts = response.data;
  // }, function errorCallback(response) {
  //
  // });

})
.controller('BlogTagCtrl', function ($scope, RemoteISPosts, $http, $stateParams) {

  $scope.tag = $stateParams.tag;

  $scope.remoteIS = new RemoteISPosts('/api/posts', 10, 'created_at DESC', {'where': {'tags.value': $stateParams.tag}});

  //
  //
  //
  //
  // $scope.posts= [];
  // $http({
  //   method: 'GET',
  //   url: '/api/posts?filter={"order":"created_at DESC"}'
  // }).then(function successCallback(response) {
  //   $scope.posts = response.data;
  // }, function errorCallback(response) {
  //
  // });

})
.controller('BlogShowCtrl', function ($stateParams, $scope, $http) {
  $scope.post = null;

  $http({
    method: 'GET',
    url: '/api/posts/findOne?filter={"where":{"slug":"'+$stateParams.slug+'"}}'
  }).then(function successCallback(response) {
    $scope.post = response.data;
  }, function errorCallback(response) {

  });

})
;
