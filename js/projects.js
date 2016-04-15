console.log('projects works');
var projects = [];


function Project (opts) {
  for (key in opts) this[key] = opts[key];
};
Project.prototype.toHtml = function() {
  var $source = $('#port-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#port').append(a.toHtml());
});
