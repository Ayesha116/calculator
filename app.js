function getnum(num) {
    var result = document.getElementById("display")
    result.value += num

}

function clearResult() {
    var clear = document.getElementById("display")
    clear.value = ""

}

function getResult() {
    var finalresult = document.getElementById("display")
    display.value = eval(display.value)
}

function deletenum() {
    var result = document.getElementById("display").value;
    result =  result.substr(0 , result.length-1)
    document.getElementById("display").value = result
}