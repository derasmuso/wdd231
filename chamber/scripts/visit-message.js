const message = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDiff = currentVisit - Number(lastVisit);

    const daysBetween = Math.floor(
        timeDiff / (1000 * 60 * 60 * 24)
    );

    if (daysBetween < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${daysBetween} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit);