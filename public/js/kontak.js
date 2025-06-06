
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      alert("Harap isi semua kolom wajib!");
      e.preventDefault(); 
      return;
    }

    if (!validateEmail(email)) {
      alert("Email tidak valid!");
      e.preventDefault();
      return;
    }
    alert("Pesan Anda berhasil dikirim melalui email.");
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
