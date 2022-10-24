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
  
      const previous = document.createElement("div");
      previous.classList.add("previous-simbols");
      previous.id = "previous-simbols";
      previous.textContent = "previous text";
      this.element = previous;
  
      const current = document.createElement("div");
      current.classList.add("current-simbols");
      current.id = "current-simbols";
      current.textContent = "current text";
      this.element = current;
      document.getElementById("output-display").append(previous, current);
  
      //buttonDisplay-buttons:
  
      const buttonAC = document.createElement("button");
      buttonAC.classList.add("item", "operator", "red");
      buttonAC.textContent = "AC";
      buttonAC.id = "all-clear";
      this.element = buttonAC;
  
      const buttonC = document.createElement("button");
      buttonC.classList.add("item", "operator");
      buttonC.id = "clear-last-simbol";
      buttonC.textContent = "C";
      this.element = buttonC;
  
      const buttonx2 = document.createElement("button");
      buttonx2.classList.add("item", "operator");
      buttonx2.id = "square";
      buttonx2.textContent = "x";
  
      const square = document.createElement("sup");
      square.textContent = "2";
      this.element = buttonx2;
  
      const buttonDivision = document.createElement("button");
      buttonDivision.classList.add("item", "operator");
      buttonDivision.id = "division";
      buttonDivision.textContent = "/";
      this.element = buttonDivision;
      //second button line
  
      const buttonSeven = document.createElement("button");
      buttonSeven.classList.add("number");
      buttonSeven.id = "seven";
      buttonSeven.textContent = "7";
      this.element = buttonSeven;
  
      const buttonEight = document.createElement("button");
      buttonEight.classList.add("number");
      buttonEight.id = "eight";
      buttonEight.textContent = "8";
      this.element = buttonEight;
  
      const buttonNine = document.createElement("button");
      buttonNine.classList.add("number");
      buttonNine.id = "nine";
      buttonNine.textContent = "9";
      this.element = buttonNine;
  
      const buttonMultiplication = document.createElement("button");
      buttonMultiplication.classList.add("item", "operator");
      buttonMultiplication.id = "multiplication";
      buttonMultiplication.textContent = "*";
      this.element = buttonMultiplication;
  
      // second line
  
      const buttonFour = document.createElement("button");
      buttonFour.classList.add("number");
      buttonFour.id = "four";
      buttonFour.textContent = "4";
      this.element = buttonFour;
  
      const buttonFive = document.createElement("button");
      buttonFive.classList.add("number");
      buttonFive.id = "five";
      buttonFive.textContent = "5";
      this.element = buttonFive;
  
      const buttonSix = document.createElement("button");
      buttonSix.classList.add("number");
      buttonSix.id = "six";
      buttonSix.textContent = "6";
      this.element = buttonSix;
  
      const buttonSubtraction = document.createElement("button");
      buttonSubtraction.classList.add("item", "operator");
      buttonSubtraction.id = "subtraction";
      buttonSubtraction.textContent = "-";
      this.element = buttonSubtraction;
  
      // second line
  
      const buttonOne = document.createElement("button");
      buttonOne.classList.add("number");
      buttonOne.id = "one";
      buttonOne.textContent = "1";
      this.element = buttonOne;
  
      const buttonTwo = document.createElement("button");
      buttonTwo.classList.add("number");
      buttonTwo.id = "two";
      buttonTwo.textContent = "2";
      this.element = buttonTwo;
  
      const buttonThree = document.createElement("button");
      buttonThree.classList.add("number");
      buttonThree.id = "three";
      buttonThree.textContent = "3";
      this.element = buttonThree;
  
      const buttonAddition = document.createElement("button");
      buttonAddition.classList.add("item", "operator");
      buttonAddition.id = "addition";
      buttonAddition.textContent = "+";
      this.element = buttonAddition;
  
      //second line
  
      const buttonZero = document.createElement("button");
      buttonZero.classList.add("number");
      buttonZero.id = "zero";
      buttonZero.textContent = "0";
      this.element = buttonZero;
  
      const buttonComma = document.createElement("button");
      buttonComma.classList.add("item", "operator");
      buttonComma.id = "Comma";
      buttonComma.textContent = ",";
      this.element = buttonComma;
  
      const buttonEqual = document.createElement("button");
      buttonEqual.classList.add("item", "operator", "span");
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
      document.getElementById("square").append(square);
    }
  }
  
  const newcalc = new Calc();
  newcalc.init();
  

