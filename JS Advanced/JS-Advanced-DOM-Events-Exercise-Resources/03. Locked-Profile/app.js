function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach((button) => 
        button.addEventListener("click", onClick)
    );

    function onClick(event) {
        const DISPLAY_BLOCK = "block"
        const SHOW_MORE = "Show more"
        const parent = event.target.parentElement;
        const unlocked = parent.querySelector('input[value="unlock"]');

        if (unlocked.checked) {
            const hiddenDiv = parent.querySelector("div");
            hiddenDiv.style.display === DISPLAY_BLOCK
                ? (hiddenDiv.style.display = "none")
                : (hiddenDiv.style.display = DISPLAY_BLOCK);


            event.target.textContent === SHOW_MORE
                ? (event.target.textContent = "Hide it")
                : (event.target.textContent = SHOW_MORE);

        }
    }

}