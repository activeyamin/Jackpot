// =============them_slider start=======
$('.them__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    // prevArrow: '<i class="fas fa-angle-left prev"></i>',
    // nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // =============them_slider end=======

  // ===========keycounter_part start===========
//   $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });

// <script>
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
// </script>  
// ===========keycounter_part end===========
  // ============footer_backtop  start=============
$(".footer__backtotop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".footer__backtotop").fadeIn()
  }else{
    $(".footer__backtotop").fadeOut()
  }
})
// =========footer_backtop end=========


// ============aboutskills_slider start======
    $('.aboutskills__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // prevArrow: '<i class="fas fa-angle-left prev"></i>',
    // nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
// ============aboutskills_slider end======
new venobox({
  selector: '.venobox'
});
