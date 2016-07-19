(function(module){
  var projectView = {};

  var render = function(projects) {
    var template = Handlebars.compile($('#projects-template').html());
    this.daysAgo = parseInt((new Date() - new Date(this.date)) / 60 / 60 / 24 / 1000);
    return template(this);

  };

  projectView.initIndexPage = function(){
    if($('#projects section').length === 0) {
      Project.all.forEach(function(instantiatedProject){
        $('#projects').append(instantiatedProject.toMyPortfolio());
      });
    };
  };

  projectView.index = function(projects) {
    $('#projects-template').show().siblings().hide();

    // $('#porjects article').remove();
    // projects.forEach(function(a) {
    //   $('#projects').append(render(a));
    // });
  };


  module.projectView = projectView;
})(window);
