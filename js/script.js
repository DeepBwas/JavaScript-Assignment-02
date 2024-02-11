// Constants for query selector
const studentId = document.querySelector("#myStudentId");
const customColor = document.querySelector(".custColor");
const randomColor = document.querySelector(".randColor");
const resetAll = document.querySelector(".resetAll");
const selectImage = document.querySelector("#imageSelect");
const image = document.querySelector("#images");
var customNumber = document.querySelector("#customNumber");

// Hide Initial Student ID if Dummy
if (studentId.textContent === "Dummy") {
    studentId.style.opacity = 0;
}else{
    studentId.style.opacity = 1;
}

// function to change bg color from user input and add student id
function changeCustomColor(){
    studentId.textContent = "200554124";
    studentId.style.opacity = 1;
    let theValue = customNumber.value;
    if (theValue === '') {
        theValue = 101; // a value that will trigger the default case
    } else if (theValue < 0 || theValue > 100){
        document.body.style.backgroundColor = "red";
        return; // exit the function early
    }
    switch (true) {
        case (theValue >= 0 && theValue <= 20):
            document.body.style.backgroundColor = "green";
            break;
        case (theValue > 20 && theValue <= 40):
            document.body.style.backgroundColor = "blue";
            break;
        case (theValue > 40 && theValue <= 60):
            document.body.style.backgroundColor = "orange";
            break;
        case (theValue > 60 && theValue <= 80):
            document.body.style.backgroundColor = "purple";
            break;
        case (theValue > 80 && theValue <= 100):
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            document.body.style.backgroundColor = "white";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    let randomValue = Math.floor(Math.random() * 100);
    customNumber.textContent = randomValue;
    customNumber.value = randomValue; // assigns the random number to customNumber
    changeCustomColor(); // calls the function to change bg color
}

// function to reset all
function resetAllFunction() {
    studentId.textContent = "Dummy";
    studentId.style.opacity = 0;
    customNumber.value = '';
    document.body.style.backgroundColor = "white";
}
// function to generate options for select list
document.addEventListener('DOMContentLoaded', addList);
function addList() {
    // Array of image URLs
    let imageUrls = ['./img/ts-img-1.png', './img/ts-img-2.png', './img/ts-img-3.png', './img/ts-img-4.png', './img/ts-img-5.png'];

    // Select the select element where you want to add the options
    let selectElement = document.querySelector('#imageSelect');

    // Check if options already exist, if so, return to prevent adding more options
    if (selectElement.options.length > 0) {
        return;
    }

    // Loop through the array of image URLs
    for (let i = 0; i < imageUrls.length; i++) {
        // Create a new option element
        let option = document.createElement('option');

        // Set the value and text of the option element to the current image URL
        option.value = imageUrls[i];
        option.text = 'Image ' + (i + 1);

        // Add the option element to the select element
        selectElement.add(option);
    }
}

// function to change image
function changeImage() {

}

// event listeners for on click event of buttons and select
customColor.addEventListener("click", changeCustomColor);
randomColor.addEventListener("click", changeRandomColor);
resetAll.addEventListener("click", resetAllFunction);
// event listeners for on change event of select