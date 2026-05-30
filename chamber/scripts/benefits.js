
const openButtons = document.querySelectorAll(".button-open");
const closeButtons = document.querySelectorAll(".button-close");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dialog = button.parentElement.querySelector("dialog");
        dialog.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const dialog = button.closest("dialog");
        dialog.close();
    });
});