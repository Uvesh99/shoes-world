const feature=document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var navbarLinks = document.querySelectorAll('#navbar a');

    var fromTop = window.scrollY + 60; // Adjust the offset value as needed

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            navbarLinks.forEach(function(link) {
                link.parentElement.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.parentElement.classList.add('active');
                }
            });
        }
    });
});
const handi=window.addEventListener('scroll', function() {
    const feature = document.querySelector('.feature');
    const parent = feature.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const featureRect = feature.getBoundingClientRect();

    if (parentRect.top <= 20 && parentRect.bottom >= featureRect.height + 20) {
        feature.style.position = 'fixed';
        feature.style.top = '20px';
    } else {
        feature.style.position = 'static';
    }
});
export {feature,handi};