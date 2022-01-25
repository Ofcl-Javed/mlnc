var slideShow = $('.slideShow');
var gallery = $('#galCarousel');
var celebrate = $('#celebrateCarousel');
//for heroSection slideshow
slideShow.owlCarousel({
    items:1,
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:2000,
    autoplayHoverPause:true
});
//for gallery tab in small devices
function gallerySlider(){
    if (window.innerWidth <= 768){
        gallery.addClass('owl-carousel');
        gallery.owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            items:1
        });
    }
    else{
        gallery.owlCarousel('destroy');
        gallery.removeClass('owl-carousel');
    }
}
// for celebration slider
celebrate.addClass('owl-carousel');
celebrate.owlCarousel({
    items:4,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        325:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:5
        }
    }
});
$(document).ready(function(){
    $(".slideShow").owlCarousel();
    if(window.innerWidth <= 768){
        gallerySlider();
    }
    celebrate.owlCarousel();
});
window.addEventListener("resize", gallerySlider);

const dropBtn = document.querySelectorAll('.dropBtn');
const nestedDropBtn = document.querySelectorAll('.nestedDropBtn');
const menuBtn = document.querySelector('.menuIcon');
const menuBar = document.querySelector('.open');
const menuClose = document.querySelector('.close');
const menu = document.querySelector('.menu');
let open = false;
const tabBtn = document.querySelectorAll('.tabBtn');
const tabContent = document.querySelectorAll('.tabContent');

//Change sign in menu items
const changeSign = (elem) =>{
    elem.addEventListener('mouseover',()=>{
        elem.firstElementChild.innerText = '-';
    });
    elem.addEventListener('mouseout',()=>{
        elem.firstElementChild.innerText = '+';
    })
}
dropBtn.forEach((btn)=>{
    changeSign(btn);
});
nestedDropBtn.forEach((btn)=>{
    changeSign(btn);
});

//open and close mobile menu
menuBtn.addEventListener('click',()=>{
    if(!open){
        menuBar.style.display = 'none';
        menuClose.style.display = 'block';
        menu.classList.remove('responsive');
        open = true;
    }
    else{
        menuClose.style.display = 'none';
        menuBar.style.display = 'block';
        menu.classList.add('responsive');
        open = false;
    }
});
const showTab = (e, tabId)=>{
    tabContent.forEach((content)=>{
        content.style.display = 'none';
    });
    tabBtn.forEach((btn)=>{
        btn.className = btn.className.replace(" activeTab", "");
    });
    document.getElementById(tabId).style.display = 'block';
    e.currentTarget.className += " activeTab";
}
document.getElementById("open").click();