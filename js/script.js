const navButtons = document.querySelectorAll(".nav-button");
const contentSections = document.querySelectorAll(".content-section");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Hapus kelas "active" dari semua section
    contentSections.forEach(section => {
      section.classList.remove("active");
    });

    // Tambahkan kelas "active" pada section yang sesuai
    const targetSection = button.getAttribute("data-target");
    const sectionToActivate = document.getElementById(targetSection);
    sectionToActivate.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const tinggiInput = document.getElementById("tinggi-input");
    const alasInput = document.getElementById("alas-input");
    const hitungLuasButton = document.getElementById("luas-button");
    const resetLuasButton = document.getElementById("reset-luas-button");
    const hasilLuasElemen = document.getElementById("hasil-luas");
  
    const sisiAInput = document.getElementById("sisi-a-input");
    const sisiBInput = document.getElementById("sisi-b-input");
    const sisiCInput = document.getElementById("sisi-c-input");
    const hitungKelilingButton = document.getElementById("keliling-button");
    const resetKelilingButton = document.getElementById("reset-keliling-button");
    const hasilKelilingElemen = document.getElementById("hasil-keliling");
  
    // Fungsi untuk mereset input luas
    function resetLuasInput() {
      tinggiInput.value = "";
      alasInput.value = "";
      hasilLuasElemen.textContent = "";
    }
  
    // Fungsi untuk mereset input keliling
    function resetKelilingInput() {
      sisiAInput.value = "";
      sisiBInput.value = "";
      sisiCInput.value = "";
      hasilKelilingElemen.textContent = "";
    }
  
    // Fungsi untuk menghitung dan menampilkan luas segitiga
    function tampilkanLuas() {
      const alas = parseFloat(alasInput.value);
      const tinggi = parseFloat(tinggiInput.value);
  
      if (!isNaN(alas) && !isNaN(tinggi)) {
        const luas = 0.5 * alas * tinggi;
        hasilLuasElemen.textContent = `Luas segitiga adalah: ${luas}`;
      } else {
        hasilLuasElemen.textContent = "Masukkan alas dan tinggi yang valid.";
      }
    }
  
    // Fungsi untuk menghitung dan menampilkan keliling segitiga
    function tampilkanKeliling() {
      const sisiA = parseFloat(sisiAInput.value);
      const sisiB = parseFloat(sisiBInput.value);
      const sisiC = parseFloat(sisiCInput.value);
  
      if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
        const keliling = sisiA + sisiB + sisiC;
        hasilKelilingElemen.textContent = `Keliling segitiga adalah: ${keliling}`;
      } else {
        hasilKelilingElemen.textContent = "Masukkan panjang sisi yang valid.";
      }
    }
  
    // Menambahkan event listener untuk tombol-tombol luas
    hitungLuasButton.addEventListener("click", tampilkanLuas);
    resetLuasButton.addEventListener("click", resetLuasInput);
  
    // Menambahkan event listener untuk tombol-tombol keliling
    hitungKelilingButton.addEventListener("click", tampilkanKeliling);
    resetKelilingButton.addEventListener("click", resetKelilingInput);
  });
  