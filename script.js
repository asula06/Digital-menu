// ========== MENU DATA ==========
const menuData = {
    pije: {
        name: "Pije",
        subCategories: {
            kafe: {
                name: "Kafe",
                products: [
                    { id: 1, name: "Ekspres", image: "img/espresso.webp", description: "Kafe ekspres e cilesise se larte", price: "50 Lekë" },
                    { id: 2, name: "Makiato", image: "img/makiato.webp", description: "Espresso me qumësht", price: "70 Lekë" },
                    { id: 3, name: "Frape", image: "img/frape.jpg", description: "Kafe e forte me akull dhe qumesht", price: "150 Lekë" },
                    { id: 4, name: "Kafe Turke", image: "img/kafeturke.jpg", description: "Kafe tradicionale turke", price: "70 Lekë" },
                    { id: 5, name: "Uje", image: "img/uj.webp", description: "Ujë i pastër dhe i freskët", price: "50 Lekë" }
                ]
            },
            freskuese: {
                name: "Pije Freskuese",
                products: [
                    { id: 6, name: "8S2", image: "img/b52.png", description: "Pije energjike", price: "150 Lekë" },
                    { id: 7, name: "Bravo molle", image: "img/bravomolle.avif", description: "Lëng i shtrydhur molle", price: "150 Lekë" },
                    { id: 8, name: "Bravo pjeshke", image: "img/bravo p.webp", description: "Lëng i shtrydhur pjeshke", price: "150 Lekë" },
                    { id: 9, name: "Fanta ekzotike", image: "img/fantaek.jpg", description: "Pije e gazuar ekzotike", price: "150 Lekë" },
                    { id: 10, name: "Fanta portokall", image: "img/faanta p.jpg", description: "Pije e gazuar portokalli", price: "150 Lekë" },
                    { id: 11, name: "Ivi limon", image: "img/ivil.webp", description: "Pije e gazuar limoni", price: "150 Lekë" },
                    { id: 12, name: "Ivi portokall", image: "img/ivio.jpg", description: "Pije e gazuar portokalli", price: "150 Lekë" },
                    { id: 13, name: "Coca Cola", image: "img/cola.jpg", description: "Coca Cola e gazuar", price: "150 Lekë" },
                    { id: 14, name: "Amita pjeshke", image: "img/amit p.png", description: "Lëng i shtrydhur pjeshke", price: "150 Lekë" },
                    { id: 15, name: "Amita qershie", image: "img/amit-aqershi.jpg", description: "Lëng i shtrydhur qershie", price: "150 Lekë" },
                    { id: 16, name: "Golden Eagle", image: "img/golden.jpg", description: "Pije energjike", price: "150 Lekë" },
                    { id: 17, name: "Soda limon", image: "img/soda.webp", description: "Pije e gazuar limoni", price: "150 Lekë" }
                ]
                
                
            },
            alkolike: {
                name: "Pije Alkolike",
                products: [
                    { id: 18, name: "Raki", image: "img/raki.webp", description: "Raki tradicionale shqiptare", price: "50 Lekë" },
                    { id: 19, name: "Verë e Kuqe 0.5l", image: "img/ver k.avif", description: "Verë e kuqe lokale 0.5 litër", price: "350 Lekë" },
                    { id: 20, name: "Verë e Bardhë 0.5l", image: "img/white wine.webp", description: "Verë e bardhë lokale 0.5 litër", price: "350 Lekë" },
                    { id: 20, name: "Martini", image: "img/martini.jpg", description: "Martini(teke)", price: "250 Lekë" },
                    { id: 20, name: "Whisky", image: "img/whisky.jpeg", description: "Whisky(teke)", price: "350 Lekë" },
                    { id: 21, name: "Konjak", image: "img/konjak.jpg", description: "Konjak Skenderbeu(teke)", price: "80 Lekë" }

                ]
            },
            birra: {
                name: "Birra",
                products: [
                    { id: 22, name: "Birra Elbar 330ml", image: "img/elbar sh.png", description: "Birra Elbar 0.33L", price: "100 Lekë" },
                    { id: 23, name: "Birra Elbar 500ml", image: "img/elbar k.webp", description: "Birra Elbar 0.5L", price: "150 Lekë" },
                    { id: 24, name: "Heineken", image: "img/heniken.png", description: "Heineken 0.33L", price: "200 Lekë" },
                    { id: 25, name: "Bavaria 0.0%", image: "img/bavaria.png", description: "Birre pa alkool Bavaria 0.33L", price: "150 Lekë" },
                    { id: 26, name: "Birra Tuborg", image: "img/tuborg.avif", description: "Birra Tuborg 0.33L", price: "150 Lekë" },
                    { id: 27, name: "Paulaner", image: "img/paulaner.png", description: "Paulaner 0.5L", price: "300 Lekë" },
                    { id: 28, name: "Birra Peroni", image: "img/peroni.png", description: "Birra Peroni 0.33L", price: "150 Lekë" }
                ]
            }
        }
    },
    ushqim: {
        name: "Ushqim",
        subCategories: {
            mezoret: {
                name: "Mezoret",
                products: [
                    { id: 29, name: "Sallat Mix", image: "img/greek salad.webp", description: "Sallate mix me perime të freskëta", price: "200 Lekë" },
                    { id: 30, name: "Sallat jeshile", image: "img/greensalad.jpeg", description: "Sallate jeshile me perime të freskëta", price: "200 Lekë" },
                    { id: 31, name: "Salcë kosi", image: "img/xaxiq.jpg", description: "Salcë kosi tradicionale", price: "200 Lekë" },
                    { id: 32, name: "Turshi të ndryshme ", image: "img/turshi.jpg", description: "Turshi të ndryshme tradicionale", price: "150 Lekë" },
                    { id: 33, name: "Djath i bardhë", image: "img/djath i bardh.jpg", description: "Djath i bardhë lope/dhie", price: "300 Lekë" },
                    { id: 34, name: "Djath kaçkavall", image: "img/kackavall.jpg", description: "Djath kaçkavall tradicional", price: "350 Lekë" },
                    { id: 35, name: "Qofte perimesh", image: "img/qofteperimesh.jpeg", description: "Qofte te bera me perime(1 qofte)", price: "60 Lekë" },
                    { id: 36, name: "Perime zgare", image: "img/perimezgare.jpg", description: "Perime te pjekura ne zgarë", price: "200 Lekë" },
                    { id: 37, name: "Speca me gjize", image: "img/speca gjiz.webp", description: "Speca të mbushura me gjizë", price: "250 Lekë" }
                    
                ]
            },
            mishra: {
                name: "Mishra",
                products: [
                    { id: 38, name: "Llukaniko Grek 500g", image: "img/llukaniko.jpg", description: "Llukaniko Grek me shije fantastike", price: "600 Lekë" },
                    { id: 39, name: "Mish gici zgare 500g", image: "img/mish g.jpg", description: "Mish gici i pjekur në zgarë", price: "600 Lekë" },
                    { id: 40, name: "Mish viçi zgare 500g", image: "img/mish v.jpg", description: "Mish viçi i pjekur në zgarë", price: "900 Lekë" },
                    { id: 41, name: "Kalastre fshati", image: "img/kalastre.jpeg", description: "Kalastre fshati sade", price: "1500 Lekë" },
                    { id: 42, name: "Pula te pjekura", image: "img/pulpjekur.jpg", description: "Pula te pjekura", price: "600 Lekë" },
                    { id: 43, name: "Mesnik me kalastre", image: "img/mesnik.jpg", description: "Mesnik me kalastre fshati", price: "2000 Lekë" },
                    { id: 44, name: "Kalastre me jufka", image: "img/jufka.webp", description: "Jufka me kalastre fshati", price: "2000 Lekë" },
                    { id: 45, name: "Qofte zgare", image: "img/qofte.avif", description: "Qofte te pjekura në zgarë 10 cope", price: "400 Lekë" }
                    
                ]
            },
           
        }
    }
};

