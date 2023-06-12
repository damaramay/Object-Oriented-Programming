let groupByCategory = function (array) {

    let output = {gaming:{totalPrice: 0, averagePrice : 0, laptop : []}, business:{totalPrice: 0, averagePrice : 0, laptop : []}}


    for (let k of items){
        if (k.category === 'gaming'){
            output.gaming.laptop.push(`${k.brand} ${k.laptopCode}`)
            output.gaming.totalPrice += k.price
        }else {
            output.business.laptop.push(`${k.brand} ${k.laptopCode}`)
            output.business.totalPrice += k.price
        }

    }
    output.gaming.averagePrice = output.gaming.totalPrice / output.gaming.laptop.length
    output.business.averagePrice = output.business.totalPrice / output.business.laptop.length

    return output


}

let items = [
  {
    brand: 'SNSV',
    laptopCode: 'G501JX',
    price: 20000000,
    category: 'gaming'
  },
  {
    brand: 'SNSV',
    laptopCode: 'GL752VW',
    price: 25000000,
    category: 'gaming'
  },
  {
    brand: 'LoveMe',
    laptopCode: 'Legion 4',
    price: 15000000,
    category: 'gaming'
  },
  {
    brand: 'LoveMe',
    laptopCode: 'Legion 6',
    price: 23000000,
    category: 'gaming'
  },
  {
    brand: 'SNSV',
    laptopCode: 'jenbuk ux421',
    price: 12000000,
    category: 'business'
  },
  {
    brand: 'Pear',
    laptopCode: 'mekbuk pro m99',
    price: 38000000,
    category: 'business'
  },
  {
    brand: 'LoveMe',
    laptopCode: 'gaya 9i',
    price: 28000000,
    category: 'business'
  },
  {
    brand: 'nyangsang',
    laptopCode: 'Galaksi book',
    price: 30000000,
    category: 'business'
  },
]



console.table(groupByCategory(items))

/*
  totalPrice = number
  average price = number
  laptop = contoh [SNSV pipobuk k521, PH papiliun dk14xxx]
  expected output
  {
    gaming: {
      totalPrice: 83000000,
      averagePrice: 20750000,
      laptop: [
        'SNSV G501JX',
        'SNSV GL752VW',
        'LoveMe Legion 4',
        'LoveMe Legion 6'
      ]
    },
    business: {
      totalPrice: 108000000,
      averagePrice: 27000000,
      laptop: [
        'SNSV jenbuk ux421',
        'Pear mekbuk pro m99',
        'LoveMe gaya 9i',
        'nyangsang Galaksi book'
      ]
    }
  }
  or output
  ┌──────────┬────────────┬──────────────┬───────────────────────────────────────────────────────────────────────────────────┐
  │ (index)  │ totalPrice │ averagePrice │                                      laptop                                       │
  ├──────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────┤
  │  gaming  │  83000000  │   20750000   │       [ 'SNSV G501JX', 'SNSV GL752VW', 'LoveMe Legion 4', ... 1 more item ]       │
  │ business │ 108000000  │   27000000   │ [ 'SNSV jenbuk ux421', 'Pear mekbuk pro m99', 'LoveMe gaya 9i', ... 1 more item ] │
  └──────────┴────────────┴──────────────┴───────────────────────────────────────────────────────────────────────────────────┘
*/