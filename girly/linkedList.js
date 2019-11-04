my_singly_linked_list = new SinglyLinkedList(null, null, 0)

var consoleOutput = document.querySelector("#consoleOutput")
var inputIndex
var dropdpwnElements = document.getElementsByClassName("dropdown-content")

setPossiblePossitions()

function setPossiblePossitions() {
    if (my_singly_linked_list.sllArray.length == 0) {
        for (var i = 0; i < dropdpwnElements.length; i++) {
            dropdpwnElements[i].innerHTML = "<a href='#' id='index" + i + "'onclick=insertFunc(" + i + ")>First</a>"
        }
        console.log(dropdpwnElements)
    } else {
        for (var k = 0; k < dropdpwnElements.length; k++) {
            dropdpwnElements[k].innerHTML = ""
            for (var j = 0; j < my_singly_linked_list.sllArray.length; j++) {
                if (j == 0) {
                    dropdpwnElements[k].innerHTML += "<a href='#' id='index" + j + "'onclick=insertFunc(" + j + ")>First</a>"
                } if (j == 0 && (dropdpwnElements.length == 1)) {
                    dropdpwnElements[k].innerHTML += "<a href='#' id='index" + j + "'onclick=insertFunc(" + j + ")>First</a>" +
                        "<a href='#' id='index-1 'onclick=insertFunc(-1)>Last</a>"
                } else if (j == (my_singly_linked_list.sllArray.length - 1)) {
                    dropdpwnElements[k].innerHTML += "<a href='#' id='index" + j + "'onclick=insertFunc(" + j + ")> index: " + j
                        + "</a>" + "<a href='#' id='index-1' onclick=insertFunc(-1)>Last</a>"
                } else {
                    dropdpwnElements[k].innerHTML += "<a href='#' id='index" + j + "'onclick=insertFunc(" + j + ")>index: " + j + "</a>"
                }
            }
        }
        console.log(dropdpwnElements)
    }
}

function insertFunc(index) {
    console.log("insert: ", index)
    // console.log("index1 id:", document.getElementById("index1").id)
    console.log("inputIndex: ", document.getElementsByClassName("llInput")[inputIndex])
    
    // Input index for adjacent input field is set when button is clicked
    var inputValue = document.getElementsByClassName("llInput")[inputIndex].value

    if (index == 0) {
        my_singly_linked_list.add_first(inputValue)
        console.log("Inserted")
    } else if (index == -1) {
        my_singly_linked_list.add_last(inputValue)
    } else {
        my_singly_linked_list.insertAt(index, inputValue)
    }
    console.log(my_singly_linked_list.sllArray)
    setPossiblePossitions()

    printllistToConsole()
    hideDropDown()
}

function hideDropDown() {
    for (var i = 0; i < dropdpwnElements.length; i++) {
        dropdpwnElements[i].style = "display: none"
        // dropdpwnElements[i].classList.toggle("show");
    }
}

function toggleDisplayDropdown(id) {
    var displayStyle = document.getElementById(id).style.display
    if (displayStyle != "block") {
        document.getElementById(id).style = "display: block";
    } else {
        document.getElementById(id).style = "display: none";
    }
}

// DROPDOWN BUTTONS LISTENERS
function nameDropdown() {
    toggleDisplayDropdown("nameDropdown")
    inputIndex = 0
}

function collegeDropdown() {
    toggleDisplayDropdown("collegeDropdown")
    inputIndex = 1
}

function progDropdown() {
    inputIndex = 2
    toggleDisplayDropdown("progDropdown")
}

function regDropdown() {
    toggleDisplayDropdown("regDropdown")
    inputIndex = 3
}

function stdNoDropdown() {
    toggleDisplayDropdown("stdNoDropdown")
    inputIndex = 4
}

function cgpaDropdown() {
    toggleDisplayDropdown("cgpaDropdown")
    inputIndex = 5
}

function removeAtDropdown() {
    console.log("Called");

    var removeDropdpwnElements = document.getElementById("removeAtDropdown")
    removeDropdpwnElements.innerHTML = ""
    console.log(removeDropdpwnElements.innerHTML);

    for (var j = 0; j < my_singly_linked_list.sllArray.length; j++) {
        if (j == 0) {
            removeDropdpwnElements.innerHTML += "<a href='#' id='index" + j + "'onclick=removeAt(" + j + ")>First</a>"
        } else if (j == (my_singly_linked_list.sllArray.length - 1)) {
            removeDropdpwnElements.innerHTML += "<a href='#' id='index" + j + "'onclick=removeAt(" + j + ")>Last</a>"
        } else {
            removeDropdpwnElements.innerHTML += "<a href='#' id='index" + j + "'onclick=removeAt(" + j + ")>index: " + j + "</a>"
        }
    }
    document.getElementById("removeAtDropdown").classList.toggle("show");
}


