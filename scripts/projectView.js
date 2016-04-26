(function(module){

  var projectView = {};

  projectView.populateFilters = function()
  {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).find('title').text();
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        $('#title-filter').append(optionTag);

        val = $(this).attr('data-category');
        optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#title-filter option[value="' + val + '"]').length === 0) {
          $('#title-filter').append(optionTag);
        }
      }
    });
  };


  projectView.handleRatingFilter = function() {
    $('#title-filter').on('change', function() {
      if ($(this).val()) {
        $('div[data-category]').hide();
        var $selectedCategory = $('div[data-category=' + $(this).val() + ']');
        $selectedCategory.show();
      } else {
        $('div[data-category]:not(.template)').show();
      }
    });
  };

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
