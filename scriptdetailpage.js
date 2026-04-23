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
                id: "Trip privat ke Bromo - bebas pilih tanggal, tidak digabung orang lain. Saksikan sunrise spektakuler, lautan pasir, dan kawah aktif Bromo bersama guide fotografer profesional kami!",
                en: "Private Bromo trip - choose your own date, not joined with others. Witness a spectacular sunrise, the sea of sand, and Bromo crater with our professional photographer guide!"
            },
            img: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=600&h=400&fit=crop",
            destinations: [
                "Sunrise Point", "Bukit Widodaren", "Kawah Bromo",
                "Gunung Batok", "Pura Luhur Poten", "Savanna",
                "Lautan Pasir", "Lembah Watangan"
            ],
            itinerary: {
                id: [
                    "00.00-01.00 - Penjemputan peserta di meeting point",
                    "01.00-02.00 - Perjalanan menuju basecamp jeep",
                    "02.00-03.30 - Perjalanan menuju sunrise point",
                    "03.30-06.00 - Menikmati sunrise (sesi foto)",
                    "06.00-07.00 - Explore Bukit Widodaren & Gunung Batok",
                    "07.00-08.00 - Explore Kawah Bromo & Pura Luhur Poten",
                    "08.00-09.30 - Explore Pusung Gede & Watu Singo",
                    "09.30-10.30 - Explore Savanna & Lembah Watangan",
                    "10.30-12.00 - Perjalanan pulang, kembali ke meeting point",
                    "Catatan: Itinerary dapat berubah menyesuaikan kondisi lapangan dan cuaca"
                ],
                en: [
                    "00:00-01:00 - Pick up at meeting point",
                    "01:00-02:00 - Drive to jeep basecamp",
                    "02:00-03:30 - Drive to sunrise point",
                    "03:30-06:00 - Enjoy sunrise (photo session)",
                    "06:00-07:00 - Explore Bukit Widodaren & Gunung Batok",
                    "07:00-08:00 - Explore Bromo Crater & Pura Luhur Poten",
                    "08:00-09:30 - Explore Pusung Gede & Watu Singo",
                    "09:30-10:30 - Explore Savanna & Lembah Watangan",
                    "10:30-12:00 - Return journey to meeting point",
                    "Note: Itinerary may change depending on field conditions and weather"
                ]
            },
            packages: [
                {
                    name: "Paket A",
                    subtitle: "Paket A Private trip bromo Dokumentasi (Foto)",
                    note: "Harga dalam ribuan (per orang). Dapat berubah mengikuti kebijakan TNBTS. Jeep Long tidak selalu tersedia.",
                    groups: [
                        {
                            groupName: "Short Jeep",
                            rows: [
                                { pax: "2", weekday: "Rp 800.000", weekend: "Rp 825.000" },
                                { pax: "3", weekday: "Rp 555.000", weekend: "Rp 580.000" },
                                { pax: "4", weekday: "Rp 430.000", weekend: "Rp 455.000" },
                                { pax: "5", weekday: "Rp 355.000", weekend: "Rp 380.000" }
                            ]
                        },
                        {
                            groupName: "Long Jeep",
                            rows: [
                                { pax: "6", weekday: "Rp 340.000", weekend: "Rp 365.000" },
                                { pax: "7", weekday: "Rp 335.000", weekend: "Rp 360.000" },
                                { pax: "8", weekday: "Rp 300.000", weekend: "Rp 325.000" },
                                { pax: "9", weekday: "Rp 275.000", weekend: "Rp 300.000" },
                                { pax: "10", weekday: "Rp 255.000", weekend: "Rp 280.000" }
                            ]
                        }
                    ]
                },
                {
                    name: "Paket B",
                    subtitle: "Paket B Private trip bromo Dokumentasi (Foto & Video)",
                    note: "Harga dalam ribuan (per orang). Dapat berubah mengikuti kebijakan TNBTS. Jeep Long tidak selalu tersedia.",
                    groups: [
                        {
                            groupName: "Short Jeep",
                            rows: [
                                { pax: "2", weekday: "Rp 825.000", weekend: "Rp 850.000" },
                                { pax: "3", weekday: "Rp 570.000", weekend: "Rp 595.000" },
                                { pax: "4", weekday: "Rp 445.000", weekend: "Rp 470.000" },
                                { pax: "5", weekday: "Rp 365.000", weekend: "Rp 390.000" }
                            ]
                        },
                        {
                            groupName: "Long Jeep",
                            rows: [
                                { pax: "6", weekday: "Rp 350.000", weekend: "Rp 375.000" },
                                { pax: "7", weekday: "Rp 345.000", weekend: "Rp 370.000" },
                                { pax: "8", weekday: "Rp 310.000", weekend: "Rp 335.000" },
                                { pax: "9", weekday: "Rp 285.000", weekend: "Rp 310.000" },
                                { pax: "10", weekday: "Rp 265.000", weekend: "Rp 290.000" }
                            ]
                        }
                    ]
                },
                {
                    name: "Paket C",
                    subtitle: "Paket C Private trip bromo Non Dokumentasi",
                    type: "unit",
                    unitTitle: "Paket Sewa Jeep Bromo Termasuk Penjemputan di area Kota Malang",
                    unitRows: [
                        { type: "Short Jeep", capacity: "1 - 5 orang", price: "Rp 1.200.000" },
                        { type: "Long Jeep", capacity: "6 - 10 orang", price: "Rp 1.800.000" }
                    ],
                    notes: [
                        "Harga tersebut hanya untuk Jeep, bbm, driver dan shuttle (penjemputan di area Kota Malang)",
                        "Tidak termasuk Tiket TNBTS dan Dokumentasi.",
                        "Datang langsung ke Basecamp (Tumpang) potongan Rp 200.000 dari harga normal."
                    ]
                }
            ],
            tripInfo: [
                "Meeting Point: Area Kota Malang (Hotel, stasiun, dll)",
                "Durasi: 10-12 jam (midnight trip)",
                "Tersedia: Bebas pilih tanggal",
                "Min. Peserta: 2 orang",
                "Booking: Min. H-1 sebelum keberangkatan",
                "Physical Activity: Level 4 (easy & relaxed)"
            ],
            include: [
                "Jeep Hardtop 4x4",
                "Penjemputan area Kota Malang (AC)",
                "Tiket masuk TNBTS",
                "Friendly guide as photographer",
                "Dokumentasi foto unlimited",
                "So edit foto",
                "Cinematic reels video"
            ],
            exclude: [
                "Makan (ditanggung sendiri)",
                "Pengeluaran pribadi",
                "Akomodasi (jika menginap)"
            ],
            extraCharges: [
                "Pickup Kota Batu: +Rp 150.000/group",
                "Cinematic Video: +Rp 300.000/group",
                "Drone Video: +Rp 1.000.000/group",
                "Foreign Tourist: +Rp 255.000/pax",
                "High Season: +Rp 50.000/pax"
            ],
            bromoClosedDates: [
                { dates: "17-18 Jan", reason: "Penutupan akhir Wulan Kapitu" },
                { dates: "19-20 Mar", reason: "Hari raya Nyepi" },
                { dates: "6-12 Apr", reason: "Penutupan setelah Libur Idul Fitri" },
                { dates: "30 Mei - 2 Jun", reason: "Hari raya Kasada & pembersihan" },
                { dates: "8-9 Des", reason: "Penutupan awal Wulan Kapitu" }
            ],
            price: "Mulai Rp 255.000 / orang"
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

    // === DESTINATIONS TAGS ===
    const destSection = document.getElementById('destinations-section');
    const destTags = document.getElementById('destinations-tags');
    if (data.destinations && data.destinations.length > 0 && destSection && destTags) {
        destSection.style.display = '';
        data.destinations.forEach(d => {
            const tag = document.createElement('span');
            tag.className = 'dest-tag';
            tag.textContent = d;
            destTags.appendChild(tag);
        });
    }

    // === PACKAGES (Paket A, B, C) ===
    const packagesSection = document.getElementById('packages-section');
    if (data.packages && data.packages.length > 0 && packagesSection) {
        packagesSection.style.display = '';
        const WA_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" class="wa-btn-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
        data.packages.forEach(pkg => {
            const box = document.createElement('div');
            box.className = 'detail-section package-box';
            let inner = `<div class="pkg-header"><span class="pkg-badge">${pkg.name}</span><span class="pkg-subtitle">${pkg.subtitle}</span></div>`;
            if (pkg.type === 'unit') {
                inner += `<p class="pkg-unit-title">${pkg.unitTitle}</p>`;
                inner += `<div class="price-table-wrapper"><table class="price-table"><thead><tr><th>Jenis Jeep</th><th>Kapasitas</th><th>Harga</th></tr></thead><tbody>`;
                pkg.unitRows.forEach(r => {
                    inner += `<tr><td>${r.type}</td><td>${r.capacity}</td><td class="highlight-price">${r.price}</td></tr>`;
                });
                inner += `</tbody></table></div>`;
                if (pkg.notes && pkg.notes.length) {
                    inner += `<ul class="pkg-notes">`;
                    pkg.notes.forEach(n => { inner += `<li>• ${n}</li>`; });
                    inner += `</ul>`;
                }
            } else {
                inner += `<div class="price-table-wrapper"><table class="price-table grouped-table"><thead><tr><th>Jeep</th><th>Pax</th><th>Weekday</th><th>Weekend</th></tr></thead><tbody>`;
                pkg.groups.forEach(grp => {
                    grp.rows.forEach((r, i) => {
                        inner += `<tr>`;
                        if (i === 0) inner += `<td rowspan="${grp.rows.length}" class="jeep-group-cell">${grp.groupName}</td>`;
                        inner += `<td>${r.pax}</td><td class="highlight-price">${r.weekday}</td><td class="highlight-price">${r.weekend}</td></tr>`;
                    });
                });
                inner += `</tbody></table></div>`;
                if (pkg.note) inner += `<p class="pkg-note">📌 ${pkg.note}</p>`;
            }
            inner += `<a href="${waUrl}" class="btn-primary btn-wa pkg-book-btn">${WA_SVG} Book ${pkg.name}</a>`;
            box.innerHTML = inner;
            packagesSection.appendChild(box);
        });
    }

    // === BROMO CLOSED DATES ===
    const bromoClosure = document.getElementById('bromo-closure-section');
    const bromoGrid = document.getElementById('bromo-closure-grid');
    if (data.bromoClosedDates && data.bromoClosedDates.length > 0 && bromoClosure && bromoGrid) {
        bromoClosure.style.display = '';
        data.bromoClosedDates.forEach(item => {
            const card = document.createElement('div');
            card.className = 'closure-card';
            card.innerHTML = `<span class="closure-dates">${item.dates}</span><span class="closure-reason">${item.reason}</span>`;
            bromoGrid.appendChild(card);
        });
    }
}
