const isPrime = (n) => {
    for (let i = 2; i <= n/ 2; i++) {   // проверить простое ли число
      if (n % i === 0) {
        return false;
      }
    }
    return true;
};
  
function* getPrimeNum(n) {   // фуенкция генератор
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) yield i;
    }
}
  
function main() {
    n = 20
    const generator = getPrimeNum(n);
    let prime;
    while ((prime = generator.next().value) !== undefined) {
      console.log(prime);
    }
}
  
main();