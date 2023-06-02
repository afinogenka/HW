// функция генератор
function* fibn(т) {
    [a, b] = [0, 1]
    while (true) {
      yield a;
      [a, b] = [b, a + b]
    }
  }
  
  // инициализируем генератор 
  let n = 25
  var fib = fibn(n);
  
  // получаем последовательность для n количества чисел
  
  for (let i = 0; i < n; i++) {
    console.log(fib.next().value);
  }
  
