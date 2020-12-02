// buscar en un array ordenado el primer elemento mayor a k.

//let arr = [1,3,5,7,8,10];


// let target = 8

// let i = 0

// while(i <= arr.length && arr[i] != target){
//     i++
// }
// console.log(i)

//usando binary searche
// k = 9
let arr1 = [1,3,5,7,8,9,10]
function bynarySearch(arr1, k){
    let result = recursiveSearch(arr1, k, 0, arr1.length - 1 )
    return arr1[result+1] != undefined ? result + 1 : -1
}

function recursiveSearch(arr1, k, bottonIndex, topIndex){
    let midIndex = Math.floor( (bottonIndex  + topIndex) / 2);
    if(bottonIndex > topIndex) {return -1;}
    if(arr1[midIndex] == k) {return midIndex;}
    if(arr1[midIndex] < k) {bottonIndex = midIndex + 1;}
    if(arr1[midIndex] > k ) {topIndex = midIndex - 1;}
    return recursiveSearch(arr1, k, bottonIndex, topIndex)
}

function nextIndex(){

}
console.log(bynarySearch(arr1,9))

