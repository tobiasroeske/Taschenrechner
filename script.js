

const isEqual = document.getElementById('isEqual');
const result = document.getElementById('result');
const adv = document.getElementById('adv');
const table = document.getElementById('table');

let inBetweenResult = '';
let newText = document.createElement('div');
result.append(newText)

const newTableRow = document.createElement('tr');
const tableData1 = document.createElement('td');
const tableData2 = document.createElement('td');
const tableData3 = document.createElement('td');
const tableData4 = document.createElement('td');

newTableRow.setAttribute('id', 'extraRow');
tableData1.setAttribute('id', '(');
tableData2.setAttribute('id', ')');

newTableRow.hidden = true;

tableData1.innerHTML= '('
tableData2.innerHTML =')'
tableData3.innerHTML ='x^2'
tableData4.innerHTML = '&#8730'

table.insertBefore(newTableRow, table.firstChild);
table.querySelector('tr').appendChild(tableData1);
table.querySelector('tr').appendChild(tableData2);
table.querySelector('tr').appendChild(tableData3);
table.querySelector('tr').appendChild(tableData4);


function putNumToResult() {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    arr.forEach((num) => {
        document.getElementById(num).addEventListener('click', () => {
            newText.innerHTML += num;
            inBetweenResult += num;
        })
    })
    
}

function changeOperatorSymbol(origSymbol, newSymbol) {
    document.getElementById(origSymbol).addEventListener('click', () => {
        inBetweenResult += newSymbol;
        newText.innerHTML = '';
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
            case 'paranthese-open':
                changeOperatorSymbol('paranthese-close', '(');
                break;
            case 'paranthese-close':
                changeOperatorSymbol('paranthese-close', '(');
                break;
        }
    }
}

function toggleDisplay(target) {
    if (target.hidden) {
        target.hidden = false;
    } else {
        target.hidden = true;
    }
};

adv.addEventListener('click', () => {
    toggleDisplay(newTableRow);
});

function calculate() {
    let result = eval(inBetweenResult);
    newText.innerHTML = result;
 }

isEqual.addEventListener('click', () => {
    calculate();
});


function clear() {
    document.getElementById('btn-ac').addEventListener('click', () => {
        newText.innerHTML = '';
        inBetweenResult = 0;
    });
}

putNumToResult();
putOperatorToResult();
clear();
