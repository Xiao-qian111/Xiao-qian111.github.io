// languages
var trans = {
    "en": {
        "flow": "This is your <s>ugly</s> flower baby:"
    }, 
    "zh-hans": {
        "flow": "这是你的<s>丑恶的</s>花宝宝："
    }, 
    "hyw": {
        "flow": "这是汝的<s>58</s>花**："
    }
}

function setLang(l) {
    var wow = trans[l];
	var key = Object.keys(wow);
	for (var i=0;i<key.length;i++){
		var temp = wow[key[i]];
		var t = key[i];
		document.getElementById(t).innerHTML = temp;
	}
}
setLang("en");
