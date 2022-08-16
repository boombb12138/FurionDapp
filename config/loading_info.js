console.log('Now you are asked to approve firstly');

export const DialogInfo = {
  Step: 0,
  DialogVisible: false,
  StepsInfo: [],
  ImgOptions: [
    [
      require('@/assets/images/loading/loading.gif'),
      require('@/assets/images/loading/2-0.png'),
      require('@/assets/images/loading/3-0.png'),
    ],
    [
      require('@/assets/images/loading/1-2.png'),
      require('@/assets/images/loading/loading.gif'),
      require('@/assets/images/loading/3-0.png'),
    ],
    [
      require('@/assets/images/loading/1-2.png'),
      require('@/assets/images/loading/2-2.png'),
      require('@/assets/images/loading/loading.gif'),
    ],
    [
      require('@/assets/images/loading/1-2.png'),
      require('@/assets/images/loading/2-2.png'),
      require('@/assets/images/loading/3-2.png'),
    ],
  ],
};

export const ProcessInfo = {
  APPROVE_USDC: {
    intro: 'Approval for USDC.e',
    detail:
      'To use protection on Degis, you firstly need to approve our contract to spend your USDC.e, please wait for a while',
  },
  APPROVE_DEG: {
    intro: 'Approval for DEG Token',
    detail:
      'To use protection on Degis, you firstly need to approve our contract to spend your DEG Token, please wait for a while',
  },
  BUY_FLIGHT: {
    intro: 'Proceed the transaction',
    detail:
      'You are going to buy the protection here, please sign and wait for the transaction to be done',
  },
  DEPOSIT_FLIGHT_POOL: {
    intro: 'Deposit into flight pool',
    detail:
      'You are going to deposit into flight pool, please sign and wait for the transaction to be done',
  },
  WITHDRAW_FLIGHT_POOL: {
    intro: 'Withdraw from flight pool',
    detail:
      'You are going to withdraw from the flight pool, please sign and wait for the transaction to be done',
  },
  APPROVE_MINING_TOKEN: {
    intro: 'Approval for mining token',
    detail:
      'To use mining on Degis, you firstly need to approve our contract to spend your mining token, please wait for a while',
  },
  STAKE_MINING_POOL: {
    intro: 'Stake into mining pool',
    detail:
      'You are going to stake into mining pool, please sign and wait for the transaction to be done',
  },
  UNSTAKE_MINING_POOL: {
    intro: 'Unstake from mining pool',
    detail:
      'You are going to unstake from the mining pool, please sign and wait for the transaction to be done',
  },
  HARVEST_MINING_POOL: {
    intro: 'Harvest DEG',
    detail:
      'You are going to harvest DEG from the mining pool, please sign and wait for the transaction to be done',
  },
  HARVEST_DOUBLE_REWARD: {
    intro: 'Harvest double reward',
    detail:
      'You are going to harvest double reward from the mining pool, please sign and wait for the transaction to be done',
  },
  APPROVE_STAKING_TOKEN: {
    intro: 'Approval for DEG token',
    detail:
      'To use staking on Degis, you firstly need to approve our contract to spend your DEG token, please wait for a while',
  },
  STAKE_STAKING_POOL: {
    intro: 'Stake into staking pool',
    detail:
      'You are going to stake into staking pool, please sign and wait for the transaction to be done',
  },
  UNSTAKE_STAKING_POOL: {
    intro: 'Unstake from staking pool',
    detail:
      'You are going to unstake from the staking pool, please sign and wait for the transaction to be done',
  },
  HARVEST_STAKING_POOL: {
    intro: 'Harvest DEG',
    detail:
      'You are going to harvest DEG from the staking pool, please sign and wait for the transaction to be done',
  },
  APPROVE_VEDEG_POOL: {
    intro: 'Approval for DEG token',
    detail:
      'To use mining on veDEG, you firstly need to approve our contract to spend your DEG token, please wait for a while',
  },
  STAKE_VEDEG_POOL: {
    intro: 'Stake into veDEG pool',
    detail:
      'You are going to stake into veDEG pool, please sign and wait for the transaction to be done',
  },
  UNSTAKE_VEDEG_POOL: {
    intro: 'Unstake from veDEG pool',
    detail:
      'You are going to unstake from the veDEG pool, please sign and wait for the transaction to be done',
  },
  HARVEST_VEDEG_POOL: {
    intro: 'Harvest veDEG',
    detail:
      'You are going to harvest veDEG from the veDEG pool, please sign and wait for the transaction to be done',
  },

  APPROVE_BIT_POOL: {
    intro: 'Approval for buy incentive token',
    detail:
      'To use mining on DEG, you firstly need to approve our contract to spend your buy incentive token, please wait for a while',
  },
  STAKE_BIT_POOL: {
    intro: 'Stake into buy incentive pool',
    detail:
      'You are going to stake into buy incentive pool, please sign and wait for the transaction to be done',
  },
  UNSTAKE_BIT_POOL: {
    intro: 'Unstake from buy incentive pool',
    detail:
      'You are going to unstake from the buy incentive pool, please sign and wait for the transaction to be done',
  },
  HARVEST_BIT_POOL: {
    intro: 'Harvest DEG',
    detail:
      'You are going to harvest DEG from the buy incentive pool, please sign and wait for the transaction to be done',
  },

  APPROVE_DEG_TOKEN: {
    intro: 'Approval for DEG',
    detail:
      'To use DEG on Degis, you firstly need to approve our contract to spend your token, please wait for a while',
  },
  BUY_TICKETS: {
    intro: 'Buy treasury tickets',
    detail:
      'You are going to buy treasury tickets, please sign and wait for the transaction to be done',
  },
  REDEEM_TICKETS: {
    intro: 'Redeem treasury tickets',
    detail:
      'You are going to redeem treasury tickets, please sign and wait for the transaction to be done',
  },
  CLAIM_PRIZE: {
    intro: 'Claim treasury prize',
    detail:
      'You are going to claim treasury rewards, please sign and wait for the transaction to be done',
  },

  NAUGHTY_PRICE_CREATE: {
    intro: 'Create price protection token',
    detail:
      'You are going to create price protection token, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_REDEEM: {
    intro: 'Redeem price protection token',
    detail:
      'You are going to redeem price protection token, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_BUY: {
    intro: 'Buy price protection token',
    detail:
      'You are going to buy price protection token, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_SELL: {
    intro: 'Sell price protection token',
    detail:
      'You are going to sell price protection token, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_LP_ADD: {
    intro: 'Add liquidity',
    detail:
      'You are going to add liquidity, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_LP_REMOVE: {
    intro: 'Remove liquidity',
    detail:
      'You are going to remove liquidity, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_SETTLE_REDEEM: {
    intro: 'Redeem at settlement',
    detail:
      'You are going to redeem price protection token at settlement, please sign and wait for the transaction to be done',
  },
  NAUGHTY_PRICE_SETTLE_CLAIM: {
    intro: 'Claim at settlement',
    detail:
      'You are going to claim price protection token award at settlement, please sign and wait for the transaction to be done',
  },

  ILM_CREATE: {
    intro: 'Record the newest price ratio',
    detail:
      'You are going to record the newest price ratio, please sign and wait for the transaction to be done',
  },
  ILM_REDEEM: {
    intro: 'Record the newest price ratio',
    detail:
      'You are going to record the newest price ratio, please sign and wait for the transaction to be done',
  },
  ILM_LP_REMOVE: {
    intro: 'Remove initial matching liquidity',
    detail:
      'You are going to remove initial matching liquidity, please sign and wait for the transaction to be done',
  },

  APPROVE_NAUGHTY_PRICE_TOKEN: {
    intro: 'Approval for price protection token',
    detail:
      'To use price protection token, you firstly need to approve our contract to spend your token, please wait for a while',
  },
  APPROVE_NAUGHTY_LP_TOKEN: {
    intro: 'Approval for price protection LP token',
    detail:
      'To use price protection LP token, you firstly need to approve our contract to spend your token, please wait for a while',
  },
  CLAIM_AIRDROP: {
    intro: 'Claim your airdrop rewards',
    detail:
      'You are going to claim your airdrop rewards, please sign the transaction',
  },
  BUY_WHITELIST: {
    intro: 'For whitelisted Degison',
    detail:
      'You are going to buy DEG token as whitelist member, please sign the transaction',
  },
  CLAIM_WHITELIST: {
    intro: 'For whitelisted Degison',
    detail:
      'You are going to claim DEG token as whitelist member, please sign the transaction',
  },
  CLAIM_VESTING: {
    intro: 'For Degis Investor',
    detail:
      'You are going to claim DEG token as Degis investor, please sign the transaction',
  },

  STAKE_INCOME_SHARING_POOL: {
    intro: 'Lock into income sharing pool',
    detail:
      'You are going to lock into income sharing pool, please sign and wait for the transaction to be done',
  },
  UNSTAKE_INCOME_SHARING_POOL: {
    intro: 'Unlock from income sharing pool',
    detail:
      'You are going to unlock from the income sharing pool, please sign and wait for the transaction to be done',
  },
  HARVEST_INCOME_SHARING_POOL: {
    intro: 'Harvest USDC.e',
    detail:
      'You are going to harvest USDC.e from the income sharing pool, please sign and wait for the transaction to be done',
  },
  APPROVE_STAKING_NFT: {
    intro: 'Approval for degis nft',
    detail:
      'To use nft staking on Degis, you firstly need to approve our contract to transfer your nft, please wait for a while',
  },
  STAKE_NFT_STAKING: {
    intro: 'Stake into nft pool',
    detail:
      'You are going to stake into nft pool, please sign and wait for the transaction to be done',
  },
  UNSTAKE_NFT_STAKING: {
    intro: 'Unstake from the nft pool',
    detail: 
    'You are going to unstake from the nft staking pool, please sign and wait for the transaction to be comfirmed'
  }
};

