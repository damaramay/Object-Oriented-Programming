function filterByContent(filter, data) {
    let output = {
      nationality: '',
      owners: [],
      channels: [],
      contents: []
    };
    // write your code here


console.log(filter)
console.log('-----------------------------')
console.log(data)
console.log('-----------------------------')

// berarti filter 1 persatu dari owners ke contents lalu push ke object output
//berarti kalau push udah masuk, tinggal automatic push masing-masing

output.nationality = data.nationality

for (let i = 0; i < data.owners.length; i++){ //filtering content
    // console.log('halo')// masuk
    if (data.contents[i].includes(filter)){
        output.owners.push(data.owners[i])
    }
    // console.log(output)
    }

    for (let i = 0; i < data.channels.length; i++){ //filtering content
        // console.log('halo')// masuk
        if (data.contents[i].includes(filter)){
            output.channels.push(data.channels[i])
        }
        // console.log(output)
        }
    
for (let i = 0; i < data.contents.length; i++){ //filtering content
        // console.log('halo')// masuk
        if (data.contents[i].includes(filter)){
            output.contents.push(data.contents[i])
        }
        // console.log(output)
        }



// output.owners.push(data.owners[0])
// console.log(output) //cek apakah masuk, masuk linus 
return output
}


  const rawDatas = {
    nationality: 'Canada',
    owners: [
      'Linus',
      'James Hobson',
      'Mehdi',
      'Ryan George'
    ],        
    channels: [
      'Linus Tech Tips',
      'Hacksmith',
      'ElectroBoom',
      'Ryan George'
    ],
    contents: [
      'Technology-Review',
      'Engineering-Invention',
      'Engineering-Comedy-Education',
      'Comedy-Sketch'
    ]
  };

  console.log(filterByContent('Engineering', rawDatas));
  /*
  { this is expected outputnya: 
    nationality: 'Canada',
    owners: [ 'James Hobson', 'Mehdi' ],
    channels: [ 'Hacksmith', 'ElectroBoom' ],
    contents: [ 'Engineering-Invention', 'Engineering-Comedy-Education' ]
  }
  */