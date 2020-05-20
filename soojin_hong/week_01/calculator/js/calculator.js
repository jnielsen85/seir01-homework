//Part 1
//Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function ( num1 ) {
  const square = Math.pow( num1, 2 )
  console.log(`The result of squaring the number ${ num1 } is ${ square }.`)
  return square;
};

squareNumber(3);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function ( num2 ) {
  const half = num2 / 2
  console.log(`Half of ${ num2 } is ${ half }.`)
  return half;
};

halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function ( num3, num4 ) {
  const percent = num3 / num4 * 100
  console.log(`${ num3 } is ${ percent }% of ${ num4 }.`)
  return percent;
};

percentOf( 2, 4 );

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function ( num5 ) {
  const area = Math.round( Math.PI * num5 * num5 );
  console.log(`The area for a circle with radius ${ num5 } is ${ area }`)
  return area;
};

areaOfCircle(2);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.

// Square the result of #1 and store that result.

// Calculate the area of a circle with the result of #2 as the radius.

// Calculate what percentage that area is of the squared result (#3).

const calculatorLastBoss = function ( num6 ) {
  const half = num6 / 2;
  const square = half * half;
  const area = Math.PI * square * square;
  const percentage = Math.round( area / square * 100 );
  console.log(`It is ${ percentage }% of squared result.`);
  return area;
};

calculatorLastBoss(8);

/*
const calculatorFinal = function ( num7 ) {
  function halfNumber() {
    function squareNumber() {
      function areaOfCircle() {
        function
    };
  };
};
};


function areaOfCircle() {
  function squareNumber() {
    function halfNumber() {
      console.log()
    };
  };
};

*/


/*
String 1 DrEvil
const DrEvil = function ( amount ) {
  if ( amount === 1000000) {
    console.log(`${ amount } dollars (pinky)`);
  }else{
    console.log(`${ amount } dollars`);
  }
  return;
};

DrEvil(10);
DrEvil(1000000);


String 2 MixUp
const mixUp = function ( word1, word2 ) {
  const mixing1 = word1.slice(0, 1)+word2.slice(2, 4);
  const mixing2 = word2.slice(0, 2)+word1,slice(2, 3);
  return `${ mixing1 }, ${ mixing2 }`
};

mixUp(lion, tiger); // ligar, tigon

*/
