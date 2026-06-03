import { places } from "../data/places.mjs"

const show = document.querySelector("#places-card")

function displayItems(places) {
    places.forEach(place => {

        const card = document.createElement("div")

        const figure = document.createElement("figure")

        const image = document.createElement("img")
        image.src = `images/${place.image_link}`
        image.alt = place.name


        const title = document.createElement("h2")
        title.innerText = place.name

        const address = document.createElement("address")
        address.innerText = place.address

        const description = document.createElement("p")
        description.innerText = place.description

        const button = document.createElement("button")
        button.innerText = "Learn More"

        figure.appendChild(image)

        card.appendChild(figure)
        card.appendChild(title)
        card.appendChild(address)
        card.appendChild(description)
        card.appendChild(button)

        show.appendChild(card)

    })
}

displayItems(places)