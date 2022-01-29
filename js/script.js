const toggleButton = document.querySelector('#toggleButton')
const navBarLinks = document.querySelector(".navbar-links-container")

// Navbar Toggle for mobile screen
toggleButton.addEventListener('click',()=>{
    navBarLinks.classList.toggle('active')
})