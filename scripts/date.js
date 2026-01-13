const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy ${today.getFullYear()} | Daniel Rasmuson | Utah, USA`;

document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

