const hiraganaCharacters = [
  { question: "あ", options: ["A", "I", "U", "E"], answer: "A" },
  { question: "い", options: ["I", "E", "O", "U"], answer: "I" },
  { question: "う", options: ["U", "E", "I", "O"], answer: "U" },
  { question: "え", options: ["E", "O", "A", "I"], answer: "E" },
  { question: "お", options: ["O", "U", "I", "A"], answer: "O" },
  { question: "か", options: ["KA", "KI", "KU", "KE"], answer: "KA" },
  { question: "き", options: ["KI", "KE", "KO", "KU"], answer: "KI" },
  { question: "く", options: ["KU", "KO", "KE", "KI"], answer: "KU" },
  { question: "け", options: ["KE", "KU", "KI", "KO"], answer: "KE" },
  { question: "こ", options: ["KO", "KE", "KI", "KU"], answer: "KO" },
  { question: "さ", options: ["SA", "SHI", "SU", "SE"], answer: "SA" },
  { question: "し", options: ["SHI", "SU", "SE", "SA"], answer: "SHI" },
  { question: "す", options: ["SU", "SE", "SA", "SHI"], answer: "SU" },
  { question: "せ", options: ["SE", "SA", "SHI", "SU"], answer: "SE" },
  { question: "そ", options: ["SO", "SE", "SU", "SA"], answer: "SO" },
  { question: "た", options: ["TA", "CHI", "TSU", "TE"], answer: "TA" },
  { question: "ち", options: ["CHI", "TSU", "TE", "TA"], answer: "CHI" },
  { question: "つ", options: ["TSU", "TE", "TA", "CHI"], answer: "TSU" },
  { question: "て", options: ["TE", "TA", "CHI", "TSU"], answer: "TE" },
  { question: "と", options: ["TO", "TE", "TSU", "TA"], answer: "TO" },
  { question: "な", options: ["NA", "NI", "NU", "NE"], answer: "NA" },
  { question: "に", options: ["NI", "NU", "NE", "NA"], answer: "NI" },
  { question: "ぬ", options: ["NU", "NE", "NA", "NI"], answer: "NU" },
  { question: "ね", options: ["NE", "NA", "NI", "NU"], answer: "NE" },
  { question: "の", options: ["NO", "NE", "NU", "NA"], answer: "NO" },
  { question: "は", options: ["HA", "HI", "FU", "HE"], answer: "HA" },
  { question: "ひ", options: ["HI", "FU", "HE", "HA"], answer: "HI" },
  { question: "ふ", options: ["FU", "HE", "HA", "HI"], answer: "FU" },
  { question: "へ", options: ["HE", "HA", "HI", "FU"], answer: "HE" },
  { question: "ほ", options: ["HO", "HE", "FU", "HA"], answer: "HO" },
  { question: "ま", options: ["MA", "MI", "MU", "ME"], answer: "MA" },
  { question: "み", options: ["MI", "MU", "ME", "MA"], answer: "MI" },
  { question: "む", options: ["MU", "ME", "MA", "MI"], answer: "MU" },
  { question: "め", options: ["ME", "MA", "MI", "MU"], answer: "ME" },
  { question: "も", options: ["MO", "ME", "MU", "MA"], answer: "MO" },
  { question: "や", options: ["YA", "YU", "YO", "E"], answer: "YA" },
  { question: "ゆ", options: ["YU", "YO", "E", "YA"], answer: "YU" },
  { question: "よ", options: ["YO", "E", "YA", "YU"], answer: "YO" },
  { question: "ら", options: ["RA", "RI", "RU", "RE"], answer: "RA" },
  { question: "り", options: ["RI", "RU", "RE", "RA"], answer: "RI" },
  { question: "る", options: ["RU", "RE", "RA", "RI"], answer: "RU" },
  { question: "れ", options: ["RE", "RA", "RI", "RU"], answer: "RE" },
  { question: "ろ", options: ["RO", "RE", "RU", "RA"], answer: "RO" },
  { question: "わ", options: ["WA", "WO", "N", "RA"], answer: "WA" },
  { question: "を", options: ["WO", "N", "O", "WA"], answer: "WO" },
  { question: "ん", options: ["N", "M", "V", "B"], answer: "N" },
  // Dakuten Characters
  { question: "が", options: ["GA", "GI", "GU", "GE"], answer: "GA" },
  { question: "ぎ", options: ["GI", "GU", "GE", "GA"], answer: "GI" },
  { question: "ぐ", options: ["GU", "GE", "GA", "GI"], answer: "GU" },
  { question: "げ", options: ["GE", "GA", "GI", "GU"], answer: "GE" },
  { question: "ご", options: ["GO", "GE", "GU", "GA"], answer: "GO" },
  { question: "ざ", options: ["ZA", "JI", "ZU", "ZE"], answer: "ZA" },
  { question: "じ", options: ["JI", "ZU", "ZE", "ZA"], answer: "JI" },
  { question: "ず", options: ["ZU", "ZE", "ZA", "JI"], answer: "ZU" },
  { question: "ぜ", options: ["ZE", "ZA", "JI", "ZU"], answer: "ZE" },
  { question: "ぞ", options: ["ZO", "ZE", "ZU", "ZA"], answer: "ZO" },
  { question: "だ", options: ["DA", "JI", "DU", "DE"], answer: "DA" },
  { question: "ぢ", options: ["JI", "DU", "DE", "DA"], answer: "JI" },
  { question: "づ", options: ["ZU", "ZE", "ZA", "ZI"], answer: "ZU" },
  { question: "で", options: ["DE", "DA", "JI", "DU"], answer: "DE" },
  { question: "ど", options: ["DO", "DE", "DA", "DU"], answer: "DO" },
  // Han-Dakuten Characters
  { question: "ぱ", options: ["PA", "PI", "PU", "PE"], answer: "PA" },
  { question: "ぴ", options: ["PI", "PU", "PE", "PA"], answer: "PI" },
  { question: "ぷ", options: ["PU", "PE", "PA", "PI"], answer: "PU" },
  { question: "ぺ", options: ["PE", "PA", "PI", "PU"], answer: "PE" },
  { question: "ぽ", options: ["PO", "PE", "PA", "PI"], answer: "PO" },
  // Dakuten Combinations
  { question: "ぎゃ", options: ["GYA", "GYU", "GYO", "GE"], answer: "GYA" },
  { question: "ぎゅ", options: ["GYU", "GYO", "GE", "GYA"], answer: "GYU" },
  { question: "ぎょ", options: ["GYO", "GE", "GYA", "GYU"], answer: "GYO" },
  { question: "じゃ", options: ["JYA", "JU", "JO", "JE"], answer: "JYA" },
  { question: "じゅ", options: ["JYU", "JO", "JE", "JA"], answer: "JYU" },
  { question: "じょ", options: ["JYO", "JE", "JA", "JU"], answer: "JYO" },
  { question: "びゃ", options: ["BYA", "BYU", "BYO", "BE"], answer: "BYA" },
  { question: "びゅ", options: ["BYU", "BYO", "BE", "BYA"], answer: "BYU" },
  { question: "びょ", options: ["BYO", "BE", "BYA", "BYU"], answer: "BYO" },
  { question: "ぴゃ", options: ["PYA", "PYU", "PYO", "PE"], answer: "PYA" },
  { question: "ぴゅ", options: ["PYU", "PYO", "PE", "PYA"], answer: "PYU" },
  { question: "ぴょ", options: ["PYO", "PE", "PYA", "PYU"], answer: "PYO" },
  // Han-Dakuten Combinations
  { question: "きゃ", options: ["KYA", "KYU", "KYO", "KE"], answer: "KYA" },
  { question: "きゅ", options: ["KYU", "KYO", "KE", "KYA"], answer: "KYU" },
  { question: "きょ", options: ["KYO", "KE", "KYA", "KYU"], answer: "KYO" },
  { question: "しゃ", options: ["SHA", "SHU", "SHO", "SE"], answer: "SHA" },
  { question: "しゅ", options: ["SHU", "SHO", "SE", "SHA"], answer: "SHU" },
  { question: "しょ", options: ["SHO", "SE", "SHA", "SHU"], answer: "SHO" },
  { question: "ちゃ", options: ["CHA", "CHU", "CHO", "CHE"], answer: "CHA" },
  { question: "ちゅ", options: ["CHU", "CHO", "CHE", "CHA"], answer: "CHU" },
  { question: "ちょ", options: ["CHO", "CHE", "CHA", "CHU"], answer: "CHO" },
  { question: "にゃ", options: ["NYA", "NYU", "NYO", "NE"], answer: "NYA" },
  { question: "にゅ", options: ["NYU", "NYO", "NE", "NYA"], answer: "NYU" },
  { question: "にょ", options: ["NYO", "NE", "NYA", "NYU"], answer: "NYO" }
];

