<<<<<<< HEAD
const $ = (element)=>{
    temp = document.querySelectorAll(element);
    if(temp.length == 1) return temp[0];
    return temp;
}


let menuToggler = $('.menu-toggle');
let nav = $('nav');
let nav_links = $('.nav-items .nav-item a');
console.log(menuToggler);
console.log(nav);

for (let i = 0; i < nav_links.length; i++) {
    const link = nav_links[i];
    link.addEventListener("click", ()=>{
        nav_links.forEach(e => {
            e.classList.remove('active')
        });
        link.classList.add('active');

    })
    
}
menuToggler.addEventListener("click", ()=>{nav.classList.toggle('open')});
=======
const $ = (element)=>{
    temp = document.querySelectorAll(element);
    if(temp.length == 1) return temp[0];
    return temp;
}


let menuToggler = $('.menu-toggle');
let nav = $('nav');
let nav_links = $('.nav-items .nav-item a');
console.log(menuToggler);
console.log(nav);

for (let i = 0; i < nav_links.length; i++) {
    const link = nav_links[i];
    link.addEventListener("click", ()=>{
        nav_links.forEach(e => {
            e.classList.remove('active');
        });
        nav.classList.remove('open')
        link.classList.add('active');

    })
    
}
menuToggler.addEventListener("click", ()=>{nav.classList.toggle('open')});

// const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     slidesPerView: 3,
//     spaceBetween: 10,
//   loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },

//   });
>>>>>>> Old project commit
