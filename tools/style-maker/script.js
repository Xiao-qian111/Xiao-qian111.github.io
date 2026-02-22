/* Var */
let ctype = "none";

/* Functions */
/* Literally */
function changeStyle(id, sty, value) {
    if(id) getEl(id).style[sty] = value;
}

/* I think you know what this do */
function check(id) {
    let el = getEl(id).checked;
    return el ? el.checked : false;
}

/* document.getElementById */
function getEl(id) {
    return document.getElementById(id);
}

/* Function of preview */
function preview() {
    /* Change text */
    getEl("preview").innerHTML = getEl("previewt").value;
    /* Reset style */
    changeStyle("previewt", "font-weight", "normal");
    changeStyle("previewt", "font-style", "normal");
    changeStyle("previewt", "text-decoration", "none");
    changeStyle("previewt", "font-size", "100%");
    /* Change style */
    if(check("Bold")) changeStyle("previewt", "font-weight", "bold");
    if(check("Italics")) changeStyle("previewt", "font-style", "italic");
    /* Lines */
    var lines = [];
    if(check("Overline")) lines.push("overline");
    if(check("Underline")) lines.push("underline");
    if(check("Strikethrough")) lines.push("line-through");
    if(lines.length > 0) {
        changeStyle("previewt", "text-decoration", lines.join(" "));
    }
    /* Change color */
    var color = "";
    switch(ctype) {
        case "none":
            color = "black";
        case "rgbc":
            const r = getEl("rgb-r")?.value || 0;
            const g = getEl("rgb-g")?.value || 0;
            const b = getEl("rgb-b")?.value || 0;
            color = `rgb(${r}, ${g}, ${b})`;
            break;
        case "hexc":
            color = getEl("hex-code")?.value || "#000000";
            if(!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color)) {
                alert(`${color} isn't a right HEX code`);
                color = "black"
            break;
        case "pick":
            color = getEl("color-picker")?.value || "#000000";
            break;
        case "html":
            color = getEl("color")?.value || "#000000";
            break;
    }
    changeStyle("previewt", "color", color);
    /* Change size */
    if(check("csize")) changeStyle("previewt", "font-size", getEl("size").value)?.value || "100%";
}

/* Change color type */
function colorType() {
    ctype = getEl("c-type").value;
    let container = getEl("color-controls-container");
    switch(ctype) {
        /* No color */
        case "none":
            container.innerHTML = ``;
            break;
        /* RGB color */
        case "rgbc":
            container.innerHTML = `
                R: <input type="number" id="rgb-r" min="0" max="255" value="0">
                G: <input type="number" id="rgb-g" min="0" max="255" value="0">
                B: <input type="number" id="rgb-b" min="0" max="255" value="0">
            `;
            break;
        /* HEX color */
        case "hexc":
            container.innerHTML = `
                HEX: <input type="text" id="hex-code" value="#000000" placeholder="#XXXXXX">
            `;
            break;
        /* Color picker */
        case "pick":
            container.innerHTML = `
                Color: <input type="color" id="color-picker" value="#000000">
            `;
            break;
        /* HTML basic */
        case "html":
            container.innerHTML = `
                <select id="color">
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="gold">Gold</option>
                    <option value="yellow">Yellow</option>
                    <option value="lime">Lime</option>
                    <option value="greenyellow">Green Yellow</option>
                    <option value="green">Green</option>
                    <option value="olive">Olive</option>
                    <option value="cyan">Cyan</option>
                    <option value="turquoise">Turquoise</option>
                    <option value="teal">Teal</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="brown">Brown</option>
                    <option value="tan">Tan</option>
                    <option value="white">White</option>
                    <option value="whitesmoke">White Smoke</option>
                    <option value="silver">Silver</option>
                    <option value="gray">Gray</option>
                    <option value="black">Black</option>
                </select>
            `;
            break;
    }
}

/* This function is just for test */
function test() {
    window.alert("test");
    // preview()
}
