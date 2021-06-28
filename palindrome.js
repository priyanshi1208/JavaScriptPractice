const num1=prompt("enter the number 1");
const num2=prompt("enter the number 2");
palindrome(num1,num2);
function palindrome( num1,num2){
    if(num1===num2){
        var length=num1.length;
        for(var i=0;i<length/2;i++){
            if(num1[i]!==num2[length-1-i]);
            console.log("the numbers are not in palindrome");
        }
        console.log("numbers are in palindrome");
    }
    else
        console.log("numbers are not in palindrome");
}
