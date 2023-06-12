// let theInput = [
//   {
//     name: "Samir",
//     groceries: [
//       ["Susu", 2],
//       ["Roti", 4],
//       ["Mie", 5],
//       ["Telur", 2],
//       ["Bakso", 1],
//     ],
//     driveTime: 134, //minutes
//   },
//   {
//     name: "Eko",
//     groceries: [
//       ["Susu", 1],
//       ["Roti", 2],
//       ["Mie", 3],
//       ["Telur", 3],
//       ["Bakso", 2],
//     ],
//     driveTime: 134, //minutes
//   },
// ]



function splitData(drivers) {
  //code here
  let output = [];
  let perDriver = [];

  for (const x of drivers) {
    // output.push(x.groceries)
    for (let y of x.groceries){
      perDriver.push(y[0], y[1])
      // console.log(perDriver)
    }
    output.push(perDriver)
  //   output.push(['yaelah'])
    perDriver = []
  }
  return output;
}



console.table(
  splitData([
    {
      name: "Samir",
      groceries: [
        ["Susu", 2],
        ["Roti", 4],
        ["Mie", 5],
        ["Telur", 2],
        ["Bakso", 1],
      ],
      driveTime: 134, //minutes
    },
    {
      name: "Eko",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 2],
      ],
      driveTime: 134, //minutes
    },
  ])
);



function calculateDistance(drivers) {
  //code here
}

function reward(data) {
  //code here
}



/* console.log(reward([
    {
      name: "Samir",
      groceries: [
        ["Susu", 2],
        ["Roti", 4],
        ["Mie", 5],
        ["Telur", 2],
        ["Bakso", 1],
      ],
      driveTime: 134, //minutes,
    },
    {
      name: "Eko",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 2],
      ],
      driveTime: 134, //minutes,
    },
    {
      name: "Fajrin",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 2],
        ["Telur", 3],
      ],
      driveTime: 90, //minutes
    },
    {
      name: "Abdullah",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 5],
      ],
      driveTime: 120, //minutes,
    },
    {
      name: "Basil",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 2],
        ["Telur", 5],
      ],
      driveTime: 40, //minutes
    },
    {
      name: "Idaz",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
      ],
      driveTime: 10, //minutes
    },
  ])
);
*/

