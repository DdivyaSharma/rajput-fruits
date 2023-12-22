
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg' },
              { src: 'images/team/_09eb2fbf-143d-4367-8d6d-cc4f88031e70-1.jpg'},
              { src: 'images/team/_25b8f0af-3ca7-472e-990e-824905887549.jpg'},
              { src: 'images/team/_47af4e4a-1f3d-4dcb-8464-67a3d4761885.jpg'},
              { src: 'images/team/_839fad33-8eec-41a1-a7cb-7c7de4e5c9a4.jpg'},
              { src: 'images/team/_cf3c9436-0027-4194-a121-ace002902286.jpg'},
              { src: 'images/team/pexels-engin-akyurt-3085148.jpg' },
              { src: 'images/team/small-business-owner-drinking-coffee-3.jpg' }
          timer: false,
          transition: [ 'fade', 'zoomOut', 'swirlLeft' ]
         // animation: 'burn',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


