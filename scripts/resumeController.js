(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    $('main > section').hide();
    $('resume').show();
  };
  module.resumeController = resumeController
}); (window);