// ========== DOM ELEMENTS ==========
const mainCategories = document.getElementById('mainCategories');
const subCategoriesContainer = document.getElementById('subCategoriesContainer');
const subCategoriesGrid = document.getElementById('subCategoriesGrid');
const productsContainer = document.getElementById('productsContainer');
const productsGrid = document.getElementById('productsGrid');
const backToMain = document.getElementById('backToMain');
const backToSub = document.getElementById('backToSub');
const subCategoryTitle = document.getElementById('subCategoryTitle');
const productsTitle = document.getElementById('productsTitle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');

// ========== STATE VARIABLES ==========
let currentCategory = null;
let currentSubCategory = null;

// ========== INITIALIZATION ==========
function init() {
    console.log('Initializing restaurant website...');
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Main category cards
    if (mainCategories) {
        document.querySelectorAll('.main-category-card').forEach(card => {
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                showSubCategories(category);
            });
        });
    }
    
    // Back buttons
    if (backToMain) {
        backToMain.addEventListener('click', goBackToMain);
    }
    
    if (backToSub) {
        backToSub.addEventListener('click', goBackToSub);
    }
    
    // Modal
    if (closeModal) {
        closeModal.addEventListener('click', closeModalHandler);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModalHandler();
            }
        });
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModalHandler();
        }
    });
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Window resize
    window.addEventListener('resize', handleResize);
    
    console.log('Website initialized successfully!');
}

