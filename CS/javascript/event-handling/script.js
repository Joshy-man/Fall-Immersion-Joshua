// Find the button by it's ID and use the addEventListener()
// method to make the button listen for button clicks
document.getElementById("myButton").addEventListener("click", myBtn);
let count = 0;
let countEl = document.getElementById("myCount"); // Make sure this ID matches your HTML

function myBtn() {
    count = count + 1;
    countEl.innerText = count;

}
