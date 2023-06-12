function changeMe(arr) {
    // you can only write your code here!
    let thisYear = 2022

    let output = []
        

    if (arr.length === 0){
        return []
    }

    for (let i = 0; i < arr.length; i++) {
        let result = {firstName: '',
        lastName: '',
        gender: '',
        age: ''}
        result.firstName = arr[i][0]
        result.lastName = arr[i][1]
        result.gender = arr[i][2]
        if (arr[i][3] === undefined){
            result.age = 'Invalid Birth Year'
        }else {
            result.age = thisYear - arr[i][3]
        }
        output.push(result)
    }

    return `1. $`
}



//do not change the code below
let inputArr = [["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]
//thi is the expected output: 
// 1. Christ Evans:
// { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 40 }
// 2. Robert Downey:
// {
// firstName: 'Robert',
// lastName: 'Downey',
// gender: 'Male',
// age: 'Invalid Birth Year'
// }

console.log(changeMe(inputArr));