<style lang="scss" scoped>
.top-bar {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.58) 9.21%,
    #333572 95.15%
  );
}
.white {
  @apply text-[rgba(252,255,253,1)] text-20px font-700;
}
.white2 {
  @apply text-[rgba(252,255,253,1)] text-18px font-600;
}
.white3 {
  @apply text-[rgba(252,255,253,0.8)] text-16px font-400;
}
.grey {
  @apply text-[rgba(138,146,162,1)] text-14px font-600;
}
.grey2 {
  @apply text-[rgba(252,255,253,0.6)] text-15px font-300;
}
.top1 ::v-deep .loading {
  .item {
    &.first {
      height: 113px;
      margin-bottom: 0 !important;
    }
  }
}
.section-title {
  @apply text-[#C3C6CD] text-24px font-700 ml-5px relative left-14px;
  &::after {
    content: "";
    @apply block bg-[#FA6BE1] w-7px h-20px rounded-12px absolute -left-14px top-1px;
  }
}
.box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border-radius: 20px;
  .box-top {
    height: 68px;
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.4) 9.21%,
      rgba(51, 53, 114, 0.5) 95.15%
    );
    border-radius: 12px;
  }
}
.box-border5 {
  background: url(@/assets/images/dashboard/box-border5.png) 0 0/ 579px 957px no-repeat;
}
.box2 {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.4) 0%,
    rgba(51, 53, 114, 0.5) 100.69%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  @apply w-536px h-380px rounded-12px px-24px pt-25px pb-44px;
  &.high {
    height: 380px;
  }
}
.box-input {
  width: 100%;
  height: 60px;
  background: rgba(1, 17, 41, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  // box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
  border-radius: 12px !important;
  &::v-deep {
    .el-input__inner {
      height: 60px;
      background: transparent;
      border: 1px solid transparent !important;
      border: none !important;
      color: #fcfffd;
      color: rgba(252, 255, 253, 0.9);
      font-size: 22px;
      font-weight: 600;
      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.3) !important;
      }
    }
    .el-input__suffix-inner {
      display: flex;
      height: 100%;
      right: 15px;
    }
    .max {
      background: linear-gradient(
        180deg,
        rgba(51, 53, 114, 0.16) -9.52%,
        rgba(51, 53, 114, 0.2) 109.52%
      );
      @apply rounded-5px w-48px h-28px leading-28px text-[rgba(252,255,253,0.8)] text-13px font-700 text-center cursor-pointer;
    }
  }
}
.list-box {
  @apply h-153px;
  &::v-deep {
    .el-scrollbar__bar.is-vertical {
      background: #0a1a3a;
      opacity: 1;
      .el-scrollbar__thumb {
        background: #525f9a;
      }
    }
  }
}
.operation-icon {
  border: 1.6px solid rgba(255, 255, 255, 0.1);
  @apply w-32px h-32px bg-[rgba(1,17,41,0.6)] rounded-16px relative cursor-pointer;
  &::before {
    content: "";
    @apply block w-13px h-3px rounded-1.5px bg-[#d9d9d9] top-13px left-8px absolute;
  }
  &.plus {
    &::after {
      content: "";
      @apply block w-3px h-13px rounded-1.5px bg-[#d9d9d9] top-8px left-13px absolute;
    }
  }
}
.my-switch-wrap {
  @apply w-38px h-19px rounded-9.5px bg-[#0A1A3A] cursor-pointer;
  .switch-core {
    @apply w-19px h-19px rounded-9.5px  bg-[#525F9A];
    transition: 0.3s transform;
  }
  &.is-max {
    @apply bg-[#5263B1];
    .switch-core {
      transform: translateX(19px);
      @apply bg-[#8996D3];
    }
  }
}
.reminder {
  margin-top: 20px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 6px;
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

.custom_btn {
  display: block;
  width: 480px;
  height: 50px;
  line-height: 45px;
  font-size: 19px;
  font-weight: 800;
  text-decoration: none;
  color: #f06fd2;
  border: 2px solid #f06fd2;
  text-align: center;
  position: relative;
  transition: all 0.5s ease-out;
  border-radius: 12px;

  span {
    position: relative;
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #f06fd2;
    border-radius: 9px;
    transition: all 0.5s;
  }

  &:hover {
    color: #0a1a3a;
  }

  &:hover:after {
    width: 100%;
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
  content: "";
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
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.refresh::after {
  content: "";
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
  transform: scale(1.2, 1.2);
}
.refresh:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}

.refreshBtn {
  outline: none;
  height: 50px;
  text-align: center;
  width: 160px;
  border-radius: 40px;
  background: none;
  border: 2px solid #f181de;
  color: #f181de;
  letter-spacing: 1px;
  text-shadow: 0;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s ease;
  &:hover {
    color: #0a1a3a;
    background: #f181de;
  }
  &:active {
    letter-spacing: 2px;
  }
  &:after {
    content: "REFRESH DATA";
  }
}
.onclic {
  width: 50px;
  border-color: #0a1a3a;
  border-width: 5px;
  font-size: 0;
  border-left-color: #f181de;
  animation: rotating 2s 0.25s linear infinite;

  &:after {
    content: "";
  }
}
.validate {
  font-size: 13px;
  color: #0a1a3a;
  background: #f181de;
  &:after {
    content: "\2714";
    font-size: 20px;
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="page pt-120px bg-[#01132E] text-[#FCFFFD]">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-120px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
    </div>

    <div class="w-1184px mx-auto pb-44px">
      <Loading class="w-1184px h-113px top1" :loading="loading1">
        <div
          class="w-full h-113px rounded-12px flex items-center top-bar justify-between px-27px"
        >
          <div class="flex items-center">
            <img class="mr-15px w-50px h-50px" :src="asset.image" />
            <span class="white mr-10px">{{ asset.name }}</span>
            <span class="grey !text-20px mr-100px">({{ symbol }})</span>
            <div class="text-center">
              <p class="grey mb-7px">Reserve Size</p>
              <p class="white">
                $
                {{
                  displayFormat(
                    approxValue(market_info.reserve),
                    18 + token_decimal,
                    2
                  )
                }}
              </p>
            </div>
            <div class="ml-70px text-center">
              <p class="grey mb-7px">Available liquidity</p>
              <p class="white">
                $
                {{
                  displayFormat(
                    approxValue(market_info.cash),
                    18 + token_decimal,
                    2
                  )
                }}
              </p>
            </div>
            <div class="ml-70px text-center">
              <p class="grey mb-7px">Oracle price</p>
              <p class="white">
                $ {{ displayFormat(market_info.token_price, 18, 2) }}
              </p>
            </div>
          </div>

          <button
            class="refreshBtn"
            :class="{ onclic: refreshing, validate: validating }"
            @click="refreshData()"
          ></button>
        </div>
      </Loading>
      <div class="flex mt-37px justify-between">
        <!-------------------------------------- Deposit -------------------------------------->
        <Loading class="w-579px h-861px" :loading="loading2">
          <div class="box box-border5 p-10px">
            <div
              class="box-top flex items-center justify-between pr-53px pl-22px mb-25px"
            >
              <p class="section-title">Supply Info</p>
              <div class="flex items-center">
                <div class="mr-45px text-center">
                  <p class="grey mb-7px">Total supplied</p>
                  <p class="white">
                    {{ displayFormat(market_info.supplied, token_decimal, 2)
                    }}<span class="grey2 ml-5px !font-600">{{ symbol }}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey mb-7px">APR</p>
                  <p class="white">
                    {{ displayFormat(market_info.supply_rate, 18, 2) }}%
                  </p>
                </div>
              </div>
            </div>

            <client-only>
              <SupplyInfoChart />
            </client-only>

            <p class="white mt-36px mb-30px ml-22px">Deposit {{ symbol }}</p>
            <div class="box2 ml-12px">
              <div class="flex justify-between items-center mb-37px px-10px">
                <div class="text-center">
                  <p class="grey2 mb-6px">In Wallet</p>
                  <p class="white2">
                    <!-- mark 用户钱包余额 -->
                    {{
                      displayFormat(user_info.token_balance, token_decimal, 2)
                    }}
                    <span class="grey !text-16px">{{ symbol }}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">Deposited</p>
                  <p class="white2">
                    {{ displayFormat(user_info.deposited, token_decimal, 2) }}
                    <span class="grey !text-16px">{{ symbol }}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">APR</p>
                  <p class="white2">
                    {{ displayFormat(market_info.supply_rate, 18, 2) }}%
                  </p>
                </div>
              </div>

              <div class="flex items-center box-input">
                <el-input
                  type="number"
                  :precision="2"
                  placeholder="0.00"
                  style="width: 100%"
                  v-model="deposit_amount"
                ></el-input>
                <div
                  class="text-13px text-[rgba(252,255,253,0.4)] mr-15px pt-13px"
                >
                  <!--mark  approxValue作用：转为美元？  -->
                  ~${{ displayFormat(approxValue(deposit_amount)) }}
                </div>
                <!-- mark writeMaxDeposit作用：将用户有的钱都填入表格 -->
                <div
                  class="flex items-center mr-15px"
                  @click="writeMaxDeposit()"
                >
                  <div class="max">MAX</div>
                </div>
              </div>

              <div class="flex items-center mt-15px pl-6px">
                <div
                  class="font-500 text-16px text-[rgba(252,255,253,0.8)] mr-16px pulse-text"
                >
                  Use as collateral
                </div>
                <el-switch v-model="collateralize"> </el-switch>
              </div>

              <a
                class="custom_btn mt-30px mx-auto cursor-pointer"
                @click="deposit(deposit_amount)"
              >
                <span>DEPOSIT {{ symbol }}</span>
              </a>

              <p class="reminder">
                Note: Toggle the
                <span class="text-[#f181de]">use as collateral</span> switch if
                you plan to use the asset as collateral and have not done so
                before.
              </p>
            </div>
          </div>
        </Loading>

        <!-------------------------------------- Borrow -------------------------------------->
        <Loading class="w-579px h-861px" :loading="loading2">
          <div class="box box-border5 p-10px">
            <div
              class="box-top flex items-center justify-between pr-53px pl-22px mb-25px"
            >
              <p class="section-title">Borrow Info</p>
              <div class="flex items-center">
                <div class="mr-45px text-center">
                  <p class="grey mb-7px">Total borrowed</p>
                  <p class="white">
                    {{ displayFormat(market_info.borrowed, token_decimal, 2)
                    }}<span class="grey2 ml-5px !font-600">{{ symbol }}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey mb-7px">APR</p>
                  <p class="white">
                    {{ displayFormat(market_info.borrow_rate, 18, 2) }}%
                  </p>
                </div>
              </div>
            </div>

            <client-only>
              <BorrowInfoChart />
            </client-only>

            <p class="white mt-36px mb-30px ml-22px">Borrow {{ symbol }}</p>
            <div
              class="box2 ml-12px"
              :class="{ high: collateralList.length > 1 }"
            >
              <div class="flex justify-between items-center mb-37px px-10px">
                <div class="text-center">
                  <p class="grey2 mb-6px">Borrow Limit</p>
                  <p class="white2">
                    {{
                      displayFormat(user_info.borrow_quota, token_decimal, 2)
                    }}
                    <span class="grey !text-16px">{{ symbol }}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">Borrowed</p>
                  <p class="white2">
                    {{ displayFormat(user_info.borrowed, token_decimal, 2) }}
                    <span class="grey !text-16px">{{ symbol }}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">APR</p>
                  <p class="white2">
                    {{ displayFormat(market_info.borrow_rate, 18, 2) }}%
                  </p>
                </div>
              </div>

              <!--p class="font-600 text-16px text-[#fcfffd] mb-16px">Choose collateral</p>

              <div v-if="collateralList.length > 1">
                <div class="list-box">
                  <el-scrollbar style="height: 153px; width: 503px">
                    <ul class="w-488px">
                      <li
                        v-for="(item, index) in collateralList"
                        :key="index"
                        class="w-full mb-14px last-of-type:mb-0"
                      >
                        <div class="flex justify-between items-center mb-10px">
                          <p class="text-[rgba(252,255,253,0.4)] text-13px font-500">
                            Input
                          </p>
                          <p class="rgba(252,255,253,0.8) text-13px font-600">
                            Balance: {{ item.balance }}
                          </p>
                        </div>
                        <div class="flex items-center box-input">
                          <el-input
                            type="number"
                            :precision="2"
                            placeholder="0.00"
                            style="width: 100%"
                            v-model="collateralList[index].num"
                          ></el-input>
                          <div class="flex items-center mr-15px">
                            <div class="max">MAX</div>
                            <div
                              class="bg-[#333B65] w-2px h-32px opacity-40 mx-10px"
                            ></div>
                            <TypeSelector
                              class="selector"
                              v-model="collateralList[index].type"
                            ></TypeSelector>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </el-scrollbar>
                </div>
                <div class="flex items-center justify-center mt-20px">
                  <div class="operation-icon plus" @click="add"></div>
                  <div class="operation-icon ml-30px" @click="remove"></div>
                </div>
              </div>

              <div v-else>
                <ul class="w-488px">
                  <li
                    v-for="(item, index) in collateralList"
                    :key="index"
                    class="w-full mb-14px last-of-type:mb-0"
                  >
                    <div class="flex justify-between items-center mb-10px">
                      <p class="text-[rgba(252,255,253,0.4)] text-13px font-500">Input</p>
                      <p class="rgba(252,255,253,0.8) text-13px font-600">
                        Balance: {{ item.balance }}
                      </p>
                    </div>
                    <div class="flex items-center box-input">
                      <el-input
                        type="number"
                        :precision="2"
                        placeholder="0.00"
                        style="width: 100%"
                        v-model="collateralList[index].num"
                      ></el-input>
                      <div class="flex items-center mr-15px">
                        <div class="max">MAX</div>
                        <div class="bg-[#333B65] w-2px h-32px opacity-40 mx-10px"></div>
                        <TypeSelector
                          class="selector"
                          v-model="collateralList[index].type"
                        ></TypeSelector>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="flex items-center justify-center mt-20px mb-12px">
                  <div class="operation-icon plus" @click="add"></div>
                </div>
              </div-->

              <div class="flex items-center box-input">
                <el-input
                  type="number"
                  :precision="2"
                  placeholder="0.00"
                  style="width: 100%"
                  v-model="borrow_amount"
                ></el-input>
                <div
                  class="text-13px text-[rgba(252,255,253,0.4)] mr-15px pt-13px"
                >
                  ~${{ displayFormat(approxValue(borrow_amount)) }}
                </div>
                <div
                  class="flex items-center mr-15px"
                  @click="writeMaxBorrow()"
                >
                  <div class="max">MAX</div>
                </div>
              </div>

              <!--div class="flex items-center justify-between px-8px">
                <p class="text-16px font-600 text-white opacity-70">
                  Available to Borrow
                </p>
                <div class="flex items-center text-16px font-600 mb-9px">
                  <span class="text-[rgba(252,255,253,1)] mr-3px">100</span>
                  <span class="text-[rgba(252,255,253,0.6)]">ETH</span>
                </div>
              </div>

              <div class="flex items-center mb-25px">
                <span
                  class="!text-[rgba(138,146,162,1)] opacity-70 text-13px font-600 mr-10px"
                  >MAX</span
                >
                <div
                  class="my-switch-wrap"
                  :class="{ 'is-max': isMax }"
                  @click="isMax = !isMax"
                >
                  <div class="switch-core"></div>
                </div>
              </div-->

              <a
                class="custom_btn mt-70px mx-auto cursor-pointer"
                @click="borrow(borrow_amount)"
              >
                <span>BORROW {{ symbol }}</span>
              </a>
              <!--div class="btn_border w-480px mx-auto mt-70px">
                <el-button type="primary" class="!w-full !h-54px">
                  <span class="font-800 text-20px">BORROW {{symbol}}</span>
                </el-button>
              </div-->
            </div>
          </div>
        </Loading>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  _formatNumber,
  _compareInt,
  getTxURL,
  toWei,
  fromWei,
  tokenApprove,
  getNativeTokenAmount,
} from "@/utils/common";

import {
  user_info_default,
  market_info_default,
  initTokenContract,
  initMarketContract,
  initManagerContract,
  initPriceOracle,
  token_list,
} from "@/config/money_market/market";
import { newMultiCallProvider } from "@/utils/web3/multicall";

import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from "~/config/loading_info";
import ProceedingDetails from "@/components/Dialog/ProceedingDetails.vue";

export default {
  layout: "blank",
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState("admin", ["connectStatus"]),
    ...mapState(["userInfo"]),
    symbol() {
      return this.$route.query.asset;
    },
    tier() {
      return this.$route.query.tier;
    },
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      loading1: true,
      loading2: true,
      loading3: true,
      asset: {},
      user_info: user_info_default,
      market_info: market_info_default,
      token: {},
      market: {},
      manager: {},
      priceOracle: {},
      deposit_amount: "",
      borrow_amount: "",
      token_decimal: 18,
      is_eth: false,
      is_collateral: false,
      collateralize: false,
      refreshing: false,
      validating: false,
      dialogue_info: DialogInfo,
      multicall: multicall,

      collateralList: [
        {
          num: 0.0,
          type: "",
          balance: 3.01868,
        },
        // {
        //   num: 111,
        //   type: 'AVAX',
        //   balance: 1.02868,
        // },
        // {
        //   num: 2222,
        //   type: 'AVAX',
        //   balance: 2.02453,
        // },
      ],
    };
  },
  async mounted() {
    setTimeout(async () => {
      this.token = await initTokenContract(this.symbol);
      this.is_eth = this.symbol === "ETH" ? true : false;
      if (!this.is_eth) {
        this.token_decimal = parseInt(
          await this.token.contract.methods.decimals().call()
        );
        //mark 当symbol是FUR this.token_decimal=18
      }
      this.asset = token_list[this.symbol];
      this.market = await initMarketContract(this.symbol);
      this.priceOracle = await initPriceOracle();
      await this.updateMarketInfo();
      this.loading1 = false;
      this.loading2 = false;

      this.manager = await initManagerContract();
      await this.updateUserInfo();

      this.is_collateral = await this.manager.contract.methods
        .checkMembership(this.userInfo.userAddress, this.market.address)
        .call();
      this.collateralize = this.is_collateral ? true : false;
    }, 2000);
  },
  methods: {
    /*
    add() {
      this.collateralList.push({
        num: 0,
        type: "AVAX",
        balance: 0,
      });
    },
    remove() {
      this.collateralList.splice(this.collateralList.length - 1, 1);
    },
    */

    /******************************* State management *******************************/

    async refreshData() {
      this.refreshing = true;
      await this.updateAll();
      this.refreshing = false;
      this.validating = true;
      setTimeout(() => {
        this.validating = false;
      }, 1500);
    },
    async updateMarketInfo() {
      const multicall_list = [
        this.market.contract.methods.supplyRatePerBlock(),
        this.market.contract.methods.borrowRatePerBlock(),
        this.priceOracle.contract.methods.getUnderlyingPrice(
          this.market.address
        ),
        this.market.contract.methods.totalCash(),
        this.market.contract.methods.totalReserves(),
        this.market.contract.methods.totalBorrowsCurrent(),
      ];
      const results = await this.multicall.aggregate(multicall_list);

      // Number of blocks assumed per year in interest rate contract: 2102400
      const supplyRatePerBlock = results[0];
      this.market_info.supply_rate = supplyRatePerBlock * 2102400 * 100;
      const borrowRatePerBlock = results[1];
      this.market_info.borrow_rate = borrowRatePerBlock * 2102400 * 100;
      this.market_info.token_price = results[2][0];
      this.market_info.cash = results[3];
      this.market_info.reserve = results[4];
      this.market_info.borrowed = results[5];
      this.market_info.supplied =
        parseInt(results[3]) + parseInt(results[5]) - parseInt(results[4]); // cash + borrow - reserve
    },
    async updateUserInfo() {
      const account = this.userInfo.userAddress;
      let multicall_list = [
        this.market.contract.methods.balanceOf(account),
        this.market.contract.methods.balanceOfUnderlying(account),
        this.market.contract.methods.borrowBalanceCurrent(account),
        this.manager.contract.methods.getAccountLiquidity(account),
      ];
      if (!this.is_eth) {
        multicall_list.push(this.token.contract.methods.balanceOf(account));
      }
      const results = await this.multicall.aggregate(multicall_list);

      this.user_info.ftoken_balance = results[0];
      this.user_info.deposited = results[1];
      this.user_info.borrowed = results[2];
      if (!this.is_eth) {
        this.user_info.token_balance = results[4];
      } else {
        this.user_info.token_balance = toWei(
          await getNativeTokenAmount(account)
        );
      }

      if (results[3]["1"] > 0) {
        // results[3]["1"]: shortfall
        this.user_info.borrow_quota = 0;
      } else {
        let tempLiquidity = 0;

        for (let i = 0; i < this.tier; i++) {
          const liquidityValue = results[3]["0"][i]; // results[3]["0"]: liquidities array
          const tokenEquivalent = liquidityValue / this.market_info.token_price;
          tempLiquidity += parseInt(toWei(tokenEquivalent, this.token_decimal));
        }

        this.user_info.borrow_quota =
          tempLiquidity > parseInt(this.market_info.cash)
            ? this.market_info.cash
            : tempLiquidity.toString();
      }
    },
    async updateAll() {
      await this.updateMarketInfo();
      await this.updateUserInfo();
    },

    /*********************************** Allowance & balance checks ***********************************/

    async hasEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const balance = await this.token.contract.methods
        .balanceOf(account)
        .call();

      return _compareInt(balance, amount) != "smaller" ? true : false;
    },
    async approvedEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.token.contract.methods
        .allowance(account, this.market.address)
        .call();
      return _compareInt(allowance, amount) != "smaller" ? true : false;
      // 返回一个允许合约划走的金额大于用户要抵押的资产
    },

    /*************************************** Contract functions ***************************************/

    async deposit(amount) {
      const account = this.userInfo.userAddress;
      // 将用户输入的转为以wei为单位的数字
      const actualAmount = toWei(amount, this.token_decimal);
      let approvedEnoughToken;

      let dialog_list = [];

      if (!this.is_eth) {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        // console.log("approvedEnoughToken", approvedEnoughToken);//approvedEnoughToken=true
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      // console.log("this.collateralize", this.collateralize); //false
      if (this.collateralize && !this.is_collateral) {
        dialog_list.push(ProcessInfo.ENTER_MARKET);
      }
      // ProcessInfo 裡的object：ProcessInfo.DEPOSIT_TOKEN加到DialogInfo array
      dialog_list.push(ProcessInfo.DEPOSIT_TOKEN);
      //  然後調用openDialog() 打开对话框
      openDialog(this.dialogue_info, dialog_list);

      if (!this.is_eth) {
        if (!approvedEnoughToken) {
          try {
            const approve_result = await tokenApprove(
              this.token.address,
              account,
              this.market.address
            );
            this.successMessage(
              approve_result,
              `Approve ${this.symbol} succeeded`
            );
            stepDialog(this.dialogue_info);
          } catch (e) {
            this.errorMessage(`Approve ${this.symbol} failed`);
            console.warn(e);
            closeDialog(this.dialogue_info);
            return;
          }
        }
      }

      if (this.collateralize && !this.is_collateral) {
        try {
          const tx_result = await this.manager.contract.methods
            .enterMarkets([this.market.address])
            .send({ from: account });
          this.successMessage(
            tx_result,
            `Enter ${this.symbol} market succeeded`
          );
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Enter ${this.symbol} market failed`);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      try {
        // 交易
        let tx_result;
        if (!this.is_eth) {
          tx_result = await this.market.contract.methods
            .supply(actualAmount)
            .send({ from: account });
        } else {
          tx_result = await this.market.contract.methods
            .supply()
            .send({ from: account, value: actualAmount });
        }
        // 交易成功就弹出窗口
        this.successMessage(tx_result, `Deposit ${this.symbol} succeeded`);
      } catch (e) {
        console.warn(e);
        this.errorMessage(`Deposit ${this.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      // 关闭对话框
      closeDialog(this.dialogue_info);
      // 将input里面的数值置零
      this.deposit_amount = "";
      await this.updateAll();
    },
    async borrow(amount) {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(amount, this.token_decimal);

      openDialog(this.dialogue_info, [ProcessInfo.BORROW_TOKEN]);

      try {
        const tx_result = await this.market.contract.methods
          .borrow(actualAmount)
          .send({ from: account });
        this.successMessage(tx_result, `Borrow ${this.symbol} succeeded`);
      } catch (e) {
        this.errorMessage(`Borrow ${this.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

      this.borrow_amount = "";
      await this.updateAll();
    },

    async writeMaxDeposit() {
      await this.updateAll();

      if (this.user_info.token_balance == 0) {
        this.errorMessage(`No ${this.symbol} in wallet`);
      } else {
        const decimals = this.token_decimal > 8 ? 8 : this.token_decimal;
        console.log(this.user_info.token_balance);
        this.deposit_amount = parseFloat(
          fromWei(this.user_info.token_balance, this.token_decimal)
        ).toFixed(decimals);
      }
    },
    async writeMaxBorrow() {
      await this.updateAll();

      if (this.user_info.borrow_quota == 0) {
        this.errorMessage(`Cannot borrow more`);
      } else {
        const decimals = this.token_decimal > 8 ? 8 : this.token_decimal;
        this.borrow_amount = parseFloat(
          fromWei(this.user_info.borrow_quota, this.token_decimal)
        ).toFixed(decimals);
      }
    },
    successMessage(receipt, title) {
      // receipt是交易块的详细信息
      const txURL = getTxURL(receipt.transactionHash);
      //txURL :<a href="https://rinkeby.etherscan.io/tx/0xe34eefe362b89f8032c0375267505b62e6b1f84df11dd1e2a4bc793c60d927c2" style="color: blue" target="blank">View on Explorer</a>
      // 弹出小窗口
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: txURL,
        type: "success",
      });
    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: "",
        dangerouslyUseHTMLString: true,
      });
    },
    formatNumber(value, fixed = 2) {
      let reserve = value - parseInt(value);
      let final_result;
      if (value - reserve < 1) {
        final_result = "0" + reserve.toFixed(fixed).toString().substr(1);
      } else {
        final_result =
          _formatNumber(value).split(".")[0] +
          reserve.toFixed(fixed).toString().substr(1);
      }
      if (final_result[0] == "-" || final_result[0] == "N") {
        final_result = "--";
      }
      return final_result;
    },
    approxValue(tokenAmount) {
      const actualAmount = tokenAmount == "" ? 0 : tokenAmount;
      return this.market_info.token_price * actualAmount;
    },
    displayFormat(amount, decimal = 18, fixed = 0) {
      return this.formatNumber(fromWei(amount, decimal), fixed);
    },
  },
};
</script>
