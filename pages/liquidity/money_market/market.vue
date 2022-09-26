<style lang="scss" scoped>
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

.table2 {
  background: #091839;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @apply pt-20px;
}
</style>

<template>
  <div class="page py-156px bg-[#01132E] text-[#FCFFFD]">
    <div class="w-1184px mx-auto">
      <MarketTab class="mb-35px" :value="2"></MarketTab>

      <div class="flex justify-between items-center mb-35px">
        <el-input
          placeholder="Search asset"
          v-model="searchKey"
          class="search !w-858px"
          clearable
          @input="search"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-checkbox-group v-model="checkList">
          <el-checkbox label="ALL"></el-checkbox>
          <el-checkbox label="STORED"></el-checkbox>
          <el-checkbox label="LOCKED"></el-checkbox>
        </el-checkbox-group>
      </div>

      <Loading
        :loading="loading1"
        :class="[loading1 ? 'h-358px' : 'h-auto']"
        class="mb-30px"
      >
        <div class="table2">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="Asset" label="Asset" width="140" sortable="">
              <template slot-scope="scope">
                <div class="flex items-center pl-20px">
                  <img src="@/assets/images/dashboard/ETH.png" class="mr-8px" />
                  <div class="leading-16px">
                    {{ scope.row.Asset }}
                    <div class="text-[#A5A7AA]">{{ scope.row.AssetName }}</div>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column width="40px">
              <template slot-scope="scope">
                <Abc v-model="scope.row.AssetType" readonly></Abc>
              </template>
            </el-table-column>

            <el-table-column
              prop="TotalSupplied"
              label="Total Supplied"
              align="right"
              sortable=""
            >
              <template slot-scope="scope">
                <div>
                  <div>{{ scope.row.TotalSupplied }}</div>
                  <div class="text-[#8A92A2] text-13px">
                    {{ scope.row.TotalSupplied2 }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="SupplyAPY"
              label="Supply APY"
              align="right"
              sortable=""
            >
            </el-table-column>

            <el-table-column
              prop="TotalBorrowed"
              label="Total Borrowed"
              align="right"
              sortable=""
            >
              <template slot-scope="scope">
                <div>
                  <div>{{ scope.row.TotalBorrowed }}</div>
                  <div class="text-[#8A92A2] text-13px">
                    {{ scope.row.TotalBorrowed2 }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <el-table-column
              prop="BorrowAPY"
              label="Borrow APY"
              align="right"
              sortable=""
            >
            </el-table-column>

            <el-table-column prop="Available" label="Available" align="right" sortable="">
            </el-table-column>

            <el-table-column width="190px">
              <template slot-scope="scope">
                <div class="flex items-center justify-center">
                  <div class="btn2" @click="$router.push('/dashboard/detail')">
                    Details
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
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
      loading1: true,
      checkList: ["ALL"],
      searchKey: "",
      tableData: new Array(10).fill({
        Asset: "Ethereum",
        AssetName: "ETH",
        AssetType: "A",
        TotalSupplied: "36.24M",
        TotalSupplied2: "$32.03M",
        BorrowAPY: "12.05%",
        SupplyAPY: "12.05%",
        Available: "208.12k",
        TotalBorrowed: "2.16M",
        TotalBorrowed2: "$7.79M",
      }),
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading1 = false;
    }, 3000);
  },
  methods: {
    search() {
      console.log(this.searchKey);
    },
  },
};
</script>
