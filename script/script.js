window.addEventListener('scroll', function(){
    const header = document.querySelector('.header');
    var height = document.querySelector('header').style.height;
    header.classList.toggle('sticky', window.scrollY > height);
    console.log(height);
})

    