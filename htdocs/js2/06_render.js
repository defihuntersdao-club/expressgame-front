'use strict';

var __render_html = {

  renderHeaderUser(state) {
    document.getElementById('clk').remove();
    const el = document.getElementsByClassName('header-logo-block');
    
    el[0].insertAdjacentHTML('afterend', `
      <div class="header-user"><a class="header-user-btn header-user-btn-single" href="#!"><img src="./img/icons/smart-chain.svg" alt="Smart Chain"/><span>Smart Chain</span></a>
      <div class="header-user-btn"><a class="header-user-btn-item" href="#!"><img src="./img/icons/bnb.svg" alt="BNB"/><span>0.019 BNB</span></a><a class="header-user-btn-item header-user-btn-wallet" href="#!" data-bs-toggle="modal" data-bs-target="#walletModal"><img src="./img/icons/wallet.svg" alt="wallet"/><span>0хС6...е8</span></a></div>
      </div>
    `);
  }

}