<style lang="scss" scoped>
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
</style>

<template>
  <div>
    <div class="pt-45px pb-100px">
      <div class="flex justify-between mb-45px">
        <div class="flex">
          <div class="btn_border mr-30px">
            <el-button type="primary" class="!w-265px !h-56px">
              Separate pools
            </el-button>
          </div>

          <div class="btn_border" @click="$router.push('/collection/aggregated_pools')">
            <el-button type="primary" class="!w-265px !h-56px" plain>
              Aggregated pools
            </el-button>
          </div>
        </div>
        <div class="btn_border">
          <el-button
            type="primary"
            class="!w-170px !h-56px"
            @click="dialogVisible = true"
          >
            <div class="relative -top-2px">
              <span class="text-20px">+</span>
              ADD ASSET
            </div>
          </el-button>
        </div>
      </div>

      <el-dialog
        title="NFT Contract Address:"
        :visible.sync="dialogVisible"
        width="600px"
        :close-on-click-modal="false"
        append-to-body
      >
        <div class="text-[#FCFFFD] absolute -top-240px text-center center-x">
          <div class="text-28px font-800 mb-30px">CREATE A POOL</div>
          <div class="text-18px whitespace-nowrap">
            Paste the address of the NFT contract and pay the TX fee, it will
            automatically create a pool to tokenize your NFTs.
          </div>
        </div>

        <el-input
          v-model="asset"
          placeholder="Paste Contract address"
          class="asset"
        ></el-input>
      </el-dialog>

      <el-table :data="list" style="width: 100%" @cell-click="item">
        <el-table-column prop="Collection" label="Collection" width="320px">
          <template slot-scope="scope">
            <div class="flex font-500 text-16px pl-30px items-center">
              <div class="w-30px">{{ scope.$index + 1 }}</div>
              <img
                :src="scope.row.Avatar"
                v-if="scope.row.Avatar"
                class="w-52px rounded-full"
              />
              <img src="@/assets/images/avatar0.png" v-else class="w-52px rounded-full" />

              <Search-keyword
                class="w-170px line-clamp-1 ml-10px"
                :keyword="$route.query.key"
                :text="scope.row.Collection"
              ></Search-keyword>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Volume" label="Volume" sortable width="150px">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.Volume }}
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
        <el-table-column prop="FloorPrice " label="Floor Price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.FloorPrice }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Owners" label="Owners"> </el-table-column>
        <el-table-column prop="ltems" label="ltems"> </el-table-column>

        <el-table-column prop="FXprice " label="F-X price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.FXprice }}
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="Last7Days" label="Last 7 Days" width="150px">
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

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/collection"]);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      dialogVisible: false,
      asset: "default text",
      list: [
        {
          id: 1,
          Collection: "Azuki",
          Avatar: require("@/assets/images/avatar.png"),
          Volume: "28,919,65",
          _24h: "+2.94%",
          _7d: "-47.56%",
          FloorPrice: "11.44",
          Owners: "5.4K",
          ltems: "10.0K",
          FXprice: "7.28",
          Last7Days: [
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
          Last7Days_type: 1,
        },
        {
          id: 2,
          Collection: "CLONEX-XTAKASHI11111",
          Avatar: "",
          Volume: "28,919,64",
          _24h: "+2.94%",
          _7d: "-47.56%",
          FloorPrice: "11.44",
          Owners: "5.4K",
          ltems: "10.0K",
          FXprice: "7.28",
          Last7Days: [
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
          Last7Days_type: 2,
        },
      ],
      option: {},
      ready: false,
    };
  },
  async mounted() {
    this.list = this.list.map((item) => {
      return {
        ...item,
        option: getCharts(item.Last7Days, item.Last7Days_type),
      };
    });
    this.ready = true;
  },

  methods: {
    item(row) {
      this.$router.push(`/collection/separate_pools_item?id=${row.id}`);
    },
  },
};
</script>
