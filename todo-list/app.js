// You can add an onclick event with onclick, but then you can only add one event handler
// If you use addEventListener(), you can add multiple event handlers
// HTML Dom events: https://www.w3schools.com/jsref/dom_obj_event.asp

// document.querySelector("button").onclick = function () {
// 	console.log("click")
// }

// Recommended:
document.querySelector("button").addEventListener("click", addTodo)

// Add event listener for key "enter"
document.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
			addTodo()
	}
})

// Add an event listener on all li items
document.querySelectorAll("li").forEach(function (todo) {
	// console.log(todo)
	todo.addEventListener("click", toggleTodo)
})

function toggleTodo(event) {
	// (1) Function gets triggered
    console.log("toggle")

	// (2) This is the clicked element
	console.log(event.target)

  // (3) Mark the todo as done
	// We can toggle the classList to achieve that
	// event.target.classList.toggle("checked")

  // (4) Remove the todo from the list
	// event.target.remove()

	// We can also use removeChild()
	// We select the list and call removeChild() on it
	// const list = document.querySelector("ul")
	// list.removeChild(event.target)
    
  // We can also use the parentNode to call removeChild()
	const parent = event.target.parentNode
	console.log(parent)
	parent.removeChild(event.target)
}

function addTodo() {
    // Function gets triggered
	console.log("add todo")

	// Get the value from the input field
	const input = document.querySelector("input")
	const value = input.value

	// create a new list item
	const todo = document.createElement("li")
	console.log(todo)

	// Add the value between the tags of the list item
	todo.innerText = value

    // (2) What is now missing? Aaaah... we cannot toggle that new element
	// Also add the event listener to toggle new element
	todo.addEventListener("click", toggleTodo)

	// Add the list item to the ul using appendChild()
	const list = document.querySelector("ul")
	list.appendChild(todo)

	// clear the input field
	input.value = ""
}
