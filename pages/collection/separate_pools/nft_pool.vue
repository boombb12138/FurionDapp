<style lang="scss" scoped>
.avatar {
  border: 8px solid #01132e;
  transform: translateY(-56px);
}

.tag {
  background: rgba(250, 107, 225, 0.7);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0.6px #ffb7f3;
  border-radius: 8px;
  width: 200px;
  height: 34px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  @apply flex items-center justify-center;
}

.link {
  border: 0.8px solid rgba(255, 255, 255, 0.12);
  border-radius: 40px;
  padding: 12px 20px;
}

.item {
  width: 266px;
  height: 392px;
  background: rgba(23, 37, 72, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    .icon1 {
      display: block;
    }

    .icon2 {
      display: none;
    }

    &:hover {
      .icon2 {
        display: block;
      }

      .icon1 {
        display: none;
      }
    }
  }
}

.selectedBorder {
  border: 2px solid rgb(1, 182, 46) !important;
}
.lockBorder {
  border: 2px solid rgba(255, 255, 255, 0.6) !important;
}

.item-wallet {
  width: 195px;
  height: 225px;
  background: rgba(23, 37, 72, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    .icon1 {
      display: block;
    }

    .icon2 {
      display: none;
    }

    &:hover {
      .icon2 {
        display: block;
      }

      .icon1 {
        display: none;
      }
    }
  }
}

.sort {
  font-weight: 600;
  color: #a9acb0;
  border: 2.32687px solid #1a2a42;
  border-radius: 8px;
  width: 200px;
  height: 40px;
  @apply px-15px flex items-center justify-between cursor-pointer;

  i {
    margin-left: 10px;
  }
}

::v-deep {
  .el-scrollbar__bar.is-vertical {
    width: 11px;
    opacity: 1;
    background: transparent;

    >div {
      background: #edf2ff;
      box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.1),
        inset 0px -2px 6px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      outline: 3px solid rgba(56, 205, 209, 0.2);
      border: 2px solid #55e7ec;
    }
  }
}
</style>

