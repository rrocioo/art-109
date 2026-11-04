//html elements
const eyes = document.querySelector(".main-img")
const changeMainImg = document.querySelector("#change-main-img")
const imSure = document.querySelector("#imSure")
const imSure2 = document.querySelector("#imSure2")
const imSure3 = document.querySelector("#imSure3")
const imSure4 = document.querySelector("#imSure4")
const imSure5 = document.querySelector("#imSure5")
const imSure6 = document.querySelector("#imSure6")
const backToBed = document.querySelector("#sleep")
const backToBed2 = document.querySelector("#sleep2")
const backToBed3 = document.querySelector("#sleep3")
const backToBed4 = document.querySelector("#sleep4")
const backToBed5 = document.querySelector("#sleep5")
const backToBed6 = document.querySelector("#sleep6")
const backToBed7 = document.querySelector("#sleep7")
const backToBed8 = document.querySelector("#sleep8")
const wakeUp = document.querySelector("#wakeUp")
const bed = document.querySelector("#bedup")
const rUSure = document.querySelector("#areUSure")
const definitelyUp = document.querySelector("#definitely")
const butYourBed = document.querySelector("#butYourBed")
const itsSoWarm = document.querySelector("#itsSoWarm")
const justGoBack = document.querySelector("#justGoBack")
const toBed = document.querySelector("#toBed")
const andDontLeave = document.querySelector("#andDontLeave")


//change main image
changeMainImg.addEventListener("click", () => {
    eyes.src = "images/eyes-open.png";
    eyes.alt = "opened eyes";
    bed.removeAttribute("hidden");
})


wakeUp.addEventListener("click", () => {
    rUSure.removeAttribute("hidden");
})

imSure.addEventListener("click",() =>{
    definitelyUp.removeAttribute("hidden");
})

imSure2.addEventListener("click",() =>{
    butYourBed.removeAttribute("hidden");
})

imSure3.addEventListener("click",() =>{
    itsSoWarm.removeAttribute("hidden");
})

imSure4.addEventListener("click",() =>{
    justGoBack.removeAttribute("hidden");
})

imSure5.addEventListener("click",() =>{
    toBed.removeAttribute("hidden");
})

imSure6.addEventListener("click",() =>{
    andDontLeave.removeAttribute("hidden");
})


backToBed.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed2.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed3.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed4.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed5.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed6.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed7.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})

backToBed8.addEventListener("click", () => {
    eyes.src = "images/eyes-closed.png";
    eyes.alt = "closed eyes";
    bed.setAttribute("hidden", "true");
    rUSure.setAttribute("hidden", "true");
    definitelyUp.setAttribute("hidden", "true");
    butYourBed.setAttribute("hidden", "true");
    itsSoWarm.setAttribute("hidden", "true");
    justGoBack.setAttribute("hidden", "true");
    toBed.setAttribute("hidden", "true");
    andDontLeave.setAttribute("hidden", "true");
})






