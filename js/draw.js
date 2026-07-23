/**
 * 抽選ロジック — カテゴリ×地方の候補プールを組み立て、直前結果と同じものを
 * 避けつつランダムに1件選ぶ。
 */
(function () {
  "use strict";

  var lastKeyByCategory = {
    destination: null,
    spots: null,
    foods: null,
  };

  function buildPool(category, region) {
    var candidates = window.GACHA_DATA.filter(function (pref) {
      return region === "all" || pref.region === region;
    });

    var units = [];
    var listName =
      category === "destination" ? "destinations" : category === "spots" ? "spots" : "foods";

    candidates.forEach(function (pref) {
      pref[listName].forEach(function (item) {
        units.push({
          key: pref.id + "|" + item.name,
          emoji: item.emoji,
          name: item.name,
          sublabel: pref.name,
          description: item.description,
        });
      });
    });

    return units;
  }

  var Draw = {
    /**
     * @param {"destination"|"spots"|"foods"} category
     * @param {string} region "all" または地方名
     * @returns {object|null} 選ばれた結果。候補が無ければ null。
     */
    pick: function (category, region) {
      var pool = buildPool(category, region);
      if (pool.length === 0) {
        return null;
      }

      var lastKey = lastKeyByCategory[category];
      var candidatePool = pool;
      if (pool.length > 1 && lastKey) {
        var filtered = pool.filter(function (unit) {
          return unit.key !== lastKey;
        });
        if (filtered.length > 0) {
          candidatePool = filtered;
        }
      }

      var choice = candidatePool[Math.floor(Math.random() * candidatePool.length)];
      lastKeyByCategory[category] = choice.key;

      return {
        category: category,
        key: choice.key,
        emoji: choice.emoji,
        name: choice.name,
        sublabel: choice.sublabel,
        description: choice.description,
      };
    },

    /** 候補数の確認などに使う（テスト・デバッグ用） */
    poolSize: function (category, region) {
      return buildPool(category, region).length;
    },
  };

  window.Draw = Draw;
})();
