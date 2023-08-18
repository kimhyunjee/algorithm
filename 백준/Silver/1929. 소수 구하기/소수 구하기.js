const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const isPrime = (num) => {
    if(num === 1) return false;
    for(var i=2; i<=Math.sqrt(num); i++){
        if((num%i)==0) return false;
    }
    return true;
}

const [n,m] = input.shift().split(' ').map(e=>parseInt(e));

for(var i=n; i<=m; i++) 
    isPrime(i) ? console.log(i) : null;