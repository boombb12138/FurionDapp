<style lang="scss" scoped>
.info {
  background: #091839;
  border-radius: 20px;
  padding: 35px 30px;
  &.closed {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.4) 0%,
      rgba(51, 53, 114, 0.5) 100%
    );
    height: 90px;
  }
}
.title {
  margin-bottom: 20px;
  padding: 0 10px;
  @apply flex justify-between items-center;
}

::v-deep {
  .el-table .el-table__body tr:last-of-type .el-table__cell:last-of-type {
    border-bottom-right-radius: 0 !important;
  }
  .el-table .el-table__body tr:last-of-type .el-table__cell:first-of-type {
    border-bottom-left-radius: 0 !important;
  }
  .el-table {
    .el-table__header tr .el-table__cell {
      font-size: 13px;
      color: #8a92a2;
    }
    .el-table__header tr .el-table__cell:first-of-type {
      padding-left: 0;
    }
    .el-table__header-wrapper {
      border: none !important;
    }
    .el-table__header tr,
    .el-table__body {
      border: none;
      background: transparent !important;
    }
    .el-table__body-wrapper {
      overflow: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background: #051633;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: #22325a;
        border-radius: 15px;
      }
      .el-table__body .el-table__cell {
        border-top: 0 !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    .el-table__row:hover {
      box-shadow: none !important;
      position: relative;
      z-index: 10;
      transform: scale(1) !important;
      .el-table__cell {
        border: none !important;
        border-radius: 0 !important;
        &:first-of-type {
          border-top-left-radius: none !important;
          border-bottom-left-radius: none !important;
        }
        &:last-of-type {
          border-top-right-radius: none !important;
          border-bottom-right-radius: none !important;
        }
      }
    }
  }
}

.text-shadow {
  text-shadow: 0px 1px 0px #ffb5f2;
}

.dialog {
  width: 587px;
  height: 355px;
  background: url("~@/assets/images/dashboard/dialog.png") no-repeat 100%;

  .text-white {
    text-shadow: 0px 2px 0px #ffb7f3;
  }

  .input {
    background: rgba(1, 17, 41, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    @apply w-494px h-125px  relative mb-24px px-20px pt-24px;
    .custom {
      height: 30px;
      color: #c3c6cd;
      font-weight: 600;
      font-size: 30px;
      color: #fff;
      ::v-deep .el-input {
        padding-left: 0 !important;
        background: transparent !important;
      }
    }
  }
}

.tip {
  height: 44px;
  background: rgba(252, 255, 253, 0.12);
  border: 3px solid #364666;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 0px 3px rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  margin-bottom: 20px;
  > div {
    border: 2px solid #fa6be1;
    height: 100%;
    border-radius: 12px;
    color: #8a92a2;
    font-weight: 600;
    font-size: 13px;
  }
}

.symbol {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="page py-156px bg-[#01132E] text-[#FCFFFD]">
    <div class="el-dialog__wrapper z-1000" v-if="dialog">
      <div class="dialog center absolute pt-40px px-45px">
        <img
          src="@/assets/images/dashboard/close.svg"
          @click="dialog = false"
          class="absolute cursor-pointer top-30px right-30px hover:opacity-80"
        />

        <div class="font-600 text-24px mb-25px">{{ action }} {{ token_info.symbol }}</div>

        <div class="input">
          <div class="mb-20px">
            <div class="flex items-center">
              <img :src="token_info.image" class="mr-16px" width="30px" height="30px" />
              <div class="font-600 text-22px">{{ token_info.symbol }}</div>
            </div>
            <!--template v-if="symbol == 'ETH'">
              <div class="flex">
                <img :src="tableData[0].ImgUrl" class="mr-16px" />
                <div class="font-600 text-22px">ETH</div>
              </div>
            </template>
            <template v-else-if="symbol == 'FUR'">
              <div class="flex">
                <img
                  :src="tableData[1].ImgUrl"
                  class="mr-16px"
                  width="22"
                  height="22"
                />
                <div class="font-600 text-22px">FUR</div>
              </div>
            </template>
            <template v-else>
              <div class="flex">
                <img
                  :src="tableData[2].ImgUrl"
                  class="mr-16px"
                  width="22"
                  height="22"
                />
                <div class="font-600 text-22px">USDT</div>
              </div>
            </template-->
          </div>
          <div class="flex items-end justify-between">
            <!-- <input type="text" class="w-200px" placeholder="0.00" /> -->

            <el-input-number
              :precision="2"
              :controls="false"
              class="custom !w-200px !rounded-0"
              placeholder="0.00"
              v-model="supply_amount"
            ></el-input-number>
            <div class="text-[#C3C6CD] font-500 text-16px flex-shrink-0">
              MAX
              <span class="text-[#FCFFFD] font-600">100</span>
              {{ token_info.symbol }}
            </div>
            <!--template v-if="symbol == 'ETH'"
              ><div class="text-[#C3C6CD] font-500 text-16px flex-shrink-0">
                MAX
                <span class="text-[#FCFFFD] font-600">100</span>
                ETH
              </div></template
            >
            <template v-if="symbol == 'FUR'"
              ><div class="text-[#C3C6CD] font-500 text-16px flex-shrink-0">
                MAX
                <span class="text-[#FCFFFD] font-600">100</span>
                FUR
              </div></template
            >
            <template v-if="symbol == 'USDT'"
              ><div class="text-[#C3C6CD] font-500 text-16px flex-shrink-0">
                MAX
                <span class="text-[#FCFFFD] font-600">100</span>
                USDT
              </div></template
            -->
          </div>
        </div>

        <el-button
          type="primary"
          class="w-488px !h-54px"
          plain
          @click="supply(supply_amount)"
        >
          <div class="!flex items-center justify-center">
            <div class="text-20px font-700 text-white">{{ action }}</div>
          </div>
        </el-button>
      </div>
    </div>

    <div class="w-1184px mx-auto">
      <MarketTab class="mb-55px"></MarketTab>

      <div class="flex justify-between">
        <div class="wrapper">
          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-290px' : 'h-auto']"
            class="w-580px mb-30px"
          >
            <div class="info" :class="{ closed: !show1 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Your Supplies</div>
                  <Abc v-model="abc"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show1 = !show1"
                >
                  <template v-if="show1">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show1 && !loading1">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="100"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div
                        class="flex items-center w-1/1 cursor-pointer"
                        @click="
                          $router.push(
                            `/liquidity/money_market/detail?asset=${scope.row.AssetName}&tier=${scope.row.tier}`
                          )
                        "
                      >
                        <img
                          :src="scope.row.ImgUrl"
                          class="mr-8px"
                          width="23"
                          height="23"
                        />
                        <div class="symbol">{{ scope.row.AssetName }}</div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Deposited"
                    label="Deposited"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="Collateral"
                    label="Collateral"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column width="170px">
                    <template slot-scope="scope">
                      <div class="flex items-center">
                        <div
                          class="btn2 mr-15px hover !w-74px"
                          @click="dialog = true; initInteraction(scope.row.AssetName, 'Withdraw')"
                        >
                          Withdraw
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>

          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-358px' : 'h-auto']"
            class="w-580px"
          >
            <div class="info" :class="{ closed: !show3 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Assets to Supply</div>
                  <Abc v-model="abc"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show3 = !show3"
                >
                  <template v-if="show3">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show3 && !loading1">
                <!--div class="tip">
                  <div class="flex items-center pl-30px">
                    <img src="@/assets/images/dashboard/tip.svg" class="mr-15px" />
                    <div>
                      Your Ethereum wallet is empty.Purchase or transfer assets
                    </div>
                  </div>
                </div-->
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="100"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div
                        class="flex items-center cursor-pointer"
                        @click="
                          $router.push(
                            `/liquidity/money_market/detail?asset=${scope.row.AssetName}&tier=${scope.row.tier}`
                          )
                        "
                      >
                        <img
                          :src="scope.row.ImgUrl"
                          class="mr-8px"
                          width="23"
                          height="23"
                        />
                        <div class="symbol">{{ scope.row.AssetName }}</div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Balance"
                    label="Balance"
                    width="100"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column label="Tier" align="center" width="100">
                    <template slot-scope="scope">
                      <div class="flex justify-center">
                        <Abc v-model="scope.row.tier" readonly></Abc>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column width="100px">
                    <template slot-scope="scope">
                      <div class="flex items-center">
                        <div
                          class="btn2 mr-15px hover !w-74px"
                          @click="initInteraction(scope.row.AssetName, 'Supply')"
                        >
                          Supply
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>
        </div>

        <div class="wrapper">
          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-290px' : 'h-auto']"
            class="w-580px mb-30px"
          >
            <div class="info" :class="{ closed: !show2 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Your Borrows</div>
                  <Abc v-model="abc"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show2 = !show2"
                >
                  <template v-if="show2">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show2 && !loading1">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="100"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div
                        class="flex items-center cursor-pointer"
                        @click="
                          $router.push(
                            `/liquidity/money_market/detail?asset=${scope.row.AssetName}&tier=${scope.row.tier}`
                          )
                        "
                      >
                        <img
                          :src="scope.row.ImgUrl"
                          class="mr-8px"
                          width="23"
                          height="23"
                        />
                        <div class="symbol">{{ scope.row.AssetName }}</div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Borrowed"
                    label="Borrowed"
                    width="100"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column
                    prop="Available"
                    label="Available"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column width="100px">
                    <template slot-scope="scope">
                      <div class="flex items-center">
                        <div
                          class="btn2 mr-15px hover !w-74px"
                          @click="dialog = true; initInteraction(scope.row.AssetName, 'Repay')"
                        >
                          Repay
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>

          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-358px' : 'h-auto']"
            class="w-580px"
          >
            <div class="info" :class="{ closed: !show4 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Assets to Borrow</div>
                  <Abc v-model="abc"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show4 = !show4"
                >
                  <template v-if="show4">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show4 && !loading1">
                <!--div class="tip">
                  <div class="flex items-center pl-30px">
                    <img src="@/assets/images/dashboard/tip.svg" class="mr-15px" />
                    <div>
                      To borrow you need to supply any asset to be used as
                      collateral.
                    </div>
                  </div>
                </div-->
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="100"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div
                        class="flex items-center cursor-pointer"
                        @click="
                          $router.push(
                            `/liquidity/money_market/detail?asset=${scope.row.AssetName}&tier=${scope.row.tier}`
                          )
                        "
                      >
                        <img
                          :src="scope.row.ImgUrl"
                          class="mr-8px"
                          width="23"
                          height="23"
                        />
                        <div class="symbol">{{ scope.row.AssetName }}</div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Available"
                    label="Available"
                    width="100"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="100"
                  ></el-table-column>
                  <el-table-column width="100"></el-table-column>
                  <el-table-column width="100px">
                    <template slot-scope="scope">
                      <div class="flex items-center">
<<<<<<< Updated upstream
                        <!-- todo 这个函数的参数 -->
                        <div
                          class="btn2 mr-15px hover !w-74px"
                          @click="dialog = true; initInteraction(scope.row.AssetName, 'Borrow')"
                        >
                          Borrow
                        </div>
=======
                        <div class="btn2 mr-15px hover !w-74px">Borrow</div>
>>>>>>> Stashed changes
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>
        </div>
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
  token_list,
  user_info_default,
  market_info_default,
  initTokenContract,
  initMarketContract,
  initManagerContract,
  initPriceOracle,
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
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  layout: "blank",
  props: {},
  components: {ProceedingDetails},
  computed: { ...mapState(["userInfo"]) },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      dialog: false,
      loading1: true,
      abc: ["1"],
      abc2: ["1"],
      abc3: ["1", "2", "3"],
      abc4: ["1"],
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      tableData: [
        {
          Asset: "Ethereum",
          AssetName: "ETH",
          Balance: "828.07k",
          Deposited: "100.00k",
          AsCollateral: "50k",
          tier: "2",
          APY: "5%",
          Borrowed: "548.12k",
          CollateralFactor: "20%",
          AvailableToYou: "5548.12k",
          Available: "208.12k",
          ImgUrl: require("@/assets/images/dashboard/ETH.png"),
        },
        {
          Asset: "Furion",
          AssetName: "FUR",
          Balance: "828.07k",
          Deposited: "100.00k",
          AsCollateral: "50k",
          tier: "3",
          APY: "5%",
          Borrowed: "548.12k",
          CollateralFactor: "20%",
          AvailableToYou: "5548.12k",
          Available: "208.12k",
          ImgUrl: require("@/assets/images/liquidity/tokens/FUR.png"),
        },
        {
          Asset: "USDT",
          AssetName: "USDT",
          Balance: "828.07k",
          Deposited: "100.00k",
          AsCollateral: "50k",
          tier: "1",
          APY: "5%",
          Borrowed: "548.12k",
          CollateralFactor: "20%",
          AvailableToYou: "5548.12k",
          Available: "208.12k",
          ImgUrl: require("@/assets/images/liquidity/tokens/USDT.png"),
        },
      ],

      balances: {},

      user_info: user_info_default,
      market_info: market_info_default,
      token_info: {},
      token: {},
      market: {},
      manager: {},
      priceOracle: {},
      action: "Supply",
      interact_amount: "",
      is_collateral: false,
      collateralize: false,
      dialogue_info: DialogInfo,
      multicall: multicall,
    };
  },
  async mounted() {
<<<<<<< Updated upstream
    this.priceOracle = await initPriceOracle();
    this.manager = await initManagerContract();
    this.loading1 = false;
  },
  methods: {
    async initInteraction(symbol, action) {
      this.action = action;

      this.token_info = token_list[symbol];
      this.token_info.symbol = symbol;

      this.token = await initTokenContract(symbol);
      this.market = await initMarketContract(symbol);
    },
=======
    setTimeout(() => {
      this.loading1 = false;
    }, 3000);
  },
  methods: {
    async handleSupplyAssets(symbol) {
      this.dialog = true;
      this.symbol = symbol;
      this.token = await initTokenContract(symbol);
      this.is_eth = this.symbol === "ETH" ? true : false;

      if (!this.is_eth) {
        this.token_decimal = parseInt(
          await this.token.contract.methods.decimals().call()
        );
      }
      this.market = await initMarketContract(this.symbol);
      this.priceOracle = await initPriceOracle();
      await this.updateMarketInfo();
      this.loading1 = false;

      this.manager = await initManagerContract();
      await this.updateUserInfo();

      this.is_collateral = await this.manager.contract.methods
        .checkMembership(this.userInfo.userAddress, this.market.address)
        .call();
      this.collateralize = this.is_collateral ? true : false;
    },

>>>>>>> Stashed changes
    /******************************* State management *******************************/
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

    async approvedEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.token.contract.methods
        .allowance(account, this.market.address)
        .call();
      return _compareInt(allowance, amount) != "smaller" ? true : false;
    },

    /*************************************** Contract functions ***************************************/

    async supply(amount) {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(amount, this.token_decimal);
      let approvedEnoughToken;

      let dialog_list = [];

      if (!this.is_eth) {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount); //如果不加那个点击按钮切换市场 这个为false
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
        this.successMessage(tx_result, `Deposit ${this.symbol} succeeded`);
      } catch (e) {
        console.warn(e);
        this.errorMessage(`Deposit ${this.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      this.dialog = false;
      closeDialog(this.dialogue_info);
      this.supply_amount = "";
      await this.updateAll();
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
  },
};
</script>
