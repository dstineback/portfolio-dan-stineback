console.log('it works');
var projects = [];

function Project(opts){
  this.title = opts.title;
  this.developer = opts.developer;
  this.date = opts.date;
  this.projectURL = opts.projectURL;
  this.projectDescription = opts.projectDescription;
}

Project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newArticle.removeClass('template');
  if (!this.date) {
    $newArticle.addClass('draft');
  }

  $newProject.attr('data-category', this.category);
  $newArticle.attr('data-developer', this.developer);

  $newArticle.find('.byline a').html(this.author);
  $newProject.find('.byline a').attr('href', this.projectURL);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.date);
  $newProject.find('time[pubdate]').attr('title', this.date);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.date)) - (new Date(a.date));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#articles').append(a.toHtml());
});