<template>
  <div class="!w-1/1 pt-0">
    <img :src="ready ? separate_pool_info.banner_url : default_pool_info.banner_url"
      class="w-1/1 h-280px object-cover" />
    <img src="@/assets/images/icon_back.svg" class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
      @click="$router.go(-1)" />


    <div class="w-1124px mx-auto min-h-800px">

      <!-- banner and other basic information for this project -->
      <div class="px-20px">
        <div class="flex justify-between">
          <div class="pl-8px flex">
            <img :src="ready ? separate_pool_info.avatar : separate_pool_info.avatar"
              class="w-142px rounded-full avatar" />
            <div class="pt-10px pl-20px relative">
              <div class="font-700 text-24px mb-5px mr-5px">{{ formatString(separate_pool_info.collection, 20) }}</div>
              <div class="text-14px mt-10px">
                Created by
                <span class="text-[#34F8FF] font-600"> <a :href="separate_pool_info.external_link" target="_blank">{{
                    separate_pool_info.symbol
                }}</a></span>
                <el-tooltip effect="light" :content="separate_pool_info.description" placement="bottom">
                  <img src="@/assets/images/icon_badge.png" alt="" />
                </el-tooltip>

              </div>
            </div>
          </div>

          <div class="flex items-center h-94px">
            <div>
              <a :href="separate_pool_info.twitter_link" target="_blank" class="block link flex items-center mr-42px">
                <img src="@/assets/images/icon_link.png" class="mr-10px" />
                <div class="text-13px mr-5px">{{ formatString(separate_pool_info.twitter_name, 8) }}</div>
                <div class="text-13px opacity-60">Linked</div>
              </a>
            </div>

            <div class="text-center px-15px">
              <div class="font-600 mb-4px">{{ formatNumber(separate_pool_info.items) }}</div>
              <div class="opacity-40 text-12px">items</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">{{ formatNumber(separate_pool_info.in_pool.length) }}</div>
              <div class="opacity-40 text-12px">in pool</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">
                <img src="@/assets/images/icon_eth.svg" style="vertical-align: -2px" />
                {{ separate_pool_info.fXprice.toFixed(2) }}
              </div>
              <div class="opacity-40 text-12px">F-X price</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">
                <img src="@/assets/images/icon_eth.svg" style="vertical-align: -2px" />
                {{ formatNumber(separate_pool_info.volume) }}
              </div>
              <div class="opacity-40 text-12px">volume traded</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Rate collection, button to start store and lock -->
      <div class="-mt-20px">
        <div class="flex justify-between items-start mb-20px">
          <div>
            <div class="font-700 text-20px leading-38px">
              How much do you like this collection?
            </div>

            <div class="flex mt-12px items-center">
              <img src="@/assets/images/rate1.svg" class="mr-20px cursor-pointer" />
              <img src="@/assets/images/rate2.svg" class="mr-20px cursor-pointer" />
              <img src="@/assets/images/rate3.svg" class="mr-25px cursor-pointer" />
              <img src="@/assets/images/most.png" alt="" />
            </div>
          </div>
          <div class="btn_border">
            <el-button type="primary" :disabled="!ready" class="!w-170px !h-48px"
              @click="dialogVisible = true; initSelectedStyle();">
              <div class="relative -top-2px">
                <span class="text-20px">+</span>
                {{ ready ? "ADD ASSET" : "LOADING" }}
              </div>
            </el-button>
          </div>
        </div>

        <!-- search bar and item sorting -->
        <div class="flex justify-between items-center mb-12px">
          <el-input placeholder="Search by token ID" v-model="searchKey" class="search !w-858px" clearable
            @input="filterPool">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>

          <el-popover placement="bottom" title="" trigger="click" popper-class="el-sort" :visible-arrow="false"
            width="200" ref="sort">
            <div class="el-sort-item" @click="onSort('Recently listed')">
              Recently listed
            </div>
            <div class="el-sort-item" @click="onSort('Recently created')">
              Recently created
            </div>
            <div class="el-sort-item" @click="onSort('Recently sold')">Recently sold</div>
            <div class="el-sort-item" @click="onSort('Recently received')">
              Recently received
            </div>
            <div class="el-sort-item" @click="onSort('Ending soon')">Ending soon</div>
            <div class="el-sort-item" @click="onSort('Price low to high')">
              Price low to high
            </div>
            <div class="el-sort-item" @click="onSort('Price high to low')">
              Price high to low
            </div>
            <div class="el-sort-item" @click="onSort('Highest last sale')">
              Highest last sale
            </div>
            <div class="el-sort-item" @click="onSort('Most viewed')">Most viewed</div>
            <div class="el-sort-item" @click="onSort('Most favorited')">
              Most favorited
            </div>
            <div class="el-sort-item" @click="onSort('oldest')">Oldest</div>

            <div class="sort" slot="reference">
              <div>{{ sort }}</div>
              <i class="el-icon-arrow-down"></i>
            </div>
          </el-popover>
        </div>

        <!-- Filter checkboxes -->
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="ALL" @change="filterPool"></el-checkbox>
            <el-checkbox label="STORED" @change="filterPool"></el-checkbox>
            <el-checkbox label="LOCKED" @change="filterPool"></el-checkbox>
          </el-checkbox-group>
        </div>

        <!-- grid for NFT items -->
        <Loader v-if="ready === false" />
        <div class="pb-150px grid grid-cols-4 mt-20px" v-if="separate_pool_info.in_pool.length > 0 && ready === true">
          <div class="item" v-for="(item, index) in separate_pool_info.in_pool" :key="index" :class="{ lockBorder: item.lock_info.locker != zeroAddress }" @click="clickItem(item)">
            <!-- NFT image -->
            <el-image :src="item.image_url" class="w-252px h-252px rounded-12px m-6px mb-16px" lazy>
              <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
            </el-image>
            <div class="px-15px">
              <!-- Collection name and NFT price -->
              <div class="flex justify-between items-center mb-10px">
                <div class="opacity-40 text-13px w-180px line-clamp-1 overflow-ellipsis !block">
                  {{ separate_pool_info.collection }}
                </div>
                <div class="text-13px">
                  <img src="@/assets/images/icon_eth.svg" />
                  <span class="font-600">
                    {{ separate_pool_info.fXprice.toFixed(2) }}
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-between text-13px">
                <!-- NFT info -->
                <div class="font-600 flex-1 mr-10px flex w-110px">
                  <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                    {{ separate_pool_info.symbol }}
                  </span>
                  <span class="flex-shrink-0">#{{ item.token_id }}</span>
                </div>

                <!-- Add to cart button -->
                <div v-if="item.lock_info.locker === zeroAddress" class="btn2 mr-8px" @click.stop="toCart(item)">
                  <img src="@/assets/images/cart.png" class="icon mr-5px -mt-1px" />
                  <img src="@/assets/images/cart2.png" class="icon2 mr-5px -mt-1px" />
                  CART
                </div>

                <!-- Buy button -->
                <div v-if="item.lock_info.locker === zeroAddress" class="btn2" @click.stop="buy(item)">
                  <img src="@/assets/images/buy.png" class="icon mr-5px" />
                  <img src="@/assets/images/buy2.png" class="icon2 mr-5px" />
                  BUY
                </div>

                <!-- Extend lock period button -->
                <div v-if="item.lock_info.locker.toLowerCase() === account && item.lock_info.extended === false && item.lock_info.release_time > currentTimestamp" class="btn2 mr-8px" @click.stop="extend(item)">
                  EXTEND
                </div>

                <!-- Unlock button -->
                <div v-if="item.lock_info.locker.toLowerCase() === account && item.lock_info.release_time > currentTimestamp" class="btn2" @click.stop="unlock(item)">
                  UNLOCK
                </div>
              </div>
            </div>

            <div
              class="h-36px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center justify-between rounded-bl-12px rounded-br-12px">
              <img src="@/assets/images/icon_eth.svg" />
              <span v-if="item.lock_info.locker != zeroAddress" style="color: rgba(255, 255, 255, 0.8)">LOCKED</span>
              <div class="flex items-center">
                <div class="w-24px h-24px flex items-center justify-center rounded-full hover:bg-[#1F2E48] icon">
                  <img src="@/assets/images/Vector.svg" class="w-12px icon1" />
                  <img src="@/assets/images/Vector2.svg" class="w-12px icon2" />
                </div>
                <div class="opacity-40 text-13px">{{ item.like }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="separate_pool_info.in_pool.length === 0 && ready === true" class="font-700 text-24px text-center">
          <br /><br /><br />
          <img src="@/assets/images/pool/Empty.png" width="10%" />
          <br /><br />
        </div>
      </div>
    </div>

    <!-- Modal box for storing and locking NFTs -->
    <el-dialog title="NFT Contract Address:" :visible.sync="dialogVisible" width="880px" :close-on-click-modal="false"
      append-to-body custom-class="el-dialog-dark el-dialog-padding">
      <div slot="title" class="flex font-800 text-20px">
        <div class="pb-2px" style="border-bottom: 2px solid #fff">ADD ASSET</div>

        <el-popover placement="bottom" title="" trigger="hover" :visible-arrow="false" popper-class="el-tip">
          <div class="text-center text-[#0B1A3B]">
            <div class="text-20px font-600 mb-30px">
              Store to get 1000 and lock for 500.
            </div>
            <div class="font-900 text-20px">F-{{ separate_pool_info.symbol }} Token</div>
          </div>
          <img src="@/assets/images/q.svg" class="ml-14px cursor-pointer -mt-3px" slot="reference" />
        </el-popover>
      </div>

      <!-- Azuki examples -->
      <div class="min-h-250px max-h-425px h-65vh mb-35px">
        <el-scrollbar class="h-1/1">
          <!--
          <div class="grid grid-cols-3 gap-y-38px">
            <img src="@/assets/images/cover.png" class="w-218px h-218px rounded-12px" v-for="(item, index) in 9"
              :key="index" />
          </div>
          -->
          <div class="grid grid-cols-4 mt-10px mr-20px" v-if="user_nft.length > 0">
            <div class="item-wallet text-center" v-for="(item, index) in user_nft" :key="index"
              :class="{ selectedBorder: applySelectedStyle[index] }" @click="toList(item.token_id, index)">
              <!-- NFT image -->
              <el-image :src="item.image_url" class="w-181px h-181px rounded-12px mt-5px" lazy>
                <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
              </el-image>

              <div
                class="h-32px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center justify-between rounded-bl-12px rounded-br-12px font-600">
                <div class="flex">
                  <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                    {{ separate_pool_info.symbol }}
                  </span>
                  <span class="flex-shrink-0">#{{ item.token_id }}</span>
                </div>
                <img src="@/assets/images/icon_eth.svg" />
              </div>
            </div>
          </div>
          <div v-else class="text-center"><br /><br /><br /><br /><br /><br />
            <img src="@/assets/images/pool/Empty.png" width="15%" />
            <br /><br /><br />
          </div>
        </el-scrollbar>
      </div>

      <!-- Lock/Store buttons -->
      <div class="flex justify-between items-center pr-20px">
        <div></div>
        <div class="flex">
          <div class="btn_border mr-25px">
            <el-button plain class="!w-150px !h-50px !p-0" @click="lock()">LOCK</el-button>
          </div>
          <div class="btn_border">
            <el-button type="primary" class="!w-150px !h-50px !p-0" @click="store()">STORE</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  separate_pool_info, default_pool_info,
  initSeparatePoolInfo, initSeparatePoolContract, initFurContract,
  initTokenImage, defaultSeparatePoolInfo, query_user_holding
} from '@/config/collection/separate_pool';
import { getNftHoldingInfo } from '@/api/nft_info';
import {
  _formatString,
  _formatNumber,
  _compareInt
} from "@/utils/common";
import { nft_item } from '@/config/collection/nft_item';
import { getTxURL, toWei, fromWei, ALLOWANCE_THRESHOLD, tokenApprove } from '@/utils/common';
import { newMultiCallProvider } from "@/utils/web3/multicall";
import {
  nft_activity,
  initNftActivity,
  intoNftActivity,
  intoNftActivityByArray,
} from "@/config/collection/nft_activity";
import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';
import {
  user_info,
  inituserinfo,
  renew_user_email,
  renew_user_nick_name,
  renew_user_comment,
  renew_user_liquidation_alert,
  renew_user_hot_news
} from "@/config/user_info/profile";
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';
import Loader from '@/components/Loader.vue';

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/collection"]);
  },
  props: {},
  components: { ProceedingDetails, Loader },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    cart() {
      return this.$store.state.user.cart;
    },
    zeroAddress() {
      return '0x0000000000000000000000000000000000000000';
    },
    account() {
      return this.userInfo.userAddress;
    },
    currentTimestamp() {
      return Math.floor(Date.now() / 1000);
    }
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      collection: this.$route.query.collection,
      network: 'rinkeby',
      ready: false,
      dialogVisible: false,
      separate_pool_info: separate_pool_info,
      default_pool_info: default_pool_info,
      checkList: ['ALL'],
      user_info,
      searchKey: "",
      nft_item: nft_item,
      user_nft: [],
      sort: "Price low to high",
      poolContract: {},
      furContract: {},
      nftToPool: [],
      applySelectedStyle: [],
      multicall: multicall,
      dialogue_info: DialogInfo,
      approved_fur: true,
    };
  },
  async mounted() {
    this.ready = false;

    await initSeparatePoolInfo(this.collection, this.network);
    // this.separate_pool_info = separate_pool_info;
    // this.$forceUpdate();
    await initTokenImage(this.separate_pool_info, this.network);
    this.poolContract = await initSeparatePoolContract(this.separate_pool_info.nft_address);
    this.furContract = await initFurContract();
    await this.initUserInfo();
    this.user_info = await inituserinfo(this.network,this.userInfo.userAddress);
    await this.checkApproval();
    this.ready = true;
  },
  methods: {
    /******************************* Utility Functions *******************************/
    initSelectedStyle() {
      for (let i = 0; i < this.separate_pool_info.in_pool.length; i++) {
        this.$set(this.applySelectedStyle, i, false);
      }
      // console.log(this.applySelectedStyle);
    },
    formatString(value, len) {
      return _formatString(value, len);
    },
    formatNumber(value) {
      return _formatNumber(value);
    },
    search() {
      console.log(this.searchKey);
    },
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },

    /******************************* Initialize or Update states *******************************/
    async initUserInfo() {
      const account = this.userInfo.userAddress;
      this.user_nft = await query_user_holding(separate_pool_info.nft_address, account, this.network);
    },
    async filterPool() {
      const raw_in_pool = (await getNftHoldingInfo(this.separate_pool_info.nft_address, this.poolContract.address.toLowerCase(), this.network))['data']['data'];

      let original = []; 
      for (let i = 0; i < raw_in_pool.length; i++) {
        const id = raw_in_pool[i];
        const lockInfo = await this.poolContract.contract.methods.getLockInfo(id).call();
        original.push({
          token_id: id,
          image_url: require("@/assets/images/placeholder.png"),
          lock_info: {
            locker: lockInfo[0],
            extended: lockInfo[1],
            release_time: lockInfo[2]
          }
        })
      } 

      if (this.checkList.length == 1) {
        let temp = [];

        if (this.checkList[0] === "STORED") {
          for (let i = 0; i < original.length; i++) {
            if (original[i].lock_info.locker === this.zeroAddress) {
              temp.push(original[i]);
            }
          }
          original = temp;
        } else if (this.checkList[0] === "LOCKED") {
          for (let i = 0; i < original.length; i++) {
            if (original[i].lock_info.locker != this.zeroAddress) {
              temp.push(original[i]);
            }
          }
          original = temp;
        }
      }

      if (this.searchKey != "") {
        let temp = [];

        for (let i = 0; i < original.length; i++) {
          if (original[i].token_id == this.searchKey) {
            temp.push(original[i]);
          }
        }
        original = temp;
      }

      this.separate_pool_info.in_pool = original;
      await initTokenImage(this.separate_pool_info, this.network);
    },
    async refreshPool() {
      let raw_in_pool = (await getNftHoldingInfo(this.separate_pool_info.nft_address, this.poolContract.address.toLowerCase(), this.network))['data']['data'];

      let in_pool = [];
      for (let j = 0; j < raw_in_pool.length; j++) {
        const id = raw_in_pool[j];
        const lockInfo = await this.poolContract.contract.methods.getLockInfo(id).call();

        let single_record = {
          token_id: id,
          image_url: require("@/assets/images/placeholder.png"),
          lock_info: {
            locker: lockInfo[0],
            extended: lockInfo[1],
            release_time: lockInfo[2],
          }
        }
        in_pool.push(single_record);
      }

      this.separate_pool_info.in_pool = in_pool;
      await initTokenImage(this.separate_pool_info, this.network);
      await this.initUserInfo();
    },
    toCart(item) {
      let arr = [...this.cart, item.id];
      this.$store.commit("save", ["user.cart", arr, this]);
    },
    clickItem(item) {
      nft_item.collection = separate_pool_info.collection;
      nft_item.address = separate_pool_info.nft_address;
      nft_item.token_id = item.token_id;
      nft_item.symbol = separate_pool_info.symbol;
      nft_item.description = separate_pool_info.description;
      nft_item.external_link = separate_pool_info.external_link;
      nft_item.twitter_name = separate_pool_info.twitter_name;
      nft_item.twitter_link = separate_pool_info.twitter_link;
      nft_item.fXprice = separate_pool_info.fXprice;
      nft_item.image = item.image_url;

      // console.log('NFT item', nft_item);
      this.$router.push('/collection/separate_pools/detail?collection=' + separate_pool_info.collection + '&token_id=' + item.token_id);
    },
    toList(tokenId, tokenIndex) {
      const index = this.nftToPool.indexOf(tokenId);

      if (index > -1) {
        this.nftToPool.splice(index, 1);
      } else {
        this.nftToPool.push(tokenId);
      }
      this.$set(this.applySelectedStyle, tokenIndex, !this.applySelectedStyle[tokenIndex]);

      // console.log(this.applySelectedStyle);
    },

    /******************************* Balance & allowance checks *******************************/

    async checkApproval() {
      const account = this.userInfo.userAddress;
      let multicall_list = [
        this.furContract.contract.methods.allowance(account, this.poolContract.address),
      ];

      const result = await this.multicall.aggregate(multicall_list); // [fur allowance]
      if (_compareInt(result[0], toWei(ALLOWANCE_THRESHOLD)) == "smaller") {
        this.approved_fur = false;
      }
    },

    async hasEnoughFur(account, nftAmount, amountPerNft) {
      let hasEnough = false;

      let multicall_list = [
        this.furContract.contract.methods.balanceOf(account),
      ];
      const result = await this.multicall.aggregate(multicall_list); // [balance]

      const requiredAmount = toWei(amountPerNft * nftAmount);
      if (_compareInt(result[0], requiredAmount) != "smaller") {
        hasEnough = true;
      }

      return hasEnough;
    },
    async hasEnoughFx(account, amount) {
      let hasEnough = false;

      let multicall_list = [
        this.poolContract.contract.methods.balanceOf(account),
      ];
      const result = await this.multicall.aggregate(multicall_list); // [balance]

      // console.log('F-X balance', result);

      const requiredAmount = toWei(amount);
      if (_compareInt(result[0], requiredAmount) != "smaller") {
        hasEnough = true;
      }

      return hasEnough;
    },

    /*********************************** Contract functions ***********************************/

    /****************************************** Buy ******************************************/
    async buy(item) {
      const account = this.userInfo.userAddress;
      const checkFx = await this.hasEnoughFx(account, 1000);
      const checkFur = await this.hasEnoughFur(account, 1, 100);
      let tokenId = item.token_id;
      if (!checkFx) {
        this.errorMessage(`Insufficient F-${separate_pool_info.symbol} balance`);
        return;
      }
      if (!checkFur) {
        this.errorMessage("Insufficient FUR balance");
        return;
      }

      // initialize tx window
      let dialog_list = [];
      if (!this.approved_fur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.BUY_NFT);

      openDialog(this.dialogue_info, dialog_list);

      if (!this.approved_fur) {
        try {
          await tokenApprove(this.furContract.address, account, this.poolContract.address);
          stepDialog(this.dialogue_info);
          this.approved_fur = true;
        }
        catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          return
        }
      }

      try {
        let tx_result = await this.poolContract.contract.methods.buy(tokenId).send({ from: account });
        this.successMessage(tx_result, `Purchase ${this.separate_pool_info.symbol} #${tokenId} succeeded`);
        //put the message into the database when buy succeed
        let data = {
          network: this.network,
          project: this.separate_pool_info.collection,
          token_id: tokenId,
          address: separate_pool_info.nft_address,
          event: 'Redeem',
          event_type: 'success',
          eth_price: separate_pool_info.fXprice,
          from_user: this.poolContract.address,
          tx_hash: tx_result.transactionHash,
          to_user: account,
        };
        // console.log(data);
        intoNftActivity(data);

      } catch (e) {
        this.errorMessage(`Purchase ${this.separate_pool_info.symbol} #${tokenId} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      closeDialog(this.dialogue_info);
      setTimeout(() => this.refreshPool(), 3000);
    },

    /************************************* Store *************************************/

    async store() {
      if (this.nftToPool.length == 0) {
        this.errorMessage("No NFTs selected");
        return;
      }
      const account = this.userInfo.userAddress;
      const approvedForAll = await this.separate_pool_info.nft_contract.methods.isApprovedForAll(account, this.poolContract.address).call();

      // initialize tx window
      let dialog_list = [];
      if (!approvedForAll) {
        dialog_list.push(ProcessInfo.APPROVE_NFT);
      }
      dialog_list.push(ProcessInfo.STORE_NFT);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedForAll) {
        try {
          let approve_result = await this.separate_pool_info.nft_contract.methods.setApprovalForAll(this.poolContract.address, true).send({ from: account });
          this.successMessage(approve_result, 'Approval succeeded');
          stepDialog(this.dialogue_info);
        } catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          return
        }
      }

      try {
        let tx_result = await this.poolContract.contract.methods.sellBatch(this.nftToPool).send({ from: account });
        this.successMessage(tx_result, 'Store succeeded');
        // data into database
        let data = [];
        for (let i = 0; i < this.nftToPool.length; i++){
            data.push({
            project: this.separate_pool_info.collection,
            token_id: this.nftToPool[i],
            address: separate_pool_info.nft_address,
            event: 'Store',
            event_type: 'success',
            eth_price: separate_pool_info.fXprice,
            from_user: account,
            tx_hash: tx_result.transactionHash,
            to_user: this.poolContract.address,
          });
        }
        intoNftActivityByArray(this.network,data);
        this.nftToPool = [];


      } catch (e) {
        console.warn(e);
        this.errorMessage('Store failed');
      }

      closeDialog(this.dialogue_info);
      this.dialogVisible = false;
      setTimeout(() => this.refreshPool(), 3000);
    },

    /******************************************* Lock *******************************************/

    async lock() {
      const lockAmount = this.nftToPool.length;

      if (lockAmount == 0) {
        this.errorMessage("No NFTs selected");
        return;
      }

      const account = this.userInfo.userAddress;
      const checkFur = await this.hasEnoughFur(account, lockAmount, 150);

      if (!checkFur) {
        this.errorMessage("Insufficient FUR balance");
        return;
      }

      const approvedForAll = await this.separate_pool_info.nft_contract.methods.isApprovedForAll(account, this.poolContract.address).call();

      // initialize tx window
      let dialog_list = [];
      if (!approvedForAll) {
        dialog_list.push(ProcessInfo.APPROVE_NFT);
      }
      if (!this.approved_fur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.LOCK_NFT);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedForAll) {
        try {
          let approve_result = await this.separate_pool_info.nft_contract.methods.setApprovalForAll(this.poolContract.address, true).send({ from: account });
          this.successMessage(approve_result, 'Approval succeeded');

          stepDialog(this.dialogue_info);
        } catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          return
        }
      }

      if (!this.approved_fur) {
        try {
          await tokenApprove(this.furContract.address, account, this.poolContract.address);
          stepDialog(this.dialogue_info);
          this.approved_fur = true;
        }
        catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          return
        }
      }

      try {
        let tx_result = await this.poolContract.contract.methods.lockBatch(this.nftToPool).send({ from: account });
        this.successMessage(tx_result, 'Lock succeeded');
        // data into database
        let data = [];
        for (let i = 0; i < this.nftToPool.length; i++){
            data.push({
            project: this.separate_pool_info.collection,
            token_id: this.nftToPool[i],
            address: separate_pool_info.nft_address,
            event: 'Lock',
            event_type: 'success',
            eth_price: separate_pool_info.fXprice,
            from_user: account,
            tx_hash: tx_result.transactionHash,
            to_user: this.poolContract.address,
          });
        }
        intoNftActivityByArray(this.network,data);
        this.nftToPool = [];
      } catch (e) {
        this.errorMessage('Lock failed');
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialogVisible = false;
      setTimeout(() => this.refreshPool(), 3000);
    },

    /*********************************** Unlock ***********************************/
    
    async unlock(item) {
      const checkFx = await this.hasEnoughFx(this.account, 1, 500);
      let tokenId = item.token_id;

      if (!checkFx) {
        this.errorMessage(`Insufficient F-${separate_pool_info.symbol} balance`);
        return;
      }

      const dialog_list = [ProcessInfo.UNLOCK_NFT];
      openDialog(this.dialogue_info, dialog_list);

      try {
        let tx_result = await this.poolContract.contract.methods.redeem(tokenId).send({ from: this.account });
        this.successMessage(tx_result, `Unlock ${this.separate_pool_info.symbol} #${tokenId} succeeded`);
      } catch (e) {
        this.errorMessage(`Unlock ${this.separate_pool_info.symbol} #${tokenId} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      closeDialog(this.dialogue_info);
      setTimeout(() => this.refreshPool(), 3000);
    },

    /*************************** Extend locking period ***************************/

    async extend(item) {
      const checkFur = await this.hasEnoughFur(this.account, 1, 150);
      let tokenId = item.token_id;

      if (!checkFur) {
        this.errorMessage(`Insufficient FUR balance`);
        return;
      }

      let dialog_list = [];
      if (!this.approved_fur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.EXTEND_LOCK_PERIOD);
      openDialog(this.dialogue_info, dialog_list);

      try {
        let tx_result = await this.poolContract.contract.methods.payFee(tokenId).send({ from: this.account });
        this.successMessage(tx_result, `Extend locking ${this.separate_pool_info.symbol} #${tokenId} succeeded`);
      } catch (e) {
        this.errorMessage(`Extend locking ${this.separate_pool_info.symbol} #${tokenId} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      closeDialog(this.dialogue_info);
      setTimeout(() => this.refreshPool(), 3000);
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
