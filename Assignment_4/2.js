/*1. Write a function that takes a withdrawal amount and available balance as inputs. The withdrawal amount must be in multiples of ₹100, ₹200, ₹500, or ₹2000.If the amount is valid and the balance is sufficient, deduct it and return the new balance. Otherwise, return an appropriate error message.
*/

function withdraw(available_bal,withdraw_amt) {
   if(withdraw_amt<=available_bal){
   
    if ((withdraw_amt%(100||200||500||2000)==0)) {
        available_bal=available_bal-withdraw_amt
        console.log('new amt',available_bal)
    }else{
        console.log('amount is not in defined in multiples')
    }
   
} else{0
       console.log('withdraw amount is grater than balance') 
}
    
}

withdraw(500000,142000)
