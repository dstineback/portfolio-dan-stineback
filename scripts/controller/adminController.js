(function(module) {
  var adminController = {};

  adminController.index = function() {
    $('main > section').hide();
    $('#admin').show()

    repos.requestRepos(repoView.index());
  };

  module.adminController = adminController;
})(window);
