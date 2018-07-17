/* Перепишите код: уберите цикл, используйте вместо него метод map.
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5 */


let arr = ["Есть", "жизнь", "на", "Марсе"]

let arrLength = arr.map(function(words) {
  return words.length;
})

console.log(arrLength)