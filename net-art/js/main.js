//html elements
const eyes = document.querySelector(".main-img")
const changeMainImg = document.querySelector("#change-main-img")
const backToBed = document.querySelector(".sleep")
const wakeUp = document.querySelector("#wakeUp")
const bed = document.querySelector("#bedup")
const rUSure = document.querySelector("#areUSure")


//change main image
changeMainImg.addEventListener("click", () => {
    eyes.src = "images/eyes-open.png";
    eyes.alt = "opened eyes";
    bed.removeAttribute("hidden");
})


wakeUp.addEventListener("click", () => {
    rUSure.removeAttribute("hidden");
})

backToBed.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
})

