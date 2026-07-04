alert("test");
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
    var key = Objects.keys(temp);
    for(var i = 0; i < key.length; i++) {
        document.getElementById(key[i]).innerHTML = temp[key[i]];
    }
    if(lang == "hyw") {
        alert("汝母的，为什么要**这个案件（细节错别字）")
    }
}
setLang("en");
