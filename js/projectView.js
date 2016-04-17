console.log('projectView works');
var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#rating-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
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
      $('article').hide();
      $('article[data-title="' + $(this).val() + '"]').fadeIn(300);
    } else {
      $('article').fadeIn(300);
      $('article.template').hide();
    }
    $('#rating-filter').val('');
  });
};






projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(300);
  });

  $('.main-nav .tab:nth-of-type(2)').click();
};


$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleRatingFilter();
  projectView.handleTitleFilter();
  projectView.handleMainNav();

});
$();
