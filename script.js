const products = [
    {
        id: 1,
        name: "Besi Beton Polos SNI",
        category: "besi",
        description: "Besi beton polos berkualitas tinggi dengan standar SNI. Cocok untuk pondasi rumah dan struktur bangunan menengah.",
        image: "🏗️",
        price: "Rp 45.000 - Rp 150.000",
        specs: {
            "Ukuran": "6mm, 8mm, 10mm, 12mm",
            "Panjang": "12 Meter",
            "Material": "Baja Karbon",
            "Sertifikasi": "SNI 2052:2017"
        }
    },
    {
        id: 2,
        name: "Baja Ringan Galvalum C75",
        category: "atap",
        description: "Rangka atap baja ringan dengan lapisan galvalum tahan karat. Ringan namun sangat kokoh untuk beban genteng berat.",
        image: "🏠",
        price: "Rp 75.000 / Batang",
        specs: {
            "Ketebalan": "0.75mm",
            "Panjang": "6 Meter",
            "Lapisan": "AZ100",
            "Jenis": "Channel C"
        }
    },
    {
        id: 3,
        name: "Semen Portland Top Premium",
        category: "bahan",
        description: "Semen serbaguna dengan daya rekat tinggi. Cepat kering dan memberikan hasil plesteran yang halus serta kuat.",
        image: "🧱",
        price: "Rp 62.000 / Sak",
        specs: {
            "Berat": "40kg & 50kg",
            "Jenis": "PCC (Portland Composite Cement)",
            "Kegunaan": "Pasangan bata, floor, plesteran",
            "Standar": "SNI 7064"
        }
    },
    {
        id: 4,
        name: "Seng Gelombang Biru",
        category: "atap",
        description: "Atap seng gelombang ekonomis namun tahan lama. Dilengkapi dengan lapisan pelindung cuaca ekstrim.",
        image: "🏚️",
        price: "Mulai Rp 55.000",
        specs: {
            "Lebar": "80cm",
            "Ketebalan": "0.20mm - 0.30mm",
            "Warna": "Biru, Silver, Merah",
            "Bahan": "Zinc-Alum"
        }
    },
    {
        id: 5,
        name: "Paku Kayu & Beton Super",
        category: "bahan",
        description: "Paku baja berkualitas tinggi, tidak mudah bengkok. Tersedia berbagai ukuran untuk kayu dan beton keras.",
        image: "🔩",
        price: "Rp 15.000 / Dus",
        specs: {
            "Ukuran Kayu": "2\" sampai 5\"",
            "Ukuran Beton": "1\" sampai 4\"",
            "Material": "Baja Galvanis",
            "Kemasan": "Per kg / Per Dus"
        }
    },
    {
        id: 6,
        name: "Cat Tembok Pro Exterior",
        category: "finishing",
        description: "Cat tembok anti lumut dan jamur. Warna tahan hingga 5 tahun meskipun terpapar sinar matahari langsung.",
        image: "🎨",
        price: "Rp 120.000 / Galon",
        specs: {
            "Volume": "5kg & 25kg",
            "Daya Sebar": "10-12 m2/kg",
            "Tipe": "Water-based",
            "Warna": "100+ Pilihan"
        }
    },
    {
        id: 7,
        name: "Besi Ulir High Grade",
        category: "besi",
        description: "Besi beton ulir untuk konstruksi beban berat. Memberikan daya ikat maksimal pada cor beton.",
        image: "🧬",
        price: "Rp 85.000 - Rp 250.000",
        specs: {
            "Ukuran": "10mm, 13mm, 16mm, 19mm",
            "Grade": "BjTS 420",
            "Sertifikasi": "SNI",
            "Material": "High Strength Steel"
        }
    },
    {
        id: 8,
        name: "Rangka Atap Spandek",
        category: "atap",
        description: "Atap spandek minimalis untuk gudang atau kanopi rumah. Pemasangan cepat dan tampilan modern.",
        image: "📐",
        price: "Rp 45.000 / Meter",
        specs: {
            "Lebar Efektif": "75cm",
            "Panjang": "Custom (Maks 6m)",
            "Ketebalan": "0.30mm",
            "Varian": "Polos & Berpasir"
        }
    }
];

// Helper: Get product by ID
function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

// Mobile Menu Logic
const setupMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');

            // Animate bars
            const bars = mobileMenu.querySelectorAll('.bar');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
}

// Catalog Page Logic
const renderCatalog = (filter = 'all', search = '') => {
    const container = document.getElementById('product-list');
    if (!container) return;

    let filtered = products;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }

    if (search) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px;">
            <h3>Produk tidak ditemukan</h3>
            <p>Cobalah kata kunci lain atau pilih kategori berbeda.</p>
        </div>`;
        return;
    }

    container.innerHTML = filtered.map(p => `
        <div class="product-card" data-category="${p.category}">
            <div class="product-image">
                <span>${p.image}</span>
            </div>
            <div class="product-info">
                <span class="cat-tag">${p.category}</span>
                <h3>${p.name}</h3>
                <span class="product-price">${p.price}</span>
                <a href="produk-detail.html?id=${p.id}" class="btn-view-detail">Detail Produk</a>
            </div>
        </div>
    `).join('');
}

// Detail Page Logic
const renderDetailPage = () => {
    const container = document.getElementById('detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = getProductById(productId);

    if (!product) {
        container.innerHTML = `<div class="container" style="padding: 150px 0; text-align: center;">
            <h2>Oops! Produk tidak ditemukan.</h2>
            <a href="produk.html" class="btn btn-primary" style="margin-top: 2rem;">Kembali ke Katalog</a>
        </div>`;
        return;
    }

    // Update Page Title
    document.title = `${product.name} | UD. FIKTIN`;

    let specHtml = '';
    for (const [label, value] of Object.entries(product.specs)) {
        specHtml += `
            <div class="spec-item">
                <span class="spec-label">${label}</span>
                <span class="spec-value">${value}</span>
            </div>
        `;
    }

    container.innerHTML = `
        <section class="product-detail-hero">
            <div class="container">
                <div class="detail-grid">
                    <div class="detail-image">
                        <span>${product.image}</span>
                    </div>
                    <div class="detail-content">
                        <span class="section-tag">${product.category}</span>
                        <h1>${product.name}</h1>
                        <span class="detail-price">${product.price}</span>
                        <p class="detail-desc">${product.description}</p>
                        
                        <div class="spec-list">
                            <h3>Spesifikasi Teknis</h3>
                            ${specHtml}
                        </div>

                        <a href="https://wa.me/6287716680754?text=Halo%20UD.%20FIKTIN,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}" 
                           target="_blank" class="btn btn-primary">
                           Pesan via WhatsApp <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();

    // Determine which page logic to run
    if (document.body.classList.contains('products-page')) {
        renderCatalog();

        // Search event
        const searchInput = document.getElementById('product-search');
        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
            renderCatalog(activeFilter, e.target.value);
        });

        // Filter event
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderCatalog(btn.dataset.category, searchInput.value);
            });
        });
    }

    if (document.body.classList.contains('detail-page')) {
        renderDetailPage();
    }
});
