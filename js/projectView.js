(function(module){
console.log('projectView works');
var projectView = {};

projectView.handleMainNav = function() {
  $('nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    var $selectedTab = $(this).attr('data-content');
    $('#' + $selectedTab).fadeIn(300);
  });

  $('nav .tab:nth-of-type(2)').click();
};


projectView.populateFilters = function() {
  $('div[data-category]').each(function() {
    if(!$(this).hasClass('template')) {
      var val = $(this).attr('data-category');
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#rating-filter').append(optionTag);
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};


projectView.handleRatingFilter = function() {
  $('#rating-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn(300);
    } else {
      $('article').fadeIn(300);
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};






projectView.handleTitleFilter = function() {
  $('#category-filter').on('change', function() {
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
  Project.all.forEach(function(instantiatedProject){
    $('#projects').append(instantiatedProject.toMyPortfolio());
  });

};

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.populateFilters();
  projectView.handleRatingFilter();
  projectView.handleTitleFilter();
});
module.Project = Project;
})(window);
