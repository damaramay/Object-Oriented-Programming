// 1. Buatlah fungsi program getTotal yang mengembalikan:
// - total harga dari semua barang
const items = [
    {
        name: 'SanSilk',
        category: 'sampo',
        price: 12000
    },
    {
        name: 'LiveBoy',
        category: 'sabun',
        price: 3000
    },
    {
        name: 'Getol',
        category: 'sabun',
        price: 7000
    },
    {
        name: 'Novu',
        category: 'sabun',
        price: 3000
    },
    {
        name: 'Pantin',
        category: 'sampo',
        price: 30000
    }
]

function getTotal(list) {
}

// console.log(getTotal(items)); // 55000

// 2. Buatlah fungsi program getAverage yang mengembalikan:
// - rata-rata harga dari semua barang

function getAverage(list) {
}

// console.log(getAverage(items)) // 11000

// 3. Buatlah grouping item sesuai dengan categorynya !

function groupingByCategory(list) {

let result = []
    for (let i = 0; i < items.length; i++){
        let index = items[i];
        console.log(items[i])
        for (let j = 0; j < index.length; j++){
        console.log(index[i])
        
        }
    }
   
}

console.log(groupingByCategory(items));

/*
{
  sampo: ['SanSilk', 'Pantin'],
  sabun: ['LiveBoy', 'Getol', 'Novu'],
  totalHarga: 55000,
  avg: 11000
}
*/