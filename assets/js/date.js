const tabelRow = document.createElement('tr');
const judul = document.createElement('td')
judul.innerText = 'judul';
const penulis = document.createElement('td')
penulis.innerText = 'penulis';
const tanggal = document.createElement('td')
tanggal.innerText = 'tanggal';
const btnHapus = document.createElement('td');
btnHapus.innerHTML = ` <a class="btn-hapus">Hapus</a> `;

tabelRow.appendChild(judul);
tabelRow.appendChild(penulis);
tabelRow.appendChild(tanggal);
tabelRow.appendChild(btnHapus);

const tabel = document.querySelector('.sudah-dibaca');
tabel.appendChild(tabelRow);
