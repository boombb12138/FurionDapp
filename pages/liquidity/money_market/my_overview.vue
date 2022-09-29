<style lang="scss" scoped>
.info {
  background: #091839;
  border-radius: 20px;
  padding-left: 46px;
  &.closed {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.4) 0%,
      rgba(51, 53, 114, 0.5) 100%
    );
  }
}
.title {
  height: 86px;
  @apply flex justify-between items-center  pr-54px;
}
.content {
  @apply pr-25px pb-45px;
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

        <div class="font-600 text-24px mb-25px">Insufficient collateral</div>
        <div class="font-600 text-16px mb-12px">Adding collateral</div>

        <div class="input">
          <div class="flex items-center mb-20px">
            <img src="@/assets/images/dashboard/eth_w.png" class="mr-16px" />
            <div class="font-600 text-22px">ETH</div>
          </div>
          <div class="flex items-end justify-between">
            <!-- <input type="text" class="w-200px" placeholder="0.00" /> -->

            <el-input-number
              :precision="2"
              :controls="false"
              class="custom !w-200px !rounded-0"
              placeholder="0.00"
            ></el-input-number>

            <div class="text-[#C3C6CD] font-500 text-16px flex-shrink-0">
              MAX
              <span class="text-[#FCFFFD] font-600">100</span>
              ETH
            </div>
          </div>
        </div>

        <el-button type="primary" class="w-488px !h-54px" plain>
          <div class="!flex items-center justify-center">
            <div class="text-20px font-700 text-white">USE AS collateral</div>
          </div>
        </el-button>
      </div>
    </div>

    <div class="w-1184px mx-auto">
      <MarketTab class="mb-55px"></MarketTab>

      <Loading
        :loading="loading1"
        :class="[loading1 ? 'h-290px' : 'h-auto']"
        class="mb-30px"
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
            <el-table :data="tableData" height="156" style="width: 100%">
              <el-table-column prop="Asset" label="Asset" width="180">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <img
                      :src="scope.row.ImgUrl"
                      class="mr-8px"
                      width="22"
                      height="22"
                    />
                    <div>{{ scope.row.Asset }}</div>
                    <div class="text-[#A5A7AA]">{{ scope.row.AssetName }}</div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="WalletBalance"
                label="Wallet Balance"
                width="180"
                align="right"
              ></el-table-column>
              <el-table-column
                prop="Deposited"
                label="Deposited"
                align="right"
              ></el-table-column>
              <el-table-column
                prop="AsCollateral"
                label="As Collateral"
                align="right"
              ></el-table-column>
              <el-table-column
                prop="APY"
                label="APY"
                align="right"
              ></el-table-column>
              <el-table-column></el-table-column>
              <el-table-column width="170px">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <div
                      class="btn2 mr-15px hover !w-74px"
                      @click="dialog = true"
                    >
                      Withdraw
                    </div>
                    <div
                      class="btn2 text-shadow"
                      @click="
                        $router.push(
                          '/liquidity/money_market/detail?asset=ETH&tier=2'
                        )
                      "
                    >
                      Details
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
        class="mb-30px"
      >
        <div class="info" :class="{ closed: !show2 }">
          <div class="title">
            <div class="flex items-center">
              <div class="text-18px font-700 mr-30px">Assets to supply</div>
              <Abc v-model="abc2"></Abc>
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
            <div class="tip">
              <div class="flex items-center pl-30px">
                <img src="@/assets/images/dashboard/tip.svg" class="mr-15px" />
                <div>
                  Your Ethereum wallet is empty.Purchase or transfer assets
                </div>
              </div>
            </div>
            <el-table :data="tableData" height="156" style="width: 100%">
              <el-table-column prop="Asset" label="Asset" width="180">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <img
                      :src="scope.row.ImgUrl"
                      class="mr-8px"
                      width="22"
                      height="22"
                    />
                    <div>{{ scope.row.Asset }}</div>
                    <div class="text-[#A5A7AA]">{{ scope.row.AssetName }}</div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="WalletBalance"
                label="Wallet Balance"
                width="180"
                align="right"
              ></el-table-column>
              <el-table-column
                prop="APY"
                label="APY"
                align="right"
              ></el-table-column>
              <el-table-column label="Asset Type" align="center" width="300px">
                <template slot-scope="scope">
                  <div class="flex justify-center">
                    <Abc v-model="scope.row.AssetType" readonly></Abc>
                  </div>
                </template>
              </el-table-column>
              <el-table-column></el-table-column>
              <el-table-column width="170px">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <div
                      class="btn2 mr-15px hover !w-74px"
                      @click="dialog = true"
                    >
                      Supply
                    </div>
                    <div
                      class="btn2 text-shadow"
                      @click="
                        $router.push(
                          '/liquidity/money_market/detail?asset=ETH&tier=2'
                        )
                      "
                    >
                      Details
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
        :class="[loading1 ? 'h-290px' : 'h-auto']"
        class="mb-30px"
      >
        <div class="info" :class="{ closed: !show3 }">
          <div class="title">
            <div class="flex items-center">
              <div class="text-18px font-700 mr-30px">Your borrows</div>
              <Abc v-model="abc3"></Abc>
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
            <el-table :data="tableData" height="156" style="width: 100%">
              <el-table-column prop="Asset" label="Asset" width="180">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <img
                      :src="scope.row.ImgUrl"
                      class="mr-8px"
                      width="22"
                      height="22"
                    />
                    <div>{{ scope.row.Asset }}</div>
                    <div class="text-[#A5A7AA]">{{ scope.row.AssetName }}</div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="Borrowed"
                label="Borrowed"
                width="180"
                align="right"
              ></el-table-column>
              <el-table-column
                prop="CollateralFactor"
                label="Collateral Factor"
                align="right"
              >
                <template #header>
                  <div class="flex items-center justify-end">
                    Collateral Factor
                    <el-popover
                      placement="bottom"
                      title
                      trigger="hover"
                      :visible-arrow="false"
                      popper-class="el-tip"
                    >
                      <div class="text-center text-[#0B1A3B]">
                        <div>text...</div>
                      </div>
                      <img
                        src="@/assets/images/dashboard/q.svg"
                        class="ml-4px cursor-pointer"
                        style="vertical-align: -1px"
                        slot="reference"
                      />
                    </el-popover>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="APY"
                label="APY"
                align="right"
                width="120px"
              ></el-table-column>
              <el-table-column
                prop="AvailableToYou"
                label="Available To You"
                align="right"
              ></el-table-column>

              <el-table-column width="80px"></el-table-column>
              <el-table-column width="170px">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <div
                      class="btn2 mr-15px hover !w-74px"
                      @click="dialog = true"
                    >
                      Repay
                    </div>
                    <div
                      class="btn2 text-shadow"
                      @click="
                        $router.push(
                          '/liquidity/money_market/detail?asset=ETH&tier=2'
                        )
                      "
                    >
                      Details
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
        class="mb-30px"
      >
        <div class="info" :class="{ closed: !show4 }">
          <div class="title">
            <div class="flex items-center">
              <div class="text-18px font-700 mr-30px">Assets to borrow</div>
              <Abc v-model="abc4"></Abc>
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
            <div class="tip">
              <div class="flex items-center pl-30px">
                <img src="@/assets/images/dashboard/tip.svg" class="mr-15px" />
                <div>
                  To borrow you need to supply any asset to be used as
                  collateral.
                </div>
              </div>
            </div>
            <el-table :data="tableData" height="156" style="width: 100%">
              <el-table-column prop="Asset" label="Asset" width="180">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <img
                      :src="scope.row.ImgUrl"
                      class="mr-8px"
                      width="22"
                      height="22"
                    />
                    <div>{{ scope.row.Asset }}</div>
                    <div class="text-[#A5A7AA]">{{ scope.row.AssetName }}</div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="Available" label="Available" align="right">
                <template #header>
                  <div class="flex items-center justify-end">
                    Available
                    <el-popover
                      placement="bottom"
                      title
                      trigger="hover"
                      :visible-arrow="false"
                      popper-class="el-tip"
                    >
                      <div class="text-center text-[#0B1A3B]">
                        <div>text...</div>
                      </div>
                      <img
                        src="@/assets/images/dashboard/i.svg"
                        class="ml-4px cursor-pointer"
                        style="vertical-align: -1px"
                        slot="reference"
                      />
                    </el-popover>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                prop="CollateralFactor"
                label="Collateral Factor"
                align="right"
              >
                <template #header>
                  <div class="flex items-center justify-end">
                    Collateral Factor
                    <el-popover
                      placement="bottom"
                      title
                      trigger="hover"
                      :visible-arrow="false"
                      popper-class="el-tip"
                    >
                      <div class="text-center text-[#0B1A3B]">
                        <div>text...</div>
                      </div>
                      <img
                        src="@/assets/images/dashboard/i.svg"
                        class="ml-4px cursor-pointer"
                        style="vertical-align: -1px"
                        slot="reference"
                      />
                    </el-popover>
                  </div>
                </template>
              </el-table-column>

              <el-table-column prop="APY" label="APY" align="right">
                <template #header>
                  <div class="flex items-center justify-end">
                    APY
                    <el-popover
                      placement="bottom"
                      title
                      trigger="hover"
                      :visible-arrow="false"
                      popper-class="el-tip"
                    >
                      <div class="text-center text-[#0B1A3B]">
                        <div>text...</div>
                      </div>
                      <img
                        src="@/assets/images/dashboard/i.svg"
                        class="ml-4px cursor-pointer"
                        style="vertical-align: -1px"
                        slot="reference"
                      />
                    </el-popover>
                  </div>
                </template>
              </el-table-column>

              <el-table-column></el-table-column>
              <el-table-column width="170px">
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <div
                      class="btn2 mr-15px hover !w-74px"
                      @click="dialog = true"
                    >
                      Borrow
                    </div>
                    <div
                      class="btn2 text-shadow"
                      @click="
                        $router.push(
                          '/liquidity/money_market/detail?asset=ETH&tier=2'
                        )
                      "
                    >
                      Details
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
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  layout: "blank",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      dialog: false,
      loading1: true,
      abc: ["A"],
      abc2: ["A"],
      abc3: ["A", "B", "C"],
      abc4: ["A"],
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      tableData: [
        {
          Asset: "Ethereum",
          AssetName: "(ETH)",
          WalletBalance: "828.07k",
          Deposited: "100.00k",
          AsCollateral: "50k",
          AssetType: "A",
          APY: "5%",
          Borrowed: "548.12k",
          CollateralFactor: "20%",
          AvailableToYou: "5548.12k",
          Available: "208.12k",
          ImgUrl: require("@/assets/images/dashboard/ETH.png"),
        },
        {
          Asset: "Furion",
          AssetName: "(FUR)",
          WalletBalance: "828.07k",
          Deposited: "100.00k",
          AsCollateral: "50k",
          AssetType: "A",
          APY: "5%",
          Borrowed: "548.12k",
          CollateralFactor: "20%",
          AvailableToYou: "5548.12k",
          Available: "208.12k",
          ImgUrl: require("@/assets/images/liquidity/tokens/FUR.png"),
        },
        {
          Asset: "USDT",
          AssetName: "(USDT)",
          WalletBalance: "828.07k",
          Deposited: "100.00k",
          AsCollateral: "50k",
          AssetType: "A",
          APY: "5%",
          Borrowed: "548.12k",
          CollateralFactor: "20%",
          AvailableToYou: "5548.12k",
          Available: "208.12k",
          ImgUrl: require("@/assets/images/liquidity/tokens/USDT.png"),
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading1 = false;
    }, 3000);
  },
  methods: {},
};
</script>
