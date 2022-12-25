const [A, B, C] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

function power(a,b){
  if(b==0){
  return BigInt(1); 
  }else{
    const temp = power(a, BigInt(parseInt(b/BigInt(2))))
    if(b%BigInt(2)==0){
      return  (temp * temp) % C;
    }else{
      return (temp * temp * a) % C;
    }
  }
}


console.log(parseInt(power(A,B)))