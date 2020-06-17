const target = document.querySelectorAll('[data-anime]');

const debounce = (func, wait, immediate) =>{
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const menuEffect = (windowTop) => {
    const mainTop = document.querySelector('main').offsetTop;
    const menu = document.querySelector('#mainNav');

    if(mainTop < windowTop) {
        menu.classList.add('is__navbar-white');
    }else {
        menu.classList.remove('is__navbar-white');
    }
};

const fadeAnimation = (windowTop) => {    
    const newWindowTop = windowTop + (window.innerHeight * 0.75);

    target.forEach((e)=> {
        if((newWindowTop) > e.offsetTop) {
            e.classList.add('is__faded');
        }else {
            e.classList.remove('is__faded');
        }
    });
};

window.addEventListener('scroll', debounce(function() {
    const windowTop = window.pageYOffset;    

    menuEffect(windowTop);
    fadeAnimation(windowTop);
    console.log("scroll");
}, 200));