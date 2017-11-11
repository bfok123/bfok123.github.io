$(function() {
  $('#navtogglebutton').on('click', function() {
    if($(this).hasClass('navHidden')) {
      $('#navbar').animate({
        opacity: 1
      }, 0)
      .animate({
        height: '100%'
      }, 400)

      $(this).removeClass('navHidden');
    }
    else if(!$(this).hasClass('navHidden')) {
      $("#navbar").animate({
        height: 0
      }, 400)
      .animate({
        opacity: 0
      }, 0)

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
    rect.bottom - 20 <= $(window).innerHeight() && // because fadeIn elements start with a top value of 20
    rect.right <= $(window).innerWidth()
  );
}

function checkAnimation() {
  $('.toFadeInScroll').map(function() {
    // elements only fade in once, unless user refreshes page
    if(isInViewPort($(this)) && !$(this).hasClass('fadedIn')) {
      $(this).animate({
        opacity: 1,
        top: 0
      }, 400, 'linear');
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
