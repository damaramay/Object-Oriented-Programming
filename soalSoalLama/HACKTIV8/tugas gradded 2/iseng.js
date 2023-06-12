let a = [1, 2, 3, 4, 5, 6]
let b = a.find(el => el % 2 === 0)
console.log(b)


let c = [1, 2, 3]
let d = [4, 5, 6]

// c.push(d)
console.log(c)
c = [...c, ...d]
console.log(c)
// [ list customer]  [budi]