const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['plus', 'minus', 'multiply', 'divide'];
const isEqual = document.getElementById('isEqual');
const result = document.getElementById('result');

let inBetweenResult = [];
let newText = document.createElement('div');
result.append(newText)

const resultDisplay = result.querySelector('div').style.display;


function putNumToResult(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).addEventListener('click', () => {
            newText.innerHTML += arr[i];
        });
    }
}

function changeOperatorSymbol(origSymbol, newSymbol) {
    document.getElementById(origSymbol).addEventListener('click', () => {
        newText.innerHTML += newSymbol;
    })
}

function putOperatorToResult(arr) {
    for (let i =0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'plus':
                changeOperatorSymbol('plus', ' + ');
                break;
            case 'minus':
                changeOperatorSymbol('minus', ' - ');
                break;
            case 'multiply':
                changeOperatorSymbol('multiply', ' * ');
                break;
            case 'divide':
                changeOperatorSymbol('divide', ' / ');
                break;
        }
    }
}


function clear() {
    document.getElementById('btn-ac').addEventListener('click', () => {
        newText.innerHTML = '';
    });
}

putNumToResult(numArr);
putOperatorToResult(operators);
clear();
