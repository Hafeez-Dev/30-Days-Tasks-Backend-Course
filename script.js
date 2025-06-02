// slectors and changing html content
/*

let h1 = document.querySelector("h1");
h1.innerHTML = "Changed HTML Content";

let p = document.querySelector("p");
p.innerHTML = "paragraph changed by innerHTML property, <br> The difference between innerHTML and innerText is that innerHTML can be used to change the HTML content of the element, while innerText can only be used to change the text content of the element.";

console.log(p);


// changing css styles
p.style.color = "black";
p.style.backgroundColor = "orange";
p.style.fontSize = "16px";
p.style.fontWeight = "bold";
p.style.fontFamily = "Arial, sans-serif";


// event listeners
let button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("button clicked");
})

*/

// small project of DOM
let box = document.querySelector(".box");
let expand = document.querySelector(".expand");
let shrink = document.querySelector(".shrink");

expand.addEventListener("click", function () {
    box.style.scale = "1";
});

shrink.addEventListener("click", function () {
    box.style.scale = "0.8";
});