(function(module){

  Project.prototype.toMyPortfolio = function(){
    var template = Handlebars.compile($('#projects-template').html());
    this.daysAgo = parseInt((new Date() - new Date(this.date)) / 60 / 60 / 24 / 1000);
    return template(this);
  };


  Project.all = [];

  Project.loadAll = function(dataFromJSON){
    dataFromJSON.sort(function(a,b){
      return (new Date(b.date)) - (new Date(a.date));
    });
    dataFromJSON.forEach(function(ele){
      Project.all.push(new Project(ele));
    });
  };

  Project.fetchAll = function(callback){
    $.ajax({
      type: 'HEAD',
      url: 'scripts/projectData.json',
      success: function(data, message, xhr){
        var eTag = xhr.getResponseHeader('eTag');
        if (eTag === localStorage.eTag){
          Project.loadAll(JSON.parse(localStorage.stashedProjectData));
          // projectView.initIndexPage();
          callback();
        } else {
          $.getJSON('scripts/projectData.json', function(data){
            Project.loadAll(data);
            localStorage.stashedProjectData = JSON.stringify(data);
            localStorage.eTag = eTag;
            // projectView.initIndexPage();
            callback();
          });
        }
      }
    });
  };


  module.Project = Project;
})(window);
