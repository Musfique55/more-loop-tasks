// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const rev =[];
for(let color of colors){
    rev.unshift(color);
}
console.log(rev);



// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

for(let i = 0;i < numbers.length; i++){
     if(numbers[i] % 2 === 0){
        console.log(numbers[i]);
     }
}

// for-of-loop
// for(let number of numbers){
//     // console.log(number);
//     if(number%2===0){
//         console.log(number);
//     }
// }


// Use a for...of loop to concatenate all the elements of an array into a single string.

let words = ['Tom', 'Tim', 'Tin', 'Tik'];
let concat ='';

for(let i = 0; i < words.length; i++){
    concat += words[i];
}
console.log(concat);


// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
const divide = statement.split(' ');
console.log(divide);
const reversed =[];
for(let i = 0; i < divide.length; i++){
    reversed.unshift(divide[i]);
}

// for(let div of divide){
//     reversed.unshift(div);
// }
// const revStr =reversed.join(' ');
// console.log(revStr)

 const revStr =  reversed.join(' ');
 console.log(revStr);