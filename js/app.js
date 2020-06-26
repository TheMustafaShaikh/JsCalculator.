//here is the javascript code.

var equation = "";

function addContentToInput(string) {
    equation += string;
    console.log(equation);
    document.getElementById("input-values").value = equation;

}

function clearText() {
    equation = "";
    document.getElementById("input-values").value = equation;
    document.getElementById("total-output").value = "0";

}

function result() {
    if (equation == "") {
        equation = document.getElementById("input-values").value;
        equation.toString();
    }

    var result = eval(equation);
    document.getElementById("total-output").value = result;
}