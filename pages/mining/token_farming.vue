<style lang="scss" scoped>
.title {
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.title2 {
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
  font-size: 20px;
}

.bar {
  width: 100%;
  background: rgba(252, 255, 253, 0.12);
  height: 52px;
  @apply flex items-center justify-center mb-40px;
}
</style>

<template>
  <div class="!w-full pb-100px">
    <div class="flex pt-60px justify-center mb-60px" v-if="!expanded">
      <div class="title mr-10px">Token Farming</div>
      <img src="@/assets/images/farming.svg" alt="" />
    </div>

    <div v-else class="bar">
      <div class="title2">Token Farming</div>
    </div>

    <div class="!w-1150px mx-auto">
      <el-table
        :data="list"
        ref="table"
        @cell-click="cell_click"
        class="custom w-1/1"
        @expand-change="expandChange"
      >
        <el-table-column prop="Pool" label="Pool" sortable width="230">
          <template slot-scope="scope">
            <div class="flex items-center py-10px">
              <div class="relative pl-15px flex-shrink-0">
                <img src="@/assets/images/token1.png" class="w-46px" />
              </div>
              <div class="relative -ml-12px flex-shrink-0 mr-12px">
                <img src="@/assets/images/token2.png" class="w-46px" />
              </div>
              <div>
                <Search-keyword
                  :keyword="query.key"
                  :text="scope.row.Pool"
                ></Search-keyword>
                <div class="text-13px font-300 mt-6px">×1.2</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column type="expand" width="-1">
          <template slot-scope="scope">
            <div>
              <div
                class="flex justify-between items-center mb-24px"
                style="border-bottom: 1px solid rgba(252, 255, 253, 0.1)"
              >
                <div class="w-1/2 font-700 text-18px flex items-center py-22px">
                  Manage Position
                </div>
                <div class="flex text-13px font-600">
                  <div class="mr-50px">My Liquidity: xxx</div>
                  <div>Rewards: xxxx</div>
                </div>
              </div>

              <div class="mb-24px flex justify-between">
                <div></div>
                <el-button
                  type="primary"
                  style="text-transform: initial"
                  class="!p-0 !w-180px !h-42px !font-900 !text-16px"
                >
                  HARVEST
                </el-button>
              </div>

              <div class="flex justify-between mb-15px">
                <div class="flex items-center">
                  <img
                    src="@/assets/images/mining/btn1s.svg"
                    class="cursor-pointer"
                    v-if="scope.row.type == 1"
                  />
                  <img
                    src="@/assets/images/mining/btn1.svg"
                    class="cursor-pointer"
                    v-else
                    @click="scope.row.type = 1"
                  />
                  <img
                    src="@/assets/images/mining/btn2s.svg"
                    class="cursor-pointer"
                    v-if="scope.row.type == 2"
                  />
                  <img
                    src="@/assets/images/mining/btn2.svg"
                    class="cursor-pointer"
                    v-else
                    @click="scope.row.type = 2"
                  />
                </div>
                <div>
                  <el-tag
                    class="w-48px mr-15px"
                    size="medium"
                    type="primary"
                    @click="percent_change(scope.row, 25)"
                  >
                    <span>25%</span>
                  </el-tag>
                  <el-tag
                    class="w-48px mr-15px"
                    size="medium"
                    @click="percent_change(scope.row, 50)"
                  >
                    <span>50%</span>
                  </el-tag>
                  <el-tag
                    class="w-48px mr-15px"
                    size="medium"
                    @click="percent_change(scope.row, 75)"
                  >
                    <span>75%</span>
                  </el-tag>
                  <el-tag
                    class="w-48px"
                    size="medium"
                    @click="percent_change(scope.row, 100)"
                  >
                    <span>100%</span>
                  </el-tag>
                </div>
              </div>

              <div class="relative mb-24px">
                <el-input-number
                  v-model="scope.row.num"
                  :precision="1"
                  :controls="false"
                  class="custom !w-1/1"
                  placeholder="0.0"
                ></el-input-number>
                <div
                  class="absolute right-0 center-y font-400 text-13px text-right leading-16px pr-24px"
                  style="color: rgba(252, 255, 253, 0.4)"
                >
                  <div class="mb-5px">LP Token</div>
                  <div>=$ 0</div>
                </div>
              </div>

              <el-slider
                v-model="scope.row.percent"
                :max="100"
                :format-tooltip="
                  (v) => {
                    return (v += '%');
                  }
                "
                :marks="{
                  25: '',
                  50: '',
                  75: '',
                }"
                @change="percent_change(scope.row)"
              ></el-slider>

              <div class="flex text-center font-700 text-14px text-[#86898C]">
                <div class="flex-1">25%</div>
                <div class="flex-1">50%</div>
                <div class="flex-1">75%</div>
                <div class="flex-1">100%</div>
              </div>

              <div class="mt-32px">
                <el-button plain class="w-1/1 !h-70px !text-18px">
                  ENTER AN AMOUNT
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="TVL" label="TVL" align="center"> </el-table-column>
        <el-table-column prop="Rewards" label="Rewards" align="center">
          <template slot-scope="scope">
            <div class="flex items-center justify-center">
              <div class="mr-15px">
                <img src="@/assets/images/mining/token.png" />
              </div>
              <div class="text-13px font-300">
                {{ scope.row.Rewards }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="APR" label="APR" align="center" width="200">
          <template slot-scope="scope">
            <div class="mb-5px">
              <span class="font-600 mr-6px">{{ scope.row.APR }}</span>
              <el-popover
                placement="bottom"
                title=""
                trigger="hover"
                :visible-arrow="false"
                popper-class="el-tip"
              >
                <div class="text-center text-[#0B1A3B]">
                  <div>text...</div>
                </div>
                <img
                  src="@/assets/images/liquidity/q.svg"
                  class="cursor-pointer w-15px"
                  slot="reference"
                />
              </el-popover>
            </div>
            <div class="font-400 text-13px">annualized</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/mining"]);
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
      searchKey: "",
      expanded: false,
      list: [
        {
          Pool: "BTC/ETH",
          Pool_Icon: require("@/assets/images/token.svg"),
          TVL: "$ 1,436,317",
          Rewards: "1.298 FUR / DAY",
          APR: "37.01%",
          switch: true,
          num: undefined,
          percent: 0,
          type: 1,
        },
        {
          Pool: "BTC/ETH",
          Pool_Icon: require("@/assets/images/token.svg"),
          TVL: "$ 1,436,317",
          Rewards: "1.298 FUR / DAY",
          APR: "37.01%",
          switch: true,
          num: undefined,
          percent: 0,
          type: 2,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    percent_change(item, n) {
      if (n) {
        item.percent = n;
      }
      item.num = (this.amount * item.percent) / 100;
    },
    cell_click(row) {
      this.$refs.table.toggleRowExpansion(row);
    },
    expandChange(row, rows) {
      this.expanded = rows.length;
    },
  },
};
</script>
