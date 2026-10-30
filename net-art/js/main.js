//html elements
const eyes = document.querySelector(".main-img")
const changeMainImg = document.querySelector("#change-main-img")

//change main image
changeMainImg.addEventListener("click", () => {
    eyes.src = "open eyes";
    eyes.alt = "opened eyes";
})