console.log('projects works');
var projects = [];

function Project(opts){
  this.title = opts.title;
  this.developer = opts.developer;
  this.date = opts.date;
  this.projectURL = opts.projectURL;
  this.projectDescription = opts.projectDescription;
  this.category = opts.category;
}

Project.prototype.toHtml = function(){
  console.log('project proto starts');
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  if (!this.date) {
    $newProject.addClass('draft');
  }

  $newProject.attr('data-category', this.category);
  $newProject.attr('data-developer', this.developer);

  $newProject.find('.byline a').html(this.developer);
  $newProject.find('.byline a').attr('href', this.projectURL);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.date);
  $newProject.find('time[pubdate]').attr('title', this.date);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  console.log('project proto stops');
  return $newProject;

};

projectData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#section-one').append(a.toHtml());
});
