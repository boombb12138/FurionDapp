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

.custom_btn {
  display: block;
  width: 520px;
  height: 50px;
  line-height: 45px;
  font-size: 20px;
  font-weight: 800;
  text-decoration: none;
  color: #f06fd2;
  // border: 2px solid #f06fd2;
  text-align: center;
  position: relative;
  transition: all 0.5s ease-out;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    position: relative;
    z-index: 2;
  }

  // &:after {
  //   position: absolute;
  //   content: "";
  //   top: 0;
  //   left: 0;
  //   width: 0;
  //   height: 100%;
  //   background: #f06fd2;
  //   border-radius: 9px;
  //   transition: all 0.5s;
  // }

  // &:hover {
  //   color: #091839;
  // }

  &:hover:after {
    width: 100%;
  }
}

.input-window {
  background: #011129;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fcfffd;
  @apply p-25px pr-30px pl-30px relative;
}
.box-input {
  &::v-deep {
    .el-input__inner {
      height: 45px;
      width: 220px;
      background: #011129;
      border: none;
      color: #fcfffd;
      font-size: 32px;
      font-weight: 500;
      text-align: left;
      padding: 0px;
      margin-right: 150px;

      &::-webkit-input-placeholder {
        color: rgba(252, 255, 253, 0.6) !important;
      }
    }
    .el-input__suffix-inner {
      display: flex;
      height: 100%;
      right: 15px;
    }
  }
}
.max {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) -9.52%,
    rgba(51, 53, 114, 0.2) 109.52%
  );
  @apply rounded-5px w-48px h-28px leading-28px text-[rgba(252,255,253,0.8)] text-13px font-700 text-center cursor-pointer;
}

