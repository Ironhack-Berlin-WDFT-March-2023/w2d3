// DOM: Document object model
console.log(document)


// Read from DOM - retrieving elements
// accessing nodes in the document

// getElementsByTagName(): Returns an HTML collection 
// Can be treated like an array but it is not an array
let divs = document.getElementsByTagName("div")
console.log(divs)
// You can treat the collection like an array
console.log(divs[0])

// getElementById(): Returns the first matching element
let container = document.getElementById("container")
console.log(container)

// getElementsByClassName()
let boxes = document.getElementsByClassName("box")
console.log(boxes)

// querySelector()
// You can use the same selectors as in CSS
// Returns the first node that matches the specified selector
let div = document.querySelector("div")
console.log(div)

// querySelectorAll()
// You can use the same selectors as in CSS
// This returns a node list
// You can also use forEach() on the list
divs = document.querySelectorAll("div")
console.log(divs)

// You can for example also select by classname
boxes = document.querySelectorAll(".box")
console.log(boxes)

// The above methods can be called on all DOM nodes, not only on the document itself
let section = document.querySelector("section")
let h1 = section.querySelector("h1")
console.log(h1)


// Use innerText or innerHTML to retrieve or change content between the tags
h1 = document.querySelector("h1").innerText
console.log(h1)

// Use innerText to change the text in the h1
document.querySelector("h1").innerText = "The second heading"

// Use innerHTML to replace the h1 in the section with an h4
let h4 = "<h4>The third heading</h4>"
document.querySelector("section").innerHTML = h4

// Uppercase all list items in ul
let listItems = document.querySelectorAll("li")
// console.log(lis)
listItems.forEach(function (li) {
	// console.log(li.innerText)
	li.innerText = li.innerText.toUpperCase()
})

// Create a new list and replace all list items
let newList = "<li>new li 1</li><li>new li 2</li>"
document.querySelector("ul").innerHTML = newList


// You can also change the style of an element
// Change the heading color to red
h4 = document.querySelector("h4")
h4.style.backgroundColor = "red"
h4.style.color = "rgb(0,255,0)"


// Add or remove classes
boxes = document.getElementsByClassName("box")
boxes[0].classList.add("blue-background")
console.log(boxes[0].classList)
// Now I can select the element by the new classname
document.querySelector(".blue-background").style.backgroundColor = "blue"
boxes[0].classList.remove("blue-background")


// You can also retrieve the attributes of an element
let src = document.querySelector("img").getAttribute("src")
console.log(src)

// And you can add attributes to an element
document.querySelector("h4").setAttribute("id", "heading")
