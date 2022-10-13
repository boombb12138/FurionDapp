<style lang="scss" scoped>
.search-section {
  .label {
    @apply ml-13px text-[rgba(204, 204, 204, 0.4)] text-12px font-500 mb-8px;
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
  background: url(@/assets/images/liquidity/pool_stripe.png) -39px -36px / // 1230px 300px no-repeat;
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
      <!-- <div class="flex search-section items-end">
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
      </div> -->
    </div>
    <div class="pool-stripe pt-55px pl-78px mb-40px">
      <h4 class="text-white text-44px font-900 mb-40px">POOL</h4>
      <div class="flex text-white text-16px font-900">
        <p class="mr-110px cursor-pointer">Don't see a pool you joined?</p>
        <p class="cursor-pointer" @click="$router.push('/liquidity/furion_swap/create_pool')">Create a Pool</p>
      </div>
    </div>
    <SwapTab2 v-model="active2" class="mb-24px"></SwapTab2>

    <el-table :data="active2==1? pool_info.pool_list: my_pool" ref="table" @cell-click="cell_click"
      class="custom w-1/1 pb-100px">
      <el-table-column label="Name" width="374px">
        <template slot-scope="scope">
          <div class="flex items-center pl-64px py-7px">
            <div class="flex items-center mr-15px">
              <img class="flex-shrink-0 w-49px h-49px" :src="scope.row.token_0_image" />
              <img class="flex-shrink-0 w-49px h-49px -ml-11px" :src="scope.row.token_1_image" />
            </div>
            <div>
              <div class="flex items-center">
                <span>{{ scope.row.token_0 }}</span>
                <span class="mx-5px text-[rgba(252,255,253,0.4)]">/</span>
                <span>{{ scope.row.token_1 }}</span>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Liquidity">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">$ {{scope.row.tvl}}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Volume (24h)">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">$ {{scope.row.volume}}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Fees (24h)">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">$ {{scope.row.fees}}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="APR">
        <template slot-scope="scope">
          <div>
            <span class="font-600 text-16px">{{scope.row.apr}}%</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { pool_info, single_swap_pool, getPoolSummary, initSinglePool } from '@/config/furion_swap/pool';
import { mapState } from 'vuex';

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/liquidity']);
  },
  props: {},
  components: {},
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
  },
  data() {
    return {
      chainId: 5,
      active: 2,
      active2: 1,
      num: 0,
      percent: 0,
      sort: 'HOT',
      searchKey: '',
      number1: '',
      number2: '',
      pool_info: pool_info(),
      my_pool: [],
    };
  },
  mounted() {
    setTimeout(() => {
      for (let index = 0; index < this.pool_info.pool_list.length; index++) {
        this.initPoolSummary(this.pool_info.pool_list[index], index);
      }
    }, 200)


  },
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
      // console.log("Row info", row);
      for (let key in single_swap_pool) {
        single_swap_pool[key] = row[key];
      }
      single_swap_pool['initialized'] = true;
      // console.log('New single swap pool', single_swap_pool);
      this.$router.push(`/liquidity/furion_swap/pool_detail?token_0=${row.token_0}&token_1=${row.token_1}`);
    },

    initPoolSummary(pool, index) {
      getPoolSummary(pool.token_0, pool.token_1, this.chainId).then((res) => {
        // console.log('pool info', res);
        pool.tvl = res['tvl'].toFixed(3);
        pool.volume = res['daily_tx'].toFixed(3);
        pool.fees = res['fee'].toFixed(3);
        pool.apr = (res['apr'] * 100).toFixed(3);
        this.pool_info.pool_list[index] = pool;
        this.$forceUpdate();
      });

      // filter out my pools
      let account = this.userInfo.userAddress;
      initSinglePool(pool, this.chainId).then((res) => {
        res.pair_contract.methods.balanceOf(account).call().then((balance) => {
          if (parseFloat(balance) > 0) {
            this.my_pool.push(pool);
          }
        })
      });

    }
  },
};
</script>
