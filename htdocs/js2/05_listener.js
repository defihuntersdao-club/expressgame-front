function compare(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

(function listenerWallet() {
  let cached = null;
  const timerId = setInterval(() => {
    if (cached !== null && !compare(cached, __store_express.state.account)) {
      // Run func rerender
      // console.log('__store_express.state.account', __store_express.state.account);

      cached = __store_express.state.account;
    } else if (cached === null) {
      cached = __store_express.state.account;
    }
  }, 1000);
  // window.addEventListener('locationchange', clearTimeout(timerId));
})();