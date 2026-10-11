//select html elements
const changeThemeButton = document.querySelector("#changeThemeButton")

// toggle dark mode

//create function for changing button text

function changeButtonText(){
    if(document.body.classList.contains("light")){
        changeThemeButton.textContent = "Darken"
    } else{
        changeThemeButton.textContent = "Lighten"
    }

}


changeThemeButton.addEventListener("click", () => {
    //add/remove dark class to body
    document.body.classList.toggle("light")
    changeButtonText();
})
