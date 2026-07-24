/**
 * DOM配線とアプリのエントリーポイント。
 */
(function () {
  "use strict";

  var state = {
    category: "destination",
    scope: { type: "all" },
  };

  var categoryTabsEl = document.getElementById("categoryTabs");
  var regionFilterEl = document.getElementById("regionFilter");
  var prefectureFilterEl = document.getElementById("prefectureFilter");
  var drawBtn = document.getElementById("drawBtn");
  var crankBtn = document.getElementById("gachaCrank");

  var resultCard = document.getElementById("resultCard");
  var resultEmoji = document.getElementById("resultEmoji");
  var resultSublabel = document.getElementById("resultSublabel");
  var resultName = document.getElementById("resultName");
  var resultDescription = document.getElementById("resultDescription");
  var resultMapFrame = document.getElementById("resultMapFrame");
  var resultActions = document.getElementById("resultActions");

  var againBtn = document.getElementById("againBtn");
  var mapBtn = document.getElementById("mapBtn");
  var shareBtn = document.getElementById("shareBtn");
  var copyBtn = document.getElementById("copyBtn");
  var copyFeedback = document.getElementById("copyFeedback");

  var allControls = [drawBtn, crankBtn, prefectureFilterEl].concat(
    Array.prototype.slice.call(categoryTabsEl.querySelectorAll("button")),
    Array.prototype.slice.call(regionFilterEl.querySelectorAll("button"))
  );

  function setControlsDisabled(disabled) {
    allControls.forEach(function (el) {
      el.disabled = disabled;
    });
    drawBtn.setAttribute("aria-busy", disabled ? "true" : "false");
  }

  function renderResult(result) {
    resultEmoji.textContent = result.emoji || "";
    resultSublabel.textContent = result.sublabel;
    resultName.textContent = result.name;
    resultDescription.textContent = result.description || "";
    resultMapFrame.src = window.Share.buildMapEmbedUrl(result);

    resultCard.hidden = true;
    // 一度hiddenを付け直してから外すことで、毎回リビール演出をリスタートさせる
    void resultCard.offsetWidth;
    resultCard.hidden = false;
    resultActions.hidden = false;

    shareBtn.href = window.Share.buildTweetUrl(result);
    mapBtn.href = window.Share.buildMapUrl(result);
    copyFeedback.textContent = "";

    copyBtn.onclick = function () {
      window.Share.copyText(result).then(function (ok) {
        copyFeedback.textContent = ok
          ? "結果をコピーしました。"
          : "コピーに対応していない環境です。";
      });
    };
  }

  function draw() {
    if (window.Machine.isBusy()) {
      return;
    }
    var result = window.Draw.pick(state.category, state.scope);
    if (!result) {
      return;
    }
    setControlsDisabled(true);
    window.Machine.play(result, {
      onReveal: renderResult,
      onComplete: function () {
        setControlsDisabled(false);
        againBtn.focus();
      },
    });
  }

  function selectCategory(category) {
    state.category = category;
    Array.prototype.forEach.call(categoryTabsEl.querySelectorAll("button"), function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.category === category));
    });
  }

  /**
   * 地域スコープを設定し、地方フィルタ(ボタン群)と都道府県フィルタ(セレクト)の
   * 表示を同期する。地方と都道府県はどちらか一方のみが有効な、排他的な絞り込み。
   */
  function setScope(scope) {
    state.scope = scope;
    Array.prototype.forEach.call(regionFilterEl.querySelectorAll("button"), function (btn) {
      var active = scope.type === "region" ? btn.dataset.region === scope.value : btn.dataset.region === "all";
      btn.setAttribute("aria-pressed", String(active));
    });
    prefectureFilterEl.value = scope.type === "prefecture" ? scope.value : "all";
  }

  categoryTabsEl.addEventListener("click", function (event) {
    var btn = event.target.closest("button[data-category]");
    if (!btn || window.Machine.isBusy()) {
      return;
    }
    selectCategory(btn.dataset.category);
  });

  regionFilterEl.addEventListener("click", function (event) {
    var btn = event.target.closest("button[data-region]");
    if (!btn || window.Machine.isBusy()) {
      return;
    }
    var region = btn.dataset.region;
    setScope(region === "all" ? { type: "all" } : { type: "region", value: region });
  });

  prefectureFilterEl.addEventListener("change", function () {
    var prefId = prefectureFilterEl.value;
    setScope(prefId === "all" ? { type: "all" } : { type: "prefecture", value: prefId });
  });

  drawBtn.addEventListener("click", draw);
  crankBtn.addEventListener("click", draw);

  againBtn.addEventListener("click", function () {
    resultCard.hidden = true;
    resultActions.hidden = true;
    copyFeedback.textContent = "";
    window.Machine.reset();
    drawBtn.focus();
  });

  selectCategory(state.category);
  setScope(state.scope);
})();
