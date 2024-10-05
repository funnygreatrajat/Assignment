// Selecting the display element
const display = document.getElementById('display');

// All buttons on the calculator
const buttons = document.querySelectorAll('.btn');

// Variables to store the current input and the calculation
let currentInput = '';
let calculation = '';

// Adding event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Clear button
    if (button.id === 'clear') {
      currentInput = '';
      calculation = '';
      display.textContent = '0';

    // Backspace button (delete last character)
    } else if (button.id === 'backspace') {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || '0';

    // Equals button (calculate the result)
    } else if (button.id === 'equals') {
      try {
        calculation = eval(currentInput.replace('×', '*').replace('÷', '/'));
        display.textContent = calculation;
        currentInput = calculation.toString();
      } catch (error) {
        display.textContent = 'Error';
      }

    // Other buttons (numbers and operators)
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
