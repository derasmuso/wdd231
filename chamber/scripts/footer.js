const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy ${today.getFullYear()} Orem Chamber of Commerce`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;