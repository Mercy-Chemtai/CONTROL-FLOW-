//Write a program that takes in an array of numbers and consoles the first four items multiplied
 //by itself  and the last two added by 10. Return the array with the new values
 function numbersArr(arr){
    const firstFourNumbers = arr.slice(0,4).map(item => item * item);
    console.log(firstFourNumbers)
    const lastTwoNumbers = arr.slice(-2).map(item => item + 10);
    const middleNumbers = arr.slice(4,-2)
    const newValueArr = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers)
    console.log(newValueArr)
   }
 numbersArr([10,20,30,40,50,60,70,80,90,100])


 //Write a program that takes in the following array and use a while loop to
  //iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
   let arr = [1,2,3,4,5,6,7,8,9]
   function iterateArray(arr){
    let i=0;
    while(i<arr.length){
        if(arr[i] === arr[4]){
         console.log(arr[i]);
         break;
        }
        i++
    }
    
   }
   iterateArray(arr);
   

 // Write a function that takes in a an array of strings and use a continue statement when the 
//item is at the second index:  
let fruits= ['apple','plum','banana','strawberries','kiwi']
   function Arrstr(arr2){
    arr2.forEach((fruits,index)=> {
    if(index ===1){
      return
    }})
   }
   console.log(fruits)


//Write a function that accepts an array of strings and console.logs each element using a for loop.
let names=["Nancy","Grace","Aline","Fanny"]
function stringArray(arr3){
  for(let i=0; i<arr3.length; i++){
    console.log(`person;${arr3[i]}`)
  }
}
stringArray(names)




//Write a JavaScript function that takes a string as input and reverses it using
 //a while loop. The function should return the reversed string. 
function newString(str){
let newString=" "
let reverse = str.length-1
while(reverse>=0){
  newString += str.substring(reverse,reverse+1)
   reverse--
}
console.log(newString)
}

newString("Faith","Raziah","Mercy","Chemtai")


