(function(module) {
  var projectController = {};

  projectController.loadById = function(ctx, next) {
    var projectData = function(project) {
      ctx.project = project;
    };
  };

  projectController.index = function(ctx, next) {
    // Project.fetchAll(projectView.initIndexPage);
    // $('main > section').hide();
    // $('#projects').show();

    projectView.index(ctx.articles);
  };



  module.projectController = projectController;
})(window);
