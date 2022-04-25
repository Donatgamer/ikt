var eredetiHely = 0;
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function kepMegnyit(){
  kep = document.getElementById("galkep");
  kep.style.display = "block";
}

function kepBezar(){
  kep = document.getElementById("galkep");
  kep.style.display = "none";
}

$('.galeria_kep').on('click', function(){
  //  var pos = $(this).position();
  eredetiHely = $(document).scrollTop();
  if(window.innerHeight > window.innerWidth){
    //portrait
    $('.galeria_kijovo').css({
      width: '85vw',
      position: 'fixed',
      borderRadius: '10px'
    });
  }
  else{
     $('.galeria_kijovo').css({
      width: '67.5vw',
      left: '16.25vw',
      right: '16.25vw',
      position: 'fixed',
      borderRadius: '10px'
    });
  }
   $('#btn-back-to-top').css('display', 'none');
   $('html, body').css({
    overflow: 'hidden',
    height: '100%'
    });
   var kep = $(this).attr('src');
   $('.galeria_kijovo .kijovo img').attr('src', kep);
   $('.galeria_kijovo').css('display', 'block');
   $('.row').css('filter', 'blur(5px)')
})
  


$('.kiugro_bezaro').on('click', function(){
  $('.galeria_kijovo').css('display', 'none');
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  });
  $(document).scrollTop(eredetiHely);
  $('.row').css('filter', 'none');
})
