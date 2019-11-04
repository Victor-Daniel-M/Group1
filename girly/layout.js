// FORMS
var doublyLinkedListForm = document.querySelector("#doublyLinkedListForm")
var fibForm = document.querySelector("#fibForm")
var factForm = document.querySelector("#factForm")
var queueForm = document.querySelector("#queueForm")
var searchForm = document.querySelector("#searchForm")
var sortForm = document.querySelector("#sortForm")
var stackForm = document.querySelector("#stackForm")
var tohForm = document.querySelector("#toh")

// BUTTONS
var appendBtn = document.getElementById("appendBtn")
var binarySearchBtn = document.getElementById("binarySearchBtn")
var dlSearchBtn = document.getElementById("dlSearchBtn")
var IlSearchBtn = document.getElementById("IlSearchBtn")
var factButton = document.getElementById("calcFactBtn")
var fibButton = document.getElementById("calcFibBtn")
var sortAppendBtn = document.getElementById("sortAppendBtn")
var bubbleBtn = document.getElementById("bubbleBtn")
var selectionBtn = document.getElementById("selectionBtn")
var insertionBtn = document.getElementById("insertionBtn")
var mergeSortBtn = document.getElementById("mergeSortBtn")
var quickSortBtn = document.getElementById("quickSortBtn")

// Console
var consoleOutput = document.querySelector("#consoleOutput")

// Stack array
var stack = new Stack(6)
var stackInputs = document.getElementsByClassName("stackInput")
var nameBtn = document.querySelector("#nameStackBtn")
var colStackBtn = document.querySelector("#colStackBtn")
var progStackBtn = document.querySelector("#progStackBtn")
var regNoStackBtn = document.querySelector("#regNoStackBtn")
var stdNoStackBtn = document.querySelector("#stdNoStackBtn")
var cgpaStackBtn = document.querySelector("#cgpaStackBtn")
var stackElementsBtn = document.querySelector("#stackElementsBtn")
var topElementBtn = document.querySelector("#topElementBtn")
var listSizeBtn = document.querySelector("#listSizeBtn")
var stackPop = document.querySelector("#stackPop")

// Queue Array
var myQueue = new Queue(6)
var qInputs = document.getElementsByClassName("qinput")
var nameEnqBtn = document.querySelector("#nameEnqBtn")
var colEnqBtn = document.querySelector("#colEnqBtn")
var progEnqBtn = document.querySelector("#progEnqBtn")
var regNoEnqBtn = document.querySelector("#regNoEnqBtn")
var stdNoEnqBtn = document.querySelector("#stdNoEnqBtn")
var cgpaEnqBtn = document.querySelector("#cgpaEnqBtn")
var queueElementsBtn = document.querySelector("#queueElementsBtn")
var qSizeBtn = document.querySelector("#qSizeBtn")
var lSizeBtn = document.querySelector("#lSizeBtn")
var qEmpty = document.querySelector("#qEmpty")
var qFull = document.querySelector("#qFull")
var deque = document.querySelector("#deque")

// SIDE BAR ITEMS
var fibItem = document.querySelector("#fibItem")
var factItem = document.querySelector("#factItem")
var linkedListItem = document.querySelector("#linkedListItem")
var queueItem = document.querySelector("#queueItem")
var searchItem = document.querySelector("#searchItem")
var sortItem = document.querySelector("#sortItem")
var stackItem = document.querySelector("#stackItem")
var tohItem = document.querySelector("#tohItem")

// SIDE NAV BAR
var navItems = []
var contentItems = []
setNavList()

