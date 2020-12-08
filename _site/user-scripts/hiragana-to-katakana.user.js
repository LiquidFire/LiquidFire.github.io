// ==UserScript==
// @name        Hiragana to Katakana
// @description Convert all hiragana on every site to the equivalent katakana
// @author      Dobromir Stefanov
// @namespace   https://lfire.net/user-scripts
// @downloadURL https://lfire.net/user-scripts/hiragana-to-katakana.user.js
// @updateURL   https://lfire.net/user-scripts/hiragana-to-katakana.user.meta.js
// @include     *
// @version     1.2
// ==/UserScript==
var hiraganaToKatakanaMap = {
  "べ": "ベ",
  "ゑ": "ヱ",
  "ぃ": "ィ",
  "ば": "バ",
  "わ": "ワ",
  "を": "ヲ",
  "ぼ": "ボ",
  "び": "ビ",
  "ゐ": "ヰ",
  "ぶ": "ブ",
  "る": "ル",
  "れ": "レ",
  "ら": "ラ",
  "ろ": "ロ",
  "り": "リ",
  "ぐ": "グ",
  "ち": "チ",
  "げ": "ゲ",
  "が": "ガ",
  "ご": "ゴ",
  "ぎ": "ギ",
  "ゅ": "ュ",
  "ょ": "ョ",
  "ゃ": "ャ",
  "ふ": "フ",
  "ひ": "ヒ",
  "ほ": "ホ",
  "は": "ハ",
  "へ": "ヘ",
  "ぷ": "プ",
  "ぱ": "パ",
  "ぺ": "ペ",
  "ぴ": "ピ",
  "ぽ": "ポ",
  "ゕ": "ヵ",
  "じ": "ジ",
  "ゖ": "ヶ",
  "ぜ": "ゼ",
  "ざ": "ザ",
  "お": "オ",
  "ず": "ズ",
  "め": "メ",
  "ま": "マ",
  "も": "モ",
  "み": "ミ",
  "む": "ム",
  "っ": "ッ",
  "に": "ニ",
  "の": "ノ",
  "な": "ナ",
  "ね": "ネ",
  "ぬ": "ヌ",
  "ん": "ン",
  "か": "カ",
  "け": "ケ",
  "き": "キ",
  "こ": "コ",
  "す": "ス",
  "し": "シ",
  "そ": "ソ",
  "く": "ク",
  "さ": "サ",
  "せ": "セ",
  "ど": "ド",
  "よ": "ヨ",
  "ぢ": "ヂ",
  "や": "ヤ",
  "で": "デ",
  "だ": "ダ",
  "づ": "ヅ",
  "ゆ": "ユ",
  "ぁ": "ァ",
  "ぇ": "ェ",
  "つ": "ツ",
  "ぉ": "ォ",
  "と": "ト",
  "ぅ": "ゥ",
  "て": "テ",
  "た": "タ",
  "あ": "ア",
  "え": "エ",
  "い": "イ",
  "う": "ウ",
  "ゔ": "ヴ",
  "ゎ": "ヮ",
  "ぞ": "ゾ",
};
function hiraganaToKatakana(text) {
  return text.replace(/./gm, function(c) {
    return hiraganaToKatakanaMap[c] || c;
  });
}

function replaceText(node) {
  var ignoreNodes = ["script", "style"];
  for (var child = node.firstChild; child; child = child.nextSibling) {
    switch (child.nodeType) {
      case 1:
        if (ignoreNodes.indexOf(child.tagName.toLowerCase()) < 0) {
          replaceText(child);
        }
        break;
      case 3:
        var text = child.data;
        child.data = hiraganaToKatakana(text);
        break;
    }
  }
}

function doConversion() {
  replaceText(document.body);
}

doConversion();
