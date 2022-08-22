<style lang="scss" scoped></style>

<template>
  <div class="!w-1150px">
    <BorrowTab v-model="active"></BorrowTab>

    <el-table :data="list" ref="table" @cell-click="cell_click" class="custom w-1/1">
      <el-table-column prop="symbol" label="Symbol" sortable width="200px">
        <template slot-scope="scope">
          <div class="flex items-center py-10px">
            <div class="relative pl-15px flex-shrink-0">
              <img src="@/assets/images/token1.png" class="w-46px" />
            </div>
            <div class="relative flex-shrink-0 relative -left-10px">
              <img src="@/assets/images/token2.png" class="w-46px" />
            </div>
            <div>
              <Search-keyword :keyword="query.key" :text="scope.row.symbol"></Search-keyword>
              <!-- div class="text-13px font-300 mt-10px text-[rgba(252,255,253,0.6)]">ZH9875</div -->
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="tvl" label="TVL" align="center">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px align-center">${{ scope.row.tvl }}</span>
          </div>
          <!--div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div-->
        </template>
      </el-table-column>

      <el-table-column prop="borrowed" label="Borrowed" align="center">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">${{ scope.row.borrowed }}</span>
          </div>
          <!--div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div-->
        </template>
      </el-table-column>

      <el-table-column prop="supply_apr" label="Supply APR" align="center">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">{{ scope.row.supply_apr }}%</span>
          </div>
          <!--div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div-->
        </template>
      </el-table-column>

      <el-table-column prop="available" label="Available" align="center">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">${{ scope.row.available }}</span>
          </div>
          <!-- div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div-->
        </template>
      </el-table-column>

      <el-table-column prop="borrow_apr" label="Borrow APR" align="center">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">{{ scope.row.borrow_apr }}%</span>
          </div>
          <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ANNUALIZED</div>
        </template>
      </el-table-column>

      <el-table-column label="Actions" align="center" width="120">
        <template slot-scope="scope">
          <div class="flex items-center justify-center">
            <img src="@/assets/images/icon_more.svg" class="cursor-pointer" />
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
  computed: {
    query() {
      return this.$route.query;
    },
  },
  data() {
    return {
      active: 1,
      list: [
        {
          symbol: 'USDT',
          tvl: 1000,
          borrowed: 500,
          supply_apr: 6.5,
          available: 500,
          borrow_apr: 13,
          icon: require('@/assets/images/token.svg'),
        }
      ],
    };
  },
  mounted() {},
  methods: {
    cell_click(row) {
      this.$router.push(`/liquidity/money_market/pool_detail?asset=${row.symbol}`);
    },
  },
};
</script>
