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
                id: "Saksikan keindahan Gunung Bromo dari sunrise point Penanjakan, lekukan lautan pasir, dan kawah aktifnya yang ikonik. Trip ini dirancang privat sesuai jadwal kamu — fleksibel, nyaman, dan tak terlupakan!",
                en: "Witness the breathtaking beauty of Mount Bromo from the Penanjakan sunrise point, the vast sea of sand, and its iconic active crater. This private trip is designed around your schedule — flexible, comfortable, and unforgettable!"
            },
            img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "🕛 00.00 — Pick up di area Malang / Surabaya (by request)",
                    "🌄 03.00–04.00 — Tiba di Pananjakan / Seruni Point, siap menyaksikan sunrise",
                    "☀️ 05.00–06.00 — Menikmati golden sunrise Bromo yang spektakuler",
                    "🏜️ 06.30 — Turun menuju Lautan Pasir & Kawah Bromo",
                    "🐴 07.00 — Naik kuda (optional) menuju tangga kawah Bromo",
                    "📸 07.30–08.30 — Foto session di kawah & spot-spot terbaik",
                    "🍽️ 09.00 — Sarapan di warung lokal",
                    "🏠 10.00–11.00 — Perjalanan kembali ke Malang / Surabaya"
                ],
                en: [
                    "🕛 00:00 — Pick up in Malang / Surabaya area (by request)",
                    "🌄 03:00–04:00 — Arrive at Pananjakan / Seruni Point for sunrise viewing",
                    "☀️ 05:00–06:00 — Enjoy the spectacular golden Bromo sunrise",
                    "🏜️ 06:30 — Head to the Sea of Sand & Bromo Crater",
                    "🐴 07:00 — Horse ride (optional) to the Bromo crater steps",
                    "📸 07:30–08:30 — Photo session at the crater & best spots",
                    "🍽️ 09:00 — Breakfast at a local warung",
                    "🏠 10:00–11:00 — Return to Malang / Surabaya"
                ]
            },
            priceTable: [
                { pax: "2 Pax", armada: "Avanza / Xenia", price: "Rp 400.000/orang" },
                { pax: "3 Pax", armada: "Avanza / Xenia", price: "Rp 350.000/orang" },
                { pax: "4 Pax", armada: "Avanza / Xenia", price: "Rp 300.000/orang" },
                { pax: "5–6 Pax", armada: "Hiace / Avanza", price: "Rp 275.000/orang" },
                { pax: "7–10 Pax", armada: "Hiace Commuter", price: "Rp 250.000/orang" },
                { pax: "11–14 Pax", armada: "Hiace Premio / ELF", price: "Rp 225.000/orang" },
                { pax: "15–19 Pax", armada: "Hiace Premio / ELF", price: "Rp 200.000/orang" },
                { pax: "20–25 Pax", armada: "Bus Medium", price: "Rp 175.000/orang" },
            ],
            tripInfo: [
                "📍 Meeting Point: Malang / Surabaya (by request)",
                "⏱️ Durasi: ±10–11 jam (midnight trip)",
                "🗓️ Tersedia: Setiap hari (by request)",
                "👥 Min. Peserta: 2 orang",
                "📞 Booking: Min. H-1 sebelum keberangkatan"
            ],
            include: [
                "🚗 Transportasi PP (AC & WiFi)",
                "👨‍✈️ Driver berpengalaman",
                "🗺️ Trip Organizer / Guide",
                "💧 Air mineral selama perjalanan",
                "🎫 Tiket masuk Taman Nasional Bromo",
                "🅿️ Biaya parkir"
            ],
            exclude: [
                "🍽️ Makan (ditanggung sendiri)",
                "🐴 Sewa kuda (Rp 100.000–150.000/kuda)",
                "🎟️ Jeep Lautan Pasir (optional, ±Rp 600.000–800.000/jeep)",
                "📷 Dokumentasi/foto profesional",
                "🏨 Akomodasi (jika menginap)",
                "💡 Pengeluaran pribadi"
            ],
            extraCharges: [
                "🐴 Sewa kuda: Rp 100.000–150.000/kuda",
                "🚙 Jeep Kawah Bromo: Rp 600.000–800.000/unit (maks 5 orang)",
                "🏞️ Tiket masuk Savana: Rp 5.000/orang (sudah include jika booking jeep)"
            ],
            price: "Mulai Rp 175.000 / orang"
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
                id: "Kunjungi Tumpak Sewu, air terjun tirai selebar 120m yang dijuluki 'Magic Waterfall'. Nikmati trekking seru melewati hutan lebat, jembatan gantung, dan sungai jernih — sebuah petualangan yang tak terlupakan!",
                en: "Visit Tumpak Sewu, a 120m wide curtain waterfall dubbed the 'Magic Waterfall'. Enjoy an exciting trek through dense jungle, suspension bridges, and crystal rivers — a truly unforgettable adventure!"
            },
            img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&h=400&fit=crop",
            itinerary: {
                id: [
                    "🌅 06.30–07.00 — Pick up dijemput di area Malang / Kota",
                    "🚗 08.00–09.00 — Perjalanan menuju Pronojiwo, Lumajang",
                    "🥾 09.30 — Tiba, registrasi & briefing safety",
                    "🌿 10.00 — Mulai trekking turun menuju lembah Tumpak Sewu",
                    "💧 11.00 — Tiba di bawah air terjun, berendam & foto session",
                    "🏔️ 12.00 — Trekking menuju Goa Tetes (optional)",
                    "🍽️ 13.00–14.00 — Makan siang di warung sekitar",
                    "🚶 14.30 — Trekking kembali ke atas (exit)",
                    "🚗 15.30 — Perjalanan kembali ke Malang",
                    "🏠 17.00–18.00 — Tiba di Malang / titik awal"
                ],
                en: [
                    "🌅 06:30–07:00 — Pick up in Malang / City area",
                    "🚗 08:00–09:00 — Drive to Pronojiwo, Lumajang",
                    "🥾 09:30 — Arrive, registration & safety briefing",
                    "🌿 10:00 — Begin trekking down to Tumpak Sewu valley",
                    "💧 11:00 — Arrive under the waterfall, swim & photo session",
                    "🏔️ 12:00 — Trek to Goa Tetes (optional)",
                    "🍽️ 13:00–14:00 — Lunch at local warungs",
                    "🚶 14:30 — Trek back up (exit)",
                    "🚗 15:30 — Return drive to Malang",
                    "🏠 17:00–18:00 — Arrive in Malang / start point"
                ]
            },
            priceTable: [
                { pax: "2 Pax", armada: "Avanza / Xenia", price: "Rp 475.000/orang" },
                { pax: "3 Pax", armada: "Avanza / Xenia", price: "Rp 375.000/orang" },
                { pax: "4 Pax", armada: "Avanza / Xenia", price: "Rp 300.000/orang" },
                { pax: "5–6 Pax", armada: "Hiace / Avanza", price: "Rp 275.000/orang" },
                { pax: "7–10 Pax", armada: "Hiace Commuter", price: "Rp 250.000/orang" },
                { pax: "11–14 Pax", armada: "Hiace Premio / ELF", price: "Rp 225.000/orang" },
                { pax: "15–19 Pax", armada: "Hiace Premio / ELF", price: "Rp 200.000/orang" },
                { pax: "20–25 Pax", armada: "Bus Medium", price: "Rp 175.000/orang" },
            ],
            tripInfo: [
                "📍 Meeting Point: Area Malang Kota (by request)",
                "⏱️ Durasi: ±10–12 jam (day trip)",
                "🗓️ Tersedia: Setiap hari (by request)",
                "👥 Min. Peserta: 2 orang",
                "📞 Booking: Min. H-1 sebelum keberangkatan",
                "⛰️ Level Trekking: Menengah (ada turunan curam & tangga)"
            ],
            include: [
                "🚗 Transportasi PP (AC & WiFi)",
                "👨‍✈️ Driver berpengalaman",
                "🗺️ Trip Organizer / Guide lokal",
                "💧 Air mineral selama perjalanan",
                "🎫 Tiket masuk Tumpak Sewu",
                "🅿️ Biaya parkir",
                "🧴 Safety briefing"
            ],
            exclude: [
                "🍽️ Makan siang (ditanggung sendiri)",
                "👟 Sewa sepatu anti-slip (optional, ±Rp 15.000)",
                "🏔️ Tiket Goa Tetes (jika dikunjungi, ±Rp 5.000)",
                "📷 Dokumentasi/foto profesional",
                "🏨 Akomodasi (jika menginap)",
                "💡 Pengeluaran pribadi"
            ],
            extraCharges: [
                "👟 Sewa sandal/sepatu anti-slip: Rp 15.000–25.000",
                "🚁 Pemandu ekstra (untuk grup ≥15 orang): by request",
                "🏔️ Goa Tetes: Rp 5.000/orang (optional)"
            ],
            price: "Mulai Rp 175.000 / orang"
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

    // Update harga di hero badge juga
    const heroPriceEl = document.getElementById("detail-price-hero");
    if (heroPriceEl) heroPriceEl.textContent = data.price;

    // === ITINERARY ===
    const itineraryList = document.getElementById("detail-itinerary");
    itineraryList.innerHTML = "";
    const itArr = Array.isArray(data.itinerary) ? data.itinerary : (data.itinerary[lang] || data.itinerary.id);
    itArr.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        itineraryList.appendChild(li);
    });

    // === PRICE TABLE ===
    const priceTableSection = document.getElementById("price-table-section");
    const priceTableBody = document.getElementById("price-table-body");
    if (data.priceTable && data.priceTable.length > 0 && priceTableSection && priceTableBody) {
        priceTableSection.style.display = "";
        data.priceTable.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.pax}</td>
                <td>${row.armada}</td>
                <td class="highlight-price">${row.price}</td>
            `;
            priceTableBody.appendChild(tr);
        });
    }

    // === TRIP INFO ===
    const tripInfoSection = document.getElementById("trip-info-section");
    const tripInfoList = document.getElementById("trip-info-list");
    if (data.tripInfo && data.tripInfo.length > 0 && tripInfoSection && tripInfoList) {
        tripInfoSection.style.display = "";
        data.tripInfo.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            tripInfoList.appendChild(li);
        });
    }

    // === INCLUDE / EXCLUDE ===
    const incExcSection = document.getElementById("include-exclude-section");
    const includeList = document.getElementById("detail-include");
    const excludeList = document.getElementById("detail-exclude");
    if ((data.include || data.exclude) && incExcSection) {
        incExcSection.style.display = "";
        if (data.include && includeList) {
            data.include.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                includeList.appendChild(li);
            });
        }
        if (data.exclude && excludeList) {
            data.exclude.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                excludeList.appendChild(li);
            });
        }
    }

    // === EXTRA CHARGES ===
    const extraSection = document.getElementById("extra-charge-section");
    const extraList = document.getElementById("extra-charge-list");
    if (data.extraCharges && data.extraCharges.length > 0 && extraSection && extraList) {
        extraSection.style.display = "";
        data.extraCharges.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            extraList.appendChild(li);
        });
    }

    // Update link WA supaya otomatis ada nama tour-nya (kedua tombol)
    const tourName = encodeURIComponent(data.title);
    const waUrl = `https://wa.me/6285185636301?text=Halo%20HereWeGo!%20Saya%20ingin%20booking%20paket%20${tourName}.%20Bisa%20bantu%20proses%20pemesanan%3F`;

    document.querySelectorAll(".btn-primary").forEach(btn => {
        btn.href = waUrl;
    });

    const waBtn2 = document.getElementById("wa-book-btn-2");
    if (waBtn2) waBtn2.href = waUrl;
}
