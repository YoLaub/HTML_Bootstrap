window.addEventListener('scroll', function() {
    const upButton = document.querySelector('.up');
    if (window.scrollY > 200) {
        upButton.classList.add('show');
    } else {
        upButton.classList.remove('show');
    }
});


