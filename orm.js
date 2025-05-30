const personalities = [
    { id: 1, type: "ISTJ", description: "quiet", definition: "serious - practical and responsible" },
    { id: 2, type: "ISFJ", description: "quiet", definition: "friendly - committed and conscientious" },
    { id: 3, type: "INFJ", description: "insightful", definition: "idealistic - seeks meaning and connection" },
    { id: 4, type: "INTJ", description: "strategic", definition: "independent - driven to implement ideas" },
    { id: 5, type: "ISTP", description: "analytical", definition: "adaptable - problem solver under pressure" },
    { id: 6, type: "ISFP", description: "sensitive", definition: "kind - values personal space and harmony" },
    { id: 7, type: "INFP", description: "idealistic", definition: "curious - seeks to understand and help others" },
    { id: 8, type: "INTP", description: "logical", definition: "abstract - focused on deep problem-solving" },
    { id: 9, type: "ESTP", description: "energetic", definition: "pragmatic - action-oriented and spontaneous" },
    { id: 10, type: "ESFP", description: "outgoing", definition: "lively - enjoys life, people, and fun" },
    { id: 11, type: "ENFP", description: "enthusiastic", definition: "imaginative - sees endless possibilities" },
    { id: 12, type: "ENTP", description: "clever", definition: "resourceful - generates and analyzes new ideas" },
    { id: 13, type: "ESTJ", description: "practical", definition: "decisive - organizes people and projects efficiently" },
    { id: 14, type: "ESFJ", description: "warm", definition: "cooperative - creates harmony and supports others" },
    { id: 15, type: "ENFJ", description: "empathetic", definition: "inspiring - helps others realize their potential" },
    { id: 16, type: "ENTJ", description: "bold", definition: "strategic - natural leader and long-term planner" }
];


