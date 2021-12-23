var a
var b
var aString
var bString
var operation
var solution

function Onclicknumber(number) {
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number
    }else{
        if(bString == undefined) bString = '';
        bString += number
    }
    display();
}

function display(number) {
    let display = document.getElementById("display")
    display.value = "";
    if(a != undefined && operation != undefined && b != undefined){
        display.value = number
    }else{
        if(aString != undefined)
        display.value += aString
        if(operation != undefined)
        display.value += operation
        if(bString != undefined)
        display.value += bString
    }
}

function Operation(operationparam) {
    if(operation == undefined){
        operation = operationparam
        a = parseFloat(aString)
        display();
    }else{
        alert("this operation already exist")
    }
}

function Equale() {
    a = parseFloat(aString)
    b = parseFloat(bString)
    solution = Calculate(a,b,operation)
    display(solution);
}

function Calculate(a,b,operation) {
    let solution = undefined
    switch (operation) {
        case '+':
            solution = a + b
            break;
            case '-':
            solution = a + b
        default:
            break;
    }
    return solution
}