let fibBtn = document.querySelector("#fib")
let factBtn = document.querySelector("#fact")

factBtn.onclick = function () {
    factNum = document.getElementById("factInput").value;
    document.getElementById("answerFactDiv").style.display = "block"
    var number = factorial(factNum)
    document.getElementById("answerFact").textContent = number
    console.log(factNum)
}

fibBtn.onclick = function () {
    fibNum = document.getElementById("fibInput").value;
    document.getElementById("answerFibDiv").style.display = "block"
    var number = fib(fibNum)
    document.getElementById("answerFib").textContent = number
}


function fib(num){
	if (num <= 1){
		return num
	}
	return fib(num-1) + fib(num-2)
}

function factorial(n){
    if (n == 1){
        return n
    }
    else if (n < 1){
        return 0
    }
    return n*factorial(n-1)
}
