console.log('it works');
var projects = [];

function Project(opts){
  this.title = opts.ttile;
  this.developer = opts.developer;
  this.date = opts.date;
  this.projectURL = opts.projectURL;
  this.projectDescription = opts.projectDescription;
}

Project.prototype.toHtml = function(){
  var $newProject = $('projects.project-location').clone();

  $newProject.attr('data-category', this.category);
  $newProject.find('h1').html(this.title);
  $newProject.find('address').html('<a href="' + this.projectURL + '">' + this.developer + '</a>');
  $newProject.find('.project-body').html(this.body);
  $newProject.append('<hr>');
  $newProject.removeClass('project-location');
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#project-container').append(a.toHtml());
});
