'use strict';

function shortCutAddress(account, f = 4, l = 2) {
  return account.substr(0, f) + "..." + account.substr(account.length - l);
}

var __render_html = {

  renderHeaderUser(state) {
    const hu_el = document.getElementsByClassName('header-user');
    const render = `
      <div class="header-user"><a class="header-user-btn header-user-btn-single" href="#!"><img src="./img/icons/smart-chain.svg" alt="Smart Chain"/><span>${state.networkName}</span></a>
      <div class="header-user-btn"><a class="header-user-btn-item" href="#!"><img src="./img/icons/bnb.svg" alt="BNB"/><span>${state.balance.toFixed(3)} ${state.currencySymbol}</span></a><a class="header-user-btn-item header-user-btn-wallet" href="#!" data-bs-toggle="modal" data-bs-target="#walletModal"><img src="./img/icons/wallet.svg" alt="wallet"/><span>${shortCutAddress(state.account)}</span></a></div>
      </div>
    `
    if (!hu_el.length) {
      document.getElementById('clk')?.remove();

      const el = document.getElementsByClassName('header-logo-block');
      el[0].insertAdjacentHTML('afterend', render);
    } else if (!state.login) {
      // revert html to init
    } else {
      hu_el[0].innerHTML = render;
    }
  },

  renderBannerBtnBlock(state) {
    const bbb_el = document.getElementsByClassName('banner-btn-block');
    const render = `
      <div class="banner-btn-block"><a class="btn btn-purple btn-icons-right" href="#!" data-bs-toggle="modal" data-bs-target="#registrationModal"><span>Fast Registration</span><img src="./img/icons/arrow-double.svg" alt="Connect Wallet"/></a></div>
    `
    if (state.login) {
      bbb_el[0].outerHTML = render;
    } else if (!state.login) {
      // revert html to init
    }
  }

}