const katakanaCharacters = [
  { question: "ア", options: ["A", "I", "U", "E"], answer: "A" },
  { question: "イ", options: ["I", "E", "O", "U"], answer: "I" },
  { question: "ウ", options: ["U", "E", "I", "O"], answer: "U" },
  { question: "エ", options: ["E", "O", "A", "I"], answer: "E" },
  { question: "オ", options: ["O", "U", "I", "A"], answer: "O" },
  { question: "カ", options: ["KA", "KI", "KU", "KE"], answer: "KA" },
  { question: "キ", options: ["KI", "KE", "KO", "KU"], answer: "KI" },
  { question: "ク", options: ["KU", "KO", "KE", "KI"], answer: "KU" },
  { question: "ケ", options: ["KE", "KU", "KI", "KO"], answer: "KE" },
  { question: "コ", options: ["KO", "KE", "KI", "KU"], answer: "KO" },
  { question: "サ", options: ["SA", "SHI", "SU", "SE"], answer: "SA" },
  { question: "シ", options: ["SHI", "TSU", "SE", "SA"], answer: "SHI" },
  { question: "ス", options: ["SU", "SE", "SA", "SHI"], answer: "SU" },
  { question: "セ", options: ["SE", "SA", "SHI", "SU"], answer: "SE" },
  { question: "ソ", options: ["SO", "N", "SU", "SA"], answer: "SO" },
  { question: "タ", options: ["TA", "CHI", "TSU", "TE"], answer: "TA" },
  { question: "チ", options: ["CHI", "TSU", "TE", "TA"], answer: "CHI" },
  { question: "ツ", options: ["TSU", "TE", "TA", "SHI"], answer: "TSU" },
  { question: "テ", options: ["TE", "TA", "CHI", "TSU"], answer: "TE" },
  { question: "ト", options: ["TO", "TE", "TSU", "TA"], answer: "TO" },
  { question: "ナ", options: ["NA", "NI", "NU", "NE"], answer: "NA" },
  { question: "ニ", options: ["NI", "NU", "NE", "NA"], answer: "NI" },
  { question: "ヌ", options: ["NU", "NE", "NA", "NI"], answer: "NU" },
  { question: "ネ", options: ["NE", "NA", "NI", "NU"], answer: "NE" },
  { question: "ノ", options: ["NO", "NE", "NU", "NA"], answer: "NO" },
  { question: "ハ", options: ["HA", "HI", "FU", "HE"], answer: "HA" },
  { question: "ヒ", options: ["HI", "FU", "HE", "HA"], answer: "HI" },
  { question: "フ", options: ["FU", "HE", "HA", "HI"], answer: "FU" },
  { question: "ヘ", options: ["HE", "HA", "HI", "FU"], answer: "HE" },
  { question: "ホ", options: ["HO", "HE", "FU", "HA"], answer: "HO" },
  { question: "マ", options: ["MA", "MI", "MU", "ME"], answer: "MA" },
  { question: "ミ", options: ["MI", "MU", "ME", "MA"], answer: "MI" },
  { question: "ム", options: ["MU", "ME", "MA", "MI"], answer: "MU" },
  { question: "メ", options: ["ME", "MA", "MI", "MU"], answer: "ME" },
  { question: "モ", options: ["MO", "ME", "MU", "MA"], answer: "MO" },
  { question: "ヤ", options: ["YA", "YU", "YO", "E"], answer: "YA" },
  { question: "ユ", options: ["YU", "YO", "E", "YA"], answer: "YU" },
  { question: "ヨ", options: ["YO", "E", "YA", "YU"], answer: "YO" },
  { question: "ラ", options: ["RA", "RI", "RU", "RE"], answer: "RA" },
  { question: "リ", options: ["RI", "RU", "RE", "RA"], answer: "RI" },
  { question: "ル", options: ["RU", "RE", "RA", "RI"], answer: "RU" },
  { question: "レ", options: ["RE", "RA", "RI", "RU"], answer: "RE" },
  { question: "ロ", options: ["RO", "RE", "RU", "RA"], answer: "RO" },
  { question: "ワ", options: ["WA", "WO", "N", "RA"], answer: "WA" },
  { question: "ヲ", options: ["WO", "N", "RA", "WA"], answer: "WO" },
  { question: "ン", options: ["N", "M", "R", "SO"], answer: "N" },
  // Dakuten Characters
  { question: "ガ", options: ["GA", "GI", "GU", "GE"], answer: "GA" },
  { question: "ギ", options: ["GI", "GU", "GE", "GA"], answer: "GI" },
  { question: "グ", options: ["GU", "GE", "GA", "GI"], answer: "GU" },
  { question: "ゲ", options: ["GE", "GA", "GI", "GU"], answer: "GE" },
  { question: "ゴ", options: ["GO", "GE", "GU", "GA"], answer: "GO" },
  // Han-Dakuten Characters
  { question: "パ", options: ["PA", "PI", "PU", "PE"], answer: "PA" },
  { question: "ピ", options: ["PI", "PU", "PE", "PA"], answer: "PI" },
  { question: "プ", options: ["PU", "PE", "PA", "PI"], answer: "PU" },
  { question: "ペ", options: ["PE", "PA", "PI", "PU"], answer: "PE" },
  { question: "ポ", options: ["PO", "PE", "PA", "PI"], answer: "PO" },
  // Dakuten Combinations
  { question: "ギャ", options: ["GYA", "GYU", "GYO", "GE"], answer: "GYA" },
  { question: "ギュ", options: ["GYU", "GYO", "GE", "GYA"], answer: "GYU" },
  { question: "ギョ", options: ["GYO", "GE", "GYA", "GYU"], answer: "GYO" },
  { question: "ジャ", options: ["JYA", "JU", "JO", "JE"], answer: "JYA" },
  { question: "ジュ", options: ["JYU", "JO", "JE", "JA"], answer: "JYU" },
  { question: "ジョ", options: ["JYO", "JE", "JA", "JU"], answer: "JYO" },
  { question: "ビャ", options: ["BYA", "BYU", "BYO", "BE"], answer: "BYA" },
  { question: "ビュ", options: ["BYU", "BYO", "BE", "BYA"], answer: "BYU" },
  { question: "ビョ", options: ["BYO", "BE", "BYA", "BYU"], answer: "BYO" },
  { question: "ピャ", options: ["PYA", "PYU", "PYO", "PE"], answer: "PYA" },
  { question: "ピュ", options: ["PYU", "PYO", "PE", "PYA"], answer: "PYU" },
  { question: "ピョ", options: ["PYO", "PE", "PYA", "PYU"], answer: "PYO" },
  // Han-Dakuten Combinations
  { question: "キャ", options: ["KYA", "KYU", "KYO", "KE"], answer: "KYA" },
  { question: "キュ", options: ["KYU", "KYO", "KE", "KYA"], answer: "KYU" },
  { question: "キョ", options: ["KYO", "KE", "KYA", "KYU"], answer: "KYO" },
  { question: "シャ", options: ["SHA", "SHU", "SHO", "SE"], answer: "SHA" },
  { question: "シュ", options: ["SHU", "SHO", "SE", "SHA"], answer: "SHU" },
  { question: "ショ", options: ["SHO", "SE", "SHA", "SHU"], answer: "SHO" },
  { question: "チャ", options: ["CHA", "CHU", "CHO", "CHE"], answer: "CHA" },
  { question: "チュ", options: ["CHU", "CHO", "CHE", "CHA"], answer: "CHU" },
  { question: "チョ", options: ["CHO", "CHE", "CHA", "CHU"], answer: "CHO" },
  { question: "ニャ", options: ["NYA", "NYU", "NYO", "NE"], answer: "NYA" },
  { question: "ニュ", options: ["NYU", "NYO", "NE", "NYA"], answer: "NYU" },
  { question: "ニョ", options: ["NYO", "NE", "NYA", "NYU"], answer: "NYO" }
];

