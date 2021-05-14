// Inputan

const tampilBuku = () => {
  const judul = document.querySelector('#judul').value;
  const penulis = document.querySelector('#penulis').value;
  const date = document.querySelector('#tahun').value;
  const isBaca = document.querySelector('#dibaca');

  tambahBuku(judul, penulis, date, isBaca);
};

const tambahBuku = (judul, penulis, date, isBaca) => {
  const title = document.createElement('td');
  title.innerText = judul;
  const writer = document.createElement('td');
  writer.innerText = penulis;
  const tanggal = document.createElement('td');
  tanggal.innerText = date;
  const action = document.createElement('td')
  const btnHapus = document.createElement('a')
  btnHapus.innerText = 'Hapus'
  btnHapus.classList.add('btn-hapus')
  action.appendChild(btnHapus)


  
  if (judul !== '' && penulis !== '' && date !== '') {
    const tableRow = document.createElement('tr');
    tableRow.appendChild(title);
    tableRow.appendChild(writer);
    tableRow.appendChild(tanggal);
    tableRow.appendChild(action);
    if (isBaca.checked) {
      const sudahDibaca = document.querySelector('.sudah-dibaca');
      sudahDibaca.appendChild(tableRow);
    } else {
      const belumDibaca = document.querySelector('.belum-dibaca');
      belumDibaca.appendChild(tableRow);
    }
  } else {
    alert('Lengkapi terlebih dahulu data yang kosong');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');
  button.addEventListener('click', tampilBuku);
});