// ========== MAIN FUNCTIONS ==========

// Mobile Menu Toggle
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
}

// Show Sub Categories
function showSubCategories(category) {
    if (!menuData[category]) {
        console.error(`Category ${category} not found`);
        return;
    }
    
    currentCategory = category;
    
    // Hide main categories, show sub categories
    mainCategories.style.display = 'none';
    subCategoriesContainer.style.display = 'block';
    
    // Update title
    subCategoryTitle.textContent = menuData[category].name;
    
    // Clear and populate sub categories
    subCategoriesGrid.innerHTML = '';
    
    for (const [key, subCat] of Object.entries(menuData[category].subCategories)) {
        const subCategoryCard = document.createElement('div');
        subCategoryCard.className = 'sub-category-card';
        subCategoryCard.dataset.subCategory = key;
        
        subCategoryCard.innerHTML = `
            <h4>${subCat.name}</h4>
            <p>${subCat.products.length} produkte</p>
        `;
        
        subCategoryCard.addEventListener('click', function() {
            showProducts(category, key);
        });
        
        subCategoriesGrid.appendChild(subCategoryCard);
    }
    
    // Scroll to menu section
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Products
function showProducts(category, subCategory) {
    currentSubCategory = subCategory;
    
    // Hide sub categories, show products
    subCategoriesContainer.style.display = 'none';
    productsContainer.style.display = 'block';
    
    // Update title
    const subCatName = menuData[category].subCategories[subCategory].name;
    productsTitle.textContent = subCatName;
    
    // Clear and populate products VERTIKALISHT
    productsGrid.innerHTML = '';
    
    menuData[category].subCategories[subCategory].products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const isMobile = window.innerWidth <= 768;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        productCard.addEventListener('click', function() {
            openModal(product);
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Navigation Functions
function goBackToMain() {
    subCategoriesContainer.style.display = 'none';
    productsContainer.style.display = 'none';
    mainCategories.style.display = 'flex';
    currentCategory = null;
    currentSubCategory = null;
}

function goBackToSub() {
    productsContainer.style.display = 'none';
    subCategoriesContainer.style.display = 'block';
    currentSubCategory = null;
}

// Modal Functions
function openModal(product) {
    if (!modalTitle || !modalImage || !modalDescription || !modalPrice) {
        console.error('Modal elements not found!');
        return;
    }
    
    modalTitle.textContent = product.name;
    modalImage.src = product.image;
    modalImage.alt = product.name;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Window Resize Handler
function handleResize() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ========== START APPLICATION ==========
document.addEventListener('DOMContentLoaded', init);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        navLinks.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});