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

function setLang(lang) {
    var temp = trans[lang];
    var keys = Objects.keys(temp);
    for(var i = 0; i < keys.length; i++) {
        document.getElementById(keys[i]).innerHTML = temp[keys[i]];
    }
}
setLang("en");
