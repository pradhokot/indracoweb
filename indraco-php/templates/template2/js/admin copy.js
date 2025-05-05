const themeSelector = document.getElementById('theme-selector');
const dropdownToggle = themeSelector.querySelector('.dropdown-toggle');
const dropdownItems = themeSelector.querySelectorAll('.dropdown-menu li');

// Fungsi untuk mengatur tema
function setTheme(theme) {
   document.body.classList.remove('dark', 'light'); // Hapus semua tema sebelumnya
   if (theme === 'dark') {
      document.body.classList.add('dark');
      dropdownToggle.innerHTML = '<i class="fas fa-moon icon-dark"></i> Gelap';
   } else if (theme === 'light') {
      document.body.classList.add('light');
      dropdownToggle.innerHTML = '<i class="fas fa-sun icon-light"></i> Terang';
   } else {
      // Otomatis: Cek preferensi tema pengguna
      const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.classList.add(prefersDarkScheme ? 'dark' : 'light');
      dropdownToggle.innerHTML = '<i class="fas fa-circle-half-stroke icon-auto"></i> Otomatis';
   }
   localStorage.setItem('theme', theme); // Simpan tema ke localStorage
}

// Muat tema dari localStorage saat halaman dimuat
const savedTheme = localStorage.getItem('theme') || 'auto';
setTheme(savedTheme);

// Tambahkan event listener untuk setiap item dropdown
dropdownItems.forEach((item) => {
   item.addEventListener('click', () => {
      const selectedTheme = item.getAttribute('data-theme');
      setTheme(selectedTheme);
      dropdownToggle.setAttribute('aria-expanded', false);
   });
});

// Tambahkan event listener untuk perubahan preferensi tema sistem
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
   if (localStorage.getItem('theme') === 'auto') {
      setTheme(e.matches ? 'dark' : 'light');
   }
});