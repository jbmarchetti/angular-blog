angular
.module('jbm.blog')
.provider('$jbmBlog', function () {

  this.baseUrl ='/api';
  //var postEndpoint = 'post'

  this.setBaseUrl = function(baseUrl)
  {
    this.baseUrl = baseUrl;
  };

  this.$get = function () {
  };
});