const kanjiCharacters = [
  {
    question: "一",
    options: {
      jp: ["いち", "に", "さん", "し"],
      en: ["One", "Two", "Three", "Four"] },
    answer: {
      jp: "いち",
      en: "One" }
  },
  {
    question: "二",
    options: {
      jp: ["に", "さん", "し", "ご"],
      en: ["Two", "Three", "Four", "Five"] },
    answer: {
      jp: "に",
      en: "Two" }
  },
  {
    question: "三",
    options: {
      jp: ["さん", "し", "ご", "ろく"],
      en: ["Three", "Four", "Five", "Six"] },
    answer: { 
      jp: "さん",
      en: "Three" }
  },
  {
    question: "四",
    options: {
      jp: ["し", "ご", "ろく", "しち"],
      en: ["Four", "Five", "Six", "Seven"] },
    answer: {
      jp: "し",
      en: "Four" }
  },
  {
    question: "五",
    options: {
      jp: ["ご", "ろく", "しち", "はち"],
      en: ["Five", "Six", "Seven", "Eight"] },
    answer: {
      jp: "ご",
      en: "Five" }
  },
  {
    question: "六",
    options: { jp: ["ろく", "しち", "はち", "きゅう"],
    en: ["Six", "Seven", "Eight", "Nine"] },
    answer: {
      jp: "ろく", 
    
      en: "Six" }
  },
  {
    question: "七",
    options: {
      jp: ["しち", "はち", "きゅう", "じゅう"],
      en: ["Seven", "Eight", "Nine", "Ten"] },
    answer: {
      jp: "しち",
      en: "Seven" }
  },
  {
    question: "八",
    options: {
      jp: ["はち", "きゅう", "じゅう", "ひゃく"],
      en: ["Eight", "Nine", "Ten", "Hundred"] },
    answer: {
      jp: "はち",
      en: "Eight" }
  },
  {
    question: "九",
    options: {
      jp: ["きゅう", "じゅう", "ひゃく", "せん"],
      en: ["Nine", "Ten", "Hundred", "Thousand"] },
    answer: {
      jp: "きゅう",
      en: "Nine" }
  },
  {
    question: "十",
    options: {
      jp: ["じゅう", "ひゃく", "せん", "いち"],
      en: ["Ten", "Hundred", "Thousand", "One"] },
    answer: {
      jp: "じゅう",
      en: "Ten" }
  },
  {
    question: "百",
    options: {
      jp: ["ひゃく", "せん", "いち", "じゅう"],
      en: ["Hundred", "Thousand", "One", "Ten"] },
    answer: {
      jp: "ひゃく",
      en: "Hundred" }
  },
  {
    question: "千",
    options: {
      jp: ["せん", "いち", "じゅう", "ひゃく"],
      en: ["Thousand", "One", "Ten", "Hundred"] },
    answer: {
      jp: "せん",
      en: "Thousand" }
  },
  {
    question: "万",
    options: {
      jp: ["まん", "いち", "じゅう", "ひゃく"],
      en: ["Ten Thousand", "One", "Ten", "Hundred"] },
    answer: {
      jp: "まん",
      en: "Ten Thousand" }
  },
  {
    question: "円",
    options: {
      jp: ["えん", "どる", "ゆろ", "ぱんど"],
      en: ["Yen", "Dollar", "Euro", "Pound"] },
    answer: {
      jp: "えん",
      en: "Yen" }
  },
  {
    question: "時",
    options: {
      jp: ["じ", "とき", "にち", "し"],
      en: ["Hour", "Time", "Day", "Four"] },
    answer: {
      jp: "じ",
      en: "Hour" }
  },
  {
    question: "分",
    options: {
      jp: ["ふん", "とき", "び", "げつ"],
      en: ["Minute", "Time", "Second", "Month"] },
    answer: {
      jp: "ふん",
      en: "Minute" }
  },
  {
    question: "本",
    options: {
      jp: ["ほん", "き", "いし", "たてもの"],
      en: ["Book", "Tree", "Stone", "Building"] },
    answer: {
      jp: "ほん",
      en: "Book" }
  },
  {
    question: "月",
    options: {
      jp: ["つき", "たいよう", "ひ", "とし"],
      en: ["Moon", "Sun", "Fire", "Year"] },
    answer: {
      jp: "つき",
      en: "Moon" }
  },
  {
    question: "年",
    options: {
      jp: ["とし", "つき", "ひ", "しゅう"],
      en: ["Year", "Moon", "Fire", "Week"] },
    answer: {
      jp: "とし",
      en: "Year" }
  },
  {
    question: "日",
    options: {
      jp: ["ひ", "たいよう", "つき", "しゅう"],
      en: ["Day", "Sun", "Moon", "Week"] },
    answer: {
      jp: "ひ",
      en: "Day" }
  },
  {
    question: "週",
    options: {
      jp: ["しゅう", "にち", "ひ", "とし"],
      en: ["Week", "Day", "Sun", "Year"] },
    answer: {
      jp: "しゅう",
      en: "Week" }
  },
  {
    question: "木",
    options: {
      jp: ["き", "みず", "ひ", "ほのお"],
      en: ["Tree", "Water", "Fire", "Metal"] },
    answer: {
      jp: "き",
      en: "Tree" }
  },
  {
    question: "水",
    options: {
      jp: ["みず", "き", "ほのお", "つち"],
      en: ["Water", "Tree", "Fire", "Earth"] },
    answer: {
      jp: "みず",
      en: "Water" }
  },
  {
    question: "火",
    options: {
      jp: ["ほのお", "みず", "かぜ", "つち"],
      en: ["Fire", "Water", "Wind", "Earth"] },
    answer: {
      jp: "ほのお",
      en: "Fire" }
  },
  {
    question: "土",
    options: {
      jp: ["つち", "き", "みず", "ほのお"],
      en: ["Earth", "Tree", "Water", "Fire"] },
    answer: {
      jp: "つち",
      en: "Earth" }
  },
  {
    question: "金",
    options: {
      jp: ["きん", "みず", "ほのお", "つち"],
      en: ["Gold", "Water", "Fire", "Earth"] },
    answer: {
      jp: "きん",
      en: "Gold" }
  },
  {
    question: "白",
    options: {
      jp: ["しろ", "くろ", "あか", "あお"],
      en: ["White", "Black", "Red", "Blue"] },
    answer: {
      jp: "しろ",
      en: "White" }
  },
  {
    question: "赤",
    options: {
      jp: ["あか", "あお", "みどり", "きいろ"],
      en: ["Red", "Blue", "Green", "Yellow"] },
    answer: {
      jp: "あか",
      en: "Red" }
  },
  {
    question: "青",
    options: {
      jp: ["あお", "あか", "みどり", "きいろ"],
      en: ["Blue", "Red", "Green", "Yellow"] },
    answer: {
      jp: "あお",
      en: "Blue" }
  },
  {
    question: "黒",
    options: {
      jp: ["くろ", "しろ", "あか", "あお"],
      en: ["Black", "White", "Red", "Blue"] },
    answer: {
      jp: "くろ",
      en: "Black" }
  },
  {
    question: "田",
    options: {
      jp: ["た", "かわ", "やま", "たいよう"],
      en: ["Rice Field", "River", "Mountain", "Sun"] },
    answer: {
      jp: "た",
      en: "Rice Field" }
  },
  {
    question: "山",
    options: {
      jp: ["やま", "かわ", "た", "たいよう"],
      en: ["Mountain", "River", "Rice Field", "Sun"] },
    answer: {
      jp: "やま",
      en: "Mountain" }
  },
  {
    question: "川",
    options: {
      jp: ["かわ", "やま", "た", "たいよう"],
      en: ["River", "Mountain", "Rice Field", "Sun"] },
    answer: {
      jp: "かわ",
      en: "River" }
  },
  {
    question: "夜",
    options: {
      jp: ["よる", "ひる", "あさ", "ゆう"],
      en: ["Night", "Daytime", "Morning", "Evening"] },
    answer: {
      jp: "よる",
      en: "Night" }
  },
  {
    question: "朝",
    options: {
      jp: ["あさ", "ひる", "よる", "ゆう"],
      en: ["Morning", "Daytime", "Night", "Evening"] },
    answer: {
      jp: "あさ",
      en: "Morning" }
  },
  {
    question: "昼",
    options: {
      jp: ["ひる", "あさ", "よる", "ゆう"],
      en: ["Daytime", "Morning", "Night", "Evening"] },
    answer: {
      jp: "ひる",
      en: "Daytime" }
  },
  {
    question: "夕",
    options: {
      jp: ["ゆう", "あさ", "ひる", "よる"],
      en: ["Evening", "Morning", "Daytime", "Night"] },
    answer: {
      jp: "ゆう",
      en: "Evening" }
  },
  {
    question: "男",
    options: {
      jp: ["おとこ", "おんな", "こども", "せんせい"],
      en: ["Man", "Woman", "Child", "Teacher"] },
    answer: {
      jp: "おとこ",
      en: "Man" }
  },
  {
    question: "女",
    options: {
      jp: ["おんな", "おとこ", "こども", "せんせい"],
      en: ["Woman", "Man", "Child", "Teacher"] },
    answer: {
      jp: "おんな",
      en: "Woman" }
  },
  {
    question: "子",
    options: {
      jp: ["こども", "おや", "おとな", "おじいさん"],
      en: ["Child", "Parent", "Adult", "Grandfather"] },
    answer: {
      jp: "こども",
      en: "Child" }
  },
  {
    question: "人",
    options: {
      jp: ["ひと", "き", "みず", "ほのお"],
      en: ["Person", "Tree", "Water", "Fire"] },
    answer: {
      jp: "ひと",
      en: "Person" }
  },
  {
    question: "名",
    options: {
      jp: ["な", "ひと", "き", "みず"],
      en: ["Name", "Person", "Tree", "Water"] },
    answer: {
      jp: "な",
      en: "Name" }
  },
  {
    question: "友",
    options: {
      jp: ["ともだち", "てき", "しらべもの", "ならいごと"],
      en: ["Friend", "Enemy", "Investigation", "Learning"] },
    answer: {
      jp: "ともだち",
      en: "Friend" }
  },
  {
    question: "学",
    options: {
      jp: ["がく", "おしえる", "ならう", "しっている"],
      en: ["Study", "Teach", "Learn", "Know"] },
    answer: {
      jp: "がく",
      en: "Study" }
  },
  {
    question: "校",
    options: {
      jp: ["がっこう", "しごと", "いえ", "みせ"],
      en: ["School", "Work", "Home", "Shop"] },
    answer: {
      jp: "がっこう",
      en: "School" }
  },
  {
    question: "先",
    options: {
      jp: ["せんせい", "つぎ", "さいしょ", "さいご"],
      en: ["Teacher", "Next", "First", "Last"] },
    answer: {
      jp: "せんせい",
      en: "Teacher" }
  },
  {
    question: "生",
    options: {
      jp: ["せい", "し", "うまれる", "とし"],
      en: ["Life", "Death", "Born", "Age"] },
    answer: {
      jp: "せい",
      en: "Life" }
  },
  {
    question: "行",
    options: {
      jp: ["いく", "くる", "はしる", "あるく"],
      en: ["Go", "Come", "Run", "Walk"] },
    answer: {
      jp: "いく",
      en: "Go" }
  },
  {
    question: "来",
    options: {
      jp: ["くる", "いく", "はしる", "あるく"],
      en: ["Come", "Go", "Run", "Walk"] },
    answer: {
      jp: "くる",
      en: "Come" }
  },
  {
    question: "食",
    options: {
      jp: ["たべる", "のむ", "ねる", "あそぶ"],
      en: ["Eat", "Drink", "Sleep", "Play"] },
    answer: {
      jp: "たべる",
      en: "Eat" }
  },
  {
    question: "飲",
    options: {
      jp: ["のむ", "たべる", "ねる", "あそぶ"],
      en: ["Drink", "Eat", "Sleep", "Play"] },
    answer: {
      jp: "のむ",
      en: "Drink" }
  },
  {
    question: "読",
    options: {
      jp: ["よむ", "かく", "はなす", "きく"],
      en: ["Read", "Write", "Speak", "Listen"] },
    answer: {
      jp: "よむ",
      en: "Read" }
  },
  {
    question: "書",
    options: {
      jp: ["かく", "よむ", "はなす", "きく"],
      en: ["Write", "Read", "Speak", "Listen"] },
    answer: {
      jp: "かく",
      en: "Write" }
  },
  {
    question: "話",
    options: {
      jp: ["はなす", "きく", "よむ", "かく"],
      en: ["Speak", "Listen", "Read", "Write"] },
    answer: {
      jp: "はなす",
      en: "Speak" }
  },
  {
    question: "聞",
    options: {
      jp: ["きく", "はなす", "よむ", "かく"],
      en: ["Listen", "Speak", "Read", "Write"] },
    answer: {
      jp: "きく",
      en: "Listen" }
  },
  {
    question: "見",
    options: {
      jp: ["みる", "みえる", "みせる", "よむ"],
      en: ["See", "Be Visible", "Show", "Read"] },
    answer: {
      jp: "みる",
      en: "See" }
  },
  {
    question: "知",
    options: {
      jp: ["しる", "ならう", "おしえる", "がく"],
      en: ["Know", "Learn", "Teach", "Study"] },
    answer: {
      jp: "しる",
      en: "Know" }
  },
  {
    question: "気",
    options: {
      jp: ["き", "え", "くうき", "みず"],
      en: ["Spirit", "Painting", "Air", "Water"] },
    answer: {
      jp: "き",
      en: "Spirit" }
  },
  {
    question: "天",
    options: {
      jp: ["てん", "ち", "たいよう", "つき"],
      en: ["Heaven", "Earth", "Sun", "Moon"] },
    answer: {
      jp: "てん",
      en: "Heaven" }
  },
  {
    question: "地",
    options: {
      jp: ["ち", "てん", "たいよう", "つき"],
      en: ["Earth", "Heaven", "Sun", "Moon"] },
    answer: {
      jp: "ち",
      en: "Earth" }
  },
  {
    question: "空",
    options: {
      jp: ["そら", "ち", "うみ", "やま"],
      en: ["Sky", "Earth", "Sea", "Mountain"] },
    answer: {
      jp: "そら",
      en: "Sky" }
  },
  {
    question: "海",
    options: {
      jp: ["うみ", "そら", "ち", "やま"],
      en: ["Sea", "Sky", "Earth", "Mountain"] },
    answer: {
      jp: "うみ",
      en: "Sea" }
  },
  {
    question: "風",
    options: {
      jp: ["かぜ", "あめ", "たいよう", "ゆき"],
      en: ["Wind", "Rain", "Sun", "Snow"] },
    answer: {
      jp: "かぜ",
      en: "Wind" }
  },
  {
    question: "雨",
    options: {
      jp: ["あめ", "かぜ", "たいよう", "ゆき"],
      en: ["Rain", "Wind", "Sun", "Snow"] },
    answer: {
      jp: "あめ",
      en: "Rain" }
  },
  {
    question: "雪",
    options: {
      jp: ["ゆき", "あめ", "かぜ", "たいよう"],
      en: ["Snow", "Rain", "Wind", "Sun"] },
    answer: {
      jp: "ゆき",
      en: "Snow" }
  },
  {
    question: "花",
    options: {
      jp: ["はな", "き", "くさ", "は"],
      en: ["Flower", "Tree", "Grass", "Leaf"] },
    answer: {
      jp: "はな",
      en: "Flower" }
  },
  {
    question: "木",
    options: {
      jp: ["き", "みず", "ほのお", "つち"],
      en: ["Tree", "Water", "Fire", "Earth"] },
    answer: {
      jp: "き",
      en: "Tree" }
  },
  {
    question: "草",
    options: {
      jp: ["くさ", "き", "はな", "は"],
      en: ["Grass", "Tree", "Flower", "Leaf"] },
    answer: {
      jp: "くさ",
      en: "Grass" }
  },
  {
    question: "花",
    options: {
      jp: ["はな", "き", "くさ", "は"],
      en: ["Flower", "Tree", "Grass", "Leaf"] },
    answer: {
      jp: "はな",
      en: "Flower" }
  },
  {
    question: "道",
    options: {
      jp: ["みち", "かど", "こうさてん", "じどう"],
      en: ["Path", "Corner", "Intersection", "Traffic Light"] },
    answer: {
      jp: "みち",
      en: "Path" }
  },
  {
    question: "町",
    options: {
      jp: ["まち", "し", "むら", "くに"],
      en: ["Town", "City", "Village", "Country"] },
    answer: {
      jp: "まち",
      en: "Town" }
  },
  {
    question: "市",
    options: {
      jp: ["いち", "まち", "むら", "くに"],
      en: ["City", "Town", "Village", "Country"] },
    answer: {
      jp: "いち",
      en: "City" }
  },
  {
    question: "村",
    options: {
      jp: ["むら", "まち", "いち", "くに"],
      en: ["Village", "Town", "City", "Country"] },
    answer: {
      jp: "むら",
      en: "Village" }
  },
  {
    question: "国",
    options: {
      jp: ["くに", "まち", "いち", "むら"],
      en: ["Country", "Town", "City", "Village"] },
    answer: {
      jp: "くに",
      en: "Country" }
  },
  {
    question: "会",
    options: {
      jp: ["あう", "みつける", "でる", "とどまる"],
      en: ["Meet", "Find", "Exit", "Stay"] },
    answer: {
      jp: "あう",
      en: "Meet" }
  },
  {
    question: "社",
    options: {
      jp: ["しゃ", "かい", "いえ", "みち"],
      en: ["Company", "Association", "House", "Road"] },
    answer: {
      jp: "しゃ",
      en: "Company" }
  },
  {
    question: "田",
    options: {
      jp: ["た", "かわ", "やま", "たいよう"],
      en: ["Rice Field", "River", "Mountain", "Sun"] },
    answer: {
      jp: "た",
      en: "Rice Field" }
  },
  {
    question: "家",
    options: {
      jp: ["いえ", "かい", "たてもの", "へや"],
      en: ["House", "Shop", "Building", "Room"] },
    answer: {
      jp: "いえ",
      en: "House" }
  },
  {
    question: "店",
    options: {
      jp: ["みせ", "おみせ", "いえ", "しゃ"],
      en: ["Store", "Shop", "House", "Company"] },
    answer: {
      jp: "みせ",
      en: "Store" }
  },
  {
    question: "本",
    options: {
      jp: ["ほん", "き", "かわ", "たいよう"],
      en: ["Book", "Tree", "River", "Sun"] },
    answer: {
      jp: "ほん",
      en: "Book" }
  },
  {
    question: "電",
    options: {
      jp: ["でん", "みず", "ほのお", "つち"],
      en: ["Electricity", "Water", "Fire", "Earth"] },
    answer: {
      jp: "でん",
      en: "Electricity" }
  },
  {
    question: "車",
    options: {
      jp: ["くるま", "じてんしゃ", "でんしゃ", "バス"],
      en: ["Car", "Bicycle", "Train", "Bus"] },
    answer: {
      jp: "くるま",
      en: "Car" }
  },
  {
    question: "手",
    options: {
      jp: ["て", "あし", "あたま", "あし"],
      en: ["Hand", "Foot", "Head", "Foot"] },
    answer: {
      jp: "て",
      en: "Hand" }
  },
  {
    question: "足",
    options: {
      jp: ["あし", "て", "かお", "め"],
      en: ["Foot", "Hand", "Face", "Eye"] },
    answer: {
      jp: "あし",
      en: "Foot" }
  },
  {
    question: "目",
    options: {
      jp: ["め", "みみ", "はな", "くち"],
      en: ["Eye", "Ear", "Nose", "Mouth"] },
    answer: {
      jp: "め",
      en: "Eye" }
  },
  {
    question: "耳",
    options: {
      jp: ["みみ", "め", "はな", "くち"],
      en: ["Ear", "Eye", "Nose", "Mouth"] },
    answer: {
      jp: "みみ",
      en: "Ear" }
  },
  {
    question: "鼻",
    options: {
      jp: ["はな", "め", "みみ", "くち"],
      en: ["Nose", "Eye", "Ear", "Mouth"] },
    answer: {
      jp: "はな",
      en: "Nose" }
  },
  {
    question: "口",
    options: {
      jp: ["くち", "め", "みみ", "はな"],
      en: ["Mouth", "Eye", "Ear", "Nose"] },
    answer: {
      jp: "くち",
      en: "Mouth" }
  },
  {
    question: "手",
    options: {
      jp: ["て", "あし", "あたま", "め"],
      en: ["Hand", "Foot", "Head", "Eye"] },
    answer: {
      jp: "て",
      en: "Hand" }
  },
  {
    question: "足",
    options: {
      jp: ["あし", "て", "あたま", "かお"],
      en: ["Foot", "Hand", "Head", "Face"] },
    answer: {
      jp: "あし",
      en: "Foot" }
  },
  {
    question: "頭",
    options: {
      jp: ["あたま", "て", "あし", "くち"],
      en: ["Head", "Hand", "Foot", "Mouth"] },
    answer: {
      jp: "あたま",
      en: "Head" }
  },
  {
    question: "顔",
    options: {
      jp: ["かお", "あたま", "て", "あし"],
      en: ["Face", "Head", "Hand", "Foot"] },
    answer: {
      jp: "かお",
      en: "Face" }
  },
  {
    question: "体",
    options: {
      jp: ["からだ", "あたま", "て", "あし"],
      en: ["Body", "Head", "Hand", "Foot"] },
    answer: {
      jp: "からだ",
      en: "Body" }
  },
  {
    question: "心",
    options: {
      jp: ["こころ", "たましい", "しん", "せい"],
      en: ["Heart", "Soul", "Mind", "Spirit"] },
    answer: {
      jp: "こころ",
      en: "Heart" }
  },
  {
    question: "意",
    options: {
      jp: ["いみ", "おもい", "きもち", "かんじ"],
      en: ["Meaning", "Thought", "Feeling", "Character"] },
    answer: {
      jp: "いみ",
      en: "Meaning" }
  },
  {
    question: "思",
    options: {
      jp: ["おもう", "いけん", "かんがえる", "はなす"],
      en: ["Think", "Opinion", "Consider", "Speak"] },
    answer: {
      jp: "おもう",
      en: "Think" }
  },
  {
    question: "言",
    options: {
      jp: ["いう", "はなす", "きく", "かく"],
      en: ["Say", "Speak", "Listen", "Write"] },
    answer: {
      jp: "いう",
      en: "Say" }
  },
  {
    question: "話",
    options: {
      jp: ["はなす", "いう", "きく", "かく"],
      en: ["Speak", "Say", "Listen", "Write"] },
    answer: {
      jp: "はなす",
      en: "Speak" }
  },
  {
    question: "聞",
    options: {
      jp: ["きく", "はなす", "いう", "かく"],
      en: ["Listen", "Speak", "Say", "Write"] },
    answer: {
      jp: "きく",
      en: "Listen" }
  },
  {
    question: "書",
    options: {
      jp: ["かく", "よむ", "はなす", "きく"],
      en: ["Write", "Read", "Speak", "Listen"] },
    answer: {
      jp: "かく",
      en: "Write" }
  },
  {
    question: "読",
    options: {
      jp: ["よむ", "かく", "はなす", "きく"],
      en: ["Read", "Write", "Speak", "Listen"] },
    answer: {
      jp: "よむ",
      en: "Read" }
  },
  {
    question: "出",
    options: {
      jp: ["でる", "はいる", "いく", "くる"],
      en: ["Go out", "Enter", "Go", "Come"] },
    answer: {
      jp: "でる",
      en: "Go out" }
  },
  {
    question: "入",
    options: {
      jp: ["はいる", "でる", "いく", "くる"],
      en: ["Enter", "Go out", "Go", "Come"] },
    answer: {
      jp: "はいる",
      en: "Enter" }
  },
  {
    question: "行",
    options: {
      jp: ["いく", "くる", "でる", "はいる"],
      en: ["Go", "Come", "Go out", "Enter"] },
    answer: {
      jp: "いく",
      en: "Go" }
  },
  {
    question: "来",
    options: {
      jp: ["くる", "いく", "でる", "はいる"],
      en: ["Come", "Go", "Go out", "Enter"] },
    answer: {
      jp: "くる",
      en: "Come" }
  },
  {
    question: "会",
    options: {
      jp: ["あう", "しる", "あける", "みる"],
      en: ["Meet", "Know", "Open", "See"] },
    answer: {
      jp: "あう",
      en: "Meet" }
  },
  {
    question: "知",
    options: {
      jp: ["しる", "ならう", "おしえる", "がく"],
      en: ["Know", "Learn", "Teach", "Study"] },
    answer: {
      jp: "しる",
      en: "Know" }
  },
  {
    question: "合",
    options: {
      jp: ["あう", "みる", "する", "きく"],
      en: ["Meet", "See", "Do", "Listen"] },
    answer: {
      jp: "あう",
      en: "Meet" }
  },
  {
    question: "見",
    options: {
      jp: ["みる", "よむ", "しる", "あう"],
      en: ["See", "Read", "Know", "Meet"] },
    answer: {
      jp: "みる",
      en: "See" }
  },
  {
    question: "前",
    options: {
      jp: ["まえ", "うしろ", "した", "みぎ"],
      en: ["Front", "Back", "Below", "Right"] },
    answer: {
      jp: "まえ",
      en: "Front" }
  }
];

