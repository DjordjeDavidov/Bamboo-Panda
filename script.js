function toggleMenu(event) {
    event.preventDefault(); // Prevent default behavior
    var postavke = document.querySelector('.postavke');
    postavke.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    var naslovElement = document.querySelector('.naslov');
    naslovElement.classList.add('fade-in');
});

window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.style.visibility = 'visible';
    } else {
        footer.style.visibility = 'hidden'; 
    }
});

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('fade-in-visible');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('load', function() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('fade-in-visible');
        }, index * 170); 
    });
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isFullScreen() {
    return (window.innerHeight == screen.height);
}
