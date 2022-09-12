<style lang="scss" scoped>
.item {
  width: 266px;
  height: 392px;
  background: rgba(23, 37, 72, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  float: left;
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

.type {
  font-weight: 500;
  font-size: 15px;
  color: #667181;
  cursor: pointer;

  img {
    margin-right: 10px;
  }

  &.active {
    color: #fff;
  }

  &+.type {
    margin-left: 35px;
  }
}

.lockBorder {
  border: 2px solid rgba(255, 255, 255, 0.6) !important;
}

.section {
  background: rgba(23, 37, 72, 0.6);
  border-radius: 12px;
  padding: 27px;
  padding-bottom: 3px;

  .form-item2 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(252, 255, 253, 0.8);
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 24px;

    .icon {
      @apply w-34px h-34px mr-14px;
    }
  }
}
</style>

<template>
  <div class="!w-1160px">
    <div class="px-30px mb-28px flex justify-between pt-36px">
      <el-input placeholder="search" v-model="searchKey" class="search !w-590px" clearable @input="">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>

      <div class="flex flex-1 items-center justify-end">
        <div class="flex items-center type" :class="{ active: type == 1 }" @click="type = 1; display_nft = wallet_nft;">
          <img src="@/assets/images/mywallet/icon1s.svg" alt="" v-if="type == 1" />
          <img src="@/assets/images/mywallet/icon1.svg" alt="" v-else />
          <div>My Wallet</div>
        </div>
        <div class="flex items-center type" :class="{ active: type == 2 }"
          @click="ready ? type = 2 : type = 1; display_nft = locked_nft;">
          <img src="@/assets/images/mywallet/icon2s.svg" alt="" v-if="type == 2" />
          <img src="@/assets/images/mywallet/icon2.svg" alt="" v-else />
          <div>Locked In Pool</div>
        </div>
        <div class="flex items-center type" :class="{ active: type == 3 }" @click="ready ? type = 3 : type = 1">
          <img src="@/assets/images/mywallet/icon3s.svg" alt="" v-if="type == 3" />
          <img src="@/assets/images/mywallet/icon3.svg" alt="" v-else />
          <div>My Furion Token</div>
        </div>
      </div>
    </div>
    <Loader v-if="ready === false" />
    <div v-if="(type == 1 || type == 2) && ready === true" class="pl-40px pb-100px clearfix">
      <div class="item" :class="{ lockBorder: type === 2 }" v-for="(item, index) in filterNft" :key="index"
        @click="$router.push(`/collection/separate_pools/detail?collection=${item.name}&token_id=${item.token_id}`)">
        <el-image :src="item.image_url" class="w-252px h-252px rounded-12px m-6px mb-16px" lazy>
          <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
        </el-image>
        <div class="px-15px">
          <div class="flex justify-between items-center mb-10px">
            <div>
              <div class="flex items-center mb-5px">
                <div class="opacity-40 text-13px w-170px line-clamp-1 overflow-ellipsis !block">
                  {{ item.name }}
                </div>
              </div>

              <div class="flex items-center justify-between text-13px">
                <div class="font-600 flex-1 mr-10px flex w-110px">
                  <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                    {{ item.symbol }}
                  </span>
                  <span class="flex-shrink-0">#{{ item.token_id }}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center font-600 text-13px">
              <img src="@/assets/images/icon_eth.svg" class="mr-5px" />
              <span>6.4838</span>
            </div>
          </div>
        </div>

        <div v-if="type === 2" class="px-15px font-400" style="color: rgb(241, 129, 222)">
          Locked until {{ unixToDate(item.lock_info.release_time) }}
        </div>

        <div
          class="h-36px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center justify-between rounded-bl-12px rounded-br-12px">
          <img src="@/assets/images/icon_eth.svg" />
          <span v-if="type === 2" style="color: rgba(255, 255, 255, 0.8)">LOCKED</span>
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

    <div v-if="type === 3" class="section">
      <div v-for="(item, index) in tokens" :key="index" class="form-item2">
        <div class="flex items-center">
          <img class="icon" src="@/assets/images/liquidity/tokens/ETH.png" />
          <p>{{ item.symbol }}</p>
        </div>
        <p>{{ formatNumber(item.balance, 3) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { query_user_holding } from '@/config/collection/separate_pool';
import { query_user_locked } from '@/config/user_info/locked_nft';
import { _formatNumber, getNativeTokenAmount, tokenBalance } from "@/utils/common";
import Loader from '@/components/Loader.vue';

export default {
  props: {},
  components: { Loader },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    account() {
      return this.userInfo.userAddress;
    },
    filterNft() {
      if (this.searchKey != "") {
        let filtered = [];

        for (let i = 0; i < this.display_nft.length; i++) {
          if (this.searchKey == this.display_nft[i].token_id) {
            filtered.push(this.display_nft[i]);
          }
        }

        return filtered;
      }

      return this.display_nft;
    }
  },
  data() {
    return {
      network: 'rinkeby',
      display_nft: [],
      wallet_nft: [],
      locked_nft: [],
      collections: [
        { name: "Cool Cats", symbol: "COOL", address: "0x1D788A3D8133F79a7D8cf2517c4b3C00C8DBbf82" },
        { name: "World Of Women", symbol: "WOW", address: "0x436643Cb41F6B3Cb375aD87BC95833b460adD4a6" },
        { name: "Cryptoadz", symbol: "TOADZ", address: "0x7e357a7eE77872DdD51947f1550381BA0913920B" }
      ],
      tokens: [
        { symbol: "ETH", address: "", balance: "" },
        { symbol: "FUR", address: "0x175940b39014cD3a9c87cd6b1d7616a097db958E", balance: "" },
        { symbol: "F-COOL", address: "0xEc5753503C317348d494C852DF64731D3D22d87d", balance: "" },
        { symbol: "FFT-MIX", address: "0x482dc963e587D68B2C7f49F71F21112D98528B52", balance: "" },
      ],
      searchKey: "",
      type: 1,
      ready: false,
    };
  },
  async mounted() {
    setTimeout(async () => {
      // console.log('Account info', this.account);
      await this.initUserNft();
      await this.initBalance();
      this.ready = true;
    }, 2000);

  },
  methods: {

    /*************************************** Utils ***************************************/

    formatNumber(value, fixed = 2) {
      let reserve = value - parseInt(value);
      let final_result;
      if (value - reserve < 1) {
        final_result = '0' + reserve.toFixed(fixed).toString().substr(1);
      } else {
        final_result = _formatNumber(value).split('.')[0] + reserve.toFixed(fixed).toString().substr(1);
      }
      if (final_result[0] == '-' || final_result[0] == 'N') {
        final_result = '--'
      }
      return final_result
    },
    unixToDate(unixInSeconds) {
      const milli = unixInSeconds * 1000;
      const date = new Date(milli).toLocaleString().split(',');
      return date[0];
    },

    /************************************ Init state ************************************/

    async initUserNft() {
      for (let collection of this.collections) {
        let wallet = await query_user_holding(collection.address.toLowerCase(), this.account, this.network);

        for (let i = 0; i < wallet.length; i++) {
          wallet[i].name = collection.name;
          wallet[i].symbol = collection.symbol;
        }

        this.wallet_nft = [...this.wallet_nft, ...wallet];
      }

      for (let collection of this.collections) {
        let locked = await query_user_locked(collection.address.toLowerCase(), this.account, this.network);

        for (let i = 0; i < locked.length; i++) {
          locked[i].name = collection.name;
          locked[i].symbol = collection.symbol;
        }

        this.locked_nft = [...this.locked_nft, ...locked];
      }

      this.display_nft = this.wallet_nft;
    },
    async initBalance() {
      for (let token of this.tokens) {
        if (token.symbol === "ETH") {
          token.balance = await getNativeTokenAmount(this.account);
        } else {
          token.balance = await tokenBalance(token.address, this.account);
        }
      }
    }
  },
};
</script>
