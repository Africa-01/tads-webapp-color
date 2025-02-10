document.addEventListener("DOMContentLoaded", function() {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        const r = parseInt(redRange.value);
        const g = parseInt(greenRange.value);
        const b = parseInt(blueRange.value);

        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();

        // Sincronizar inputs numéricos con los sliders
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    // Eventos para los sliders
    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    // Eventos para los inputs numéricos
    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);
});
