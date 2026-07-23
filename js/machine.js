/**
 * ガチャマシンのアニメーション状態遷移
 * idle → cranking → dropping → landing → cracking → revealed
 * フェーズの進行は setTimeout で駆動し、CSS側の @keyframes と時間を揃える。
 */
(function () {
  "use strict";

  var machineEl = document.getElementById("gachaMachine");

  var DURATIONS = {
    cranking: 550,
    dropping: 500,
    landing: 500,
    cracking: 450,
  };

  var busy = false;
  var pendingTimeouts = [];

  function reducedMotion() {
    return (
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function scaledDuration(ms) {
    return reducedMotion() ? Math.max(60, Math.round(ms * 0.12)) : ms;
  }

  function setPhase(phase) {
    machineEl.setAttribute("data-phase", phase);
  }

  function clearPending() {
    pendingTimeouts.forEach(function (id) {
      window.clearTimeout(id);
    });
    pendingTimeouts = [];
  }

  function after(ms, fn) {
    var id = window.setTimeout(fn, ms);
    pendingTimeouts.push(id);
  }

  /**
   * @param {object} result Draw.pick() の戻り値
   * @param {{onReveal?: function(object), onComplete?: function()}} callbacks
   */
  function play(result, callbacks) {
    if (busy) {
      return;
    }
    busy = true;
    callbacks = callbacks || {};

    setPhase("cranking");
    after(scaledDuration(DURATIONS.cranking), function () {
      setPhase("dropping");
      after(scaledDuration(DURATIONS.dropping), function () {
        setPhase("landing");
        after(scaledDuration(DURATIONS.landing), function () {
          setPhase("cracking");
          after(scaledDuration(DURATIONS.cracking), function () {
            setPhase("revealed");
            busy = false;
            if (callbacks.onReveal) {
              callbacks.onReveal(result);
            }
            if (callbacks.onComplete) {
              callbacks.onComplete();
            }
          });
        });
      });
    });
  }

  function reset() {
    clearPending();
    busy = false;
    setPhase("idle");
  }

  function isBusy() {
    return busy;
  }

  window.Machine = {
    play: play,
    reset: reset,
    isBusy: isBusy,
  };
})();
