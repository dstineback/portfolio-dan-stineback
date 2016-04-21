(function(module){

  var projects = [];

  function Project (opts) {
    this.developer = opts.developer;
    this.projectUrl = opts.projectUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.date = opts.date;
  }

  function Project (opts) {
    for (key in opts) this[key] = opts[key];
  };
  Project.prototype.toHtml = function() {
    var $source = $('#port-template').html();
    var template = Handlebars.compile($source);
    return template(this);
  };
  projects.forEach(function(a){
    $('#port').append(a.toHtml());
  });
  module.Project = Project;
})(window);
