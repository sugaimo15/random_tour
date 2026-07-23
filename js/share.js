/**
 * 結果のシェア関連ユーティリティ（X share intent / クリップボードコピー）。
 * バックエンドなし、外部ライブラリなし。
 */
(function () {
  "use strict";

  var CATEGORY_LABEL = {
    destination: "旅先",
    spots: "観光地",
    foods: "ご当地グルメ",
  };

  function buildShareText(result) {
    var label = CATEGORY_LABEL[result.category] || "結果";
    var sub = result.sublabel ? "（" + result.sublabel + "）" : "";
    return (
      "ガチャで出た" + label + "は【" + result.name + "】" + sub + "！ #全国ガチャ旅"
    );
  }

  function buildTweetUrl(result) {
    var text = buildShareText(result);
    var pageUrl = window.location.href.split("#")[0].split("?")[0];
    return (
      "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(text) +
      "&url=" +
      encodeURIComponent(pageUrl)
    );
  }

  function buildMapUrl(result) {
    var query = result.sublabel ? result.sublabel + " " + result.name : result.name;
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }

  function copyText(result) {
    var text = buildShareText(result);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard
        .writeText(text)
        .then(function () {
          return true;
        })
        .catch(function () {
          return false;
        });
    }
    return Promise.resolve(false);
  }

  window.Share = {
    buildShareText: buildShareText,
    buildTweetUrl: buildTweetUrl,
    buildMapUrl: buildMapUrl,
    copyText: copyText,
  };
})();
