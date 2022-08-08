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
.pool-stripe {
  width: 1154px;
  height: 224px;
  background: url(@/assets/images/liquidity/pool_stripe.png) -39px -36px /
    // 1230px 300px no-repeat;
    1235px 305px no-repeat;
}
::v-deep {
  .el-table .el-table__header tr .el-table__cell:first-of-type {
    padding-left: 80px;
  }
}
</style>

<template>
  <div class="w-1150px">
    <div class="flex items-end justify-between mt-70px mb-40px">
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
    <div class="pool-stripe pt-55px pl-78px mb-40px">
      <h4 class="text-white text-44px font-900 mb-40px">POOL</h4>
      <div class="flex text-white text-16px font-900">
        <p class="mr-110px">Don't see a pool you joined?</p>
        <p class="cursor-pointer">Create a Pool</p>
      </div>
    </div>
    <SwapTab2 v-model="active2" class="mb-24px"></SwapTab2>

    <el-table :data="list" ref="table" @cell-click="cell_click" class="custom w-1/1 pb-100px">
      <el-table-column label="Name" width="374px">
        <template slot-scope="scope">
          <div class="flex items-center pl-64px py-7px">
            <div class="flex items-center mr-15px">
              <img class="flex-shrink-0 w-49px h-49px" src="@/assets/images/liquidity/bit.svg" />
              <img
                class="flex-shrink-0 w-49px h-49px -ml-11px"
                src="@/assets/images/liquidity/pointer.svg"
              />
            </div>
            <div>
              <div class="mb-5px flex items-center">
                <span>USDC.e</span>
                <span class="mx-5px text-[rgba(252,255,253,0.4)]">/</span>
                <span>WAVAX</span>
              </div>
              <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="TVL">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">$ 1,436</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Borrowed">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">$ 28.00</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Available">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">$ 1,436</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Borrow APR">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">37.01%</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
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
      active: 2,
      active2: 1,
      num: 0,
      percent: 0,
      sort: 'HOT',
      searchKey: '',
      number1: '',
      number2: '',
      list: [
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
        {
          Pool: 'USDC.e / WAVAX',
          Pool_Icon: require('@/assets/images/token.svg'),
        },
      ],
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
    cell_click(row) {
      this.$router.push('/liquidity/pool_detail');
    },
  },
};
</script>
