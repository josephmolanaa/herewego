// =============================================
// NAVBAR SCROLL & HAMBURGER
// =============================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
}

// =============================================
// DATA SEMUA KATEGORI
// =============================================
const categoryData = {
    CustomizedPrivateTrip: {
        title: "Customized / Private Trip",
        desc: {
            id: "Rancang perjalananmu sendiri, sesuai jadwal & budget.",
            en: "Design your own journey, perfectly suited to your schedule & budget."
        },
        waText: "Halo%20HereWeGo!%20Saya%20tertarik%20dengan%20paket%20Customized%20Private%20Trip.%20Bisa%20bantu%20info%20lebih%20lanjut%3F",
        tours: [
            {
                title: "Private Trip Bromo",
                img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=400&h=300&fit=crop",
                price: "Rp 300.000",
                from: { id: "Mulai ", en: "From " },
                badge: { id: "🔥 SPECIAL PROMO", en: "🔥 SPECIAL PROMO" },
                link: "detail.html?dest=CustomizedPrivateTripDetail&tour=0"
            },
            {
                title: "Private Trip Kawah Ijen",
                img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400&h=300&fit=crop",
                price: "Rp 300.000",
                from: { id: "Mulai ", en: "From " },
                badge: null,
                link: "detail.html?dest=CustomizedPrivateTripDetail&tour=1"
            },
            {
                title: "Private Trip Tumpak Sewu",
                img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&h=300&fit=crop",
                price: "Rp 300.000",
                from: { id: "Mulai ", en: "From " },
                badge: { id: "🔥 SPECIAL PROMO", en: "🔥 SPECIAL PROMO" },
                link: "detail.html?dest=CustomizedPrivateTripDetail&tour=2"
            },
            {
                title: "Private Trip Banyuwangi",
                img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop",
                price: "Rp 300.000",
                from: { id: "Mulai ", en: "From " },
                badge: null,
                link: "detail.html?dest=CustomizedPrivateTripDetail&tour=3"
            },
            {
                title: "Private Trip Baluran",
                img: "https://picsum.photos/id/1018/400/300",
                price: "Rp 300.000",
                from: { id: "Mulai ", en: "From " },
                badge: null,
                link: "detail.html?dest=CustomizedPrivateTripDetail&tour=4"
            },
            {
                title: "Private Trip Malang City",
                img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop",
                price: "Rp 300.000",
                from: { id: "Mulai ", en: "From " },
                badge: { id: "CITY TOUR", en: "CITY TOUR" },
                link: "detail.html?dest=CustomizedPrivateTripDetail&tour=5"
            },
        ]
    },

    CorporateMice: {
        title: "Corporate / MICE / Group Trip",
        desc: {
            id: "Solusi terbaik untuk perjalanan korporat dan rombongan besar.",
            en: "The best solution for corporate travels and large groups."
        },
        waText: "Halo%20HereWeGo!%20Saya%20tertarik%20dengan%20paket%20Corporate%20%2F%20MICE%20%2F%20Group%20Trip.%20Bisa%20bantu%20info%20dan%20penawaran%3F",
        tours: [
            {
                title: "Corporate MICE Trip 1",
                img: "https://picsum.photos/400/300?random=20",
                price: "Hubungi Kami", // Just an example, maybe format differently later
                from: null,
                badge: null,
                link: "detail.html?dest=CorporateMiceGroupTourDetail&tour=0"
            },
            {
                title: "Corporate MICE Trip 2",
                img: "https://picsum.photos/400/300?random=21",
                price: "Hubungi Kami",
                from: null,
                badge: { id: "🌟 GROUP DEAL!", en: "🌟 GROUP DEAL!" },
                link: "detail.html?dest=CorporateMiceGroupTourDetail&tour=1"
            },
        ]
    },

    TransportTravel: {
        title: "Transport Travel",
        desc: {
            id: "Perjalanan nyaman dengan armada terbaik ke seluruh destinasi.",
            en: "Comfortable journey with the best fleet to all destinations."
        },
        waText: "Halo%20HereWeGo!%20Saya%20ingin%20tanya%20informasi%20Transport%20Travel.%20Bisa%20bantu%3F",
        isFleet: true,
        tours: []
    },

    OpenTrip: {
        title: "Open Trip",
        desc: {
            id: "Gabung bareng traveler lain dengan harga spesial dan pengalaman tak terlupakan!",
            en: "Join fellow travelers with special prices and unforgettable experiences!"
        },
        waText: "Halo%20HereWeGo!%20Saya%20tertarik%20dengan%20Open%20Trip.%20Bisa%20info%20jadwal%20dan%20harga%3F",
        tours: [
            {
                title: "Open Trip Bromo",
                img: "https://picsum.photos/400/300?random=40",
                price: "Rp 300.000",
                from: null,
                badge: null,
                link: "detail.html?dest=OpenTripDetail&tour=0"
            },
            {
                title: "Open Trip Tumpak Sewu",
                img: "https://picsum.photos/400/300?random=41",
                price: "Rp 355.000",
                from: null,
                badge: { id: "SPECIAL PROMO!", en: "SPECIAL PROMO!" },
                link: "detail.html?dest=OpenTripDetail&tour=1"
            },
        ]
    }
};

// =============================================
// BACA URL PARAM & RENDER KONTEN
// =============================================
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");
const selected = categoryData[cat];

if (selected) {
    // Current lang didapat dari i18n.js
    const lang = window.currentLang || 'id';

    // Set judul halaman & hero
    document.title = `${selected.title} - HereWeGo`;
    document.getElementById("cat-title").textContent = selected.title;
    document.getElementById("cat-desc").textContent = selected.desc[lang];

    // Set link WhatsApp sesuai kategori
    const waLink = document.getElementById("wa-link");
    if (waLink) {
        waLink.href = `https://wa.me/6285185636301?text=${selected.waText}`;
    }

    // Render kartu tour / fleet
    const grid = document.getElementById("tour-grid");

    if (selected.isFleet && typeof renderArmada === 'function') {
        // Untuk Transport Travel: pakai fleet cards dari armada.js
        grid.classList.remove('tour-grid');
        grid.classList.add('fleet-grid');
        renderArmada('tour-grid');
    } else {
        selected.tours.forEach(tour => {
            const card = document.createElement("a");
            card.href = tour.link;
            card.classList.add("tour-card");

            let badgeHtml = "";
            if (tour.badge) {
                badgeHtml = `<span class="badge">${tour.badge[lang] || tour.badge.id}</span>`;
            }

            let fromText = "";
            if (tour.from) {
                fromText = tour.from[lang] || "";
            }

            card.innerHTML = `
                ${badgeHtml}
                <img src="${tour.img}" alt="${tour.title}" loading="lazy">
                <div class="tour-info">
                    <h3>${tour.title}</h3>
                    <p class="price">${fromText}${tour.price}</p>
                </div>
            `;

            grid.appendChild(card);
        });
    }

} else {
    // Kategori tidak dikenali
    const lang = window.currentLang || 'id';
    document.getElementById("cat-title").textContent = lang === 'en' ? "Category Not Found" : "Kategori Tidak Ditemukan";
    document.getElementById("cat-desc").textContent = lang === 'en' ? "Please return to home page." : "Silakan kembali ke halaman utama.";
}
