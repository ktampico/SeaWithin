document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-list li a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector('.nav-list li.active')?.classList.remove('active');
                link.parentElement.classList.add('active');

                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`Section with ID ${targetId} not found.`);
                }
            } else {
                // External link to another page
                window.location.href = targetId;
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                // Internal link within the same page
                event.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`Section with ID ${href} not found.`);
                }
            } else {
                // External link to another page
                window.location.href = href;
            }
        });
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                // Internal link within the same page
                event.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`Section with ID ${href} not found.`);
                }
            } else if (href.includes('#')) {
                // External link to another page with a section reference
                event.preventDefault();
                const [page, sectionId] = href.split('#');
                window.location.href = `${page}#${sectionId}`;
            } else {
                // External link to another page
                window.location.href = href;
            }
        });
    });

    // Scroll event for updating active navigation link
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelector('.nav-list li.active')?.classList.remove('active');
        if (currentSection) {
            document
                .querySelector(`.nav-list li a[href="index.html#${currentSection}"]`)
                ?.parentElement.classList.add('active');
        }
    });
});

        document.querySelector('.nav-list li.active')?.classList.remove('active');
        if (currentSection) {
            document
                .querySelector(`.nav-list li a[href="#${currentSection}"]`)
                ?.parentElement.classList.add('active');
        }
    });

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel .carousel-item');
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    let currentIndex = 0;

    const showImage = (index) => {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    };

    nextButton?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length; // Move to the next image
        showImage(currentIndex);
    });

    prevButton?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; // Move to the previous image
        showImage(currentIndex);
    });

    if (carouselItems.length > 0) {
        showImage(currentIndex);
    } else {
        console.error('No carousel items found.');
    }

    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('active'));
            contents.forEach((c) => c.classList.remove('active'));

            tab.classList.add('active');
            const target = document.getElementById(tab.dataset.target);
            target.classList.add('active');
        });
    });
