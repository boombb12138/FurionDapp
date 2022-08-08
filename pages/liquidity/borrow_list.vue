<style lang="scss" scoped></style>

<template>
  <div class="!w-1150px">
    <BorrowTab v-model="active"></BorrowTab>

    <el-table :data="list" ref="table" @cell-click="cell_click" class="custom w-1/1">
      <el-table-column prop="Pool" label="Pool" sortable width="300px">
        <template slot-scope="scope">
          <div class="flex items-center py-10px">
            <div class="relative pl-15px flex-shrink-0">
              <img src="@/assets/images/token1.png" class="w-46px" />
            </div>
            <div class="relative flex-shrink-0 relative -left-10px">
              <img src="@/assets/images/token2.png" class="w-46px" />
            </div>
            <div>
              <Search-keyword :keyword="query.key" :text="scope.row.Pool"></Search-keyword>
              <div class="text-13px font-300 mt-10px text-[rgba(252,255,253,0.6)]">ZH9875</div>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="TVL">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">$ 1,436</span>
          </div>
          <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div>
        </template>
      </el-table-column>

      <el-table-column label="Borrowed">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">$ 1,436</span>
          </div>
          <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div>
        </template>
      </el-table-column>

      <el-table-column label="Supply APR">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">-</span>
          </div>
          <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div>
        </template>
      </el-table-column>

      <el-table-column label="Available">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">-</span>
          </div>
          <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">ZH9875</div>
        </template>
      </el-table-column>

      <el-table-column label="Borrow APR">
        <template slot-scope="scope">
          <div class="mb-5px">
            <span class="font-600 text-16px">37.01%</span>
          </div>
          <div class="font-400 text-13px text-[rgba(252,255,253,0.6)]">annualized</div>
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
    cell_click(row) {
      this.$router.push('/liquidity/borrow_detail');
    },
  },
};
</script>
