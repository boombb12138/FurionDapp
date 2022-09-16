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
  
    .el-scrollbar__bar.is-vertical {
      opacity: 1;
      background: #242d5f;
    }
    .el-scrollbar__thumb {
      background: #46529f;
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
  
  .mask {
    background: transparent;
    @apply absolute bottom-0 left-0 right-0 h-18px;
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
              <div class="font-700 text-36px">
                Stake veFUR to share Furion platform income
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/staking/head.png"
            class="block mx-auto pointer-events-none"
          />
        </div>
      </div>
  
      <div class="flex mx-auto w-1160px">
        <div class="card1 px-32px">
          <div>
            <div class="font-700 text-32px pt-24px leading-38px mb-16px">Overview</div>
          </div>
          <div class="flex justify-between mb-35px">
            <div class="box w-341px h-128px pt-36px">
              <div class="text-[#83899A] font-500 text-20px mb-6px">Total Staked (veFUR)</div>
              <div class="text-[#D9D9D9] font-500 text-30px">$ {{formatNumber(user.staked_veFur_value)}}</div>
            </div>
            <div class="box w-341px h-128px pt-36px">
              <div class="text-[#83899A] font-500 text-20px mb-6px">Total veFUR Supply</div>
              <div class="text-[#D9D9D9] font-500 text-30px">{{formatNumber(user.total_veFur_supply)}} veFUR</div>
            </div>
          </div>
          <div class="box h-280px pt-30px">
            <div class="text-[#83899A] font-500 text-20px mb-12px">Remittances</div>
  
            <div class="flex text-[#8B93A2] font-500 text-14px mb-24px">
              <div class="w-200px">Date</div>
              <div class="flex-1">Operation</div>
              <div class="w-140px pr-22px text-right">FUR remitted</div>
            </div>
  
            <div class="relative">
              <el-scrollbar class="h-162px overflow-hidden">
                <div
                  class="flex mb-12px font-500 text-14px h-18px items-center"
                  v-for="n in 20"
                >
                  <div class="w-200px">Aug 25, 13:05 PM</div>
                  <div class="flex-1">Lock</div>
                  <div class="w-140px pr-22px text-right">5,100</div>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
  
        <div class="card2 px-22px pt-28px">
          <div class="flex text-[#83899A] mb-20px font-500 text-20px pl-16px">
            <div
              class="cursor-pointer mr-20px"
              :class="{ 'text-white': type == 1 }"
              @click="type = 1; reset(); setFlag()"
            >
              Stake
            </div>
            <div
              class="cursor-pointer"
              :class="{ 'text-white': type == 2 }"
              @click="type = 2; reset(); setFlag()"
            >
              Unstake
            </div>
          </div>
          <div class="box pt-26px h-230px mb-20px !px-17px">
            <div class="flex justify-between mb-27px">
              <div class="text-[#8B93A2] font-500 text-14px">Balance</div>
              <div class="text-white font-500 text-16px">{{formatNumber(user.current_veFur_balance)}} veFUR</div>
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
                <div class="font-500 text-13px text-[#D9D9D9]">veFUR</div>
              </div>
            </div>
  
            <div class="btn1-2" @click="handleAmt">{{flag}}</div>
          </div>
  
          <div class="box pt-26px h-230px !px-17px">
            <div class="font-500 text-16px mb-24px">My Positions</div>
            <div class="flex mb-20px">
              <div class="flex-1">
                <div class="font-500 text-16px text-[#8B93A2] mb-5px">Staked veFUR</div>
                <div class="font-700 text-24px">{{formatNumber(user.current_veFur_stake)}} FUR</div>
                <div class="font-500 text-16px text-[#8B93A2] mt-5px">{{formatNumber(user.fur_reward_per_day)}} FUR per day</div>
              </div>
              <div class="flex-1">
                <div class="font-500 text-16px text-[#8B93A2] mb-5px">FUR Balance</div>
                <div class="font-700 text-24px">{{formatNumber(user.current_veFur_balance)}} FUR</div>
                <div class="font-500 text-16px text-[#8B93A2] mt-5px">{{formatNumber(user.pending_fur_reward)}} pending FUR</div>
              </div>
            </div>
  
            <div class="btn1-2" :class="{ grey: !this.claim }" @click="claim = true; claimReward()">
              Claim Pending FUR
            </div>
          </div>
        </div>
      </div>
      <ProceedingDetails :DialogInfo="dialogue_info" />
    </div>
  </template>
  
  <script>
    import { mapState } from 'vuex';
    import { User, InitUserInfo, UpdateUserInfo } from '@/config/furion_staking/staking_info';
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
          type:             1,
          chainId:          4,
          stake:            1,
          num:              undefined,
          connected:        false,
          claim:            false,
          user:             User,
          approve_stake:    true,
          approve_unstake:  true,
          dialogue_info:    DialogInfo,
          flag:             'Stake'
        };
      },
  
      async mounted() {
        this.user = await InitUserInfo(this.user, this.chainId);
        await this.updateUserInfo();
      },
  
      methods: {
        async updateUserInfo() {
          let account =  this.userInfo.userAddress;
          if (account == null) {
            return;
          }
          this.user = await UpdateUserInfo(this.user, account);
        },
  
        async handleAmt() {
          const type = this.type;
          if (type == 1) {
            await this.stakeVEFUR();
          } else if (type == 2) {
            await this.unstakeVEFUR();
          } else {
            return;
          }
        },
  
        async stakeVEFUR() {
          if (this.type != 1) {
            return;
          }
  
          const account = this.userInfo.userAddress;
          const res = await this.validateAmount();
  
          if (res) {
            try {
              // check token approval and then add
              const income_share_vault_contract = this.user.income_share_vault_contract;
              const amount = toWei(this.num.toString(), 18);
              await openDialog(this.dialogue_info, [ProcessInfo.STAKE_VEFUR]);
              const gas = await income_share_vault_contract.methods.deposit(1, amount).estimateGas({from: account});
              const tx_result = await income_share_vault_contract.methods.deposit(1, amount).send({
                                from: account,
                                gas: gas
                                });
              //close the dialog
              closeDialog(this.dialogue_info);
              this.successMessage(tx_result, 'Successfully staked veFUR');
  
            } catch(e) {
                console.warn(e);
                closeDialog(this.dialogue_info);
                this.errorMessage('Error Stake veFUR');
                this.num = undefined;
                return;
            }
            await this.updateUserInfo();
            this.num = undefined;
          } else {
              this.num = undefined;
              return;
            }
        },
  
        async unstakeVEFUR() {
          if (this.type != 2) {
            return;
          }
  
          const account = this.userInfo.userAddress;
          const res = await this.validateAmount();
          
          if (res) {
            try {
              const income_share_vault_contract = this.user.income_share_vault_contract;
              const amount = toWei(this.num.toString(), 18);
              await openDialog(this.dialogue_info, [ProcessInfo.UNSTAKE_VEFUR]);
              const gas = await income_share_vault_contract.methods.withdraw(1, amount).estimateGas({from: account});
              const tx_result = await income_share_vault_contract.methods.withdraw(1, amount).send({
                                from: account,
                                gas: gas
                              });
              //close the dialog
              closeDialog(this.dialogue_info);
              this.successMessage(tx_result, 'Successfully unstaked veFUR');
  
            } catch(e) {
              console.warn(e);
              closeDialog(this.dialogue_info);
              this.errorMessage('Error unstake veFUR');
              this.num = undefined;
              return;
            }
            await this.updateUserInfo();
            this.num = undefined;
          } else {
            this.num = undefined;
            return;
          }
        },
  
        async validateAmount() {
          const num = this.num;
          const user_veFur_balance = parseFloat(this.user.current_veFur_balance);
          const user_veFur_stake = parseFloat(this.user.current_veFur_stake);
          try {
            if (num == undefined) {
              //this.errorMessage('Enter amount');
              return false;
            } else if (num <= 0.0) {
              //this.errorMessage('Amount should be greater than 0');
              return false;
            } else if (num > user_veFur_balance && this.type == 1) {
              //this.errorMessage('Insufficient Balance');
              return false;
            } else if(num > user_veFur_stake && this.type == 2) {
              //this.errorMessage('Insufficient Stake');
              return false;
            }
            return true;
  
          } catch(e) {
            console.warn(e); 
            this.num = undefined;
            return;
          }
        },
  
        async claimReward() {
          if (parseFloat(this.user.pending_fur_reward) <= 0) {
            return;
          }
  
          const income_share_vault_contract = this.user.income_share_vault_contract;
          const account = this.userInfo.userAddress;
  
          try {
            console.log('Claiming reward');
            await openDialog(this.dialogue_info, [ProcessInfo.CLAIM_FUR_REWARD]);
            const gas = await income_share_vault_contract.methods.harvest(1, account).estimateGas({from: account});
            const tx_result = await income_share_vault_contract.methods.harvest(1, account).send({from: account, gas: gas});
            await this.updateUserInfo();
            this.reset();
            closeDialog(this.dialogue_info);
            this.successMessage(tx_result, 'Successfully harvested FUR Reward');
  
          } catch(e) {
            console.warn(e);
            closeDialog(this.dialogue_info);
            this.errorMessage('Error claiming FUR reward');
            this.reset();
            return;
          }
        },
  
        setAmountMax() {
          const type = this.type;
          if (type == 1) {
            this.num = parseFloat(this.user.current_veFur_balance);
          } else if (type == 2) {
            this.num = parseFloat(this.user.current_veFur_stake);
          } else {
            this.num = undefined;
          }
        },
  
        setFlag() {
          if (this.type == 1) {
            this.flag = "Stake";
          } else if(this.type == 2) {
            this.flag = "Unstake";
          } else {
            this.flag = "";
          }
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
  
        reset() {
          this.num = undefined;
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
  