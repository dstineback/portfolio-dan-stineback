
var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

projectView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {

      $('article').hide();
      $('article').filter('article[data-author="' + $(this).val() + '"]').fadeIn(300);

    } else {

      $('article').fadeIn(300);
      $('.template').hide();
    }
    $('#category-filter').val('');
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article').filter('article[data-category="' + $(this).val() + '"]').fadeIn(300);

    } else {
      $('article').fadeIn(300);
      $('.template').hide();
    }
    $('#author-filter').val('');
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + ($(this).data('content'))).fadeIn(300);
  });

  $('.main-nav .tab:first').click();
};

projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a', function() {
    event.preventDefault();
    console.log(this);
    $('.article-body *:nth-of-type(n+2)').fadeIn(300);
  });
};

$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleAuthorFilter();
  projectView.handleCategoryFilter();
  projectView.handleMainNav();
  projectView.setTeasers();
});
$();
