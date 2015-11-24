angular
.module('jbm.angular-blog')
.factory('RemoteISPosts', function (Analytics, $http) {

  var RemoteIS = function( endpoint, limit, sort, filter) {
    this.items = [];
    this.busy = false;
    this.end = false;
    this.filter = filter || {};
    this.limit = limit;
    this.filter.limit = limit;
    this.filter.skip = 0;
    this.filter.order = sort;
    this.sort = sort;
    this.endpoint = endpoint;
  };

  // RemoteIS.prototype.newSort = function() {
  //   this.filter.order = this.sort;
  //   for (var i in this.where){
  //     if (this.where[i] !== ''){
  //       this.filter.where[i]=this.where[i];
  //     }
  //     else {
  //       delete(this.filter.where[i]);
  //     }
  //   }
  //   //this.filter.where = this.where;
  //   this.items = [];
  //   this.filter.skip = 0;
  //   this.end = false;
  //   this.nextPage();
  // };

  RemoteIS.prototype.nextPage = function() {
    if (this.busy || this.end){
      return;
    }
    this.busy = true;

    $http({
      method: 'GET',
      url: this.endpoint+'?filter='+JSON.stringify(this.filter)
    })
    .then(function(results) {
      if (results.data.length !== 0)
      {
        var category = '';
        for (var i=0; i< results.data.length; i++){
          this.items.push(results.data[i]);
        }
        this.filter.skip += this.limit;
      }
      else {
        this.end = true;
      }
      this.busy = false;
    }.bind(this)
  );

};

return RemoteIS;
});
