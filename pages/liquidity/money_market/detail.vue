<style lang="scss" scoped>
.top-bar {
  background: linear-gradient(180deg, rgba(51, 53, 114, 0.58) 9.21%, #333572 95.15%);
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
  @apply text-[rgba(252,255,253,0.6)] text-16px font-300;
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
.custom {
  height: 30px;
  font-weight: 600;
  font-size: 30px;
  color: #fff !important;
  position: relative;
  top: 4px;
  width: 90px !important;
  ::v-deep .el-input {
    padding-left: 0 !important;
    background: transparent !important;
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
</style>

<template>
  <div class="page pt-192px bg-[#01132E] text-[#FCFFFD]">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
    </div>

    <div class="w-1184px mx-auto pb-44px">
      <Loading class="w-1184px h-113px top1" :loading="loading1">
        <div class="w-full h-113px rounded-12px flex items-center top-bar">
          <img class="ml-27px mr-15px" :src="asset.image" />
          <span class="white mr-10px">{{asset.name}}</span>
          <span class="grey !text-20px mr-100px">({{symbol}})</span>
          <div>
            <p class="grey mb-7px">Reserve Size</p>
            <p class="white">$ 1,436,317M</p>
          </div>
          <div class="ml-80px">
            <p class="grey mb-7px">Available liquidity</p>
            <p class="white">$ 236,169M</p>
          </div>
          <div class="ml-80px">
            <p class="grey mb-7px">Oracle price</p>
            <p class="white">$ 1.1</p>
          </div>
        </div>
      </Loading>
      <div class="flex mt-37px justify-between">
        <!-------------------------------------- Deposit -------------------------------------->
        <Loading class="w-579px h-957px" :loading="loading2">
          <div class="box box-border5 p-10px">
            <div
              class="box-top flex items-center justify-between pr-53px pl-22px mb-25px"
            >
              <p class="section-title">Supply Info</p>
              <div class="flex items-center">
                <div class="mr-45px">
                  <p class="grey mb-7px">Total supplied</p>
                  <p class="white">30.00M</p>
                </div>
                <div>
                  <p class="grey mb-7px">APR</p>
                  <p class="white">0.5%</p>
                </div>
              </div>
            </div>

            <client-only>
              <SupplyInfoChart />
            </client-only>

            <p class="white mt-36px mb-30px ml-22px">Deposit {{symbol}}</p>
            <div class="box2 ml-12px">
              <div class="flex justify-between items-center mb-37px px-10px">
                <div class="text-center">
                  <p class="grey2 mb-6px">In Wallet</p>
                  <p class="white2">
                    100
                    <span class="grey !text-16px">{{symbol}}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">Deposited</p>
                  <p class="white2">
                    0
                    <span class="grey !text-16px">{{symbol}}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">APR</p>
                  <p class="white2">1.5%</p>
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
                <div class="text-13px text-[rgba(252,255,253,0.4)] mr-15px pt-15px">
                  ~${{ displayFormat(approxValue(deposit_amount)) }}
                </div>
                <div class="flex items-center mr-15px">
                  <div class="max">MAX</div>
                </div>
              </div>

              <div class="flex items-center mt-15px pl-6px">
                <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] mr-16px pulse-text">
                  Use as collateral
                </div>
                <el-switch v-model="collateralize"> </el-switch>
              </div>

              <div class="btn_border w-480px mx-auto mt-30px">
                <el-button type="primary" class="!w-480px !h-54px">
                  <span class="font-800 text-20px">DEPOSIT {{symbol}}</span>
                </el-button>
              </div>

              <p class="reminder">
                Note: Toggle the
                <span class="text-[#f181de]">use as collateral</span> switch if you plan
                to use the asset as collateral and have not done so before.
              </p>
            </div>
          </div>
        </Loading>

        <!-------------------------------------- Borrow -------------------------------------->
        <Loading class="w-579px h-957px" :loading="loading2">
          <div class="box box-border5 p-10px">
            <div
              class="box-top flex items-center justify-between pr-53px pl-22px mb-25px"
            >
              <p class="section-title">Borrow Info</p>
              <div class="flex items-center">
                <div class="mr-45px">
                  <p class="grey mb-7px">Total borrowed</p>
                  <p class="white">30.00M</p>
                </div>
                <div>
                  <p class="grey mb-7px">APY</p>
                  <p class="white">0.5%</p>
                </div>
              </div>
            </div>

            <client-only>
              <BorrowInfoChart />
            </client-only>

            <p class="white mt-36px mb-30px ml-22px">Borrow {{symbol}}</p>
            <div class="box2 ml-12px" :class="{ high: collateralList.length > 1 }">
              <div class="flex justify-between items-center mb-37px px-10px">
                <div class="text-center">
                  <p class="grey2 mb-6px">Borrow Limit</p>
                  <p class="white2">
                    100
                    <span class="grey !text-16px">{{symbol}}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">Borrowed</p>
                  <p class="white2">
                    0
                    <span class="grey !text-16px">{{symbol}}</span>
                  </p>
                </div>
                <div class="text-center">
                  <p class="grey2 mb-6px">APR</p>
                  <p class="white2">1.5%</p>
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
                <div class="text-13px text-[rgba(252,255,253,0.4)] mr-15px pt-15px">
                  ~${{ displayFormat(approxValue(borrow_amount)) }}
                </div>
                <div class="flex items-center mr-15px">
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

              <div class="btn_border w-480px mx-auto mt-70px">
                <el-button type="primary" class="!w-full !h-54px">
                  <span class="font-800 text-20px">BORROW {{symbol}}</span>
                </el-button>
              </div>
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
  getTxURL,
  toWei,
  fromWei,
  tokenApprove,
  getNativeTokenAmount,
} from "@/utils/common";
import { market_list } from "@/config/money_market/market";

export default {
  layout: "blank",
  props: {},
  components: {},
  computed: {
    symbol() {
      return this.$route.query.asset;
    },
  },
  data() {
    return {
      loading1: true,
      loading2: true,
      loading3: true,
      asset: {},
      market_info: {token_price: toWei(1200)},
      deposit_amount: "",
      borrow_amount: "",
      collateralize: false,
      isMax: false,
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
  mounted() {
    this.asset = market_list[this.symbol];
    this.loading1 = false;
    setTimeout(() => {
      this.loading2 = false;
    }, 10);
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
    successMessage(receipt, title) {
      const txURL = getTxURL(receipt.transactionHash);
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
    displayFormat(amount, decimal = 18) {
      return this.formatNumber(fromWei(amount, decimal), 0);
    },
  },
};
</script>
