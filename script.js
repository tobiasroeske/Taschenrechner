const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const result = document.getElementById('result');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
function putToResult(arr) {

    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).addEventListener('click', () => {
            result.innerHTML += arr[i];
        });
    }
}

