// --- BAGIAN 1: LOGIKA NAVBAR (Sama Persis dengan script.js) ---

// 1. Efek Navbar Berubah Warna saat Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// 2. Fitur Hamburger Menu (Untuk Tampilan HP)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    // Tutup menu otomatis saat link diklik
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");
        });
    });
}


// --- BAGIAN 2: LOGIKA ISI KONTEN DETAIL ---

const params = new URLSearchParams(window.location.search);
const dest = params.get("dest");
const tourIndex = parseInt(params.get("tour"), 0);

const tourData = {        
    CustomizedPrivateTripDetail: [
        {
            title: "Private Trip Bromo",
            desc: {
                id: "Saksikan keindahan Gunung Bromo dari sunrise point Penanjakan, lekukan lautan pasir, dan kawah aktifnya yang ikonik. Trip ini dirancang privat sesuai jadwal kamu.",
                en: "Witness the beauty of Mount Bromo from Penanjakan sunrise point, the majestic sea of sand, and its iconic active crater. This trip is beautifully tailored for you."
            },
            img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "Pick up area Malang pukul 00.00",
                    "Tiba di Penanjakan, nonton sunrise spektakuler",
                    "Turun ke lautan pasir & kawah Bromo",
                    "Sarapan di warung lokal",
                    "Kembali ke Malang sekitar pukul 11.00"
                ],
                en: [
                    "Pick up in Malang area at 00:00",
                    "Arrive at Penanjakan, watch spectacular sunrise",
                    "Descend to the sea of sand & Bromo crater",
                    "Breakfast at a local warung",
                    "Return to Malang around 11:00"
                ]
            },
            price: "Rp 750.000 / orang"
        },
        {
            title: "Private Trip Kawah Ijen",
            desc: {
                id: "Lihat fenomena api biru (blue fire) langka di Kawah Ijen, Banyuwangi. Salah satu pemandangan paling menakjubkan di dunia yang hanya bisa dilihat dini hari.",
                en: "Witness the rare blue fire phenomenon at Ijen Crater, Banyuwangi. One of the most breathtaking sights in the world, only visible before dawn."
            },
            img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "Pick up area Malang/Banyuwangi pukul 00.00",
                    "Trekking menuju kawah Ijen",
                    "Menyaksikan blue fire yang langka",
                    "Sunrise di puncak kawah",
                    "Turun dan kembali ke penginapan"
                ],
                en: [
                    "Pick up in Malang/Banyuwangi area at 00:00",
                    "Trekking to Ijen crater",
                    "Witness the rare blue fire",
                    "Sunrise at the crater peak",
                    "Descend and return to accommodation"
                ]
            },
            price: "Rp 650.000 / orang"
        },
        {
            title: "Private Trip Tumpak Sewu",
            desc: {
                id: "Kunjungi Tumpak Sewu, air terjun tirai selebar 120m yang dijuluki 'Magic Waterfall'. Pengalaman trekking seru melewati hutan lebat dan sungai jernih.",
                en: "Visit Tumpak Sewu, a 120m wide curtain waterfall dubbed 'Magic Waterfall'. A thrilling trekking experience through dense forest and crystal-clear rivers."
            },
            img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "Pick up area Malang pagi hari",
                    "Trekking turun ke lembah Tumpak Sewu",
                    "Berendam di bawah air terjun",
                    "Foto di spot terbaik",
                    "Kembali ke Malang sore hari"
                ],
                en: [
                    "Pick up in Malang area in the morning",
                    "Trek down to Tumpak Sewu valley",
                    "Bathe beneath the waterfall",
                    "Photo session at best spots",
                    "Return to Malang in the afternoon"
                ]
            },
            price: "Rp 500.000 / orang"
        },
        {
            title: "Private Trip Banyuwangi",
            desc: {
                id: "Explore pesona Banyuwangi dalam satu paket: Pantai Pulau Merah, De Djawatan, dan destinasi tersembunyi lainnya yang masih alami.",
                en: "Explore the charm of Banyuwangi in one package: Pulau Merah Beach, De Djawatan, and other pristine hidden destinations."
            },
            img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "Pick up area Malang / Banyuwangi",
                    "Kunjungi Pantai Pulau Merah",
                    "Eksplorasi De Djawatan (hutan trembesi)",
                    "Makan siang seafood segar",
                    "Kembali ke titik awal sore hari"
                ],
                en: [
                    "Pick up in Malang / Banyuwangi area",
                    "Visit Pulau Merah Beach",
                    "Explore De Djawatan (trembesi forest)",
                    "Fresh seafood lunch",
                    "Return to starting point in the afternoon"
                ]
            },
            price: "Rp 600.000 / orang"
        },
        {
            title: "Private Trip Baluran",
            desc: {
                id: "Jelajahi 'Africa van Java' di Taman Nasional Baluran. Eksplorasi savana Bekol yang membentang luas dan indahnya Pantai Bama dalam satu hari.",
                en: "Explore the 'Africa of Java' at Baluran National Park. Roam the vast Bekol savanna and the beautiful Bama Beach in one amazing day."
            },
            img: "https://picsum.photos/id/1018/600/400",
            itinerary: {
                id: [
                    "Pick up area Malang/Banyuwangi pagi hari",
                    "Memasuki kawasan Taman Nasional Baluran",
                    "Foto sesi di Savana Bekol",
                    "Santai di Pantai Bama dan Mangrove",
                    "Kembali ke titik awal sore hari"
                ],
                en: [
                    "Pick up in Malang/Banyuwangi area in the morning",
                    "Entering Baluran National Park",
                    "Photo session at Bekol Savanna",
                    "Relax at Bama Beach and Mangrove trail",
                    "Return to starting point in the afternoon"
                ]
            },
            price: "Rp 550.000 / orang"
        },
        {
            title: "Private Trip Malang City",
            desc: {
                id: "Nikmati kota Malang yang sejuk. Jelajahi tempat-tempat bersejarah, kampung tematik ikonik Jodipan, dan wisata kuliner legendaris khas Malang.",
                en: "Enjoy the cool breeze of Malang. Explore historic landmarks, the iconic Jodipan thematic village, and Malang's legendary culinary spots."
            },
            img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "Pick up di hotel/stasiun Malang 08.00",
                    "Kunjungan ke Kampung Warna Warni Jodipan",
                    "Jalan-jalan di Ijen Boulevard & Alun-Alun",
                    "Wisata kuliner (Bakso President / Toko Oen)",
                    "Drop off kembali di sore/malam hari"
                ],
                en: [
                    "Pick up from Malang hotel/station at 08:00",
                    "Visit Jodipan Colorful Village",
                    "Stroll around Ijen Boulevard & City Square",
                    "Culinary tour (Bakso President / Toko Oen)",
                    "Drop off in the late afternoon/evening"
                ]
            },
            price: "Rp 350.000 / orang"
        },
    ],

    CorporateMiceGroupTourDetail: [
        {
            title: "Corporate MICE Trip 1",
            desc: {
                id: "Paket perjalanan korporat untuk team building dan acara MICE profesional.",
                en: "Corporate travel packages for team building and professional MICE events."
            },
            img: "https://picsum.photos/400/300?random=20",
            itinerary: {
                id: ["Penjemputan di lokasi", "Kunjungan destinasi 1", "Makan siang bersama", "Kunjungan destinasi 2", "Kembali ke titik awal"],
                en: ["Pick up at location", "Visit destination 1", "Group lunch", "Visit destination 2", "Return to starting point"]
            },
            price: "Rp 9.999 / orang"
        },
        {
            title: "Corporate MICE Trip 2",
            desc: {
                id: "Paket group deal spesial untuk rombongan korporat besar.",
                en: "Special group deal packages for large corporate groups."
            },
            img: "https://picsum.photos/400/300?random=21",
            itinerary: {
                id: ["Penjemputan di lokasi", "Sesi team building", "Kunjungan destinasi utama", "Makan malam gala", "Kembali ke titik awal"],
                en: ["Pick up at location", "Team building session", "Visit main destination", "Gala dinner", "Return to starting point"]
            },
            price: "Rp 9.999 / orang"
        },
    ],

    TransportTravelDetail: [
        {
            title: "Transport Travel 1",
            desc: {
                id: "Layanan transportasi nyaman untuk perjalanan wisata dalam kota maupun luar kota.",
                en: "Comfortable transportation services for city tours and intercity travels."
            },
            img: "https://picsum.photos/400/300?random=30",
            itinerary: {
                id: ["Armada AC full", "Supir berpengalaman", "Tepat waktu", "Asuransi perjalanan", "Fleksibel rute"],
                en: ["Fully AC fleet", "Experienced driver", "On-time arrival", "Travel insurance", "Flexible routes"]
            },
            price: "Rp 9.999 / orang"
        },
        {
            title: "Transport Travel 2",
            desc: {
                id: "Armada premium untuk perjalanan jauh dengan kenyamanan maksimal.",
                en: "Premium fleet for long journeys with maximum comfort."
            },
            img: "https://picsum.photos/400/300?random=31",
            itinerary: {
                id: ["Armada Premium AC", "Kursi reclining", "Free WiFi", "Supir profesional", "Layanan door-to-door"],
                en: ["Premium AC fleet", "Reclining seats", "Free WiFi", "Professional driver", "Door-to-door service"]
            },
            price: "Rp 9.999 / orang"
        },
    ],

    OpenTripDetail: [
        {
            title: "Open Trip 1",
            desc: {
                id: "Bergabung bersama traveler lain dengan harga terjangkau dan pengalaman seru!",
                en: "Join other travelers at affordable prices for thrilling experiences!"
            },
            img: "https://picsum.photos/400/300?random=40",
            itinerary: {
                id: ["Meeting point pagi hari", "Kunjungan destinasi 1", "Makan siang", "Kunjungan destinasi 2", "Kembali sore hari"],
                en: ["Morning meeting point", "Visit destination 1", "Lunch break", "Visit destination 2", "Return in the afternoon"]
            },
            price: "Rp 9.999 / orang"
        },
        {
            title: "Open Trip 2",
            desc: {
                id: "Open trip eksklusif ke destinasi tersembunyi dengan kuota terbatas.",
                en: "Exclusive open trip to hidden destinations with limited spots."
            },
            img: "https://picsum.photos/400/300?random=41",
            itinerary: {
                id: ["Keberangkatan subuh", "Perjalanan ke destinasi", "Eksplorasi bebas", "Foto session", "Kembali malam hari"],
                en: ["Early dawn departure", "Journey to destination", "Free exploration", "Photo session", "Return late night"]
            },
            price: "Rp 9.999 / orang"
        },
    ]
};

const categoryArray = tourData[dest] || [];
let data = categoryArray[tourIndex];

if (!data) {
    data = {
        title: "Tour Not Found",
        desc: "The requested tour could not be found.",
        img: "https://picsum.photos/400/300?random=16",
        itinerary: [],
        price: "N/A"
    };
}

if (document.getElementById("detail-title")) {
    const lang = window.currentLang || 'id';
    document.getElementById("detail-title").textContent = data.title;
    document.getElementById("detail-desc").textContent = data.desc[lang] || data.desc;
    document.getElementById("detail-img").src = data.img;
    document.getElementById("detail-price").textContent = data.price;

    const itineraryList = document.getElementById("detail-itinerary");
    itineraryList.innerHTML = "";
    
    // Pastikan array itinerary aman jika data tour belum di-update formatnya
    const itArr = Array.isArray(data.itinerary) ? data.itinerary : (data.itinerary[lang] || data.itinerary.id);
    
    itArr.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itineraryList.appendChild(li);
    });

    // Update link WA supaya otomatis ada nama tour-nya
    const waLink = document.querySelector(".btn-primary");
    if(waLink) {
        waLink.href = waLink.href.replace("[TOUR_NAME]", data.title);
    }
}