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
        $('#title-filter').append(optionTag);
        if ($('#category-filter option[value="' + val + '"]').length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  projectView.handleRatingFilter = function() {
    $('#title-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn(500);
      } else {
        $('article').fadeIn(300);
        $('article.template').hide();
      }
      $('#category-filter').val('');
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
