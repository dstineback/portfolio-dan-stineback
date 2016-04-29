(function(module) {
  var repoView = {};
  var ui = function() {
    var $admin = $('#admin');
    $admin.find('#hubData').empty();
    $admin.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').text());
  repoView.index = function() {
    ui();
    $('#admin div').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
