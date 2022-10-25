class Calc {
  createElement() {
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator");
    calculatorContainer.id = "calculator";
    this.element = calculatorContainer;
    document.getElementById("container").append(calculatorContainer);

    const outputDisplay = document.createElement("div");
    outputDisplay.classList.add("output-display");
    outputDisplay.id = "output-display";

    const buttonDisplay = document.createElement("div");
    buttonDisplay.classList.add("buttons-display");
    buttonDisplay.id = "buttons-display";

    document.getElementById("calculator").append(outputDisplay, buttonDisplay);

    //buttons:

    const buttonAC = document.createElement("button");
    buttonAC.classList.add("operator", "red", "button", "spanAC");
    buttonAC.textContent = "AC";
    buttonAC.id = "all-clear";

    const buttonC = document.createElement("button");
    buttonC.classList.add("operator", "button");
    buttonC.id = "clear-last-simbol";
    buttonC.textContent = "C";

    const buttonDivision = document.createElement("button");
    buttonDivision.classList.add("operator", "button");
    buttonDivision.id = "division";
    buttonDivision.textContent = "/";

    //second button line

    const buttonSeven = document.createElement("button");
    buttonSeven.classList.add("number", "button");
    buttonSeven.id = "seven";
    buttonSeven.textContent = "7";
    
    const buttonEight = document.createElement("button");
    buttonEight.classList.add("number", "button");
    buttonEight.id = "eight";
    buttonEight.textContent = "8";
    
    const buttonNine = document.createElement("button");
    buttonNine.classList.add("number", "button");
    buttonNine.id = "nine";
    buttonNine.textContent = "9";

    const buttonMultiplication = document.createElement("button");
    buttonMultiplication.classList.add("operator", "button");
    buttonMultiplication.id = "multiplication";
    buttonMultiplication.textContent = "*";

    // second line

    const buttonFour = document.createElement("button");
    buttonFour.classList.add("number", "button");
    buttonFour.id = "four";
    buttonFour.textContent = "4";
    
    const buttonFive = document.createElement("button");
    buttonFive.classList.add("number", "button");
    buttonFive.id = "five";
    buttonFive.textContent = "5";

    const buttonSix = document.createElement("button");
    buttonSix.classList.add("number", "button");
    buttonSix.id = "six";
    buttonSix.textContent = "6";
    
    const buttonSubtraction = document.createElement("button");
    buttonSubtraction.classList.add("operator", "button");
    buttonSubtraction.id = "subtraction";
    buttonSubtraction.textContent = "-";

    // second line

    const buttonOne = document.createElement("button");
    buttonOne.classList.add("number", "button");
    buttonOne.id = "one";
    buttonOne.textContent = "1";

    const buttonTwo = document.createElement("button");
    buttonTwo.classList.add("number", "button");
    buttonTwo.id = "two";
    buttonTwo.textContent = "2";
    
    const buttonThree = document.createElement("button");
    buttonThree.classList.add("number", "button");
    buttonThree.id = "three";
    buttonThree.textContent = "3";
    
    const buttonAddition = document.createElement("button");
    buttonAddition.classList.add("operator", "button");
    buttonAddition.id = "addition";
    buttonAddition.textContent = "+";

    //second line

    const buttonZero = document.createElement("button");
    buttonZero.classList.add("number", "button");
    buttonZero.id = "zero";
    buttonZero.textContent = "0";
    
    const buttonComma = document.createElement("button");
    buttonComma.classList.add("operator", "button");
    buttonComma.id = "Comma";
    buttonComma.textContent = ".";

    const buttonEqual = document.createElement("button");
    buttonEqual.classList.add("operator", "span", "button");
    buttonEqual.id = "equal";
    buttonEqual.textContent = "=";

    document
      .getElementById("buttons-display")
      .append(
        buttonAC,
        buttonC,
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

    let buttons = Array.from(document.querySelectorAll(".button"));
    let display = document.getElementById("output-display");

    buttons.map(button => {
      button.addEventListener("click", e => {
        switch (e.target.innerText) {
          case "AC":
            display.innerText = "";
            break;
          case "C":
            if (display.innerText) {
              display.innerText = display.innerText.slice(0, -1);
            }
            break;
          case "=":
            try {
              display.innerText = eval(display.innerText);
            } catch {
              display.innerText = "Error";
            }
            break;
          default:
            display.innerText += e.target.innerText;
        }
      });
    });
  }
}

const calculator = new Calc();
calculator.createElement();
