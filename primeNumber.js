function isPrime(num) {
  let s=Math.sqrt(num);
  for(let i = 2; i <=s; i++)
    if(num % i === 0) return false;
  return num > 1;
}
const primeBetween=(a,b)=>{
  for(let i=Math.min(a,b);i<Math.max(a,b);i++){
    if(isPrime(i)){
      console.log(i);
    }
  }
}
console.log(primeBetween(20,40));
  