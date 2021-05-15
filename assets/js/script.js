// Inputan

const rakBuku = () => {
  const judul = document.querySelector('#judul').value;
  const penulis = document.querySelector('#penulis').value;
  let isDibaca = document.querySelector('#dibaca');
  const year = document.querySelector('#date').value;
  const date = new Date();
  const timeStamp = String(date.getFullYear()) + '-' + String(date.getMonth() + 1) + '-' + String(date.getDate());

  isDibaca.checked ? (isDibaca = true) : (isDibaca = false);

  const books = {
    id: timeStamp,
    title: judul,
    author: penulis,
    year: year,
    isComplete: isDibaca,
  };
  tambahBuku(books);
};

const tambahBuku = (buku) => {
  if (buku.title == '' || buku.author == '' || buku.year == '') {
    alert('Data Harus Di Isi Semua ! ');
  } else {
    let count = localStorage.length;
    count++;
    localStorage.setItem('buku ' + count, JSON.stringify(buku));
  }
};

const addBukuToRak = () => {
  let books = [];

  for (let i = 1; i <= localStorage.length; i++) {
    const rawBuku = JSON.parse(localStorage.getItem('buku ' + i));
    console.log(rawBuku);
    books.push(rawBuku);
  }
  displayBooks(books);
};

const displayBooks = (buku) => {
  buku.map((item) => {
    if (item.isComplete == true) {
      const tabelRow = document.createElement('tr');
      const judul = document.createElement('td');
      judul.innerText = item.title;
      const penulis = document.createElement('td');
      penulis.innerText = item.author;
      const tanggal = document.createElement('td');
      tanggal.innerText = item.year;
      const btnHapus = document.createElement('td');
      btnHapus.innerHTML = ` <a class="btn-hapus">Hapus</a> `;

      tabelRow.appendChild(judul);
      tabelRow.appendChild(penulis);
      tabelRow.appendChild(tanggal);
      tabelRow.appendChild(btnHapus);

      const tabel = document.querySelector('.sudah-dibaca');
      tabel.appendChild(tabelRow);
    }
  });
};
addBukuToRak();

document.addEventListener('DOMContentLoaded', (e) => {
  const button = document.querySelector('.btn');
  button.addEventListener('click', rakBuku);
});
