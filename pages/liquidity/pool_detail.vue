<style lang="scss" scoped>
.search-section {
  .label {
    @apply ml-13px text-[rgba(204,204,204,0.4)] text-12px font-500 mb-8px;
  }
  &::v-deep {
    .el-input__inner {
      background: #091a39;
      border: 1px solid #172643 !important;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
      border-radius: 8px !important;
      color: rgba(204, 204, 204, 0.8) !important;
      height: 34px;
      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.8);
      }
    }
  }
}
.box {
  height: 540px;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border-radius: 20px;
  .box-top {
    height: 226px;
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.192) 9.21%,
      rgba(51, 53, 114, 0.24) 95.15%
    );
    border-radius: 12px;
  }

  .input-wrap {
    height: 60px;
    background: rgba(1, 17, 41, 0.6) !important;
    border: 1px solid #172643 !important;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
    border-radius: 12px !important;
    color: rgba(252, 255, 253, 0.3) !important;
    font-size: 22px;
    font-weight: 600;
    @apply flex items-center;
    * {
      flex-shrink: 0;
    }
  }
  .box-input {
    background: transparent !important;
    &::v-deep {
      .el-input__inner {
        height: 56px;
        background: transparent !important;
        border: 1px solid #172643 !important;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
        border-radius: 12px !important;
        color: #fcfffd;
        font-size: 22px;
        font-weight: 600;
        &::-webkit-input-placeholder {
          color: rgba(204, 204, 204, 0.3) !important;
        }
      }
    }
    &.no-border {
      &::v-deep {
        .el-input__inner {
          height: 56px;
          background: transparent !important;
          border: 0 !important;
          box-shadow: unset !important;
          border-radius: 12px !important;
          color: #fcfffd;
          font-size: 22px;
          font-weight: 600;
          &::-webkit-input-placeholder {
            color: rgba(204, 204, 204, 0.8);
          }
        }
      }
    }
    &.small {
      &::v-deep {
        .el-input__inner {
          height: 30px;
        }
      }
    }
  }
  .label {
    @apply text-13px text-[rgba(252,255,253,0.3)];
  }
  .value {
    @apply text-14px  text-[rgba(252,255,253,0.8)] mt-8px;
  }
  .value2 {
    @apply text-32px font-500 text-[rgba(252,255,253,0.8)] mt-12px;
  }
}
.box-left {
  background: url(@/assets/images/liquidity/box_left_bg.png) 0 0/ 750px 540px no-repeat;
}
.box-right {
  background: url(@/assets/images/liquidity/box_right_bg.png) 0 0/ 370px 540px no-repeat;
}
.divider {
  height: 1.6px;
  background: linear-gradient(
    270deg,
    rgba(221, 221, 221, 0) 12.5%,
    rgba(221, 221, 221, 0.4) 56.71%,
    rgba(221, 221, 221, 0) 100%
  );
}
.sort {
  background: #091a39;
  border: 1px solid #172643 !important;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
  border-radius: 8px !important;
  color: rgba(204, 204, 204, 0.8) !important;
  height: 34px;
  @apply px-15px w-154px flex items-center justify-between cursor-pointer;
  i {
    margin-left: 10px;
  }
  &.no-border {
    width: 90px !important;
    border: 0 !important;
    box-shadow: unset !important;
    padding: 0;
    background-color: transparent !important;
  }
}
.pool-stripe {
  width: 1158px;
  height: 84px;
  background: url(@/assets/images/liquidity/pool_stripe2.png) -40px -36px /
    // 1230px 300px no-repeat;
    1235px 165px no-repeat;
}
.tag {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) -9.52%,
    rgba(51, 53, 114, 0.2) 109.52%
  );
  @apply w-48px h-28px leading-28px rounded-5px text-center text-13px font-700 cursor-pointer;
}
.divider {
  background: rgba(217, 217, 217, 0.2);
  @apply w-1px h-32px;
}
</style>

