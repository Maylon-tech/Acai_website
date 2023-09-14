const containerCards = document.querySelectorAll('.cards-container')
const card = document.querySelectorAll('.card')
const buttontabs = document.querySelectorAll('.buttons-tabs')

const filterProducts = (e) => {
    document.querySelector(".active").classList.remove("active")

    e.target.classList.add("active")

    containerCards.forEach(card => {
        card.classList.add("hide")

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    })
    console.log(card)
}

buttontabs.forEach(button => button.addEventListener("click", filterProducts))

// LOGIN Modal

const loginModal = document.querySelector(".login-modal")
const userBtn = document.getElementById("userBtn")

function showLogin() {
    loginModal.classList.toggle('show')
}

userBtn.addEventListener("click", showLogin)



// Cart Menu

const cartSideMenu = document.getElementById("cartBtn")
const cartMenu = document.querySelector(".cart-menu")
function showCart() {
    cartMenu.classList.toggle('showCart')
}

cartSideMenu.addEventListener('click', () => {
    showCart()
})


// Search Modal 

const searchModal = document.querySelector(".search-modal")
const searchBtn = document.getElementById("searchBtn")

function showSearchModal() {
    searchModal.classList.toggle("showSearch")
}

searchBtn.addEventListener('click', showSearchModal)

