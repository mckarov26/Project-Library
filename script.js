const openButton = document.querySelector("#open-btn");
const closeButton = document.querySelector("#close-btn");
const myDialog = document.querySelector("#myDialog")

const author = document.querySelector("#author");
const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");



const displayBooks = document.querySelector("#display-ctn");


openButton.addEventListener("click", () => {
    myDialog.showModal();
})

closeButton.addEventListener("click", () => {
    myDialog.close();
})