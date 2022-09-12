<style lang="scss" scoped>
.card1 {
  width: 757px;
  height: 575px;
  margin-right: 25px;
  position: relative;
  &::after {
    opacity: 0.24;
    background: linear-gradient(0deg, rgba(150, 154, 182, 0.2), rgba(150, 154, 182, 0.2)),
      linear-gradient(
        59.65deg,
        #3b3faf 0.92%,
        rgba(96, 65, 181, 0.489583) 51.49%,
        rgba(131, 67, 186, 0) 100%
      ),
      #101d41;
    content: "";
    border: 4px solid #34355e;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08),
      inset 0px 4px 4px rgba(213, 166, 237, 0.4), inset 0px -2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    @apply absolute left-0 right-0 top-0 bottom-0 pointer-events-none block;
  }
  > div {
    position: relative;
    z-index: 10;
  }
}

.card2 {
  width: 373px;
  height: 575px;
  position: relative;
  &::after {
    opacity: 0.24;
    background: linear-gradient(0deg, rgba(150, 154, 182, 0.4), rgba(150, 154, 182, 0.4)),
      linear-gradient(202.82deg, #b070e4 0%, #4150b4 52.08%, rgba(16, 29, 65, 0) 100%);
    content: "";
    border: 4px solid #34355e;
    border-radius: 20px;
    @apply absolute left-0 right-0 top-0 bottom-0 pointer-events-none block;
  }
  > div {
    position: relative;
    z-index: 10;
  }
}

.box {
  background: #0c193a;
  border: 2px solid #2a326b;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08),
    inset 0px 4px 4px rgba(213, 166, 237, 0.4), inset 0px -2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  @apply px-42px;
}

::v-deep {
  .el-progress-bar__inner {
    background: linear-gradient(90.41deg, #433cb8 0%, #619fd7 45.83%, #b38cf1 98.96%);
  }
  .el-progress-bar__outer {
    height: 10px !important;
  }

  .input {
    width: 100%;
    .el-input__inner {
      background: transparent;
      border: 3px solid #34355e;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      height: 60px;
      line-height: 60px;
      color: #fff;
    }
  }
}

.btn1 {
  width: 138px;
  height: 52px;
  background: url("~@/assets/images/staking/btn1.png") no-repeat;
  background-size: 100% 100%;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.36);
  @apply flex justify-center items-center  cursor-pointer hover:opacity-80;
  &.grey {
    color: #5d667c;
    background: #1e2b49;
  }
}

.btn1-2 {
  width: 100%;
  height: 52px;
  background: url("~@/assets/images/staking/btn2.png") no-repeat;
  background-size: 100% 100%;
  font-weight: 600;
  font-size: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.36);
  @apply flex justify-center items-center  cursor-pointer hover:opacity-80;
  &.grey {
    color: #5d667c;
    background: #1e2b49;
  }
}
</style>

