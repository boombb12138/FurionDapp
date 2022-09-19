<style lang="scss" scoped>
.page {
  min-height: 100vh;
  .page-wrap {
    @apply w-1185px mx-auto relative;
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
.box-border1 {
  background: url(@/assets/images/dashboard/box-border1.png) 0 0/ 775px 412px no-repeat;
  // background: url(@/assets/images/liquidity/box_left_bg.png) 0 0/ 750px 540px no-repeat;
}
.box-border2 {
  background: url(@/assets/images/dashboard/box-border2.png) 0 0/ 364px 224px no-repeat;
}
.box-border3 {
  background: url(@/assets/images/dashboard/box-border3.png) 0 0/ 1185px 257px no-repeat;
}
.box-border4 {
  background: url(@/assets/images/dashboard/box-border4.png) 0 0/ 579px 380px no-repeat;
}
.small-box {
  background: linear-gradient(
    180deg,
    rgba(250, 107, 225, 0.2) 0%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border-radius: 20px;
  .box-top {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.4) 9.21%,
      rgba(51, 53, 114, 0.5) 95.15%
    );
    @apply rounded-8px  mx-auto h-40px w-147px flex items-center pl-14px relative;
  }
}
.coin-box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.4) 9.21%,
    rgba(51, 53, 114, 0.5) 95.15%
  );
  &:hover {
    outline: 3px solid rgba(250, 107, 225, 1);
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5));
  }
  @apply w-158px h-160px  rounded-12px mr-40px relative mt-10px cursor-pointer;
  .coin-icon {
    @apply absolute -top-23px left-21px;
  }
  .top-text {
    @apply text-[#FCFFFD] text-16px font-700 mt-42px ml-21px;
  }
  .middle-text {
    @apply text-[#FCFFFD] text-32px font-700 mt-16px text-center;
  }
}
.green {
  color: #56bd84;
}
.red {
  color: #bc555b;
}
::v-deep .el-table__header-wrapper {
  // background: red;
  height: 64px;
  .el-table__header {
    height: 64px;
  }
}
::v-deep .el-table__body-wrapper {
  tbody {
    tr {
      &:nth-of-type(1) {
        td {
          border-top: none;
        }
      }
    }
  }
}
.table-header {
  width: 1186px;
  height: 64px;
  left: 0;
  top: 0;

  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 107.69%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  z-index: 1;
}
</style>

<template>
  <div class="page pt-80px bg-[#01132E] overflow-hidden">
    <div class="page-wrap pt-63px pb-58px">
      <h3 class="text-white text-36px font-700 mb-20px ml-5px">Dashboard</h3>
      <p class="section-title mb-20px">Furion Pool</p>

      <div class="flex mb-34px">
        <Loading class="w-775px h-412px mr-46px" :loading="loading1">
          <div class="box-border1 box p-10px">
            <div
              class="box-top flex items-center justify-between pr-27px pl-35px text-[#FCFFFD] text-16px font-700"
            >
              Pools Market Caps
            </div>
            <div class="mt-10px mr-10px">
              <client-only>
                <PoolsMarketCaps></PoolsMarketCaps>
              </client-only>
            </div>
          </div>
        </Loading>
        <div>
          <Loading class="w-364px h-220px" :loading="loading2">
            <div class="box-border2 box p-10px relative">
              <div
                class="box-top flex items-center justify-between pr-27px pl-35px text-[#FCFFFD] text-16px font-700 relative z-1"
              >
                NFTs in Furion Pool
              </div>
              <div class="mt-10px mr-10px"></div>
              <img
                src="@/assets/images/dashboard/moon.png"
                class="absolute right-0 top-0 opacity-30"
              />
              <p
                class="text-[#fcfffd] text-50px font-700 text-center relative z-1 mt-40px"
              >
                498.63k
              </p>
            </div>
          </Loading>
          <div class="flex justify-between mt-20px">
            <Loading class="w-172px h-172px" :loading="loading2">
              <div class="box small-box">
                <div class="box-top">
                  <img class="mr-7px" src="@/assets/images/dashboard/lock.svg" />
                  <p class="text-[#FCFFFD] text-16px font-700">Locked</p>
                </div>
                <p class="text-[#FCFFFD] text-40px font-700 text-center mt-25px">23k</p>
              </div>
            </Loading>
            <Loading class="w-172px h-172px" :loading="loading2">
              <div class="box small-box">
                <div class="box-top">
                  <img class="mr-7px" src="@/assets/images/dashboard/store.svg" />
                  <p class="text-[#FCFFFD] text-16px font-700">Stored</p>
                </div>
                <p class="text-[#FCFFFD] text-40px font-700 text-center mt-25px">563</p>
              </div>
            </Loading>
          </div>
        </div>
      </div>

      <div class="flex justify-between mb-34px">
        <Loading class="w-579px h-230px" :loading="loading2">
          <div class="box pt-10px px-17px">
            <div
              class="box-top flex items-center justify-between pr-27px pl-20px text-[#FCFFFD] text-16px font-700"
            >
              Separate Pool
            </div>
            <div class="flex relative">
              <div class="flex-1 mt-55px">
                <p class="text-[#FCFFFD] text-32px font-700 text-center mb-11px">
                  #215694
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  No. of separate pool
                </p>
              </div>
              <div class="flex-1 mt-55px">
                <p class="text-[#FCFFFD] text-32px font-700 text-center mb-11px">
                  219.26k
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  TVL of separate pool
                </p>
              </div>
              <div
                class="w-2px h-59px bg-[rgba(26,65,98,1)] absolute top-42px left-276px"
              ></div>
            </div>
          </div>
        </Loading>
        <Loading class="w-579px h-230px" :loading="loading2">
          <div class="box pt-10px px-17px">
            <div
              class="box-top flex items-center justify-between pr-27px pl-20px text-[#FCFFFD] text-16px font-700"
            >
              Aggregate Pool
            </div>
            <div class="flex relative">
              <div class="flex-1 mt-55px">
                <p class="text-[#FCFFFD] text-32px font-700 text-center mb-11px">
                  #215694
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  No. of separate pool
                </p>
              </div>
              <div class="flex-1 mt-55px">
                <p class="text-[#FCFFFD] text-32px font-700 text-center mb-11px">
                  219.26k
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  TVL of separate pool
                </p>
              </div>
              <div
                class="w-2px h-59px bg-[rgba(26,65,98,1)] absolute top-42px left-276px"
              ></div>
            </div>
          </div>
        </Loading>
      </div>
      <Loading class="w-1185px h-257px" :loading="loading2">
        <div class="flex box box-border3 items-center">
          <p class="text-[#FCFFFD] text-20px font-700 mx-27px">FFT Price</p>
          <div class="coin-box">
            <img class="coin-icon" src="@/assets/images/dashboard/coin1.svg" />
            <p class="top-text">FFT-A</p>
            <p class="middle-text">$236.21</p>
          </div>
          <div class="coin-box">
            <img class="coin-icon" src="@/assets/images/dashboard/coin2.svg" />
            <p class="top-text">FFT-B</p>
            <p class="middle-text">$468</p>
          </div>
          <div class="coin-box">
            <img class="coin-icon" src="@/assets/images/dashboard/coin3.svg" />
            <p class="top-text">FFT-C</p>
            <p class="middle-text">$46.21</p>
          </div>
          <div class="coin-box">
            <img class="coin-icon" src="@/assets/images/dashboard/coin4.svg" />
            <p class="top-text">FFT-D</p>
            <p class="middle-text">$24</p>
          </div>
          <img class="cursor-pointer" src="@/assets/images/dashboard/comming-soon.png" />
        </div>
      </Loading>

      <p class="section-title mb-30px mt-40px">Swap</p>

      <div class="flex justify-between">
        <Loading class="w-579px h-380px" :loading="loading2">
          <div class="box-border4">
            <client-only>
              <SwapLeft />
            </client-only>
          </div>
        </Loading>

        <Loading class="w-579px h-380px" :loading="loading2">
          <div class="box-border4">
            <client-only>
              <SwapRight />
            </client-only>
          </div>
        </Loading>
      </div>

      <div class="flex items-center justify-between mt-30px mb-24px">
        <p class="text-[#C3C6CD] text-20px font-700">Top Tokens</p>
        <div class="flex items-center">
          <span class="mr-10px text-[#FA6BE1] font-700 text-20px">Explore</span>
          <img src="@/assets/images/dashboard/circle.svg" />
        </div>
      </div>

      <Loading class="h-280px" :loading="loading2">
        <div class="table-wrap relative">
          <div class="table-header absolute"></div>
          <el-table :data="list" style="width: 100%">
            <el-table-column prop="Collection" label="#" width="80px">
              <template slot-scope="scope">
                <div class="ml-30px">{{ scope.$index + 1 }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="Collection" label="Name" width="300px">
              <template slot-scope="scope">
                <div class="flex font-500 text-16px items-center">
                  <img class="mr-10px" src="@/assets/images/dashboard/pointer.svg" />
                  <p class="flex items-center">
                    <span class="mr-5px">{{ scope.row.name }}</span>
                    <span class="text-[rgba(165,167,170,1)]"
                      >({{ scope.row.shortName }})</span
                    >
                  </p>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="right"
              prop="price"
              label="Reference Price"
            ></el-table-column>
            <el-table-column align="right" label="Price Change">
              <template slot-scope="scope">
                <div
                  class="flex items-center text-right float-right"
                  :class="{
                    green: scope.row.priceTrend === 'increase',
                    red: scope.row.priceTrend === 'decrease',
                  }"
                >
                  <i
                    class="el-icon-top mr-5px"
                    v-if="scope.row.priceTrend === 'increase'"
                  ></i>
                  <i
                    class="el-icon-bottom mr-5px"
                    v-if="scope.row.priceTrend === 'decrease'"
                  ></i>
                  <span>{{ scope.row.priceChange }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              align="right"
              prop="volume"
              label="Volume 24H"
            ></el-table-column>
            <el-table-column width="200px" align="right" prop="tvl" label="TVL">
            </el-table-column>

            <el-table-column width="50px"></el-table-column>
          </el-table>
        </div>
      </Loading>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/dashboard"]);
  },
  layout: "blank",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      list: [
        {
          id: 1,
          name: "Ethereum",
          shortName: "ETH",
          price: "$19.72K",
          volume: "$439.94m",
          tvl: "$828.07m",
          priceChange: "1.05%",
          priceTrend: "increase",
        },
        {
          id: 2,
          name: "Ethereum",
          shortName: "ETH",
          price: "$19.72K",
          volume: "$439.94m",
          tvl: "$828.07m",
          priceChange: "2.25%",
          priceTrend: "decrease",
        },
      ],
      loading1: true,
      loading2: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading1 = false;
    }, 3000);
    setTimeout(() => {
      this.loading2 = false;
    }, 5000);
  },
  methods: {},
};
</script>
