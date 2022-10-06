import WalletConnectProvider from '@walletconnect/web3-provider';
import QRCodeModal from '@walletconnect/qrcode-modal';

var provider;

export const providerFromEther_test = 'https://rinkeby.infura.io/v3/800054c370de4aa7907af5b45273c7fd';
export const providerFromEther = 'https://mainnet.infura.io/v3/800054c370de4aa7907af5b45273c7fd';
export const providerFromEther_goerli = 'https://goerli.infura.io/v3/800054c370de4aa7907af5b45273c7fd';

export const getProvider = () => {
  // console.log('get provider');
  return provider;
};

export const initProvider = async () => {
  // console.log('init provider');
  provider = new WalletConnectProvider({
    rpc: {
      1: providerFromEther,
      5: providerFromEther_goerli,
    },
    chainId: 5,
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal,
    qrcodeModalOptions: {
      mobileLinks: ['metamask', 'trust'],
    },
  });

  await provider.enable();

  return provider;
};

export const removeProvider = async () => {
  console.log('remove provider');
  await provider.disconnect();
};
