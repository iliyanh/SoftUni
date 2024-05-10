function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const result = document.getElementById("result");

    gradient.addEventListener("mousemove", mouseMove)

    function mouseMove(event){
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100)+ "%";
    }
}