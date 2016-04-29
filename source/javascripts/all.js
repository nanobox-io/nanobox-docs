//= require_tree .
//= require "_jquery-2.1.4.min.js"
//= require "_waypoints.min.js"
//= require "_bodymovin.js"


////////////////// SHRINKING TOP NAV //////////////////

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("#header").addClass("small");
    $("#navigation").addClass("shift");
  } else {
    $("#header").removeClass("small");
    $("#navigation").removeClass("shift");
  }
});


/////////// OPEN / CLOSE RESPONSIVE CONTENTS ///////////

$(function() {
  $('#contents-btn').on('click', function(e) {
    $('#contents').toggleClass('closed');
    $('#contents-btn').toggleClass('open');
  })
})

//////// TOGGLE OPEN / CLOSE CONTENTS SECTIONS ////////

$(function() {
  $('span.nav-toggle').on('click', function(e) {
    $(this).closest('li').toggleClass('open')
  })

  // SHOWS WHEN A DOC IS BURIED IN A CLOSED SECTION
  $('#navigation li:has(.active)').on('click', function(e) {
    if (!$(this).hasClass('open')) {
      $(this).addClass('buried');
    }
    else {
      $(this).removeClass('buried')
    }
  })
})


/////////////// HIDE UNUSED NAV SECTIONS ///////////////

$(function(){
  $('ul#contents li:has(ul li.active)').addClass('open');
  $('ul#contents li ul.sub li:has(ul.sub)');
});


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


////////////////// TOGGLE OS CONTENT //////////////////

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


/////// REPLACE MISSING IMAGES WITH PLACEHOLDER ///////

$(function(){
  $('img').attr('onerror', 'this.src="/images/image-coming.png"');
});


///////// TOUCH-SCREEN SPECIFIC FUNCTIONALITY /////////

//touch/mobile detection
if (
  navigator.userAgent.match(/Phone/i) ||
  navigator.userAgent.match(/DROID/i) ||
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/) ||
  navigator.userAgent.match(/Windows Phone/i) ||
  navigator.userAgent.match(/ZuneWP7/i) ||
  navigator.userAgent.match(/IEMobile/i) ||
  navigator.userAgent.match(/Tablet/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/Kindle/i) ||
  navigator.userAgent.match(/Playbook/i) ||
  navigator.userAgent.match(/Nexus/i) ||
  navigator.userAgent.match(/Xoom/i) ||
  navigator.userAgent.match(/SM-N900T/i) || //Samsung Note 3
  navigator.userAgent.match(/GT-N7100/i) || //Samsung Note 2
  navigator.userAgent.match(/SAMSUNG-SGH-I717/i) || //Samsung Note
  navigator.userAgent.match(/SM-T330NU/i) //Samsung Tab 4
){ var touch_device = true; }


////////////////// LOAD ANIMATED SVGs //////////////////

function loadAnimation(name, parent, path) {
  var animData = {
    name: name,
    wrapper: document.getElementById(parent),
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: path
  };
  var anim = bodymovin.loadAnimation(animData);
}

function svgAnimation(name, filename) {
  loadAnimation(name, name, '/images/animated-svgs/'+filename);
  var anim = name
  $(document.getElementById(name)).waypoint(function(){
    bodymovin.play(name);
    // Offset sets the percentage of the viewport that triggers the animation
  }, {offset: '40%' });

  // Appends the replay button
  $(document.getElementById(name)).append('<a class="replay" id="'+name+'" title="Replay"><img src="/images/replay-icon.svg"></a>')

  $('#' + name +'.replay').click(function(){
    bodymovin.stop(name);
    bodymovin.play(name);
  })
}


$(document).ready(function() {

  ////////////// ADD LINKS TO ALL HEADINGS //////////////

  $("h2, h3, h4").each(function() {
    var link = "<a href=\"#" + $(this).attr("id") + "\"></a>"
    $(this).wrapInner( link );
  })


  //////////////////// SMOOTH SCROLL ////////////////////

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 400, 'swing', function () {
      window.location.hash = target;
    });
  });


  /////////////// HIDE UNUSED NAV SECTIONS ///////////////
  // Works in conjuction with lines

  if (document.documentElement.clientWidth < 864) {
    if($('#contents').hasClass('closed')) {
      $('#contents-btn').removeClass('open');
    };
  }


  /////////////////// CONTENT FADE-IN ///////////////////

  setTimeout(function() {
    $('#content').addClass('loaded');
  }, 10);

  //////////////// OPEN ACTIVE CATEGORY ////////////////

  $('#navigation ul > li.active').addClass('open')

  ///////// AUTO-SCROLL NAV TO ACTIVE NAV ITEM /////////

  var activeNav = $('.active');
	if(activeNav) {
    var main = $("#navigation"), t = main.offset().top;
    main.scrollTop(activeNav.position().top - t);
	}

  ////////////// TOGGLE OS CONTENT ON LOAD //////////////

  $(document).ready(function() {
    if ($("#os-tabs")) {
      var pretag = window.location.href.slice(window.location.href.indexOf('#'));
      var tag = "";
      if (pretag.length > 1) {
          tag = pretag
      };
      if (navigator.appVersion.indexOf("Win") != -1) {
        $("#win-tab").addClass("active");
        $("#osx-content").css("display", "none");
      } else {
        $("#osx-tab").addClass("active");
        $("#win-content").css("display", "none");
      }
    }
  })

  ////////// CHANGES TEXT FOR INTERACTIVE SVGs //////////
  if(touch_device){
    $(".interactive-svg").addClass("touch");
  }

})
