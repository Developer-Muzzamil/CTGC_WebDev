/*3. Cab Fare Calculator

Write a function that takes the distance (in km) as input and calculates the total fare based on the following conditions:

First 5 km → ₹10 per km

Next 10 km → ₹8 per km

Beyond that → ₹5 per km*/


function cab_fare_calculater(total_distance){

    if (total_distance<= 5) {
        fare=10*total_distance
        console.log('fare is :',fare)
    }else if (total_distance>5&&total_distance<=10){
        fare=(total_distance-5)*8+(5*10)
        console.log('fare is :',fare)
    }else if(total_distance>10){
        fare=(total_distance-15)*5+(10*8)+(5*10)
        console.log('fare is :',fare)
    }else{
        console.log('invalid input')
    }

}
cab_fare_calculater(25)