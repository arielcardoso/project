// 6rd Section
// Ask a number ‘n’ to show all the Fibonacci numbers up to n th Fibonacci number. For example, if the number is 7, it will show 1, 1, 2, 3, 5, 8, 13
function CalculateFibonaccie() {
    let number = parseInt(document.getElementById("fibonacci").value);
    let html = document.getElementById("section6-result");
    
    if (!Number.isInteger(number) || number < 0) {
        html.innerHTML = "";
        return false;
    }

    let result = (number == 0)? [0] : [0,1];
    for (let i = 2; i <= number; i++) {
        let sum = result[result.length -1] + result[result.length -2];
        console.log("Fib("+ i +") = " + result[result.length -1] + " + " + result[result.length -2] + " = " + sum);
        result.push(sum)
    }
    html.innerHTML = "The fibonacci sequence is : " + result.join(", ");
}
