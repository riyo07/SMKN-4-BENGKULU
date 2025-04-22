function tampilkanKonten(menu) {
  const konten = document.getElementById("konten");

  if (menu === "home") {
    konten.innerHTML = `
      <h1>Selamat Datang di SMKN 4 KOTA BENGKULU</h1>
      <p>Sekolah yang berkomitmen pada pendidikan berkualitas dan pengembangan karakter.</p>
    `;
  } else if (menu === "about") {
    konten.innerHTML = `
      <h1>Tentang Kami</h1>
      <p>SMKN 4 Kota Bengkulu adalah sekolah menengah kejuruan yang memiliki berbagai program keahlian unggulan serta didukung oleh tenaga pengajar profesional.</p>
    `;
  } else if (menu === "galeri") {
    konten.innerHTML = `
      <h1>Galeri</h1>
      <p>Berikut adalah beberapa dokumentasi kegiatan kami:</p>
      <img src="https://via.placeholder.com/300x200" alt="Foto Kegiatan" style="margin:10px;">
      <img src="https://via.placeholder.com/300x200" alt="Foto Kegiatan" style="margin:10px;">
    `;
  } else if (menu === "contact") {
    konten.innerHTML = `
      <h1>Kontak Kami</h1>
      <p>Email: info@smkn4bengkulu.sch.id</p>
      <p>Telepon: (0736) 123456</p>
      <p>Alamat: Jl. Pendidikan No. 4, Kota Bengkulu</p>
    `;
  }
}
