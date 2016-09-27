//= require_tree .
//= require "_jquery-2.1.4.min.js"
//= require "_is.min.js"
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

////////////////// TOGGLE OS CONTENT //////////////////

$(function(){
  $('.os-tabs li').click(function(){
    var oldActive  = '#'+$('.os-tabs li.active').attr('id')
    var newActive  = '#'+$(this).attr('id')
    var oldContent = oldActive+'-content'
    var newContent = newActive+'-content'

    // Removes and sets active class on the nav buttons
    $(this).addClass('active');
    $(oldActive).removeClass('active');

    // Toggles the corresponding content
    $(oldContent).fadeOut(100);
    setTimeout(function(){
      $(newContent).insertAfter('.os-tabs');
      $(newContent).fadeIn(100)
    }, 50)
  })
})

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


/////// REPLACE MISSING IMAGES WITH PLACEHOLDER ///////

$(function(){
  $('img').attr('onerror', 'this.src="/src-images/image-coming.png"');
});


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
  loadAnimation(name, name, '/src-images/animated-svgs/'+filename);
  var anim = name
  $(document.getElementById(name)).waypoint(function(){
    bodymovin.play(name);
    // Offset sets the percentage of the viewport that triggers the animation
  }, {offset: '40%' });

  // Appends the replay button
  $(document.getElementById(name)).append('<a class="replay" id="'+name+'" title="Replay"><img src="/src-images/replay-icon.svg"></a>')

  $('#' + name +'.replay').click(function(){
    bodymovin.stop(name);
    bodymovin.play(name);
  })
}

////// TOUCH-SCREEN TEST FOR SPECIFIC FUNCTIONALITY //////

//touch/mobile detection
if ( is.touchDevice() ){
  var touch_device = true;
}

$(document).ready(function() {

  ////////////// ADD LINKS TO ALL HEADINGS //////////////

  $("h2, h3, h4").each(function() {
    var link = "<a href=\"#" + $(this).attr("id") + "\"></a>"
    $(this).wrapInner( link );
  })

  //////////////////// SMOOTH SCROLL ////////////////////

  var topBuffer = 25;
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': ($target.offset().top - topBuffer)
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

  ////////// CHANGES TEXT FOR INTERACTIVE SVGs //////////
  if(touch_device){
    $(".interactive-svg").addClass("touch");
  }

  ////////////// TOGGLE OS CONTENT ON LOAD //////////////

  $(document).ready(function() {
    if ($(".os-tabs")) {
      if ( is.windows() ){
        $('.os-tabs li#win').addClass('active');
        $('#mac-content, #linux-content').css('display', 'none');
        $('#win-content').insertAfter('.os-tabs');
      } else if( is.linux() ){
        $('.os-tabs li#linux').addClass('active');
        $('#mac-content, #win-content').css('display', 'none');
        $('#linux-content').insertAfter('.os-tabs');
      } else {
        $('.os-tabs li#mac').addClass('active');
        $('#linux-content, #win-content').css('display', 'none');
      }
    }
  })
})