export { hiraganaCharacters, katakanaCharacters, kanjiCharacters };

// N5
// 一	二	三	四	五	六	七	八	九	十	人	今	日
// 週	月	年	中	山	川	左	右	大	木	本	水	火
// 父	母	耳	口	休	何	入	上	前	下	千	午	友
// 古	名	国	外	女	男	子	学	生	小	書	毎	先
// 会	万	円	出	分	北	半	南	土	多	天	安	少
// 店	後	手	新	時	来	東	校	気	白	百	目	社
// 空	立	聞	花	行	西	見	言	話	語	読	買	足
// 車	道	金	長	間	雨	電	食	飲	駅	高	魚

// N4
// 力	夕	工	元	止	引	牛	区	犬	不	文	方	心
// 切	太	代	台	世	正	田	冬	民	用	兄	以	去
// 仕	市	広	主	写	字	自	考	合	光	好	死	回
// 有	同	肉	色	早	地	池	村	体	町	低	弟	走
// 赤	図	究	声	売	別	医	近	私	作	住	者	事
// 使	始	姉	英	京	画	妹	味	服	物	歩	門	夜
// 明	林	青	所	注	知	昼	茶	待	洗	送	品	洋
// 便	風	発	度	映	海	界	屋	音	急	計	建	研
// 県	思	乗	重	春	室	持	首	秋	借	弱	紙	帰
// 起	夏	家	院	員	病	勉	特	旅	料	真	通	鳥
// 転	族	進	理	野	問	都	堂	動	悪	強	教	産
// 黒	菜	終	習	集	場	寒	軽	運	開	飯	答	森
// 暑	朝	貸	着	短	働	楽	暗	意	遠	漢	業	試
// 銀	歌	説	質	館	親	頭	薬	曜	題	顔	験

