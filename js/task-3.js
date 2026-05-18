const ourInput = document.querySelector("#name-input")
const ourOutput = document.querySelector("#name-output")

const ourInputCallback = ()=>{
    if(ourInput.value.trim() === ""){
        ourOutput.textContent = 'Anonymous';
    }
    else ourOutput.textContent = ourInput.value.trim();
}

ourInput.addEventListener("input", ourInputCallback)