var money=100;
var bet=0;
var count=0;
while(money<200 && money>0){
    var play=Math.floor(Math.random()*2+1);
    (play===1)?money+=1:money-=1;
    console.log(play)
    if(play===1)
        count++;
    bet++;
}
console.log("No of bets:"+bet);
console.log("no of times won:"+count);
console.log("ending amount:"+money);