// N3
// 丸	久	才	支	戸	欠	王	化	内	反	比	夫	仏
// 毛	予	由	未	布	包	末	平	辺	氷	付	皮	犯
// 必	石	他	打	加	可	央	刊	玉	旧	号	皿	札
// 史	失	示	申	礼	令	列	老	式	州	寺	次	守
// 糸	在	再	向	交	血	件	共	曲	各	印	因	羽
// 団	竹	仲	虫	兆	伝	当	成	全	争	任	米	両
// 利	余	防	役	返	判	臣	身	折	努	投	対	束
// 谷	位	囲	完	角	快	改	技	局	君	均	形	決
// 芸	求	希	告	材	坂	似	児	状	初	助	労	冷
// 例	和	述	承	招	実	取	治	受	周	妻	参	枝
// 刷	効	幸	固	季	岸	岩	泣	協	居	苦	具	果
// 河	官	委	易	育	泳	直	定	底	的	性	昔	制
// 卒	非	波	板	版	念	武	表	命	府	放	法	油
// 勇	要	負	迷	約	面	変	飛	美	独	則	相	草
// 祖	信	政	星	点	追	単	炭	退	栄	科	活	胃
// 級	軍	係	型	客	逆	限	厚	指	昨	祝	神	査
// 省	酒	笑	消	師	財	殺	差	残	航	根	個	候
// 庫	記	訓	害	格	荷	帯	島	庭	徒	席	息	造
// 孫	速	能	配	倍	破	馬	浴	容	流	留	連	陸
// 率	略	望	務	敗	部	副	婦	側	組	責	接	船
// 商	設	雪	清	深	得	第	停	断	貨	液	移	経
// 規	寄	許	球	救	険	現	混	祭	細	術	宿	章
// 常	情	植	順	象	焼	勝	歯	最	散	港	検	湖
// 期	喜	結	景	給	雲	営	温	過	絵	階	覚	貯
// 達	測	童	等	湯	登	程	絶	然	富	復	費	番
// 悲	筆	備	貿	無	報	満	量	遊	落	陽	葉	税
// 路	豊	夢	農	続	損	想	戦	勢	数	置	鉄	感
// 解	園	愛	塩	極	禁	罪	資	準	種	雑	際	算
// 察	構	関	境	漁	演	慣	管	銅	適	精	製	静
// 像	増	総	鼻	複	鳴	綿	様	領	緑	練	歴	輪
// 編	箱	熱	選	線	導	談	調	横	確	課	器	賛
// 賞	機	橋	築	積	輸	録	績	講	職	観	額	類
// 願	識	競	議

