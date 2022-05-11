'use strict';

function shortCutAddress(account, f = 4, l = 2) {
  return account.substr(0, f) + "..." + account.substr(account.length - l);
}

function timeToFormat(timestamp) {
  const t = new Date(timestamp)
  return `${t.getDate()}.${t.getMonth() + 1}.${t.getFullYear()} ${t.getHours()}:${t.getMinutes()}`
}

var __render_html = {

  renderHeaderUser(state) {
    const hu_el = document.getElementsByClassName('header-user');
    const render = state.login ? `
      <div class="header-user"><a class="header-user-btn header-user-btn-single" href="#!"><img src="./img/icons/smart-chain.svg" alt="Smart Chain"/><span>${state.networkName}</span></a>
      <div class="header-user-btn"><a class="header-user-btn-item" href="#!"><img src="./img/icons/bnb.svg" alt="BNB"/><span>${state.balance.toFixed(3)} ${state.currencySymbol}</span></a><a class="header-user-btn-item header-user-btn-wallet" href="#!" data-bs-toggle="modal" data-bs-target="#walletModal"><img src="./img/icons/wallet.svg" alt="wallet"/><span>${shortCutAddress(state.account)}</span></a></div>
      </div>
    `: `
      <button class="btn btn-bright" id="clk" onclick=onConnect()>Connect
      Wallet</button>
    `
    if (!hu_el.length) {
      document.getElementById('clk')?.remove();

      const el = document.getElementsByClassName('header-logo-block');
      el[0].insertAdjacentHTML('afterend', render);
    } else if (!state.login) {
      document.querySelectorAll(".header-user").forEach(box => {
        box.remove();
      });

      const el = document.getElementsByClassName('header-logo-block');
      el[0].insertAdjacentHTML('afterend', render);
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
  },

  renderHomeLevelsSchedule(state) {
    const x = document.getElementById('table-levels-schedule')
    const renderHeader = `
      <div class="divTableRow divTableHeader">
        <div class="divTableCell">Start date</div>
        <div class="divTableCell">Level</div>
        <div class="divTableCell"> Value</div>
        <div class="divTableCell">Time left</div>
      </div>
    `
    let renderRows = `
      <div class="divTableRow">
        <div class="divTableCell">...</div>
        <div class="divTableCell">...</div>
        <div class="divTableCell">...</div>
        <div class="divTableCell">...</div>
      </div>
    `

    if (state.home.levelsSheduleLoading) {
      // TODO: Add table loader
      // renderRows = ``
    } else {
      const y = state.home.levelsShedule
      if (y) {
        renderRows = y.map((z) => {
          const hasDays = typeof z.time_left === 'number'
          const timeLeft = typeof z.time_left === 'number' ? `${z.time_left} days` : z.time_left
          return `
            <div class="divTableRow ${hasDays ? 'endtime' : ''}">
              <div class="divTableCell">${timeToFormat(z.start_date)}</div>
              <div class="divTableCell">${z.level}</div>
              <div class="divTableCell">${z.value} ${z.currency}</div>
              <div class="divTableCell">${timeLeft}</div>
            </div>
          `
        }).join('')
      }
    }

    x.innerHTML = renderHeader + renderRows
  },

  renderHomeRecentActivity(state) {
    const x = document.getElementById('table-recent-activity')
    let renderRows = `
      <div class="divTableRow">
        <div class="activity-icon"><img src="" alt="" /></div>
        <div class="activity-wrapper"><a href="">...</a>
          <div class="activity-info">...</div>
          <div class="activity-time">...</div>
        </div>
      </div>
    `

    if (state.home.recentActivityLoading) {
      // TODO: Add table loader
      // renderRows = ``
    } else {
      const y = state.home.recentActivity
      if (y) {
        renderRows = y.map((z) => {
          const icon = z.status === "withdrawal"
            ? "./img/icons/download_pink.svg" :
            z.status === "deposit"
              ? "./img/icons/wallet-pink.svg" :
              z.status === "account"
                ? "./img/icons/account-pink.svg" :
                ""

          return `
            <div class="divTableRow">
              <div class="activity-icon"><img src=${icon} alt=${z.status} /></div>
              <div class="activity-wrapper"><a class="activity-id" href="./account.html">ID ${z.id}</a>
                ${z.status == "withdrawal" ? `
                  <div class="activity-info"><span>activated </span>Level ${z.level} <span>in </span><a href=${z.link}>Express</a></div>
                ` : ''}
                ${z.status == "deposit" ? `
                  <div class="activity-info">${z.value} ${z.currency} <span>on </span>Level ${z.level} <span>in </span><a href=${z.link}>Express</a>
                  </div>
                ` : ''}
                ${z.status == "account" ? `
                  <div class="activity-info"><span>+ partner bonus </span>${z.value} ${z.currency} <span>on </span>Level ${z.level} <span>in
                  </span><a href=${z.link}>Express</a></div>
                  ` : ''}
                  </div>
                <div class="activity-time"><a class="activity-time-icon" href=${z.link}></a><span>${z.activity_time}</span></div>
            </div>
          `
        }).join('')
      }
    }

    x.innerHTML = renderRows
  }

}