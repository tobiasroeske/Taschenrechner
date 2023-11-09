

const isEqual = document.getElementById('isEqual');
const result = document.getElementById('result');

let inBetweenResult = ''
let newText = document.createElement('div');
result.append(newText)

function putNumToResult() {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
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

function putOperatorToResult() {
    const arr = ['plus', 'minus', 'multiply', 'divide'];
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
function calculate() {
    let result = eval(newText.innerHTML);
    newText.innerHTML = result;
 }

isEqual.addEventListener('click', calculate);



function clear() {
    document.getElementById('btn-ac').addEventListener('click', () => {
        newText.innerHTML = '';
    });
}

putNumToResult();
putOperatorToResult();
clear();
