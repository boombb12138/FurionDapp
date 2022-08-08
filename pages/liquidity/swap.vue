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
    height: 68px;
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.192) 9.21%,
      rgba(51, 53, 114, 0.24) 95.15%
    );
    border-radius: 12px;
  }
  .tag {
    background: rgba(252, 255, 253, 0.08);
    // opacity: 0.2;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
  }
  .box-input {
    &::v-deep {
      .el-input__inner {
        height: 60px;
        background: #091a39;
        background: rgba(1, 17, 41, 0.6);
        border: 1px solid #172643 !important;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
        border-radius: 12px !important;
        color: #fcfffd;
        font-size: 22px;
        font-weight: 600;
        text-align: right;
        &::-webkit-input-placeholder {
          color: rgba(204, 204, 204, 0.3) !important;
        }
      }
    }
  }
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
}
.box-left {
  background: url(@/assets/images/liquidity/box_left_bg.png) 0 0/ 750px 540px no-repeat;
}
.box-right {
  background: url(@/assets/images/liquidity/box_right_bg.png) 0 0/ 370px 540px no-repeat;
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
          <el-input v-model="searchKey" placeholder="Searcg Farns" style="width:184px"></el-input>
        </div>
      </div>
    </div>

    <div class="flex justify-between pb-100px">
      <div class="box-left box w-750px p-10px">
        <div class="box-top flex items-center justify-between pr-27px pl-30px">
          <div class="flex items-center text-14px">
            <img class="flex-shrink-0" src="@/assets/images/liquidity/bit.svg" />
            <img class="flex-shrink-0 mr-10px -ml-5px" src="@/assets/images/liquidity/pointer.svg" />
            <span>USDC.e</span>
            <span class="mx-5px text-[#FCFFFD]">/</span>
            <span>WAVAX</span>
            <img
              class="flex-shrink-0 mr-18px ml-22px cursor-pointer"
              src="@/assets/images/liquidity/transfer.svg"
            />
            <div
              class="tag flex item-center justify-center text-[#34F8FF] h-32px leading-32px w-76px font-800 cursor-pointer"
            >Basic</div>
          </div>
          <img class="cursor-pointer" src="@/assets/images/liquidity/enlarge.svg" />
        </div>
        <div class="mt-10px mr-10px">
          <client-only>
            <BitcioToUSDBlue></BitcioToUSDBlue>
          </client-only>
        </div>
      </div>
      <div class="box-right box w-370px pt-24px px-16px pb-32px">
        <div class="flex items-center justify-between mb-5px">
          <div class="w-99px"></div>
          <p class="text-[#FCFFFD] text-19px font-700 text-center">Swap</p>
          <div class="flex items-center">
            <img
              class="flex-shrink-0 mr-12px cursor-pointer"
              src="@/assets/images/liquidity/setting.svg"
            />
            <img
              class="flex-shrink-0 mr-12px cursor-pointer"
              src="@/assets/images/liquidity/clock.svg"
            />
            <img class="flex-shrink-0 cursor-pointer" src="@/assets/images/liquidity/reload.svg" />
          </div>
        </div>
        <p
          class="text-13px text-[rgba(252,255,253,0.4)] font-500 mb-10px text-center"
        >Trade tokens in aninstant</p>
        <div class="divider mb-20px"></div>
        <div class="flex items-center mb-8px">
          <TypeSelector v-model="type1"></TypeSelector>
        </div>
        <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="number1"></el-input>
        <div class="text-center mt-14px mb-5px">
          <img class="flex-shrink-0 text-center" src="@/assets/images/liquidity/arrow_down2.svg" />
        </div>

        <div class="flex items-center mb-8px">
          <TypeSelector v-model="type2"></TypeSelector>
        </div>
        <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="number2"></el-input>
        <div class="flex items-center justify-between mt-14px">
          <p class="ml-16px text-[rgba(252,255,253,0.8)] text-13px font-500">Slippage Tolerance</p>
          <p class="mr-16px text-13px text-[#34F8FF]">0.5%</p>
        </div>
        <div class="btn_border w-1/1 mt-70px">
          <el-button type="primary" class="!w-1/1 !h-562x">Connect Wallet</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/liquidity']);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      active: 1,
      num: 0,
      percent: 0,
      sort: 'HOT',
      searchKey: '',
      number1: '',
      number2: '',
      type1: 'AVAX',
      type2: 'AVAX',
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
