function add() {
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let result = x + y;
    displayResult(result);
}

function subtract() {
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let result = x - y;
    displayResult(result);
}

function multiply() {
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let result = x * y;
    displayResult(result);
}

function divide() {
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let result = x / y;
    displayResult(result);
}

function power() {
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseInt(document.getElementById('num2').value);
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    displayResult(result);
}

function clearInput() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('output').innerHTML = '';
}

function displayResult(result) {
    let output = document.getElementById('output');
    output.innerHTML = result;
    if (result < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = 'white';
    }
}
