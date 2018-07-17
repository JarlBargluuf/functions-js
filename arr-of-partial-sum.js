/* Массив частичных сумм.
На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив 
из такого же числа элементов, 
в котором на каждой позиции должна быть сумма элементов arr 
до этой позиции включительно. 
В решении используйте метод arr.reduce. */

function getSums(arr) {
  let result = []
  
    arr.reduce(function(sum, current) {
    result.push(sum += current)
    return sum;
  }, 0)

  return result;
}