<style lang="scss" scoped>
.box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.4) 0%,
    rgba(51, 53, 114, 0.5) 100.69%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(252, 255, 253, 0.6);
}

.bar {
  background: rgba(1, 17, 41, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  height: 60px;
  @apply flex items-center justify-between px-25px mb-30px;
}

.item {
  background: #011129;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fcfffd;
  @apply p-25px pr-30px pl-30px relative;
}

::v-deep {
  .el-switch {
    height: 26px;
    line-height: 26px;
  }
  .el-switch .el-switch__core::after {
    height: 21px;
    width: 21px;
    top: 3px;
    color: rgba(5, 27, 61, 0.6);
    @apply flex items-center justify-center;
    background-image: url("~@/assets/images/switch.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .el-switch .el-switch__core {
    width: 48px !important;
  }
  .el-switch.is-checked .el-switch__core::after {
    left: calc(100% - 24px) !important;
    margin-left: 0 !important;
    background-image: none;
  }
}

.box-input {
    &::v-deep {
      .el-input__inner {
        height: 45px;
        width: 200px;
        background: #011129;
        border: none;
        color: #fcfffd;
        font-size: 32px;
        font-weight: 500;
        text-align: left;
        padding: 0px;
        margin-right: 15px;

        &::-webkit-input-placeholder {
          color: rgba(252,255,253,0.6) !important;
        }
      }
    }
  }
</style>

<template>
  <div class="!w-1150px">
    <BorrowTab2 v-model="active"></BorrowTab2>

    <!-------------------------------------- Borrow -------------------------------------->

    <div v-if="active === 1" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Collateralized</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0</span>
            WAWAX
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(user_info.borrowed) }}</span>
            {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Health</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0%</span>
            <span class="inline-block bg-[#50CD7E] w-10px h-10px rounded-full"></span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/token1.png" class="w-32px mr-18px" />
            <div class="font-600 text-22px">{{ asset }}</div>
          </div>
          <div class="flex items-center">
            <el-popover
              placement="bottom"
              title=""
              trigger="hover"
              :visible-arrow="false"
              popper-class="el-tip"
            >
              <div class="text-center text-[#0B1A3B]">
                <div>text...</div>
              </div>
              <img
                src="@/assets/images/liquidity/q.svg"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="borrow_amount"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~$15.82</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance:1.02868</div>
        </div>
      </div>  

      <div class="bar">
        <div class="flex items-center">
          <img src="@/assets/images/liquidity/info.svg" />
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] ml-12px">
            Liquidation Price None
          </div>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div>

      <div class="btn_border">
        <el-button type="primary" class="!w-full !h-60px" @click="borrow(borrow_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">Borrow {{ asset }}</span>
        </el-button>
      </div>
    </div>

    <!-------------------------------------- Repay -------------------------------------->

    <div v-if="active === 2" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Collateralized</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0</span>
            WAWAX
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(user_info.borrowed) }}</span>
            {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Health</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0%</span>
            <span class="inline-block bg-[#50CD7E] w-10px h-10px rounded-full"></span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/token3.png" class="w-32px mr-18px" />
            <div class="font-600 text-22px">{{ asset }}</div>
          </div>
          <div class="flex items-center">
            <div class="text-16px text-[rgba(252,255,253,0.8)] mr-16px">Deposit from</div>
            <div class="btn_border !rounded-full mr-16px">
              <el-button type="primary" plain round class="!w-70px !h-32px !p-0">
                <span class="text-14px font-800 normal-case">Wallet</span>
              </el-button>
            </div>

            <el-popover
              placement="bottom"
              title=""
              trigger="hover"
              :visible-arrow="false"
              popper-class="el-tip"
            >
              <div class="text-center text-[#0B1A3B]">
                <div>text...</div>
              </div>
              <img
                src="@/assets/images/liquidity/q.svg"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="repay_amount"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~$15.82</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Max Repay:0</div>
        </div>
      </div>

      <div class="bar !mb-16px">
        <div class="flex items-center">
          <img src="@/assets/images/liquidity/info.svg" />
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] ml-12px mr-16px">
            Close Position
          </div>
          <el-switch v-model="closed"> </el-switch>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div>

      <div class="bar">
        <div class="flex items-center">
          <img src="@/assets/images/liquidity/info.svg" />
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] ml-12px">
            Liquidation Price None
          </div>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div>

      <div class="btn_border">
        <el-button type="primary" class="!w-full !h-60px" :disabled="repay_amount > user_info.token_balance" @click="repay(repay_amount)">
          <span class="font-800 text-20px">Repay {{ asset }}</span>
        </el-button>
      </div>
    </div>

    <!-------------------------------------- Deposit -------------------------------------->

    <div v-if="active === 3" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Deposited</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(user_info.deposited) }}</span>
            {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(user_info.borrowed) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Supply APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(market_info.supply_rate) }}%</span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/token1.png" class="w-32px mr-18px" />
            <div class="font-600 text-22px">{{ asset }}</div>
          </div>
          <div class="flex items-center">
            <div class="text-16px text-[rgba(252,255,253,0.8)] mr-15px">Use as collateral</div>
            <el-switch v-model="collateralize" class="mr-15px"> </el-switch>

            <el-popover
              placement="bottom"
              title=""
              trigger="hover"
              :visible-arrow="false"
              popper-class="el-tip"
            >
              <div class="text-center text-[#0B1A3B]">
                <div>Enter market and use deposited asset as collateral for borrowing</div>
              </div>
              <img
                src="@/assets/images/liquidity/q.svg"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="deposit_amount"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~$15.82</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ formatNumber(user_info.token_balance) }} {{ asset }}</div>
        </div>
      </div>

      <div class="bar">
        <div class="flex items-center text-14px font-300">
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] mr-10px">
            Deposited
          </div>
          <div>0 USDC.e</div>
          <div>-></div>
          <div>0 USDC.e</div>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div>

      <div class="btn_border">
        <el-button type="primary" class="!w-full !h-60px" :disabled="user_info.token_balance < deposit_amount" @click="deposit(deposit_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">DEPOSIT {{ asset }}</span>
        </el-button>
      </div>
    </div>

    <!------------------------------------ Withdraw ------------------------------------>

    <div v-if="active === 4" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Deposited</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(user_info.deposited) }}</span>
            {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0.452368%</span>
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Supply APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0.00101783%</span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/token1.png" class="w-32px mr-18px" />
            <div class="font-600 text-22px">{{ asset }}</div>
          </div>
          <div class="flex items-center">
            <div class="text-16px text-[rgba(252,255,253,0.8)] mr-16px">Receive to</div>
            <div class="btn_border !rounded-full mr-16px">
              <el-button type="primary" plain round class="!w-70px !h-32px !p-0">
                <span class="text-14px font-800 normal-case">Wallet</span>
              </el-button>
            </div>

            <el-popover
              placement="bottom"
              title=""
              trigger="hover"
              :visible-arrow="false"
              popper-class="el-tip"
            >
              <div class="text-center text-[#0B1A3B]">
                <div>text...</div>
              </div>
              <img
                src="@/assets/images/liquidity/q.svg"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="withdraw_amount"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~$15.82</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ formatNumber(user_info.ftoken_balance) }} fToken</div>
        </div>
      </div>

      <div class="bar">
        <div class="flex items-center text-14px font-300">
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] mr-10px">
            Deposited
          </div>
          <div>0 USDC.e</div>
          <div>-></div>
          <div>0 USDC.e</div>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div>

      <div class="btn_border">
        <el-button type="primary" class="!w-full !h-60px" :disabled="withdraw_amount > user_info.ftoken_balance" @click="withdraw(withdraw_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">WITHDRAW {{ asset }}</span>
        </el-button>
      </div>
    </div>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { _formatNumber, getTxURL, toWei, fromWei, tokenApprove } from "@/utils/common";
