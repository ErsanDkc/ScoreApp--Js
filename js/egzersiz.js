let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", formhandler)
let alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="warning" ) => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`


function formhandler(event) {
    event.preventDefault()
    let USER_NAME = document.querySelector("#username")
    let SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value) {
        additem(USER_NAME.value, SCORE.value )
        localStorage.setItem("NOTLAR", JSON.stringify([USER_NAME.value, SCORE.value]))
        USER_NAME.value = ""
        SCORE.value = ""
        
    } else {
        alertDOM.innerHTML = alertFunction("Değerli Öğretmenimiz,", 
            "Hatalı veya eksik bilgi girdiniz, Lütfen bilgileri tam ve doğru giriniz",
            "danger")
    }
    
    
}
let userListDOM = document.querySelector("#inputbilgi")
const additem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} 
    <span class="badge badge-primary badge-pill">${score}</span>
    
    `
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    userListDOM.append(liDOM)
    

}

let button = document.querySelector("#buttons")
localStorage.setItem("NOTLAR", JSON.stringify(button))