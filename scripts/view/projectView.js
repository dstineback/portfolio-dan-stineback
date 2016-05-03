(function(module){

  var projectView = {};
  
  projectView.initIndexPage = function(){
    if($('#projects section').length === 0) {
      Project.all.forEach(function(instantiatedProject){
        $('#projects').append(instantiatedProject.toMyPortfolio());
      });
    };
  };

  $(document).ready(function() {
    // projectView.handleMainNav();
    projectView.populateFilters();
    projectView.handleRatingFilter();
  });


  module.projectView = projectView;
})(window);
