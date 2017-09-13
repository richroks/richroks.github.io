//HEADER BG COLOR & SIZE CHANGE ON HOVER
$(document).on("scroll", function() {

	if($(document).scrollTop()>50) {
		$("header").addClass("small");
	} else {
		$("header").removeClass("small");
	}

});

//LOGO CHANGE ON HOVER
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50) {
            $('#logo img')
                .attr('src','./assets/images/RichroksLogo-black.png');
        }
        if($(this).scrollTop() < 50) {
            $('#logo img')
                .attr('src','./assets/images/RichroksLogo-gold.png');
        }
    });
});

var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0;



//HEADER ACTIVE COLOR CHANGE
	var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  return false;
});

;(function(){
    var isTouch = false //var to indicate current input type (is touch versus no touch)
    var isTouchTimer
    var curRootClass = '' //var indicating current document root class ("can-touch" or "")

    function addtouchclass(e){
        clearTimeout(isTouchTimer)
        isTouch = true
        if (curRootClass != 'can-touch'){ //add "can-touch' class if it's not already present
            curRootClass = 'can-touch'
            document.documentElement.classList.add(curRootClass)
        }
        isTouchTimer = setTimeout(function(){isTouch = false}, 500) //maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
    }

    function removetouchclass(e){
        if (!isTouch && curRootClass == 'can-touch'){ //remove 'can-touch' class if not triggered by a touch event and class is present
            isTouch = false
            curRootClass = ''
            document.documentElement.classList.remove('can-touch')
        }
    }

    document.addEventListener('touchstart', addtouchclass, false) //this event only gets called when input type is touch
    document.addEventListener('mouseover', removetouchclass, false) //this event gets called when input type is everything from touch to mouse/ trackpad
})();
