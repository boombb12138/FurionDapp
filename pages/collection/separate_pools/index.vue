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
    opacity: 0;
    transform: scale(0.3, 0.3);
  }

  &::after {
    @include psuedo-style;
    opacity: 0;
    border: 2px solid rgba(241, 129, 222, 0.8);
    transform: scale(1.2, 1.2);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.create-pool-button {
  text-align: center;
}

.tip {
  width: 600px;
  height: 35px;
  background: #36375e;
  opacity: 0.75;
  border-radius: 3px;
  @apply flex items-center justify-center;
}
</style>

<template>
  <div>
    <div class="pt-45px pb-100px">

      <div class="flex justify-between mb-45px">

        <!-- Toggle pool types -->
        <div class="flex">
          <div class="selected !w-270px mr-30px">SEPARATE POOLS</div>
          <div class="custom-btn !w-270px " @click="$router.push('/collection/aggregate_pools')">AGGREGATE POOLS</div>

          <!-- <div class="btn_border mr-30px">
            <el-button type="primary" class="!w-265px !h-56px">
              Separate pools
            </el-button>
          </div>

          <div class="btn_border" @click="$router.push('/collection/aggregate_pools/')">
            <el-button type="primary" class="!w-265px !h-56px" plain>
              Aggregate pools
            </el-button>
          </div> -->
        </div>
        <!-- Create pool button -->
        <div class="custom-btn !w-170px " @click="dialogVisible = true">+ ADD ASSET</div>
      </div>

      <div class="absolute center-x tip font-500">NOTE: Please just use Cool Cats for Test by now
      </div>
      <br /><br /><br />

      <!-- Modal box for creating separate pool -->
      <el-dialog title="NFT Contract Address:" :visible.sync="dialogVisible" width="600px" :close-on-click-modal="false"
        append-to-body>
        <div class="text-[#FCFFFD] absolute -top-240px text-center center-x">
          <div class="text-28px font-800 mb-30px">CREATE A POOL</div>
          <div class="text-18px whitespace-nowrap">
            Enter the address of the NFT contract and pay the TX fee, it will
            automatically create a pool to tokenize your NFTs.
          </div>
        </div>

        <el-input v-model="asset" placeholder="NFT contract address" class="asset"></el-input>
        <div class="create-pool-button">
          <br /><br />
          <el-button type="primary" class="!w-200px !h-56px" @click="createSeparatePool">
            <div class="relative -top-0px">
              <span class="text-20px"></span>
              CREATE
            </div>

          </el-button>
        </div>
      </el-dialog>

      <!-- Separate pool list -->
      <div class="loading-wrapper" id="loading-wrapper">
        <div class="loading la-ball-running-dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <el-table :data="nft_info.nft_list" style="width: 100%" @cell-click="viewCollection" v-if="this.ready">
        <el-table-column prop="collection" label="Collection" width="320px">
          <template slot-scope="scope">
            <div class="flex font-500 text-16px pl-30px items-center">
              <div class="w-30px">{{ scope.$index + 1 }}</div>
              <img :src="scope.row.avatar" v-if="scope.row.avatar" class="w-52px rounded-full" />
              <img src="@/assets/images/avatar0.png" v-else class="w-52px rounded-full" />

              <Search-keyword class="w-170px line-clamp-1 ml-10px" :keyword="$route.query.key"
                :text="scope.row.collection"></Search-keyword>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="volume" label="Volume" sortable width="150px">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ formatNumber(scope.row.volume) }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="_24h" label="24h%" align="center">
          <template slot-scope="scope">
            <div :class="{
              'text-[#5DB57D]': scope.row._24h.startsWith('+'),
              'text-[#D35D64]': scope.row._24h.startsWith('-'),
            }">
              {{ scope.row._24h }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="_7d" label="7d%" align="center">
          <template slot-scope="scope">
            <div :class="{
              'text-[#5DB57D]': scope.row._7d.startsWith('+'),
              'text-[#D35D64]': scope.row._7d.startsWith('-'),
            }">
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
        <el-table-column prop="owners" label="Owners" align="center"> <template slot-scope="scope">{{
        formatNumber(scope.row.owners)
        }}
          </template></el-table-column>
        <el-table-column prop="items" label="ltems" align="center">
          <template slot-scope="scope">{{ formatNumber(scope.row.items) }}
          </template>
        </el-table-column>

        <el-table-column prop="fXprice " label="F-X price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" />
              <div class="ml-5px">
                {{ scope.row.fXprice }}
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

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>

import {
  nft_info,
  initNftInfo,
  initPooledNftInfo
} from "@/config/collection/nft_info";

import { initSeparatePoolFactoryContract } from "@/config/collection/separate_pool";
import { mapState } from 'vuex';
import { getNftWeekPrice } from "@/api/nft_info";
import getCharts from "@/utils/getCharts";
import { _formatNumber, getTxURL } from "@/utils/common";
import $ from "jquery";
import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/collection"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
  },
  data() {
    return {
      network: 'goerli',
      dialogVisible: false,
      asset: "default text",
      nft_info: nft_info,
      option: {},
      ready: false,
      factoryContract: {},
      asset: "",
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    try{
      this.nft_info = await initPooledNftInfo(this.network);
      this.factoryContract = await initSeparatePoolFactoryContract();
    }catch(e){
      console.warn(e);
      this.nft_info.nft_list = [];
    }
    $(".loading-wrapper").fadeOut(500);
    this.ready = true;
  },

  methods: {
    formatNumber(value) {
      return _formatNumber(value);
    },
    viewCollection(row) {
      this.$router.push(`/collection/separate_pools/nft_pool?collection=${row.collection}`);
    },
    async alreadyCreated(nftAddress) {
      let existingPools = await this.factoryContract.contract.methods.getAllNfts().call();

      if(existingPools.includes(nftAddress)) {
        return true;
      }

      return false;
    },
    async createSeparatePool() {
      if (this.asset === "") {
        this.errorMessage("Please enter address of NFT");
        return
      }

      if(await this.alreadyCreated(this.asset)) {
        this.errorMessage("Pool already exists");
        return
      }

      openDialog(this.dialogue_info, [ProcessInfo.CREATE_SEPARATE_POOL]);
      let account = this.userInfo.userAddress;

      try {
        let tx_result = await this.factoryContract.contract.methods.createPool(this.asset).send({ from: account });
        this.successMessage(tx_result, 'Create pool succeeded');
      } catch (e) {
        this.errorMessage('Create pool failed');
        closeDialog(this.dialogue_info);
        return
      }

      closeDialog(this.dialogue_info);
      this.nft_info = await initPooledNftInfo(this.network);
      this.ready = true;
      this.dialogVisible = false;
    },
    successMessage(receipt, title) {
      const txURL = getTxURL(receipt.transactionHash);
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: txURL,
        type: 'success',
      });
    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: '',
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
