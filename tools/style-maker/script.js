/* By name */
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
    /* Change style */
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
/* This function is just for test */
function test() {
    window.alert("test");
    // preview()
}
