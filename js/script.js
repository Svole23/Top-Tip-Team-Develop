$(document).ready(function () {

  $(".cookie-button").click(function(){
    $(".cookie").removeClass("show");
  });

  $(".cookie-link").click(function(){
    $(".gdpr-container").addClass("show");
  });

  $("#forgot-password-button").click(function(){
    $(".forgot-password-popup").addClass("show");
    setTimeout(function(){
      $(".forgot-password-popup").removeClass("show");
    },3000)
  });

  $(".submit-feedback").click(function(){
    $(".feedback-popup").addClass("show");
    setTimeout(function(){
      $(".feedback-popup").removeClass("show");
    },3000)
  });

  $('#section-1-sample').click(function(){
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#video").offset().top
    }, 500);
  });

  $(".gdpr-button-close").click(function(){
    $(".gdpr-container").removeClass("show");
  });

  $(".header-link-right-container").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".header-sign-up-container").addClass("show");
    $(".header-log-in-container").addClass("show");
  });

  $(".log-in-close").click(function(event){
    $(".header-link-right-container").removeClass("expand-right");
    $(".header-link-right-container .header-link").removeClass("hide");
    $(".header-sign-up-container").removeClass("show");
    $(".header-log-in-container").removeClass("show");
    event.stopPropagation();
  });

  $("#login-button").click(function(){
    window.location.href='user-home.html';
  });

  $("#logout-button").click(function(){
    window.location.href='index.html';
  });

  $(".sc-button").click(function(){
    $(".sc-form-container").addClass("show")
  });

  $(".sc-form-close").click(function(){
    $(".sc-form-container").removeClass("show")
  });

  $(".footer-disclaimer-link").click(function(){
    $(".disclaimer-container").addClass("show")
  });

  $(".s2-betting-button").click(function(){
    $(".betting-history-container").addClass("show")
  });

  $(".bh-button-close").click(function(){
    $(".betting-history-container").removeClass("show")
  });

  $(".disclaimer-button-close").click(function(){
    $(".disclaimer-container").removeClass("show")
  });

  $(".footer-terms-link").click(function(){
    $(".terms-container").addClass("show")
  });

  $(".terms-button-close").click(function(){
    $(".terms-container").removeClass("show")
  });

  $(".footer-privacy-policy-link").click(function(){
    $(".privacy-policy-container").addClass("show")
  });

  $(".privacy-policy-button-close").click(function(){
    $(".privacy-policy-container").removeClass("show")
  });

  $(".s5-signup-button").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".header-sign-up-container").addClass("show");
    $(".header-log-in-container").addClass("show");
  });

  $("#section-1-sign-up").click(function(){
    $(".header-link-right-container").addClass("expand-right");
    $(".header-link-right-container .header-link").addClass("hide");
    $(".header-sign-up-container").addClass("show");
    $(".header-log-in-container").addClass("show");
  });

  $(".header-link-left-container-account").click(function(){
    $(".header-link-left-container-account").addClass("expand-left");
    $(".header-link-left-container-account .header-link").addClass("hide");
    $(".sign-up-container").addClass("show");
  });

  $(".account-close").click(function(event){
    $(".header-link-left-container-account").removeClass("expand-left");
    $(".header-link-left-container-account .header-link").removeClass("hide");
    $(".sign-up-container").removeClass("show");
    event.stopPropagation()
  });

  $(".header-link-right-container-logout").click(function(){
    window.location.href='index.html';
  });

  $(".match-button").click(function(){
    window.location.href='match.html';
  });

  $("#Bundes").click(function(){
    window.location.href='match-list.html';
  });

  $("#Premier").click(function(){
    window.location.href='match-list.html';
  });

  $(".video-button-icon-play").click(function(){
    $("#video").get(0).play()
    $(".video-button-icon-play").css({"visibility": "hidden","height": "0%", "width": "0%","opacity": "0"});
    $(".video-button-icon-pause").css({"visibility": "visible","height": "100%", "width": "100%", "opacity": "1"});

    if(width > 1200) {
      $(".video-button-container").removeClass("button-opacity-important")
    }
  });


  $(".video-button-container").mouseenter(function(){
      $(".video-button-container").removeClass('button-opacity');
  });
  $(".video-button-container").mouseleave(function(){
      $(".video-button-container").addClass('button-opacity');
  });

  $(".video-button-icon-pause").click(function(){
    $("#video").get(0).pause()
    $(".video-button-icon-play").css({"visibility": "visible", "height": "100%", "width": "100%","opacity": "1"});
    $(".video-button-icon-pause").css({"visibility": "hidden","height": "0%", "width": "0%","opacity": "0"});
    if(width > 1200) {
      $(".video-button-container").addClass("button-opacity-important")
    }
  });

  let videochecker = $("#video").get(0);
  if(!videochecker.pause() && videochecker.length > 0) {
    $(".video-button-icon-play").css({"visibility": "hidden","height": "0%", "width": "0%","opacity": "0"});
    $(".video-button-icon-pause").css({"visibility": "visible","height": "100%", "width": "100%", "opacity": "1"});
  }
  else {
    $(".video-button-icon-play").css({"visibility": "visible", "height": "100%", "width": "100%","opacity": "1"});
    $(".video-button-icon-pause").css({"visibility": "hidden","height": "0%", "width": "0%","opacity": "0"});
  }

  $(".header-link-left-container-back").click(function(){
    window.location.href='user-home.html';
  });

  $(".match-time").click(function(){
    $(".match-time .match-details").addClass("show")
  });

  $(".match-time .match-details").click(function (event) {
    $(".match-time .match-details").removeClass("show");
    $(".match-time .match-statistic").addClass("show");
    event.stopPropagation()
  });

  $(".match-time .match-statistic").click(function (event) {
    $(".match-time .match-statistic").removeClass("show");
    event.stopPropagation()
  });

  $(".bet-button").click(function(){
    $(".betting-choices-container").addClass("show");
  });

  $(".betting-choices-button-close").click(function(){
    $(".betting-choices-container").removeClass("show")
  });

  $(".match-list-link").click(function(){
    window.location.href='match.html';
  });
  $('.hs-content-container').append('<p class="hs-read-more">Read More</p>');
  let width = $(window).width();
  if (width > 1200){
    $('.hs-read-more').remove();
    $(".rounded-hover").on({
      mouseenter:function(){
        $(this).css({'padding': '15px', 'cursor':'pointer','border':'15px solid #38003c'});
        $(this).find('.hs-content-container').css('background','rgba(255,255,255,0.7)');
        $(this).find('.hs-title-container:after').css('background','#38003c');
        $(this).find('.hs-text-under').css('background','#38003c');
        $(this).find('.hs-text').css({'color': '#38003c', 'display': 'block', 'visibility': 'visible'});
        $(this).find('.hs-title').css('color', '#38003c');
      },
      mouseleave:function(){
        $(this).css({'padding': '0', 'cursor':'pointer','border':'15px solid #00ff85'});
        $(this).find('.hs-content-container').css('background','#38003c');
        $(this).find('.hs-title-container:after').css('background','#38003c');
        $(this).find('.hs-text-under').css('background','white');
        $(this).find('.hs-title').css('color', 'white');
        $(this).find('.hs-text').css('color', 'white');
      }
    })
  }
  if (width < 700){
    $(".rounded-hover").click(function(){
      $(this).toggleClass('rounded-click');
      $(this).find('.hs-content-container').toggleClass('hs-content-container-click');
      $(this).find('.hs-text').toggleClass('hs-text-click');
      $(this).find('.hs-title').toggleClass('hs-title-click');
      $(this).find('.hs-text-under').toggleClass('hs-text-under-click');
      if($(this).hasClass("rounded-click")) {
        $('.hs-read-more').remove();
      }
      else {
        $('.hs-content-container').append('<p class="hs-read-more">Read More</p>');
      }
    });
  }
});
