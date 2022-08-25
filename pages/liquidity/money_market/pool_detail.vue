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
          <div class="mb-4px">Health</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0%</span>
            <span class="inline-block bg-[#50CD7E] w-10px h-10px rounded-full"></span>
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
          <div class="mb-4px">Borrow APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(market_info.borrow_rate) }}%</span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/liquidity/tokens/FUR.png" class="w-32px mr-10px" />
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
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="borrow_amount" type="number"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~${{ formatNumber(approxValue(borrow_amount)) }}</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ formatNumber(user_info.token_balance) }} {{ asset }}</div>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="borrow_amount === ''" @click="borrow(borrow_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">Borrow {{ asset }}</span>
        </el-button>
      </div>
    </div>

    <!-------------------------------------- Repay -------------------------------------->

    <div v-if="active === 2" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Health</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0%</span>
            <span class="inline-block bg-[#50CD7E] w-10px h-10px rounded-full"></span>
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
          <div class="mb-4px">Borrow APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ formatNumber(market_info.borrow_rate) }}%</span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/liquidity/tokens/FUR.png" class="w-32px mr-10px" />
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
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="repay_amount" type="number"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~${{ formatNumber(approxValue(repay_amount)) }}</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ formatNumber(user_info.token_balance) }} {{ asset }}</div>
        </div>
      </div>

      <div class="bar !mb-16px">
        <div class="flex items-center">
          <img src="@/assets/images/liquidity/info.svg" />
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] ml-12px mr-16px">
            Close Position
          </div>
          <el-switch v-model="close_position" @change="writeRepayAmount()"> </el-switch>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="repay_amount > user_info.token_balance || repay_amount === ''" @click="repay(repay_amount)">
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
            <img src="@/assets/images/liquidity/tokens/FUR.png" class="w-32px mr-10px" />
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
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="deposit_amount" type="number"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~${{ formatNumber(approxValue(deposit_amount)) }}</div>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="user_info.token_balance < deposit_amount || deposit_amount === ''" @click="deposit(deposit_amount)">
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
            <img src="@/assets/images/liquidity/tokens/FUR.png" class="w-32px mr-10px" />
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
            <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="withdraw_amount" type="number"></el-input>
            <div class="text-15px text-[rgba(252,255,253,0.6)]">~${{ formatNumber(approxValue(withdraw_amount)) }}</div>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="withdraw_amount > user_info.token_balance || withdraw_amount === ''" @click="withdraw(withdraw_amount)">
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
import { user_info_default, market_info_default, initTokenContract, initMarketContract, initManagerContract, initPriceOracle } from "@/config/money_market/market";
import { newMultiCallProvider } from "@/utils/web3/multicall";

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
    const multicall = newMultiCallProvider(4);
    return {
      active: 1,
      collateralize: false,
      close_position: false,
      token: {},
      market: {},
      manager: {},
      priceOracle: {},
      user_info: user_info_default,
      market_info: market_info_default,
      deposit_amount: '',
      withdraw_amount: '',
      borrow_amount: '',
      repay_amount: '',
      dialogue_info: DialogInfo,
      multicall: multicall,
    };
  },
  async mounted() {
    this.token = await initTokenContract(this.asset);
    this.market = await initMarketContract(this.asset);
    this.manager = await initManagerContract();
    this.priceOracle = await initPriceOracle();

    await this.updateAll();
    //setInterval(this.updateAll, 10000);
  },
  methods: {
    async updateUserInfo() {
      const account = this.userInfo.userAddress;
      const multicall_list = [
        this.token.contract.methods.balanceOf(account), 
        this.market.contract.methods.balanceOf(account),
        this.market.contract.methods.balanceOfUnderlying(account),
        this.market.contract.methods.borrowBalanceCurrent(account)
      ];
      const results = await this.multicall.aggregate(multicall_list);

      this.user_info.token_balance = fromWei(results[0]);
      this.user_info.ftoken_balance = fromWei(results[1]);
      this.user_info.deposited = fromWei(results[2]);
      this.user_info.borrowed = fromWei(results[3]);
    },
    async updateMarketInfo() {
      const multicall_list = [
        this.market.contract.methods.supplyRatePerBlock(),
        this.market.contract.methods.borrowRatePerBlock(),
        this.priceOracle.contract.methods.getUnderlyingPrice(this.market.address)
      ];
      const results = await this.multicall.aggregate(multicall_list);

      // Number of blocks assumed per year in interest rate contract: 2102400
      const supplyRatePerBlock = results[0];
      this.market_info.supply_rate = fromWei(supplyRatePerBlock * 2102400 * 100);

      const borrowRatePerBlock = results[1]
      this.market_info.borrow_rate = fromWei(borrowRatePerBlock * 2102400 * 100);

      this.market_info.token_price = fromWei(results[2]);
    },
    async updateAll() {
      await this.updateUserInfo();
      await this.updateMarketInfo();

      //console.log("updated");
    },
    async getBorrowedRaw() {
      const account = this.userInfo.userAddress;
      return await this.market.contract.methods.borrowBalanceCurrent(account).call();
    },
    writeRepayAmount() {
      if (this.close_position) {
        this.repay_amount = this.formatNumber(this.user_info.borrowed);
      } else {
        this.repay_amount = "";
      }
    },

    /******************************* Balance & allowance checks *******************************/

    async hasEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.token.contract.methods.balanceOf(account).call();

      return balance >= amount ? true : false;
    },
    async approvedEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.token.contract.methods.allowance(account, this.market.address).call();

      return allowance >= amount ? true : false;
    },
    async hasEnoughFToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.market.contract.methods.balanceOf(account).call();

      return balance >= amount ? true : false;
    },

    /*********************************** Contract functions ***********************************/

    async borrow(amount) {
      const actualAmount = toWei(amount);
      const account = this.userInfo.userAddress;

      openDialog(this.dialogue_info, [ProcessInfo.BORROW_TOKEN]);  

      try {
        const tx_result = await this.market.contract.methods.borrow(actualAmount).send({ from: account });
        this.successMessage(tx_result, `Borrow ${this.asset} succeeded`);
      } catch (e) {
        this.errorMessage(`Borrow ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.borrow_amount = "";
      await this.updateAll();
    },
    async repay(amount) {
      const actualAmount = this.close_position ? await this.getBorrowedRaw() : toWei(amount);
      const account = this.userInfo.userAddress;
      const approvedEnoughToken = await this.approvedEnoughToken(actualAmount);

      let dialog_list = [];
      if (!approvedEnoughToken) {
        dialog_list.push(ProcessInfo.APPROVE_TOKEN);
      }
      dialog_list.push(ProcessInfo.REPAY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedEnoughToken) {
        try {
          const approve_result = await tokenApprove(this.token.address, account, this.market.address);
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
        const tx_result = await this.market.contract.methods.repayBorrow(actualAmount).send({ from: account });
        this.successMessage(tx_result, `Repay ${this.asset} succeeded`);
      } catch (e) {
        this.errorMessage(`Repay ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.repay_amount = "";
      await this.updateAll();
    },
    async deposit(amount) {
      const actualAmount = toWei(amount);
      const account = this.userInfo.userAddress;
      const approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
      const useAsCollateral = this.collateralize;
      const isAlreadyCollateral = await this.manager.contract.methods.checkMembership(account, this.market.address).call();

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
          const approve_result = await tokenApprove(this.token.address, account, this.market.address);
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
          const tx_result = await this.manager.contract.methods.enterMarkets([this.market.address]).send({ from: account });
          this.successMessage(tx_result, `Enter ${this.asset} market succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Enter ${this.asset} market failed`);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      try {
        const tx_result = await this.market.contract.methods.supply(actualAmount).send({ from: account });
        this.successMessage(tx_result, `Deposit ${this.asset} succeeded`);
      }catch (e) {
        this.errorMessage(`Deposit ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.deposit_amount = "";
      await this.updateAll();
    },
    async withdraw(amount) {
      const actualAmount = toWei(amount);
      const account = this.userInfo.userAddress;

      openDialog(this.dialogue_info, [ProcessInfo.WITHDRAW_TOKEN]);

      try {
        const tx_result = await this.market.contract.methods.redeemUnderlying(actualAmount).send({ from: account });
        this.successMessage(tx_result, `Withdraw ${this.asset} succeeded`);
      }catch (e) {
        this.errorMessage(`Withdraw ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.withdraw_amount = "";
      await this.updateAll();
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
    approxValue(tokenAmount) {
      const actualAmount = tokenAmount == '' ? 0 : tokenAmount;
      return this.market_info.token_price * actualAmount;
    },
  },
};
</script>
