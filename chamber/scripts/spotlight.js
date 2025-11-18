const cards = document.querySelector("#spotlight");
const file = "data/members.json"

async function getMemberData(file) {
    const response = await fetch(file);
    const data = await response.json();
    displayMembersCards(data.members)
}

getMemberData(file);

const displayMembersCards = (members) => {
    let filtered = members.filter(member =>
        member.membership === "Gold" || member.membership === "Silver"
    );
    filtered.sort(() => Math.random() - 0.5);

    let randomMembers = filtered.slice(0, 3);

    randomMembers.forEach((member) => {
        let card = document.createElement("section");
        let companyLogo = document.createElement("img");
        let companyName = document.createElement("h3");
        let companyAddress = document.createElement("p");
        let companyPhone = document.createElement("p");
        let companyWebsite = document.createElement("a");
        let companyMembership = document.createElement("p");
        let companyIndustry = document.createElement("p");


        companyLogo.setAttribute("src", member.logo);
        companyLogo.setAttribute("alt", `logo of ${member.name}`);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "200");
        companyLogo.setAttribute("height", "auto");


        companyName.textContent = `${member.name}`;
        companyAddress.textContent = `${member.address}`;
        companyPhone.textContent = `${member.phone}`;

        companyWebsite.setAttribute("href", member.website);
        companyWebsite.textContent = `${member.website}`;

        companyMembership.textContent = `${member.membership}`;
        companyIndustry.innerHTML = `<strong>${member.industry}</strong>`;

        card.appendChild(companyLogo);
        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyWebsite);
        card.appendChild(companyMembership);
        card.appendChild(companyIndustry);

        cards.appendChild(card);
    });
};