export const DialogInfo = {
  Step: 0,
  DialogVisible: false,
  StepsInfo: [],
  ImgOptions: [
    require('@/assets/images/loading/1.png'),
    require('@/assets/images/loading/2.png'),
    require('@/assets/images/loading/3.png'),
  ],
};

export const ProcessInfo = {
  CREATE_SEPARATE_POOL:{
    intro: 'Create Separate Pool for NFT',
    detail:
      'You are going to create new separate pool, please sign and wait for the transaction to be done',
  },
  SWAP_APPROVE_TOKEN: {
    intro: 'Approval for Token',
    detail:
      'To use furion swap, you firstly need to approve our contract to spend your token, please wait for a while',
  },
  SWAP_TOKEN: {
    intro: 'Swap on Furion Swap',
    detail:
      'You are going to swap tokens on Furion, please sign and wait for the transaction to be done',
  },
  SWAP_APPROVE_TOKEN_1:{
    intro: 'Approval for Token 1',
    detail:
      'To provide liquidity on furion swap, you firstly need to approve our contract to spend your token',
  },
  SWAP_APPROVE_TOKEN_2:{
    intro: 'Approval for Token 2',
    detail:
      'To provide liquidity on furion swap, you firstly need to approve our contract to spend your token',
  },
  SWAP_ADD_LIQUIDITY:{
    intro: 'Add liquidity on Furion Swap',
    detail:
      'You are going to provide liquidity on Furion, please sign and wait for the transaction to be done',
  },
  APPROVE_LIQUIDITY_TOKEN:{
    intro: 'Approval for liquidity token',
    detail:
      'Approve our contract to spend your liquidity token',
  },
  SWAP_REMOVE_LIQUIDITY:{
    intro: 'Remove liquidity on Furion Swap',
    detail:
      'You are going to remove liquidity on Furion, please sign and wait for the transaction to be done',
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
