// languages
var trans = {
    "en": {
        "flow": "This is your <s>ugly</s> flower baby:",
		"nocoin": "Your coin isn't enough, try to go hunting.",
		"c": "common",
		"un": "unusual",
		"r": "rare",
		"e": "epic",
		"l": "legendary",
		"m": "mythic",
		"ul": "ultra",
		"s": "super",
		"t": "eternal",
		"f": "flame",
		"p": "sparkle",
		"i": "universe",
		"inf": "infinite",
		"meet_a": "You meet a ",
		"meet_b": " mob, attack it?\nSuccessful rate: "
    }, 
    "zh-hans": {
        "flow": "这是你的<s>丑恶的</s>花宝宝：",
		"nocoin": "你的金币不够了，去打猎吧。"
		"c": "普通",
		"un": "罕见",
		"r": "稀有",
		"e": "史诗",
		"l": "传奇",
		"m": "神话",
		"ul": "究极",
		"s": "超级",
		"t": "永恒",
		"f": "烈焰",
		"p": "星火",
		"i": "寰宇",
		"inf": "无尽",
    }, 
    "hyw": {
        "flow": "这是汝的<s>58</s>花**：",
		"nocoin": "你的吹得二小钢镚都似了，赶紧去肘击似虫子巴。"
	"c": "common",
		"un": "unusual",
		"r": "rare",
		"e": "epic",
		"l": "legendary",
		"m": "mythic",
		"ul": "ultra",
		"s": "super",
		"t": "eternal",
		"f": "flame",
		"p": "sparkle",
		"i": "universe",
		"inf": "infinite",
    }
}

var lang = "en";
function setLang(l) {
	lang = l;
    var wow = trans[l];
	var key = Object.keys(wow);
	for (var i=0;i<key.length;i++){
		var temp = wow[key[i]];
		var t = key[i];
		document.getElementById(t).innerHTML = temp;
	}
}
setLang("en");

// do something first
var coin = 10;
var health = 100;
var mhealth = 100;
var satiety = 100;
var msatiety = 100;
var energy = 100;
var menergy = 100;
var level = 1;
var xp = 0;
var rarity = ["c", "un", "r", "e", "l", "m", "ul", "s", "t", "f", "p", "i", "inf"];

// interactions
function feed() {
	if(coin >= 5) {
		coin -= 5;
		satiety = Math.min(satiety + 10, msatiety);
	}
	else {
		alert(trans[lang]["nocoin"]);
	}
}

function hunt() {
	var minrar = Math.min(Math.floor(level / 10), 8);
	rar = rarity[Math.floor(Math.random() * (minrar + 3 - minrar) + minrar)];
	confirm()
}
