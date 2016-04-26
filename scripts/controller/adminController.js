(function(module) {
  var adminController = {};

  // aboutController.index = function() {
  //   $('main > section').hide();
  //   $('#admin').show();
  // };

  adminController.index = function() {
    $('#admin').show().siblings().hide();

    repos.requestRepos(repoView.index());
  };

  module.adminController = adminController;
})(window);
