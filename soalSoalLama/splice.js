// var arr = ['eko', 'basi', 'abdullah', 'dear'];
// var newElement = ['idaz'];
// var start = 3;
// var del = 0;

// function splice(arr, newElement ,start, del) {
//     // Insert your code here
//       let penampungArray = []
//       let counter = 0
//       while (counter < arr.length){
//           if (counter === start){
//               penampungArray.push(newElement);
//               counter++
//           }else if (counter > start){
//               penampungArray.push(arr[counter - 1])
//               counter++
//           }else {
//               penampungArray.push(arr[counter]) 
//               counter++
//           }
//           }return penampungArray
//       }

// function splice(arr, newElement, start, del) {
//     let penampungArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i === start) {
//             penampungArray.push(newElement);
//         } 
//         if (i !== start && i !== start + del) {
//             penampungArray.push(arr[i]);
//         }
//     }
//     return penampungArray;
// }
// console.log(splice(arr, newElement, start, del));

var arr = ['eko', 'basi', 'abdullah', 'dear'];
var newElement = 'idaz';
var start = 3;
var del = 0;

function splice(arr, newElement, start, del) {
    let penampungArray = []
    for (let i = 0; i < arr.length; i++) {
        if (i === start) {
            penampungArray.push(newElement);
        } 
        if (i !== start && i !== start + del) {
            penampungArray.push(arr[i]);
        }
    }
    return penampungArray;
}

console.log(splice(arr, newElement, start, del));
