/**
 * 全国ガチャ旅 — 47都道府県データ
 * classicスクリプトとして読み込み、window.GACHA_DATA に配列を公開する。
 */
(function () {
  "use strict";

  var GACHA_DATA = [
    // ── 北海道 ─────────────────────────────
    {
      id: "hokkaido",
      name: "北海道",
      region: "北海道",
      emoji: "🐄",
      destinations: [
        { name: "札幌市", emoji: "🏙️", description: "北海道の中心都市。新鮮な海鮮とスープカレー、ラーメンが楽しめるグルメの都。" },
        { name: "函館市", emoji: "🌃", description: "異国情緒あふれる港町で、函館山からの夜景は日本三大夜景のひとつ。" },
      ],
      spots: [
        { name: "富良野・美瑛の丘", emoji: "🌾", description: "パッチワークのような丘陵地帯が広がる北海道らしい絶景。" },
        { name: "小樽運河", emoji: "🏮", description: "レンガ倉庫とガス灯が並ぶノスタルジックな運河沿いの散策路。" },
      ],
      foods: [
        { name: "札幌スープカレー", emoji: "🍛", description: "スパイスの効いたスープに具材がごろごろ入った札幌発祥の名物。" },
        { name: "海鮮丼", emoji: "🍣", description: "新鮮なウニ・イクラ・カニがのった北海道自慢の海の幸丼。" },
      ],
    },

    // ── 東北 ─────────────────────────────
    {
      id: "aomori",
      name: "青森県",
      region: "東北",
      emoji: "🍎",
      destinations: [
        { name: "青森市", emoji: "🏮", description: "本州最北の港町。夏には勇壮なねぶた祭で街全体が熱気に包まれる。" },
        { name: "弘前市", emoji: "🌸", description: "津軽藩の城下町。弘前城の桜とりんご畑が広がる風情ある街。" },
      ],
      spots: [
        { name: "弘前城", emoji: "🌸", description: "桜の名所として知られる津軽藩の名城。" },
        { name: "奥入瀬渓流", emoji: "🌲", description: "苔むした岩と清流が織りなす渓流散策の名所。" },
      ],
      foods: [
        { name: "青森りんご", emoji: "🍎", description: "生産量日本一を誇る、みずみずしく甘い名産りんご。" },
        { name: "味噌カレー牛乳ラーメン", emoji: "🍜", description: "味噌とカレー、牛乳が合わさった青森発祥のご当地ラーメン。" },
      ],
    },
    {
      id: "iwate",
      name: "岩手県",
      region: "東北",
      emoji: "🦌",
      destinations: [
        { name: "盛岡市", emoji: "🍚", description: "南部藩の城下町として栄えた県都。わんこそばや盛岡冷麺などご当地グルメも豊富。" },
        { name: "平泉町", emoji: "⛩️", description: "奥州藤原氏が築いた黄金文化の里。中尊寺金色堂など世界遺産が残る。" },
      ],
      spots: [
        { name: "中尊寺金色堂", emoji: "⛩️", description: "奥州藤原氏が築いた黄金に輝く世界遺産のお堂。" },
        { name: "龍泉洞", emoji: "💧", description: "透き通るコバルトブルーの地底湖で知られる日本三大鍾乳洞。" },
      ],
      foods: [
        { name: "わんこそば", emoji: "🍚", description: "小椀に一口分ずつ次々とそばを注いでもらう盛岡名物。" },
        { name: "盛岡冷麺", emoji: "🍜", description: "コシの強い麺とキムチが特徴のさっぱり冷たい麺料理。" },
      ],
    },
    {
      id: "miyagi",
      name: "宮城県",
      region: "東北",
      emoji: "🦪",
      destinations: [
        { name: "仙台市", emoji: "🌳", description: "杜の都と呼ばれる緑豊かな東北随一の都市。牛タンなどのグルメも人気。" },
        { name: "松島町", emoji: "🏝️", description: "大小260もの島々が浮かぶ日本三景の絶景を望む港町。" },
      ],
      spots: [
        { name: "松島", emoji: "🏝️", description: "大小260もの島々が浮かぶ日本三景のひとつ。" },
        { name: "仙台城跡", emoji: "🏯", description: "伊達政宗が築いた青葉山の城跡から仙台市街を一望できる。" },
      ],
      foods: [
        { name: "牛タン焼き", emoji: "🥩", description: "厚切りでジューシーな、仙台を代表するご当地グルメ。" },
        { name: "笹かまぼこ", emoji: "🐟", description: "笹の葉の形をした宮城名産の焼き蒲鉾。" },
      ],
    },
    {
      id: "akita",
      name: "秋田県",
      region: "東北",
      emoji: "🍚",
      destinations: [
        { name: "秋田市", emoji: "🎐", description: "竿燈まつりで知られる県都。米どころならではの日本酒とグルメが自慢。" },
        { name: "仙北市", emoji: "🏘️", description: "角館の武家屋敷と神秘的な田沢湖を抱く自然豊かな町。" },
      ],
      spots: [
        { name: "角館の武家屋敷", emoji: "🏘️", description: "しだれ桜と黒板塀の武家屋敷が並ぶ「みちのくの小京都」。" },
        { name: "田沢湖", emoji: "🌊", description: "日本一の水深を誇る神秘的なコバルトブルーの湖。" },
      ],
      foods: [
        { name: "きりたんぽ鍋", emoji: "🍲", description: "潰した米を棒状に焼き固め、比内地鶏の出汁鍋で煮込む郷土料理。" },
        { name: "稲庭うどん", emoji: "🍜", description: "なめらかな喉ごしが特徴の日本三大うどんのひとつ。" },
      ],
    },
    {
      id: "yamagata",
      name: "山形県",
      region: "東北",
      emoji: "🍒",
      destinations: [
        { name: "山形市", emoji: "♨️", description: "蔵王の樹氷と将棋駒の産地として知られる県都。" },
        { name: "鶴岡市", emoji: "⛩️", description: "出羽三山の門前町として栄え、独自の庄内食文化が息づく。" },
      ],
      spots: [
        { name: "山寺（立石寺）", emoji: "⛩️", description: "松尾芭蕉が句を詠んだ、断崖に建つ千段以上の石段の名刹。" },
        { name: "銀山温泉", emoji: "♨️", description: "大正ロマン漂う木造旅館が並ぶノスタルジックな温泉街。" },
      ],
      foods: [
        { name: "山形さくらんぼ", emoji: "🍒", description: "全国一の生産量を誇る、艶やかで甘い夏の名産果物。" },
        { name: "芋煮", emoji: "🍲", description: "里芋と牛肉（内陸）や豚肉（庄内）を煮込む秋の郷土鍋。" },
      ],
    },
    {
      id: "fukushima",
      name: "福島県",
      region: "東北",
      emoji: "🍑",
      destinations: [
        { name: "会津若松市", emoji: "🏯", description: "鶴ヶ城がそびえる会津の中心地。喜多方ラーメンや会津の郷土料理も名物。" },
        { name: "南会津町", emoji: "🏘️", description: "大内宿など茅葺き屋根の集落が残る、山あいの静かな里。" },
      ],
      spots: [
        { name: "鶴ヶ城（会津若松城）", emoji: "🏯", description: "赤瓦が美しい、幕末の戊辰戦争でも知られる名城。" },
        { name: "大内宿", emoji: "🏘️", description: "茅葺き屋根の宿場町がそのまま残る江戸時代の面影を伝える集落。" },
      ],
      foods: [
        { name: "喜多方ラーメン", emoji: "🍜", description: "太い縮れ麺と醤油ベースのあっさりスープが特徴の三大ラーメン。" },
        { name: "福島の桃", emoji: "🍑", description: "全国有数の生産量を誇る、みずみずしい夏の味覚。" },
      ],
    },

    // ── 関東 ─────────────────────────────
    {
      id: "ibaraki",
      name: "茨城県",
      region: "関東",
      emoji: "🌸",
      destinations: [
        { name: "水戸市", emoji: "🌸", description: "偕楽園の梅と納豆で知られる茨城の県都。" },
        { name: "ひたちなか市", emoji: "🌼", description: "国営ひたち海浜公園のネモフィラやコキアで彩られる港町。" },
      ],
      spots: [
        { name: "国営ひたち海浜公園", emoji: "🌼", description: "ネモフィラやコキアなど四季折々の花が丘一面を彩る公園。" },
        { name: "袋田の滝", emoji: "💦", description: "四段に落ちることから「四度の滝」とも呼ばれる日本三名瀑。" },
      ],
      foods: [
        { name: "納豆", emoji: "🫘", description: "水戸を代表する日本一の生産量を誇る発酵食品。" },
        { name: "あんこう鍋", emoji: "🍲", description: "冬の味覚として親しまれる、あんこうを丸ごと使った鍋料理。" },
      ],
    },
    {
      id: "tochigi",
      name: "栃木県",
      region: "関東",
      emoji: "⛩️",
      destinations: [
        { name: "宇都宮市", emoji: "🥟", description: "餃子の街として全国的に名高い栃木の県都。" },
        { name: "日光市", emoji: "⛩️", description: "世界遺産の日光東照宮と那須の高原自然を併せ持つ観光都市。" },
      ],
      spots: [
        { name: "日光東照宮", emoji: "⛩️", description: "「日光を見ずして結構と言うなかれ」と称される豪華絢爛な世界遺産。" },
        { name: "那須高原", emoji: "🏔️", description: "避暑地として愛される、牧場と温泉が広がる高原リゾート。" },
      ],
      foods: [
        { name: "宇都宮餃子", emoji: "🥟", description: "餃子購入額日本一を誇る宇都宮のソウルフード。" },
        { name: "とちおとめ", emoji: "🍓", description: "甘みと酸味のバランスが良い栃木自慢のブランドいちご。" },
      ],
    },
    {
      id: "gunma",
      name: "群馬県",
      region: "関東",
      emoji: "♨️",
      destinations: [
        { name: "前橋市", emoji: "🏞️", description: "赤城山麓に広がる群馬の県都。詩情豊かな街並みが特徴。" },
        { name: "草津町", emoji: "♨️", description: "湯畑を中心に発展した、日本三名泉に数えられる名湯の町。" },
      ],
      spots: [
        { name: "草津温泉", emoji: "♨️", description: "湯畑を中心に発展した、日本三名泉に数えられる名湯。" },
        { name: "富岡製糸場", emoji: "🏭", description: "日本の近代化を支えた世界遺産の製糸工場。" },
      ],
      foods: [
        { name: "上州牛", emoji: "🥩", description: "きめ細かな霜降りが自慢の群馬ブランド牛。" },
        { name: "焼きまんじゅう", emoji: "🍡", description: "蒸しまんじゅうに甘い味噌だれを塗って焼いた群馬のソウルフード。" },
      ],
    },
    {
      id: "saitama",
      name: "埼玉県",
      region: "関東",
      emoji: "🏯",
      destinations: [
        { name: "さいたま市", emoji: "🏙️", description: "大宮を中心に発展する埼玉の県都。スポーツやイベントも盛ん。" },
        { name: "川越市", emoji: "🏮", description: "小江戸と呼ばれる蔵造りの町並みが残る人気の観光地。" },
      ],
      spots: [
        { name: "川越の蔵造りの町並み", emoji: "🏮", description: "「小江戸」と呼ばれる蔵造りの商家が並ぶ人気の観光地。" },
        { name: "秩父の芝桜", emoji: "🌸", description: "羊山公園を一面ピンクに染める春の絶景。" },
      ],
      foods: [
        { name: "草加せんべい", emoji: "🍘", description: "パリッとした食感と醤油の香ばしさが自慢の伝統銘菓。" },
        { name: "深谷ねぎ", emoji: "🥬", description: "甘みが強くやわらかい、関東を代表するブランドねぎ。" },
      ],
    },
    {
      id: "chiba",
      name: "千葉県",
      region: "関東",
      emoji: "🏖️",
      destinations: [
        { name: "千葉市", emoji: "🌊", description: "東京湾に面する千葉の県都。歴史ある成田山にも近い。" },
        { name: "浦安市", emoji: "🎡", description: "テーマパークで世界的に知られる、東京湾岸の街。" },
      ],
      spots: [
        { name: "成田山新勝寺", emoji: "⛩️", description: "初詣参拝者数全国有数を誇る真言宗の古刹。" },
        { name: "房総半島の海岸", emoji: "🌊", description: "サーフィンや海水浴で人気の太平洋に面した美しい海岸線。" },
      ],
      foods: [
        { name: "落花生", emoji: "🥜", description: "香ばしい甘みが特徴の千葉特産の日本一の落花生。" },
        { name: "房総の海鮮", emoji: "🦐", description: "伊勢海老やアジなど、房総の漁港で水揚げされる新鮮な魚介。" },
      ],
    },
    {
      id: "tokyo",
      name: "東京都",
      region: "関東",
      emoji: "🗼",
      destinations: [
        { name: "千代田区", emoji: "🏯", description: "皇居と官公庁街が広がる、日本の政治・行政の中心地。" },
        { name: "台東区", emoji: "🏮", description: "浅草の雷門と仲見世通りでにぎわう、下町情緒あふれるエリア。" },
      ],
      spots: [
        { name: "浅草・浅草寺", emoji: "🏮", description: "雷門と仲見世通りでにぎわう東京屈指の下町観光地。" },
        { name: "明治神宮", emoji: "🌳", description: "都心とは思えぬ緑豊かな杜に包まれた広大な神社。" },
      ],
      foods: [
        { name: "江戸前寿司", emoji: "🍣", description: "東京湾で獲れた魚介を使った江戸前伝統の握り寿司。" },
        { name: "もんじゃ焼き", emoji: "🍳", description: "月島発祥の、鉄板で作る東京下町のソウルフード。" },
      ],
    },
    {
      id: "kanagawa",
      name: "神奈川県",
      region: "関東",
      emoji: "⛩️",
      destinations: [
        { name: "横浜市", emoji: "🎡", description: "港町情緒とみなとみらいの近未来的な景観が同居する国際都市。" },
        { name: "鎌倉市", emoji: "⛩️", description: "鎌倉大仏や鶴岡八幡宮など、武家文化の香る古都。" },
      ],
      spots: [
        { name: "鎌倉大仏（高徳院）", emoji: "🗿", description: "鎌倉のシンボルとして知られる高さ約11メートルの国宝の大仏。" },
        { name: "横浜みなとみらい", emoji: "🎡", description: "観覧車や高層ビルが並ぶ横浜港の近未来的なベイエリア。" },
      ],
      foods: [
        { name: "横浜中華街の中華料理", emoji: "🥟", description: "日本最大の中華街で楽しむ本格中国料理の数々。" },
        { name: "しらす丼", emoji: "🍚", description: "湘南の海で獲れた新鮮なしらすをたっぷりのせた名物丼。" },
      ],
    },

    // ── 中部 ─────────────────────────────
    {
      id: "niigata",
      name: "新潟県",
      region: "中部",
      emoji: "🍶",
      destinations: [
        { name: "新潟市", emoji: "🍶", description: "日本海に面する米どころの県都。日本酒と海の幸が自慢。" },
        { name: "佐渡市", emoji: "🏝️", description: "金山遺跡とトキの生息地として知られる日本海最大の島。" },
      ],
      spots: [
        { name: "佐渡島", emoji: "🏝️", description: "金山遺跡とトキの生息地で知られる日本海最大の島。" },
        { name: "苗場・湯沢の雪景色", emoji: "⛷️", description: "上質なパウダースノーで知られる日本屈指のスキーリゾート。" },
      ],
      foods: [
        { name: "へぎそば", emoji: "🍜", description: "海藻をつなぎに使った、つるりとした喉ごしのそば。" },
        { name: "新潟産コシヒカリ", emoji: "🍚", description: "甘みと粘りが際立つ、日本を代表するブランド米。" },
      ],
    },
    {
      id: "toyama",
      name: "富山県",
      region: "中部",
      emoji: "🏔️",
      destinations: [
        { name: "富山市", emoji: "🏔️", description: "立山連峰を望む、水と緑に恵まれた富山の県都。" },
        { name: "南砺市", emoji: "🏠", description: "五箇山の合掌造り集落が残る、世界遺産の山里。" },
      ],
      spots: [
        { name: "立山黒部アルペンルート", emoji: "🏔️", description: "雪の大谷など雄大な山岳景観を楽しめる山岳観光ルート。" },
        { name: "五箇山合掌造り集落", emoji: "🏠", description: "白川郷と並ぶ、急勾配の茅葺き屋根が並ぶ世界遺産の集落。" },
      ],
      foods: [
        { name: "富山湾の寒ブリ", emoji: "🐟", description: "「天然のいけす」と呼ばれる富山湾で獲れる脂ののった寒ブリ。" },
        { name: "ますの寿司", emoji: "🍣", description: "笹の香りとますの旨みが詰まった富山の駅弁の定番。" },
      ],
    },
    {
      id: "ishikawa",
      name: "石川県",
      region: "中部",
      emoji: "🐟",
      destinations: [
        { name: "金沢市", emoji: "🌳", description: "兼六園に代表される、加賀百万石の風情漂う城下町。" },
        { name: "輪島市", emoji: "🏮", description: "輪島朝市と輪島塗の伝統工芸で知られる能登半島の町。" },
      ],
      spots: [
        { name: "兼六園", emoji: "🌳", description: "日本三名園のひとつに数えられる、四季折々の美しい大名庭園。" },
        { name: "金沢21世紀美術館", emoji: "🎨", description: "円形ガラス張りが印象的な現代アートの人気美術館。" },
      ],
      foods: [
        { name: "金沢おでん", emoji: "🍢", description: "車麩やバイ貝など地元食材を使う金沢流の一年中食べるおでん。" },
        { name: "のどぐろ", emoji: "🐟", description: "「白身のトロ」とも称される、脂がのった高級魚。" },
      ],
    },
    {
      id: "fukui",
      name: "福井県",
      region: "中部",
      emoji: "🦕",
      destinations: [
        { name: "福井市", emoji: "🦕", description: "恐竜博物館で知られる、恐竜のまちとして人気の県都。" },
        { name: "坂井市", emoji: "🌊", description: "断崖絶壁が続く景勝地、東尋坊を擁する港町。" },
      ],
      spots: [
        { name: "東尋坊", emoji: "🌊", description: "日本海の荒波が削った断崖絶壁が1キロ以上続く景勝地。" },
        { name: "福井県立恐竜博物館", emoji: "🦖", description: "世界三大恐竜博物館のひとつに数えられる大迫力の展示施設。" },
      ],
      foods: [
        { name: "越前ガニ", emoji: "🦀", description: "皇室献上ガニとしても知られる福井を代表する冬の味覚。" },
        { name: "越前おろしそば", emoji: "🍜", description: "辛味大根おろしをたっぷりのせて食べる福井名物そば。" },
      ],
    },
    {
      id: "yamanashi",
      name: "山梨県",
      region: "中部",
      emoji: "🍇",
      destinations: [
        { name: "甲府市", emoji: "🍇", description: "武田信玄ゆかりの史跡が残る、ぶどうとワインの県都。" },
        { name: "富士河口湖町", emoji: "🗻", description: "富士山と河口湖の絶景が広がる、人気のリゾートエリア。" },
      ],
      spots: [
        { name: "富士五湖", emoji: "🗻", description: "富士山を湖面に映す、河口湖をはじめとする五つの湖。" },
        { name: "昇仙峡", emoji: "🍁", description: "奇岩と渓流美が織りなす、日本一とも称される渓谷美。" },
      ],
      foods: [
        { name: "ほうとう", emoji: "🍲", description: "太い麺とかぼちゃなどの野菜を味噌仕立てで煮込む山梨の郷土料理。" },
        { name: "甲州ぶどう・ワイン", emoji: "🍇", description: "日本ワイン発祥の地として知られる高品質なぶどうとワイン。" },
      ],
    },
    {
      id: "nagano",
      name: "長野県",
      region: "中部",
      emoji: "⛰️",
      destinations: [
        { name: "長野市", emoji: "⛩️", description: "善光寺の門前町として栄え、多くの参拝者を集める県都。" },
        { name: "松本市", emoji: "🏯", description: "国宝松本城がそびえる、北アルプスを望む城下町。" },
      ],
      spots: [
        { name: "上高地", emoji: "🏔️", description: "梓川と穂高連峰が織りなす、日本屈指の山岳景勝地。" },
        { name: "松本城", emoji: "🏯", description: "現存する日本最古級の五重六階の天守を持つ国宝の城。" },
      ],
      foods: [
        { name: "信州そば", emoji: "🍜", description: "澄んだ水と冷涼な気候で育まれる、香り高い信州のそば。" },
        { name: "野沢菜漬け", emoji: "🥬", description: "野沢温泉村発祥の、長野の食卓に欠かせない伝統の漬物。" },
      ],
    },
    {
      id: "gifu",
      name: "岐阜県",
      region: "中部",
      emoji: "🏘️",
      destinations: [
        { name: "高山市", emoji: "🏘️", description: "飛騨の小京都と称される、古い町並みが残る観光都市。" },
        { name: "白川村", emoji: "🏠", description: "合掌造り集落が残る、世界遺産に登録された山里。" },
      ],
      spots: [
        { name: "白川郷", emoji: "🏠", description: "急勾配の茅葺き屋根が並ぶ、世界遺産の合掌造り集落。" },
        { name: "下呂温泉", emoji: "♨️", description: "日本三名泉のひとつに数えられる、なめらかな湯が自慢の名湯。" },
      ],
      foods: [
        { name: "飛騨牛", emoji: "🥩", description: "きめ細かな肉質と豊かな風味を誇る岐阜のブランド和牛。" },
        { name: "朴葉味噌", emoji: "🍃", description: "朴の葉の上で味噌を焼きながら食べる飛騨地方の郷土料理。" },
      ],
    },
    {
      id: "shizuoka",
      name: "静岡県",
      region: "中部",
      emoji: "🍵",
      destinations: [
        { name: "静岡市", emoji: "🍵", description: "駿河湾と富士山を望む、お茶の産地として知られる県都。" },
        { name: "熱海市", emoji: "♨️", description: "相模湾を望む景勝地に湧く、古くから愛される温泉リゾート。" },
      ],
      spots: [
        { name: "富士山本宮浅間大社", emoji: "🗻", description: "富士山信仰の総本宮で、雄大な富士の姿を望める。" },
        { name: "熱海温泉", emoji: "♨️", description: "相模湾を望む景勝地に湧く、古くから愛される温泉地。" },
      ],
      foods: [
        { name: "静岡茶", emoji: "🍵", description: "生産量日本一を誇る、香り高い静岡自慢の緑茶。" },
        { name: "桜えびのかき揚げ", emoji: "🍤", description: "駿河湾でのみ水揚げされる桜えびを使った香ばしいかき揚げ。" },
      ],
    },
    {
      id: "aichi",
      name: "愛知県",
      region: "中部",
      emoji: "🏯",
      destinations: [
        { name: "名古屋市", emoji: "🏯", description: "名古屋城がそびえる、ものづくりと独自のグルメ文化を誇る中部随一の都市。" },
        { name: "犬山市", emoji: "🏯", description: "国宝犬山城が木曽川を望む、風情ある城下町。" },
      ],
      spots: [
        { name: "名古屋城", emoji: "🏯", description: "金の鯱鉾で知られる、徳川家康ゆかりの名城。" },
        { name: "熱田神宮", emoji: "⛩️", description: "三種の神器のひとつ草薙神剣を祀る、伊勢神宮に次ぐ格式の神社。" },
      ],
      foods: [
        { name: "ひつまぶし", emoji: "🍱", description: "うなぎを刻んでお櫃に盛り、三通りの食べ方で楽しむ名古屋名物。" },
        { name: "味噌カツ", emoji: "🍖", description: "八丁味噌の濃厚なたれをかけた名古屋を代表するご当地グルメ。" },
      ],
    },

    // ── 近畿 ─────────────────────────────
    {
      id: "mie",
      name: "三重県",
      region: "近畿",
      emoji: "⛩️",
      destinations: [
        { name: "伊勢市", emoji: "⛩️", description: "伊勢神宮の門前町として栄える、日本人の心のふるさと。" },
        { name: "鳥羽市", emoji: "🦞", description: "海女漁とリアス海岸の絶景で知られる、伊勢志摩の港町。" },
      ],
      spots: [
        { name: "伊勢神宮", emoji: "⛩️", description: "日本人が一生に一度は訪れたいと願う、皇室ゆかりの最高格式の神社。" },
        { name: "熊野古道", emoji: "🥾", description: "世界遺産に登録された、熊野三山へ続く古の参詣道。" },
      ],
      foods: [
        { name: "伊勢海老", emoji: "🦞", description: "祝いの席に欠かせない、三重を代表する高級食材。" },
        { name: "松阪牛", emoji: "🥩", description: "きめ細やかな霜降りで知られる、日本三大和牛のひとつ。" },
      ],
    },
    {
      id: "shiga",
      name: "滋賀県",
      region: "近畿",
      emoji: "🌊",
      destinations: [
        { name: "大津市", emoji: "🌊", description: "琵琶湖畔に広がる、水と歴史に恵まれた滋賀の県都。" },
        { name: "彦根市", emoji: "🏯", description: "国宝彦根城が残る、井伊家ゆかりの城下町。" },
      ],
      spots: [
        { name: "琵琶湖", emoji: "🌊", description: "面積・貯水量ともに日本一を誇る「近畿の水がめ」。" },
        { name: "彦根城", emoji: "🏯", description: "国宝五城のひとつに数えられる、井伊家ゆかりの美しい天守。" },
      ],
      foods: [
        { name: "近江牛", emoji: "🥩", description: "日本三大和牛のひとつに数えられる、上品な旨みが特徴の銘柄牛。" },
        { name: "鮒ずし", emoji: "🍚", description: "琵琶湖名産のニゴロブナを使った、日本最古級の発酵寿司。" },
      ],
    },
    {
      id: "kyoto",
      name: "京都府",
      region: "近畿",
      emoji: "⛩️",
      destinations: [
        { name: "京都市", emoji: "⛩️", description: "神社仏閣と伝統文化が息づく、千年の都と称される古都。" },
        { name: "宮津市", emoji: "🌲", description: "天橋立の絶景で知られる、日本海に面した港町。" },
      ],
      spots: [
        { name: "清水寺", emoji: "⛩️", description: "「清水の舞台」で知られる、京都を象徴する世界遺産の寺院。" },
        { name: "伏見稲荷大社", emoji: "⛩️", description: "千本鳥居が続く幻想的な参道で世界的に人気の神社。" },
      ],
      foods: [
        { name: "湯豆腐", emoji: "🍲", description: "南禅寺周辺で古くから親しまれる、京都を代表する精進料理。" },
        { name: "京漬物", emoji: "🥒", description: "しば漬けやすぐき漬けなど、京都の伝統的な漬物文化。" },
      ],
    },
    {
      id: "osaka",
      name: "大阪府",
      region: "近畿",
      emoji: "🐙",
      destinations: [
        { name: "大阪市", emoji: "🐙", description: "食い倒れの町として知られる、西日本随一の商業都市。" },
        { name: "堺市", emoji: "🏛️", description: "百舌鳥古墳群が残る、古くから貿易で栄えた歴史都市。" },
      ],
      spots: [
        { name: "大阪城", emoji: "🏯", description: "豊臣秀吉が築いた、大阪のシンボルとして知られる名城。" },
        { name: "道頓堀", emoji: "🎆", description: "ネオンきらめくグリコサインで有名な、大阪ミナミの繁華街。" },
      ],
      foods: [
        { name: "たこ焼き", emoji: "🐙", description: "外はカリッと中はとろりの、大阪を代表する粉もんグルメ。" },
        { name: "お好み焼き", emoji: "🥞", description: "ソースと鰹節の香りが食欲をそそる、大阪ソウルフード。" },
      ],
    },
    {
      id: "hyogo",
      name: "兵庫県",
      region: "近畿",
      emoji: "🏯",
      destinations: [
        { name: "神戸市", emoji: "⛵", description: "異国情緒あふれるおしゃれな港町。神戸牛など食も充実。" },
        { name: "姫路市", emoji: "🏯", description: "白鷺城とも呼ばれる世界遺産・姫路城がそびえる城下町。" },
      ],
      spots: [
        { name: "姫路城", emoji: "🏯", description: "白鷺城の異名を持つ、日本初の世界文化遺産に登録された名城。" },
        { name: "神戸港・北野異人館街", emoji: "⛵", description: "港町らしい異国情緒あふれる街並みが広がる人気エリア。" },
      ],
      foods: [
        { name: "神戸牛", emoji: "🥩", description: "世界的に名高い、きめ細かな霜降りが自慢のブランド和牛。" },
        { name: "明石焼き", emoji: "🍳", description: "だし汁につけて食べる、たこ焼きの元祖ともいわれる明石名物。" },
      ],
    },
    {
      id: "nara",
      name: "奈良県",
      region: "近畿",
      emoji: "🦌",
      destinations: [
        { name: "奈良市", emoji: "🦌", description: "東大寺の大仏と鹿で親しまれる、日本最古級の古都。" },
        { name: "吉野町", emoji: "🌸", description: "一目千本と称される桜の名所として知られる、歴史ある山里。" },
      ],
      spots: [
        { name: "東大寺", emoji: "🗿", description: "奈良の大仏で知られる、世界最大級の木造建築を誇る寺院。" },
        { name: "奈良公園", emoji: "🦌", description: "野生の鹿が自由に歩き回る、市民や観光客に愛される広大な公園。" },
      ],
      foods: [
        { name: "柿の葉寿司", emoji: "🍣", description: "柿の葉で包んだ鯖や鮭の寿司、奈良の郷土料理。" },
        { name: "奈良漬け", emoji: "🥒", description: "酒粕にじっくり漬け込んだ、奈良を代表する伝統の漬物。" },
      ],
    },
    {
      id: "wakayama",
      name: "和歌山県",
      region: "近畿",
      emoji: "🐟",
      destinations: [
        { name: "和歌山市", emoji: "🏯", description: "紀州徳川家の城下町として栄えた、和歌山の県都。" },
        { name: "高野町", emoji: "⛩️", description: "弘法大師空海が開いた、真言密教の聖地が広がる山里。" },
      ],
      spots: [
        { name: "高野山", emoji: "⛩️", description: "弘法大師空海が開いた、真言密教の聖地として知られる霊場。" },
        { name: "那智の滝", emoji: "💦", description: "落差日本一を誇る、熊野三山のひとつ那智大社の御神体の滝。" },
      ],
      foods: [
        { name: "紀州南高梅", emoji: "🍋", description: "肉厚で柔らかい、日本一の梅の産地として知られるブランド梅。" },
        { name: "和歌山ラーメン", emoji: "🍜", description: "豚骨醤油の濃厚なスープが特徴の和歌山発祥のラーメン。" },
      ],
    },

    // ── 中国 ─────────────────────────────
    {
      id: "tottori",
      name: "鳥取県",
      region: "中国",
      emoji: "🏜️",
      destinations: [
        { name: "鳥取市", emoji: "🏜️", description: "日本最大級の海岸砂丘、鳥取砂丘を抱える県都。" },
        { name: "倉吉市", emoji: "🏘️", description: "白壁土蔵群が残る、情緒ある商家町。" },
      ],
      spots: [
        { name: "鳥取砂丘", emoji: "🏜️", description: "風が作り出す風紋が美しい、日本最大級の海岸砂丘。" },
        { name: "三徳山三佛寺投入堂", emoji: "⛰️", description: "断崖絶壁に建つ、日本一危険な国宝ともいわれる神秘的なお堂。" },
      ],
      foods: [
        { name: "松葉ガニ", emoji: "🦀", description: "冬の味覚の王様として名高い、山陰地方特産のズワイガニ。" },
        { name: "鳥取砂丘らっきょう", emoji: "🧅", description: "砂丘の砂地で育つ、シャキシャキとした歯ごたえのらっきょう。" },
      ],
    },
    {
      id: "shimane",
      name: "島根県",
      region: "中国",
      emoji: "⛩️",
      destinations: [
        { name: "松江市", emoji: "🏯", description: "堀川めぐりが人気の、水の都と称される城下町。" },
        { name: "出雲市", emoji: "⛩️", description: "縁結びの神様、出雲大社の門前町として知られる。" },
      ],
      spots: [
        { name: "出雲大社", emoji: "⛩️", description: "縁結びの神様として全国から参拝者が訪れる由緒ある大社。" },
        { name: "石見銀山", emoji: "⛏️", description: "かつて世界の銀の三分の一を産出したとされる世界遺産の鉱山跡。" },
      ],
      foods: [
        { name: "出雲そば", emoji: "🍜", description: "丸い漆器の割子に盛る、島根を代表する独特のそば文化。" },
        { name: "しじみ汁", emoji: "🍲", description: "宍道湖名産のしじみを使った、旨みたっぷりの汁物。" },
      ],
    },
    {
      id: "okayama",
      name: "岡山県",
      region: "中国",
      emoji: "🍑",
      destinations: [
        { name: "岡山市", emoji: "🌳", description: "岡山後楽園を擁する、桃太郎伝説ゆかりの県都。" },
        { name: "倉敷市", emoji: "🏘️", description: "白壁の蔵屋敷と柳並木が美しい、美観地区で知られる町。" },
      ],
      spots: [
        { name: "岡山後楽園", emoji: "🌳", description: "日本三名園のひとつに数えられる、広々とした美しい大名庭園。" },
        { name: "倉敷美観地区", emoji: "🏘️", description: "白壁の蔵屋敷と柳並木の運河が織りなす、江戸情緒残る町並み。" },
      ],
      foods: [
        { name: "岡山の白桃", emoji: "🍑", description: "上品な甘さととろけるような果肉が自慢の高級桃。" },
        { name: "ままかり寿司", emoji: "🍣", description: "隣にご飯を借りに行くほど美味とされる、岡山の郷土寿司。" },
      ],
    },
    {
      id: "hiroshima",
      name: "広島県",
      region: "中国",
      emoji: "⛩️",
      destinations: [
        { name: "広島市", emoji: "🕊️", description: "平和記念都市として世界的に知られる、中国地方随一の都市。" },
        { name: "廿日市市", emoji: "⛩️", description: "海に浮かぶ大鳥居で有名な、厳島神社(宮島)を擁する町。" },
      ],
      spots: [
        { name: "厳島神社（宮島）", emoji: "⛩️", description: "海に浮かぶ朱色の大鳥居で知られる世界遺産の神社。" },
        { name: "原爆ドーム", emoji: "🕊️", description: "平和への祈りを込めて保存される、世界遺産の被爆建造物。" },
      ],
      foods: [
        { name: "広島お好み焼き", emoji: "🥞", description: "そばを重ねて焼く層状スタイルが特徴の広島流お好み焼き。" },
        { name: "牡蠣", emoji: "🦪", description: "生産量日本一を誇る、広島湾で育つ濃厚な味わいの牡蠣。" },
      ],
    },
    {
      id: "yamaguchi",
      name: "山口県",
      region: "中国",
      emoji: "🐡",
      destinations: [
        { name: "山口市", emoji: "🏘️", description: "西の京と称される、大内文化が息づく県都。" },
        { name: "岩国市", emoji: "🌉", description: "五連のアーチが美しい錦帯橋がかかる城下町。" },
      ],
      spots: [
        { name: "錦帯橋", emoji: "🌉", description: "五連の美しいアーチが特徴的な、日本三名橋のひとつ。" },
        { name: "秋吉台", emoji: "🌿", description: "日本最大級のカルスト台地と鍾乳洞が広がる雄大な景観。" },
      ],
      foods: [
        { name: "ふぐ料理", emoji: "🐡", description: "下関を中心に古くから親しまれる、山口を代表する高級食材。" },
        { name: "瓦そば", emoji: "🍜", description: "熱した瓦の上で茶そばを焼くように食べる山口のご当地グルメ。" },
      ],
    },

    // ── 四国 ─────────────────────────────
    {
      id: "tokushima",
      name: "徳島県",
      region: "四国",
      emoji: "🕺",
      destinations: [
        { name: "徳島市", emoji: "🕺", description: "阿波おどりで街全体が熱気に包まれる、徳島の県都。" },
        { name: "三好市", emoji: "🌉", description: "祖谷渓のかずら橋など秘境の景観で知られる山里。" },
      ],
      spots: [
        { name: "鳴門の渦潮", emoji: "🌀", description: "潮の満ち引きで生まれる、世界最大級の渦潮の迫力を間近で楽しめる。" },
        { name: "祖谷のかずら橋", emoji: "🌉", description: "シラクチカズラで編まれた、秘境祖谷渓に架かるスリル満点の吊り橋。" },
      ],
      foods: [
        { name: "阿波尾鶏", emoji: "🍗", description: "しっかりとした肉質と豊かな旨みが自慢の徳島の地鶏。" },
        { name: "徳島ラーメン", emoji: "🍜", description: "甘辛い豚バラ肉と生卵をのせた、徳島発祥の茶色いスープのラーメン。" },
      ],
    },
    {
      id: "kagawa",
      name: "香川県",
      region: "四国",
      emoji: "🍜",
      destinations: [
        { name: "高松市", emoji: "⛴️", description: "瀬戸内海の玄関口として栄える、香川の県都。" },
        { name: "琴平町", emoji: "⛩️", description: "こんぴらさんの愛称で親しまれる、金刀比羅宮の門前町。" },
      ],
      spots: [
        { name: "金刀比羅宮（こんぴらさん）", emoji: "⛩️", description: "「一生に一度はこんぴら参り」と称される、長い石段で有名な神社。" },
        { name: "直島", emoji: "🎨", description: "草間彌生の水玉かぼちゃなど現代アートが点在する瀬戸内の島。" },
      ],
      foods: [
        { name: "讃岐うどん", emoji: "🍜", description: "コシの強さと喉ごしの良さで全国的に名高い香川のソウルフード。" },
        { name: "骨付き鳥", emoji: "🍗", description: "スパイスの効いたピリ辛の味付けが特徴の丸亀発祥の名物料理。" },
      ],
    },
    {
      id: "ehime",
      name: "愛媛県",
      region: "四国",
      emoji: "🍊",
      destinations: [
        { name: "松山市", emoji: "♨️", description: "道後温泉と松山城で知られる、四国最大級の城下町。" },
        { name: "今治市", emoji: "🚴", description: "しまなみ海道の起点であり、タオルの産地としても有名。" },
      ],
      spots: [
        { name: "道後温泉", emoji: "♨️", description: "日本最古の温泉のひとつとされ、多くの文人にも愛された名湯。" },
        { name: "松山城", emoji: "🏯", description: "現存12天守のひとつに数えられる、松山市街を見下ろす名城。" },
      ],
      foods: [
        { name: "愛媛みかん", emoji: "🍊", description: "温暖な瀬戸内の気候で育つ、全国屈指の生産量を誇る柑橘。" },
        { name: "じゃこ天", emoji: "🐟", description: "小魚を骨ごとすり身にして揚げた、愛媛宇和島の郷土料理。" },
      ],
    },
    {
      id: "kochi",
      name: "高知県",
      region: "四国",
      emoji: "🐟",
      destinations: [
        { name: "高知市", emoji: "🎏", description: "よさこい祭りと坂本龍馬ゆかりの史跡で知られる県都。" },
        { name: "四万十市", emoji: "🛶", description: "最後の清流と称される四万十川が流れる、自然豊かな町。" },
      ],
      spots: [
        { name: "桂浜", emoji: "🌊", description: "坂本龍馬の銅像が太平洋を望んで立つ、月の名所としても有名な浜。" },
        { name: "四万十川", emoji: "🛶", description: "「最後の清流」と称される、ダムのない雄大な一級河川。" },
      ],
      foods: [
        { name: "カツオのたたき", emoji: "🐟", description: "藁焼きの香ばしさが食欲をそそる、高知を代表する郷土料理。" },
        { name: "皿鉢料理", emoji: "🍱", description: "刺身や寿司を大皿に豪快に盛り付ける、宴席に欠かせない土佐料理。" },
      ],
    },

    // ── 九州・沖縄 ─────────────────────────────
    {
      id: "fukuoka",
      name: "福岡県",
      region: "九州・沖縄",
      emoji: "🍜",
      destinations: [
        { name: "福岡市", emoji: "🏮", description: "屋台とグルメで賑わう、九州最大の都市。" },
        { name: "太宰府市", emoji: "⛩️", description: "学問の神様、菅原道真を祀る太宰府天満宮の門前町。" },
      ],
      spots: [
        { name: "太宰府天満宮", emoji: "⛩️", description: "学問の神様菅原道真を祀る、受験生に人気の由緒ある神社。" },
        { name: "博多の屋台街", emoji: "🏮", description: "中洲や天神に軒を連ねる、夜な夜な賑わう博多名物の屋台。" },
      ],
      foods: [
        { name: "博多とんこつラーメン", emoji: "🍜", description: "白濁した濃厚なスープと細麺が特徴の博多発祥のラーメン。" },
        { name: "もつ鍋", emoji: "🍲", description: "新鮮な牛もつとニラ、キャベツを煮込む博多を代表する鍋料理。" },
      ],
    },
    {
      id: "saga",
      name: "佐賀県",
      region: "九州・沖縄",
      emoji: "🏺",
      destinations: [
        { name: "佐賀市", emoji: "🎈", description: "バルーンフェスタで知られる、佐賀の県都。" },
        { name: "有田町", emoji: "🏺", description: "400年以上の歴史を誇る、有田焼の産地として知られる町。" },
      ],
      spots: [
        { name: "吉野ヶ里遺跡", emoji: "🏛️", description: "弥生時代最大級の環壕集落跡が復元された国内屈指の史跡公園。" },
        { name: "有田・伊万里の窯元", emoji: "🏺", description: "400年の歴史を持つ、日本を代表する磁器の産地。" },
      ],
      foods: [
        { name: "佐賀牛", emoji: "🥩", description: "とろけるような口どけが自慢の、佐賀が誇るブランド和牛。" },
        { name: "呼子のイカ", emoji: "🦑", description: "透き通るほど新鮮な、活き造りで味わう呼子名物のイカ。" },
      ],
    },
    {
      id: "nagasaki",
      name: "長崎県",
      region: "九州・沖縄",
      emoji: "⛪",
      destinations: [
        { name: "長崎市", emoji: "⛪", description: "異国情緒あふれる港町。グラバー園など洋館が点在する。" },
        { name: "佐世保市", emoji: "🌷", description: "ハウステンボスが広がる、花と光に彩られた港町。" },
      ],
      spots: [
        { name: "グラバー園", emoji: "🏛️", description: "洋館が立ち並ぶ、長崎港を見下ろす異国情緒あふれる庭園。" },
        { name: "ハウステンボス", emoji: "🌷", description: "オランダの街並みを再現した、花と光の大規模テーマパーク。" },
      ],
      foods: [
        { name: "長崎ちゃんぽん", emoji: "🍜", description: "野菜と魚介がたっぷり入った、長崎発祥の中華風麺料理。" },
        { name: "カステラ", emoji: "🍰", description: "しっとりとした食感が特徴の、南蛮貿易由来の長崎銘菓。" },
      ],
    },
    {
      id: "kumamoto",
      name: "熊本県",
      region: "九州・沖縄",
      emoji: "🐻",
      destinations: [
        { name: "熊本市", emoji: "🏯", description: "熊本城がそびえる、九州中部の中心都市。" },
        { name: "阿蘇市", emoji: "🌋", description: "世界最大級のカルデラを抱く、雄大な高原の町。" },
      ],
      spots: [
        { name: "熊本城", emoji: "🏯", description: "加藤清正が築いた、日本三名城のひとつに数えられる壮麗な城。" },
        { name: "阿蘇山", emoji: "🌋", description: "世界最大級のカルデラを持つ、雄大な景観の活火山。" },
      ],
      foods: [
        { name: "馬刺し", emoji: "🐴", description: "新鮮な赤身肉を生で味わう、熊本を代表する郷土料理。" },
        { name: "熊本ラーメン", emoji: "🍜", description: "焦がしニンニクの香りが香ばしい、豚骨ベースのラーメン。" },
      ],
    },
    {
      id: "oita",
      name: "大分県",
      region: "九州・沖縄",
      emoji: "♨️",
      destinations: [
        { name: "大分市", emoji: "🌊", description: "別府湾に面する、大分の県都。" },
        { name: "別府市", emoji: "♨️", description: "湯けむり漂う、源泉数・湧出量ともに日本一の温泉郷。" },
      ],
      spots: [
        { name: "別府温泉", emoji: "♨️", description: "地獄めぐりでも知られる、多彩な泉質を誇る日本屈指の温泉地。" },
        { name: "由布院温泉", emoji: "🏔️", description: "由布岳を望む、洗練された旅館とカフェが並ぶ人気の温泉地。" },
      ],
      foods: [
        { name: "とり天", emoji: "🍗", description: "天ぷらのように揚げた大分名物の鶏料理、酢醤油で食べる。" },
        { name: "関サバ・関アジ", emoji: "🐟", description: "豊予海峡で一本釣りされる、ブランド化された高級魚。" },
      ],
    },
    {
      id: "miyazaki",
      name: "宮崎県",
      region: "九州・沖縄",
      emoji: "🌺",
      destinations: [
        { name: "宮崎市", emoji: "🌺", description: "南国ムード漂う、フェニックスの並木道が印象的な県都。" },
        { name: "高千穂町", emoji: "💦", description: "神話伝説の残る高千穂峡の絶景で知られる山里。" },
      ],
      spots: [
        { name: "高千穂峡", emoji: "💦", description: "柱状節理の断崖と真名井の滝が織りなす、神話ゆかりの美しい峡谷。" },
        { name: "青島神社", emoji: "🌴", description: "「鬼の洗濯板」と呼ばれる奇岩に囲まれた、南国風情の神社。" },
      ],
      foods: [
        { name: "宮崎地鶏の炭火焼", emoji: "🍗", description: "炭火の香ばしさが食欲をそそる、宮崎を代表する郷土グルメ。" },
        { name: "チキン南蛮", emoji: "🍗", description: "甘酢とタルタルソースが絡む、宮崎発祥の全国的人気メニュー。" },
      ],
    },
    {
      id: "kagoshima",
      name: "鹿児島県",
      region: "九州・沖縄",
      emoji: "🌋",
      destinations: [
        { name: "鹿児島市", emoji: "🌋", description: "今なお噴煙を上げる桜島を望む、南国情緒あふれる県都。" },
        { name: "屋久島町", emoji: "🌲", description: "樹齢数千年の縄文杉が茂る、世界自然遺産の島。" },
      ],
      spots: [
        { name: "桜島", emoji: "🌋", description: "今なお噴煙を上げ続ける、鹿児島のシンボルである活火山。" },
        { name: "屋久島", emoji: "🌲", description: "樹齢数千年の縄文杉で知られる、世界自然遺産の島。" },
      ],
      foods: [
        { name: "黒豚料理", emoji: "🐷", description: "しっかりとした旨みと甘みが自慢の、鹿児島特産のブランド豚。" },
        { name: "さつまあげ", emoji: "🐟", description: "魚のすり身を揚げた、鹿児島に古くから伝わる伝統の練り物。" },
      ],
    },
    {
      id: "okinawa",
      name: "沖縄県",
      region: "九州・沖縄",
      emoji: "🌺",
      destinations: [
        { name: "那覇市", emoji: "🌺", description: "国際通りで賑わう、沖縄の政治・経済の中心地。" },
        { name: "恩納村", emoji: "🏖️", description: "エメラルドグリーンの海が広がる、沖縄屈指のリゾートエリア。" },
      ],
      spots: [
        { name: "首里城", emoji: "🏯", description: "琉球王国の栄華を伝える、赤瓦が印象的な世界遺産の城跡。" },
        { name: "美ら海水族館", emoji: "🐋", description: "巨大なジンベエザメが泳ぐ大水槽で知られる人気の水族館。" },
      ],
      foods: [
        { name: "沖縄そば", emoji: "🍜", description: "小麦粉麺と豚だしスープが特徴の、そば粉を使わない沖縄独自の麺料理。" },
        { name: "ゴーヤーチャンプルー", emoji: "🥗", description: "ゴーヤと豆腐、豚肉を炒め合わせた沖縄の定番家庭料理。" },
      ],
    },
  ];

  var REGIONS_IN_ORDER = [
    "北海道",
    "東北",
    "関東",
    "中部",
    "近畿",
    "中国",
    "四国",
    "九州・沖縄",
  ];

  window.GACHA_DATA = GACHA_DATA;
  window.GACHA_REGIONS = REGIONS_IN_ORDER;
})();
