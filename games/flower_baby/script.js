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
		"meet_a": "You meet a(n) ",
		"meet_b": " mob, attack it?\nSuccessful rate: ",
		"kill": "You killed it!",
		"fail": "You failed to kill it!",
		"getxp_a": "You get ",
		"getxp_b": " xp!"
		"lvup_a": "Level up! You reached to level ",
		"lvup_b": ", congratulations!"
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
		"meet_a": "你遇到了一只",
		"meet_b": "生物，要攻击吗？\n成功率：",
		"kill": "你打死它了！",
		"fail": "你未能将它打死！",
		"getxp_a": "你获得了",
		"getxp_b": "点经验值！"
		"lvup_a": "你升级了！现在你",
		"lvup_b": "级，恭喜！"
    }, 
    "hyw": {
        "flow": "这是汝的<s>58</s>花**：",
		"nocoin": "你的吹得二小钢镚都似了，赶紧去肘击似虫子巴。"
		"c": "绿帽",
		"un": "Info",
		"r": "小瑞特摄",
		"e": "紫色的",
		"l": "洪",
		"m": "上海申花",
		"ul": "你的裤衩",
		"s": "苏破",
		"t": "giorg1",
		"f": "下界要塞",
		"p": "火星",
		"i": "环球影城",
		"inf": "无尽贪婪",
		"meet_a": "你撞大运了一只",
		"meet_b": "死虫子，要肘击吗？\n颗秒率：",
		"kill": "你把它肘击了！",
		"fail": "你肘击失败了，受着！",
		"getxp_a": "你批了",
		"getxp_b": "个西(X)瓜(G)！"
		"lvup_a": "你肘击过度了！现在你有",
		"lvup_b": "个遗传基因了，超市你！"
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

function levelup() {
	level ++;
	alert(trans[lang]["lvup_a"] + level.toString() + trans[lang]["lvup_b"]);
	mhealth += 10;
	msatiety += 10;
	menergy += 10;
}

function hunt() {
	var suc = [["100%", 4], ["75%", 3], ["50%", 2], ["25%", 1]]
	var minrar = Math.min(Math.floor(level / 10), 9);
	var rar = rarity[Math.floor(Math.random() * (minrar + 3 - minrar) + minrar)];
	if(confirm(trans[lang]["meet_a"] + rarity[rar] + trans[lang]["meet_b"] + suc[rar - minrar][0])) {
		var luck = Math.floor(Math.random() * (4 - 1) + 1);
		if(suc[rar - minrar][1] >= luck) {
			var xpp = Math.pow(2, rar);
			alert(trans[lang]["kill"]);
			alert(trans[lang]["getxp_a"] + xpp.toString() + trans[lang]["getxp_b"]);
			if(xp + xpp >= level * 10) {
				xp = xp + xpp - (level * 10);
				levelup();
			}
		}
		else {
			health -= Math.floor(Math.random() * (Math.pow(2, rar) - (Math.pow(2, rar) - 10)) + (Math.pow(2, rar) - 10));
			alert(trans[lang]["fail"]);
		}
		energy -= Math.pow(2, rar);
	}
}
