function toggle() {

    let MORE = "More";
    let LESS = "Less";

    let button = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");


    button.textContent = button.textContent === MORE ? LESS : MORE;

    text.style.display =
        text.style.display === "none" ||
            text.style.display === ""
            ? "block"
            : "none";
}