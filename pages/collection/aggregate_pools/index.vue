<style lang="scss" scoped>
.page-enter-active, .page-leave-active {
  transition: all 0.7s ease-out;
}
.page-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.page-leave-to {
  transform: translateX(50px);
  opacity: 0;
}

.asset ::v-deep .el-input__inner {
  background: rgba(237, 242, 255, 0.6);
  box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.1), inset 0px -2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  text-align: center;
  color: rgba(11, 26, 59, 0.8);
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 500;
  &:focus {
    background: #edf2ff;
    border: 2px solid #55e7ec;
  }
}

@mixin btn-style {
  font-size: 16px;
  font-weight: 700;
  text-shadow: 0 1px 0px rgb(1, 19, 46, 0.8);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  line-height: 62px;
  height: 62px;
  text-align: center;
  width: 180px;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
}
@mixin psuedo-style {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  transition: all 0.3s;
}
.selected {
  @include btn-style;
  color: #02193a;
  background-color: #f182de;
  border-radius: 10px;
}
.custom-btn {
  @include btn-style;
  color: #f181de;

  &::before {
    @include psuedo-style;
    background-color: rgba(241, 129, 222, 0.1);
  }

  &:hover::before {
    opacity: 0 ;
    transform: scale(0.3,0.3);
  }

  &::after {
    @include psuedo-style;
    opacity: 0;
    border: 2px solid rgba(241, 129, 222, 0.8);
    transform: scale(1.2,1.2);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1,1);
  }
}
</style>

