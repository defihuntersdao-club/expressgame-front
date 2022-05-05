'use strict';

function compare(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

(function listenerWallet() {
  let cached = null;

  const listenerWalletId = setInterval(() => {
    if (__store_express.state.account !== null && !compare(cached, __store_express.state.account)) {
      console.log('__render_html', __render_html)
      // Run func rerender
      __render_html.renderHeaderUser(__store_express.state);

      cached = __store_express.state.account;
    }
  }, 1000)

  // window.addEventListener('locationchange', clearTimeout(listenerWalletId));
})();

