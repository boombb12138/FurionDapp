export const DialogInfo = {
  Step: 0,
  DialogVisible: false,
  StepsInfo: [],
  ImgOptions: [
    [
      require('@/assets/images/loading/1.png'),
      require('@/assets/images/loading/2.png'),
      require('@/assets/images/loading/3.png'),
    ],
    [
      require('@/assets/images/loading/1.png'),
      require('@/assets/images/loading/2.png'),
      require('@/assets/images/loading/3.png'),
    ],
    [
      require('@/assets/images/loading/1.png'),
      require('@/assets/images/loading/2.png'),
      require('@/assets/images/loading/3.png'),
    ],
    [
      require('@/assets/images/loading/1.png'),
      require('@/assets/images/loading/2.png'),
      require('@/assets/images/loading/3.png'),
    ],
  ],
};

export const ProcessInfo = {
  APPROVE_USDC: {
    intro: 'Approval for USDC.e',
    detail:
      'To use protection on Degis, you firstly need to approve our contract to spend your USDC.e, please wait for a while',
  },
  UNSTAKE_INCOME_SHARING_POOL: {
    intro: 'Unlock from income sharing pool',
    detail:
      'You are going to unlock from the income sharing pool, please sign and wait for the transaction to be done',
  },
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
