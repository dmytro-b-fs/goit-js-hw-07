const ourForm = document.querySelector(".login-form")


const ourFormCallback = (event) => {
    event.preventDefault();
    if (event.target.elements.email.value.trim()==="" || event.target.elements.password.value.trim()===""){
        window.alert('All form fields must be filled in')
        return;
    }
    let res = {}
    res[event.target.elements.email.name]=event.target.email.value.trim();
    res[event.target.elements.password.name]=event.target.password.value.trim();
    console.log(res)
    ourForm.reset()
}


ourForm.addEventListener("submit", event => ourFormCallback(event))
