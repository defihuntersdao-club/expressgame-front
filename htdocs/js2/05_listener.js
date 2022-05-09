'use strict';

function compare(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

(function listenerWallet() {
  let x1 = null;
  let x2 = null;
  const listenerWalletId = setInterval(() => {
    const y1 = __store_express.get().account;
    const y2 = __store_express.get().chainId;
    const z = __store_express.get();

    if (
      (y1 !== null && !compare(x1, y1)) ||
      (y2 !== null && !compare(x2, y2))
    ) {
      // Run func rerender
      __render_html.renderHeaderUser(z);
      __render_html.renderBannerBtnBlock(z);

      x1 = y1;
      x2 = y2;
    }
  }, 1000)
})();

(function listenerHomeLevelsSchedule() {
  let x1 = null;
  let x2 = null;

  const l = setInterval(() => {
    const y1 = __store_express.get().home.levelsShedule;
    const y2 = __store_express.get().home.levelsSheduleLoading;
    const z = __store_express.get();

    if (
      (y1 !== null && !compare(x1, y1)) ||
      (y2 !== null && !compare(x2, y2))
    ) {
      // Run func rerender
      __render_html.renderHomeLevelsSchedule(z);
      x1 = y1;
      x2 = y2;
    }
  }, 1000)
})();

(function listenerHomeRecentActivity() {
  let x1 = null;
  let x2 = null;

  const l = setInterval(() => {
    const y1 = __store_express.get().home.recentActivity;
    const y2 = __store_express.get().home.recentActivityLoading;
    const z = __store_express.get();

    if (
      (y1 !== null && !compare(x1, y1)) ||
      (y2 !== null && !compare(x2, y2))
    ) {
      // Run func rerender
      __render_html.renderHomeRecentActivity(z);
      x1 = y1;
      x2 = y2;
    }
  }, 1000)
})();