import { user_info_default, market_info_default, initTokenContract, initMarketContract, initManagerContract } from "@/config/money_market/market";

import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    asset() {
      return this.$route.query.asset;
    },
  },
  data() {
    return {
      active: 1,
      collateralize: false,
      closed: false,
      tokenContract: {},
      marketContract: {},
      managerContract: {},
      user_info: user_info_default,
      market_info: market_info_default,
      deposit_amount: '',
      withdraw_amount: '',
      borrow_amount: '',
      repay_amount: '',
      timer: '',
      dialogue_info: DialogInfo,
    };
  },
  async mounted() {
    this.tokenContract = await initTokenContract(this.asset);
    this.marketContract = await initMarketContract(this.asset);
    this.managerContract = await initManagerContract();

    await this.updateUserInfo();
    await this.updateMarketInfo();
    //setInterval(this.updateMarketInfo, 15000);
  },
  methods: {
    async updateUserInfo() {
      const account = this.userInfo.userAddress;

      this.user_info.token_balance = fromWei(await this.tokenContract.contract.methods.balanceOf(account).call());
      this.user_info.ftoken_balance = fromWei(await this.marketContract.contract.methods.balanceOf(account).call());
      this.user_info.deposited = fromWei(await this.marketContract.contract.methods.balanceOfUnderlying(account).call());
      this.user_info.borrowed = fromWei(await this.marketContract.contract.methods.borrowBalanceCurrent(account).call());
    },
    async updateMarketInfo() {
      // Number of blocks assumed per year in interest rate contract: 2102400
      const supplyRatePerBlock = await this.marketContract.contract.methods.supplyRatePerBlock().call();
      this.market_info.supply_rate = fromWei(supplyRatePerBlock * 2102400 * 100);

      const borrowRatePerBlock = await this.marketContract.contract.methods.borrowRatePerBlock().call();
      this.market_info.borrow_rate = fromWei(borrowRatePerBlock * 2102400 * 100);

      //console.log("updated");
    },

    /******************************* Balance & allowance checks *******************************/

    async hasEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.tokenContract.contract.methods.balanceOf(account).call();

      return balance >= toWei(amount) ? true : false;
    },
    async approvedEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.tokenContract.contract.methods.allowance(account, this.marketContract.address).call();

      return allowance >= toWei(amount) ? true : false;
    },
    async hasEnoughFToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.marketContract.contract.methods.balanceOf(account).call();

      return balance >= toWei(amount) ? true : false;
    },

    /*********************************** Contract functions ***********************************/

    async borrow(amount) {
      const account = this.userInfo.userAddress;

      openDialog(this.dialogue_info, [ProcessInfo.BORROW_TOKEN]);  

      try {
        const tx_result = await this.marketContract.contract.methods.borrow(toWei(amount)).send({ from: accounr });
        this.successMessage(tx_result, `Borrow ${this.asset} succeeded`);
      } catch (e) {
        this.errorMessage(`Borrow ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      await this.updateUserInfo();
    },
    async repay(amount) {
      const account = this.userInfo.userAddress;
      const hasEnoughToken = await this.hasEnoughToken(amount);
      const approvedEnoughToken = await this.approvedEnoughToken(amount);

      if (!hasEnoughToken) {
        this.errorMessage(`Repay ${this.asset} failed`);
        return;
      }

      let dialog_list = [];
      if(!approvedEnoughToken) {
        dialog_list.push(ProcessInfo.APPROVE_TOKEN);
      }
      dialog_list.push(ProcessInfo.REPAY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedEnoughToken) {
        try {
          const approve_result = await tokenApprove(this.tokenContract.address, account, this.marketContract.address);
          this.successMessage(approve_result, `Approve ${this.asset} succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Approve ${this.asset} failed`)
          console.warn(e);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      try {
        const tx_result = await this.marketContract.contract.methods.repayBorrow(toWei(amount)).send({ from: accounr });
        this.successMessage(tx_result, `Repay ${this.asset} succeeded`);
      } catch (e) {
        this.errorMessage(`Repay ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      await this.updateUserInfo();
    },
    async deposit(amount) {
      const account = this.userInfo.userAddress;
      const hasEnoughToken = await this.hasEnoughToken(amount);
      const approvedEnoughToken = await this.approvedEnoughToken(amount);
      const useAsCollateral = this.collateralize;
      const isAlreadyCollateral = await this.managerContract.contract.methods.checkMembership(account, this.marketContract.address).call();

      if (!hasEnoughToken) {
        this.errorMessage(`Repay ${this.asset} failed`);
        return;
      }

      let dialog_list = [];
      if (!approvedEnoughToken) {
        dialog_list.push(ProcessInfo.APPROVE_TOKEN);
      }
      if (useAsCollateral && !isAlreadyCollateral) {
        dialog_list.push(ProcessInfo.ENTER_MARKET);
      }
      dialog_list.push(ProcessInfo.DEPOSIT_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedEnoughToken) {
        try {
          const approve_result = await tokenApprove(this.tokenContract.address, account, this.marketContract.address);
          this.successMessage(approve_result, `Approve ${this.asset} succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Approve ${this.asset} failed`)
          console.warn(e);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      if (useAsCollateral && !isAlreadyCollateral) {
        try {
          const tx_result = await this.managerContract.contract.methods.enterMarkets([this.marketContract.address]).send({ from: account });
          this.successMessage(tx_result, `Enter ${this.asset} market succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Enter ${this.asset} market failed`);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      try {
        const tx_result = await this.marketContract.contract.methods.supply(toWei(amount)).send({ from: account });
        this.successMessage(tx_result, `Deposit ${this.asset} succeeded`);
      }catch (e) {
        this.errorMessage(`Deposit ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      await this.updateUserInfo();
      this.deposit_amount = "";
    },
    async withdraw(amount) {
      const account = this.userInfo.userAddress;
      const hasEnoughFToken = await this.hasEnoughFToken(account);

      if (!hasEnoughFToken) {
        this.errorMessage(`Withdraw ${this.asset} failed`);
        return;
      }

      openDialog(this.dialogue_info, [ProcessInfo.WITHDRAW_TOKEN]);

      try {
        const tx_result = await this.marketContract.contract.methods.redeem(toWei(amount)).send({ from: account });
        this.successMessage(tx_result, `Withdraw ${this.asset} succeeded`);
      }catch (e) {
        this.errorMessage(`Withdraw ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      await this.updateUserInfo();
    },

    /************************************* Message Handler *************************************/ 

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

    formatNumber(value, fixed = 2) {
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
  },
};
</script>
