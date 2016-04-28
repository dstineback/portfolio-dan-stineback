(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.get('/github/users/dstineback/repos' +
      '?per_page=10' +
      '&sort=updated')
      .done(function(data) {
        repos.all = data;
      })
      // type: 'GET',
      // headers: {'Authorization': 'token ' + githubToken},
      // success: function(data){
      //   data.forEach(function(data){
      //     repos.all.push(data);
      //   });
      .done(callback);
  };


  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
