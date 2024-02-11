// constants for query selector
const studentId = document.querySelector("#myStudentId");
const customNumber = document.querySelector("#customNumber");
const customColor = document.querySelector(".custColor");
const randomColor = document.querySelector(".randColor");
const selectImage = document.querySelector("#imageSelect");
const image = document.querySelector("#images");
// function to change bg color from user input and add student id
function changeCustomColor(){
    let theValue = customNumber.value;
    if (theValue < 0 || theValue > 100){
        document.body.style.backgroundColor = "red";
    } else {
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
}

// function to change bg color from random no.
function changeRandomColor() {

}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {

}

// event listeners for on click event of buttons and select
customColor.addEventListener("click", changeCustomColor);

// event listeners for on change event of select