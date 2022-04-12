
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
   var pos = $(this).position();
   $('.galeria_kijovo').css({top: pos.top, left: '0'});
   $('.galeria_kijovo').css('display', 'block');
})
  


