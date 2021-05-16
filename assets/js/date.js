const arr = [{
    nama : 'saddam',
    isComplete : false
    },
    {
    nama : 'ardhi',
    isComplete : true
    },
    {
    nama : 'satria',
    isComplete : false
    },
] 
const filterFalse = arr.filter(item => {return item.isComplete == false})
console.log(filterFalse)
