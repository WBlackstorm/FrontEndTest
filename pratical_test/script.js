//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
    button = dropArea.querySelector("button"),
    input = dropArea.querySelector("input"),
    progress = document.querySelector("progressBar");

let file; //this is a global variable and we'll use it inside multiple functions
dropArea.onclick = () => {
    input.click(); //if user click on the button then the input also clicked
}
input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
});
//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
});
//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
});
function showFile() {
    let fileType = file.type; //getting selected file type
    let validExtensions = ["application/vnd.ms-excel", "text/csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/json", "text/tab-separated-values",]; //adding some valid image extensions in array
    if (validExtensions.includes(fileType)) { //if user selected file is an image file
        let fileReader = new FileReader(); //creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result;
        }
        fileReader.readAsDataURL(file);
        showProgress();
    } else {
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
    }
}

function showProgress() {
    let bar = document.getElementById("progressBar");
    bar.style.display = "block";
    let interval = setInterval(function () {
        if (bar.value == 100) {
            bar.style.display = "none";
            clearInterval(interval);
        }
        bar.value += 10
    }, 500);

}
