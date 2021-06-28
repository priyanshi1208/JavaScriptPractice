let num;
let i=0;
let arrayOfNumbers=[];
for(let i=0;i<5;i++){
 do{
     num=Math.floor(Math.random()*999);
    }while(num<100);
 arrayOfNumbers[i]=num;
}
console.log(arrayOfNumbers);
arrayOfNumbers.sort();
console.log(arrayOfNumbers);
console.log("Max is:"+arrayOfNumbers[4]);
console.log("Min is:"+arrayOfNumbers[0]);