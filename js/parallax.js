let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let button = document.getElementById('button')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

// header buttons 
let home = document.getElementById('home')
let about = document.getElementById('about')
let works = document.getElementById('works')
let contact = document.getElementById('contact')

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    header.style.top = value * 0.25 + 'px';
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.35 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    button.style.marginTop = value * 1.5 + 'px';
})

home.onclick = function () {
    this.classList.add('active');
    about.classList.remove('active');
    works.classList.remove('active');
    contact.classList.remove('active');
}
about.onclick = function () {
    this.classList.add('active');
    home.classList.remove('active');
    works.classList.remove('active');
    contact.classList.remove('active');
}
works.onclick = function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
}
contact.onclick = function () {
    this.classList.add('active');
    home.classList.remove('active');
    about.classList.remove('active');
    works.classList.remove('active');
}
