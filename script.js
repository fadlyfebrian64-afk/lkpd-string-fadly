"use strict";

/* ==========================================================
   LKPD JavaScript — String, Number, dan Konversi Data
   Daftar isi:
   1. Helper   2. Aktivitas 1-4   3. Tantangan   4. Screenshot (img)
   ========================================================== */

/* 1. HELPER ------------------------------------------------ */
const $ = (id) => document.getElementById(id);

function setText(id, text) {
    $(id).textContent = text;
}

// Mengambil nilai input sebagai Number; null jika kosong/bukan angka.
function readNumber(id) {
    const raw = $(id).value.trim();
    const value = Number(raw);
    return raw === "" || Number.isNaN(value) ? null : value;
}

/* 2. AKTIVITAS --------------------------------------------- */

// Aktivitas 1: "10" + "20" -> "1020" (penggabungan String)
function runEksperimen1() {
    const a = "10";
    const b = "20";
    const hasil = a + b;

    console.log("--- AKTIVITAS 1 ---");
    console.log(hasil);

    setText("output-exp1",
        `console.log(a + b);\nOutput: "${hasil}" (Tipe Data: ${typeof hasil})`);
}

// Aktivitas 2: typeof dijalankan otomatis saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
    const nama = "Asep";
    const umur = 16;

    console.log("--- AKTIVITAS 2 ---");
    console.log(typeof nama); // string
    console.log(typeof umur); // number

    setText("type-nama", typeof nama);
    setText("type-umur", typeof umur);
});

// Aktivitas 3: konversi dengan Number() -> 30
function runEksperimen3() {
    const a = "10";
    const b = "20";
    const hasil = Number(a) + Number(b);

    console.log("--- AKTIVITAS 3 ---");
    console.log(hasil);

    setText("output-exp3",
        `let hasil = Number(a) + Number(b);\nconsole.log(hasil);\nOutput: ${hasil} (Tipe Data: ${typeof hasil})`);
}

// Aktivitas 4: kasir sederhana
function hitungKasir() {
    const harga = readNumber("kasir-harga");
    const jumlah = readNumber("kasir-jumlah");

    if (harga === null || jumlah === null) {
        setText("result-kasir", "Masukkan angka harga dan jumlah yang valid!");
        return;
    }

    const total = harga * jumlah;

    console.log("--- AKTIVITAS 4 (KASIR) ---");
    console.log("Harga: " + harga);
    console.log("Jumlah: " + jumlah);
    console.log("Total belanja = " + total);

    setText("result-kasir", `Total belanja = Rp ${total.toLocaleString("id-ID")}`);
}

/* 3. TANTANGAN --------------------------------------------- */
function hitungRataRata() {
    const tugas = readNumber("nilai-tugas");
    const uts = readNumber("nilai-uts");
    const uas = readNumber("nilai-uas");

    if (tugas === null || uts === null || uas === null) {
        setText("result-nilai", "Isi semua input nilai dengan benar!");
        return;
    }

    const rataRata = (tugas + uts + uas) / 3;

    console.log("--- TANTANGAN HITUNG NILAI ---");
    console.log("Nilai Tugas: " + tugas);
    console.log("Nilai UTS: " + uts);
    console.log("Nilai UAS: " + uas);
    console.log("Rata-rata: " + rataRata.toFixed(2));

    setText("result-nilai", `Rata-rata Nilai = ${rataRata.toFixed(2)}`);
}

/* 4. SCREENSHOT ------------------------------------------- */
// Gambar diambil dari folder images/ lewat <img src="...">.
// Jika file belum ada, kotak petunjuk nama file ditampilkan.
document.querySelectorAll(".shot img").forEach((img) => {
    const tandai = () => {
        const shot = img.closest(".shot");
        shot.dataset.file = img.getAttribute("src");
        shot.classList.add("missing");
    };
    if (img.complete && img.naturalWidth === 0) tandai();
    img.addEventListener("error", tandai);
});