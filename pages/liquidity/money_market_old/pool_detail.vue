<style lang="scss" scoped>
.page-enter-active, .page-leave-active {
  transition: all 0.7s ease-out;
}
.page-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.page-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
  
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
        width: 160px;
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

.refresh {
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 140px;
  cursor: pointer;
  color: #f181de;
  transition: all 0.5s;
  position: relative;
}
.refresh::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(241, 129, 222, 0.1);
  border-radius: 8px;
  transition: all 0.3s;
}
.refresh:hover::before {
  opacity: 0 ;
  transform: scale(0.5,0.5);
}
.refresh::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 2px solid rgb(241, 129, 222, 0.5);
  border-radius: 8px;
  transform: scale(1.2,1.2);
}
.refresh:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

.pulse-text {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #f181de;
  margin-right: 13px;
  animation: pulseText 1.2s ease-in-out infinite alternate; 
}
@keyframes pulseText {
  from {
    text-shadow: 0 0 0 #f181de;
  }
  to {
    text-shadow: 0 0 8px #f181de;
  }
}
.reminder {
  margin-top: 20px;
  line-height: 22px;
}
</style>

<template>
  <div class="!w-1150px pb-100px">
    <div class="absolute pt-70px flex justify-between items-center w-200px">
      <img src="@/assets/images/icon_back.svg" class="cursor-pointer hover:opacity-80"
        @click="$router.go(-1)" />
      <div @click="refreshData" class="refresh"><span class="font-500">Refresh Data</span></div>
    </div>
      

    <BorrowTab2 v-model="active"></BorrowTab2>

    <!-------------------------------------- Borrow -------------------------------------->

    <div v-if="active === 1" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px text-left">
          <div class="mb-4px">Borrow Quota</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.borrow_quota, token_decimal) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.borrowed, token_decimal) }}</span>
            {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Borrow APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(market_info.borrow_rate) }}%</span>
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
            <div class="text-15px ml-1px text-[rgba(252,255,253,0.6)]">~${{ displayFormat(approxValue(borrow_amount)) }}</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ displayFormat(user_info.token_balance, token_decimal) }} {{ asset }}</div>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="compareInt(compareFormat(borrow_amount, token_decimal), user_info.borrow_quota) == 'larger' || compareInt(compareFormat(borrow_amount, token_decimal), market_info.cash) == 'larger' || borrow_amount === ''" @click="borrow(borrow_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">Borrow {{ asset }}</span>
        </el-button>
      </div>
    </div>

    <!-------------------------------------- Repay -------------------------------------->

    <div v-if="active === 2" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Borrow Quota</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.borrow_quota, token_decimal) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.borrowed, token_decimal) }}</span>
            {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Borrow APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(market_info.borrow_rate) }}%</span>
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
            <!--div class="text-16px text-[rgba(252,255,253,0.8)] mr-16px">Deposit from</div>
            <div class="btn_border !rounded-full mr-16px">
              <el-button type="primary" plain round class="!w-70px !h-32px !p-0">
                <span class="text-14px font-800 normal-case">Wallet</span>
              </el-button>
            </div-->
            <div class="pulse-text">Close position</div>
            <el-switch v-model="close_position" class="mr-15px" @change="writeRepayAmount()"> </el-switch>

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
            <div class="text-15px ml-1px text-[rgba(252,255,253,0.6)]">~${{ displayFormat(approxValue(repay_amount)) }}</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ displayFormat(user_info.token_balance, token_decimal) }} {{ asset }}</div>
        </div>
      </div>

      <!--div class="bar !mb-16px">
        <div class="flex items-center">
          <img src="@/assets/images/liquidity/info.svg" />
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] ml-12px mr-16px">
            Close Position
          </div>
          <el-switch v-model="close_position" @change="writeRepayAmount()"> </el-switch>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div-->

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
        <el-button type="primary" class="!w-full !h-60px" :disabled="compareInt(compareFormat(repay_amount, token_decimal), user_info.token_balance) == 'larger' || repay_amount === ''" @click="repay(repay_amount)">
          <span class="font-800 text-20px">Repay {{ asset }}</span>
        </el-button>
      </div>

      <p class="reminder">Note: Toggle the <span class="text-[#f181de]">close position</span> switch to get the amount you need to repay to close your borrowing position.</p>
    </div>

    <!-------------------------------------- Deposit -------------------------------------->

    <div v-if="active === 3" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Withdraw Quota</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.withdraw_quota, token_decimal) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Deposited</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.deposited, token_decimal) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Supply APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(market_info.supply_rate) }}%</span>
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
            <div class="pulse-text">Use as collateral</div>
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
            <div class="text-15px ml-1px text-[rgba(252,255,253,0.6)]">~${{ displayFormat(approxValue(deposit_amount)) }}</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ displayFormat(user_info.token_balance, token_decimal) }} {{ asset }}</div>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="compareInt(compareFormat(deposit_amount, token_decimal), user_info.token_balance) == 'larger' || deposit_amount === ''" @click="deposit(deposit_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">DEPOSIT {{ asset }}</span>
        </el-button>
      </div>

      <p class="reminder">Note: Toggle the <span class="text-[#f181de]">use as collateral</span> switch if you plan to use the asset as collateral and have not done so before.</p>
    </div>

    <!------------------------------------ Withdraw ------------------------------------>

    <div v-if="active === 4" class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Withdraw Quota</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.withdraw_quota, token_decimal) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Deposited</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(user_info.deposited, token_decimal) }}</span> {{ asset }}
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Supply APR</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">{{ displayFormat(market_info.supply_rate) }}%</span>
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
            <!--div class="text-16px text-[rgba(252,255,253,0.8)] mr-16px">Receive to</div>
            <div class="btn_border !rounded-full mr-16px">
              <el-button type="primary" plain round class="!w-70px !h-32px !p-0">
                <span class="text-14px font-800 normal-case">Wallet</span>
              </el-button>
            </div-->
            <div class="pulse-text">Withdraw max</div>
            <el-switch v-model="withdraw_max" class="mr-15px" @change="writeWithdrawAmount()"> </el-switch>

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
            <div class="text-15px ml-1px text-[rgba(252,255,253,0.6)]">~${{ displayFormat(approxValue(withdraw_amount)) }}</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance: {{ displayFormat(user_info.token_balance, token_decimal) }} {{ asset }}</div>
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
        <el-button type="primary" class="!w-full !h-60px" :disabled="compareInt(compareFormat(withdraw_amount, token_decimal), user_info.withdraw_quota) == 'larger' || compareInt(compareFormat(withdraw_amount, token_decimal), user_info.deposited) == 'larger' || withdraw_amount === ''" @click="withdraw(withdraw_amount)">
          <span class="font-800 text-20px" style="word-spacing: 5px">WITHDRAW {{ asset }}</span>
        </el-button>
      </div>

      <p class="reminder">Note: Toggle the <span class="text-[#f181de]">withdraw max</span> switch to get the maximum amount you can withdraw without causing shortfall to your borrowings.</p>
    </div>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { _formatNumber, _compareInt, getTxURL, toWei, fromWei, tokenApprove, getNativeTokenAmount } from "@/utils/common";
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
    tier() {
      return this.$route.query.tier;
    }
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      active: 1,
      is_collateral: false,
      close_position: false,
      collateralize: false,
      withdraw_max: false,
      token: {},
      market: {},
      manager: {},
      priceOracle: {},
      user_info: user_info_default,
      market_info: market_info_default,
      token_decimal: 18,
      is_eth: false,
      deposit_amount: '',
      withdraw_amount: '',
      borrow_amount: '',
      repay_amount: '',
      dialogue_info: DialogInfo,
      multicall: multicall,
    };
  },
  async mounted() {
    this.is_eth = this.asset === "ETH" ? true : false;
    
    this.token = await initTokenContract(this.asset)
    this.market = await initMarketContract(this.asset);
    this.manager = await initManagerContract();
    this.priceOracle = await initPriceOracle();
    if (!this.is_eth) {
      this.token_decimal = parseInt(await this.token.contract.methods.decimals().call());
    }

    this.is_collateral = await this.manager.contract.methods.checkMembership(this.userInfo.userAddress, this.market.address).call();
    this.collateralize = this.is_collateral ? true : false; 

    await this.updateAll();
  },
  methods: {
    async refreshData() {
      await this.updateAll();
      this.$notify({
        title: "Data Updated",
        dangerouslyUseHTMLString: true,
        type: 'success',
      });
    },
    async updateMarketInfo() {
      const multicall_list = [
        this.market.contract.methods.supplyRatePerBlock(),
        this.market.contract.methods.borrowRatePerBlock(),
        this.priceOracle.contract.methods.getUnderlyingPrice(this.market.address),
        this.market.contract.methods.totalCash()
      ];
      const results = await this.multicall.aggregate(multicall_list);

      // Number of blocks assumed per year in interest rate contract: 2102400
      const supplyRatePerBlock = results[0];
      this.market_info.supply_rate = supplyRatePerBlock * 2102400 * 100;
      const borrowRatePerBlock = results[1]
      this.market_info.borrow_rate = borrowRatePerBlock * 2102400 * 100;
      this.market_info.token_price = results[2][0];
      this.market_info.cash = results[3];
    },
    async updateUserInfo() {
      const account = this.userInfo.userAddress;
      let multicall_list = [ 
        this.market.contract.methods.balanceOf(account),
        this.market.contract.methods.balanceOfUnderlying(account),
        this.market.contract.methods.borrowBalanceCurrent(account),
        this.manager.contract.methods.getAccountLiquidity(account),
      ]
      if (!this.is_eth) {
        multicall_list.push(this.token.contract.methods.balanceOf(account));
      }
      const results = await this.multicall.aggregate(multicall_list);

      this.user_info.ftoken_balance = results[0];
      this.user_info.deposited = results[1];
      this.user_info.borrowed = results[2];
      if (!this.is_eth) {
        this.user_info.token_balance = results[4];
      }else {
        this.user_info.token_balance = toWei(await getNativeTokenAmount(account));
      }

      if (results[3]["1"] > 0) { // results[3]["1"]: shortfall
        this.user_info.borrow_quota = 0;
        this.user_info.withdraw_quota = 0;
      } else {
        let tempLiquidity = 0;

        for (let i = 0; i < this.tier; i++) {
          const liquidityValue = results[3]["0"][i]; // results[3]["0"]: liquidities array
          const tokenEquivalent = liquidityValue / this.market_info.token_price;
          tempLiquidity += parseInt(toWei(tokenEquivalent, this.token_decimal));
        }

        this.user_info.borrow_quota = tempLiquidity > parseInt(this.market_info.cash) ? this.market_info.cash : tempLiquidity.toString();
        this.user_info.withdraw_quota = tempLiquidity > parseInt(this.user_info.deposited) ? this.user_info.deposited : tempLiquidity.toString();
      }
    },
    async updateAll() {
      await this.updateMarketInfo();
      await this.updateUserInfo();
    },
    async writeRepayAmount() {
      if (this.close_position) {        
        await this.updateAll();

        if (this.user_info.borrowed == 0) {
          this.errorMessage("No outstanding borrowings");
          this.close_position = false;
        } else {
          const decimals = this.token_decimal > 8 ? 8 : this.token_decimal;
          this.repay_amount = parseFloat(fromWei(this.user_info.borrowed, this.token_decimal)).toFixed(decimals);
        }
      } else {
        this.repay_amount = "";
      }
    },
    async writeWithdrawAmount() {
      if (this.withdraw_max) {
        await this.updateAll();

        if (this.user_info.withdraw_quota == 0) {
          this.errorMessage("No tokens deposited");
          this.withdraw_max = false;
        } else {
          const decimals = this.token_decimal > 8 ? 8 : this.token_decimal;
          this.withdraw_amount = parseFloat(fromWei(this.user_info.withdraw_quota, this.token_decimal)).toFixed(decimals);
        }
      } else {
        this.withdraw_amount = "";
      }
    },

    /******************************* Balance & allowance checks *******************************/

    async hasEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.token.contract.methods.balanceOf(account).call();

      return _compareInt(balance, amount) != "smaller" ? true : false;
    },
    async approvedEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.token.contract.methods.allowance(account, this.market.address).call();

      return _compareInt(allowance, amount) != "smaller" ? true : false;
    },
    async hasEnoughFToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.market.contract.methods.balanceOf(account).call();

      return _compareInt(balance, amount) != "smaller" ? true : false;
    },

    /*********************************** Contract functions ***********************************/

    async borrow(amount) {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(amount, this.token_decimal);

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
      const account = this.userInfo.userAddress;
      let actualAmount;
      if (this.close_position) {
        await this.updateUserInfo();
        actualAmount = this.user_info.borrowed;
      } else {
        toWei(amount, this.token_decimal);
      }
      let approvedEnoughToken;

      let dialog_list = [];
      if (!this.is_eth) {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      dialog_list.push(ProcessInfo.REPAY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (!this.is_eth) {
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
      }

      try {
        let tx_result;
        if (!this.is_eth) {
          tx_result = await this.market.contract.methods.repayBorrow(actualAmount).send({ from: account });
        } else {
          tx_result = await this.market.contract.methods.repayBorrow().send({ from: account, value:  actualAmount})
        }
        this.successMessage(tx_result, `Repay ${this.asset} succeeded`);
      } catch (e) {
        this.errorMessage(`Repay ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.repay_amount = "";
      this.close_position = false;
      await this.updateAll();
    },
    async deposit(amount) {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(amount, this.token_decimal);
      let approvedEnoughToken;

      let dialog_list = [];
      if (!this.is_eth) {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      if (this.collateralize && !this.is_collateral) {
        dialog_list.push(ProcessInfo.ENTER_MARKET);
      }
      dialog_list.push(ProcessInfo.DEPOSIT_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (!this.is_eth) {
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
      }
      
      if (this.collateralize && !this.is_collateral) {
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
        let tx_result;
        if (!this.is_eth) {
          tx_result = await this.market.contract.methods.supply(actualAmount).send({ from: account });
        } else {
          tx_result = await this.market.contract.methods.supply().send({ from: account, value: actualAmount });
        }
        this.successMessage(tx_result, `Deposit ${this.asset} succeeded`);
      }catch (e) {
        console.warn(e);
        this.errorMessage(`Deposit ${this.asset} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.deposit_amount = "";
      await this.updateAll();
    },
    async withdraw(amount) {
      const account = this.userInfo.userAddress;
      let actualAmount;
      if (this.withdraw_max) {
        await this.updateUserInfo();
        actualAmount = this.user_info.withdraw_quota;
      } else {
        toWei(amount, this.token_decimal);
      }

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
      this.withdraw_max = false;
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
    compareInt(a, b) {
      return _compareInt(a, b);
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
    displayFormat(amount, decimal = 18) {
      return this.formatNumber(fromWei(amount, decimal));
    },
    compareFormat(amount, decimal) {
      const actualAmount = amount == '' ? 0 : parseFloat(amount);
      return toWei(actualAmount, decimal);
    }
  },
};
</script>
