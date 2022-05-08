'use strict';

function compare(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

(function listenerWallet() {
  var cachedAccount_var = null;
  let cachedAccount = null;
  let cachedChainId = null;
  const listenerWalletId = setInterval(() => {
    if (
      (__store_express.get().account !== null && !compare(cachedAccount, __store_express.get().account)) ||
      (__store_express.get().chainId !== null && !compare(cachedChainId, __store_express.get().chainId))
    ) {
      // Run func rerender
      __render_html.renderHeaderUser(__store_express.get());
      __render_html.renderBannerBtnBlock(__store_express.get());

      cachedAccount = __store_express.get().account;
      cachedChainId = __store_express.get().chainId;
    }
  }, 1000)

  // window.addEventListener('locationchange', clearTimeout(listenerWalletId));
})();

// console.log('cachedAccount', cachedAccount)
// console.log('cachedAccount_var', cachedAccount_var)


var cachedAccount_var = 10;
let cachedAccount = 20;

