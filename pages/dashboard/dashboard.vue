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
    @apply relative top-13px rounded-8px  mx-auto h-40px w-147px flex items-center pl-14px;
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
    scale: 1.1;
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
              v-if="!loading1"
            >
              Pools Market Caps
            </div>
            <div class="mt-10px mr-10px" v-if="!loading1">
              <client-only>
                <PoolsMarketCaps
                  :data_24h="this.dash_info.dash_list.furion_market_caps_24h"
                  :data_1w="this.dash_info.dash_list.furion_market_caps_1w"
                  :data_1m="this.dash_info.dash_list.furion_market_caps_1m"
                  :time_list_24h="getDayData(this.dash_info.dash_list.end_time)"
                  :time_list_1w="getWeekData(this.dash_info.dash_list.end_time)"
                  :time_list_1m="
                    getMonthData(this.dash_info.dash_list.end_time)
                  "
                  :time="this.dash_info.dash_list.end_time"
                ></PoolsMarketCaps>
              </client-only>
            </div>
          </div>
        </Loading>

        <div>
          <Loading class="w-364px h-220px" :loading="loading2">
            <div class="box-border2 box p-10px relative">
              <div
                class="box-top flex items-center justify-between pr-27px pl-35px text-[#FCFFFD] text-16px font-700 relative z-1"
                v-if="!loading2"
              >
                NFTs in Furion Pool
              </div>
              <div class="mt-10px mr-10px"></div>
              <img
                src="@/assets/images/dashboard/moon.png"
                class="absolute right-0 top-0 opacity-30"
                v-if="!loading2"
              />
              <p
                class="text-[#fcfffd] text-50px font-700 text-center relative z-1 mt-40px"
                v-if="!loading2"
              >
                {{ show(this.dash_info.dash_list.nfts) }}
              </p>
            </div>
          </Loading>
          <div class="flex justify-between mt-20px">
            <Loading class="w-172px h-172px" :loading="loading2">
              <div class="box small-box">
                <div class="box-top" v-if="!loading2">
                  <img
                    class="ml-10px mr-7px"
                    src="@/assets/images/dashboard/lock.svg"
                  />
                  <p class="text-[#FCFFFD] text-16px font-700 ml-6px mt-2px">
                    Locked
                  </p>
                </div>
                <p
                  class="text-[#FCFFFD] text-40px font-700 text-center mt-35px"
                  v-if="!loading2"
                >
                  {{ show(this.dash_info.dash_list.locked) }}
                </p>
              </div>
            </Loading>
            <Loading class="w-172px h-172px" :loading="loading2">
              <div class="box small-box">
                <div class="box-top" v-if="!loading2">
                  <img
                    class="ml-10px mr-7px"
                    src="@/assets/images/dashboard/store.svg"
                  />
                  <p class="text-[#FCFFFD] text-16px font-700">Stored</p>
                </div>
                <p
                  class="text-[#FCFFFD] text-40px font-700 text-center mt-35px"
                  v-if="!loading2"
                >
                  {{ show(this.dash_info.dash_list.stored) }}
                </p>
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
              v-if="!loading2"
            >
              Separate Pool
            </div>
            <div class="flex relative" v-if="!loading2">
              <div class="flex-1 mt-55px">
                <p
                  class="text-[#FCFFFD] text-32px font-700 text-center mb-11px"
                >
                  #{{ this.dash_info.dash_list.sep_no }}
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  No. of separate pool
                </p>
              </div>
              <div class="flex-1 mt-55px">
                <p
                  class="text-[#FCFFFD] text-32px font-700 text-center mb-11px"
                >
                  {{ show(this.dash_info.dash_list.sep_tvl) }}
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  TVL of separate pool
                </p>
              </div>
              <!-- //MARK 中间的分割线 -->
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
              v-if="!loading2"
            >
              Aggregate Pool
            </div>
            <div class="flex relative" v-if="!loading2">
              <div class="flex-1 mt-55px">
                <p
                  class="text-[#FCFFFD] text-32px font-700 text-center mb-11px"
                >
                  #{{ this.dash_info.dash_list.agg_no }}
                </p>
                <p class="text-[#8a92a2] text-13px text-center font-600">
                  No. of separate pool
                </p>
              </div>
              <div class="flex-1 mt-55px">
                <p
                  class="text-[#FCFFFD] text-32px font-700 text-center mb-11px"
                >
                  {{ show(this.dash_info.dash_list.agg_tvl) }}
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
            <img
              class="coin-icon"
              src="@/assets/images/dashboard/coin1.svg"
              v-if="!loading2"
            />
            <p class="top-text" v-if="!loading2">FFT-A</p>
            <p class="middle-text" v-if="!loading2">$236.21</p>
          </div>
          <div class="coin-box">
            <img
              class="coin-icon"
              src="@/assets/images/dashboard/coin2.svg"
              v-if="!loading2"
            />
            <p class="top-text" v-if="!loading2">FFT-B</p>
            <p class="middle-text" v-if="!loading2">$468</p>
          </div>
          <div class="coin-box">
            <img
              class="coin-icon"
              src="@/assets/images/dashboard/coin3.svg"
              v-if="!loading2"
            />
            <p class="top-text" v-if="!loading2">FFT-C</p>
            <p class="middle-text" v-if="!loading2">$46.21</p>
          </div>
          <div class="coin-box">
            <img
              class="coin-icon"
              src="@/assets/images/dashboard/coin4.svg"
              v-if="!loading2"
            />
            <p class="top-text" v-if="!loading2">FFT-D</p>
            <p class="middle-text" v-if="!loading2">$24</p>
          </div>
          <div class="coin-box" v-if="loading2"></div>
          <img
            class="cursor-pointer"
            src="@/assets/images/dashboard/comming-soon.png"
            v-if="!loading2"
          />
        </div>
      </Loading>
      <!-- //todo 这里左侧的竖线是怎么做的 -->
      <p class="section-title mb-30px mt-40px">Swap</p>
      <div class="flex justify-between">
        <Loading class="w-579px h-380px" :loading="loading2">
          <div class="box-border4">
            <!-- //todo 这里为什么要加上一个 client-only -->
            <client-only v-if="!loading2">
              <!-- //todo 这里把表格封装成自定义组件 看下这里引用的所有自定义组件  -->
              <SwapLeft
                :data_24h="this.dash_info.dash_list.swap_tvl_24h"
                :data_1w="this.dash_info.dash_list.swap_tvl_1w"
                :data_1m="this.dash_info.dash_list.swap_tvl_1m"
                :time_list_24h="getDayData(this.dash_info.dash_list.end_time)"
                :time_list_1w="getWeekData(this.dash_info.dash_list.end_time)"
                :time_list_1m="getMonthData(this.dash_info.dash_list.end_time)"
                :time="this.dash_info.dash_list.end_time"
              />
            </client-only>
          </div>
        </Loading>

        <Loading class="w-579px h-380px" :loading="loading2">
          <div class="box-border4">
            <client-only v-if="!loading2">
              <SwapRight
                :data_24h="this.dash_info.dash_list.swap_volumn_24h"
                :data_1w="this.dash_info.dash_list.swap_volumn_1w"
                :data_1m="this.dash_info.dash_list.swap_volumn_1m"
                :time_list_24h="getDayData(this.dash_info.dash_list.end_time)"
                :time_list_1w="getWeekData(this.dash_info.dash_list.end_time)"
                :time_list_1m="getMonthData(this.dash_info.dash_list.end_time)"
                :time="this.dash_info.dash_list.end_time"
              />
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
          <el-table :data="list" style="width: 100%" v-if="!loading2">
            <el-table-column prop="Collection" label="#" width="80px">
              <template slot-scope="scope">
                <div class="ml-30px">{{ scope.$index + 1 }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="Collection" label="Name" width="300px">
              <template slot-scope="scope">
                <div class="flex font-500 text-16px items-center">
                  <img
                    class="mr-10px"
                    src="@/assets/images/dashboard/pointer.svg"
                  />
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
import { initNftDash } from "~/config/dashboard";
import dayjs from "dayjs";
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
      network: "goerli",
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
      dash_info: [],
    };
  },
  async mounted() {
    this.dash_info = await initNftDash(this.network);
    console.log(this.dash_info);
    this.loading1 = false;
    setTimeout(() => {
      this.loading2 = false;
    }, 1000);
  },
  methods: {
    show(num) {
      if (num > 1000000000) {
        return (num / 1000000000).toFixed(2) + "B";
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(2) + "M";
      } else if (num > 1000) {
        return (num / 1000).toFixed(2) + "K";
      } else {
        return num;
      }
    },
    getMonthData(time) {
      const timeStamp =
        dayjs(time.replace("T", " ")).valueOf() - 3600 * 15 * 1000 * 39;
      const arr = [];
      for (let i = 0; i < 40; i++) {
        let time = dayjs(timeStamp + i * 3600 * 15 * 1000).format("M-D");
        arr.push(time);
      }
      return arr;
    },
    getDayData(time) {
      const timeStamp =
        dayjs(time.replace("T", " ")).valueOf() - 39 * 1800 * 1000;
      const arr = [];
      for (let i = 0; i < 40; i++) {
        let time = dayjs(timeStamp + i * 1800 * 1000).format("hh:mm A");
        arr.push(time);
      }
      return arr;
    },
    getWeekData(time) {
      const timeStamp =
        dayjs(time.replace("T", " ")).valueOf() - 39 * 3600 * 3 * 1000;
      const arr = [];
      for (let i = 0; i < 40; i++) {
        let time = dayjs(timeStamp + i * 3600 * 3 * 1000).format("M-D");
        arr.push(time);
      }
      return arr;
    },
  },
};
</script>
