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
  // N5
  // 一	二	三	四	五	六	七	八	九	十	人	今	日
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
    options: { 
      jp: ["ろく", "しち", "はち", "きゅう"],
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
    question: "人",
    options: {
      jp: ["ひと", "き", "みず", "ほのお"],
      en: ["Person", "Tree", "Water", "Fire"] },
    answer: {
      jp: "ひと",
      en: "Person" }
  },
  {
    question: "今",
    options: {
      jp: ["いま", "きょう", "あした", "とき"],
      en: ["Now", "Today", "Tomorrow", "Time"] },
    answer: {
      jp: "いま",
      en: "Now" }
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
  // 週	月	年	中	山	川	左	右	大	木	本	水	火
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
    question: "中",
    options: {
      jp: ["なか", "そと", "うえ", "した"],
      en: ["Inside", "Outside", "Above", "Under"]},
    answer: {
      jp: "なか",
      en: "Inside" }
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
    question: "左",
    options: {
      jp: ["ひだり", "みぎ", "まえ", "うしろ"],
      en: ["Left", "Right", "Front", "Back"] },
    answer: {
      jp: "ひだり",
      en: "Left" }
  },
  {
    question: "右",
    options: {
      jp: ["ひだり", "みぎ", "まえ", "うしろ"],
      en: ["Left", "Right", "Front", "Back"] },
    answer: {
      jp: "みぎ",
      en: "Right" }
  },
  {
    question: "大",
    options: {
      jp: ["おお", "ちい", "みどり", "あか"],
      en: ["Big", "Small", "Green", "Red"] },
    answer: {
      jp: "おお",
      en: "Big" }
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
    question: "本",
    options: {
      jp: ["ほん", "き", "いし", "たてもの"],
      en: ["Book", "Tree", "Stone", "Building"] },
    answer: {
      jp: "ほん",
      en: "Book" }
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
  // 父	母	耳	口	休	何	入	上	前	下	千	午	友
  {
    question: "父",
    options: {
      jp: ["ちち", "はは", "あに", "おとうと"],
      en: ["Father", "Mother", "Elder Brother", "Younger Brother"] },
    answer: {
      jp: "ちち",
      en: "Father" }
  },
  {
    question: "母",
    options: {
      jp: ["ちち", "はは", "あね", "いもうと"],
      en: ["Father", "Mother", "Elder Sister", "Younger Sister"] },
    answer: {
      jp: "はは",
      en: "Mother" }
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
    question: "口",
    options: {
      jp: ["くち", "め", "みみ", "はな"],
      en: ["Mouth", "Eye", "Ear", "Nose"] },
    answer: {
      jp: "くち",
      en: "Mouth" }
  },
  {
    question: "休",
    options: {
      jp: ["やす", "いく", "くる", "たべる"],
      en: ["Rest", "Go", "Come", "Eat"] },
    answer: {
      jp: "やす",
      en: "Rest" }
  },
  {
    question: "何",
    options: {
      jp: ["なん", "だれ", "どこ", "いつ"],
      en: ["What", "Who", "Where", "When"] },
    answer: {
      jp: "なん",
      en: "What" }
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
    question: "上",
    options: {
      jp: ["うえ", "した", "みぎ", "ひだり"],
      en: ["Up", "Down", "Right", "Left"] },
    answer: {
      jp: "うえ",
      en: "Up" }
  },
  {
    question: "前",
    options: {
      jp: ["まえ", "うしろ", "した", "みぎ"],
      en: ["Front", "Back", "Below", "Right"] },
    answer: {
      jp: "まえ",
      en: "Front" }
  },
  {
    question: "下",
    options: {
      jp: ["うえ", "した", "みぎ", "ひだり"],
      en: ["Up", "Down", "Right", "Left"] },
    answer: {
      jp: "した",
      en: "Down" }
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
    question: "午",
    options: {
      jp: ["うま", "とり", "ねずみ", "うし"],
      en: ["Horse", "Bird", "Mouse", "Cow"] },
    answer: {
      jp: "うま",
      en: "Horse" }
  },
  {
    question: "友",
    options: {
      jp: ["ともだち", "てき", "しごと", "せいちょう"],
      en: ["Friend", "Enemy", "Work", "Growth"] },
    answer: {
      jp: "ともだち",
      en: "Friend" }
  },  
  // 古	名	国	外	女	男	子	学	生	小	書	毎	先
  {
    question: "古",
    options: {
      jp: ["ふる", "あたらしい", "たかい", "みじかい"],
      en: ["Old", "New", "Tall", "Short"] },
    answer: {
      jp: "ふる",
      en: "Old" }
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
    question: "国",
    options: {
      jp: ["くに", "まち", "いち", "むら"],
      en: ["Country", "Town", "City", "Village"] },
    answer: {
      jp: "くに",
      en: "Country" }
  },
  {
    question: "外",
    options: {
      jp: ["そと", "うち", "まえ", "うしろ"],
      en: ["Outside", "Inside", "Front", "Back"] },
    answer: {
      jp: "そと",
      en: "Outside" }
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
    question: "男",
    options: {
      jp: ["おとこ", "おんな", "こども", "せんせい"],
      en: ["Man", "Woman", "Child", "Teacher"] },
    answer: {
      jp: "おとこ",
      en: "Man" }
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
    question: "学",
    options: {
      jp: ["がく", "おしえる", "ならう", "しっている"],
      en: ["Study", "Teach", "Learn", "Know"] },
    answer: {
      jp: "がく",
      en: "Study" }
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
    question: "小",
    options: {
      jp: ["ちい", "おお", "あかるい", "くろい"],
      en: ["Small", "Big", "Bright", "Dark"] },
    answer: {
      jp: "ちい",
      en: "Small" }
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
    question: "毎",
    options: {
      jp: ["まい", "いつも", "たくさん", "ちいさな"],
      en: ["Every", "Always", "Many", "Small"] },
    answer: {
      jp: "まい",
      en: "Every" }
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
  // 会	万	円	出	分	北	半	南	土	多	天	安	少
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
    question: "出",
    options: {
      jp: ["でる", "はいる", "いく", "くる"],
      en: ["Go out", "Enter", "Go", "Come"] },
    answer: {
      jp: "でる",
      en: "Go out" }
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
    question: "北",
    options: {
      jp: ["きた", "みなみ", "ひがし", "にし"],
      en: ["North", "South", "East", "West"] },
    answer: {
      jp: "きた",
      en: "North" }
  },
  {
    question: "半",
    options: {
      jp: ["はん", "いち", "じゅう", "せん"],
      en: ["Half", "One", "Ten", "Thousand"] },
    answer: {
      jp: "はん",
      en: "Half" }
  },
  {
    question: "南",
    options: {
      jp: ["きた", "みなみ", "ひがし", "にし"],
      en: ["North", "South", "East", "West"] },
    answer: {
      jp: "みなみ",
      en: "South" }
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
    question: "多",
    options: {
      jp: ["おお", "すくない", "ちいさな", "たかい"],
      en: ["Many", "Few", "Small", "High"] },
    answer: {
      jp: "おお",
      en: "Many"
   }
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
    question: "安",
    options: {
      jp: ["やす", "たかい", "ひろい", "ちいさい"],
      en: ["Cheap", "Expensive", "Wide", "Small"] },
    answer: {
      jp: "やす",
      en: "Cheap"
   }
  },
  {
    question: "少",
    options: {
      jp: ["すくない", "おおい", "たかい", "ちいさい"],
      en: ["Few", "Many", "Expensive", "Small"] },
    answer: {
      jp: "すくない",
      en: "Few"
   }
  },
  // 店	後	手	新	時	来	東	校	気	白	百	目	社
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
    question: "後",
    options: {
      jp: ["あと", "まえ", "いま", "とき"],
      en: ["After", "Before", "Now", "Time"] },
    answer: {
      jp: "あと",
      en: "After"
   }
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
    question: "新",
    options: {
      jp: ["あたらしい", "ふるい", "たかい", "ちいさい"],
      en: ["New", "Old", "Expensive", "Small"] },
    answer: {
      jp: "あたらしい",
      en: "New"
   }
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
    question: "来",
    options: {
      jp: ["くる", "いく", "はしる", "あるく"],
      en: ["Come", "Go", "Run", "Walk"] },
    answer: {
      jp: "くる",
      en: "Come" }
  },
  {
    question: "東",
    options: {
      jp: ["ひがし", "にし", "きた", "みなみ"],
      en: ["East", "West", "North", "South"] },
    answer: {
      jp: "ひがし",
      en: "East"
   }
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
    question: "気",
    options: {
      jp: ["き", "え", "くうき", "みず"],
      en: ["Spirit", "Painting", "Air", "Water"] },
    answer: {
      jp: "き",
      en: "Spirit" }
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
    question: "百",
    options: {
      jp: ["ひゃく", "せん", "いち", "じゅう"],
      en: ["Hundred", "Thousand", "One", "Ten"] },
    answer: {
      jp: "ひゃく",
      en: "Hundred" }
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
    question: "社",
    options: {
      jp: ["しゃ", "かい", "いえ", "みち"],
      en: ["Company", "Association", "House", "Road"] },
    answer: {
      jp: "しゃ",
      en: "Company" }
  },
  // 空	立	聞	花	行	西	見	言	話	語	読	買	足
  {
    question: "空",
    options: {
      jp: ["そら", "ちいさい", "あかるい", "くらい"],
      en: ["Sky", "Small", "Bright", "Dark"] },
    answer: {
      jp: "そら",
      en: "Sky" }
  },
  {
    question: "立",
    options: {
      jp: ["たつ", "すわる", "あるく", "ねる"],
      en: ["Stand", "Sit", "Walk", "Lie Down"] },
    answer: {
      jp: "たつ",
      en: "Stand" }
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
    question: "花",
    options: {
      jp: ["はな", "き", "くさ", "は"],
      en: ["Flower", "Tree", "Grass", "Leaf"] },
    answer: {
      jp: "はな",
      en: "Flower" }
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
    question: "西",
    options: {
      jp: ["にし", "ひがし", "きた", "みなみ"],
      en: ["West", "East", "North", "South"] },
    answer: {
      jp: "にし",
      en: "West" }
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
      jp: ["はなす", "きく", "よむ", "かく"],
      en: ["Speak", "Listen", "Read", "Write"] },
    answer: {
      jp: "はなす",
      en: "Speak" }
  },
  {
    question: "語",
    options: {
      jp: ["ことば", "ひと", "もの", "みせ"],
      en: ["Language", "Person", "Thing", "Shop"] },
    answer: {
      jp: "ことば",
      en: "Language" }
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
    question: "買",
    options: {
      jp: ["かう", "うる", "あるく", "みる"],
      en: ["Buy", "Sell", "Walk", "See"] },
    answer: {
      jp: "かう",
      en: "Buy" }
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
  // 車	道	金	長	間	雨	電	食	飲	駅	高	魚
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
    question: "道",
    options: {
      jp: ["みち", "かど", "こうさてん", "じどう"],
      en: ["Path", "Corner", "Intersection", "Traffic Light"] },
    answer: {
      jp: "みち",
      en: "Path" }
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
    question: "長",
    options: {
      jp: ["ながい", "みじかい", "ひかり", "りょう"],
      en: ["Long", "Short", "Light", "Leader"] },
    answer: {
      jp: "ながい",
      en: "Long" }
  },
  {
    question: "間",
    options: {
      jp: ["あいだ", "うち", "そと", "みぎ"],
      en: ["Between", "Inside", "Outside", "Right"] },
    answer: {
      jp: "あいだ",
      en: "Between" }
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
    question: "電",
    options: {
      jp: ["でん", "みず", "ほのお", "つち"],
      en: ["Electricity", "Water", "Fire", "Earth"] },
    answer: {
      jp: "でん",
      en: "Electricity" }
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
    question: "駅",
    options: {
      jp: ["えき", "くうこう", "びじゅつかん", "としょかん"],
      en: ["Station", "Airport", "Art Museum", "Library"] },
    answer: {
      jp: "えき",
      en: "Station" }
  },
  {
    question: "高",
    options: {
      jp: ["たかい", "ひくい", "おおきい", "ちいさい"],
      en: ["High", "Low", "Big", "Small"] },
    answer: {
      jp: "たかい",
      en: "High" }
  },
  {
    question: "魚",
    options: {
      jp: ["さかな", "にく", "やさい", "くだもの"],
      en: ["Fish", "Meat", "Vegetable", "Fruit"] },
    answer: {
      jp: "さかな",
      en: "Fish" }
  },
  // N4
  // 力	夕	工	元	止	引	牛	区	犬	不	文	方	心
  {
    question: "力",
    options: {
      jp: ["ちから", "たから", "あお", "うみ"],
      en: ["Strength", "Treasure", "Blue", "Sea"] },
    answer: {
      jp: "ちから",
      en: "Strength" }
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
    question: "工",
    options: {
      jp: ["くう", "しごと", "あさ", "たべる"],
      en: ["Work", "Job", "Morning", "Eat"] },
    answer: {
      jp: "しごと",
      en: "Work" }
  },
  {
    question: "元",
    options: {
      jp: ["はじまり", "おわり", "みぎ", "ひだり"],
      en: ["Origin", "End", "Right", "Left"] },
    answer: {
      jp: "はじまり",
      en: "Origin" }
  },
  {
    question: "止",
    options: {
      jp: ["とまる", "いく", "くる", "あるく"],
      en: ["Stop", "Go", "Come", "Walk"] },
    answer: {
      jp: "とまる",
      en: "Stop" }
  },
  {
    question: "引",
    options: {
      jp: ["ひく", "おく", "すわる", "たべる"],
      en: ["Pull", "Put", "Sit", "Eat"] },
    answer: {
      jp: "ひく",
      en: "Pull" }
  },
  {
    question: "牛",
    options: {
      jp: ["ぎゅう", "ひつじ", "うま", "とり"],
      en: ["Cow", "Sheep", "Horse", "Bird"] },
    answer: {
      jp: "ぎゅう",
      en: "Cow" }
  },
  {
    question: "区",
    options: {
      jp: ["く", "まち", "し", "ひと"],
      en: ["District", "Town", "City", "Person"] },
    answer: {
      jp: "く",
      en: "District" }
  },
  {
    question: "犬",
    options: {
      jp: ["いぬ", "ねこ", "さる", "ぞう"],
      en: ["Dog", "Cat", "Monkey", "Elephant"] },
    answer: {
      jp: "いぬ",
      en: "Dog" }
  },
  {
    question: "不",
    options: {
      jp: ["ふ", "いぬ", "たべる", "みる"],
      en: ["Not", "Dog", "Eat", "See"] },
    answer: {
      jp: "ふ",
      en: "Not" }
  },
  {
    question: "文",
    options: {
      jp: ["ぶん", "こと", "しごと", "まち"],
      en: ["Text", "Thing", "Work", "Town"] },
    answer: {
      jp: "ぶん",
      en: "Text" }
  },
  {
    question: "方",
    options: {
      jp: ["ほう", "まち", "びじゅつ", "とし"],
      en: ["Direction", "Town", "Art", "Year"] },
    answer: {
      jp: "ほう",
      en: "Direction" }
  },
  {
    question: "心",
    options: {
      jp: ["こころ", "たましい", "しん", "せい"],
      en: ["Heart", "Soul", "Mind", "Spirit"] },
    answer: {
      jp: "こころ",
      en: "Hear" }
  },
  // 切	太	代	台	世	正	田	冬	民	用	兄	以	去
  {
    question: "切",
    options: {
      jp: ["きる", "いく", "くる", "みる"],
      en: ["Cut", "Go", "Come", "See"] },
    answer: {
      jp: "きる",
      en: "Cut" }
  },
  {
    question: "太",
    options: {
      jp: ["ふとい", "ほそい", "ちいさい", "おおきい"],
      en: ["Thick", "Thin", "Small", "Big"] },
    answer: {
      jp: "ふとい",
      en: "Thick" }
  },
  {
    question: "代",
    options: {
      jp: ["だい", "よ", "し", "すう"],
      en: ["Age", "Generation", "Four", "Number"] },
    answer: {
      jp: "だい",
      en: "Age" }
  },
  {
    question: "台",
    options: {
      jp: ["だい", "よ", "し", "すう"],
      en: ["Platform", "Generation", "Four", "Number"] },
    answer: {
      jp: "だい",
      en: "Platform" }
  },
  {
    question: "世",
    options: {
      jp: ["よ", "だい", "し", "すう"],
      en: ["World", "Generation", "Four", "Number"] },
    answer: {
      jp: "よ",
      en: "World" }
  },
  {
    question: "正",
    options: {
      jp: ["ただしい", "ひだり", "みぎ", "ちいさい"],
      en: ["Correct", "Left", "Right", "Small"] },
    answer: {
      jp: "ただしい",
      en: "Correct" }
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
    question: "冬",
    options: {
      jp: ["ふゆ", "はる", "なつ", "あき"],
      en: ["Winter", "Spring", "Summer", "Fall"] },
    answer: {
      jp: "ふゆ",
      en: "Winter" }
  },
  {
    question: "民",
    options: {
      jp: ["たみ", "ひと", "し", "すう"],
      en: ["People", "Person", "Four", "Number"] },
    answer: {
      jp: "ひと",
      en: "Person" }
  },
  {
    question: "用",
    options: {
      jp: ["もちいる", "いく", "くる", "みる"],
      en: ["Use", "Go", "Come", "See"] },
    answer: {
      jp: "もちいる",
      en: "Use" }
  },
  {
    question: "兄",
    options: {
      jp: ["あに", "おとうと", "おねえさん", "いもうと"],
      en: ["Elder Brother", "Younger Brother", "Elder Sister", "Younger Sister"] },
    answer: {
      jp: "あに",
      en: "Elder Brother" }
  },
  {
    question: "以",
    options: {
      jp: ["もっと", "つづく", "ここ", "これ"],
      en: ["More", "Continue", "Here", "This"] },
    answer: {
      jp: "もっと",
      en: "More" }
  },
  {
    question: "去",
    options: {
      jp: ["いく", "くる", "みる", "くう"],
      en: ["Go", "Come", "See", "Eat"] },
    answer: {
      jp: "いく",
      en: "Go" }
  },
  // 仕	市	広	主	写	字	自	考	合	光	好	死	回
  {
    question: "仕",
    options: {
      jp: ["つくる", "いく", "くる", "みる"],
      en: ["Make", "Go", "Come", "See"] },
    answer: {
      jp: "つくる",
      en: "Make" }
  },
  {
    question: "市",
    options: {
      jp: ["いち", "まち", "さと", "くに"],
      en: ["City", "Town", "Village", "Country"] },
    answer: {
      jp: "いち",
      en: "City" }
  },
  {
    question: "広",
    options: {
      jp: ["ひろい", "せまい", "たかい", "ちいさい"],
      en: ["Wide", "Narrow", "High", "Small"] },
    answer: {
      jp: "ひろい",
      en: "Wide" }
  },
  {
    question: "主",
    options: {
      jp: ["ぬし", "かみ", "ひと", "くる"],
      en: ["Master", "God", "Person", "Come"] },
    answer: {
      jp: "ぬし",
      en: "Master" }
  },
  {
    question: "写",
    options: {
      jp: ["うつす", "いく", "くる", "みる"],
      en: ["Copy", "Go", "Come", "See"] },
    answer: {
      jp: "うつす",
      en: "Copy" }
  },
  {
    question: "字",
    options: {
      jp: ["あざ", "ことば", "ひらがな", "かんじ"],
      en: ["Character", "Word", "Hiragana", "Kanji"] },
    answer: {
      jp: "かんじ",
      en: "Kanji" }
  },
  {
    question: "自",
    options: {
      jp: ["みずから", "あたま", "ここ", "これ"],
      en: ["Self", "Head", "Here", "This"] },
    answer: {
      jp: "みずから",
      en: "Self" }
  },
  {
    question: "考",
    options: {
      jp: ["かんがえる", "いく", "くる", "みる"],
      en: ["Think", "Go", "Come", "See"] },
    answer: {
      jp: "かんがえる",
      en: "Think" }
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
    question: "光",
    options: {
      jp: ["ひかり", "やみ", "あかるい", "くらい"],
      en: ["Light", "Darkness", "Bright", "Dark"] },
    answer: {
      jp: "ひかり",
      en: "Light" }
  },
  {
    question: "好",
    options: {
      jp: ["すき", "きらい", "あたらしい", "ふるい"],
      en: ["Like", "Dislike", "New", "Old"] },
    answer: {
      jp: "すき",
      en: "Like" }
  },
  {
    question: "死",
    options: {
      jp: ["し", "いきる", "あう", "つくる"],
      en: ["Death", "Live", "Meet", "Make"] },
    answer: {
      jp: "し",
      en: "Death" }
  },
  {
    question: "回",
    options: {
      jp: ["まわる", "いく", "くる", "みる"],
      en: ["Turn", "Go", "Come", "See"] },
    answer: {
      jp: "まわる",
      en: "Turn" }
  },
  // 有	同	肉	色	早	地	池	村	体	町	低	弟	走
  {
    question: "有",
    options: {
      jp: ["ある", "ない", "いく", "くる"],
      en: ["Have", "Don't Have", "Go", "Come"] },
    answer: {
      jp: "ある",
      en: "Have" }
  },
  {
    question: "同",
    options: {
      jp: ["おなじ", "ちがう", "あるく", "みる"],
      en: ["Same", "Different", "Walk", "See"] },
    answer: {
      jp: "おなじ",
      en: "Same" }
  },
  {
    question: "肉",
    options: {
      jp: ["にく", "さかな", "やさい", "くだもの"],
      en: ["Meat", "Fish", "Vegetable", "Fruit"] },
    answer: {
      jp: "にく",
      en: "Meat" }
  },
  {
    question: "色",
    options: {
      jp: ["いろ", "ことば", "かんじ", "もの"],
      en: ["Color", "Word", "Kanji", "Thing"] },
    answer: {
      jp: "いろ",
      en: "Color" }
  },
  {
    question: "早",
    options: {
      jp: ["はやい", "おそい", "ひくい", "たかい"],
      en: ["Early", "Late", "Low", "High"] },
    answer: {
      jp: "はやい",
      en: "Early" }
  },
  {
    question: "地",
    options: {
      jp: ["ち", "そら", "みぎ", "ひだり"],
      en: ["Ground", "Sky", "Right", "Left"] },
    answer: {
      jp: "ち",
      en: "Ground" }
  },
  {
    question: "池",
    options: {
      jp: ["いけ", "かわ", "うみ", "みず"],
      en: ["Pond", "River", "Sea", "Water"] },
    answer: {
      jp: "いけ",
      en: "Pond" }
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
    question: "体",
    options: {
      jp: ["からだ", "あたま", "て", "あし"],
      en: ["Body", "Head", "Hand", "Foot"] },
    answer: {
      jp: "からだ",
      en: "Body" }
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
    question: "低",
    options: {
      jp: ["ひくい", "たかい", "おおきい", "ちいさい"],
      en: ["Low", "High", "Big", "Small"] },
    answer: {
      jp: "ひくい",
      en: "Low" }
  },
  {
    question: "弟",
    options: {
      jp: ["おとうと", "あに", "おねえさん", "いもうと"],
      en: ["Younger Brother", "Elder Brother", "Elder Sister", "Younger Sister"] },
    answer: {
      jp: "おとうと",
      en: "Younger Brother" }
  },
  {
    question: "走",
    options: {
      jp: ["はしる", "いく", "くる", "みる"],
      en: ["Run", "Go", "Come", "See"] },
    answer: {
      jp: "はしる",
      en: "Run" }
  },
  // 赤	図	究	声	売	別	医	近	私	作	住	者	事
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
    question: "図",
    options: {
      jp: ["ず", "もの", "いろ", "ことば"],
      en: ["Diagram", "Thing", "Color", "Word"] },
    answer: {
      jp: "ず",
      en: "Diagram" }
  },
  {
    question: "究",
    options: {
      jp: ["きゅう", "けん", "もの", "ことば"],
      en: ["Research", "Study", "Thing", "Word"] },
    answer: {
      jp: "きゅう",
      en: "Research" }
  },
  {
    question: "声",
    options: {
      jp: ["こえ", "ひと", "もの", "みず"],
      en: ["Voice", "Person", "Thing", "Water"] },
    answer: {
      jp: "こえ",
      en: "Voice" }
  },
  {
    question: "売",
    options: {
      jp: ["うる", "かう", "いく", "くる"],
      en: ["Sell", "Buy", "Go", "Come"] },
    answer: {
      jp: "うる",
      en: "Sell" }
  },
  {
    question: "別",
    options: {
      jp: ["べつ", "おなじ", "いく", "くる"],
      en: ["Separate", "Same", "Go", "Come"] },
    answer: {
      jp: "べつ",
      en: "Separate" }
  },
  {
    question: "医",
    options: {
      jp: ["い", "な", "は", "と"],
      en: ["Medical", "Teeth", "Nose", "Sword"] },
    answer: {
      jp: "い",
      en: "Medical" }
  },
  {
    question: "近",
    options: {
      jp: ["ちかい", "とおい", "たかい", "ひくい"],
      en: ["Near", "Far", "High", "Low"] },
    answer: {
      jp: "ちかい",
      en: "Near" }
  },
  {
    question: "私",
    options: {
      jp: ["わたし", "あなた", "かれ", "かのじょ"],
      en: ["I", "You", "He", "She"] },
    answer: {
      jp: "わたし",
      en: "I" }
  },
  {
    question: "作",
    options: {
      jp: ["つくる", "いく", "くる", "みる"],
      en: ["Make", "Go", "Come", "See"] },
    answer: {
      jp: "つくる",
      en: "Make" }
  },
  {
    question: "住",
    options: {
      jp: ["すむ", "いく", "くる", "みる"],
      en: ["Live", "Go", "Come", "See"] },
    answer: {
      jp: "すむ",
      en: "Live" }
  },
  {
    question: "者",
    options: {
      jp: ["もの", "いぬ", "とり", "うみ"],
      en: ["Person", "Dog", "Bird", "Sea"] },
    answer: {
      jp: "もの",
      en: "Person" }
  },
  {
    question: "事",
    options: {
      jp: ["こと", "もの", "ひと", "いえ"],
      en: ["Thing", "Thing", "Person", "House"] },
    answer: {
      jp: "こと",
      en: "Thing" }
  },
  // 使	始	姉	英	京	画	妹	味	服	物	歩	門	夜
  {
    question: "使",
    options: {
      jp: ["つかう", "いく", "くる", "みる"],
      en: ["Use", "Go", "Come", "See"] },
    answer: {
      jp: "つかう",
      en: "Use" }
  },
  {
    question: "始",
    options: {
      jp: ["はじまる", "おわる", "いく", "くる"],
      en: ["Begin", "End", "Go", "Come"] },
    answer: {
      jp: "はじまる",
      en: "Begin" }
  },
  {
    question: "姉",
    options: {
      jp: ["あね", "おとうと", "おねえさん", "いもうと"],
      en: ["Elder Sister", "Younger Brother", "Elder Sister", "Younger Sister"] },
    answer: {
      jp: "あね",
      en: "Elder Sister" }
  },
  {
    question: "英",
    options: {
      jp: ["えいご", "にほんご", "ちゅうごくご", "かんこくご"],
      en: ["English", "Japanese", "Chinese", "Korean"] },
    answer: {
      jp: "えいご",
      en: "English" }
  },
  {
    question: "京",
    options: {
      jp: ["きょうと", "とうきょう", "なごや", "おおさか"],
      en: ["Kyoto", "Tokyo", "Nagoya", "Osaka"] },
    answer: {
      jp: "きょうと",
      en: "Kyoto" }
  },
  {
    question: "画",
    options: {
      jp: ["え", "かんじ", "ことば", "もの"],
      en: ["Picture", "Kanji", "Word", "Thing"] },
    answer: {
      jp: "え",
      en: "Picture" }
  },
  {
    question: "妹",
    options: {
      jp: ["いもうと", "あね", "おとうと", "おねえさん"],
      en: ["Younger Sister", "Elder Sister", "Younger Brother", "Elder Sister"] },
    answer: {
      jp: "いもうと",
      en: "Younger Sister" }
  },
  {
    question: "味",
    options: {
      jp: ["あじ", "いろ", "かんじ", "ことば"],
      en: ["Taste", "Color", "Kanji", "Word"] },
    answer: {
      jp: "あじ",
      en: "Taste" }
  },
  {
    question: "服",
    options: {
      jp: ["ふく", "くつ", "ぼうし", "てぶくろ"],
      en: ["Clothes", "Shoes", "Hat", "Gloves"] },
    answer: {
      jp: "ふく",
      en: "Clothes" }
  },
  {
    question: "物",
    options: {
      jp: ["もの", "ことば", "ひと", "いえ"],
      en: ["Thing", "Word", "Person", "House"] },
    answer: {
      jp: "もの",
      en: "Thing" }
  },
  {
    question: "歩",
    options: {
      jp: ["あるく", "いく", "くる", "みる"],
      en: ["Walk", "Go", "Come", "See"] },
    answer: {
      jp: "あるく",
      en: "Walk" }
  },
  {
    question: "門",
    options: {
      jp: ["もん", "いえ", "くる", "いく"],
      en: ["Gate", "House", "Come", "Go"] },
    answer: {
      jp: "もん",
      en: "Gate" }
  },
  {
    question: "夜",
    options: {
      jp: ["よる", "あさ", "ひる", "まいにち"],
      en: ["Night", "Morning", "Afternoon", "Everyday"] },
    answer: {
      jp: "よる",
      en: "Night" }
  },
  // 明	林	青	所	注	知	昼	茶	待	洗	送	品	洋
  {
    question: "明",
    options: {
      jp: ["あかるい", "くらい", "あおい", "しろい"],
      en: ["Bright", "Dark", "Blue", "White"] },
    answer: {
      jp: "あかるい",
      en: "Bright" }
  },
  {
    question: "林",
    options: {
      jp: ["はやし", "もり", "かわ", "うみ"],
      en: ["Forest", "Wood", "River", "Sea"] },
    answer: {
      jp: "はやし",
      en: "Forest" }
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
    question: "所",
    options: {
      jp: ["ところ", "もの", "ひと", "いえ"],
      en: ["Place", "Thing", "Person", "House"] },
    answer: {
      jp: "ところ",
      en: "Place" }
  },
  {
    question: "注",
    options: {
      jp: ["ちゅうい", "いえ", "もの", "ところ"],
      en: ["Notice", "House", "Thing", "Place"] },
    answer: {
      jp: "ちゅうい",
      en: "Notice" }
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
    question: "昼",
    options: {
      jp: ["ひる", "あさ", "よる", "あした"],
      en: ["Daytime", "Morning", "Night", "Tomorrow"] },
    answer: {
      jp: "ひる",
      en: "Daytime" }
  },
  {
    question: "茶",
    options: {
      jp: ["ちゃ", "こうちゃ", "みず", "おちゃ"],
      en: ["Tea", "Black Tea", "Water", "Green Tea"] },
    answer: {
      jp: "ちゃ",
      en: "Tea" }
  },
  {
    question: "待",
    options: {
      jp: ["まつ", "いく", "くる", "みる"],
      en: ["Wait", "Go", "Come", "See"] },
    answer: {
      jp: "まつ",
      en: "Wait" }
  },
  {
    question: "洗",
    options: {
      jp: ["あらう", "いく", "くる", "みる"],
      en: ["Wash", "Go", "Come", "See"] },
    answer: {
      jp: "あらう",
      en: "Wash" }
  },
  {
    question: "送",
    options: {
      jp: ["おくる", "いく", "くる", "みる"],
      en: ["Send", "Go", "Come", "See"] },
    answer: {
      jp: "おくる",
      en: "Send" }
  },
  {
    question: "品",
    options: {
      jp: ["しな", "もの", "ことば", "ひと"],
      en: ["Item", "Thing", "Word", "Person"] },
    answer: {
      jp: "しな",
      en: "Item" }
  },
  {
    question: "洋",
    options: {
      jp: ["よう", "ひがし", "にし", "きた"],
      en: ["Western", "East", "West", "North"] },
    answer: {
      jp: "よう",
      en: "Western" }
  },
  // 便	風	発	度	映	海	界	屋	音	急	計	建	研
  {
    question: "便",
    options: {
      jp: ["びん", "かわ", "いろ", "もの"],
      en: ["Convenience", "River", "Color", "Thing"] },
    answer: {
      jp: "びん",
      en: "Convenience" }
  },
  {
    question: "風",
    options: {
      jp: ["かぜ", "あめ", "ゆき", "ひ"],
      en: ["Wind", "Rain", "Snow", "Sun"] },
    answer: {
      jp: "かぜ",
      en: "Wind" }
  },
  {
    question: "発",
    options: {
      jp: ["はつ", "たち", "いる", "おる"],
      en: ["Departure", "Stand", "Exist", "Exist"] },
    answer: {
      jp: "はつ",
      en: "Departure" }
  },
  {
    question: "度",
    options: {
      jp: ["ど", "いく", "くる", "みる"],
      en: ["Degree", "Go", "Come", "See"] },
    answer: {
      jp: "ど",
      en: "Degree" }
  },
  {
    question: "映",
    options: {
      jp: ["うつす", "いく", "くる", "みる"],
      en: ["Reflect", "Go", "Come", "See"] },
    answer: {
      jp: "うつす",
      en: "Reflect" }
  },
  {
    question: "海",
    options: {
      jp: ["うみ", "そら", "もり", "みず"],
      en: ["Sea", "Sky", "Forest", "Water"] },
    answer: {
      jp: "うみ",
      en: "Sea" }
  },
  {
    question: "界",
    options: {
      jp: ["かい", "ひ", "とし", "くに"],
      en: ["World", "Sun", "Year", "Country"] },
    answer: {
      jp: "かい",
      en: "World" }
  },
  {
    question: "屋",
    options: {
      jp: ["や", "うち", "まち", "うみ"],
      en: ["Shop", "House", "Town", "Sea"] },
    answer: {
      jp: "や",
      en: "Shop" }
  },
  {
    question: "音",
    options: {
      jp: ["おと", "ひと", "もの", "ところ"],
      en: ["Sound", "Person", "Thing", "Place"] },
    answer: {
      jp: "おと",
      en: "Sound" }
  },
  {
    question: "急",
    options: {
      jp: ["いそぐ", "あるく", "およぐ", "のる"],
      en: ["Urgent", "Walk", "Swim", "Ride"] },
    answer: {
      jp: "いそぐ",
      en: "Urgent" }
  },
  {
    question: "計",
    options: {
      jp: ["けい", "いく", "くる", "みる"],
      en: ["Plan", "Go", "Come", "See"] },
    answer: {
      jp: "けい",
      en: "Plan" }
  },
  {
    question: "建",
    options: {
      jp: ["たてる", "いく", "くる", "みる"],
      en: ["Build", "Go", "Come", "See"] },
    answer: {
      jp: "たてる",
      en: "Build" }
  },
  {
    question: "研",
    options: {
      jp: ["けん", "かわ", "いろ", "もの"],
      en: ["Study", "River", "Color", "Thing"] },
    answer: {
      jp: "けん",
      en: "Study" }
  },
  // 県	思	乗	重	春	室	持	首	秋	借	弱	紙	帰
  {
    question: "県",
    options: {
      jp: ["けん", "し", "いち", "く"],
      en: ["Prefecture", "City", "One", "Nine"] },
    answer: {
      jp: "けん",
      en: "Prefecture" }
  },
  {
    question: "思",
    options: {
      jp: ["おもう", "いく", "くる", "みる"],
      en: ["Think", "Go", "Come", "See"] },
    answer: {
      jp: "おもう",
      en: "Think" }
  },
  {
    question: "乗",
    options: {
      jp: ["のる", "あるく", "およぐ", "たてる"],
      en: ["Ride", "Walk", "Swim", "Build"] },
    answer: {
      jp: "のる",
      en: "Ride" }
  },
  {
    question: "重",
    options: {
      jp: ["おもい", "かるい", "あおい", "しろい"],
      en: ["Heavy", "Light", "Blue", "White"] },
    answer: {
      jp: "おもい",
      en: "Heavy" }
  },
  {
    question: "春",
    options: {
      jp: ["はる", "あき", "ふゆ", "なつ"],
      en: ["Spring", "Autumn", "Winter", "Summer"] },
    answer: {
      jp: "はる",
      en: "Spring" }
  },
  {
    question: "室",
    options: {
      jp: ["しつ", "いしき", "だん", "ようしき"],
      en: ["Room", "Knowledge", "Step", "Form"] },
    answer: {
      jp: "しつ",
      en: "Room" }
  },
  {
    question: "持",
    options: {
      jp: ["もつ", "あるく", "およぐ", "たてる"],
      en: ["Hold", "Walk", "Swim", "Build"] },
    answer: {
      jp: "もつ",
      en: "Hold" }
  },
  {
    question: "首",
    options: {
      jp: ["くび", "あし", "て", "てく"],
      en: ["Neck", "Leg", "Hand", "Foot"] },
    answer: {
      jp: "くび",
      en: "Neck" }
  },
  {
    question: "秋",
    options: {
      jp: ["あき", "はる", "ふゆ", "なつ"],
      en: ["Autumn", "Spring", "Winter", "Summer"] },
    answer: {
      jp: "あき",
      en: "Autumn" }
  },
  {
    question: "借",
    options: {
      jp: ["かりる", "かえる", "みる", "いく"],
      en: ["Borrow", "Return", "See", "Go"] },
    answer: {
      jp: "かりる",
      en: "Borrow" }
  },
  {
    question: "弱",
    options: {
      jp: ["よわい", "つよい", "あおい", "くろい"],
      en: ["Weak", "Strong", "Blue", "Black"] },
    answer: {
      jp: "よわい",
      en: "Weak" }
  },
  {
    question: "紙",
    options: {
      jp: ["かみ", "いろ", "ことば", "もの"],
      en: ["Paper", "Color", "Word", "Thing"] },
    answer: {
      jp: "かみ",
      en: "Paper" }
  },
  {
    question: "帰",
    options: {
      jp: ["かえる", "かりる", "みる", "いく"],
      en: ["Return", "Borrow", "See", "Go"] },
    answer: {
      jp: "かえる",
      en: "Return" }
  },
  // 起	夏	家	院	員	病	勉	特	旅	料	真	通	鳥
  {
    question: "起",
    options: {
      jp: ["おきる", "あるく", "およぐ", "たてる"],
      en: ["Wake Up", "Walk", "Swim", "Build"] },
    answer: {
      jp: "おきる",
      en: "Wake Up" }
  },
  {
    question: "夏",
    options: {
      jp: ["なつ", "あき", "ふゆ", "はる"],
      en: ["Summer", "Autumn", "Winter", "Spring"] },
    answer: {
      jp: "なつ",
      en: "Summer" }
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
    question: "院",
    options: {
      jp: ["いん", "かん", "ひん", "ちん"],
      en: ["Institution", "Building", "Book", "Sword"] },
    answer: {
      jp: "いん",
      en: "Institution" }
  },
  {
    question: "員",
    options: {
      jp: ["いん", "かん", "ひん", "ちん"],
      en: ["Member", "Building", "Book", "Sword"] },
    answer: {
      jp: "いん",
      en: "Member" }
  },
  {
    question: "病",
    options: {
      jp: ["びょう", "ことば", "いろ", "もの"],
      en: ["Illness", "Word", "Color", "Thing"] },
    answer: {
      jp: "びょう",
      en: "Illness" }
  },
  {
    question: "勉",
    options: {
      jp: ["べん", "かん", "ひん", "ちん"],
      en: ["Diligence", "Building", "Book", "Sword"] },
    answer: {
      jp: "べん",
      en: "Diligence" }
  },
  {
    question: "特",
    options: {
      jp: ["とく", "つう", "せつ", "そく"],
      en: ["Special", "Communication", "Set", "Instant"] },
    answer: {
      jp: "とく",
      en: "Special" }
  },
  {
    question: "旅",
    options: {
      jp: ["たび", "いく", "くる", "みる"],
      en: ["Travel", "Go", "Come", "See"] },
    answer: {
      jp: "たび",
      en: "Travel" }
  },
  {
    question: "料",
    options: {
      jp: ["りょう", "かん", "ひん", "ちん"],
      en: ["Fee", "Building", "Book", "Sword"] },
    answer: {
      jp: "りょう",
      en: "Fee" }
  },
  {
    question: "真",
    options: {
      jp: ["ま", "あか", "きいろ", "しろい"],
      en: ["Truth", "Red", "Yellow", "White"] },
    answer: {
      jp: "ま",
      en: "Truth" }
  },
  {
    question: "通",
    options: {
      jp: ["つう", "つる", "いろ", "もの"],
      en: ["Pass", "Fish", "Color", "Thing"] },
    answer: {
      jp: "つう",
      en: "Pass" }
  },
  {
    question: "鳥",
    options: {
      jp: ["とり", "いぬ", "ねこ", "うし"],
      en: ["Bird", "Dog", "Cat", "Cow"] },
    answer: {
      jp: "とり",
      en: "Bird" }
  },
  // 転	族	進	理	野	問	都	堂	動	悪	強	教	産
  {
    question: "転",
    options: {
      jp: ["てん", "かわ", "いろ", "もの"],
      en: ["Turn", "River", "Color", "Thing"] },
    answer: {
      jp: "てん",
      en: "Turn" }
  },
  {
    question: "族",
    options: {
      jp: ["ぞく", "かぶ", "いし", "ちく"],
      en: ["Tribe", "Head", "Stone", "Knowledge"] },
    answer: {
      jp: "ぞく",
      en: "Tribe" }
  },
  {
    question: "進",
    options: {
      jp: ["すすむ", "もどる", "とどく", "きえる"],
      en: ["Advance", "Return", "Arrive", "Disappear"] },
    answer: {
      jp: "すすむ",
      en: "Advance" }
  },
  {
    question: "理",
    options: {
      jp: ["り", "いろ", "ことば", "もの"],
      en: ["Reason", "Color", "Word", "Thing"] },
    answer: {
      jp: "り",
      en: "Reason" }
  },
  {
    question: "野",
    options: {
      jp: ["の", "いろ", "ことば", "もの"],
      en: ["Field", "Color", "Word", "Thing"] },
    answer: {
      jp: "の",
      en: "Field" }
  },
  {
    question: "問",
    options: {
      jp: ["もん", "いろ", "ことば", "もの"],
      en: ["Question", "Color", "Word", "Thing"] },
    answer: {
      jp: "もん",
      en: "Question" }
  },
  {
    question: "都",
    options: {
      jp: ["と", "まち", "しな", "むら"],
      en: ["Capital", "Town", "City", "Village"]
    },
    answer: {
      jp: "と",
      en: "Capital"
    }
  },  
  {
    question: "堂",
    options: {
      jp: ["どう", "いし", "ことば", "もの"],
      en: ["Hall", "Stone", "Word", "Thing"] },
    answer: {
      jp: "どう",
      en: "Hall" }
  },
  {
    question: "動",
    options: {
      jp: ["うごく", "みる", "いく", "くる"],
      en: ["Move", "See", "Go", "Come"] },
    answer: {
      jp: "うごく",
      en: "Move" }
  },
  {
    question: "悪",
    options: {
      jp: ["わるい", "いい", "あかい", "あおい"],
      en: ["Bad", "Good", "Red", "Blue"] },
    answer: {
      jp: "わるい",
      en: "Bad" }
  },
  {
    question: "強",
    options: {
      jp: ["つよい", "よわい", "あおい", "くろい"],
      en: ["Strong", "Weak", "Blue", "Black"] },
    answer: {
      jp: "つよい",
      en: "Strong" }
  },
  {
    question: "教",
    options: {
      jp: ["きょう", "あか", "きいろ", "しろい"],
      en: ["Teach", "Red", "Yellow", "White"] },
    answer: {
      jp: "きょう",
      en: "Teach" }
  },
  {
    question: "産",
    options: {
      jp: ["さん", "くに", "こと", "みず"],
      en: ["Produce", "Country", "Thing", "Water"] },
    answer: {
      jp: "さん",
      en: "Produce" }
  },
  // 黒	菜	終	習	集	場	寒	軽	運	開	飯	答	森
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
    question: "菜",
    options: {
      jp: ["な", "いろ", "ことば", "みず"],
      en: ["Vegetable", "Color", "Word", "Water"] },
    answer: {
      jp: "な",
      en: "Vegetable" }
  },
  {
    question: "終",
    options: {
      jp: ["おわる", "はじまる", "すすむ", "とどく"],
      en: ["Finish", "Begin", "Advance", "Arrive"] },
    answer: {
      jp: "おわる",
      en: "Finish" }
  },
  {
    question: "習",
    options: {
      jp: ["ならう", "おそう", "およぐ", "まなぶ"],
      en: ["Learn", "Teach", "Swim", "Study"] },
    answer: {
      jp: "ならう",
      en: "Learn" }
  },
  {
    question: "集",
    options: {
      jp: ["あつまる", "とどく", "もどる", "でる"],
      en: ["Gather", "Arrive", "Return", "Exit"] },
    answer: {
      jp: "あつまる",
      en: "Gather" }
  },
  {
    question: "場",
    options: {
      jp: ["ば", "もの", "みず", "くも"],
      en: ["Place", "Thing", "Water", "Cloud"] },
    answer: {
      jp: "ば",
      en: "Place" }
  },
  {
    question: "寒",
    options: {
      jp: ["さむい", "あつい", "あおい", "くろい"],
      en: ["Cold", "Hot", "Blue", "Black"] },
    answer: {
      jp: "さむい",
      en: "Cold" }
  },
  {
    question: "軽",
    options: {
      jp: ["かるい", "おもい", "くろい", "あかい"],
      en: ["Light", "Heavy", "Black", "Red"] },
    answer: {
      jp: "かるい",
      en: "Light" }
  },
  {
    question: "運",
    options: {
      jp: ["うん", "かぶ", "かわ", "くに"],
      en: ["Luck", "Head", "River", "Country"] },
    answer: {
      jp: "うん",
      en: "Luck" }
  },
  {
    question: "開",
    options: {
      jp: ["ひらく", "とじる", "おくる", "はいる"],
      en: ["Open", "Close", "Send", "Enter"] },
    answer: {
      jp: "ひらく",
      en: "Open" }
  },
  {
    question: "飯",
    options: {
      jp: ["めし", "いろ", "ことば", "みず"],
      en: ["Rice", "Color", "Word", "Water"] },
    answer: {
      jp: "めし",
      en: "Rice" }
  },
  {
    question: "答",
    options: {
      jp: ["こたえ", "いろ", "ことば", "みず"],
      en: ["Answer", "Color", "Word", "Water"] },
    answer: {
      jp: "こたえ",
      en: "Answer" }
  },
  {
    question: "森",
    options: {
      jp: ["もり", "うみ", "そら", "やま"],
      en: ["Forest", "Sea", "Sky", "Mountain"] },
    answer: {
      jp: "もり",
      en: "Forest" }
  },
  // 暑	朝	貸	着	短	働	楽	暗	意	遠	漢	業	試
  {
    question: "暑",
    options: {
      jp: ["あつい", "さむい", "あかい", "みどり"],
      en: ["Hot", "Cold", "Red", "Green"] },
    answer: {
      jp: "あつい",
      en: "Hot" }
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
    question: "貸",
    options: {
      jp: ["かす", "かりる", "みる", "いく"],
      en: ["Lend", "Borrow", "See", "Go"] },
    answer: {
      jp: "かす",
      en: "Lend" }
  },
  {
    question: "着",
    options: {
      jp: ["きる", "ぬぐ", "みる", "いく"],
      en: ["Wear", "Take Off", "See", "Go"] },
    answer: {
      jp: "きる",
      en: "Wear" }
  },
  {
    question: "短",
    options: {
      jp: ["みじかい", "ながい", "あかい", "くろい"],
      en: ["Short", "Long", "Red", "Black"] },
    answer: {
      jp: "みじかい",
      en: "Short" }
  },
  {
    question: "働",
    options: {
      jp: ["はたらく", "やすむ", "ねる", "たべる"],
      en: ["Work", "Rest", "Sleep", "Eat"] },
    answer: {
      jp: "はたらく",
      en: "Work" }
  },
  {
    question: "楽",
    options: {
      jp: ["たのしい", "つらい", "あかい", "みどり"],
      en: ["Enjoyable", "Tough", "Red", "Green"] },
    answer: {
      jp: "たのしい",
      en: "Enjoyable" }
  },
  {
    question: "暗",
    options: {
      jp: ["くらい", "あかい", "しろい", "みどり"],
      en: ["Dark", "Red", "White", "Green"] },
    answer: {
      jp: "くらい",
      en: "Dark" }
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
    question: "遠",
    options: {
      jp: ["とおい", "ちかい", "あかい", "くろい"],
      en: ["Distant", "Near", "Red", "Black"] },
    answer: {
      jp: "とおい",
      en: "Distant" }
  },
  {
    question: "漢",
    options: {
      jp: ["かん", "がく", "げん", "けん"],
      en: ["Chinese Characters", "Learning", "Origin", "Sword"] },
    answer: {
      jp: "かん",
      en: "Chinese Characters" }
  },
  {
    question: "業",
    options: {
      jp: ["ぎょう", "けい", "げん", "けん"],
      en: ["Business", "Business", "Origin", "Sword"] },
    answer: {
      jp: "ぎょう",
      en: "Business" }
  },
  {
    question: "試",
    options: {
      jp: ["ためす", "しっる", "かぶる", "みる"],
      en: ["Try", "Know", "Wear", "See"] },
    answer: {
      jp: "ためす",
      en: "Try" }
  },
  // 銀	歌	説	質	館	親	頭	薬	曜	題	顔	験
  {
    question: "銀",
    options: {
      jp: ["ぎん", "きん", "さん", "たん"],
      en: ["Silver", "Gold", "Copper", "Tin"] },
    answer: {
      jp: "ぎん",
      en: "Silver" }
  },
  {
    question: "歌",
    options: {
      jp: ["うた", "よる", "あさ", "こと"],
      en: ["Song", "Night", "Morning", "Thing"] },
    answer: {
      jp: "うた",
      en: "Song" }
  },
  {
    question: "説",
    options: {
      jp: ["せつ", "じつ", "しん", "よう"],
      en: ["Explanation", "Reality", "Truth", "Appearance"] },
    answer: {
      jp: "せつ",
      en: "Explanation" }
  },
  {
    question: "質",
    options: {
      jp: ["しつ", "しこう", "しん", "しき"],
      en: ["Quality", "Tendency", "Truth", "Color"] },
    answer: {
      jp: "しつ",
      en: "Quality" }
  },
  {
    question: "館",
    options: {
      jp: ["かん", "いえ", "ちく", "しつ"],
      en: ["Building", "House", "District", "Quality"] },
    answer: {
      jp: "かん",
      en: "Building" }
  },
  {
    question: "親",
    options: {
      jp: ["おや", "きょう", "きん", "かん"],
      en: ["Parent", "Teaching", "Gold", "Building"] },
    answer: {
      jp: "おや",
      en: "Parent" }
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
    question: "薬",
    options: {
      jp: ["くすり", "あめ", "みず", "ケーキ"],
      en: ["Medicine", "Candy", "Water", "Cake"] },
    answer: {
      jp: "くすり",
      en: "Medicine" }
  },
  {
    question: "曜",
    options: {
      jp: ["よう", "まい", "こと", "ひ"],
      en: ["Day of the Week", "Every", "Thing", "Sun"] },
    answer: {
      jp: "よう",
      en: "Day of the Week" }
  },
  {
    question: "題",
    options: {
      jp: ["だい", "いろ", "こと", "ため"],
      en: ["Topic", "Color", "Thing", "Sake"] },
    answer: {
      jp: "だい",
      en: "Topic" }
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
    question: "験",
    options: {
      jp: ["けん", "ごん", "かん", "はん"],
      en: ["Experience", "Authority", "Sight", "Half"] },
    answer: {
      jp: "けん",
      en: "Experience" }
  },
  // N3
  // 丸	久	才	支	戸	欠	王	化	内	反	比	夫	仏
  {
    question: "丸",
    options: {
      jp: ["まる", "さん", "ほし", "たいよう"],
      en: ["Circle", "Three", "Star", "Sun"] },
    answer: {
      jp: "まる",
      en: "Circle" }
  },
  {
    question: "久",
    options: {
      jp: ["ひさしい", "さき", "ちかい", "とおい"],
      en: ["Long Time", "Before", "Near", "Distant"] },
    answer: {
      jp: "ひさしい",
      en: "Long Time" }
  },
  {
    question: "才",
    options: {
      jp: ["さい", "さん", "ほし", "たいよう"],
      en: ["Talent", "Three", "Star", "Sun"] },
    answer: {
      jp: "さい",
      en: "Talent" }
  },
  {
    question: "支",
    options: {
      jp: ["ささえる", "さく", "ほし", "たいよう"],
      en: ["Support", "Blossom", "Star", "Sun"] },
    answer: {
      jp: "ささえる",
      en: "Support" }
  },
  {
    question: "戸",
    options: {
      jp: ["と", "いえ", "はこ", "うえ"],
      en: ["Door", "House", "Box", "Up"] },
    answer: {
      jp: "と",
      en: "Door" }
  },
  {
    question: "欠",
    options: {
      jp: ["かける", "ぬぐ", "ほし", "たいよう"],
      en: ["Lack", "Take Off", "Star", "Sun"] },
    answer: {
      jp: "かける",
      en: "Lack" }
  },
  {
    question: "王",
    options: {
      jp: ["おう", "さん", "ほし", "たいよう"],
      en: ["King", "Three", "Star", "Sun"] },
    answer: {
      jp: "おう",
      en: "King" }
  },
  {
    question: "化",
    options: {
      jp: ["か", "さん", "ほし", "たいよう"],
      en: ["Change", "Three", "Star", "Sun"] },
    answer: {
      jp: "か",
      en: "Change" }
  },
  {
    question: "内",
    options: {
      jp: ["うち", "いえ", "はこ", "うえ"],
      en: ["Inside", "House", "Box", "Up"] },
    answer: {
      jp: "うち",
      en: "Inside" }
  },
  {
    question: "反",
    options: {
      jp: ["そる", "さん", "ほし", "たいよう"],
      en: ["Opposite", "Three", "Star", "Sun"] },
    answer: {
      jp: "そる",
      en: "Opposite" }
  },
  {
    question: "比",
    options: {
      jp: ["くらべる", "さく", "ほし", "たいよう"],
      en: ["Compare", "Blossom", "Star", "Sun"] },
    answer: {
      jp: "くらべる",
      en: "Compare" }
  },
  {
    question: "夫",
    options: {
      jp: ["おっと", "さく", "ほし", "たいよう"],
      en: ["Husband", "Blossom", "Star", "Sun"] },
    answer: {
      jp: "おっと",
      en: "Husband" }
  },
  {
    question: "仏",
    options: {
      jp: ["ほとけ", "さく", "ほし", "たいよう"],
      en: ["Buddha", "Blossom", "Star", "Sun"] },
    answer: {
      jp: "ほとけ",
      en: "Buddha" }
  },
  // 毛	予	由	未	布	包	末	平	辺	氷	付	皮	犯
  {
    question: "毛",
    options: {
      jp: ["け", "いぬ", "ねこ", "うし"],
      en: ["Fur", "Dog", "Cat", "Cow"] },
    answer: {
      jp: "け",
      en: "Fur" }
  },
  {
    question: "予",
    options: {
      jp: ["よ", "いる", "みる", "くる"],
      en: ["Beforehand", "To Be", "To See", "To Come"] },
    answer: {
      jp: "よ",
      en: "Beforehand" }
  },
  {
    question: "由",
    options: {
      jp: ["ゆ", "いる", "みる", "くる"],
      en: ["Reason", "To Be", "To See", "To Come"] },
    answer: {
      jp: "ゆ",
      en: "Reason" }
  },
  {
    question: "未",
    options: {
      jp: ["み", "いる", "みる", "くる"],
      en: ["Not Yet", "To Be", "To See", "To Come"] },
    answer: {
      jp: "み",
      en: "Not Yet" }
  },
  {
    question: "布",
    options: {
      jp: ["ぬの", "いる", "みる", "くる"],
      en: ["Cloth", "To Be", "To See", "To Come"] },
    answer: {
      jp: "ぬの",
      en: "Cloth" }
  },
  {
    question: "包",
    options: {
      jp: ["つつむ", "いる", "みる", "くる"],
      en: ["Wrap", "To Be", "To See", "To Come"] },
    answer: {
      jp: "つつむ",
      en: "Wrap" }
  },
  {
    question: "末",
    options: {
      jp: ["すえ", "うえ", "した", "まえ"],
      en: ["End", "Up", "Down", "Front"] },
    answer: {
      jp: "すえ",
      en: "End" }
  },
  {
    question: "平",
    options: {
      jp: ["たいら", "うえ", "した", "まえ"],
      en: ["Flat", "Up", "Down", "Front"] },
    answer: {
      jp: "たいら",
      en: "Flat" }
  },
  {
    question: "辺",
    options: {
      jp: ["へん", "うえ", "した", "まえ"],
      en: ["Side", "Up", "Down", "Front"] },
    answer: {
      jp: "へん",
      en: "Side" }
  },
  {
    question: "氷",
    options: {
      jp: ["こおり", "ゆき", "あめ", "かぜ"],
      en: ["Ice", "Snow", "Rain", "Wind"] },
    answer: {
      jp: "こおり",
      en: "Ice" }
  },
  {
    question: "付",
    options: {
      jp: ["つける", "とる", "ある", "くる"],
      en: ["Attach", "Remove", "Exist", "Come"] },
    answer: {
      jp: "つける",
      en: "Attach" }
  },
  {
    question: "皮",
    options: {
      jp: ["かわ", "とる", "ある", "くる"],
      en: ["Skin", "Remove", "Exist", "Come"] },
    answer: {
      jp: "かわ",
      en: "Skin" }
  },
  {
    question: "犯",
    options: {
      jp: ["おかす", "とる", "ある", "くる"],
      en: ["Commit a Crime", "Remove", "Exist", "Come"] },
    answer: {
      jp: "おかす",
      en: "Commit a Crime" }
  },
  // 必	石	他	打	加	可	央	刊	玉	旧	号	皿	札
  {
    question: "必",
    options: {
      jp: ["かならず", "いる", "みる", "くる"],
      en: ["Necessary", "To Be", "To See", "To Come"] },
    answer: {
      jp: "かならず",
      en: "Necessary" }
  },
  {
    question: "石",
    options: {
      jp: ["いし", "いる", "みる", "くる"],
      en: ["Stone", "To Be", "To See", "To Come"] },
    answer: {
      jp: "いし",
      en: "Stone" }
  },
  {
    question: "他",
    options: {
      jp: ["ほか", "いる", "みる", "くる"],
      en: ["Other", "To Be", "To See", "To Come"] },
    answer: {
      jp: "ほか",
      en: "Other" }
  },
  {
    question: "打",
    options: {
      jp: ["うつ", "いる", "みる", "くる"],
      en: ["Hit", "To Be", "To See", "To Come"] },
    answer: {
      jp: "うつ",
      en: "Hit" }
  },
  {
    question: "加",
    options: {
      jp: ["くわえる", "とる", "ある", "くる"],
      en: ["Add", "Remove", "Exist", "Come"] },
    answer: {
      jp: "くわえる",
      en: "Add" }
  },
  {
    question: "可",
    options: {
      jp: ["か", "とる", "ある", "くる"],
      en: ["Possible", "Remove", "Exist", "Come"] },
    answer: {
      jp: "か",
      en: "Possible" }
  },
  {
    question: "央",
    options: {
      jp: ["おう", "あさ", "ひる", "ゆうがた"],
      en: ["Center", "Morning", "Noon", "Evening"] },
    answer: {
      jp: "おう",
      en: "Center" }
  },
  {
    question: "刊",
    options: {
      jp: ["かん", "あさ", "ひる", "ゆうがた"],
      en: ["Publication", "Morning", "Noon", "Evening"] },
    answer: {
      jp: "かん",
      en: "Publication" }
  },
  {
    question: "玉",
    options: {
      jp: ["たま", "ほし", "あめ", "かぜ"],
      en: ["Ball", "Star", "Rain", "Wind"] },
    answer: {
      jp: "たま",
      en: "Ball" }
  },
  {
    question: "旧",
    options: {
      jp: ["きゅう", "ほし", "あめ", "ゆうがた"],
      en: ["Old", "Star", "Rain", "Evening"] },
    answer: {
      jp: "きゅう",
      en: "Old" }
  },
  {
    question: "号",
    options: {
      jp: ["ごう", "いち", "に", "さん"],
      en: ["Number", "One", "Two", "Three"] },
    answer: {
      jp: "ごう",
      en: "Number" }
  },
  {
    question: "皿",
    options: {
      jp: ["さら", "ほし", "あめ", "かぜ"],
      en: ["Plate", "Star", "Rain", "Wind"] },
    answer: {
      jp: "さら",
      en: "Plate" }
  },
  {
    question: "札",
    options: {
      jp: ["さつ", "ほし", "あめ", "かぜ"],
      en: ["Bill", "Star", "Rain", "Wind"] },
    answer: {
      jp: "さつ",
      en: "Bill" }
  },
  // 史	失	示	申	礼	令	列	老	式	州	寺	次	守
  {
    question: "史",
    options: {
      jp: ["し", "いる", "みる", "くる"],
      en: ["History", "To Be", "To See", "To Come"] },
    answer: {
      jp: "し",
      en: "History" }
  },
  {
    question: "失",
    options: {
      jp: ["うしなう", "いる", "みる", "くる"],
      en: ["Lose", "To Be", "To See", "To Come"] },
    answer: {
      jp: "うしなう",
      en: "Lose" }
  },
  {
    question: "示",
    options: {
      jp: ["しめす", "いる", "みる", "くる"],
      en: ["Show", "To Be", "To See", "To Come"] },
    answer: {
      jp: "しめす",
      en: "Show" }
  },
  {
    question: "申",
    options: {
      jp: ["もうす", "いる", "みる", "くる"],
      en: ["State", "To Be", "To See", "To Come"] },
    answer: {
      jp: "もうす",
      en: "State" }
  },
  {
    question: "礼",
    options: {
      jp: ["れい", "いる", "みる", "くる"],
      en: ["Thanks", "To Be", "To See", "To Come"] },
    answer: {
      jp: "れい",
      en: "Thanks" }
  },
  {
    question: "令",
    options: {
      jp: ["れい", "いる", "みる", "くる"],
      en: ["Order", "To Be", "To See", "To Come"] },
    answer: {
      jp: "れい",
      en: "Order" }
  },
  {
    question: "列",
    options: {
      jp: ["れつ", "いる", "みる", "くる"],
      en: ["Line", "To Be", "To See", "To Come"] },
    answer: {
      jp: "れつ",
      en: "Line" }
  },
  {
    question: "老",
    options: {
      jp: ["おい", "いる", "みる", "くる"],
      en: ["Old", "To Be", "To See", "To Come"] },
    answer: {
      jp: "おい",
      en: "Old" }
  },
  {
    question: "式",
    options: {
      jp: ["しき", "いる", "みる", "くる"],
      en: ["Style", "To Be", "To See", "To Come"] },
    answer: {
      jp: "しき",
      en: "Style" }
  },
  {
    question: "州",
    options: {
      jp: ["しゅう", "いる", "みる", "くる"],
      en: ["State", "To Be", "To See", "To Come"] },
    answer: {
      jp: "しゅう",
      en: "State" }
  },
  {
    question: "寺",
    options: {
      jp: ["てら", "いる", "みる", "くる"],
      en: ["Temple", "To Be", "To See", "To Come"] },
    answer: {
      jp: "てら",
      en: "Temple" }
  },
  {
    question: "次",
    options: {
      jp: ["つぎ", "いる", "みる", "くる"],
      en: ["Next", "To Be", "To See", "To Come"] },
    answer: {
      jp: "つぎ",
      en: "Next" }
  },
  {
    question: "守",
    options: {
      jp: ["まもる", "いる", "みる", "くる"],
      en: ["Protect", "To Be", "To See", "To Come"] },
    answer: {
      jp: "まもる",
      en: "Protect" }
  },
  // 糸	在	再	向	交	血	件	共	曲	各	印	因	羽
  {
    question: "糸",
    options: {
      jp: ["いと", "いる", "みる", "くる"],
      en: ["Thread", "To Be", "To See", "To Come"] },
    answer: {
      jp: "いと",
      en: "Thread" }
  },
  {
    question: "在",
    options: {
      jp: ["ざい", "いる", "みる", "くる"],
      en: ["Exist", "To Be", "To See", "To Come"] },
    answer: {
      jp: "ざい",
      en: "Exist" }
  },
  {
    question: "再",
    options: {
      jp: ["ふたたび", "いる", "みる", "くる"],
      en: ["Again", "To Be", "To See", "To Come"] },
    answer: {
      jp: "ふたたび",
      en: "Again" }
  },
  {
    question: "向",
    options: {
      jp: ["むく", "いる", "みる", "くる"],
      en: ["Face", "To Be", "To See", "To Come"] },
    answer: {
      jp: "むく",
      en: "Face" }
  },
  {
    question: "交",
    options: {
      jp: ["まじわる", "たいよう", "ほし", "あめ"],
      en: ["Interact", "Sun", "Star", "Rain"] },
    answer: {
      jp: "まじわる",
      en: "Interact" }
  },
  {
    question: "血",
    options: {
      jp: ["ち", "たいよう", "ほし", "あめ"],
      en: ["Blood", "Sun", "Star", "Rain"] },
    answer: {
      jp: "ち",
      en: "Blood" }
  },
  {
    question: "件",
    options: {
      jp: ["けん", "たいよう", "ほし", "あめ"],
      en: ["Case", "Sun", "Star", "Rain"] },
    answer: {
      jp: "けん",
      en: "Case" }
  },
  {
    question: "共",
    options: {
      jp: ["とも", "たいよう", "ほし", "あめ"],
      en: ["Together", "Sun", "Star", "Rain"] },
    answer: {
      jp: "とも",
      en: "Together" }
  },
  {
    question: "曲",
    options: {
      jp: ["まがる", "たいよう", "ほし", "あめ"],
      en: ["Curve", "Sun", "Star", "Rain"] },
    answer: {
      jp: "まがる",
      en: "Curve" }
  },
  {
    question: "各",
    options: {
      jp: ["おのおの", "たいよう", "ほし", "あめ"],
      en: ["Each", "Sun", "Star", "Rain"] },
    answer: {
      jp: "おのおの",
      en: "Each" }
  },
  {
    question: "印",
    options: {
      jp: ["しるし", "たいよう", "ほし", "あめ"],
      en: ["Mark", "Sun", "Star", "Rain"] },
    answer: {
      jp: "しるし",
      en: "Mark" }
  },
  {
    question: "因",
    options: {
      jp: ["よる", "たいよう", "ほし", "あめ"],
      en: ["Cause", "Sun", "Star", "Rain"] },
    answer: {
      jp: "よる",
      en: "Cause" }
  },
  {
    question: "羽",
    options: {
      jp: ["はね", "たいよう", "ほし", "あめ"],
      en: ["Feather", "Sun", "Star", "Rain"] },
    answer: {
      jp: "はね",
      en: "Feather" }
  },
  // 団	竹	仲	虫	兆	伝	当	成	全	争	任	米	両
  {
    question: "団",
    options: {
      jp: ["まるい", "たいよう", "ほし", "あめ"],
      en: ["Group", "Sun", "Star", "Rain"] },
    answer: {
      jp: "まるい",
      en: "Group" }
  },
  {
    question: "竹",
    options: {
      jp: ["たけ", "たいよう", "ほし", "あめ"],
      en: ["Bamboo", "Sun", "Star", "Rain"] },
    answer: {
      jp: "たけ",
      en: "Bamboo" }
  },
  {
    question: "仲",
    options: {
      jp: ["なか", "たいよう", "ほし", "あめ"],
      en: ["Relationship", "Sun", "Star", "Rain"] },
    answer: {
      jp: "なか",
      en: "Relationship" }
  },
  {
    question: "虫",
    options: {
      jp: ["むし", "たいよう", "ほし", "あめ"],
      en: ["Insect", "Sun", "Star", "Rain"] },
    answer: {
      jp: "むし",
      en: "Insect" }
  },
  {
    question: "兆",
    options: {
      jp: ["きざし", "たいよう", "ほし", "あめ"],
      en: ["Omen", "Sun", "Star", "Rain"] },
    answer: {
      jp: "きざし",
      en: "Omen" }
  },
  {
    question: "伝",
    options: {
      jp: ["つたえる", "たいよう", "ほし", "あめ"],
      en: ["Transmit", "Sun", "Star", "Rain"] },
    answer: {
      jp: "つたえる",
      en: "Transmit" }
  },
  {
    question: "当",
    options: {
      jp: ["あたる", "たいよう", "ほし", "あめ"],
      en: ["Hit", "Sun", "Star", "Rain"] },
    answer: {
      jp: "あたる",
      en: "Hit" }
  },
  {
    question: "成",
    options: {
      jp: ["なる", "たいよう", "ほし", "あめ"],
      en: ["Become", "Sun", "Star", "Rain"] },
    answer: {
      jp: "なる",
      en: "Become" }
  },
  {
    question: "全",
    options: {
      jp: ["すべて", "たいよう", "ほし", "あめ"],
      en: ["Whole", "Sun", "Star", "Rain"] },
    answer: {
      jp: "すべて",
      en: "Whole" }
  },
  {
    question: "争",
    options: {
      jp: ["あらそう", "たいよう", "ほし", "あめ"],
      en: ["Conflict", "Sun", "Star", "Rain"] },
    answer: {
      jp: "あらそう",
      en: "Conflict" }
  },
  {
    question: "任",
    options: {
      jp: ["まかせる", "たいよう", "ほし", "あめ"],
      en: ["Assign", "Sun", "Star", "Rain"] },
    answer: {
      jp: "まかせる",
      en: "Assign" }
  },
  {
    question: "米",
    options: {
      jp: ["こめ", "たいよう", "ほし", "あめ"],
      en: ["Rice", "Sun", "Star", "Rain"] },
    answer: {
      jp: "こめ",
      en: "Rice" }
  },
  {
    question: "両",
    options: {
      jp: ["りょう", "たいよう", "ほし", "あめ"],
      en: ["Both", "Sun", "Star", "Rain"] },
    answer: {
      jp: "りょう",
      en: "Both" }
  },
  // 利	余	防	役	返	判	臣	身	折	努	投	対	束
  {
    question: "利",
    options: {
      jp: ["きく", "あめ", "ようじん", "ひゃく"],
      en: ["Benefit", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "きく",
      en: "Benefit" }
  },
  {
    question: "余",
    options: {
      jp: ["あまる", "あめ", "ようじん", "ひゃく"],
      en: ["Surplus", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "あまる",
      en: "Surplus" }
  },
  {
    question: "防",
    options: {
      jp: ["ふせぐ", "あめ", "ようじん", "ひゃく"],
      en: ["Defend", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ふせぐ",
      en: "Defend" }
  },
  {
    question: "役",
    options: {
      jp: ["やく", "あめ", "ようじん", "ひゃく"],
      en: ["Role", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "やく",
      en: "Role" }
  },
  {
    question: "返",
    options: {
      jp: ["かえす", "あめ", "ようじん", "ひゃく"],
      en: ["Return", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かえす",
      en: "Return" }
  },
  {
    question: "判",
    options: {
      jp: ["わかる", "あめ", "ようじん", "ひゃく"],
      en: ["Judge", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "わかる",
      en: "Judge" }
  },
  {
    question: "臣",
    options: {
      jp: ["しん", "あめ", "ようじん", "ひゃく"],
      en: ["Minister", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "しん",
      en: "Minister" }
  },
  {
    question: "身",
    options: {
      jp: ["み", "あめ", "ようじん", "ひゃく"],
      en: ["Body", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "み",
      en: "Body" }
  },
  {
    question: "折",
    options: {
      jp: ["おる", "あめ", "ようじん", "ひゃく"],
      en: ["Fold", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "おる",
      en: "Fold" }
  },
  {
    question: "努",
    options: {
      jp: ["つとめる", "あめ", "ようじん", "ひゃく"],
      en: ["Effort", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "つとめる",
      en: "Effort" }
  },
  {
    question: "投",
    options: {
      jp: ["なげる", "あめ", "ようじん", "ひゃく"],
      en: ["Throw", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "なげる",
      en: "Throw" }
  },
  {
    question: "対",
    options: {
      jp: ["たい", "あめ", "ようじん", "ひゃく"],
      en: ["Opposite", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "たい",
      en: "Opposite" }
  },
  {
    question: "束",
    options: {
      jp: ["たば", "あめ", "ようじん", "ひゃく"],
      en: ["Bundle", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "たば",
      en: "Bundle" }
  },
  // 谷	位	囲	完	角	快	改	技	局	君	均	形	決
  {
    question: "谷",
    options: {
      jp: ["たに", "あめ", "ようじん", "ひゃく"],
      en: ["Valley", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "たに",
      en: "Valley" }
  },
  {
    question: "位",
    options: {
      jp: ["くらい", "あめ", "ようじん", "ひゃく"],
      en: ["Position", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "くらい",
      en: "Position" }
  },
  {
    question: "囲",
    options: {
      jp: ["かこむ", "あめ", "ようじん", "ひゃく"],
      en: ["Surround", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かこむ",
      en: "Surround" }
  },
  {
    question: "完",
    options: {
      jp: ["かん", "あめ", "ようじん", "ひゃく"],
      en: ["Complete", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かん",
      en: "Complete" }
  },
  {
    question: "角",
    options: {
      jp: ["かど", "あめ", "ようじん", "ひゃく"],
      en: ["Corner", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かど",
      en: "Corner" }
  },
  {
    question: "快",
    options: {
      jp: ["こころよい", "あめ", "ようじん", "ひゃく"],
      en: ["Pleasant", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "こころよい",
      en: "Pleasant" }
  },
  {
    question: "改",
    options: {
      jp: ["あらためる", "あめ", "ようじん", "ひゃく"],
      en: ["Change", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "あらためる",
      en: "Change" }
  },
  {
    question: "技",
    options: {
      jp: ["わざ", "あめ", "ようじん", "ひゃく"],
      en: ["Technique", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "わざ",
      en: "Technique" }
  },
  {
    question: "局",
    options: {
      jp: ["きょく", "あめ", "ようじん", "ひゃく"],
      en: ["Office", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "きょく",
      en: "Office" }
  },
  {
    question: "君",
    options: {
      jp: ["きみ", "あめ", "ようじん", "ひゃく"],
      en: ["You", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "きみ",
      en: "You" }
  },
  {
    question: "均",
    options: {
      jp: ["ならす", "あめ", "ようじん", "ひゃく"],
      en: ["Equal", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ならす",
      en: "Equal" }
  },
  {
    question: "形",
    options: {
      jp: ["かたち", "あめ", "ようじん", "ひゃく"],
      en: ["Shape", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かたち",
      en: "Shape" }
  },
  {
    question: "決",
    options: {
      jp: ["きめる", "あめ", "ようじん", "ひゃく"],
      en: ["Decide", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "きめる",
      en: "Decide" }
  },
  // 芸	求	希	告	材	坂	似	児	状	初	助	労	冷
  {
    question: "芸",
    options: {
      jp: ["げい", "あめ", "ようじん", "ひゃく"],
      en: ["Art", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "げい",
      en: "Art" }
  },
  {
    question: "求",
    options: {
      jp: ["もとめる", "あめ", "ようじん", "ひゃく"],
      en: ["Seek", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "もとめる",
      en: "Seek" }
  },
  {
    question: "希",
    options: {
      jp: ["まれ", "あめ", "ようじん", "ひゃく"],
      en: ["Rare", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "まれ",
      en: "Rare" }
  },
  {
    question: "告",
    options: {
      jp: ["つげる", "あめ", "ようじん", "ひゃく"],
      en: ["Tell", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "つげる",
      en: "Tell" }
  },
  {
    question: "材",
    options: {
      jp: ["ざい", "あめ", "ようじん", "ひゃく"],
      en: ["Material", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ざい",
      en: "Material" }
  },
  {
    question: "坂",
    options: {
      jp: ["さか", "あめ", "ようじん", "ひゃく"],
      en: ["Slope", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "さか",
      en: "Slope" }
  },
  {
    question: "似",
    options: {
      jp: ["にる", "あめ", "ようじん", "ひゃく"],
      en: ["Similar", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "にる",
      en: "Similar" }
  },
  {
    question: "児",
    options: {
      jp: ["こ", "あめ", "ようじん", "ひゃく"],
      en: ["Child", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "こ",
      en: "Child" }
  },
  {
    question: "状",
    options: {
      jp: ["じょう", "あめ", "ようじん", "ひゃく"],
      en: ["Condition", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "じょう",
      en: "Condition" }
  },
  {
    question: "初",
    options: {
      jp: ["はじめ", "あめ", "ようじん", "ひゃく"],
      en: ["First", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "はじめ",
      en: "First" }
  },
  {
    question: "助",
    options: {
      jp: ["たすける", "あめ", "ようじん", "ひゃく"],
      en: ["Help", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "たすける",
      en: "Help" }
  },
  {
    question: "労",
    options: {
      jp: ["ろう", "あめ", "ようじん", "ひゃく"],
      en: ["Labor", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ろう",
      en: "Labor" }
  },
  {
    question: "冷",
    options: {
      jp: ["つめたい", "あめ", "ようじん", "ひゃく"],
      en: ["Cold", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "つめたい",
      en: "Cold" }
  },
  // 例	和	述	承	招	実	取	治	受	周	妻	参	枝
  {
    question: "例",
    options: {
      jp: ["れい", "あめ", "ようじん", "ひゃく"],
      en: ["Example", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "れい",
      en: "Example" }
  },
  {
    question: "和",
    options: {
      jp: ["わ", "あめ", "ようじん", "ひゃく"],
      en: ["Harmony", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "わ",
      en: "Harmony" }
  },
  {
    question: "述",
    options: {
      jp: ["のべる", "あめ", "ようじん", "ひゃく"],
      en: ["State", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "のべる",
      en: "State" }
  },
  {
    question: "承",
    options: {
      jp: ["うける", "あめ", "ようじん", "ひゃく"],
      en: ["Consent", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "うける",
      en: "Consent" }
  },
  {
    question: "招",
    options: {
      jp: ["まねく", "あめ", "ようじん", "ひゃく"],
      en: ["Invite", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "まねく",
      en: "Invite" }
  },
  {
    question: "実",
    options: {
      jp: ["み", "あめ", "ようじん", "ひゃく"],
      en: ["Truth", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "み",
      en: "Truth" }
  },
  {
    question: "取",
    options: {
      jp: ["とる", "あめ", "ようじん", "ひゃく"],
      en: ["Take", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "とる",
      en: "Take" }
  },
  {
    question: "治",
    options: {
      jp: ["おさめる", "あめ", "ようじん", "ひゃく"],
      en: ["Cure", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "おさめる",
      en: "Cure" }
  },
  {
    question: "受",
    options: {
      jp: ["うける", "あめ", "ようじん", "ひゃく"],
      en: ["Receive", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "うける",
      en: "Receive" }
  },
  {
    question: "周",
    options: {
      jp: ["まわり", "あめ", "ようじん", "ひゃく"],
      en: ["Around", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "まわり",
      en: "Around" }
  },
  {
    question: "妻",
    options: {
      jp: ["つま", "あめ", "ようじん", "ひゃく"],
      en: ["Wife", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "つま",
      en: "Wife" }
  },
  {
    question: "参",
    options: {
      jp: ["さん", "あめ", "ようじん", "ひゃく"],
      en: ["Participate", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "さん",
      en: "Participate" }
  },
  {
    question: "枝",
    options: {
      jp: ["えだ", "あめ", "ようじん", "ひゃく"],
      en: ["Branch", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "えだ",
      en: "Branch" }
  },
  // 刷	効	幸	固	季	岸	岩	泣	協	居	苦	具	果
  {
    question: "刷",
    options: {
      jp: ["す", "あめ", "ようじん", "ひゃく"],
      en: ["Print", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "す",
      en: "Print" }
  },
  {
    question: "効",
    options: {
      jp: ["こう", "あめ", "ようじん", "ひゃく"],
      en: ["Effect", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "こう",
      en: "Effect" }
  },
  {
    question: "幸",
    options: {
      jp: ["さいわい", "あめ", "ようじん", "ひゃく"],
      en: ["Happiness", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "さいわい",
      en: "Happiness" }
  },
  {
    question: "固",
    options: {
      jp: ["かたい", "あめ", "ようじん", "ひゃく"],
      en: ["Hard", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かたい",
      en: "Hard" }
  },
  {
    question: "季",
    options: {
      jp: ["き", "あめ", "ようじん", "ひゃく"],
      en: ["Season", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "き",
      en: "Season" }
  },
  {
    question: "岸",
    options: {
      jp: ["きし", "あめ", "ようじん", "ひゃく"],
      en: ["Coast", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "きし",
      en: "Coast" }
  },
  {
    question: "岩",
    options: {
      jp: ["いわ", "あめ", "ようじん", "ひゃく"],
      en: ["Rock", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "いわ",
      en: "Rock" }
  },
  {
    question: "泣",
    options: {
      jp: ["なく", "あめ", "ようじん", "ひゃく"],
      en: ["Cry", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "なく",
      en: "Cry" }
  },
  {
    question: "協",
    options: {
      jp: ["きょう", "あめ", "ようじん", "ひゃく"],
      en: ["Cooperation", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "きょう",
      en: "Cooperation" }
  },
  {
    question: "居",
    options: {
      jp: ["い", "あめ", "ようじん", "ひゃく"],
      en: ["Reside", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "い",
      en: "Reside" }
  },
  {
    question: "苦",
    options: {
      jp: ["くるしい", "あめ", "ようじん", "ひゃく"],
      en: ["Suffering", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "くるしい",
      en: "Suffering" }
  },
  {
    question: "具",
    options: {
      jp: ["ぐ", "あめ", "ようじん", "ひゃく"],
      en: ["Tool", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ぐ",
      en: "Tool" }
  },
  {
    question: "果",
    options: {
      jp: ["はたす", "あめ", "ようじん", "ひゃく"],
      en: ["Fruit", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "はたす",
      en: "Fruit" }
  },
  // 河	官	委	易	育	泳	直	定	底	的	性	昔	制
  {
    question: "河",
    options: {
      jp: ["かわ", "あめ", "ようじん", "ひゃく"],
      en: ["River", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かわ",
      en: "River" }
  },
  {
    question: "官",
    options: {
      jp: ["かん", "あめ", "ようじん", "ひゃく"],
      en: ["Official", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "かん",
      en: "Official" }
  },
  {
    question: "委",
    options: {
      jp: ["ゆだねる", "あめ", "ようじん", "ひゃく"],
      en: ["Commit", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ゆだねる",
      en: "Commit" }
  },
  {
    question: "易",
    options: {
      jp: ["やさしい", "あめ", "ようじん", "ひゃく"],
      en: ["Easy", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "やさしい",
      en: "Easy" }
  },
  {
    question: "育",
    options: {
      jp: ["そだつ", "あめ", "ようじん", "ひゃく"],
      en: ["Raise", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "そだつ",
      en: "Raise" }
  },
  {
    question: "泳",
    options: {
      jp: ["およぐ", "あめ", "ようじん", "ひゃく"],
      en: ["Swim", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "およぐ",
      en: "Swim" }
  },
  {
    question: "直",
    options: {
      jp: ["ただちに", "あめ", "ようじん", "ひゃく"],
      en: ["Straight", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ただちに",
      en: "Straight" }
  },
  {
    question: "定",
    options: {
      jp: ["さだめる", "あめ", "ようじん", "ひゃく"],
      en: ["Decide", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "さだめる",
      en: "Decide" }
  },
  {
    question: "底",
    options: {
      jp: ["そこ", "あめ", "ようじん", "ひゃく"],
      en: ["Bottom", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "そこ",
      en: "Bottom" }
  },
  {
    question: "的",
    options: {
      jp: ["まと", "あめ", "ようじん", "ひゃく"],
      en: ["Target", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "まと",
      en: "Target" }
  },
  {
    question: "性",
    options: {
      jp: ["せい", "あめ", "ようじん", "ひゃく"],
      en: ["Nature", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "せい",
      en: "Nature" }
  },
  {
    question: "昔",
    options: {
      jp: ["むかし", "あめ", "ようじん", "ひゃく"],
      en: ["Past", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "むかし",
      en: "Past" }
  },
  {
    question: "制",
    options: {
      jp: ["せい", "あめ", "ようじん", "ひゃく"],
      en: ["Control", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "せい",
      en: "Control" }
  },
  // 卒	非	波	板	版	念	武	表	命	府	放	法	油
  {
    question: "卒",
    options: {
      jp: ["そつ", "あめ", "ようじん", "ひゃく"],
      en: ["Graduate", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "そつ",
      en: "Graduate" }
  },
  {
    question: "非",
    options: {
      jp: ["ひ", "あめ", "ようじん", "ひゃく"],
      en: ["Non-", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ひ",
      en: "Non-" }
  },
  {
    question: "波",
    options: {
      jp: ["なみ", "あめ", "ようじん", "ひゃく"],
      en: ["Wave", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "なみ",
      en: "Wave" }
  },
  {
    question: "板",
    options: {
      jp: ["いた", "あめ", "ようじん", "ひゃく"],
      en: ["Board", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "いた",
      en: "Board" }
  },
  {
    question: "版",
    options: {
      jp: ["はん", "あめ", "ようじん", "ひゃく"],
      en: ["Edition", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "はん",
      en: "Edition" }
  },
  {
    question: "念",
    options: {
      jp: ["ねん", "あめ", "ようじん", "ひゃく"],
      en: ["Thought", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ねん",
      en: "Thought" }
  },
  {
    question: "武",
    options: {
      jp: ["たけし", "あめ", "ようじん", "ひゃく"],
      en: ["Warrior", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "たけし",
      en: "Warrior" }
  },
  {
    question: "表",
    options: {
      jp: ["おもて", "あめ", "ようじん", "ひゃく"],
      en: ["Surface", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "おもて",
      en: "Surface" }
  },
  {
    question: "命",
    options: {
      jp: ["いのち", "あめ", "ようじん", "ひゃく"],
      en: ["Life", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "いのち",
      en: "Life" }
  },
  {
    question: "府",
    options: {
      jp: ["ふ", "あめ", "ようじん", "ひゃく"],
      en: ["Prefecture", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ふ",
      en: "Prefecture" }
  },
  {
    question: "放",
    options: {
      jp: ["はなす", "あめ", "ようじん", "ひゃく"],
      en: ["Release", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "はなす",
      en: "Release" }
  },
  {
    question: "法",
    options: {
      jp: ["ほう", "あめ", "ようじん", "ひゃく"],
      en: ["Law", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "ほう",
      en: "Law" }
  },
  {
    question: "油",
    options: {
      jp: ["あぶら", "あめ", "ようじん", "ひゃく"],
      en: ["Oil", "Rain", "Sun", "Hundred"] },
    answer: {
      jp: "あぶら",
      en: "Oil" }
  },
  // 勇	要	負	迷	約	面	変	飛	美	独	則	相	草
  {
    question: "勇",
    options: {
      jp: ["いさむ", "いる", "いけ", "いのる"],
      en: ["Brave", "Need", "Lose", "Lose"] },
    answer: {
      jp: "いさむ",
      en: "Brave" }
  },
  {
    question: "要",
    options: {
      jp: ["おなじ", "いる", "いけ", "いのる"],
      en: ["Need", "Need", "Lose", "Lose"] },
    answer: {
      jp: "おなじ",
      en: "Need" }
  },
  {
    question: "負",
    options: {
      jp: ["まける", "いる", "いけ", "いのる"],
      en: ["Lose", "Need", "Lose", "Lose"] },
    answer: {
      jp: "まける",
      en: "Lose" }
  },
  {
    question: "迷",
    options: {
      jp: ["まよう", "いる", "いけ", "いのる"],
      en: ["Lost", "Need", "Lose", "Lose"] },
    answer: {
      jp: "まよう",
      en: "Lost" }
  },
  {
    question: "約",
    options: {
      jp: ["やく", "いる", "いけ", "いのる"],
      en: ["Promise", "Need", "Lose", "Lose"] },
    answer: {
      jp: "やく",
      en: "Promise" }
  },
  {
    question: "面",
    options: {
      jp: ["つら", "いる", "いけ", "いのる"],
      en: ["Face", "Need", "Lose", "Lose"] },
    answer: {
      jp: "つら",
      en: "Face" }
  },
  {
    question: "変",
    options: {
      jp: ["かわる", "いる", "いけ", "いのる"],
      en: ["Change", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かわる",
      en: "Change" }
  },
  {
    question: "飛",
    options: {
      jp: ["とぶ", "いる", "いけ", "いのる"],
      en: ["Fly", "Need", "Lose", "Lose"] },
    answer: {
      jp: "とぶ",
      en: "Fly" }
  },
  {
    question: "美",
    options: {
      jp: ["うつくしい", "いる", "いけ", "いのる"],
      en: ["Beautiful", "Need", "Lose", "Lose"] },
    answer: {
      jp: "うつくしい",
      en: "Beautiful" }
  },
  {
    question: "独",
    options: {
      jp: ["ひとり", "いる", "いけ", "いのる"],
      en: ["Alone", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ひとり",
      en: "Alone" }
  },
  {
    question: "則",
    options: {
      jp: ["のっとる", "いる", "いけ", "いのる"],
      en: ["Rule", "Need", "Lose", "Lose"] },
    answer: {
      jp: "のっとる",
      en: "Rule" }
  },
  {
    question: "相",
    options: {
      jp: ["あい", "いる", "いけ", "いのる"],
      en: ["Mutual", "Need", "Lose", "Lose"] },
    answer: {
      jp: "あい",
      en: "Mutual" }
  },
  {
    question: "草",
    options: {
      jp: ["くさ", "いる", "いけ", "いのる"],
      en: ["Grass", "Need", "Lose", "Lose"] },
    answer: {
      jp: "くさ",
      en: "Grass" }
  },
  // 祖	信	政	星	点	追	単	炭	退	栄	科	活	胃
  {
    question: "祖",
    options: {
      jp: ["そ", "いる", "いけ", "いのる"],
      en: ["Ancestor", "Need", "Lose", "Lose"] },
    answer: {
      jp: "そ",
      en: "Ancestor" }
  },
  {
    question: "信",
    options: {
      jp: ["しん", "いる", "いけ", "いのる"],
      en: ["Trust", "Need", "Lose", "Lose"] },
    answer: {
      jp: "しん",
      en: "Trust" }
  },
  {
    question: "政",
    options: {
      jp: ["まつりごと", "いる", "いけ", "いのる"],
      en: ["Politics", "Need", "Lose", "Lose"] },
    answer: {
      jp: "まつりごと",
      en: "Politics" }
  },
  {
    question: "星",
    options: {
      jp: ["ほし", "いる", "いけ", "いのる"],
      en: ["Star", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ほし",
      en: "Star" }
  },
  {
    question: "点",
    options: {
      jp: ["てん", "いる", "いけ", "いのる"],
      en: ["Point", "Need", "Lose", "Lose"] },
    answer: {
      jp: "てん",
      en: "Point" }
  },
  {
    question: "追",
    options: {
      jp: ["おう", "いる", "いけ", "いのる"],
      en: ["Chase", "Need", "Lose", "Lose"] },
    answer: {
      jp: "おう",
      en: "Chase" }
  },
  {
    question: "単",
    options: {
      jp: ["たん", "いる", "いけ", "いのる"],
      en: ["Single", "Need", "Lose", "Lose"] },
    answer: {
      jp: "たん",
      en: "Single" }
  },
  {
    question: "炭",
    options: {
      jp: ["すみ", "いる", "いけ", "いのる"],
      en: ["Charcoal", "Need", "Lose", "Lose"] },
    answer: {
      jp: "すみ",
      en: "Charcoal" }
  },
  {
    question: "退",
    options: {
      jp: ["しりぞく", "いる", "いけ", "いのる"],
      en: ["Retreat", "Need", "Lose", "Lose"] },
    answer: {
      jp: "しりぞく",
      en: "Retreat" }
  },
  {
    question: "栄",
    options: {
      jp: ["さかえる", "いる", "いけ", "いのる"],
      en: ["Prosper", "Need", "Lose", "Lose"] },
    answer: {
      jp: "さかえる",
      en: "Prosper" }
  },
  {
    question: "科",
    options: {
      jp: ["か", "いる", "いけ", "いのる"],
      en: ["Science", "Need", "Lose", "Lose"] },
    answer: {
      jp: "か",
      en: "Science" }
  },
  {
    question: "活",
    options: {
      jp: ["かつ", "いる", "いけ", "いのる"],
      en: ["Active", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かつ",
      en: "Active" }
  },
  {
    question: "胃",
    options: {
      jp: ["い", "いる", "いけ", "いのる"],
      en: ["Stomach", "Need", "Lose", "Lose"] },
    answer: {
      jp: "い",
      en: "Stomach" }
  },
  // 級	軍	係	型	客	逆	限	厚	指	昨	祝	神	査
  {
    question: "級",
    options: {
      jp: ["きゅう", "いる", "いけ", "いのる"],
      en: ["Grade", "Need", "Lose", "Lose"] },
    answer: {
      jp: "きゅう",
      en: "Grade" }
  },
  {
    question: "軍",
    options: {
      jp: ["ぐん", "いる", "いけ", "いのる"],
      en: ["Army", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ぐん",
      en: "Army" }
  },
  {
    question: "係",
    options: {
      jp: ["かかり", "いる", "いけ", "いのる"],
      en: ["Responsibility", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かかり",
      en: "Responsibility" }
  },
  {
    question: "型",
    options: {
      jp: ["かた", "いる", "いけ", "いのる"],
      en: ["Type", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かた",
      en: "Type" }
  },
  {
    question: "客",
    options: {
      jp: ["きゃく", "いる", "いけ", "いのる"],
      en: ["Guest", "Need", "Lose", "Lose"] },
    answer: {
      jp: "きゃく",
      en: "Guest" }
  },
  {
    question: "逆",
    options: {
      jp: ["さかさま", "いる", "いけ", "いのる"],
      en: ["Opposite", "Need", "Lose", "Lose"] },
    answer: {
      jp: "さかさま",
      en: "Opposite" }
  },
  {
    question: "限",
    options: {
      jp: ["かぎる", "いる", "いけ", "いのる"],
      en: ["Limit", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かぎる",
      en: "Limit" }
  },
  {
    question: "厚",
    options: {
      jp: ["あつい", "いる", "いけ", "いのる"],
      en: ["Thick", "Need", "Lose", "Lose"] },
    answer: {
      jp: "あつい",
      en: "Thick" }
  },
  {
    question: "指",
    options: {
      jp: ["ゆび", "いる", "いけ", "いのる"],
      en: ["Finger", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ゆび",
      en: "Finger" }
  },
  {
    question: "昨",
    options: {
      jp: ["さく", "いる", "いけ", "いのる"],
      en: ["Yesterday", "Need", "Lose", "Lose"] },
    answer: {
      jp: "さく",
      en: "Yesterday" }
  },
  {
    question: "祝",
    options: {
      jp: ["いわう", "いる", "いけ", "いのる"],
      en: ["Celebrate", "Need", "Lose", "Lose"] },
    answer: {
      jp: "いわう",
      en: "Celebrate" }
  },
  {
    question: "神",
    options: {
      jp: ["かみ", "いる", "いけ", "いのる"],
      en: ["God", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かみ",
      en: "God" }
  },
  {
    question: "査",
    options: {
      jp: ["さ", "いる", "いけ", "いのる"],
      en: ["Investigate", "Need", "Lose", "Lose"] },
    answer: {
      jp: "さ",
      en: "Investigate" }
  },
  // 省	酒	笑	消	師	財	殺	差	残	航	根	個	候
  {
    question: "省",
    options: {
      jp: ["しょう", "いる", "いけ", "いのる"],
      en: ["Ministry", "Need", "Lose", "Lose"] },
    answer: {
      jp: "しょう",
      en: "Ministry" }
  },
  {
    question: "酒",
    options: {
      jp: ["さけ", "いる", "いけ", "いのる"],
      en: ["Alcohol", "Need", "Lose", "Lose"] },
    answer: {
      jp: "さけ",
      en: "Alcohol" }
  },
  {
    question: "笑",
    options: {
      jp: ["わらう", "いる", "いけ", "いのる"],
      en: ["Laugh", "Need", "Lose", "Lose"] },
    answer: {
      jp: "わらう",
      en: "Laugh" }
  },
  {
    question: "消",
    options: {
      jp: ["きえる", "いる", "いけ", "いのる"],
      en: ["Disappear", "Need", "Lose", "Lose"] },
    answer: {
      jp: "きえる",
      en: "Disappear" }
  },
  {
    question: "師",
    options: {
      jp: ["し", "いる", "いけ", "いのる"],
      en: ["Teacher", "Need", "Lose", "Lose"] },
    answer: {
      jp: "し",
      en: "Teacher" }
  },
  {
    question: "財",
    options: {
      jp: ["ざい", "いる", "いけ", "いのる"],
      en: ["Wealth", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ざい",
      en: "Wealth" }
  },
  {
    question: "殺",
    options: {
      jp: ["ころす", "いる", "いけ", "いのる"],
      en: ["Kill", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ころす",
      en: "Kill" }
  },
  {
    question: "差",
    options: {
      jp: ["さす", "いる", "いけ", "いのる"],
      en: ["Difference", "Need", "Lose", "Lose"] },
    answer: {
      jp: "さす",
      en: "Difference" }
  },
  {
    question: "残",
    options: {
      jp: ["のこる", "いる", "いけ", "いのる"],
      en: ["Remain", "Need", "Lose", "Lose"] },
    answer: {
      jp: "のこる",
      en: "Remain" }
  },
  {
    question: "航",
    options: {
      jp: ["こう", "いる", "いけ", "いのる"],
      en: ["Navigation", "Need", "Lose", "Lose"] },
    answer: {
      jp: "こう",
      en: "Navigation" }
  },
  {
    question: "根",
    options: {
      jp: ["ね", "いる", "いけ", "いのる"],
      en: ["Root", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ね",
      en: "Root" }
  },
  {
    question: "個",
    options: {
      jp: ["こ", "いる", "いけ", "いのる"],
      en: ["Individual", "Need", "Lose", "Lose"] },
    answer: {
      jp: "こ",
      en: "Individual" }
  },
  {
    question: "候",
    options: {
      jp: ["そうろう", "いる", "いけ", "いのる"],
      en: ["Climate", "Need", "Lose", "Lose"] },
    answer: {
      jp: "そうろう",
      en: "Climate" }
  },
  // 庫	記	訓	害	格	荷	帯	島	庭	徒	席	息	造
  {
    question: "庫",
    options: {
      jp: ["くら", "いる", "いけ", "いのる"],
      en: ["Warehouse", "Need", "Lose", "Lose"] },
    answer: {
      jp: "くら",
      en: "Warehouse" }
  },
  {
    question: "記",
    options: {
      jp: ["き", "いる", "いけ", "いのる"],
      en: ["Record", "Need", "Lose", "Lose"] },
    answer: {
      jp: "き",
      en: "Record" }
  },
  {
    question: "訓",
    options: {
      jp: ["くん", "いる", "いけ", "いのる"],
      en: ["Instruction", "Need", "Lose", "Lose"] },
    answer: {
      jp: "くん",
      en: "Instruction" }
  },
  {
    question: "害",
    options: {
      jp: ["がい", "いる", "いけ", "いのる"],
      en: ["Harm", "Need", "Lose", "Lose"] },
    answer: {
      jp: "がい",
      en: "Harm" }
  },
  {
    question: "格",
    options: {
      jp: ["かく", "いる", "いけ", "いのる"],
      en: ["Rank", "Need", "Lose", "Lose"] },
    answer: {
      jp: "かく",
      en: "Rank" }
  },
  {
    question: "荷",
    options: {
      jp: ["に", "いる", "いけ", "いのる"],
      en: ["Cargo", "Need", "Lose", "Lose"] },
    answer: {
      jp: "に",
      en: "Cargo" }
  },
  {
    question: "帯",
    options: {
      jp: ["おびる", "いる", "いけ", "いのる"],
      en: ["Belt", "Need", "Lose", "Lose"] },
    answer: {
      jp: "おびる",
      en: "Belt" }
  },
  {
    question: "島",
    options: {
      jp: ["しま", "いる", "いけ", "いのる"],
      en: ["Island", "Need", "Lose", "Lose"] },
    answer: {
      jp: "しま",
      en: "Island" }
  },
  {
    question: "庭",
    options: {
      jp: ["にわ", "いる", "いけ", "いのる"],
      en: ["Garden", "Need", "Lose", "Lose"] },
    answer: {
      jp: "にわ",
      en: "Garden" }
  },
  {
    question: "徒",
    options: {
      jp: ["いたずら", "いる", "いけ", "いのる"],
      en: ["Follower", "Need", "Lose", "Lose"] },
    answer: {
      jp: "いたずら",
      en: "Follower" }
  },
  {
    question: "席",
    options: {
      jp: ["せき", "いる", "いけ", "いのる"],
      en: ["Seat", "Need", "Lose", "Lose"] },
    answer: {
      jp: "せき",
      en: "Seat" }
  },
  {
    question: "息",
    options: {
      jp: ["いき", "いる", "いけ", "いのる"],
      en: ["Breath", "Need", "Lose", "Lose"] },
    answer: {
      jp: "いき",
      en: "Breath" }
  },
  {
    question: "造",
    options: {
      jp: ["つくる", "いる", "いけ", "いのる"],
      en: ["Create", "Need", "Lose", "Lose"] },
    answer: {
      jp: "つくる",
      en: "Create" }
  },
  // 孫	速	能	配	倍	破	馬	浴	容	流	留	連	陸
  {
    question: "孫",
    options: {
      jp: ["まご", "いる", "いけ", "いのる"],
      en: ["Grandchild", "Need", "Lose", "Lose"] },
    answer: {
      jp: "まご",
      en: "Grandchild" }
  },
  {
    question: "速",
    options: {
      jp: ["はやい", "いる", "いけ", "いのる"],
      en: ["Fast", "Need", "Lose", "Lose"] },
    answer: {
      jp: "はやい",
      en: "Fast" }
  },
  {
    question: "能",
    options: {
      jp: ["よう", "いる", "いけ", "いのる"],
      en: ["Ability", "Need", "Lose", "Lose"] },
    answer: {
      jp: "よう",
      en: "Ability" }
  },
  {
    question: "配",
    options: {
      jp: ["くばる", "いる", "いけ", "いのる"],
      en: ["Distribute", "Need", "Lose", "Lose"] },
    answer: {
      jp: "くばる",
      en: "Distribute" }
  },
  {
    question: "倍",
    options: {
      jp: ["ばい", "いる", "いけ", "いのる"],
      en: ["Double", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ばい",
      en: "Double" }
  },
  {
    question: "破",
    options: {
      jp: ["やぶる", "いる", "いけ", "いのる"],
      en: ["Break", "Need", "Lose", "Lose"] },
    answer: {
      jp: "やぶる",
      en: "Break" }
  },
  {
    question: "馬",
    options: {
      jp: ["うま", "いる", "いけ", "いのる"],
      en: ["Horse", "Need", "Lose", "Lose"] },
    answer: {
      jp: "うま",
      en: "Horse" }
  },
  {
    question: "浴",
    options: {
      jp: ["あびる", "いる", "いけ", "いのる"],
      en: ["Bathe", "Need", "Lose", "Lose"] },
    answer: {
      jp: "あびる",
      en: "Bathe" }
  },
  {
    question: "容",
    options: {
      jp: ["いれる", "いる", "いけ", "いのる"],
      en: ["Appearance", "Need", "Lose", "Lose"] },
    answer: {
      jp: "いれる",
      en: "Appearance" }
  },
  {
    question: "流",
    options: {
      jp: ["ながれる", "いる", "いけ", "いのる"],
      en: ["Flow", "Need", "Lose", "Lose"] },
    answer: {
      jp: "ながれる",
      en: "Flow" }
  },
  {
    question: "留",
    options: {
      jp: ["とどめる", "いる", "いけ", "いのる"],
      en: ["Stay", "Need", "Lose", "Lose"] },
    answer: {
      jp: "とどめる",
      en: "Stay" }
  },
  {
    question: "連",
    options: {
      jp: ["つれてくる", "いる", "いけ", "いのる"],
      en: ["Connect", "Need", "Lose", "Lose"] },
    answer: {
      jp: "つれてくる",
      en: "Connect" }
  },
  {
    question: "陸",
    options: {
      jp: ["おか", "いる", "いけ", "いのる"],
      en: ["Land", "Need", "Lose", "Lose"] },
    answer: {
      jp: "おか",
      en: "Land" }
  },
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
    question: "草",
    options: {
      jp: ["くさ", "き", "はな", "は"],
      en: ["Grass", "Tree", "Flower", "Leaf"] },
    answer: {
      jp: "くさ",
      en: "Grass" }
  },
  {
    question: "鼻",
    options: {
      jp: ["はな", "め", "みみ", "くち"],
      en: ["Nose", "Eye", "Ear", "Mouth"] },
    answer: {
      jp: "はな",
      en: "Nose" }
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