export const initDialog = DialogInfo => {
  DialogInfo.Step = 0;
  DialogInfo.DialogVisible = false;
  DialogInfo.StepsInfo = [];
  return DialogInfo;
};
export const closeDialog = DialogInfo => {
  DialogInfo.DialogVisible = false;
};

export const openDialog = (DialogInfo, StepsInfo) => {
  DialogInfo.Step = 0;
  DialogInfo.StepsInfo = StepsInfo;
  for (let i = 0; i < DialogInfo.StepsInfo.length; i++) {
    DialogInfo.StepsInfo[i].step = i;
  }
  DialogInfo.DialogVisible = true;
};

export const stepDialog = DialogInfo => {
  DialogInfo.Step += 1;
  if (DialogInfo.Step >= DialogInfo.StepsInfo.length) {
    closeDialog(DialogInfo);
    return;
  }
};

export const stepDialogByNum = DialogInfo => {
  DialogInfo.StepsInfo[DialogInfo.Step].nowStep += 1;
  if (
    DialogInfo.StepsInfo[DialogInfo.Step].nowStep >
    DialogInfo.StepsInfo[DialogInfo.Step].allStep
  ) {
    DialogInfo.Step += 1;
  } else {
    DialogInfo.StepsInfo[DialogInfo.Step].detail =
      DialogInfo.StepsInfo[DialogInfo.Step].nowStep.toString() +
      '/' +
      DialogInfo.StepsInfo[DialogInfo.Step].allStep.toString() +
      ' ' +
      DialogInfo.StepsInfo[DialogInfo.Step].info;
  }

  if (DialogInfo.Step >= DialogInfo.StepsInfo.length) {
    closeDialog(DialogInfo);
    return;
  }
};
