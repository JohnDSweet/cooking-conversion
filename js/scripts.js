var gallonsToLiters = function (gallons){
return gallons * 3.78541;
};

var gallonsEntered = parseFloat(prompt("Enter amount in gallons:"));

var result = gallonsToLiters(gallonsEntered);
alert(result + " liters");
