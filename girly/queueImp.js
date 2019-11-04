var qInputs = document.getElementsByClassName("qinput")
var arraySizeBtn = document.querySelector("#submitSizeBtn")
var myQueue = new Queue(6)
console.log(myQueue.queueArray);

var nameEnqBtn = document.querySelector("#nameEnqBtn")
var colEnqBtn = document.querySelector("#colEnqBtn")
var progEnqBtn = document.querySelector("#progEnqBtn")
var regNoEnqBtn = document.querySelector("#regNoEnqBtn")
var stdNoEnqBtn = document.querySelector("#stdNoEnqBtn")
var cgpaEnqBtn = document.querySelector("#cgpaEnqBtn")

var elementsBtn = document.querySelector("#elementsBtn")
var qSizeBtn = document.querySelector("#qSizeBtn")
var lSizeBtn = document.querySelector("#lSizeBtn")
var qEmpty = document.querySelector("#qEmpty")
var qFull = document.querySelector("#qFull")
var deque = document.querySelector("#deque")

// arraySizeBtn.onclick = function () {
//     var arraySize = document.querySelector("#arraySizeInput")
//     console.log("array size:", arraySize.value);
//     var queueSize = arraySize.value
//     console.log("queueSize:", queueSize);
//     myQueue2 = new Queue(queueSize)
//     console.log(myQueue2.queueArray);
//     console.log("arraySize:", myQueue.size)
//     console.log("current queue:", myQueue.queueArray);
//     console.log("");
// }

nameEnqBtn.onclick = function () {
    var name = qInputs[0].value
    console.log("name enqueued:", name)
    myQueue.enqueue(name)
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

colEnqBtn.onclick = function () {
    var college = qInputs[1].value
    console.log("college enqueued:", college)
    myQueue.enqueue(college)
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

progEnqBtn.onclick = function () {
    var programme = qInputs[2].value
    console.log("programme enqueued:", programme)
    myQueue.enqueue(programme)
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

regNoEnqBtn.onclick = function () {
    var regNo = qInputs[3].value
    console.log("regNo enqueued:", regNo)
    myQueue.enqueue(regNo)
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

stdNoEnqBtn.onclick = function () {
    var stdNo = qInputs[4].value
    console.log("stdNo enqueued:", stdNo)
    myQueue.enqueue(stdNo)
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

cgpaEnqBtn.onclick = function () {
    var cgpa = qInputs[5].value
    console.log("cgpa enqueued:", cgpa)
    myQueue.enqueue(cgpa)
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

deque.onclick = function (){
    myQueue.dequeue()
    console.log("current queue:", myQueue.queueArray);
    console.log("");
}

qFull.onclick = function (){
    console.log("Queue is full:", myQueue.isFull())
    console.log("")
}

qEmpty.onclick = function (){
    console.log("Queue is empty", myQueue.isEmpty())
    console.log("")
}

lSizeBtn.onclick = function (){
    console.log("Queue list size", myQueue.size)
    console.log("")
}

qSizeBtn.onclick = function (){
    console.log("Queue size", myQueue.count)
    console.log("")
}

elementsBtn.onclick = function (){
    console.log("Queue elements", myQueue.queueArray)
    console.log("")
}

function Queue(size){
	this.front = -1
	this.rear = -1
	this.count = 0
	this.size = size
	this.queueArray = new Array(size).fill(null)
	this.isEmpty = function (){
		if (this.front == -1 && this.rear == -1){
			return true
		}else{
			return false
		}
	}
	this.enqueue = function (item){
		if((this.count + 1) <= this.size){
			if (this.isEmpty()){
				this.front = this.rear = 0
				this.queueArray[this.rear] = item
				this.count ++
			}else{
				this.rear = (this.rear + 1)%this.queueArray.length
				this.queueArray[this.rear] = item
				this.count ++
			}
		}else{
			return "stack overflow"
		}
	}
	this.dequeue = function (){
		if (this.isEmpty()){
			return false
		}
		this.front = (this.front)%this.queueArray.length
		this.queueArray[this.front] = null
		this.front += 1
		this.count --
	}
	this.queueElements = function (){
		return this.queueArray
	}
	this.queueSize = function(){
		return this.count
    }
    this.isFull = function (){
        return (this.count + 1) > this.size
    }
}
