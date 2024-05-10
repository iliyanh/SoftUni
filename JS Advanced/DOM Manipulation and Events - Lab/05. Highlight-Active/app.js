function focused() {
    Array.from(document.querySelectorAll("input")).forEach((i) => {
        i.addEventListener("focus", focused);
        i.addEventListener("blur", blured);
    })

    function focused(ev){
        ev.target.parentElement.className = "focused";
    }

    function blured(ev){
        ev.target.parentElement.className = "";
    }
}