const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy ${today.getFullYear()} Discover Utah County`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;