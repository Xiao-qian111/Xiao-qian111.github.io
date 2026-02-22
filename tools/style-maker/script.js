/* Var */
var ctype = "none";

/* Functions */
/* Literally */
function changeStyle(id, sty, value) {
    document.getElementById(id).style[sty] = value;
}

/* I think you know what this do */
function check(id) {
    return document.getElementById(id).checked;
}

/* Function of preview */
function preview() {
    /* Reset style */
    changeStyle("previewt", "font-weight", "normal");
    changeStyle("previewt", "font-style", "normal");
    changeStyle("previewt", "text-decoration", "none");
    changeStyle("previewt", "font-size", "100%");
    /* Change style */
    if(check("Bold")) changeStyle("previewt", "font-weight", "bold");
    if(check("Italics")) changeStyle("previewt", "font-style", "italic");
    /* Lines */
    let lines = [];
    if(check("Overline")) lines.push("overline");
    if(check("Underline")) lines.push("underline");
    if(check("Strikethrough")) lines.push("line-through");
    if(lines.length > 0) {
        changeStyle("previewt", "text-decoration", lines.join(" "));
    }
    /* Change color */
    var color = "";
    switch(ctype) {
        case "rgbc":
            const r = document.getElementById('rgb-r').value;
            const g = document.getElementById('rgb-g').value;
            const b = document.getElementById('rgb-b').value;
            color = `rgb(${r}, ${g}, ${b})`;
            break;
        case "hexc":
            if(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color)) {
                color = document.getElementById('hex-code').value;
            }
            else {
                alert(`${color} isn't a right HEX code`);
            }
            break;
        case "pick":
            color = document.getElementById('color-picker').value;
            break;
        case "html":
            color = document.getElementById('color').value;
            break;
    }
    changeStyle("previewt", "color", color);
    /* Change size */
    if(check("csize")) changeStyle("previewt", "font-size", document.getElementById('rgb-r').value);
}

/* Change color type */
function colorType() {
    ctype = document.getElementById('c-type').value;
    switch(ctype) {
        /* No color */
        case "none":
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
