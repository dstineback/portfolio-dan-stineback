(function(module) {
  var aboutController = {};

  // aboutController.index = function() {
  //   $('main > section').hide();
  //   $('#about').show();
  // };

  aboutController.index = function() {
    $('#about').show().siblings().hide();

    repos.requestRepos(repoView.index());
  };

  module.aboutController = aboutController;
})(window);
