import _ from 'lodash';
import WalletConnectProvider from '@walletconnect/web3-provider';

export const strict = true;

export const plugins = [];

export const state = () => ({
  chainId: 1,
  chainName: 'Ethereum',
  userInfo: {
    isLogin: false,
    userAddress: null,
  },
  walletType: '',
  blockNumber: 0,
  walletConnectProvider: null,
});

export const mutations = {
  update(state, [key, value]) {
    _.set(state, key, value);
  },
  save(state, [key, value, context = this, opt = {}]) {
    _.set(state, key, value);
    context.$cookies.set(key, value, opt);
  },

  SET_USER_INFO(state, data) {
    state.userInfo = data;
  },

  SET_CHAIN_ID(state, data) {
    state.chainId = data;
  },

  SET_CHAIN_NAME(state, data) {
    state.chainName = data;
  },

  SET_WALLET_TYPE(state, data) {
    state.walletType = data;
  },

  SET_BLOCK_NUMBER(state, data) {
    state.blockNumber = data;
  },

  SET_WC_PROVIDER(state, data) {
    state.walletConnectProvider = data;
  },
};

export const actions = {
  setUserInfo({ commit }, data) {
    commit('SET_USER_INFO', data);
  },

  setChainId({ commit }, data) {
    // if (data == 1 && addressStore.type == 'release')
      commit('SET_CHAIN_NAME', 'Ethereum');
    // else if (data == 1 && addressStore.type == 'test')
    //   commit('SET_CHAIN_NAME', 'EthereumTest');
    // else if (data == 4) commit('SET_CHAIN_NAME', 'rinkeby');
    // else commit('SET_CHAIN_NAME', 'Rinkeby');

    commit('SET_CHAIN_ID', data);
  },

  setWalletType({ commit }, data) {
    commit('SET_WALLET_TYPE', data);
  },

  setBlockNumber({ commit }, data) {
    commit('SET_BLOCK_NUMBER', data);
  },

  setWCProvider({ commit }, data) {
    commit('SET_WC_PROVIDER', data);
  },
};
