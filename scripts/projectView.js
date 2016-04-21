(function(module){

  var projectView = {};

  projectView.handleMainNav = function() {
    $('nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      var $selectedTab = $(this).attr('data-content');
      $('#' + $selectedTab).fadeIn(500);
    });
    $('nav .tab:nth-of-type(2)').click();
  };
  projectView.populateFilters = function() {
    $('div[data-category]').each(function() {
      if(!$(this).hasClass('template')) {
        var val = $(this).attr('data-category');
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        // $('#title-filter').append(optionTag);
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
        var $selectedCategory = $('div[data-category=' + $(this).val() + ']')
        $selectedCategory.show();
      } else {
        $('div[data-category]:not(.template)').show();
      }
    });
  };

  projectView.initIndexPage = function(){
    Project.all.forEach(function(instantiatedProject){
      $('#projects').append(instantiatedProject.toMyPortfolio());
    });
  };

  $(document).ready(function() {
    projectView.handleMainNav();
    projectView.populateFilters();
    projectView.handleRatingFilter();
  });


  module.projectView = projectView;
})(window);