function removeAt(index) {
    console.log("remove index: ", index)
    my_singly_linked_list.removeAt(index)
    console.log(my_singly_linked_list.sllArray)
    setPossiblePossitions()
    removeAtDropdown()
    printllistToConsole()
}

function Node(element, next_) {
    this.element = element
    this.next_ = next_

    this.get_element = function () {
        return this.element
    }

    this.get_next = function () {
        return next_
    }

    this.set_element = function (new_element) {
        this.element = new_element
    }

    this.set_next = function (new_next) {
        this.next_ = new_next
    }
}


function printllistToConsole() {
    consoleOutput.innerHTML =
        "<p>" + "current Linked List:" + " [ " + my_singly_linked_list.array() + " ]</p>"
}


function Node(element, prev_, next_){
    this.element = element
    this.next_ = next_
    this.prev_ = prev_
    
    this.get_element = function(){
        return this.element
    }
    
    this.get_next = function(){
        return next_
    }

    this.get_prev = function(){
        return prev_
    }
    
    this.set_element = function(new_element){
        this.element = new_element
    }
        
    this.set_next = function(new_next){
        this.next_ = new_next
    }

    this.set_prev = function(new_prev){
        this.prev_ = new_prev
    }
}


// SINGLY LINKED LIST
function SinglyLinkedList(head, tail, size) {
    this.head = head
    this.tail = tail
    this.size = size
    this.sllArray = []
    this.size_ = function () {
        return this.size
    }
    this.is_empty = function () {
        return this.size == 0
    }
    this.first = function () {
        if (this.size == 0) {
            return null
        }
        return this.head.get_element()
    }
    this.last = function () {
        if (this.size_ == 0) {
            return null
        }
        return this.tail.get_element()
    }
    this.add_first = function (element) {
        var currentHead = this.head
        var newHead = new Node(element, null, currentHead)
        if (currentHead != null) {
            console.log("Current head: ", currentHead.element)
            currentHead.set_prev(newHead)
        }
        this.head = newHead
        if (this.is_empty()) {
            this.tail = newHead
        }
        this.size = this.size + 1
        this.linkedList()
    }
    this.add_last = function (element) {
        var currentTail = this.tail
        var newTail = new Node(element, currentTail, null)
        currentTail.set_next(newTail)
        if (this.is_empty()) {
            this.head = newTail
        } else {
            this.tail.set_next(newTail)
            this.tail = newTail
        }
        this.size = this.size + 1
        this.linkedList()
        console.log("In add_first()", this.array())
    }
    this.remove_first = function () {
        if (this.is_empty()) {
            return null
        }
        head_element = this.head.get_element()
        this.head = this.head.get_next()
        this.size = this.size - 1
        if (this.is_empty()) {
            this.tail = null
        }
        this.linkedList()
        console.log("In add_first()", this.array())
        return head_element
    }
    this.insertAt = function (index, element) {
        console.log(index, element);
        
        this.linkedList()
        var new_node = new Node(element, null, null)
        //   get node at that index
        var nodeAtIndex = this.sllArray[index]
        console.log("node at index:", nodeAtIndex)
        if (nodeAtIndex.prev_ != null) {
            nodeAtIndex.prev_.set_next(new_node)
        }else{
            this.head = new_node
        }
        
        new_node.set_prev(nodeAtIndex.prev_)
        nodeAtIndex.set_prev(new_node)
        new_node.set_next(nodeAtIndex)

        this.size += 1
        this.linkedList()
    }
    this.removeAt = function (index) {
        this.linkedList()
        //   get node at that index
        console.log("array: ", this.array());
        
        var prevNode = this.sllArray[index].prev_
        var nextNode = this.sllArray[index].next_

        console.log(prevNode, nextNode)

        if (prevNode == null && nextNode != null) {
            nextNode.set_prev(null)
            this.head = nextNode
        } else if (prevNode != null && nextNode == null) {
            prevNode.set_next(null)
            this.tail = prevNode
        } else if (prevNode != null && nextNode != null) {
            prevNode.set_next(nextNode)
            nextNode.set_prev(prevNode)
        }

        this.sllArray[index] = null

        this.size -= 1
        this.linkedList()
    }
    this.linkedList = function () {
        this.sllArray = []
        var node
        for (var i = 0; i < this.size; i++) {
            if (i == 0) {
                node = this.head
            } else if (i == (this.size - 1)) {
                node = this.tail
            } else {
                node = node.next_
            }
            // console.log("next node:", node.next_ ? node.next_.element : "null")
            this.sllArray.push(node)
        }
        console.log()
    }
    this.array = function () {
        var elementArray = []
        console.log("length:", this.sllArray.length)
        for (var i = 0; i < this.sllArray.length; i++) {
            if (this.sllArray[i] != null){
                elementArray.push(this.sllArray[i].element)
            }
        }
        console.log("Element array: ", elementArray)
        return elementArray
    }
}