/**
 * armada.js — Data & Renderer Armada HereWeGo
 * Dipakai di: index.html (section #fleet) & category transport travel
 */

const WA_BASE = "https://wa.me/6285185636301";

const CLOCK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const CAR_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`;
const PAX_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`;
const WA_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ============================================================
// DATA ARMADA
// Tambah atau edit armada di sini — otomatis tampil di semua halaman
// ============================================================
const armadaData = [
    {
        name: "HIACE COMMUTER",
        img: "IMAGES/hiace_commuter.png",
        seats: 14,
        priceFullDay: "Rp 800.000",
        price12Jam: "Rp 700.000",
        waText: "Saya%20tertarik%20untuk%20sewa%20Hiace%20Commuter.%20Bisa%20info%20harga%20dan%20ketersediaan%3F"
    },
    {
        name: "HIACE PREMIO",
        img: "IMAGES/hiace_premio.png",
        seats: 14,
        priceFullDay: "Rp 950.000",
        price12Jam: "Rp 850.000",
        waText: "Saya%20tertarik%20untuk%20sewa%20Hiace%20Premio.%20Bisa%20info%20harga%20dan%20ketersediaan%3F"
    },
    {
        name: "TOYOTA AVANZA",
        img: "IMAGES/avanza.png",
        seats: 7,
        priceFullDay: "Rp 500.000",
        price12Jam: "Rp 450.000",
        waText: "Saya%20tertarik%20untuk%20sewa%20Toyota%20Avanza.%20Bisa%20info%20harga%20dan%20ketersediaan%3F"
    },
    {
        name: "INNOVA REBORN",
        img: "IMAGES/innova_reborn.png",
        seats: 7,
        priceFullDay: "Rp 700.000",
        price12Jam: "Rp 600.000",
        waText: "Saya%20tertarik%20untuk%20sewa%20Innova%20Reborn.%20Bisa%20info%20harga%20dan%20ketersediaan%3F"
    },
    {
        name: "ELF LONG",
        img: "IMAGES/elf_long.png",
        seats: 18,
        priceFullDay: "Rp 1.300.000",
        price12Jam: "Rp 1.200.000",
        waText: "Saya%20tertarik%20untuk%20sewa%20Elf%20Long.%20Bisa%20info%20harga%20dan%20ketersediaan%3F"
    },
    {
        name: "FORTUNER",
        img: "IMAGES/fortuner.png",
        seats: 5,
        priceFullDay: "Rp 1.500.000",
        price12Jam: "Rp 1.400.000",
        waText: "Saya%20tertarik%20untuk%20sewa%20Fortuner.%20Bisa%20info%20harga%20dan%20ketersediaan%3F"
    }
];

// ============================================================
// RENDERER — build satu fleet-card dari data armada
// ============================================================
function buildFleetCard(armada) {
    const waHref = `${WA_BASE}?text=Halo%20HereWeGo!%20${armada.waText}`;
    return `
        <div class="fleet-card fade">
            <div class="fleet-capacity-badge">
                ${PAX_SVG}
                ${armada.seats} Kursi
            </div>
            <div class="fleet-img-wrap">
                <img src="${armada.img}" alt="${armada.name}" class="fleet-vehicle-img">
            </div>
            <div class="fleet-info">
                <h3 class="fleet-name">${armada.name}</h3>
                <div class="fleet-price-row">
                    <div class="fleet-price-col">
                        <span class="fleet-price-label">${CLOCK_SVG} Full Day</span>
                        <span class="fleet-price-amount">${armada.priceFullDay}</span>
                    </div>
                    <div class="fleet-price-divider"></div>
                    <div class="fleet-price-col">
                        <span class="fleet-price-label">${CLOCK_SVG} 12 Jam</span>
                        <span class="fleet-price-amount">${armada.price12Jam}</span>
                    </div>
                </div>
                <div class="fleet-includes">
                    ${CAR_SVG}
                    Unit, Driver, dan BBM
                </div>
                <a href="${waHref}" target="_blank" class="fleet-btn">
                    ${WA_SVG}
                    Pesan
                </a>
            </div>
        </div>`;
}

// ============================================================
// RENDER KE CONTAINER — panggil ini di halaman mana pun
// renderArmada("fleet-grid") → render ke elemen dengan id tersebut
// ============================================================
function renderArmada(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = armadaData.map(buildFleetCard).join("");
    
    // Ensure cards are visible (fixes issue where dynamic .fade cards stay hidden)
    setTimeout(() => {
        container.querySelectorAll('.fade').forEach(el => el.classList.add('show'));
    }, 100);
}

// Auto-render jika ada elemen #fleet-grid di halaman
document.addEventListener("DOMContentLoaded", function () {
    renderArmada("fleet-grid");
});
