class Calc {
  init() {
    this.createElement();
  }

  createElement() {
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator");
    calculatorContainer.id = "calculator";
    this.element = calculatorContainer;
    document.getElementById("container").append(calculatorContainer);

    // outputDisplay

    const outputDisplay = document.createElement("div");
    outputDisplay.classList.add("output-display");
    this.element = outputDisplay;
    outputDisplay.id = "output-display";

    const buttonDisplay = document.createElement("div");
    buttonDisplay.classList.add("buttons-display");
    this.element = buttonDisplay;
    buttonDisplay.id = "buttons-display";

    document.getElementById("calculator").append(outputDisplay, buttonDisplay);

    const previous = document.createElement("input");
    previous.classList.add("previous-simbols");
    previous.id = "previous-simbols";
    this.element = previous;

    const current = document.createElement("input");
    current.classList.add("current-simbols");
    current.id = "current-simbols";

    this.element = current;
    document.getElementById("output-display").append(previous, current);

    //buttonDisplay-buttons:

    const buttonAC = document.createElement("button");
    buttonAC.classList.add("item", "operator", "red", "button");
    buttonAC.textContent = "AC";
    buttonAC.id = "all-clear";
    this.element = buttonAC;

    const buttonC = document.createElement("button");
    buttonC.classList.add("item", "operator", "button");
    buttonC.id = "clear-last-simbol";
    buttonC.textContent = "C";
    this.element = buttonC;

    const buttonx2 = document.createElement("button");
    buttonx2.classList.add("item", "operator", "button");
    buttonx2.id = "square";
    buttonx2.textContent = "x";

    const square = document.createElement("sup");
    square.textContent = "2";
    this.element = buttonx2;

    const buttonDivision = document.createElement("button");
    buttonDivision.classList.add("item", "operator", "button");
    buttonDivision.id = "division";
    buttonDivision.textContent = "/";
    this.element = buttonDivision;
    //second button line

    const buttonSeven = document.createElement("button");
    buttonSeven.classList.add("number", "button");
    buttonSeven.id = "seven";
    buttonSeven.textContent = "7";
    this.element = buttonSeven;
    buttonSeven.value = "7";

    const buttonEight = document.createElement("button");
    buttonEight.classList.add("number", "button");
    buttonEight.id = "eight";
    buttonEight.textContent = "8";
    this.element = buttonEight;
    buttonEight.value = "8";

    const buttonNine = document.createElement("button");
    buttonNine.classList.add("number", "button");
    buttonNine.id = "nine";
    buttonNine.textContent = "9";
    this.element = buttonNine;
    buttonNine.value = "9";

    const buttonMultiplication = document.createElement("button");
    buttonMultiplication.classList.add("item", "operator", "button");
    buttonMultiplication.id = "multiplication";
    buttonMultiplication.textContent = "*";
    this.element = buttonMultiplication;

    // second line

    const buttonFour = document.createElement("button");
    buttonFour.classList.add("number", "button");
    buttonFour.id = "four";
    buttonFour.textContent = "4";
    this.element = buttonFour;
    buttonFour.value = "4";

    const buttonFive = document.createElement("button");
    buttonFive.classList.add("number", "button");
    buttonFive.id = "five";
    buttonFive.textContent = "5";
    this.element = buttonFive;
    buttonFive.value = "5";

    const buttonSix = document.createElement("button");
    buttonSix.classList.add("number", "button");
    buttonSix.id = "six";
    buttonSix.textContent = "6";
    this.element = buttonSix;
    buttonSix.value = "6";

    const buttonSubtraction = document.createElement("button");
    buttonSubtraction.classList.add("item", "operator", "button");
    buttonSubtraction.id = "subtraction";
    buttonSubtraction.textContent = "-";
    this.element = buttonSubtraction;

    // second line

    const buttonOne = document.createElement("button");
    buttonOne.classList.add("number", "button");
    buttonOne.id = "one";
    buttonOne.value = "1";
    buttonOne.textContent = "1";
    this.element = buttonOne;

    const buttonTwo = document.createElement("button");
    buttonTwo.classList.add("number", "button");
    buttonTwo.id = "two";
    buttonTwo.textContent = "2";
    this.element = buttonTwo;
    buttonTwo.value = "2";

    const buttonThree = document.createElement("button");
    buttonThree.classList.add("number", "button");
    buttonThree.id = "three";
    buttonThree.textContent = "3";
    this.element = buttonThree;
    buttonThree.value = "3";

    const buttonAddition = document.createElement("button");
    buttonAddition.classList.add("item", "operator", "button");
    buttonAddition.id = "addition";
    buttonAddition.textContent = "+";
    this.element = buttonAddition;

    //second line

    const buttonZero = document.createElement("button");
    buttonZero.classList.add("number", "button");
    buttonZero.id = "zero";
    buttonZero.textContent = "0";
    this.element = buttonZero;
    buttonZero.value = "0";

    const buttonComma = document.createElement("button");
    buttonComma.classList.add("item", "operator", "button");
    buttonComma.id = "Comma";
    buttonComma.textContent = ".";
    this.element = buttonComma;
    buttonComma.value = ".";

    const buttonEqual = document.createElement("button");
    buttonEqual.classList.add("item", "operator", "span", "button");
    buttonEqual.id = "equal";
    buttonEqual.textContent = "=";
    this.element = buttonEqual;

    document
      .getElementById("buttons-display")
      .append(
        buttonAC,
        buttonC,
        buttonx2,
        buttonDivision,
        buttonSeven,
        buttonEight,
        buttonNine,
        buttonMultiplication,
        buttonFour,
        buttonFive,
        buttonSix,
        buttonSubtraction,
        buttonOne,
        buttonTwo,
        buttonThree,
        buttonAddition,
        buttonZero,
        buttonComma,
        buttonEqual
      );
    // inputbuttonsValue

    let string = "";
    let buttons = document.querySelectorAll(".button");

    Array.from(buttons).forEach(button => {
      button.addEventListener("click", e => {
        if (e.target.innerHTML == "=") {
          string = eval(string);
          document.querySelector("#current-simbols").value = string;
        } else if (e.target.innerHTML === "C") {
          document.querySelector("#current-simbols").value = string.slice(
            0,
            -1
          );
        } else if (e.target.innerHTML === "." && string.includes(".")) {
          return;
        } else {
          console.log(e.target);
          string = string + e.target.innerHTML;
          document.querySelector("#current-simbols").value = string;
        }

        if (e.target.innerHTML == "AC") {
          document.querySelector("#current-simbols").value = "";
        }
      });
    });

    document.getElementById("square").append(square);
  }
}

const newcalc = new Calc();
newcalc.init();
