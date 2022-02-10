// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

// ----- indexOf -----
const fruits = ["Banana", "Orange", "Apple", "Orange", "Orange"];
let index = fruits.indexOf("Apple");
console.log(index);

// ----- duplicate indexOf -----

function duplicateIndexOf(val, arr){
    for(let i = 0; i < arr.length; i++){
        if((val) == arr[i]){
            return i
        }
    }

}

console.log(duplicateIndexOf("Orange", fruits));


// ----- Find -----
const ages = [3, 10, 18, 20];

let findAge = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}

console.log(findAge);


// ----- duplicate Find -----

const duplicateFind = (arr, callback) =>{
    let resultArr = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            
            return resultArr = arr[i]
        }
    }
}

let ageFinder = duplicateFind(ages, (val) => {
    return val > 18
})
console.log(ageFinder);
