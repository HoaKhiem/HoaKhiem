$('.burger').on('click', function(event){
    $('.navigation-bar').slideToggle('200');
    $('.toggle-open').toggleClass('open');
    $('.toggle-close').toggleClass('close');
})

var btn = $('.scrollup');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 1500,
        reset: true
    });
    ScrollReveal().reveal('.col, .aboutus-img, .img-col', { origin: 'left' });
    ScrollReveal().reveal('.aboutus-content, .home-image', { origin: 'right' });
    ScrollReveal().reveal('.product-item, .brand-wrapper, .newsletter-wrapper', { interval: 100 });
const scroll = () =>{
    const up = document.querySelector('.up')
    if(window.scrollY >= 560){
        up.classList.add('show')
    }else{
        up.classList.remove('show')
    }
}
window.addEventListener('scroll', scroll)
