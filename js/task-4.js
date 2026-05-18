const ourForm = document.querySelector(".login-form")


const ourFormCallback = (event) => {
    event.preventDefault();
    if (event.target.elements.email.value==="" || event.target.elements.password.value===""){
        window.alert('All form fields must be filled in')
        return;
    }
    let res = {}
    res[event.target.elements[0].name]=event.target.elements[0].value.trim();
    res[event.target.elements[1].name]=event.target.elements[1].value.trim();
    console.log(res)
    ourForm.reset()
}


ourForm.addEventListener("submit", event => ourFormCallback(event))
