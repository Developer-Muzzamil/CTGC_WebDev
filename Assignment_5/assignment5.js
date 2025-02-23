
//task 1

var str='JavaScript is a very powerful and popular programming language';
// convert to uppercase  and lowercase

var str1=str.toUpperCase();
var str2=str.toLowerCase();

//console.log(str1,str2)
//finding index
var index=str.indexOf('popular')
//console.log(index)
//extracting word
var sliced=str.slice(21,29)

//replacing JavaScript with js

var str3=str.replace('JavaScript','JS')
//console.log(str3)
//checking if the word anguage is present
//console.log(str.includes('language'))

//task 2

var arr=['Apple','Banana','Mango','Orange','Grapes']
arr.push('Pineapple')

arr.shift()
//console.log(arr)
arr.splice(1,0,'Strawberry')


//console.log(arr.indexOf('Mango'))

//removal of orange
var a =arr.indexOf('Orange')
if(a!=false){
arr.splice(a,1)
}
//sort array in alphabetical order

arr.sort()



//reversing an array
arr.reverse()

//or

for (let index = 0; index < Math.floor(arr.length/2); index++) {
    let temp=arr[index]
    arr[index]=arr[arr.length-1-index]
    arr[arr.length-1-index]=temp
}

//console.log(arr)


/* Object constructor function
Task 3 */
//creating a constructor function

function Person(name,age,gender) {
this.name=name
this.age=age
this.gender=gender
}
Person.prototype.greet=function () {
    console.log('Hello,my name is: ',this.name)
}

var person1=new Person('Ale',12,'Male')
var person2=new Person('Hussain',25,'Male')
var person3=new Person('Husna',23,'Female')
/* person1.greet()
person2.greet()
person3.greet()
 */




// part 4 
// object manuplation

var car={
    brand:'BMW',
    Model:'series 7',
    year:'2025',
    features:['Air Conditioning','SunRoof','Bluetooth']
}

car.features.push('Wifi')
car.year='2024'
delete(car.year)
// console.log(car)
// accessing nested objects

var students=[{
    name:'Hussain',
    age:'25',
    grades:{
        math:90,
        physics:80,
        science:20,
    }

},
{
    name:'husna',
    age:'22',
    grades:{
        math:30,
        physics:60,
        science:40,
    }

},
{
    name:'Hasnain',
    age:'28',
    grades:{
        math:80,
        physics:80,
        science:20,
    }

}
]

// console.log(students[1].grades.math)

students[0].grades.math=99
students[1].grades.Biology = 96;
//using shallow cloning
// students[1].grades={...students[1].grades,Biology:96}
// console.log(students)



//Bonous task

Person.prototype.isAdult=function () {
    return this.age>=18
}

//console.log(person1.isAdult())

//creating an array of adult persons by using loop 
var people=[person1,person2,person3]

var adult=[]
for (let i = 0; i < people.length-1; i++) {
    if (people[i].isAdult) {
        adult.push(people[i])
    }
    
}

console.log(adult)
