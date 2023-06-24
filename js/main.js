const containerCards = document.querySelectorAll('.cards-container')
const card = document.querySelectorAll('.card')
const buttontabs = document.querySelectorAll('.buttons-tabs .btn-tab')

const filterProducts = (e) => {
    document.querySelector(".active").classList.remove("active")

    e.target.classList.add("active")


    console.log(card)
    containerCards.forEach(card => {
        card.classList.add("hide")
    })


    if(card.dataset.name === e.target.dataset.name) {
        card.classList.remove("hide")
    }

}

buttontabs.forEach(button => button.addEventListener("click", filterProducts))