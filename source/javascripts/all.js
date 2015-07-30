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
    $('#content').addClass('loaded');
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




