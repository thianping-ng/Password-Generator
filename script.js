const sliderValue = document.querySelector("#inputSlider"),
inputValue = document.querySelector("#sliderValue"),
genBtn = document.querySelector("#genBtn"),
passValue = document.querySelector("#passValue"),
lowerCase = document.getElementById("lowercase"),
upperCase = document.getElementById("uppercase"),
numbers = document.getElementById("number"),
symbols = document.getElementById("symbol"),
copyIcon = document.querySelector(".copy-icon");


inputValue.textContent = sliderValue.value;
sliderValue.addEventListener("input", ()=>{
    inputValue.textContent = sliderValue.value;
})

function generateButton (){
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let number = "0123456789";
    let symbol = "~!@#$%^&*";

    let allChars = "";
    let genPassword = "";

    allChars += lowerCase.checked?lowercase:"";
    allChars += upperCase.checked?uppercase:"";
    allChars += numbers.checked?number:"";
    allChars += symbols.checked?symbol:"";

    console.log(allChars);

    if(allChars == "" | allChars.length == 0)return null;

    for (let i = 1; i < sliderValue.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
    }
    return genPassword
}

genBtn.addEventListener("click", ()=>{
    passValue.value = generateButton();
})

copyIcon.addEventListener("click", ()=>{

    if(passValue.value != "" | passValue.value > 0){
        navigator.clipboard.writeText(passValue.value);

        copyIcon.classList.remove("fa-copy");
        copyIcon.classList.add("fa-check");
    
        setTimeout(()=>{
            copyIcon.classList.remove("fa-check");
            copyIcon.classList.add("fa-copy");
        },3000)
    }
})

