// ==========================================
// LATIHAN 1: Menampilkan Output
// ==========================================
document.getElementById("pesan").textContent = "Hello World (Latihan 1 Berhasil)";
console.log("Hello World - Ditampilkan di Console");

// ==========================================
// LATIHAN 2: Alert dan Prompt
// ==========================================
function jalankanLatihan2() {
    const namaPengguna = prompt("Masukkan nama Anda:", "");
    if (namaPengguna && namaPengguna.trim() !== "") {
        alert("Halo, " + namaPengguna + "!");
        document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
    } else {
        alert("Nama belum diisi.");
    }
}

// ==========================================
// LATIHAN 3 & EKSPERIMEN 1: Function & Operasi Aritmetika
// ==========================================
function operasiDasar(a, b) {
    console.log("--- Operasi Aritmetika (a = " + a + ", b = " + b + ") ---");
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

// Eksperimen 1: Menerima nilai dari prompt
function jalankanEksperimen3() {
    const val1 = prompt("Masukkan bilangan pertama untuk Latihan 3:");
    const val2 = prompt("Masukkan bilangan kedua untuk Latihan 3:");
    if (val1 !== null && val2 !== null) {
        operasiDasar(Number(val1), Number(val2));
    }
}
// Panggil otomatis untuk demo console
operasiDasar(9, 4);

// ==========================================
// LATIHAN 4: Seleksi Kondisi if-else (Nilai)
// ==========================================
function ujiNilai() {
    const inputNilai = prompt("Masukkan nilai (0-100):");
    const nilaiMahasiswa = Number(inputNilai);

    if (inputNilai === null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
        alert("Input nilai tidak valid.");
    } else if (nilaiMahasiswa >= 60) {
        alert("Lulus");
    } else {
        alert("Belum lulus");
    }
}

// ==========================================
// LATIHAN 5: Seleksi Kondisi switch
// ==========================================
function ujiSwitch() {
    const inputPilihan = prompt("Masukkan angka 1-5:");
    switch (inputPilihan) {
        case "1": alert("Bilangan satu"); break;
        case "2": alert("Bilangan dua"); break;
        case "3": alert("Bilangan tiga"); break;
        case "4": alert("Bilangan empat"); break;
        case "5": alert("Bilangan lima"); break;
        default: alert("Pilihan tidak tersedia");
    }
}

// ==========================================
// LATIHAN 6: Form Bilangan Genap / Ganjil
// ==========================================
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
        hasil.style.color = "red";
    } else if (cekGenap(angka)) { // Menggunakan function dari Eksperimen 8
        hasil.textContent = "Bilangan genap";
        hasil.style.color = "green";
    } else {
        hasil.textContent = "Bilangan ganjil";
        hasil.style.color = "blue";
    }
}

// ==========================================
// LATIHAN 7: Mengubah Warna Latar Halaman
// ==========================================
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// ==========================================
// LATIHAN 8 & EKSPERIMEN 10: DOM & Checkbox Menu
// ==========================================
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ==========================================
// MINI PROJECT: Kalkulator Nilai Mahasiswa
// ==========================================
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function hitungNilaiForm() {
    const tugasVal = document.getElementById("inputTugas").value;
    const utsVal = document.getElementById("inputUts").value;
    const uasVal = document.getElementById("inputUas").value;

    // Validasi form (Eksperimen 9: tidak boleh kosong & rentang 0-100)
    if (tugasVal.trim() === "" || utsVal.trim() === "" || uasVal.trim() === "") {
        alert("Semua kolom komponen nilai wajib diisi!");
        return;
    }

    const t = Number(tugasVal);
    const u = Number(utsVal);
    const a = Number(uasVal);

    if (t < 0 || t > 100 || u < 0 || u > 100 || a < 0 || a > 100) {
        alert("Nilai harus berada pada rentang 0 sampai 100!");
        return;
    }

    const akhir = hitungNilaiAkhir(t, u, a);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    document.getElementById("outAkhir").textContent = akhir.toFixed(2);
    document.getElementById("outPredikat").textContent = predikat;
    document.getElementById("outStatus").textContent = status;
}

// ==========================================
// EKSPERIMEN MANDIRI
// ==========================================

// 7. Perulangan tabel perkalian angka 7 (1 - 10) di console
console.log("--- Tabel Perkalian Angka 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 8. Function cekGenap(angka)
function cekGenap(angka) {
    return angka % 2 === 0;
}

// 11. Tombol Sembunyikan / Tampilkan Elemen HTML
function toggleElemen() {
    const kotak = document.getElementById("kotakRahasia");
    if (kotak.style.display === "none") {
        kotak.style.display = "block";
    } else {
        kotak.style.display = "none";
    }
}