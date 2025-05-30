document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => box.classList.add('revealed'));

    box.addEventListener('click', () => {
        if (box.classList.contains('revealed')) {
            box.classList.remove('revealed');
        } else {
            openLightbox(box.querySelector('img').src);
        }
    });
});

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Function to dynamically add an image from the user's device
function addImageFromDevice() {
    const imageInput = document.getElementById('image-input');
    const imageGrid = document.getElementById('image-grid');

    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const newBox = document.createElement('div');
            newBox.className = 'box';
            newBox.innerHTML = `
                Uploaded Image
                <img src="${e.target.result}" alt="Uploaded Image">
            `;
            newBox.onclick = () => openLightbox(e.target.result);
            imageGrid.appendChild(newBox);

            // hover effect
            newBox.addEventListener('mouseover', () => newBox.classList.add('revealed'));
            newBox.addEventListener('click', () => {
                if (newBox.classList.contains('revealed')) {
                    newBox.classList.remove('revealed');
                } else {
                    openLightbox(newBox.querySelector('img').src);
                }
            });
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select an image to upload.');
    }
}

function updateImageText(input) {
    const text = input.value;
    input.setAttribute('value', text); 
}

function deleteImage(button) {
    const box = button.closest('.box');
    box.remove();
}

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
});