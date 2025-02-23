/*
2. Write a function that takes the total bill amount as input and applies a discount based on the following slabs:

Less than ₹500 → No discount

₹500 - ₹1000 → 10% discount

₹1000 - ₹2000 → 20% discount

Above ₹2000 → 30% discount
*/





function totaldiscount(total_bill){
    if (total_bill>=500 && total_bill<1000) {
        dis=(total_bill*0.1)
    }
        
    else if(total_bill>=1001 && total_bill<2000){
        dis=(total_bill*0.2) 
    } else if(total_bill>=3000){
        dis=(total_bill*0.3)
    }else{
        dis=0
    }
    return (total_bill-dis)

}

console.log(totaldiscount(3000))























/*function totaldiscount(total_bill) {
    switch (total_bill) {
        
        case total_bill>=500 && total_bill<1000:
            dis=(total_bill*0.1)
    
        case total_bill>=1001 && total_bill<2000:
             dis=(total_bill*0.2)    
        case total_bill>2000:
            dis=(total_bill*0.3)
         default:
            dis=0
        break;
        
    }
return (total_bill-dis)

}

console.log(totaldiscount(600))*/