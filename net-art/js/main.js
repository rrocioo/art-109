//html elements
const eyes = document.querySelector(".main-img")
const changeMainImg = document.querySelector("#change-main-img")
const bed = document.querySelector("#bedup")
const backToBed = document.querySelector("#backToBed")
const wakeUp = document.querySelector("#wakeUp")
const allPop = document.querySelectorAll(".pop-up")
const rUSure = document.querySelector("#areUSure")

//change main image
changeMainImg.addEventListener("click", () => {
    eyes.src = "images/eyes-open.png";
    eyes.alt = "opened eyes";
    bed.removeAttribute("hidden");
})

backToBed.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    allPop.setAttribute("hidden");
})

wakeUp.addEventListener("click", () => {
    rUSure.removeAttribute("hidden");
})




