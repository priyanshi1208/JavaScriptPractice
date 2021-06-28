var heads=0;
var tail=0;
while(heads<11&&tail<11){
    var play=Math.floor(Math.random()*2+1);
    (play==1)?heads++:tail++;
}
console.log(heads);
console.log(tail);