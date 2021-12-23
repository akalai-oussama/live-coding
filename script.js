var a
var b
var aString
var bString
var operation
var solution

function Calculer(a,b,operation) {
    let _solution = undefined;
    switch (operation) {
        case '+':
            _solution = a + b;
            break;
        case '-':
            _solution = a - b;
        default:
            break;
    }
    return _solution;
}


function Onclicknumber(number) {
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    }
    else{
        if(bString == undefined) bString = '';
        bString += number;
    }
    display();
}


function display(number) {
    let display = document.getElementById("display")
    display.value = "";
    if(a != undefined && b != undefined && operation != undefined){
        display.value = number;
    }else{
        if(aString != undefined)
        display.value += aString
        if(operation != undefined)
        display.value += operation
        if(bString != undefined)
        display.value += bString
    }
}


function Operation(operationParam){
    if(operation == undefined){
        operation = operationParam;
        a = parseFloat(aString);
        display();
    }else{
        alert("Vous avez déjà choisi l'opération " + operation);
    }
}
function Equal(){
    a = parseFloat(aString);
    b = parseFloat(bString);
    solution = Calculer(a,b,operation);
    display(solution);
}




function Init(){
    a = undefined;
    b = undefined;
    aString = undefined;
    bString = undefined;
    operation = undefined;
    let display = document.getElementById("display");
    
    display.value = "";
}
