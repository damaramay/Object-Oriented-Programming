function filterByContent(filter, data) {
    let output = {
      nationality: '',
      owners: [],
      channels: [],
      contents: []
    };
    //your code here
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
  
  function scrapChannel(content, data) {
    let owners = [];
    let channels = [];
  
    for (let i = 0; i < data.owners.length; i++) {
      if (data.contents[i].includes(content)) {
        owners.push(data.nationality, data.owners[i], data.channels[i], data.contents[i]);
      }
    }
  
    for (let i = 0; i < data.channels.length; i++) {
      if (data.contents[i].includes(content)) {
        channels.push(data.nationality, data.owners[i], data.channels[i], data.contents[i]);
      }
    }
  
    return [owners, channels];
  }
  
  
  let rawDatas = {
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
  
  // Don't change this code
  var fs = require("fs");
  var input = JSON.parse(fs.readFileSync(process.stdin.fd, "utf-8").trim());
  rawDatas = input.data ? rawDatas : undefined;
  let content = input.content;
  
  console.log(scrapChannel(content, rawDatas));


  //expected output: 
//   [
//     [ 'Canada', 'Mehdi', 'ElectroBoom', 'Engineering-Comedy-Education' ],
//     [ 'Canada', 'Ryan George', 'Ryan George', 'Comedy-Sketch' ]
//     ]