// label element
var label = document.getElementById("label")

// get all numbers buttons
var numberButtons = document.querySelectorAll("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine")

// get all operators buttons
var operatorButtons = document.querySelectorAll("#mult, #divide, #remainder, #minus, #plus")


// clear button 
var clearButton = document.getElementById("clear")
clearButton.onclick = function(){
    label.textContent = 0;
}

// 
numberButtons.forEach(function(button){
    button.addEventListener("click", function(){
        handleNumberButtonClick(button.textContent);
    });
});
operatorButtons.forEach(function(button){
    button.addEventListener("click", function(){
        label.textContent += button.textContent;
    })
})

// function to remove 0 
function handleNumberButtonClick(number) {
    // If current content is '0', replace it with the pressed number
    if (label.textContent === '0') {
        label.textContent = number;
    } else {
        // If it's not '0', append the pressed number
        label.textContent += number;
    }
}

// equal button
var equalButton = document.getElementById("equal");
equalButton.onclick = function(){
    label.textContent = evaluateExpression(label.textContent);
}


// result function
function evaluateExpression(expression){
    try{
        return eval(expression).toString();
    } catch(error){
        return "Error";
    }
}

// functions
oneBtn.onclick = function(){
    label.innerHTML = 1;
}
