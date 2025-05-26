document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list li a');
    const sections = document.querySelectorAll('.section');
    const tabLists = document.querySelectorAll('.tab-list');
    const tabGrids = document.querySelectorAll('.tab-grid');

    // Navigation click handler
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            document.querySelector('.nav-list li.active')?.classList.remove('active');
            link.parentElement.classList.add('active'); 

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    tabLists.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            
            document.querySelector('.tab-list.active')?.classList.remove('active');
            document.querySelector('.tab-grid.active')?.classList.remove('active');

            tab.classList.add('active');
            tabGrids[index].classList.add('active');
        });
    });
});

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
                .querySelector(`.nav-list li a[href="#${currentSection}"]`)
                ?.parentElement.classList.add('active');
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });   
    });
