const header = document.getElementById('dynamic-header');


function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}


window.addEventListener('scroll', handleScroll);