fibItem.onclick = function () {
    itemClicked(fibItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "FIBONACCI"
    clearConsole()
}

factItem.onclick = function () {
    itemClicked(factItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "FACTORIAL"
    clearConsole()
}

queueItem.onclick = function () {
    itemClicked(queueItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "QUEUE"
    clearConsole()
}

searchItem.onclick = function () {
    itemClicked(searchItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "SEARCH"
    clearConsole()
}

sortItem.onclick = function () {
    itemClicked(sortItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "SORTING"
    clearConsole()
}

stackItem.onclick = function () {
    itemClicked(stackItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "STACK"
    clearConsole()
}

tohItem.onclick = function () {
    itemClicked(tohItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "TOWER OF HANOI"
    clearConsole()
}


function clearConsole() {
    consoleOutput.innerHTML = "Output will display here..."
}

linkedListItem.onclick = function () {
    itemClicked(linkedListItem)
    var formHeading = document.querySelector("#heading")
    formHeading.innerHTML = "LINKED LIST"
    clearConsole()
}

function setNavList() {
    navItems.push(fibItem)
    navItems.push(factItem)
    navItems.push(linkedListItem)
    navItems.push(queueItem)
    navItems.push(searchItem)
    navItems.push(sortItem)
    navItems.push(stackItem)
    navItems.push(tohItem)
}

// Setting current main content
function itemClicked(item) {
    if (contentItems.length == 0) {
        setContentList()
    }
    for (let index = 0; index < navItems.length; index++) {
        if (navItems[index] == item) {
            console.log(item.id, "clicked !")
            item.style = "background-color: #F2EDED;"
            if (item.id == "stackItem") {
                console.log("Current form is stack")
                currentContent(stackForm)
            } else if (item.id == "queueItem") {
                currentContent(queueForm)
            } else if (item.id == "linkedListItem") {
                currentContent(doublyLinkedListForm)
            } else if (item.id == "tohItem") {
                currentContent(tohForm)
            }else if (item.id == "factItem") {
                console.log("fact")
                currentContent(factForm)
            }else if (item.id == "fibItem"){
                console.log("fib")
                currentContent(fibForm)
            }else if (item.id == "searchItem"){
                console.log("Search")
                currentContent(searchForm)
            }else if (item.id == "sortItem"){
                console.log("Sort")
                currentContent(sortForm)
            }
        } else {
            navItems[index].style = "background-color: white;"
        }
    }
}

// CONTENT PART
function setContentList() {
    contentItems.push(doublyLinkedListForm)
    contentItems.push(factForm)
    contentItems.push(fibForm)
    contentItems.push(queueForm)
    contentItems.push(searchForm)
    contentItems.push(sortForm)
    contentItems.push(stackForm)
    contentItems.push(tohForm)
}

// Displaying current content
function currentContent(content) {
    console.log(factForm)
    for (let index = 0; index < contentItems.length; index++) {
        if (contentItems[index].id == content.id) {
            console.log(stackForm.id, "set")
            contentItems[index].style = "display: block;"
        } else {
            console.log(content.id, "set")
            contentItems[index].style = "display: none;"
        }
    }
}


// STACK (IMPLEMENTAITONS)
stackElementsBtn.onclick = function () {
    var arrToConsole = []
    for (var i = 0; i < stack.stackArray.length; i++) {
        if (stack.stackArray[i] != undefined) {
            arrToConsole.push(stack.stackArray[i])
        }
    }
    consoleOutput.innerHTML = "<p>" + "current stack:" + " [ " + arrToConsole + " ]</p>"
}

topElementBtn.onclick = function () {
    var arrToConsole = []
    for (var i = 0; i < stack.stackArray.length; i++) {
        if (stack.stackArray[i] != undefined) {
            arrToConsole.push(stack.stackArray[i])
        }
    }
    consoleOutput.innerHTML = "<p>" + "current stack:" + " [ " + arrToConsole + " ]</p>" + "<p> top most stack element:" + stack.topMost() + "</p>"
}

listSizeBtn.onclick = function () {
    consoleOutput.innerHTML = "<p> stack size:" + stack.size + "</p>"
}

stackPop.onclick = function () {
    var poppedItem = stack.pop()
    var arrToConsole = []
    for (var i = 0; i < stack.stackArray.length; i++) {
        if (stack.stackArray[i] != undefined) {
            arrToConsole.push(stack.stackArray[i])
        }
    }
    if (poppedItem == null) {
        consoleOutput.innerHTML = "<p> Stack Underflow !!</p><p>" + "current stack:" + " [ " + arrToConsole + " ]</p>"
    } else {
        consoleOutput.innerHTML = "<p> popped item:" + poppedItem + "</p><p>" + "current stack:" + " [ " + arrToConsole + " ]</p>"
    }
    console.log("");
}

nameBtn.onclick = function () {
    var name = stackInputs[0].value
    if (stack.push(name)) {
        printPushToConsole("Name", name, false)
    } else {
        printPushToConsole(null, null, true)
    }
    console.log("");
}

colStackBtn.onclick = function () {
    var college = stackInputs[1].value
    if (stack.push(college)) {
        printPushToConsole("College", college, false)
    } else {
        printPushToConsole(null, null, true)
    }
    console.log("");
}

progStackBtn.onclick = function () {
    var prog = stackInputs[2].value
    if (stack.push(prog)) {
        printPushToConsole("Prog", prog, false)
    } else {
        printPushToConsole(null, null, true)
    }
    console.log("");
}

stdNoStackBtn.onclick = function () {
    var stdNo = stackInputs[4].value
    console.log(stdNo)
    if (stack.push(stdNo)) {
        printPushToConsole("StdNo", stdNo, false)
    } else {
        printPushToConsole(null, null, true)
    }
    console.log("");
}

regNoStackBtn.onclick = function () {
    var regNo = stackInputs[3].value
    if (stack.push(regNo)) {
        printPushToConsole("RegNo", regNo, false)
    } else {
        printPushToConsole(null, null, true)
    }
    console.log("");
}

cgpaStackBtn.onclick = function () {
    var cgpa = stackInputs[5].value
    if (stack.push(cgpa)) {
        printPushToConsole("CGPA", cgpa, false)
    } else {
        printPushToConsole(null, null, true)
    }
    console.log("");
}

function printPushToConsole(itemPushed, stdNo, isOverflow) {
    var arrToConsole = []
    if (isOverflow == false) {
        for (var i = 0; i < stack.stackArray.length; i++) {
            if (stack.stackArray[i] != undefined) {
                arrToConsole.push(stack.stackArray[i])
            }
        }
        consoleOutput.innerHTML = "<p>" + itemPushed + " pushed: " + stdNo + "</p><p>" + "current stack:" + " [ " + arrToConsole + " ]</p>"

    } else {
        consoleOutput.innerHTML = "<p> Stack overflow !! </p><p>" + "current stack:" + " [ " + stack.stackArray + " ]</p>"
    }
}

function Stack(size) {
    this.size = size
    this.top = 0
    this.pointer = 0
    this.stackArray = new Array(this.size).fill(undefined)
    this.push = function (item) {
        if ((this.top) == this.size) {
            return false
        } else {
            this.stackArray[this.top] = item
            this.top += 1
            return true
        }
    }
    this.pop = function () {
        if ((this.top - 1) >= 0) {
            poppedItem = this.stackArray[this.top - 1]
            this.stackArray[this.top - 1] = undefined
            this.top -= 1
            return poppedItem
        }
        return null
    }
    this.stackElements = function () {
        return this.stackArray
    }
    this.topMost = function () {
        return this.stackArray[this.top - 1]
    }
    this.stackSize = function () {
        return this.top
    }
}


//  QUEUE (IMPLEMENTAITONS)
nameEnqBtn.onclick = function () {
    var name = qInputs[0].value
    myQueue.enqueue(name)
    printEnqueueToConsole(name, "name")
}

colEnqBtn.onclick = function () {
    var college = qInputs[1].value
    myQueue.enqueue(college)
    printEnqueueToConsole(college, "college")
}

progEnqBtn.onclick = function () {
    var programme = qInputs[2].value
    myQueue.enqueue(programme)
    printEnqueueToConsole(programme, "programme")
}

regNoEnqBtn.onclick = function () {
    var regNo = qInputs[3].value
    myQueue.enqueue(regNo)
    printEnqueueToConsole(regNo, "regNo")
}

stdNoEnqBtn.onclick = function () {
    var stdNo = qInputs[4].value
    myQueue.enqueue(stdNo)
    printEnqueueToConsole(stdNo, "stdNo")
}

cgpaEnqBtn.onclick = function () {
    var cgpa = qInputs[5].value
    myQueue.enqueue(cgpa)
    printEnqueueToConsole(cgpa, "CGPA")
}

function printEnqueueToConsole(itemEnqueued, itemId) {
    var arrToConsole = []
    for (var i = 0; i < myQueue.queueArray.length; i++) {
        if (myQueue.queueArray[i] != null) {
            arrToConsole.push(myQueue.queueArray[i])
        }
    }
    if (arrToConsole.length == myQueue.size) {
        consoleOutput.innerHTML = "<p>Queue is full !!</p><p>" + "current queue:" + " [ " + arrToConsole + " ]</p>"
    } else {
        consoleOutput.innerHTML = "<p>" + itemId + " enqueued: " + itemEnqueued + "</p><p>" + "current queue:" + " [ " + arrToConsole + " ]</p>"
    }
}

deque.onclick = function () {
    var dequeuedItem = myQueue.dequeue()
    var arrToConsole = []
    for (var i = 0; i < myQueue.queueArray.length; i++) {
        if (myQueue.queueArray[i] != null) {
            arrToConsole.push(myQueue.queueArray[i])
        }
    }
    if (dequeuedItem == false) {
        consoleOutput.innerHTML = "<p>Queue is empty, Can't dequeue !!</p><p>" + "current queue:" + " [ " + arrToConsole + " ]</p>"
    } else {
        consoleOutput.innerHTML = "<p>Dequeued an item...</p><p>" + "current queue:" + " [ " + arrToConsole + " ]</p>"
    }
}

qFull.onclick = function () {
    consoleOutput.innerHTML = "<p>Queue is full:" + myQueue.isFull() + "</p>"
}

qEmpty.onclick = function () {
    consoleOutput.innerHTML = "<p>Queue is empty:" + myQueue.isEmpty() + "</p>"
}

lSizeBtn.onclick = function () {
    consoleOutput.innerHTML = "<p>Queue list size:" + myQueue.size + "</p>"
}

qSizeBtn.onclick = function () {
    consoleOutput.innerHTML = "<p>Queue size:" + myQueue.count + "</p>"
}

queueElementsBtn.onclick = function () {
    console.log("elements button pressed !")
    var arrToConsole = []
    for (var i = 0; i < myQueue.queueArray.length; i++) {
        if (myQueue.queueArray[i] != null) {
            arrToConsole.push(myQueue.queueArray[i])
        }
    }
    consoleOutput.innerHTML = "<p>Queue elements: [" + arrToConsole + "] </p>"
}

function Queue(size) {
    this.front = -1
    this.rear = -1
    this.count = 0
    this.size = size
    this.queueArray = new Array(size).fill(null)
    this.isEmpty = function () {
        if (this.front == -1 && this.rear == -1) {
            return true
        } else {
            return false
        }
    }
    this.enqueue = function (item) {
        if ((this.count + 1) <= this.size) {
            if (this.isEmpty()) {
                this.front = this.rear = 0
                this.queueArray[this.rear] = item
                this.count++
            } else {
                this.rear = (this.rear + 1) % this.queueArray.length
                this.queueArray[this.rear] = item
                this.count++
            }
        } else {
            return "stack overflow"
        }
    }
    this.dequeue = function () {
        if (this.isEmpty()) {
            return false
        }
        
        this.queueArray[this.front] = null
        this.front = (this.front + 1) % this.queueArray.length // getting current
        this.count--

        if (this.count == 0) {
            this.front = this.rear = -1
        }
    }
    this.queueElements = function () {
        return this.queueArray
    }
    this.queueSize = function () {
        return this.count
    }
    this.isFull = function () {
        return (this.count + 1) > this.size
    }
}


// SEARCH
var searchArray = []
appendBtn.onclick = function () {
    var newNum = document.getElementById("numToArrayInput")
    searchArray.push(parseInt(newNum.value))
    consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p>"
}

binarySearchBtn.onclick = function () {
    var numToSearch = parseInt(document.getElementById("numToSearch").value)
    var start = new Date().getMilliseconds();
    var numIndex = binary_search(searchArray, 0, searchArray.length - 1, numToSearch)
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    console.log(parseFloat(elapsed).toFixed(3))
    if (numIndex != -1){
        consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p><p>Index of "+numToSearch+" is "+ numIndex +" (Binary Search)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
    }else{
        consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p><p>Index of "+numToSearch+" Not found ! (Binary Search)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
    }
}

function binary_search(array, low, high, value){
    var mid = Math.ceil((low + high)/2)
    if (low > high){
        return -1
    }
    if (value == array[mid]){
        return mid
    }else if (value < array[mid]){
        return binary_search(array, low, mid - 1, value)
    }
    else{
        return binary_search(array, mid + 1, high, value)
    }
}

dlSearchBtn.onclick = function () {
    var numToSearch = parseInt(document.getElementById("numToSearch").value)
    var start = new Date().getMilliseconds();
    var numIndex = unorderedSearch(searchArray, searchArray.length - 1, numToSearch)
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    if (numIndex != -1){
        consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p><p>Index of "+numToSearch+" is "+ numIndex +" (Unordered Search)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
    }else{
        consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p><p>Index of "+numToSearch+" Not Found ! (Unordered Search)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
    }
}

function unorderedSearch(array, array_size, value){
    console.log(array, array_size, value);
    
    for (var index = 0; index <= array_size; index ++){
        console.log(array[index]);
        
        if (array[index] == value){
            return index
        }
    }
    return -1
}


IlSearchBtn.onclick = function () {
    var numToSearch = parseInt(document.getElementById("numToSearch").value)
    var start = new Date().getMilliseconds();
    var numIndex = orderedSearch(searchArray, searchArray.length - 1, numToSearch)
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    if (numIndex != -1){
        consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p><p>Index of "+numToSearch+" is "+ numIndex +" (Ordered Search)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
    }else{
        consoleOutput.innerHTML = "<p>Current array: ["+ searchArray +"]</p><p>Index of "+numToSearch+" is Not Found ! (Ordered Search)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
    }
}

function orderedSearch(array, array_size, value){
    for (var index = 0; index <= array_size; index ++){
        if (array[index] > value){
            return -1
        }else if (array[index] == value){
            return index
        }
    }
    return -1
}


// SORTING
var sortArray = []
sortAppendBtn.onclick = function () {
    var newNum = document.getElementById("numToSortArrayInput")
    sortArray.push(parseInt(newNum.value))
    consoleOutput.innerHTML = "<p>Current array: ["+ sortArray +"]</p>"
}

bubbleBtn.onclick = function () {
    var start = new Date().getMilliseconds();
    var bubbleSort = new BubbleSort([...sortArray])
    var sortedArray = bubbleSort.bubbleSort()
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    consoleOutput.innerHTML = "<p>Current array: ["+ sortArray +"]</p><p>Sorted array is ["+ sortedArray +"] (Bubble Sort)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
}

selectionBtn.onclick = function () {
    var start = new Date().getMilliseconds();
    var selectionSort = new SelectionSort([...sortArray])
    var sortedArray = selectionSort.sort()
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    consoleOutput.innerHTML = "<p>Current array: ["+ sortArray +"]</p><p>Sorted array is ["+ sortedArray +"] (Selection Sort)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
}

insertionBtn.onclick = function () {
    var start = new Date().getMilliseconds();
    var insertionSort = new InsertionSort([...sortArray])
    var sortedArray = insertionSort.sort()
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    consoleOutput.innerHTML = "<p>Current array: ["+ sortArray +"]</p><p>Sorted array is ["+ sortedArray +"] (Insertion Sort)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
}

quickSortBtn.onclick = function () {
    var start = new Date().getMilliseconds();
    var sortedArray = quickSort([...sortArray], 0, sortArray.length - 1);
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    consoleOutput.innerHTML = "<p>Current array: ["+ sortArray +"]</p><p>Sorted array is ["+ sortedArray +"] (Quick Sort)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
}

mergeSortBtn.onclick = function () {
    var start = new Date().getMilliseconds();
    var sortedArray = mergesort([...sortArray]);
    var elapsed = (new Date().getMilliseconds())/1000 - start/1000;
    consoleOutput.innerHTML = "<p>Current array: ["+ sortArray +"]</p><p>Sorted array is ["+ sortedArray +"] (Merge Sort)</p><p>[Finished in "+parseFloat(elapsed).toFixed(1)+" milliseconds]</p>"
}

class BubbleSort {
	constructor(arr){
		this.array = arr
	}
	swap(array, index1, index2){
	    var value1 = this.array[index1]
	    this.array[index1] = this.array[index2]
	    this.array[index2] = value1
	}
	bubbleSort(){
	    for (var index in [...this.array.keys()].slice(1, this.array.length)){ // to run n-1 times
	        for (var i = 0; i < this.array.length; i++){
	        	// console.log(i)
	            try{
	                if (this.array[i] > this.array[(i + 1)]){
	                    this.swap(this.array, i, i + 1)
	                }
	            }
	            catch(er){
	                
	            }
            }
	    }
        console.log("new array: ", this.array)
        return this.array
    }
}

class InsertionSort{
	constructor(array){
		this.array = array
	}
	sort(){
		var n = this.array.length
	    for (var index = 1; index < n; index ++){
	        var tmp = this.array[index]
	        var j = index
	        while (j>0 && tmp < this.array[j-1]){
	            this.array[j] = this.array[j - 1]
	            j = j - 1
	        }
            this.array[j] = tmp
	    }
	    return this.array
	}
}

function merge(leftArr, rightArr) {
    var sortedArr = [];
      while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
          sortedArr.push(leftArr[0]);
          leftArr = leftArr.slice(1)
       } else {
          sortedArr.push(rightArr[0]);
          rightArr = rightArr.slice(1)
         }
       }
      while (leftArr.length)
        sortedArr.push(leftArr.shift());
      while (rightArr.length)
        sortedArr.push(rightArr.shift());
      return sortedArr;
}
function mergesort(arr) {
    if (arr.length < 2) {
    return arr; }
    else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
    }
}

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}
function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

class SelectionSort{
	constructor(array2Sort){
		this.array2Sort = array2Sort
	}
	swap(array, index1, index2){
	    var value1 = array[index1]
	    array[index1] = array[index2]
	    array[index2] = value1
	}
	sort(){
		var array = this.array2Sort
		console.log(array)
		var array_size = this.array2Sort.length
	    for (var index = 0; index < array_size; index ++){
	        this.swap(
	        	array, 
	        	array.indexOf(
	        		Math.min(...array.slice(index, array_size))
        		),
        		index
	        )
    	}
    	this.array2Sort = array
        return this.array2Sort
	}
}


// factorial and fibinacci
calcFibBtn.onclick = function(){
    consoleOutput.innerHTML = ""
    var fibInput = document.getElementById("fibInput")
    var fib_of_num = fib(fibInput.value)
    consoleOutput.innerHTML = "<p>" + "Fib of "+ fibInput.value +":" + " " + fib_of_num + "</p>"
}

calcFactBtn.onclick = function(){
    consoleOutput.innerHTML = ""
    var factInput = document.getElementById("factInput")
    var fact_of_num = factorial(factInput.value)
    consoleOutput.innerHTML = "<p>" + "Factorial of "+ factInput.value +":" + " " + fact_of_num + "</p>"
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