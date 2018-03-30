
/*Added Slick carousel plugin. When you land on the page, the autoplay kicks in and will fire through the carousel. */

$(document).ready(function(){
  $('#carousel').slick({
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
  });
});


/*Added scrollTo plugin. When you click CONTACT on the Nav (given the id #navTabContact), the page should jump down to footer, using the getElementById method to land on the #scrollToContact id in the footer. */
// scrollTo plugin format - $(element).scrollTo(target[,duration][,settings]);
var scrollElement = document.getElementById("scrollToContact");
$("#navTabContact").click(function(){
  $.scrollTo($(scrollElement), {
              duration: 800,
              offset: -50
            });
          });

/*Since I only have the main landing page and the movies page functional, I added the below alerts for the nav tabs that don't go anywhere yet. */

$("#navTabTV").click(function() {
  alert("'Game of Thrones' won't be back until 2019, but I can assure you, Winter is Coming, and so is this page.");
});

$("#navTabBooks").click(function() {
  alert("I currently have 'The Underground Railroad' by Colson Whitehead and 'X' by Chuck Klosterman on my nightstand, so I'll get back to you.");
});

$("#navTabComics").click(function() {
  alert("When in doubt, go read 'Watchmen.'");
});

$("#navTabAudio").click(function() {
  alert("I don't have good taste, I mostly listen to jam bands. But you can never go wrong with 90s pop and alt rock.");
});
