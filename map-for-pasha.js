/* есть массив чисел,верни массив индексов этих чисел 
умноженнных на эти же числа */

let arr = [1, 2, 3, 4, 5]

let newArr = arr.map (function(value, index) {
    return value*index
});

console.log(newArr)