<template>
  <div>
    <div class="pt-45px pb-100px">
      <div class="flex justify-between mb-45px">
        <div class="flex">
          <div class="custom-btn !w-270px mr-30px"  @click="$router.push('/collection/separate_pools')">SEPARATE POOLS</div>
          <div class="selected !w-270px">AGGREGATE POOLS</div>
          <!--div
            class="btn_border mr-30px"
            @click="$router.push('/collection/separate_pools')"
          >
            <el-button type="primary" class="!w-265px !h-56px" plain>
              Separate pools
            </el-button>
          </div>

          <div class="btn_border">
            <el-button type="primary" class="!w-265px !h-56px">
              Aggregate pools
            </el-button>
          </div-->
        </div>
      </div>

      <!-- Pool list -->

      <div class="loading-wrapper" id="loading-wrapper">
        <div class="loading la-ball-running-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <el-table
        :data="list"
        style="width: 100%"
        @cell-click="item"
        @cell-mouse-enter="enter"
        @cell-mouse-leave="leave"
        ref="table" 
        v-if="ready" 
      >
        <el-table-column prop="name" label="Pool Name" width="320px">
          <template slot-scope="scope">
            <div class="flex font-500 text-16px pl-30px items-center">
              <div class="w-30px">{{ scope.$index + 1 }}</div>
              <img
                :src="scope.row.avatar"
                v-if="scope.row.avatar"
                class="w-52px rounded-full"
              />
              <img src="@/assets/images/avatar0.png" v-else class="w-52px rounded-full" />

              <Search-keyword
                class="w-170px line-clamp-1 ml-10px cursor-pointer"
                :keyword="$route.query.key"
                :text="scope.row.name"
              ></Search-keyword>
            </div>
          </template>
        </el-table-column>

        <el-table-column type="expand" width="-1">
          <template slot-scope="props">
            <div class="px-20px py-8px text-[#CCCCCC]">
              <!--div class="flex mb-24px text-18px font-500">Collections:</div-->

              <div class="flex justify-evenly">
                <div v-for="item in props.row.collections" class="flex items-center mr-40px">
                  <img :src="item.avatar" class="mr-15px rounded-full w-50px" />
                  <div class="text-center leading-22px font-400  text-16px">
                    {{ item.staked }}<br><span class="!font-700">{{ item.symbol }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="volume" label="Volume" sortable width="150px">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.volume }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="_24h" label="24h%">
          <template slot-scope="scope">
            <div
              :class="{
                'text-[#5DB57D]': scope.row._24h.startsWith('+'),
                'text-[#D35D64]': scope.row._24h.startsWith('-'),
              }"
            >
              {{ scope.row._24h }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="_7d" label="7d%">
          <template slot-scope="scope">
            <div
              :class="{
                'text-[#5DB57D]': scope.row._7d.startsWith('+'),
                'text-[#D35D64]': scope.row._7d.startsWith('-'),
              }"
            >
              {{ scope.row._7d }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="floor_price" label="Floor Price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.floor_price }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="owners" label="Owners"> </el-table-column>
        <el-table-column prop="items" label="Items"> </el-table-column>

        <el-table-column prop="fx_price " label="F-X price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.fx_price }}
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="last_7d" label="Last 7 Days" width="150px">
          <template slot-scope="scope">
            <div>
              <client-only>
                <v-chart class="w-120px h-40px" :option="scope.row.option" v-if="ready" />
              </client-only>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import getCharts from "@/utils/getCharts";
import { initAvatars } from '@/config/collection/aggregate_pools';
import $ from "jquery";
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/collection"]);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      network: 'goerli',
      dialogVisible: false,
      asset: "default text",
      list: [
        {
          id: 1,
          name: "Cool Cats",
          avatar: require("@/assets/images/merged.gif"),
          volume: "28,919,65",
          _24h: "+2.94%",
          _7d: "-47.56%",
          floor_price: "11.44",
          owners: "5.4K",
          items: "10.0K",
          fx_price: "7.28",
          last_7d: [
            "10",
            "22",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
            "10",
            "22",
            "10",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
          ],
          last_7d_type: 1,
          collections: [
            {
              name: "Cryptoadz",
              symbol: "F-TOADZ",
              avatar: require("@/assets/images/avatar.png"),
              staked: "1000"
            },
            {
              name: "Cool Cats",
              symbol: "F-COOL",
              avatar: require("@/assets/images/avatar.png"),
              staked: "1500"
            },
            {
              name: "World Of Women",
              symbol: "F-WOW",
              avatar: require("@/assets/images/avatar.png"),
              staked: "2000"
            },
            {
              name: "PudgyPenguins",
              symbol: "F-PPG",
              avatar: require("@/assets/images/avatar.png"),
              staked: "2500"
            },
            {
              name: "Invisible Friends",
              symbol: "F-INVSBLE",
              avatar: require("@/assets/images/avatar.png"),
              staked: "3000"
            },
            {
              name: "CryptoDickbutts S3",
              symbol: "F-CDB",
              avatar: require("@/assets/images/avatar.png"),
              staked: "3500"
            },
          ]
        },
        // {
        //   id: 1,
        //   name: "The Animals",
        //   avatar: require("@/assets/images/animals.gif"),
        //   volume: "28,919,65",
        //   _24h: "+2.94%",
        //   _7d: "-47.56%",
        //   floor_price: "11.44",
        //   owners: "5.4K",
        //   items: "10.0K",
        //   fx_price: "7.28",
        //   last_7d: [
        //     "10",
        //     "22",
        //     "50",
        //     "13",
        //     "31",
        //     "15",
        //     "0",
        //     "22",
        //     "10",
        //     "22",
        //     "10",
        //     "50",
        //     "13",
        //     "31",
        //     "15",
        //     "0",
        //     "22",
        //   ],
        //   last_7d_type: 1,
        //   collections: [
        //     {
        //       name: "Cryptoadz",
        //       symbol: "F-TOADZ",
        //       avatar: require("@/assets/images/avatar.png"),
        //       staked: "1000"
        //     },
        //     {
        //       name: "Cool Cats",
        //       symbol: "F-COOL",
        //       avatar: require("@/assets/images/avatar.png"),
        //       staked: "1500"
        //     },
        //     {
        //       name: "PudgyPenguins",
        //       symbol: "F-PPG",
        //       avatar: require("@/assets/images/avatar.png"),
        //       staked: "2000"
        //     },
        //   ]
        // },
      ],
      option: {},
      ready: false,
    };
  },
  async mounted() {
    this.list = this.list.map((item) => {
      return {
        ...item,
        option: getCharts(item.last_7d, item.last_7d_type),
      };
    });
    await initAvatars(this.list, this.network);
    $(".loading-wrapper").fadeOut(500);
    this.ready = true;
  },

  methods: {
    item(row) {
      this.$router.push(`/collection/aggregate_pools/aggregated_pool?name=${row.name}`);
    },
    enter(row) {
      setTimeout(()=>{
        this.$refs.table.toggleRowExpansion(row, true);
      }, 200);
    },
    leave(row) {
      this.$refs.table.toggleRowExpansion(row, false);
    },
  },
};
</script>
