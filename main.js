// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

$('#audio-control').click(function(){
    if( $("#myVideo").prop('muted') ) {
          $("#myVideo").prop('muted', false);
          $(this).text('🔉');
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $("#myVideo").prop('muted', true);
      $(this).text('🔇');
    }
});



$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0) {
            $("header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
        }
    });
});



// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}