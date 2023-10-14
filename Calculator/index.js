//variables for input

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
const calcValues = document.querySelectorAll(".btn");

let displayPrev = document.querySelector("#displayPrev");
let displayCurr = document.querySelector("#displayCurr");
const equals = document.querySelector(".equals");
const operants = document.querySelectorAll(".operant");
const clear = document.querySelector("#AC");
const deleteEl = document.querySelector("#delete");
let previousComput = "";

operants.forEach((operant) => {
  operant.addEventListener("click", () => {
    if (displayPrev.innerHTML == "") {
      firstNumber = displayCurr.innerHTML;
      displayPrev.innerHTML = `${displayCurr.innerHTML}  ${operant.value} `;
      displayCurr.innerHTML = "";
      operator = operant.value;
    } else {
      previousComput = concatFunc();
      displayPrev.innerHTML = previousComput + " " + operant.value + " ";
      operator = operant.value;
      firstNumber = previousComput;
      displayCurr.innerHTML = "";
      //console.log(firstNumber);
      //console.log(secondNumber);
    }
  });
});

const handleClick = (e) => {
  displayCurr.innerHTML === "0"
    ? (displayCurr.innerHTML = e.target.value)
    : (displayCurr.innerHTML += e.target.value);
};
calcValues.forEach((button) => {
  button.addEventListener("click", handleClick);
});

let result = 0;

const multiply = (firstNumber, secondNumber) => {
  result = +firstNumber * +secondNumber;
  if (!Number.isInteger(result)) {
    return result.toFixed(2);
  }
  return result;
};

const divide = (firstNumber, secondNumber) => {
  if (+secondNumber === 0) {
    alert("You can't divide a number by zero!");

    location.reload();
  } else {
    result = +firstNumber / +secondNumber;
    if (!Number.isInteger(result)) {
      return result.toFixed(2);
    }
    return result;
  }
};
const add = (firstNumber, secondNumber) => {
  result = +firstNumber + +secondNumber;
  if (!Number.isInteger(result)) {
    return result.toFixed(2);
  }
  return result;
};

const subtract = (firstNumber, secondNumber) => {
  result = +firstNumber - +secondNumber;

  if (!Number.isInteger(result)) {
    return result.toFixed(2);
  }
  return result;
};

clear.addEventListener("click", () => {
  displayPrev.innerHTML = "";
  displayCurr.innerHTML = "";
});

deleteEl.addEventListener("click", () => {
  if (displayCurr.innerHTML !== "") {
    displayCurr.innerHTML = displayCurr.innerHTML.slice(0, -1);
  } else {
    displayPrev.innerHTML = displayPrev.innerHTML.slice(0, -1);
    displayCurr.innerHTML += displayCurr.innerHTML;
  }
  //console.log(displayCurr.value);
});

equals.addEventListener("click", concatFunc);

function concatFunc() {
  //operationValue.push(display.value);

  if (previousComput == "") {
    secondNumber = displayCurr.innerHTML;
  } else {
    secondNumber = displayCurr.innerHTML;
  }

  console.log(previousComput);

  displayPrev.innerHTML += `${displayCurr.innerHTML} ${equals.value}`;

  const operatorFunc = (firstNumber, operator, secondNumber) => {
    if (operator == "x") {
      return multiply(firstNumber, secondNumber);
      //return result;
    } else if (operator == "+") {
      /* result = +firstNumber + +secondNumber; */
      return add(firstNumber, secondNumber);
    } else if (operator == "-") {
      /* result = +firstNumber - +secondNumber; */

      return subtract(firstNumber, secondNumber);
    } else if (operator == "÷") {
      return divide(firstNumber, secondNumber);
    }
  };
  displayCurr.innerHTML = operatorFunc(firstNumber, operator, secondNumber);

  return operatorFunc(firstNumber, operator, secondNumber);
}
