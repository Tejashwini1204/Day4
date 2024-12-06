// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;  // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;  // If divisible, it's not prime
    }
    return true;
  }
  
  // Function to print the square of the first 10 prime numbers
  function printSquaresOfFirst10Primes() {
    let count = 0;
    let num = 2;  // Start checking from the first prime number
    
    while (count < 10) {
      if (isPrime(num)) {
        console.log(`Square of ${num}: ${num * num}`);
        count++;
      }
      num++;
    }
  }
  
  // Calling the function
  printSquaresOfFirst10Primes();
  



  