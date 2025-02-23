//slab1=0-50 rs2.5
//slab2=51-100 rs 4
//slab3=101-200 rs 6
//slab4=201 to infinite rs 8


function bill(total_units) {
    
//slab4
if(total_units>=201){
    total_units=total_units-200
    console.log('Total bill is:',50*2.5+50*4+100*6+total_units*8)
//slab1
}else if(total_units<=50){
    console.log('Total bill is:',total_units*2.5)
    //slab2
}else if(total_units>=50 && total_units<=100){
    total_units=total_units-50
    console.log('Total bill is:',50*2.5+total_units*4)
    //slab3
}else if(total_units>=101 && total_units<=200){
    total_units=total_units-100
    console.log('Total bill is:',50*2.5+50*4+total_units*6)
    //default
}else{
   console.log('invalid input')
}
}

bill(260)