const flowers = [
    { id: 1, name: "Rose", color: "Red", meaning: "Love, passion, beauty", img: "https://i.pinimg.com/736x/79/c5/dc/79c5dc47535f09dec6034b5fad91deab.jpg" },
    { id: 2, name: "Lily", color: "White", meaning: "Purity, virtue, devotion", img: "https://i.pinimg.com/736x/78/1a/2f/781a2f8e849ac8c6283a859534b6915f.jpg" },
    { id: 3, name: "Sunflower", color: "Yellow", meaning: "Adoration, loyalty", img: "https://i.pinimg.com/736x/63/2f/bd/632fbd20f18a2a1bc6df569b31eda210.jpg" },
    { id: 4, name: "Orchid", color: "Purple", meaning: "Exotic beauty, strength", img: "https://i.pinimg.com/736x/0d/14/14/0d141457c0cf16a0d6f5e968d3656684.jpg" },
    { id: 5, name: "Daisy", color: "White", meaning: "Innocence, purity, new beginnings", img: "https://i.pinimg.com/736x/0b/eb/c9/0bebc959f13e46ee0698d32877572b66.jpg" },
    { id: 6, name: "Tulip", color: "Pink", meaning: "Perfect love, elegance", img: "https://i.pinimg.com/736x/b5/0d/14/b50d1456c57479bcebe3e3ea7d38a097.jpg" },
    { id: 7, name: "Carnation", color: "Pink", meaning: "Love, fascination", img: "https://i.pinimg.com/736x/60/59/5a/60595af75f31d986192dc1b07ac2567b.jpg" },
    { id: 8, name: "Iris", color: "Blue", meaning: "Faith, wisdom, hope", img: "https://i.pinimg.com/736x/fc/08/8d/fc088d7f8ffe193a4644310f7e9077f3.jpg" },
    { id: 9, name: "Peony", color: "Pink", meaning: "Prosperity, good fortune", img: "https://i.pinimg.com/736x/92/1b/46/921b46c60fbdc70a44e66db6c29012bc.jpg" },
    { id: 10, name: "Daffodil", color: "Yellow", meaning: "Rebirth, new beginnings", img: "https://i.pinimg.com/736x/5d/2f/67/5d2f67f4ffac0d705de0c7f0b38a8178.jpg" },
    { id: 11, name: "Hyacinth", color: "Purple", meaning: "Sincerity, constancy", img: "https://i.pinimg.com/736x/54/31/dd/5431dd055aa534784c2ffd4fa3078c67.jpg" },
    { id: 12, name: "Lilac", color: "Purple", meaning: "First love, youthful innocence", img: "https://i.pinimg.com/736x/ef/86/f0/ef86f0a8790cda349bce8e5794a4a1fb.jpg" },
    { id: 13, name: "Marigold", color: "Orange", meaning: "Joy, warmth, creativity", img: "https://i.pinimg.com/736x/7d/12/5b/7d125b1ee7800f85e94418cef8bd95c1.jpg" },
    { id: 14, name: "Poppy", color: "Red", meaning: "Restful sleep, consolation", img: "https://i.pinimg.com/736x/43/47/c8/4347c813812934b51d7ff21a3f27b4de.jpg" },
    { id: 15, name: "Chrysanthemum", color: "Yellow", meaning: "Friendship, joy, honesty", img: "https://i.pinimg.com/736x/95/9c/6f/959c6f71ab61f69bfed5d246f5f6acfa.jpg" },
    { id: 16, name: "Jasmine", color: "White", meaning: "Sensuality, grace, elegance", img: "https://i.pinimg.com/736x/67/8c/01/678c018483d7df02bde4ed81b3ee6d3d.jpg" },
    { id: 17, name: "Violet", color: "Purple", meaning: "Modesty, humility", img: "https://i.pinimg.com/736x/b7/2a/4e/b72a4e5792aa39587937bf19beb77a72.jpg" },
    { id: 18, name: "Forget-Me-Not", color: "Blue", meaning: "True love, memories", img: "https://i.pinimg.com/736x/b3/a7/aa/b3a7aa9494e16b2ff5a55c2c305021ee.jpg" },
    { id: 19, name: "Camellia", color: "Pink", meaning: "Admiration, perfection", img: "https://i.pinimg.com/736x/2e/70/86/2e70860a4815c6621a18502810d8d3d8.jpg" },
    { id: 20, name: "Gerbera Daisy", color: "Orange", meaning: "Cheerfulness, innocence", img: "https://i.pinimg.com/736x/50/92/00/50920007f54a672f9a1662ed6c0c88bb.jpg" },
    { id: 21, name: "Anemone", color: "Purple", meaning: "Anticipation, fragility", img: "https://i.pinimg.com/736x/19/25/db/1925dbb0eabe5d7e964466551fd0a847.jpg" },
    { id: 22, name: "Calla Lily", color: "White", meaning: "Elegance, purity", img: "https://i.pinimg.com/736x/5e/00/c0/5e00c0e1ea17e75162f1862bc609ead7.jpg" },
    { id: 23, name: "Zinnia", color: "Multicolor", meaning: "Thoughts of absent friends", img: "https://i.pinimg.com/736x/ff/fb/48/fffb48849f207eea453c5d149bc65018.jpg" },
    { id: 24, name: "Snapdragon", color: "Pink", meaning: "Graciousness, strength", img: "https://i.pinimg.com/736x/bc/f6/2d/bcf62d3613dd8ebfb30f55ccf647ce31.jpg" },
    { id: 25, name: "Gladiolus", color: "Red", meaning: "Strength of character", img: "https://i.pinimg.com/736x/c4/4d/d0/c44dd089f0b7f18a3a8ed211d9570033.jpg" },
    { id: 26, name: "Sweet Pea", color: "Pink", meaning: "Pleasure, gratitude", img: "https://i.pinimg.com/736x/10/2e/cc/102ecc482398fb26c44035ee282ede5f.jpg" },
    { id: 27, name: "Primrose", color: "Yellow", meaning: "Young love, eternal love", img: "https://i.pinimg.com/736x/f8/87/dc/f887dc0504cc26fa67eb38398d5c6ff8.jpg" },
    { id: 28, name: "Bluebell", color: "Blue", meaning: "Humility, constancy", img: "https://i.pinimg.com/736x/1d/c2/6e/1dc26ed007c6a63e8560ea4188a24d86.jpg" },
    { id: 29, name: "Aster", color: "Purple", meaning: "Patience, elegance", img: "https://i.pinimg.com/736x/27/8a/8a/278a8a4e0a1267bfe44185a653adf2da.jpg" },
    { id: 30, name: "Lavender", color: "Purple", meaning: "Serenity, calmness", img: "https://i.pinimg.com/736x/23/5b/66/235b66d4501aae2afe053a84314f9a0c.jpg" }
];


