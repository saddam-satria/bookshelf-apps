// Inputan

const rakBuku = () => {
  const judul = document.querySelector('#judul').value;
  const penulis = document.querySelector('#penulis').value;
  let isDibaca = document.querySelector('#dibaca');
  const year = document.querySelector('#date').value;
  const date = new Date();
  const timeStamp = String(date.getTime());

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
    localStorage.setItem(buku.id, JSON.stringify(buku));
    location.href = '';
  }
};

const addBukuToRak = () => {
  let books = [];
  let bookSudahDibaca = [];
  let bookBelumDibaca = [];
  for (let i = 0; i < localStorage.length; i++) {
    const rawBuku = JSON.parse(localStorage.getItem(localStorage.key(i)));
    books.push(rawBuku);
  }
  bookBelumDibaca = books.filter((item) => {
    return item.isComplete == false;
  });
  bookSudahDibaca = books.filter((item) => {
    return item.isComplete == true;
  });

  displayBooks(bookBelumDibaca, bookSudahDibaca);
  hapusRakBukuDibaca(bookBelumDibaca, bookSudahDibaca);
  updateBuku(bookBelumDibaca, bookSudahDibaca);
  // searchBuku(books);
};

const displayBooks = (belumDibaca, sudahDibaca) => {
  belumDibaca.map((item) => {
    const tabelRow = document.createElement('tr');
    const judul = document.createElement('td');
    judul.classList.add('title');
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

    const RakBukuBelumDibaca = document.querySelector('.belum-dibaca');
    btnHapus.innerHTML = ` <a class="btn-hapus">Hapus</a> || <a class="btn-complete">Selesai</a> `;
    RakBukuBelumDibaca.appendChild(tabelRow);
  });
  sudahDibaca.map((item) => {
    const tabelRow = document.createElement('tr');
    const judul = document.createElement('td');
    judul.classList.add('title');
    judul.innerText = item.title;
    const penulis = document.createElement('td');
    penulis.innerText = item.author;
    const tanggal = document.createElement('td');
    tanggal.innerText = item.year;
    const btnHapus = document.createElement('td');
    btnHapus.innerHTML = ` <a class="btn-hapus">Hapus</a> || <a class="btn-complete">Selesai</a>`;

    tabelRow.appendChild(judul);
    tabelRow.appendChild(penulis);
    tabelRow.appendChild(tanggal);
    tabelRow.appendChild(btnHapus);

    const RakBukuDibaca = document.querySelector('.sudah-dibaca');
    RakBukuDibaca.appendChild(tabelRow);
  });
};

const hapusRakBukuDibaca = (belumdibaca, sudahdibaca) => {
  const removeBelumDibaca = document.querySelectorAll('.belum-dibaca tr td .btn-hapus');
  let keyBelumDibaca = [];
  belumdibaca.forEach((item) => {
    keyBelumDibaca.push(item.id);
  });
  removeBelumDibaca.forEach((item, index) => {
    item.addEventListener('click', function (e) {
      localStorage.removeItem(keyBelumDibaca[index]);
      location.href = '';
    });
  });

  const removeSudahDibaca = document.querySelectorAll('.sudah-dibaca tr td .btn-hapus');
  let keySudahDibaca = [];
  sudahdibaca.forEach((item) => {
    keySudahDibaca.push(item.id);
  });
  removeSudahDibaca.forEach((item, index) => {
    item.addEventListener('click', function () {
      localStorage.removeItem(keySudahDibaca[index]);
      location.href = '';
    });
  });
};

const updateBuku = (belumDibaca, sudahDibaca) => {
  let keyBelumDibaca = [];
  let bukuBelumDibaca = [];
  belumDibaca.forEach((item) => {
    keyBelumDibaca.push(item.id);
    bukuBelumDibaca.push(item);
  });

  let keySudahDibaca = [];
  let bukuSudahDibaca = [];
  sudahDibaca.forEach((item) => {
    keySudahDibaca.push(item.id);
    bukuSudahDibaca.push(item);
  });

  const updateBelumDibaca = document.querySelectorAll('.belum-dibaca tr td .btn-complete');
  updateBelumDibaca.forEach((item, index) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      bukuBelumDibaca[index].isComplete = true;
      localStorage.setItem(keyBelumDibaca[index], JSON.stringify(bukuBelumDibaca[index]));
      location.href = '';
    });
  });
  const updateSudahDibaca = document.querySelectorAll('.sudah-dibaca tr td .btn-complete');
  updateSudahDibaca.forEach((item, index) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      bukuSudahDibaca[index].isComplete = false;
      localStorage.setItem(keySudahDibaca[index], JSON.stringify(bukuSudahDibaca[index]));
      location.href = '';
    });
  });
};

const searchBuku = () => {
  const searchInput = document.querySelector('#search').value;
  let filterToUpper = searchInput.toUpperCase();
  const tr = document.querySelectorAll('tr');

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      txt = td.textContent || td.innerText;
      if (txt.toUpperCase().indexOf(filterToUpper) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
};

const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', searchBuku);

addBukuToRak();
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const button = document.querySelector('.btn');
  button.addEventListener('click', rakBuku);
});
