//= require_tree .
//= require "jquery-2.1.4.min.js"

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#header").addClass("small");
    } else {
        $("#header").removeClass("small");
    }
});

$(function() {
  $('#contents-btn').on('click', function(e) {
    $('#contents').toggleClass('open');
    $('#contents-btn').toggleClass('open');
  })
})

$(function(){
    $('ul#contents li:has(ul li.active)').addClass('open');
});

$(document).ready(function() {
  if (document.documentElement.clientWidth < 1024) {
    if($('#contents').hasClass('open')) {
      $('#contents').removeClass('open');
      $('#contents-btn').removeClass('open');
    };
  }
})

$(window).on('resize', function() {
  if (document.documentElement.clientWidth > 1024) {
    if(!$('#contents').hasClass('open')) {
      $('#contents').addClass('open');      
      $('#contents-btn').addClass('open');
    };
  }
  if (document.documentElement.clientWidth < 1024) {
    if($('#contents').hasClass('open')) {
      $('#contents-btn').removeClass('open');
      $('#contents').removeClass('open');
    };
  }
})




