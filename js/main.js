var up = true;

$(function() {
  $("#navtogglebutton").on('click', function() {
    if(up) {
      $("#navbar").animate({
        top: 60,
        opacity: 1
      });

      up = false;
    }
    else if(!up) {
      $("#navbar").animate({
        top: '-7' + $(this).height(),
        opacity: 0
      });

      up = true;
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
    rect.bottom <= $.getDocHeight() &&
    rect.right <= $(window).outerWidth()
  );
}

// because (window).height() was off in chrome for some reason
$.getDocHeight = function(){
    return Math.max(
        $(document).height(),
        $(window).height(),
        /* For opera: */
        document.documentElement.clientHeight
    );
};

function checkAnimation() {
  $('.toFadeIn').map(function() {
    // elements only fade in once, unless user refreshes page
    if(isInViewPort($(this)) && !$(this).hasClass('fadedIn')) {
      $(this).animate({
        opacity: 1,
        marginTop: 0
      }, 500);
      $(this).addClass('fadedIn');
    }
  });
}

$(window).scroll(function () {
  checkAnimation();
});

$(window).ready(function (){
  checkAnimation();
});