<template>
  <div class="pb-75px !static">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
      <div class="text-[#9DA5B2] ml-23px">Back To Staking</div>
    </div>

    <div class="pt-110px">
      <div class="relative">
        <div class="absolute left-100px center-y flex items-center">
          <div class="mr-5px -mt-5px">
            <img src="@/assets/images/staking/icon2.png" alt="" />
          </div>
          <div class="mb-15px">
            <div class="font-700 text-36px mb-5px">Stake FUR to earn veFUR</div>
            <div class="font-400 text-14px text-[#E9E9E9]">
              Rewards distributed every week
            </div>
          </div>
        </div>
        <img
          src="@/assets/images/staking/head.png"
          class="block mx-auto pointer-events-none"
        />
      </div>
    </div>

    <div class="flex mx-auto w-1160px" :data="user">
      <div class="card1 px-32px">
        <div>
          <div class="font-700 text-32px pt-24px leading-38px mb-16px">Overview</div>
        </div>
        <div class="flex justify-between mb-35px">
          <div class="box w-341px h-128px pt-36px">
            <div class="text-[#83899A] font-500 text-20px mb-6px">Total Staked (FUR)</div>
            <div class="text-[#D9D9D9] font-500 text-30px">$ {{formatNumber(user.total_fur_stake)}}</div>
          </div>
          <div class="box w-341px h-128px pt-36px">
            <div class="text-[#83899A] font-500 text-20px mb-6px">Total veFUR Supply</div>
            <div class="text-[#D9D9D9] font-500 text-30px">{{formatNumber(user.total_veFur_supply)}} veFUR</div>
          </div>
        </div>
        <div class="box h-198px pt-30px">
          <div class="text-[#83899A] font-500 text-20px mb-28px">veFUR progress</div>
          <div class="flex justify-between items-center mb-8px">
            <div class="font-500 text-16px text-[#8B93A2]">
              <span class="text-white">400 veFUR</span>
              /2000 veFUR
            </div>
            <div class="font-500 text-16px text-[#8B93A2]">
              <span class="text-white">20%</span>
              /100%
            </div>
          </div>

          <el-progress
            :percentage="20"
            :show-text="false"
            color="linear-gradient(90.41deg, #433CB8 0%, #619FD7 45.83%, #B38CF1 98.96%);"
          ></el-progress>

          <div class="text-[#8B93A2] font-500 text-15px leading-18px mt-16px">
            One FUR can generate 100 veFUR at most, which takes half a year to generate
            all. (⚠Please also note that unstaking FUR will make veFUR balance zero
            instantly.)
          </div>
        </div>
      </div>

      <div class="card2 px-22px pt-28px">
        <div class="flex text-[#83899A] mb-20px font-500 text-20px pl-16px">
          <div
            class="cursor-pointer mr-20px"
            :class="{ 'text-white': type == 1 }"
            @click="type = 1"
          >
            Stake
          </div>
          <div
            class="cursor-pointer"
            :class="{ 'text-white': type == 2 }"
            @click="type = 2"
          >
            Unstake
          </div>
        </div>
        <div class="box pt-26px h-230px mb-20px !px-17px">
          <div class="flex justify-between mb-27px">
            <div class="text-[#8B93A2] font-500 text-14px">Balance</div>
            <div class="text-white font-500 text-16px">{{formatNumber(user.current_fur_balance)}} FUR</div>
          </div>

          <div class="relative mb-20px">
            <el-input-number
              v-model="num"
              :precision="1"
              placeholder="0.0"
              :controls="false"
              class="input"
            ></el-input-number>
            <div class="flex absolute center-y right-12px items-center">
              <div
                class="cursor-pointer font-500 text-13px text-white bg-[rgba(250,107,225,0.64)] rounded-20px py-2px px-8px"
                @click="setAmountMax"
              >
                MAX
              </div>
              <div class="mx-9px w-2px h-17px bg-[#F181DE]"></div>
              <div class="font-500 text-13px text-[#D9D9D9]">FUR</div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="btn1" @click="stake = 1; handleAmt()" :class="{ grey: stake != 1 }">{{this.checkValue(1)}}</div>
            <div class="btn1" @click="stake = 2; handleAmt()" :class="{ grey: stake != 2 }">
              {{this.checkValue(2)}}
            </div>
          </div>
        </div>

        <div class="box pt-26px h-230px !px-17px">
          <div class="font-500 text-16px mb-24px">My Positions</div>
          <div class="flex mb-20px">
            <div class="flex-1">
              <div class="font-500 text-16px text-[#8B93A2] mb-5px">Staked</div>
              <div class="font-700 text-24px">{{formatNumber(user.current_fur_stake)}} FUR</div>
              <div class="text-[#FA6BE1] font-500 text-16px mt-9px">${{formatNumber(user.staked_fur_value)}}</div>
            </div>
            <div class="flex-1">
              <div class="font-500 text-16px text-[#8B93A2] mb-5px">Pending Rewards</div>
              <div class="font-700 text-24px">{{formatNumber(this.user.pending_veFur_reward)}} veFUR</div>
              <div
                class="cursor-pointer font-500 text-12px text-white bg-[rgba(250,107,225,0.64)] rounded-20px py-4px px-12px mt-7px"
              >
                Add veFUR to Wallet
              </div>
            </div>
          </div>

          <div class="btn1-2" v-if="connected" @click="claimReward">Claim veFUR</div>
          <div class="btn1-2" v-else @click="connected = true">Connect Wallet</div>
        </div>
      </div>
    </div>
    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { User, InitUserInfo, UpdateUserInfo } from '@/config/furion_staking/user_info';
  import { _formatNumber, ALLOWANCE_THRESHOLD, tokenApprove, getTxURL, fromWei, toWei, getNativeTokenAmount } from '@/local/utils/common';
  import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';
  
  import {
    DialogInfo,
    initDialog,
    closeDialog,
    openDialog,
    stepDialog,
    ProcessInfo,
  } from '~/config/loading_info';


  export default {
    async asyncData({ store, $axios, app, query }) {
      store.commit("update", ["admin.activeMenu", "/mining"]);
    },

    props: {},

    components: {ProceedingDetails},

    computed: {
      ...mapState('admin', ['connectStatus']),
      ...mapState(['userInfo']),
    },

    data() {
      return {
        type: 1,
        chainId: 4,
        stake: 1,
        num: undefined,
        connected: false,
        user: User,
        approved: false,
        allowance: 0.0,
        dialogue_info: DialogInfo,
      };
    },

    async mounted() {
      this.user = await InitUserInfo(this.user, this.chainId);
      await this.updateUserInfo();
      await this.checkFURApproval();
    },

    methods: {
      async updateUserInfo() {
        let account =  this.userInfo.userAddress;
        if (account == null) {
          return;
        }
        this.user = await UpdateUserInfo(this.user, account);
      },

      checkValue(flag) {
        const type = this.type;
        if (flag == 1) {
          if (type == 1) {
            return 'Stake'
          } else if (type == 2) {
            return 'Unstake';
          }
        } else if (flag == 2) {
          if (type == 1) {
            return 'Stake & Lock';
          } else if (type == 2) {
            return 'Unstake Locked';
          }
        } 
        return '';
      },

      async setAmountMax() {
        this.num = parseFloat(this.user.current_fur_balance);
      },

      async handleAmt() {
        const type = this.type;
        const choice = this.stake;
        if (type == 1) {
          // stake
          if (choice == 1) {
            // normal stake
            await this.stakeAmt();
          } else if (choice == 2) {
            // stake with lock 
            await this.stakeAndLock();
          }
        } else if (type == 2) {
          // unstake
          if (choice == 1) {
            // normal unstake
            await this.unstakeAmt();
          } else if (choice == 2) {
            // unstake locked amt
            await this.unstakeLocked();
          }
        }
      },

      async checkFURApproval() {
        const account = this.userInfo.userAddress;
        const fur_contract = this.user.fur_contract;
        try {
          const allowance = await fur_contract.methods.allowance(account, this.user.veFur_address).call();
          if (allowance > 0) {
            this.approved = true;
            this.allowance = allowance;
            return;
          }
          this.approved = false;
          allowance = 0.0;

        } catch(e) {
          console.warn(e);
          return;
        }
      },

      async approveFURToken() {
        const account = this.userInfo.userAddress;
        try {
          await tokenApprove(this.user.fur_address, account, this.user.veFur_address);
          await this.checkFURApproval();

        } catch(e) {
          console.warn(e);
          return;
        }
      },

      async stakeAmt() {
        if (this.type != 1) {
          return;
        }

        const account = this.userInfo.userAddress;
        const res = await this.validateAmount();
        
        if (res) {
            try {
              // check token approval and then add
              const veFur_contract = this.user.veFur_contract;
              const amount = toWei(this.num.toString(), 18);
              if (!this.approved || this.allowance < amount) {
                // approve and stake
                await openDialog(
                this.dialogue_info, 
                [ProcessInfo.APPROVE_FUR, ProcessInfo.STAKE_FUR]);
                await this.approveFURToken();
                if (!this.approved || this.allowance < amount) {
                  closeDialog(this.dialogue_info);
                  this.errorMessage('Approve token error');
                  return;
                }
  
                stepDialog(this.dialogue_info);
                const gas = await veFur_contract.methods.deposit(amount).estimateGas({from: account});
                const tx_result = await veFur_contract.methods.deposit(amount).send({
                  from: account,
                  gas: gas
                });
                //close the dialog
                closeDialog(this.dialogue_info);
                this.successMessage(tx_result, 'Successfully staked FUR');

              } else {
                await openDialog(this.dialogue_info, [ProcessInfo.STAKE_FUR]);
                const gas = await veFur_contract.methods.deposit(amount).estimateGas({from: account});
                const tx_result = await veFur_contract.methods.deposit(amount).send({
                  from: account,
                  gas: gas
                });
                //close the dialog
                closeDialog(this.dialogue_info);
                this.successMessage(tx_result, 'Successfully staked FUR');
              }

            } catch(e) {
              console.log('[Error staking] error logged at 449');
              console.warn(e);
              closeDialog(this.dialogue_info);
              this.num = undefined;
              return;
            }
          await this.refresh();
          this.num = undefined;
        } else {
          this.num = undefined;
          return;
        }
      },

      // same logic, call deposit with lock
      async stakeAndLock() {
        if (this.type != 1) {
          return;
        }

        const account = this.userInfo.userAddress;
        const res = await this.validateAmount();
        
        if (res) {
            try {
              const veFur_contract = this.user.veFur_contract;
              const amount = toWei(this.num.toString(), 18);
              if (!this.approved || this.allowance < amount) {
                // approve and stake with lock
                await openDialog(
                this.dialogue_info, 
                [ProcessInfo.APPROVE_FUR, ProcessInfo.STAKE_LOCK_FUR]);
              
                await this.approveFURToken();
                if (!this.approved || this.allowance < amount) {
                  closeDialog(this.dialogue_info);
                  this.errorMessage('Approve token error');
                  return;
                }
  
                stepDialog(this.dialogue_info);
                const gas = await veFur_contract.methods.depositMaxTime(amount).estimateGas({from: account});
                const tx_result = await veFur_contract.methods.depositMaxTime(amount).send({
                  from: account,
                  gas: gas
                });
                //close the dialog
                closeDialog(this.dialogue_info);
                this.successMessage(tx_result, 'Successfully staked FUR');

              } else {
                await openDialog(this.dialogue_info, [ProcessInfo.STAKE_LOCK_FUR]);
                const gas = await veFur_contract.methods.depositMaxTime(amount).estimateGas({from: account});
                const tx_result = await veFur_contract.methods.depositMaxTime(amount).send({
                  from: account,
                  gas: gas
                });
                //close the dialog
                closeDialog(this.dialogue_info);
                this.successMessage(tx_result, 'Successfully staked FUR');
              }

            } catch(e) {
              console.warn(e);
              closeDialog(this.dialogue_info);
              this.num = undefined;
              return;
            }
          await this.refresh();
          this.num = undefined;

        } else {
          this.num = undefined;
          return;
        }
      },

      async validateAmount() {
        const num = this.num;
        const user_balance = parseFloat(this.user.current_fur_balance);
        const user_stake = parseFloat(this.user.current_fur_stake);
        try {
          if (num == undefined) {
            this.errorMessage('Enter amount');
            return false;
          } else if (num <= 0.0) {
            this.errorMessage('Amount should be greater than 0');
            return false;
          } else if (num > user_balance && this.type == 1) {
            this.errorMessage('Insufficient Balance');
            return false;
          } else if(num > user_stake && this.type == 2) {
            this.errorMessage('Insufficient Stake');
            return false;
          }
          return true;

        } catch(e) {
          console.warn(e); 
          this.num = undefined;
          return;
        }
      },

      async unstakeAmt() {
        if (this.type != 2) {
          return;
        }

        const account = this.userInfo.userAddress;
        const res = await this.validateAmount();
        
        if (res) {
          try {
            const veFur_contract = this.user.veFur_contract;
            const amount = toWei(this.num.toString(), 18);
            await openDialog(this.dialogue_info, [ProcessInfo.UNSTAKE_FUR]);
            const gas = await veFur_contract.methods.withdraw(amount).estimateGas({from: account});
            const tx_result = await veFur_contract.methods.withdraw(amount).send({
                              from: account,
                              gas: gas
                            });
            //close the dialog
            closeDialog(this.dialogue_info);
            this.successMessage(tx_result, 'Successfully Unstaked FUR');

          } catch(e) {
            console.warn(e);
            closeDialog(this.dialogue_info);
            this.errorMessage('Error Unstaking on Furion');
            this.num = undefined;
            return;
          }
          await this.refresh();
          this.num = undefined;

        } else {
          this.num = undefined;
          return;
        }
      },

      async unstakeLocked() {
        if (this.type != 2) {
          return;
        }

        const account = this.userInfo.userAddress;
        const res = true;
        
        if (res) {
          try {
            const veFur_contract = this.user.veFur_contract;
            //const amount = toWei(this.num.toString(), 18);
            await openDialog(this.dialogue_info, [ProcessInfo.UNSTAKE_LOCKED_FUR]);
            const gas = await veFur_contract.methods.withdrawLocked().estimateGas({from: account});
            const tx_result = await veFur_contract.methods.withdrawLocked().send({
                              from: account,
                              gas: gas
                            });
            //close the dialog
            closeDialog(this.dialogue_info);
            this.successMessage(tx_result, 'Successfully Unstaked Locked FUR');

          } catch(e) {
            console.warn(e);
            closeDialog(this.dialogue_info);
            this.errorMessage('Error Unstaking on Furion');
            this.num = undefined;
            return;
          }
          await this.refresh();
          this.num = undefined;

        } else {
          this.num = undefined;
          return;
        }
      },

      async claimReward() {
        const account = this.userInfo.userAddress;
        try {
          // disable claim button if the reward is zero
          if (parseFloat(this.user.pending_veFur_reward) <= 0) {
            return;
          }
          const veFur_contract = this.user.veFur_contract;
          await openDialog(this.dialogue_info, [ProcessInfo.CLAIM_VEFUR]);
          const gas = await veFur_contract.methods.claim().estimateGas({from: account});
          const tx_result = await veFur_contract.methods.claim().send({from: account, gas: gas});
          closeDialog(this.dialogue_info);
          this.successMessage(tx_result, 'Successfully claimed veFUR');
        } catch(e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          this.errorMessage('Error claiming veFUR');
          return;
        }
        await this.refresh();
        this.num = undefined;
      },

      async refresh() {
        await this.updateUserInfo();
      },

      formatNumber(value, fixed = 2) {
        const val = parseFloat(value);
        // console.log('[Format Number] ', value, val);
        // return the value if greater than 2 significant decimals
        if (val * 100 < 1) {
          return value;
        }
        let reserve = value - parseInt(value);
        let final_result;
        if (value - reserve < 1) {
          final_result = '0' + reserve.toFixed(fixed).toString().substr(1);
        } else {
          final_result = _formatNumber(value).split('.')[0] + reserve.toFixed(fixed).toString().substr(1);
        }
        if (final_result[0] == '-' || final_result[0] == 'N') {
          final_result = '--'
        }
        return final_result
      },

      successMessage(receipt, title) {
        const txURL = getTxURL(receipt.transactionHash);
        this.$notify({
          title: title,
          dangerouslyUseHTMLString: true,
          message: txURL,
          type: 'success',
        });
      },
  
      errorMessage(title) {
        this.$notify.error({
          title: title,
          message: '',
          dangerouslyUseHTMLString: true,
        });
      },

    },

  };

</script>
