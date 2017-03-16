


var primeNumber = [];

function primeNumberArray(n){
  for(var i = 2; i <= n; i++) {
    if (isPrime(i)){
      primeNumber.push(i);
    }
  }
  return primeNumber;
}


function isPrime(x){
  for (var i = 2 ; i < x ; i++){
    if(x % i === 0) {
      return false;
      }
    }
  return true;
}

exports.largestPrimeFactor = function(n){

  primeNumberArray(n);
  var factors = [];

  for (var j = 1; j < primeNumber.length ; j++){
    if (n % primeNumber[j] === 0){
      factors.push(primeNumber[j]);
      console.log(factors);
    }

  }
  return factors[factors.length-1];

};

