"use strict";

const initialState = {
  account: null,
  chainId: null,
  networkName: null,
  currencySymbol: null,
  balance: null,
  web3: null,
  icon: null,
  login: false,
  home: {
    levelsShedule: null,
    levelsSheduleLoading: null,
    recentActivity: null,
    recentActivityLoading: null,
  }
}

function Store() {

  var state = initialState

  this.get = () => state

  this.set = {
    account: (payload) => {
      state.account = payload
    },
    chainId: (payload) => {
      state.chainId = payload
    },
    wallet: (payload) => {
      state.account = payload.account
      state.networkName = payload.networkName
      state.currencySymbol = payload.currencySymbol
      state.chainId = payload.chainId
      state.web3 = payload.web3
      state.icon = payload.icon
      state.balance = payload.balance
      state.login = true
    },
    setHomeLevelsSchedule: (payload) => {
      state.home.levelsShedule = payload.data
      state.home.levelsSheduleLoading = payload.loading
    },
    setHomeRecentActivity: (payload) => {
      state.home.recentActivity = payload.data
      state.home.recentActivityLoading = payload.loading
    },
    disconnect: () => {
      state.account = null
      state.networkName = null
      state.currencySymbol = null
      state.chainId = null
      state.web3 = null
      state.icon = null
      state.balance = null
      state.login = false
    }
  }
}

var __store_express = new Store();