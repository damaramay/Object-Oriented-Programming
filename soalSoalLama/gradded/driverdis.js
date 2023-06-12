function calculateDistance(data) {
    let arrayJauh = [];
    for (const x of data) {
      let distance = x.driveTime / 2;
      arrayJauh.push(distance);
    }
    return arrayJauh;
  }
  
  console.log(
    calculateDistance([
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
  