const personalityTableBody = document.querySelector('#personality-table tbody');
personalities.forEach(person => {
    personalityTableBody.innerHTML += `
        <tr>
            <td>${person.id}</td>
            <td>${person.type}</td>
            <td>${person.description}</td>
            <td>${person.definition}</td>
        </tr>
    `;
});


const flowersTableBody = document.querySelector('#flowers-table tbody');
flowers.forEach(flower => {
    flowersTableBody.innerHTML += `
        <tr>
            <td>${flower.id}</td>
            <td><img src="${flower.img}" alt="${flower.name}"></td>
            <td>${flower.name}</td>
            <td>${flower.color}</td>
            <td>${flower.meaning}</td>
        </tr>
    `;
});

document.querySelectorAll('#flowers-table img').forEach(img => {
    img.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        modalImage.src = this.src; // Set the modal image source
        modal.style.display = 'flex'; // Show the modal
    });
});

document.getElementById('image-modal').addEventListener('click', function () {
    this.style.display = 'none'; // Hide the modal
});

document.getElementById('view-data-btn').addEventListener('click', function () {
    const dataSection = document.getElementById('data-section');

    if (dataSection.style.display === 'none' || dataSection.style.display === '') {
        dataSection.style.display = 'block'; // 
        this.textContent = 'Close Data'; // 
    } else {
        dataSection.style.display = 'none'; 
        this.textContent = 'View Data';
    }
});

document.getElementById('search').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const searchValue = event.target.value.trim().toLowerCase();
        const dataSection = document.getElementById('data-section');
        const personalityTableRows = document.querySelectorAll('#personality-table tbody tr');
        const flowersTableRows = document.querySelectorAll('#flowers-table tbody tr');

        // Filter Personality Types table
        personalityTableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(searchValue) ? '' : 'none';
        });

        flowersTableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            row.style.display = rowText.includes(searchValue) ? '' : 'none';
        });

        dataSection.style.display = 'block';
    }
});

document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim(); 
    console.log("Search Term:", searchTerm); 

    const personalityMessage = document.getElementById("personality-message");
    const flowersMessage = document.getElementById("flowers-message");

    const isSpecialCharacterOnly = searchTerm.length > 0 && /^[^a-z0-9]+$/i.test(searchTerm);
    if (isSpecialCharacterOnly || searchTerm === "") {
        console.log("Special characters or empty input detected. Showing 'No results found'.");

        personalityMessage.textContent = "No results found for Personality Types.";
        flowersMessage.textContent = "No results found for Flowers.";

        personalityTableBody.innerHTML = "";
        flowersTableBody.innerHTML = "";
        return; 
    }

    const filteredPersonalities = personalities.filter(p =>
        p.type.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.definition.toLowerCase().includes(searchTerm) 
    );

    // Filter flowers based on all relevant fields
    const filteredFlowers = flowers.filter(f =>
        f.name.toLowerCase().includes(searchTerm) ||
        f.color.toLowerCase().includes(searchTerm) || 
        f.meaning.toLowerCase().includes(searchTerm) 
    );

    // Render filtered personalities
    if (filteredPersonalities.length > 0) {
        personalityMessage.textContent = ""; 
        personalityTableBody.innerHTML = filteredPersonalities.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${p.type}</td>
                <td>${p.description}</td>
                <td>${p.definition}</td>
            </tr>
        `).join('');
    } else {
        personalityMessage.textContent = "No results found for Personality Types.";
        personalityTableBody.innerHTML = ""; 
    }

    // Render filtered flowers
    if (filteredFlowers.length > 0) {
        flowersMessage.textContent = ""; 
        flowersTableBody.innerHTML = filteredFlowers.map(f => `
            <tr>
                <td>${f.id}</td>
                <td><img src="${f.img}" alt="${f.name}" style="width: 50px; height: 50px;"></td>
                <td>${f.name}</td>
                <td>${f.color}</td>
                <td>${f.meaning}</td>
            </tr>
        `).join('');
    } else {
        flowersMessage.textContent = "No results found for Flowers.";
        flowersTableBody.innerHTML = ""; 
    }
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
            } else {
                // External link to another page
                window.location.href = href;
            }
        });
    });
});

