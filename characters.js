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
    options: { jp: ["いち", "に", "さん", "し"], en: ["One", "Two", "Three", "Four"] },
    answer: { jp: "いち", en: "One" }
  },
  {
    question: "二",
    options: { jp: ["に", "さん", "し", "ご"], en: ["Two", "Three", "Four", "Five"] },
    answer: { jp: "に", en: "Two" }
  },
  {
    question: "三",
    options: { jp: ["さん", "し", "ご", "ろく"], en: ["Three", "Four", "Five", "Six"] },
    answer: { jp: "さん", en: "Three" }
  },
  {
    question: "四",
    options: { jp: ["し", "ご", "ろく", "しち"], en: ["Four", "Five", "Six", "Seven"] },
    answer: { jp: "し", en: "Four" }
  },
  {
    question: "五",
    options: { jp: ["ご", "ろく", "しち", "はち"], en: ["Five", "Six", "Seven", "Eight"] },
    answer: { jp: "ご", en: "Five" }
  },
  {
    question: "六",
    options: { jp: ["ろく", "しち", "はち", "きゅう"], en: ["Six", "Seven", "Eight", "Nine"] },
    answer: { jp: "ろく", en: "Six" }
  },
  {
    question: "七",
    options: { jp: ["しち", "はち", "きゅう", "じゅう"], en: ["Seven", "Eight", "Nine", "Ten"] },
    answer: { jp: "しち", en: "Seven" }
  },
  {
    question: "八",
    options: { jp: ["はち", "きゅう", "じゅう", "ひゃく"], en: ["Eight", "Nine", "Ten", "Hundred"] },
    answer: { jp: "はち", en: "Eight" }
  },
  {
    question: "九",
    options: { jp: ["きゅう", "じゅう", "ひゃく", "せん"], en: ["Nine", "Ten", "Hundred", "Thousand"] },
    answer: { jp: "きゅう", en: "Nine" }
  },
  {
    question: "十",
    options: { jp: ["じゅう", "ひゃく", "せん", "いち"], en: ["Ten", "Hundred", "Thousand", "One"] },
    answer: { jp: "じゅう", en: "Ten" }
  },
  {
    question: "百",
    options: { jp: ["ひゃく", "せん", "いち", "じゅう"], en: ["Hundred", "Thousand", "One", "Ten"] },
    answer: { jp: "ひゃく", en: "Hundred" }
  },
  {
    question: "千",
    options: { jp: ["せん", "いち", "じゅう", "ひゃく"], en: ["Thousand", "One", "Ten", "Hundred"] },
    answer: { jp: "せん", en: "Thousand" }
  },
  {
    question: "万",
    options: { jp: ["まん", "いち", "じゅう", "ひゃく"], en: ["Ten Thousand", "One", "Ten", "Hundred"] },
    answer: { jp: "まん", en: "Ten Thousand" }
  },
  {
    question: "円",
    options: { jp: ["えん", "どる", "ゆろ", "ぱんど"], en: ["Yen", "Dollar", "Euro", "Pound"] },
    answer: { jp: "えん", en: "Yen" }
  },
  {
    question: "時",
    options: { jp: ["じ", "とき", "にち", "し"], en: ["Hour", "Time", "Day", "Four"] },
    answer: { jp: "じ", en: "Hour" }
  },
  {
    question: "分",
    options: { jp: ["ふん", "とき", "び", "げつ"], en: ["Minute", "Time", "Second", "Month"] },
    answer: { jp: "ふん", en: "Minute" }
  },
  {
    question: "本",
    options: { jp: ["ほん", "き", "いし", "たてもの"], en: ["Book", "Tree", "Stone", "Building"] },
    answer: { jp: "ほん", en: "Book" }
  },
  {
    question: "月",
    options: { jp: ["つき", "たいよう", "ひ", "とし"], en: ["Moon", "Sun", "Fire", "Year"] },
    answer: { jp: "つき", en: "Moon" }
  },
  {
    question: "年",
    options: { jp: ["とし", "つき", "ひ", "しゅう"], en: ["Year", "Moon", "Fire", "Week"] },
    answer: { jp: "とし", en: "Year" }
  },
  {
    question: "日",
    options: { jp: ["ひ", "たいよう", "つき", "しゅう"], en: ["Day", "Sun", "Moon", "Week"] },
    answer: { jp: "ひ", en: "Day" }
  },
  {
    question: "週",
    options: { jp: ["しゅう", "にち", "ひ", "とし"], en: ["Week", "Day", "Sun", "Year"] },
    answer: { jp: "しゅう", en: "Week" }
  },
  {
    question: "木",
    options: { jp: ["き", "みず", "ひ", "ほのお"], en: ["Tree", "Water", "Fire", "Metal"] },
    answer: { jp: "き", en: "Tree" }
  },
  {
    question: "水",
    options: { jp: ["みず", "き", "ほのお", "つち"], en: ["Water", "Tree", "Fire", "Earth"] },
    answer: { jp: "みず", en: "Water" }
  },
  {
    question: "火",
    options: { jp: ["ほのお", "みず", "かぜ", "つち"], en: ["Fire", "Water", "Wind", "Earth"] },
    answer: { jp: "ほのお", en: "Fire" }
  },
  {
    question: "土",
    options: { jp: ["つち", "き", "みず", "ほのお"], en: ["Earth", "Tree", "Water", "Fire"] },
    answer: { jp: "つち", en: "Earth" }
  },
  {
    question: "金",
    options: { jp: ["きん", "みず", "ほのお", "つち"], en: ["Gold", "Water", "Fire", "Earth"] },
    answer: { jp: "きん", en: "Gold" }
  },
  {
    question: "白",
    options: { jp: ["しろ", "くろ", "あか", "あお"], en: ["White", "Black", "Red", "Blue"] },
    answer: { jp: "しろ", en: "White" }
  },
  {
    question: "赤",
    options: { jp: ["あか", "あお", "みどり", "きいろ"], en: ["Red", "Blue", "Green", "Yellow"] },
    answer: { jp: "あか", en: "Red" }
  },
  {
    question: "青",
    options: { jp: ["あお", "あか", "みどり", "きいろ"], en: ["Blue", "Red", "Green", "Yellow"] },
    answer: { jp: "あお", en: "Blue" }
  },
  {
    question: "黒",
    options: { jp: ["くろ", "しろ", "あか", "あお"], en: ["Black", "White", "Red", "Blue"] },
    answer: { jp: "くろ", en: "Black" }
  },
  {
    question: "田",
    options: { jp: ["た", "かわ", "やま", "たいよう"], en: ["Rice Field", "River", "Mountain", "Sun"] },
    answer: { jp: "た", en: "Rice Field" }
  },
  {
    question: "山",
    options: { jp: ["やま", "かわ", "た", "たいよう"], en: ["Mountain", "River", "Rice Field", "Sun"] },
    answer: { jp: "やま", en: "Mountain" }
  },
  {
    question: "川",
    options: { jp: ["かわ", "やま", "た", "たいよう"], en: ["River", "Mountain", "Rice Field", "Sun"] },
    answer: { jp: "かわ", en: "River" }
  },
  {
    question: "夜",
    options: { jp: ["よる", "ひる", "あさ", "ゆう"], en: ["Night", "Daytime", "Morning", "Evening"] },
    answer: { jp: "よる", en: "Night" }
  },
  {
    question: "朝",
    options: { jp: ["あさ", "ひる", "よる", "ゆう"], en: ["Morning", "Daytime", "Night", "Evening"] },
    answer: { jp: "あさ", en: "Morning" }
  },
  {
    question: "昼",
    options: { jp: ["ひる", "あさ", "よる", "ゆう"], en: ["Daytime", "Morning", "Night", "Evening"] },
    answer: { jp: "ひる", en: "Daytime" }
  },
  {
    question: "夕",
    options: { jp: ["ゆう", "あさ", "ひる", "よる"], en: ["Evening", "Morning", "Daytime", "Night"] },
    answer: { jp: "ゆう", en: "Evening" }
  },
  {
    question: "男",
    options: { jp: ["おとこ", "おんな", "こども", "せんせい"], en: ["Man", "Woman", "Child", "Teacher"] },
    answer: { jp: "おとこ", en: "Man" }
  },
  {
    question: "女",
    options: { jp: ["おんな", "おとこ", "こども", "せんせい"], en: ["Woman", "Man", "Child", "Teacher"] },
    answer: { jp: "おんな", en: "Woman" }
  },
  {
    question: "子",
    options: { jp: ["こども", "おや", "おとな", "おじいさん"], en: ["Child", "Parent", "Adult", "Grandfather"] },
    answer: { jp: "こども", en: "Child" }
  },
  {
    question: "人",
    options: { jp: ["ひと", "き", "みず", "ほのお"], en: ["Person", "Tree", "Water", "Fire"] },
    answer: { jp: "ひと", en: "Person" }
  },
  {
    question: "名",
    options: { jp: ["な", "ひと", "き", "みず"], en: ["Name", "Person", "Tree", "Water"] },
    answer: { jp: "な", en: "Name" }
  },
  {
    question: "友",
    options: { jp: ["ともだち", "てき", "しらべもの", "ならいごと"], en: ["Friend", "Enemy", "Investigation", "Learning"] },
    answer: { jp: "ともだち", en: "Friend" }
  },
  {
    question: "学",
    options: { jp: ["がく", "おしえる", "ならう", "しっている"], en: ["Study", "Teach", "Learn", "Know"] },
    answer: { jp: "がく", en: "Study" }
  },
  {
    question: "校",
    options: { jp: ["がっこう", "しごと", "いえ", "みせ"], en: ["School", "Work", "Home", "Shop"] },
    answer: { jp: "がっこう", en: "School" }
  },
  {
    question: "先",
    options: { jp: ["せんせい", "つぎ", "さいしょ", "さいご"], en: ["Teacher", "Next", "First", "Last"] },
    answer: { jp: "せんせい", en: "Teacher" }
  },
  {
    question: "生",
    options: { jp: ["せい", "し", "うまれる", "とし"], en: ["Life", "Death", "Born", "Age"] },
    answer: { jp: "せい", en: "Life" }
  },
  {
    question: "行",
    options: { jp: ["いく", "くる", "はしる", "あるく"], en: ["Go", "Come", "Run", "Walk"] },
    answer: { jp: "いく", en: "Go" }
  },
  {
    question: "来",
    options: { jp: ["くる", "いく", "はしる", "あるく"], en: ["Come", "Go", "Run", "Walk"] },
    answer: { jp: "くる", en: "Come" }
  },
  {
    question: "食",
    options: { jp: ["たべる", "のむ", "ねる", "あそぶ"], en: ["Eat", "Drink", "Sleep", "Play"] },
    answer: { jp: "たべる", en: "Eat" }
  },
  {
    question: "飲",
    options: { jp: ["のむ", "たべる", "ねる", "あそぶ"], en: ["Drink", "Eat", "Sleep", "Play"] },
    answer: { jp: "のむ", en: "Drink" }
  },
  {
    question: "読",
    options: { jp: ["よむ", "かく", "はなす", "きく"], en: ["Read", "Write", "Speak", "Listen"] },
    answer: { jp: "よむ", en: "Read" }
  },
  {
    question: "書",
    options: { jp: ["かく", "よむ", "はなす", "きく"], en: ["Write", "Read", "Speak", "Listen"] },
    answer: { jp: "かく", en: "Write" }
  },
  {
    question: "話",
    options: { jp: ["はなす", "きく", "よむ", "かく"], en: ["Speak", "Listen", "Read", "Write"] },
    answer: { jp: "はなす", en: "Speak" }
  },
  {
    question: "聞",
    options: { jp: ["きく", "はなす", "よむ", "かく"], en: ["Listen", "Speak", "Read", "Write"] },
    answer: { jp: "きく", en: "Listen" }
  },
  {
    question: "見",
    options: { jp: ["みる", "みえる", "みせる", "よむ"], en: ["See", "Be Visible", "Show", "Read"] },
    answer: { jp: "みる", en: "See" }
  },
  {
    question: "知",
    options: { jp: ["しる", "ならう", "おしえる", "がく"], en: ["Know", "Learn", "Teach", "Study"] },
    answer: { jp: "しる", en: "Know" }
  },
  {
    question: "気",
    options: { jp: ["き", "え", "くうき", "みず"], en: ["Spirit", "Painting", "Air", "Water"] },
    answer: { jp: "き", en: "Spirit" }
  },
  {
    question: "天",
    options: { jp: ["てん", "ち", "たいよう", "つき"], en: ["Heaven", "Earth", "Sun", "Moon"] },
    answer: { jp: "てん", en: "Heaven" }
  },
  {
    question: "地",
    options: { jp: ["ち", "てん", "たいよう", "つき"], en: ["Earth", "Heaven", "Sun", "Moon"] },
    answer: { jp: "ち", en: "Earth" }
  },
  {
    question: "空",
    options: { jp: ["そら", "ち", "うみ", "やま"], en: ["Sky", "Earth", "Sea", "Mountain"] },
    answer: { jp: "そら", en: "Sky" }
  },
  {
    question: "海",
    options: { jp: ["うみ", "そら", "ち", "やま"], en: ["Sea", "Sky", "Earth", "Mountain"] },
    answer: { jp: "うみ", en: "Sea" }
  },
  {
    question: "風",
    options: { jp: ["かぜ", "あめ", "たいよう", "ゆき"], en: ["Wind", "Rain", "Sun", "Snow"] },
    answer: { jp: "かぜ", en: "Wind" }
  },
  {
    question: "雨",
    options: { jp: ["あめ", "かぜ", "たいよう", "ゆき"], en: ["Rain", "Wind", "Sun", "Snow"] },
    answer: { jp: "あめ", en: "Rain" }
  },
  {
    question: "雪",
    options: { jp: ["ゆき", "あめ", "かぜ", "たいよう"], en: ["Snow", "Rain", "Wind", "Sun"] },
    answer: { jp: "ゆき", en: "Snow" }
  },
  {
    question: "花",
    options: { jp: ["はな", "き", "くさ", "は"], en: ["Flower", "Tree", "Grass", "Leaf"] },
    answer: { jp: "はな", en: "Flower" }
  },
  {
    question: "木",
    options: { jp: ["き", "みず", "ほのお", "つち"], en: ["Tree", "Water", "Fire", "Earth"] },
    answer: { jp: "き", en: "Tree" }
  },
  {
    question: "草",
    options: { jp: ["くさ", "き", "はな", "は"], en: ["Grass", "Tree", "Flower", "Leaf"] },
    answer: { jp: "くさ", en: "Grass" }
  },
  {
    question: "花",
    options: { jp: ["はな", "き", "くさ", "は"], en: ["Flower", "Tree", "Grass", "Leaf"] },
    answer: { jp: "はな", en: "Flower" }
  },
  {
    question: "道",
    options: { jp: ["みち", "かど", "こうさてん", "じどう"], en: ["Path", "Corner", "Intersection", "Traffic Light"] },
    answer: { jp: "みち", en: "Path" }
  },
  {
    question: "町",
    options: { jp: ["まち", "し", "むら", "くに"], en: ["Town", "City", "Village", "Country"] },
    answer: { jp: "まち", en: "Town" }
  },
  {
    question: "市",
    options: { jp: ["いち", "まち", "むら", "くに"], en: ["City", "Town", "Village", "Country"] },
    answer: { jp: "いち", en: "City" }
  },
  {
    question: "村",
    options: { jp: ["むら", "まち", "いち", "くに"], en: ["Village", "Town", "City", "Country"] },
    answer: { jp: "むら", en: "Village" }
  },
  {
    question: "国",
    options: { jp: ["くに", "まち", "いち", "むら"], en: ["Country", "Town", "City", "Village"] },
    answer: { jp: "くに", en: "Country" }
  },
  {
    question: "会",
    options: { jp: ["あう", "みつける", "でる", "とどまる"], en: ["Meet", "Find", "Exit", "Stay"] },
    answer: { jp: "あう", en: "Meet" }
  },
  {
    question: "社",
    options: { jp: ["しゃ", "かい", "いえ", "みち"], en: ["Company", "Association", "House", "Road"] },
    answer: { jp: "しゃ", en: "Company" }
  },
  {
    question: "田",
    options: { jp: ["た", "かわ", "やま", "たいよう"], en: ["Rice Field", "River", "Mountain", "Sun"] },
    answer: { jp: "た", en: "Rice Field" }
  },
  {
    question: "家",
    options: { jp: ["いえ", "かい", "たてもの", "へや"], en: ["House", "Shop", "Building", "Room"] },
    answer: { jp: "いえ", en: "House" }
  },
  {
    question: "店",
    options: { jp: ["みせ", "おみせ", "いえ", "しゃ"], en: ["Store", "Shop", "House", "Company"] },
    answer: { jp: "みせ", en: "Store" }
  },
  {
    question: "本",
    options: { jp: ["ほん", "き", "かわ", "たいよう"], en: ["Book", "Tree", "River", "Sun"] },
    answer: { jp: "ほん", en: "Book" }
  },
  {
    question: "電",
    options: { jp: ["でん", "みず", "ほのお", "つち"], en: ["Electricity", "Water", "Fire", "Earth"] },
    answer: { jp: "でん", en: "Electricity" }
  },
  {
    question: "車",
    options: { jp: ["くるま", "じてんしゃ", "でんしゃ", "バス"], en: ["Car", "Bicycle", "Train", "Bus"] },
    answer: { jp: "くるま", en: "Car" }
  },
  {
    question: "手",
    options: { jp: ["て", "あし", "あたま", "あし"], en: ["Hand", "Foot", "Head", "Foot"] },
    answer: { jp: "て", en: "Hand" }
  },
  {
    question: "足",
    options: { jp: ["あし", "て", "かお", "め"], en: ["Foot", "Hand", "Face", "Eye"] },
    answer: { jp: "あし", en: "Foot" }
  },
  {
    question: "目",
    options: { jp: ["め", "みみ", "はな", "くち"], en: ["Eye", "Ear", "Nose", "Mouth"] },
    answer: { jp: "め", en: "Eye" }
  },
  {
    question: "耳",
    options: { jp: ["みみ", "め", "はな", "くち"], en: ["Ear", "Eye", "Nose", "Mouth"] },
    answer: { jp: "みみ", en: "Ear" }
  },
  {
    question: "鼻",
    options: { jp: ["はな", "め", "みみ", "くち"], en: ["Nose", "Eye", "Ear", "Mouth"] },
    answer: { jp: "はな", en: "Nose" }
  },
  {
    question: "口",
    options: { jp: ["くち", "め", "みみ", "はな"], en: ["Mouth", "Eye", "Ear", "Nose"] },
    answer: { jp: "くち", en: "Mouth" }
  },
  {
    question: "手",
    options: { jp: ["て", "あし", "あたま", "め"], en: ["Hand", "Foot", "Head", "Eye"] },
    answer: { jp: "て", en: "Hand" }
  },
  {
    question: "足",
    options: { jp: ["あし", "て", "あたま", "かお"], en: ["Foot", "Hand", "Head", "Face"] },
    answer: { jp: "あし", en: "Foot" }
  },
  {
    question: "頭",
    options: { jp: ["あたま", "て", "あし", "くち"], en: ["Head", "Hand", "Foot", "Mouth"] },
    answer: { jp: "あたま", en: "Head" }
  },
  {
    question: "顔",
    options: { jp: ["かお", "あたま", "て", "あし"], en: ["Face", "Head", "Hand", "Foot"] },
    answer: { jp: "かお", en: "Face" }
  },
  {
    question: "体",
    options: { jp: ["からだ", "あたま", "て", "あし"], en: ["Body", "Head", "Hand", "Foot"] },
    answer: { jp: "からだ", en: "Body" }
  },
  {
    question: "心",
    options: { jp: ["こころ", "たましい", "しん", "せい"], en: ["Heart", "Soul", "Mind", "Spirit"] },
    answer: { jp: "こころ", en: "Heart" }
  },
  {
    question: "意",
    options: { jp: ["いみ", "おもい", "きもち", "かんじ"], en: ["Meaning", "Thought", "Feeling", "Character"] },
    answer: { jp: "いみ", en: "Meaning" }
  },
  {
    question: "思",
    options: { jp: ["おもう", "いけん", "かんがえる", "はなす"], en: ["Think", "Opinion", "Consider", "Speak"] },
    answer: { jp: "おもう", en: "Think" }
  },
  {
    question: "言",
    options: { jp: ["いう", "はなす", "きく", "かく"], en: ["Say", "Speak", "Listen", "Write"] },
    answer: { jp: "いう", en: "Say" }
  },
  {
    question: "話",
    options: { jp: ["はなす", "いう", "きく", "かく"], en: ["Speak", "Say", "Listen", "Write"] },
    answer: { jp: "はなす", en: "Speak" }
  },
  {
    question: "聞",
    options: { jp: ["きく", "はなす", "いう", "かく"], en: ["Listen", "Speak", "Say", "Write"] },
    answer: { jp: "きく", en: "Listen" }
  },
  {
    question: "書",
    options: { jp: ["かく", "よむ", "はなす", "きく"], en: ["Write", "Read", "Speak", "Listen"] },
    answer: { jp: "かく", en: "Write" }
  },
  {
    question: "読",
    options: { jp: ["よむ", "かく", "はなす", "きく"], en: ["Read", "Write", "Speak", "Listen"] },
    answer: { jp: "よむ", en: "Read" }
  },
  {
    question: "出",
    options: { jp: ["でる", "はいる", "いく", "くる"], en: ["Go out", "Enter", "Go", "Come"] },
    answer: { jp: "でる", en: "Go out" }
  },
  {
    question: "入",
    options: { jp: ["はいる", "でる", "いく", "くる"], en: ["Enter", "Go out", "Go", "Come"] },
    answer: { jp: "はいる", en: "Enter" }
  },
  {
    question: "行",
    options: { jp: ["いく", "くる", "でる", "はいる"], en: ["Go", "Come", "Go out", "Enter"] },
    answer: { jp: "いく", en: "Go" }
  },
  {
    question: "来",
    options: { jp: ["くる", "いく", "でる", "はいる"], en: ["Come", "Go", "Go out", "Enter"] },
    answer: { jp: "くる", en: "Come" }
  },
  {
    question: "会",
    options: { jp: ["あう", "しる", "あける", "みる"], en: ["Meet", "Know", "Open", "See"] },
    answer: { jp: "あう", en: "Meet" }
  },
  {
    question: "知",
    options: { jp: ["しる", "ならう", "おしえる", "がく"], en: ["Know", "Learn", "Teach", "Study"] },
    answer: { jp: "しる", en: "Know" }
  },
  {
    question: "合",
    options: { jp: ["あう", "みる", "する", "きく"], en: ["Meet", "See", "Do", "Listen"] },
    answer: { jp: "あう", en: "Meet" }
  },
  {
    question: "見",
    options: { jp: ["みる", "よむ", "しる", "あう"], en: ["See", "Read", "Know", "Meet"] },
    answer: { jp: "みる", en: "See" }
  },
  {
    question: "前",
    options: { jp: ["まえ", "うしろ", "した", "みぎ"], en: ["Front", "Back", "Below", "Right"] },
    answer: { jp: "まえ", en: "Front" }
  }
];

export { hiraganaCharacters, katakanaCharacters, kanjiCharacters };
