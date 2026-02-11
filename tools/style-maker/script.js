function changeStyle(var id, var sty, var value) {
    document.getElementById(id).style[sty] = value;
}

function check(var id) {
    return document.getElementById(id).checked;
}

function preview() {
    alert("test")
    if(check("Bold")) {
        changeStyle("previewt", "font-weight", "bold");
    }
    if(check("Italics")) {
        changeStyle("previewt", "font-style", "italic");
    }
    if(check("Underline")) {
        changeStyle("previewt", "text-decoration", "underline");
    }
    /*
    if(check("Strikethrough")) {
        changeStyle("previewt", "font-style", "italic");
    }
    */
}