// N2
// 了	与	亡	干	介	互	公	双	片	匹	払	幼	庁
// 占	込	冊	司	処	収	召	巨	甘	圧	永	衣	汚
// 汗	危	宇	灰	仮	叫	机	吸	舟	宅	存	忙	灯
// 肌	否	抜	沈	戻	坊	兵	麦	批	乱	卵	忘	良
// 伸	辛	吹	床	条	志	伺	困	含	更	迎	貝	応
// 押	欧	延	依	拡	価	券	肩	呼	肯	祈	供	況
// 刺	刻	昇	若	姓	担	宙	怖	並	沸	宝	抱	枚
// 泥	毒	突	届	彼	拝	杯	泊	到	乳	逃	背	畑
// 怒	珍	保	秒	封	律	柱	段	城	専	泉	浅	柔
// 拾	咲	紅	香	砂	狭	挟	荒	郊	故	枯	皆	革
// 看	巻	案	軒	原	恵	降	胸	恐	座	耕	骨	脂
// 修	純	将	捜	除	針	値	恥	畜	涙	恋	粉	浮
// 疲	被	途	捕	眠	娘	埋	展	倒	党	凍	般	悩
// 盗	脳	猫	軟	販	訪	符	貧	閉	粒	涼	欲	翌
// 郵	紹	頂	著	張	袋	探	掃	窓	授	捨	婚	採
// 済	偶	掘	康	健	異	黄	乾	基	域	械	菓	割
// 換	奥	偉	越	敬	減	雇	硬	御	隅	勤	喫	湿
// 詞	畳	装	善	晴	尊	替	超	遅	絡	湾	腕	幅
// 普	評	帽	補	募	棒	晩	鈍	塔	筒	痛	渡	殿
// 塗	賃	福	腹	零	裏	溶	預	暖	節	寝	蒸	触
// 照	署	辞	腰	歳	詰	靴	群	傾	鉱	違	煙	較
// 誤	疑	誌	緒	憎	層	踊	暮	滴	認	髪	暴	標
// 膚	舞	論	蔵	駐	震	諸	劇	権	億	鋭	賢	整
// 操	頼	壁	磨	薄	燃	濃	曇	優	齢	療	燥	濯
// 環	簡	贈	難	爆	臓	警

