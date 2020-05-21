// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString = () => {
  let num = document.getElementById("numberString").value
  
  numberToString = num.toString();

  document.getElementById("stringShow").innerHTML = `" ${numberToString} " `;

console.log(typeof(numberToString));
}


// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {
  let str = document.getElementById("stringNum").value
  stringToNumber = parseInt(str);
  document.getElementById("numberShow").innerHTML = stringToNumber;
  console.log(typeof(stringToNumber));
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  
  // Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const dataData = () => {
    let data = document.getElementById("dataType").value;
    if (data === "null")
    {
      document.getElementById("dataShow").innerHTML = "null";
    }
    else if (data === "true") 
    {
      document.getElementById("dataShow").innerHTML = "boolean";
    }
    else if (data == "false") 
    {
      document.getElementById("dataShow").innerHTML = "boolean";
    }
    else if (data <= Number.MAX_VALUE) 
    {
      document.getElementById("dataShow").innerHTML = "number";
    }
    else {
      document.getElementById("dataShow").innerHTML = typeof data};
      console.log(typeof(data))
  }
  

  
// Write a JavaScript program that adds 2 numbers together.


const addTwoNumbers = () => {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  sum = a + b;
  document.getElementById("sumShow").innerHTML = sum;
  console.log(sum);
}

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true. 

const bothTrue = () =>{
  let firstBool = document.getElementById("firstBool").value;
  let secondBool = document.getElementById("secondBool").value;
  firstBool = firstBool.toLowerCase();
  secondBool = secondBool.toLowerCase();
  firstBool = firstBool.trim();
  secondBool = secondBool.trim();
  if(firstBool== "true" && secondBool == "true"){
    document.getElementById("bothShow").innerHTML = "Both are true";
    console.log("Both are true");
  }
  else if(firstBool == "false" && secondBool == "true" || firstBool == "true" && secondBool == "false"){
    document.getElementById("bothShow").innerHTML = "Only one is true"
    console.log("Only one is true");
  }
  else if(firstBool == "false" && secondBool == "false"){
    document.getElementById("bothShow").innerHTML = "Both are false";
    console.log("Both are false");
  }
  else{
    document.getElementById("bothShow").innerHTML = "You did not put a boolean in the box! Please only put in true or false"
    console.log("You did not put a boolean in the box! Please only put in true or false");
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24