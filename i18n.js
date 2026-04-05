// Deteksi bahasa browser (lokasi)
const userLang = navigator.language || navigator.userLanguage;
window.currentLang = userLang.toLowerCase().startsWith('id') ? 'id' : 'en';
// window.currentLang = 'id';

const i18nDictionary = {
    // DESTINATIONS / WHAT WE OFFER
    "offer-label": {
        id: "WHAT WE OFFER",
        en: "WHAT WE OFFER"
    },
    "offer-title": {
        id: "One Stop Solutions To Explore East Java",
        en: "One Stop Solutions To Explore East Java"
    },
    "dest-custom-title": {
        id: "Customized / Private Trip",
        en: "Customized / Private Trip"
    },
    "dest-custom-desc": {
        id: "Rancang perjalanan impianmu sendiri, fleksibel sesuai jadwal & budget kamu.",
        en: "Design your dream journey, perfectly tailored to your schedule & budget."
    },
    "dest-corp-title": {
        id: "Corporate / MICE / Group Trip",
        en: "Corporate / MICE / Group Trip"
    },
    "dest-corp-desc": {
        id: "Solusi lengkap untuk team building, gathering, dan perjalanan rombongan korporat.",
        en: "Complete solutions for team building, gatherings, and corporate group travels."
    },
    "dest-trans-title": {
        id: "Transport Travel",
        en: "Transport Travel"
    },
    "dest-trans-desc": {
        id: "Armada nyaman & berpengalaman siap antar-jemput ke seluruh destinasi Jawa Timur.",
        en: "Comfortable & experienced fleet ready for transfers to all East Java destinations."
    },
    "dest-open-title": {
        id: "Open Trip",
        en: "Open Trip"
    },
    "dest-open-desc": {
        id: "Bergabung dengan sesama traveler, hemat biaya dan temukan pengalaman tak terlupakan!",
        en: "Join fellow travelers, save costs and discover unforgettable experiences together!"
    },
    "cta-btn": {
        id: "Lihat Paket <span class=\"cta-arrow\">→</span>",
        en: "View Packages <span class=\"cta-arrow\">→</span>"
    },

    // WHY US
    "whyus-label": {
        id: "OUR VALUE",
        en: "OUR VALUE"
    },
    "whyus-title": {
        id: "Mengapa Memilih HereWeGo?",
        en: "Why Travel with HereWeGo?"
    },

    "whyus-guide-title": {
        id: "Pemandu Lokal Spesialis",
        en: "Expert Local Guides"
    },
    "whyus-guide-desc": {
        id: "Lahir dan besar di Jawa Timur, pemandu bersertifikat kami hafal setiap rute rahasia, memastikan perjalanan otentik.",
        en: "Born and raised in East Java, our certified guides know every hidden trail, ensuring safe and highly authentic experiences."
    },

    "whyus-flex-title": {
        id: "Itinerary Fleksibel",
        en: "Flexible Itineraries"
    },
    "whyus-flex-desc": {
        id: "Perjalanan Anda, aturan Anda. Kami merancang detail private trip 100% menyesuaikan ritme, budget, dan selera Anda.",
        en: "Your journey, your rules. We customize every detail of your private trip to match your tempo, budget, and travel style."
    },

    "whyus-price-title": {
        id: "Harga Transparan",
        en: "Transparent Pricing"
    },
    "whyus-price-desc": {
        id: "Tidak ada biaya gaib. Harga yang Anda lihat adalah harga bayar, sudah menanggung transportasi & tiket wisata utama.",
        en: "No hidden fees or surprise costs. What you see is what you pay, already covering transports and main entrance tickets."
    },

    "whyus-support-title": {
        id: "Customer Support 24/7",
        en: "24/7 Dedicated Support"
    },
    "whyus-support-desc": {
        id: "Mulai dari persiapan pertama hingga Anda kembali pulang, tim asisten kami siap membantu melayani kapan saja.",
        en: "From the moment you contact us until you return home safely, our team provides round-the-clock friendly assistance."
    },

    // FLEET / ARMADA KAMI
    "fleet-label": {
        id: "KENDARAAN KAMI",
        en: "OUR FLEET"
    },
    "fleet-title": {
        id: "Pilihan Armada Terbaik Untuk Anda",
        en: "Best Fleet Selection For You"
    },
    "fleet-seat-14": { id: "Kapasitas 14 Kursi", en: "14 Seats Capacity" },
    "fleet-seat-7": { id: "Kapasitas 7 Kursi", en: "7 Seats Capacity" },
    "fleet-seat-19": { id: "Kapasitas 19 Kursi", en: "19 Seats Capacity" },
    "fleet-seat-6": { id: "Kapasitas 6 Kursi", en: "6 Seats Capacity" },
    "fleet-feature-ac": { id: "Full AC & Audio", en: "Full AC & Audio" },
    "fleet-feature-driver": { id: "Sopir Berpengalaman", en: "Experienced Driver" }
};

function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18nDictionary[key] && i18nDictionary[key][window.currentLang]) {
            el.innerHTML = i18nDictionary[key][window.currentLang];
        }
    });
}

function setCopyrightYear() {
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Run immediately to prevent layout glitch or wait for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    translatePage();
    setCopyrightYear();
});
