/**
 * 抽選ロジック — カテゴリ×地域スコープの候補プールを組み立て、直前結果と
 * 同じものを避けつつランダムに1件選ぶ。
 * 地域スコープ(scope)は次のいずれか:
 *   { type: "all" }
 *   { type: "region", value: "東北" などの地方名 }
 *   { type: "prefecture", value: "hokkaido" などの都道府県id }
 */
(function () {
  "use strict";

  var lastKeyByCategory = {
    destination: null,
    spots: null,
    foods: null,
  };

  function buildPool(category, scope) {
    var candidates = window.GACHA_DATA.filter(function (pref) {
      if (scope.type === "prefecture") {
        return pref.id === scope.value;
      }
      if (scope.type === "region") {
        return pref.region === scope.value;
      }
      return true;
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
     * @param {{type: "all"|"region"|"prefecture", value?: string}} scope
     * @returns {object|null} 選ばれた結果。候補が無ければ null。
     */
    pick: function (category, scope) {
      var pool = buildPool(category, scope);
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
    poolSize: function (category, scope) {
      return buildPool(category, scope).length;
    },
  };

  window.Draw = Draw;
})();
