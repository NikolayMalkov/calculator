let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let multiplyButton = document.getElementById('multiply');
let divineButton = document.getElementById('divine');
let firstValue = document.getElementById('first-value');
let secondValue = document.getElementById('second-value');
let resultValue = document.getElementById('result-value');

let buttons = [plusButton, minusButton, multiplyButton, divineButton]

buttons.forEach(function(item,i,buttons){
    item.addEventListener('click',operationsCLick)

});

function operationsCLick(event){
    let clickedElement = event.currentTarget;
    let operation = clickedElement.innerHTML;
    operations(operation)
}

function operations(operation) {
    let firstvalue = Number(firstValue.value);
    let secondvalue = Number(secondValue.value);
    if( operation === '+' ) {
        let result =  firstvalue + secondvalue 
        resultValue.value = result
        alert(result)}
    else if (operation === '-') {
        let result = firstvalue - secondvalue
        resultValue.value = result
        alert(result)
    }   
    else if (operation === '*') {
        let result = firstvalue * secondvalue
        resultValue.value = result
        alert(result)
    }
    else if (operation === '/') {
        let result = firstvalue / secondvalue
        resultValue.value = result
        alert(result)
    }
    else {
        alert(result)
    }
}