//N1
// 乙	丁	刀	又	凡	寸	及	弓	己	士	丈	刃	冗
// 升	尺	氏	幻	孔	凶	斤	井	刈	仁	斗	爪	屯
// 弔	丹	勿	尤	厄	匂	乏	丙	弁	尼	矛	矢	旦
// 只	叩	凸	斥	仙	瓦	凹	丘	句	甲	玄	巧	功
// 穴	叱	囚	汁	尻	丼	匠	巡	旬	充	芝	朱	至
// 旨	后	江	此	刑	仰	朽	吉	企	缶	芋	扱	伊
// 舌	尽	迅	壮	吐	吊	羊	吏	劣	妄	朴	弐	如
// 伐	帆	妃	伏	肘	扶	芳	邦	尾	伯	伴	尿	妊
// 忍	把	妨	吠	没	妙	励	呂	抑	里	呈	廷	豆
// 那	択	沢	即	汰	妥	芯	杉	亜	壱	沖	我	戒
// 肝	岐	忌	却	汽	狂	吟	系	克	攻	坑	孝	抗
// 呉	沙	災	佐	寿	秀	序	抄	肖	尚	松	沼	宗
// 呪	邪	叔	舎	肢	昆	忽	祉	侍	弦	股	拘	茎
// 屈	径	享	拒	拠	宜	奇	拐	劾	芽	怪	岳	於
// 往	殴	岡	佳	沿	炎	宛	或	枢	炊	垂	拙	析
// 斉	征	其	阻	狙	拓	卓	忠	抽	奈	抵	坪	邸
// 迭	典	炉	岬	免	茂	盲	房	肪	牧	奔	抹	枕
// 拍	迫	肥	披	泌	奉	泡	併	苗	附	侮	枠	茹
// 郎	眉	柄	赴	卑	派	肺	胞	盆	某	冒	殆	柳
// 厘	幽	訂	津	亭	帝	剃	貞	峠	洞	衷	挑	勅
// 胎	胆	奏	促	耐	怠	俗	荘	牲	宣	窃	染	甚
// 是	哀	威	為	姻	疫	架	卸	垣	冠	括	悔	咳
// 紀	軌	虐	糾	峡	契	皇	垢	孤	恒	洪	拷	弧
// 姿	施	恨	砕	削	拶	狩	俊	臭	昭	叙	盾	浄
// 侵	唇	娠	振	浸	症	准	徐	宵	祥	称	従	疾
// 殉	珠	殊	酌	射	唆	宰	剤	桟	蚕	剛	栽	索
// 桜	娯	悟	倹	兼	剣	貢	郡	桑	恭	脅	挙	宮
// 飢	既	鬼	陥	華	蚊	株	釜	核	恩	俺	益	悦
// 宴	浦	挨	凄	粋	衰	辱	陣	扇	栓	逝	隻	挿
// 泰	袖	倉	素	租	託	逐	秩	致	透	討	桃	匿
// 胴	逓	哲	唐	倫	竜	朗	烈	剖	紋	耗	脈	紡
// 梅	這	俳	納	秘	班	畔	倣	俸	砲	峰	陛	姫
// 紐	俵	浜	敏	紛	浪	脇	瓶	票	描	偏	崩	舶
// 排	陪	粘	培	堀	麻	密	猛	訳	累	隆	陵	猟
// 悠	唯	庸	悼	笛	添	偵	壷	釣	豚	陶	彫	帳
// 窒	眺	陳	逮	脱	蛋	淡	粗	爽	措	曽	曹	巣
// 惜	崇	盛	旋	推	据	酔	尉	陰	逸	殻	掛	勘
// 郭	喝	渇	崖	涯	眼	患	貫	偽	脚	虚	菌	郷
// 啓	菊	掲	渓	蛍	頃	控	惨	執	視	崎	紺	彩
// 斎	惚	赦	斜	釈	寂	蛇	粛	淑	渋	訟	梢	渉
// 庶	唱	剰	紳	尋	硝	殖	掌	循	焦	晶	証	詔
// 粧	就	衆	軸	煮	詐	裁	紫	滋	傘	策	慌	項
// 絞	喧	圏	堅	喉	遇	琴	筋	暁	僅	距	閑	欺
// 棋	稀	貴	敢	棺	款	喚	堪	揮	幾	賀	椅	街
// 渦	握	援	詠	随	遂	酢	診	葬	属	惰	揃	堕
// 疎	喪	創	訴	弾	棚	隊	塚	棟	痘	統	堤	提
// 貼	搭	揚	揺	雄	湧	猶	裕	嵐	塁	痢	硫	廊
// 裂	愉	貰	婿	媒	覗	廃	博	筈	蛮	扉	傍	遍
// 塀	雰	惑	壺	賄	碗	墓	飽	搬	微	鉢	煩	頒
// 漠	盟	滅	幕	廉	鈴	楼	虜	溜	裸	雷	酪	誉
// 頓	艇	督	腸	跳	馳	蓄	滝	痴	稚	嘆	僧	塑
// 践	禅	滞	賊	腎	睡	裾	跡	摂	聖	誠	鉛	猿
// 禍	嫁	該	暇	隔	滑	褐	勧	雅	嘩	蓋	塊	慨
// 頑	寛	幹	棄	義	愚	隙	傑	継	携	碁	誇	源
// 嫌	献	絹	遣	溝	鼓	嗣	飼	慈	詩	載	搾	債
// 催	蒔	腫	愁	酬	詳	傷	奨	飾	慎	障	銃	彰
// 塾	需	遮	魂	雌	磁	漆	酸	綱	酵	豪	穀	酷
// 獄	駆	鞄	旗	概	閣	箇	寡	餌	嘘	隠	稲	維
// 誓	遭	態	駄	噌	銭	漸	端	奪	徴	嫡	漬	徳
// 摘	誘	僚	暦	膜	僕	墨	銘	模	慢	漫	網	罰
// 閥	碑	寧	賑	慕	腐	漂	漏	敷	賓	撫	噴	墳
// 憤	膝	賦	舗	穂	幣	弊	褒	縄	輩	賠	罷	盤
// 箸	黙	魅	撲	頬	範	摩	霊	寮	履	慮	憂	窯
// 養	敵	徹	撤	賭	締	墜	踏	憧	蝶	潮	諾	鋳
// 誰	誕	遷	槽	請	潜	澄	噂	慰	影	謁	閲	縁
// 遺	稼	潟	噛	餓	嬉	歓	監	緩	窮	輝	儀	戯
// 勲	慶	潔	緊	稿	撃	暫	撒	賜	撮	趣	熟	潤
// 遵	衝	嘱	審	壌	嬢	獣	縦	儒	樹	諮	錯	激
// 憲	墾	鋼	衡	凝	興	稽	憩	薫	還	憾	懐	壊
// 獲	穏	憶	衛	緯	薦	錠	濁	壇	糖	篤	謎	謡
// 諭	融	擁	隣	錬	膨	謀	繁	縛	避	縫	奮	髭
// 頻	濡	翼	覧	鍋	謄	瞳	聴	鍛	鮮	霜	繊	闇
// 轄	霞	擬	犠	謹	矯	購	謙	鍵	厳	擦	懇	謝
// 縮	醜	礁	償	醤	織	瞬	鎖	顕	襟	騎	穫	騒
// 繕	礎	鎮	懲	藤	闘	濫	離	臨	糧	翻	繭	癒
// 藩	覆	癖	簿	譜	覇	霧	麗	羅	蘇	藻	瀬	髄
// 韻	鏡	繰	鶏	鯨	蹴	譲	醸	鐘	懸	護	響	籍
// 騰	欄	露	躍	魔	艦	顧	襲	驚	鑑