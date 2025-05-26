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