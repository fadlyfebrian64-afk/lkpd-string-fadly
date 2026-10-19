// ==========================================
// AKTIVITAS 1: Eksperimen "10" + "20"
// ==========================================
function runEksperimen1() {
    let a = "10";
    let b = "20";
    let hasil = a + b; // Menghasilkan "1020" (penggabungan string)
    
    // Menampilkan ke console browser & ke elemen web
    console.log("--- AKTIVITAS 1 ---");
    console.log(a + b); 
    
    const outputDiv = document.getElementById("output-exp1");
    outputDiv.innerText = `console.log(a + b);\nOutput: "${hasil}" (Tipe Data: ${typeof hasil})`;
}

// ==========================================
// AKTIVITAS 2: Menemukan Tipe Data (typeof)
// ==========================================
// Otomatis dijalankan saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
    let nama = "Asep";
    let umur = 16;

    console.log("--- AKTIVITAS 2 ---");
    console.log(typeof nama); // string
    console.log(typeof umur); // number

    // Menampilkan hasil typeof ke tabel web
    document.getElementById("type-nama").innerText = typeof nama;
    document.getElementById("type-umur").innerText = typeof umur;
});

// ==========================================
// AKTIVITAS 3: Konversi String Menjadi Number
// ==========================================
function runEksperimen3() {
    let a = "10";
    let b = "20";
    let hasil = Number(a) + Number(b); // Dikonversi menjadi 10 + 20 = 30

    console.log("--- AKTIVITAS 3 ---");
    console.log(hasil);

    const outputDiv = document.getElementById("output-exp3");
    outputDiv.innerText = `let hasil = Number(a) + Number(b);\nconsole.log(hasil);\nOutput: ${hasil} (Tipe Data: ${typeof hasil})`;
}

// ==========================================
// AKTIVITAS 4: Program Kasir Sederhana
// ==========================================
function hitungKasir() {
    let hargaInput = document.getElementById("kasir-harga").value;
    let jumlahInput = document.getElementById("kasir-jumlah").value;

    let harga = Number(hargaInput);
    let jumlah = Number(jumlahInput);

    if (isNaN(harga) || isNaN(jumlah) || hargaInput === "" || jumlahInput === "") {
        document.getElementById("result-kasir").innerText = "Masukkan angka harga dan jumlah yang valid!";
        return;
    }

    let total = harga * jumlah;

    console.log("--- AKTIVITAS 4 (KASIR) ---");
    console.log("Harga: " + harga);
    console.log("Jumlah: " + jumlah);
    console.log("Total belanja = " + total);

    document.getElementById("result-kasir").innerText = `Total belanja = Rp ${total.toLocaleString('id-ID')} (Tercetak di console.log)`;
}

// ==========================================
// G. TANTANGAN: Program Hitung Nilai Rata-rata
// ==========================================
function hitungRataRata() {
    let tugas = Number(document.getElementById("nilai-tugas").value);
    let uts = Number(document.getElementById("nilai-uts").value);
    let uas = Number(document.getElementById("nilai-uas").value);

    let rataRata = (tugas + uts + uas) / 3;

    console.log("--- TANTANGAN HITUNG NILAI ---");
    console.log("Nilai Tugas: " + tugas);
    console.log("Nilai UTS: " + uts);
    console.log("Nilai UAS: " + uas);
    console.log("Rata-rata: " + rataRata.toFixed(2));

    if (isNaN(rataRata)) {
        document.getElementById("result-nilai").innerText = "Isi semua input nilai dengan benar!";
    } else {
        document.getElementById("result-nilai").innerText = `Rata-rata Nilai = ${rataRata.toFixed(2)} (Tercetak di console.log)`;
    }
}