@mixin btn-style {
  font-size: 13px;
  font-weight: 700;
  text-shadow: 0 1px 0px rgb(1, 19, 46, 0.8);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  line-height: 30px;
  height: 30px;
  text-align: center;
  width: 100px;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
}
@mixin psuedo-style {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  transition: all 0.3s;
}
.custom-btn {
  @include btn-style;
  color: #f181de;

  &::before {
    @include psuedo-style;
    background-color: rgba(241, 129, 222, 0.1);
  }

  &:hover::before {
    opacity: 0;
    transform: scale(0.3, 0.3);
  }

  &::after {
    @include psuedo-style;
    opacity: 0;
    border: 2px solid rgba(241, 129, 222, 0.8);
    transform: scale(1.2, 1.2);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>

<template>
  <div class="page py-156px bg-[#01132E] text-[#FCFFFD]">
    <el-dialog
      :visible.sync="dialog"
      width="587px"
      height="355px"
      :close-on-click-modal="true"
      append-to-body
      custom-class="el-dialog-dark"
      @close="interact_amount = ''"
    >
      <div slot="title" class="flex font-800 text-28px">
        <div class="pb-2px line" style="word-spacing: 10px">
          {{ action }} {{ token_info.symbol }}
        </div>
      </div>

      <div class="input-window mb-25px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img :src="token_info.image" class="w-40px mr-15px rounded-full" />
            <div class="font-600 text-22px">{{ token_info.symbol }}</div>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <el-input
              class="box-input"
              placeholder="0.0"
              v-model="interact_amount"
              type="number"
            ></el-input>
            <div
              class="text-13px text-[rgba(252,255,253,0.4)] mr-15px pt-13px w-40px"
            >
              <!--mark  approxValue作用：转为美元？  -->
              ~${{ displayFormat(approxValue(interact_amount)) }}
            </div>
            <!-- mark writeMaxDeposit作用：将用户有的钱都填入表格 -->
            <div class="flex items-center mr-15px" @click="writeMaxSupply()">
              <div class="max">MAX</div>
            </div>
          </div>
        </div>
      </div>

      <div class="custom_btn">
        <el-button
          type="primary"
          class="!w-full"
          :disabled="disableBtn()"
          @click="execute()"
        >
          <span class="font-800 text-20px" style="word-spacing: 5px">{{
            action
          }}</span></el-button
        >
      </div>
    </el-dialog>

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
                    width="128"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="scope.row.tier"
                          readonly
                        ></Abc>
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
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Deposited"
                    label="Deposited"
                    align="center"
                    width="104"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="Collateral"
                    label="Collateral"
                    align="center"
                    width="104"
                  ></el-table-column>
                  <el-table-column width="104px">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="custom-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.AssetName, 'Withdraw');
                          "
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
                    width="128"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="scope.row.tier"
                          readonly
                        ></Abc>
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
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Balance"
                    label="Balance"
                    width="104"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="TotalSupply"
                    label="Total Supply"
                    align="center"
                    width="104"
                  ></el-table-column>
                  <el-table-column width="104" align="right">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="custom-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.AssetName, 'Supply');
                          "
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
                    width="128"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="scope.row.tier"
                          readonly
                        ></Abc>
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
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Borrowed"
                    label="Borrowed"
                    width="104"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="Available"
                    label="Available"
                    align="center"
                    width="104"
                  ></el-table-column>
                  <el-table-column width="104">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="custom-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.AssetName, 'Repay');
                          "
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
                    width="128"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="scope.row.tier"
                          readonly
                        ></Abc>
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
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Available"
                    label="Available"
                    width="104"
                    align="center"
                  ></el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="80"
                  ></el-table-column>
                  <el-table-column
                    prop="TotalBorrow"
                    label="Total Borrow"
                    align="center"
                    width="104"
                  ></el-table-column>
                  <el-table-column width="104">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="custom-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.AssetName, 'Borrow');
                          "
                        >
                          Borrow
                        </div>
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
  components: { ProceedingDetails },
  computed: { ...mapState(["userInfo"]) },
  data() {
    // todo 检查data
    // todo 检查mounted
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
      is_eth: false,
    };
  },
  async mounted() {
    this.priceOracle = await initPriceOracle();
    this.manager = await initManagerContract();
    this.loading1 = false;
  },
  methods: {
    // 初始化token和market合约
    async initInteraction(symbol, action) {
      this.action = action;

      this.token_info = token_list[symbol]; //mark token_info是代币的信息对象
      this.token_info.symbol = symbol;

      this.token = await initTokenContract(symbol);
      this.market = await initMarketContract(symbol);
      this.is_eth = this.token_info.symbol === "ETH" ? true : false;
    },
    async execute() {
      switch (this.action) {
        case "Supply":
          await this.supply();
          break;
        case "Withdraw":
          await this.withdraw();
          break;
        case "Borrow":
          await this.borrow();
          break;
        case "Repay":
          await this.repay();
          break;
      }
    },
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
      await this.updateUserInfo(); //todo 检查依赖
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

    async borrow() {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(
        this.interact_amount,
        this.token_info.decimals
      );

      openDialog(this.dialogue_info, [ProcessInfo.BORROW_TOKEN]);

      try {
        const tx_result = await this.market.contract.methods
          .borrow(actualAmount)
          .send({ from: account });
        this.successMessage(
          tx_result,
          `Borrow ${this.token_info.symbol} succeeded`
        );
      } catch (e) {
        this.errorMessage(`Borrow ${this.token_info.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
    },
    async repay() {
      const account = this.userInfo.userAddress;
      let actualAmount = toWei(this.interact_amount, this.token_info.decimals);
      let approvedEnoughToken;

      let dialog_list = [];
      if (this.token_info.symbol != "ETH") {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      dialog_list.push(ProcessInfo.REPAY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (this.token_info.symbol != "ETH") {
        if (!approvedEnoughToken) {
          try {
            const approve_result = await tokenApprove(
              this.token.address,
              account,
              this.market.address
            );
            this.successMessage(
              approve_result,
              `Approve ${this.token_info.symbol} succeeded`
            );
            stepDialog(this.dialogue_info);
          } catch (e) {
            this.errorMessage(`Approve ${this.token_info.symbol} failed`);
            console.warn(e);
            closeDialog(this.dialogue_info);
            return;
          }
        }
      }

      try {
        let tx_result;
        if (this.token_info.symbol != "ETH") {
          tx_result = await this.market.contract.methods
            .repayBorrow(actualAmount)
            .send({ from: account });
        } else {
          tx_result = await this.market.contract.methods
            .repayBorrow()
            .send({ from: account, value: actualAmount });
        }
        this.successMessage(
          tx_result,
          `Repay ${this.token_info.symbol} succeeded`
        );
      } catch (e) {
        this.errorMessage(`Repay ${this.token_info.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
    },
    async supply() {
      //console.log("amount", amount);
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(
        this.interact_amount,
        this.token_info.decimals
      );
      let approvedEnoughToken;

      let dialog_list = [];

      if (this.token_info.symbol != "ETH") {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      /*
      if (this.collateralize && !this.is_collateral) {
        dialog_list.push(ProcessInfo.ENTER_MARKET);
      }
      */
      dialog_list.push(ProcessInfo.SUPPLY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (this.token_info.symbol != "ETH") {
        if (!approvedEnoughToken) {
          try {
            const approve_result = await tokenApprove(
              this.token.address,
              account,
              this.market.address
            );
            this.successMessage(
              approve_result,
              `Approve ${this.token_info.symbol} succeeded`
            );
            stepDialog(this.dialogue_info);
          } catch (e) {
            this.errorMessage(`Approve ${this.token_info.symbol} failed`);
            console.warn(e);
            closeDialog(this.dialogue_info);
            return;
          }
        }
      }
      /*
      if (this.collateralize && !this.is_collateral) {
        try {
          const tx_result = await this.manager.contract.methods
            .enterMarkets([this.market.address])
            .send({ from: account });
          this.successMessage(
            tx_result,
            `Enter ${this.token_info.symbol} market succeeded`
          );
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Enter ${this.token_info.symbol} market failed`);
          closeDialog(this.dialogue_info);
          return;
        }
      }
      */

      try {
        let tx_result;
        if (this.token_info.symbol != "ETH") {
          tx_result = await this.market.contract.methods
            .supply(actualAmount)
            .send({ from: account });
        } else {
          tx_result = await this.market.contract.methods
            .supply()
            .send({ from: account, value: actualAmount });
        }
        this.successMessage(
          tx_result,
          `Supply ${this.token_info.symbol} succeeded`
        );
      } catch (e) {
        console.warn(e);
        this.errorMessage(`Supply ${this.token_info.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
    },
    async withdraw() {
      const account = this.userInfo.userAddress;
      let actualAmount = toWei(this.interact_amount, this.token_info.decimals);

      openDialog(this.dialogue_info, [ProcessInfo.WITHDRAW_TOKEN]);

      try {
        const tx_result = await this.market.contract.methods
          .redeemUnderlying(actualAmount)
          .send({ from: account });
        this.successMessage(
          tx_result,
          `Withdraw ${this.token_info.symbol} succeeded`
        );
      } catch (e) {
        this.errorMessage(`Withdraw ${this.token_info.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
    },

    async writeMaxSupply() {
      await this.updateAll();

      if (this.user_info.token_balance == 0) {
        this.errorMessage(`No ${this.symbol} in wallet`);
      } else {
        const decimals = this.token_decimal > 8 ? 8 : this.token_decimal;
        console.log(this.user_info.token_balance);
        this.interact_amount = parseFloat(
          fromWei(this.user_info.token_balance, this.token_decimal)
        ).toFixed(decimals);
        if (this.is_eth) {
          this.interact_amount = (this.interact_amount - 0.001).toFixed(8);
        }
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
    compareFormat(amount, decimal) {
      const actualAmount = amount == "" ? 0 : parseFloat(amount);
      return parseInt(toWei(actualAmount, decimal));
    },
    disableBtn() {
      switch (this.action) {
        case "Repay":
        case "Supply":
          if (
            this.compareFormat(this.interact_amount, this.token_info.decimals) >
              parseInt(this.user_info.token_balance) ||
            this.interact_amount === ""
          ) {
            return true;
          } else {
            return false;
          }
        case "Withdraw":
          if (
            this.compareFormat(
              this.interact_amount,
              this.token_info.decimals
            ) <= parseInt(this.user_info.withdraw_quota) ||
            this.compareFormat(this.interact_amount, this.token_info.decimals) >
              parseInt(this.user_info.deposited) ||
            this.interact_amount === ""
          ) {
            return true;
          } else {
            return false;
          }
        case "Borrow":
          if (
            this.compareFormat(
              this.interact_amount,
              this.token_info.decimals
            ) <= parseInt(this.user_info.borrow_quota) ||
            this.compareFormat(
              this.interact_amount,
              this.token_info.decimals
            ) <= parseInt(this.market_info.cash) ||
            this.interact_amount === ""
          ) {
            return true;
          } else {
            return false;
          }
      }
    },
  },
};
</script>
