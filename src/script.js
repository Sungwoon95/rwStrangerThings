//메뉴바
const selectElement = function(element){
    return document.querySelector(element);  
};

let menuToggler = selectElement('.menu-toggle');
let header = selectElement('header');

menuToggler.addEventListener('click',function(){
    header.classList.toggle('open');

});

//


//애니메이션
$(document).ready(function(){
    mainAni();
})

function mainAni(){
    $(".main").animate({'opacity':0},1000,"easeOutCubic");
    $(".main").animate({'opacity':1},1500,"easeOutCubic");
}

window.sr = new ScrollReveal();

sr.reveal('.ani-le',{
    origin: 'left',
    duration: 700,
    distance: '25rem',
    delay: 500
});

sr.reveal('.ani-ri',{
    origin: 'right',
    duration: 700,
    distance: '25rem',
    delay: 500
});

sr.reveal('.ani-bot',{
    origin: 'bottom',
    duration: 700,
    distance: '25rem',
    delay: 500
});

