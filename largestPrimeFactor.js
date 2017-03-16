exports.largestPrimeFactor = function(n){

  var primeNumber = [];

    for(var i = 2; i < n; i++) {
      for (var j = 2 ; j < i; j++){
        if(i % j === 0) {
          break;
        }
        primeNumber.push(i);
      }
    }

  return primeNumber;

};

console.log(largestPrimeFactor(20));