$(function() {
  $('#navtogglebutton').on('click', function() {
    $('#navbar').fadeIn();
    if($(this).hasClass('navHidden')) {
      $('#navbar').animate({
        top: -15,
        opacity: 1
      });

      $(this).removeClass('navHidden');
    }
    else if(!$(this).hasClass('navHidden')) {
      $("#navbar").animate({
        top: '-7' + $(this).height(),
        opacity: 0
      });

      $(this).addClass('navHidden');
    }

    $("#bar1").toggleClass('rotateBar1');
    $("#bar2").toggleClass('hideBar2');
    $("#bar3").toggleClass('rotateBar3');
  });
});

function isInViewPort($element) {
  if (typeof jQuery === "function" && $element instanceof jQuery) {
    $element = $element[0];
  }

  var rect = $element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - 20 <= $(window).height() && // because fadeIn elements start with a top value of 20
    rect.right <= $(window).width()
  );
}

function checkAnimation() {
  $('.toFadeInScroll').map(function() {
    // elements only fade in once, unless user refreshes page
    if(isInViewPort($(this)) && !$(this).hasClass('fadedIn')) {
      $(this).animate({
        opacity: 1,
        top: 0
      }, 500);
      $(this).addClass('fadedIn');
    }
  });
}

$(window).on('scroll', function () {
  checkAnimation();
});

$(window).on('load', function () {
  $('.dividerToWiden').animate({
    width: $(window).width() * 0.6
  }, 400, 'linear', function() {
    $('.toSlideUpHeader').animate({
      top: 0
    }, 400, 'linear', function() {
      $('.toFadeIn').map(function() {
        if(isInViewPort($(this))) {
          $(this).animate({
            opacity: 1,
            top: 0
          }, 400, 'linear');
        }
        else {
          $(this).removeClass('toFadeIn');
          $(this).addClass('toFadeInScroll');
        }
      });
    });
  });
});
