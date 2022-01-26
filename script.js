const toggleButton = document.querySelector('#toggleButton')
const navBarLinks = document.querySelector(".navbar-links-container")


toggleButton.addEventListener('click',()=>{
    console.log(navBarLinks)
    navBarLinks.classList.toggle('active')
})