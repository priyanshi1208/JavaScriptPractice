function toDegreeCelcius(temp){
    var cToF=temp *9/5+32;
    return cToF;
}
function toDegreeFahrenhiet(temp){
    var fToC=(temp-32)*5/9;
    return fToC;
}
var c =prompt("enter 1 to convert from celcius to fahrenhiet,enter 2 to convert from fahrenhiet to celcius");
var temp;
switch(c){
    case 1:
        temp=prompt("enter temp ranging between 0 to 100 in degree celcius");
        var conversion=toDegreeFahrenhiet(temp);
        console.log(conversion);
        break;
    case 2:
        temp=prompt("enter temp ranging between 32 to 212 in degree fahrenhiet");
        var conversion=toDegreeCelcius(temp);
        console.log(conversion);
        break;
}
