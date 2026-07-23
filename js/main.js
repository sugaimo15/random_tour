/**
 * DOM配線とアプリのエントリーポイント。
 */
(function () {
  "use strict";

  var state = {
    category: "destination",
    region: "all",
  };

  var categoryTabsEl = document.getElementById("categoryTabs");
  var regionFilterEl = document.getElementById("regionFilter");
  var drawBtn = document.getElementById("drawBtn");
  var crankBtn = document.getElementById("gachaCrank");

  var resultCard = document.getElementById("resultCard");
  var resultEmoji = document.getElementById("resultEmoji");
  var resultSublabel = document.getElementById("resultSublabel");
  var resultName = document.getElementById("resultName");
  var resultTagline = document.getElementById("resultTagline");
  var resultDescription = document.getElementById("resultDescription");
  var resultActions = document.getElementById("resultActions");

  var againBtn = document.getElementById("againBtn");
  var shareBtn = document.getElementById("shareBtn");
  var copyBtn = document.getElementById("copyBtn");
  var copyFeedback = document.getElementById("copyFeedback");

  var allControls = [drawBtn, crankBtn].concat(
    Array.prototype.slice.call(categoryTabsEl.querySelectorAll("button")),
    Array.prototype.slice.call(regionFilterEl.querySelectorAll("button"))
  );

  function setControlsDisabled(disabled) {
    allControls.forEach(function (el) {
      el.disabled = disabled;
    });
    drawBtn.setAttribute("aria-busy", disabled ? "true" : "false");
  }

  function sublabelText(result) {
    if (result.category === "destination") {
      return result.sublabel + "地方";
    }
    return result.sublabel;
  }

  function renderResult(result) {
    resultEmoji.textContent = result.emoji || "";
    resultSublabel.textContent = sublabelText(result);
    resultName.textContent = result.name;

    if (result.tagline) {
      resultTagline.textContent = result.tagline;
      resultTagline.hidden = false;
    } else {
      resultTagline.textContent = "";
      resultTagline.hidden = true;
    }

    resultDescription.textContent = result.description || "";

    resultCard.hidden = true;
    // 一度hiddenを付け直してから外すことで、毎回リビール演出をリスタートさせる
    void resultCard.offsetWidth;
    resultCard.hidden = false;
    resultActions.hidden = false;

    shareBtn.href = window.Share.buildTweetUrl(result);
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
    var result = window.Draw.pick(state.category, state.region);
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

  function selectRegion(region) {
    state.region = region;
    Array.prototype.forEach.call(regionFilterEl.querySelectorAll("button"), function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.region === region));
    });
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
    selectRegion(btn.dataset.region);
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
  selectRegion(state.region);
})();
