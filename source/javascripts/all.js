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