<template>
  <div class="w-1150px">
    <div class="flex items-end justify-between my-70px">
      <SwapTab v-model="active"></SwapTab>
      <div class="flex search-section items-end">
        <div class="mr-30px">
          <p class="label">SORT BY</p>
          <el-popover
            placement="bottom-start"
            title
            trigger="click"
            popper-class="el-sort"
            :visible-arrow="false"
            width="154"
            ref="sort"
          >
            <div class="el-sort-item" @click="onSort('HOT')">HOT</div>
            <div class="el-sort-item" @click="onSort('RECENT')">RECENT</div>

            <div class="sort" slot="reference">
              <div class="text-14px">{{ sort }}</div>
              <i class="el-icon-arrow-down"></i>
            </div>
          </el-popover>
        </div>
        <div class="mr-30px">
          <p class="label">SEARCH</p>
          <el-input
            v-model="searchKey"
            placeholder="Searcg Farns"
            style="width: 184px"
          ></el-input>
        </div>
      </div>
    </div>

    <div class="pool-stripe pl-35px mb-40px flex items-center">
      <img
        class="flex-shrink-0 mr-38px cursor-pointer"
        src="@/assets/images/liquidity/back.svg"
        @click="$router.push('/liquidity/pool')"
      />
      <h4 class="text-white text-32px font-900">POOL</h4>
    </div>

    <div class="flex justify-between pb-100px">
      <div class="box-left box w-750px p-10px">
        <div class="box-top py-40px px-30px">
          <div class="flex items-center text-32px text-[#fcfffd]">
            <img class="flex-shrink-0 mr-15px" src="@/assets/images/liquidity/bit.svg" />
            <span class="font-700">AVAX</span>
            <span class="ml-5px mr-8px text-[rgba(252,255,253,0.4)]">/</span>
            <img
              class="flex-shrink-0 mr-15px"
              src="@/assets/images/liquidity/pointer.svg"
            />
            <span class="font-700">USDC</span>
          </div>
          <p class="text-13px text-[rgba(252,255,253,0.3)] mt-30px mb-46px">
            (0xf4003f4efbe8691b60249e6afbd307abe7758adb)
          </p>
          <div class="flex">
            <div class="w-145px flex-shrink-0">
              <p class="label">Liquidity</p>
              <p class="value">$27,746,541</p>
            </div>
            <div class="w-155px flex-shrink-0">
              <p class="label">Volume (24H)</p>
              <p class="value">$6,516,537</p>
            </div>
            <div class="w-145px flex-shrink-0">
              <p class="label">Fees (24H)</p>
              <p class="value">$16,291</p>
            </div>
            <div class="w-145px flex-shrink-0">
              <p class="label">APR</p>
              <p class="value">21.4%</p>
            </div>
          </div>
        </div>
        <div class="pl-40px mt-55px">
          <div class="flex">
            <div class="w-330px">
              <p class="label">Your pool share</p>
              <p class="value2">0%</p>
            </div>
            <div>
              <p class="label">Your pool tokens</p>
              <p class="value2">0</p>
            </div>
          </div>
          <div class="flex mt-70px">
            <div class="w-330px">
              <p class="label">Pooled</p>
              <p class="value2">0</p>
            </div>
            <div>
              <p class="label">Pooled</p>
              <p class="value2">0</p>
            </div>
          </div>
        </div>
      </div>

      <div class="box-right box w-370px pt-24px px-16px pb-32px">
        <div class="flex justify-center mb-36px">
          <SwapTab3 v-model="active2"></SwapTab3>
        </div>

        <template v-if="active2 === 1">
          <div class="flex justify-between items-center mb-8px px-10px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Input</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              Balance: 1.02868
            </p>
          </div>

          <div class="input-wrap">
            <el-input
              class="box-input no-border"
              placeholder="0.0"
              style="width: 160px"
              v-model="number1"
            ></el-input>
            <div class="tag">MAX</div>
            <div class="divider ml-10px mr-12px"></div>

            <TypeSelector v-model="type1"></TypeSelector>
          </div>

          <div class="text-center mt-14px mb-8px">
            <img
              class="flex-shrink-0 text-center"
              src="@/assets/images/liquidity/plus.svg"
            />
          </div>

          <div class="flex justify-between items-center mb-8px px-10px mt-20px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Input</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              Balance: 1.02868
            </p>
          </div>
          <div class="input-wrap">
            <el-input
              class="box-input no-border"
              placeholder="0.0"
              style="width: 160px"
              v-model="number2"
            ></el-input>
            <div class="tag">MAX</div>
            <div class="divider ml-10px mr-12px"></div>
            <TypeSelector v-model="type2"></TypeSelector>
          </div>

          <div class="btn_border w-1/1 mt-120px">
            <el-button type="primary" class="!w-1/1 !h-52x" disabled
              >Enter an amount</el-button
            >
          </div>
        </template>
        <teamplate v-if="active2 === 2">
          <div class="flex justify-between items-center mb-8px px-10px mt-20px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">You Pool Tokens</p>
          </div>
          <el-input
            class="box-input rounded-12px"
            placeholder="0.0"
            style="width: 100%; background-color: rgba(1, 17, 41, 0.6) !important"
            v-model="number3"
          ></el-input>
          <div class="mt-10px mb-20px">
            <el-tag
              class="w-70px mr-14px"
              size
              type="primary"
              @click="percent_change(25)"
            >
              <span class="leading-32px">25%</span>
            </el-tag>
            <el-tag class="w-70px mr-14px" size @click="percent_change(50)">
              <span class="leading-32px">50%</span>
            </el-tag>
            <el-tag class="w-70px mr-14px" size @click="percent_change(75)">
              <span class="leading-32px">75%</span>
            </el-tag>
            <el-tag class="w-72px" size @click="percent_change(100)">
              <span class="leading-32px">100%</span>
            </el-tag>
          </div>
          <div class="text-center mt-14px mb-17px">
            <img class="text-center" src="@/assets/images/liquidity/arrow_down2.svg" />
          </div>
          <div class="input-wrap !h-84px px-24px py-12px !block">
            <div class="flex items-center justify-between h-1/2">
              <span>-</span>
              <el-input
                class="box-input no-border small"
                style="width: 228px; height: 30px"
                v-model="number4"
              ></el-input>
              <span class="text-16px text-[rgba(252,255,253,0.8)] font-500 ml-12px"
                >AVAX</span
              >
            </div>
            <div class="flex items-center justify-between h-1/2">
              <span>-</span>
              <el-input
                class="box-input no-border small"
                style="width: 228px; height: 30px"
                v-model="number5"
              ></el-input>
              <span class="text-16px text-[rgba(252,255,253,0.8)] font-500 ml-12px"
                >USDC</span
              >
            </div>
          </div>
          <div class="flex justify-between mt-10px">
            <p class="label">You Pool Tokens</p>
            <div>
              <p class="label mb-5px">1 AVAX=17.4412 USDC</p>
              <p class="label">1 USDC=0.0573354 AVAX</p>
            </div>
          </div>
          <div class="flex mt-35px justify-between">
            <div class="btn_border w-162px">
              <el-button type="primary" class="!w-1/1 !h-52x">Approve</el-button>
            </div>
            <div class="btn_border w-162px">
              <el-button type="primary" class="!w-1/1 !h-52x">
                <span class="-ml-5px">Enter amount</span>
              </el-button>
            </div>
          </div>
        </teamplate>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      active: 2,
      active2: 1,
      num: 0,
      percent: 0,
      sort: "HOT",
      type1: "AVAX",
      type2: "AVAX",
      searchKey: "",
      number1: "",
      number2: "",
      number3: "",
      number4: "",
      number5: "",
    };
  },
  mounted() {},
  methods: {
    percent_change(n) {
      if (n) {
        this.percent = n;
      }
      this.num = (this.amount * this.percent) / 100;
    },
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },
    onSelect1(str) {
      this.$refs.type1.doClose();
      this.type1 = str;
    },
    onSelect2(str) {
      this.$refs.type2.doClose();
      this.type2 = str;
    },
  },
};
</script>
