const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            currentInput += button.value;
            display.value = currentInput;
        } else if (button.classList.contains('operator')) {
            if (previousInput !== '') {
                calculate();
            }
            operator = button.value;
            previousInput = currentInput;
            currentInput = '';
        } else if (button.classList.contains('decimal')) {
            if (!currentInput.includes('.')) {
                currentInput += button.value;
                display.value = currentInput;
            }
        } else if (button.classList.contains('equal')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        }
    });
});

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            break;
    }
    display.value = result;
    previousInput = result;
    currentInput = '';
}