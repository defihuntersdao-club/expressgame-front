const initialState = {
  account: null,
  chainId: null,
}

var __store_express = {
  state: initialState,
  reducers: {
    wallet: (payload) => {
      __store_express.state.account = payload
    },
    chainId: (payload) => {
      __store_express.state.chainId = payload
    },
  }
}