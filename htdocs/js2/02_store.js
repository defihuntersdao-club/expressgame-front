const initialState = {
  account: null,
  chainId: null,
  networkName: null,
  currencySymbol: null,
  balance: null,
  web3: null,
  icon: null,
  login: false,
}

var __store_express = {
  state: initialState,
  reducers: {
    account: (payload) => {
      __store_express.state.account = payload
    },
    chainId: (payload) => {
      __store_express.state.chainId = payload
    },
    wallet: (payload) => {
      __store_express.state.account = payload.account
      __store_express.state.networkName = payload.networkName
      __store_express.state.currencySymbol = payload.currencySymbol
      __store_express.state.chainId = payload.chainId
      __store_express.state.web3 = payload.web3
      __store_express.state.icon = payload.icon
      __store_express.state.balance = payload.balance
      __store_express.state.login = true
    },
  }
}