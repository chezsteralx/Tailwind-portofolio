// Hamburger animation

const hamburger =document.querySelector('#hamburger');
const naVMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    naVMenu.classList.toggle('hidden');
});




//Navbar Fixed when scrolled
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}