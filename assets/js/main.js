
const btn = document.querySelector('.btnn')

let count = localStorage.length;
let kelas = 0
btn.addEventListener('click',function(){
  count ++
  const obj = {
    name : 'ardhi',
    kelas : kelas++,
    isComplete : true 
  }

  localStorage.removeItem('books'+count, JSON.stringify(obj) )
})


for ( var i = 0; i < localStorage.length;  ++i ) {
  const raw = JSON.parse(localStorage.getItem(localStorage.key(i)))
  const h2 =  document.createElement('h2')
  h2.innerText = raw.name
  const loo = document.querySelector('.loo')
  loo.appendChild(h2)
}