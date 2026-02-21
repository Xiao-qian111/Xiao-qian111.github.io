/* By name */
function changeStyle(id, sty, value) {
    document.getElementById(id).style[sty] = value;
}
/* I think you know what this do */
function check(id) {
    return document.getElementById(id).checked;
}
/* Change color */
function colorType() {
    const select = document.getElementById('c-type');
    const container = document.getElementById('color-controls-container');
    const val = select.value;
    switch(val) {
        /* RGB color */
        case "rgbc":
            container.innerHTML = '
                R: <input type="number" id="rgb-r" min="0" max="255" value="0">
                G: <input type="number" id="rgb-g" min="0" max="255" value="0">
                B: <input type="number" id="rgb-b" min="0" max="255" value="0">
            ';
            break;
        /* HEX color */
        case "hexc":
            container.innerHTML = '
                HEX: <input type="text" id="hex-code" value="#000000" placeholder="#XXXXXX">
            ';
            break;
        /* Color picker */
        case "pick":
            container.innerHTML = '
                Color: <input type="color" id="color-picker" value="#000000">
            ';
            break;
        /* Color picker */
        case "html":
            container.innerHTML = '
                <select id="c-type">
                    <option value="Red">Red</option>
                    <option value="Orange">Orange</option>
                    <option value="Gold">Gold</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Lime">Lime</option>
                    <option value="GreenYellow">Green Yellow</option>
                    <option value="Green">Green</option>
                    <option value="Olive">Olive</option>
                    <option value="Cyan">Cyan</option>
                    <option value="Turquoise">Turquoise</option>
                    <option value="Teal">Teal</option>
                    <option value="Blue">Blue</option>
                    <option value="Purple">Purple</option>
                    <option value="Pink">Pink</option>
                    <option value="Brown">Brown</option>
                    <option value="Tan">Tan</option>
                    <option value="White">White</option>
                    <option value="WhiteSmoke">White Smoke</option>
                    <option value="Silver">Silver</option>
                    <option value="Gray">Gray</option>
                    <option value="Black">Black</option>
                </select>
            ';
            break;
    }
}
/* Function of preview */
function preview() {
    /* Reset style */
    changeStyle("previewt", "font-weight", "normal");
    changeStyle("previewt", "font-style", "normal");
    changeStyle("previewt", "text-decoration", "none");
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
}
/* This function is just for test */
function test() {
    window.alert("test");
    // preview()
}
