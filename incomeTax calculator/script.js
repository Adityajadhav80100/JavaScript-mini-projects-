function calculateTax(e){
    e.preventDefault();

let income = document.getElementById("income").value;
income = parseFloat(income);

let taxAmount = 0;

const TotaltaxAmount = document.getElementById("Taxamount");

if(income <= 1200000){
    taxAmount = 0;
}
else if(income <=1600000){
    taxAmount = (income - 1200000) * 0.15;
}
else if(income <=2000000){
    taxAmount = (income - 1600000) * 0.20 + 60000;
}
else if(income <=2400000){
    taxAmount = (income - 2000000) * 0.25 + 60000 + 80000;
}
else{
    taxAmount = (income - 2400000) * 0.30 + 60000 + 80000 + 100000;
}

TotaltaxAmount.textContent = taxAmount.toFixed(2);

}