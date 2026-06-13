const show = document.querySelector("#activity-card")
const file = "data/activities.json"

async function getActivityData(file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        displayItems(data.activities);
    }
    catch (error) {
        console.error("Error fetching activity data:", error);

        show.innerHTML = `<p>The activities could not be loaded.</p>`;

    }


    function displayItems(activities) {
        activities.forEach(activity => {

            const card = document.createElement("div")

            const image = document.createElement("img")
            image.src = `images/${activity.image}`;
            image.alt = activity.name;
            image.width = 300;
            image.height = 200;
            image.fetchPriority = "high";

            const name = document.createElement("h2")
            name.innerText = activity.name

            const cost = document.createElement("p")
            cost.innerText = activity.cost

            const address = document.createElement("address")
            address.innerText = activity.address

            const description = document.createElement("p")
            description.innerText = activity.description




            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(cost)
            card.appendChild(address)
            card.appendChild(description)

            show.appendChild(card)

        });
    }
}
getActivityData(file);