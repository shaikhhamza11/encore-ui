const toggleButton = document.querySelector('#toggleButton')
const navBarLinks = document.querySelector(".navbar-links-container")

// Navbar Toggle for mobile screen
toggleButton.addEventListener('click',()=>{
    navBarLinks.classList.toggle('active')
})


// modal

const showModal = document.querySelector("#show-modal");
const modalConfirm = document.querySelector("#modal-confirm");
const modalClose = document.querySelector("#modal-close");
const modalToggle = document.querySelector("#modal-toggle")

showModal.addEventListener("click", function(){
    modalToggle.classList.toggle("active")
})

modalConfirm.addEventListener("click", function(){
    modalToggle.classList.toggle("active");
})

modalClose.addEventListener("click", function () {
    modalToggle.classList.toggle("active");
});