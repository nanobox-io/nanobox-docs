//= require_tree .
//= require "jquery-2.1.4.min.js"


////////////////// SHRINKING TOP NAV //////////////////

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header").addClass("small");
    } else {
        $("#header").removeClass("small");
    }
});


/////////////////// CONTENT FADE-IN ///////////////////

$(document).ready(function() {
    setTimeout(function() {
      $('#content').addClass('loaded');
    }, 10);    
});


/////////// OPEN / CLOSE RESPONSIVE CONTENTS ///////////

$(function() {
  $('#contents-btn').on('click', function(e) {
    $('#contents').toggleClass('closed');
    $('#contents-btn').toggleClass('open');
  })
})


/////////////// HIDE UNUSED NAV SECTIONS ///////////////

$(function(){
    $('ul#contents li:has(ul li.active)').addClass('open');
    $('ul#contents li ul.sub li:has(ul.sub)').addClass('more');
});

$(document).ready(function() {
  if (document.documentElement.clientWidth < 864) {
    if($('#contents').hasClass('closed')) {
      $('#contents-btn').removeClass('open');
    };
  }
})


/////////// ADD/REMOVE CLASS ON CONTENTS BTN ///////////

$(window).on('resize', function() {
  if (document.documentElement.clientWidth > 864) {
    if(!$('#contents').hasClass('closed')) {
      $('#contents').addClass('closed');      
      $('#contents-btn').removeClass('open');
    };
  }
  if (document.documentElement.clientWidth < 864) {
    if($('#contents').hasClass('closed')) {
      $('#contents-btn').removeClass('open');
    };
  }
})


////////////// TOGGLE CONTENT BASED ON OS //////////////

$(document).ready(function() {
  $(document).ready(function () {
    if ($("#os-tabs")) {
      var pretag = window.location.href.slice(window.location.href.indexOf('#'));
      var tag = "";
      if (pretag.length > 1) {
          tag = pretag
      };
      if (navigator.appVersion.indexOf("Win") != -1) {
          $("#win-content, #win-tab").addClass("active");
          $("#osx-content").css("display", "none");
      } else if (navigator.appVersion.indexOf("Mac") != -1) {
          $("#osx-content, #osx-tab").addClass("active");
          $("#win-content").css("display", "none");
      } else if (navigator.appVersion.indexOf("Linux") != -1) {
          $("#osx-content, #osx-tab").addClass("active");
          $("#win-content").css("display", "none");
      } else if (navigator.appVersion.indexOf("X11") != -1) {
          $("#osx-content, #osx-tab").addClass("active");
          $("#win-content").css("display", "none");
      }
    }
  })
})

$(function(){
  if (!$("#win-tab").hasClass("active")) {
    $("#win-tab").on("click", function() {
      $("#win-tab").addClass("active");
      $("#osx-tab").removeClass("active");
      $("#osx-content").fadeOut(100);
      setTimeout(function(){
        $("#win-content").fadeIn(100);
      }, 100)
    })
  }
  if (!$("#osx-tab").hasClass("active")) {
    $("#osx-tab").on("click", function() {
      $("#osx-tab").addClass("active");
      $("#win-tab").removeClass("active");
      $("#win-content").fadeOut(100);
      setTimeout(function(){
        $("#osx-content").fadeIn(100);
      }, 100)
    })
  }
})