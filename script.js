
// TASK # 01
let week = Number(prompt("Enter a number :" ));

switch (week) {
    case  1:
        alert("Monday")
        break;
        case  2:
        alert("Tuesday")
        break;
        case  3:
        alert("Wednesday")
        break;
        case  4:
        alert("Thursday")
        break;
        case  5:
        alert("Friday")
        break;

    default:
        alert("Invalid day")
        break;
}

// TASK #02

const num = Number(prompt("Enter a number :"));

switch (num) {
    case 1:
        alert("january");
        break;
        case 2:
        alert("Febuary");
        break;
        case 3:
        alert("March");
        break;
        case 4:
        alert("April");
        break;
        case 5:
        alert("May");
        break;
        case 6:
        alert("june");
        break;
        case 7:
        alert("july");
        break;
        case 8:
        alert("August");
        break;
        case 9:
        alert("September");
        break;
        case 10:
        alert("October");
        break;
        case 11:
        alert("November");
        break;
        case 12:
        alert("December");
        break;


    default:
        alert("this month does not exist")
        break;
}

 
// TASK #3


let vehicle = prompt("Enter a vehicle :")

switch (vehicle) {
    case car:
        alert("It is a common personal vehicle.");
       
        break;
        case bike:

        alert("It is a two-wheeled vehicle");
        break;
        case truck:
        alert("It is often used for transporting goods");
        case bike:
        alert("It is a two-wheeled vehicle");
        break;
        case aeroplane:
            alert("It is a large aircraft that can carry many people");
        

    default:
        alert("not an vehicle")
        break;
}


// task # 04


let weight = Number(prompt("Enter a weight of a pakage :"));
let weightRange;

if (weight >= 0 && weight <= 10) {
  weightRange = 1;
} else if (weight > 10 && weight <= 20) {
  weightRange = 2;
} else if (weight > 20 && weight <= 30) {
  weightRange = 3;
} else {
  weightRange = 4;
}

switch (weightRange) {
  case 1:
    alert("100");
    break;
  case 2:
    alert("200");
    break;
  case 3:
    alert("300");
    break;
  default:
    alert("enter valid pakage");
    break;
}


// task # 05


let grade = Number(prompt("Enter a grade :"));

switch (true) {
    case grade>=90 && grade<=100:
        alert ("A")
        break;
        case grade>=80 && grade<90:
            alert("B")
            break;
            case grade>=70 && grade<80:
                alert("C")
                break;
                case grade>=50 && grade<70:
                    alert("D")
                    break;
                    

      

    default:
        alert("u r Fail")
        break;
}


// Fibonacci Sequence

let num1 = 0;
let num2 = 1;
let count = 0;

while (count < 10) {
  console.log(num1);
  let temp = num1 + num2;
  num1 = num2;
  num2 = temp;
  count++;
// }



// Guessing Game

let randomnumber = Math.floor(Math.random()* 100  );

let guess;

while (true) {
    guess = Number(prompt("Guess a number between 1 and 100"));
    if (guess < randomnumber) {
        alert("Too low ! Try again");
    }
    else if (guess > randomnumber) {
        alert("Too high! try again")
    }
    else {
        alert("Congratulation ! you guessed the number")
        break;
    }
}




const word = prompt("Enter a word");

let reverseword = " ";

let i = word.length -1;

while (i>=0) {
    reverseword += word[i]
    i--;
    
}
alert("The reversed word is: " + reverseword);


prime number
let num = Number(prompt("Enter a number between (1-100)"));

while (i< num) {

    if(num % 2 ===0){
        alert("The number is not prime");
        break;
    }  
    i++;
}
    if(i===num){
        alert("the number is prime")
     
}



let base = Number(prompt("Enter a  base  number :"));
let exponent = Number(prompt("Enter a exponent number:"));
let i = 0;
let result=1;
while  ( i < exponent) {

    result *= base;
    i++;

}
alert("the number is:" + result)






// print 1-10

let i = 1;
do {
    console.log(i);
    i++
}
 while (i<=10);


// sum of Number (1-10)

let i = 1;
let sum = 0;

do {
  sum += i;
  i++;
} while (i <= 10);

console.log( sum);


// table of 5

let i = 1;
let table = "";
do {
        table += i`${i} x 5 = ${i * 5}\n`;
        i++;
        } while (i <= 10);
        console.log(table);



let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

do {
  guess = Number(prompt("Guess a number between 1 and 100"));
  attempts++;

  if (guess < numberToGuess) {
    alert("Too low! Try again.");
  } else if (guess > numberToGuess) {
    alert("Too high! Try again.");
  } else {
    alert(` Congratulations! You guessed the number in ${attempts} attempts.`);
    break;
  }
} while (true);



