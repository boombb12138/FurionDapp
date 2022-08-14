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
              Aggregate pools
            </el-button>
          </div>
        </div>
        <div class="btn_border">
          <el-button type="primary" class="!w-170px !h-56px" @click="dialogVisible = true">
            <div class="relative -top-2px">
              <span class="text-20px">+</span>
              ADD ASSET
            </div>
          </el-button>
        </div>
      </div>

      <el-dialog title="NFT Contract Address:" :visible.sync="dialogVisible" width="600px" :close-on-click-modal="false"
        append-to-body>
        <div class="text-[#FCFFFD] absolute -top-240px text-center center-x">
          <div class="text-28px font-800 mb-30px">CREATE A POOL</div>
          <div class="text-18px whitespace-nowrap">
            Paste the address of the NFT contract and pay the TX fee, it will
            automatically create a pool to tokenize your NFTs.
          </div>
        </div>

        <el-input v-model="asset" placeholder="Paste Contract address" class="asset"></el-input>
      </el-dialog>


        <el-table-column prop="owners" label="Owners" align="center"> <template slot-scope="scope">{{
            formatNumber(scope.row.owners)
        }}
          </template></el-table-column>
        <el-table-column prop="items" label="ltems" align="center">
          <template slot-scope="scope">{{ formatNumber(scope.row.items) }}
          </template>
        </el-table-column>

        <el-table-column prop="FXprice " label="F-X price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.fXprice.toFixed(2) }}
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="last7Days" label="Last 7 Days" width="150px" align="center">
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



import {
  nft_info,
  initNftInfo
} from "@/config/nft_info";
import { getNftWeekPrice } from "@/api/nft_info";
import getCharts from "@/utils/getCharts";
import { _formatNumber } from "@/utils/common";

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
      nft_info: nft_info,
      option: {},
      ready: false,
    };
  },
  async mounted() {
    await initNftInfo(this.network);
    this.ready = true;
  },

  methods: {
    formatNumber(value) {
      return _formatNumber(value);
    },
    viewCollection(row) {
      this.$router.push(`/collection/separate_pools_item?collection=${row.collection}`);
    },
  },
};
</script>
