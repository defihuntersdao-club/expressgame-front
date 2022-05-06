'use strict';

function compare(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

(function listenerWallet() {
  let cachedAccount = null;
  let cachedChainId = null;

  const listenerWalletId = setInterval(() => {
    if (
      (__store_express.state.account !== null && !compare(cachedAccount, __store_express.state.account)) ||
      (__store_express.state.chainId !== null && !compare(cachedChainId, __store_express.state.chainId))
    ) {
      // Run func rerender
      __render_html.renderHeaderUser(__store_express.state);
      __render_html.renderBannerBtnBlock(__store_express.state);

      cachedAccount = __store_express.state.account;
      cachedChainId = __store_express.state.chainId;
    }
  }, 1000)

  // window.addEventListener('locationchange', clearTimeout(listenerWalletId));
})();

