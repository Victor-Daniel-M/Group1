var stack = new Stack(6)
console.log(stack.stackArray)

var stackInputs = document.getElementsByClassName("stackInput")
var nameBtn = document.querySelector("#nameStackBtn")
var colStackBtn = document.querySelector("#colStackBtn")
var progStackBtn = document.querySelector("#progStackBtn")
var regNoStackBtn = document.querySelector("#regNoStackBtn")
var stdNoStackBtn = document.querySelector("#stdNoStackBtn")
var cgpaStackBtn = document.querySelector("#cgpaStackBtn")

var elementsBtn = document.querySelector("#elementsBtn")
var topElementBtn = document.querySelector("#topElementBtn")
var listSizeBtn = document.querySelector("#listSizeBtn")
var stackPop = document.querySelector("#stackPop")

elementsBtn.onclick = function (){
    console.log("current stack:", stack.stackElements());
    console.log("");
}

topElementBtn.onclick = function (){
    console.log("top most stack element:", stack.topMost());
    console.log("");
}

listSizeBtn.onclick = function (){
    console.log("stack size:", stack.size);
    console.log("");
}

stackPop.onclick = function (){
    var poppedItem = stack.pop()
    if (poppedItem == null){
        console.log("Stack underflow !")
    }else{
        console.log("popped item:", poppedItem);
    }
    console.log("");
}

nameBtn.onclick = function (){
    var name = stackInputs[0].value
    if(stack.push(name)){
        console.log("name pushed:", name)
        console.log("current stack:", stack.stackArray);
    }else{
        console.log("Stack overflow !!")
    }
    console.log("");
}

colStackBtn.onclick = function (){
    var college = stackInputs[1].value
    if(stack.push(college)){
        console.log("college pushed:", college)
        console.log("current stack:", stack.stackArray);
    }else{
        console.log("Stack overflow !!")
    }
    console.log("");
}

progStackBtn.onclick = function (){
    var prog = stackInputs[2].value
    if(stack.push(prog)){
        console.log("prog pushed:", prog)
        console.log("current stack:", stack.stackArray);
    }else{
        console.log("Stack overflow !!")
    }
    console.log("");
}

stdNoStackBtn.onclick = function (){
    var stdNo = stackInputs[3].value
    if(stack.push(stdNo)){
        console.log("stdNo pushed:", stdNo)
        console.log("current stack:", stack.stackArray);
    }else{
        console.log("Stack overflow !!")
    }
    console.log("");
}

regNoStackBtn.onclick = function (){
    var regNo = stackInputs[4].value
    if(stack.push(regNo)){
        console.log("regNo pushed:", regNo)
        console.log("current stack:", stack.stackArray);
    }else{
        console.log("Stack overflow !!")
    }
    console.log("");
}

cgpaStackBtn.onclick = function (){
    var cgpa = stackInputs[5].value
    if(stack.push(cgpa)){
        console.log("cgpa pushed:", cgpa)
        console.log("current stack:", stack.stackArray);
    }else{
        console.log("Stack overflow !!")
    }
    console.log("");
}

function Stack(size){
	this.size = size
	this.top = 0
	this.pointer = 0
	this.stackArray = new Array(this.size).fill(undefined)
	this.push = function(item){
		if ((this.top)==this.size){
			return false
		}else{
			this.stackArray[this.top] = item
			this.top += 1
			return true
		}
	}
	this.pop = function(){
		if ((this.top - 1) >= 0){
			poppedItem = this.stackArray[this.top - 1]
			this.stackArray[this.top - 1] = undefined
			this.top -= 1
			return poppedItem
		}
		return null
	}
	this.stackElements = function(){
		return this.stackArray
	}
	this.topMost = function(){
		return this.stackArray[this.top - 1]
	}
	this.stackSize = function(){
		return this.top
	}
}