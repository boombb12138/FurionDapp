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

.locked {
  opacity: 0.6;
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
        <div class="flex items-center type" :class="{ active: type == 3 }" @click="balance_ready ? type = 3 : type = 1">
          <img src="@/assets/images/mywallet/icon3s.svg" alt="" v-if="type == 3" />
          <img src="@/assets/images/mywallet/icon3.svg" alt="" v-else />
          <div>My Furion Token</div>
        </div>
      </div>
    </div>
    <Loader v-if="!ready && type === 1" />
    <div v-if="type === 1 && !ready && balance_ready" class="flex justify-center text-16px mt-40px opacity-80">
      Check your token balance at<span class="text-[#f181de]">&nbsp; My Furion Token &nbsp;</span> now!
    </div>
    <div v-if="(type == 1 || type == 2) && ready" class="pl-40px pb-100px clearfix">
      <div class="item" :class="{ locked: type === 2 }" v-for="(item, index) in filterNft" :key="index"
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

        <div class="h-36px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center rounded-bl-12px rounded-br-12px">
          <div v-if="type === 2" class="mx-auto flex items-center">
            <img src="@/assets/images/locked.png" class="w-14px h-16px mr-10px" />
            <p class="text-14px font-600 text-[#6D788A]">Locked Until {{ unixToDate(item.lock_info.release_time) }}</p>
          </div>
          <div class="flex justify-between w-1/1" v-else>
            <img src="@/assets/images/icon_eth.svg" />
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
    </div>

    <div v-if="type === 3" class="section">
      <div v-for="(item, index) in tokens" :key="index" class="form-item2">
        <div class="flex items-center">
          <img class="icon" :src=item.image />
          <p>{{ item.symbol }}</p>
        </div>
        <p>{{ formatNumber(item.balance, 3) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getAddress } from '@/utils/common/contractABI';
import { getSeparatePools, getAggregatePools } from '@/utils/common/poolAddress';
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
        { name: "Cool Cats", symbol: "COOL", address: getAddress()['CoolCats'] },
        { name: "World Of Women", symbol: "WOW", address: "0x436643Cb41F6B3Cb375aD87BC95833b460adD4a6" },
        { name: "Cryptoadz", symbol: "TOADZ", address: "0x7e357a7eE77872DdD51947f1550381BA0913920B" }
      ],
      tokens: [
        { symbol: "ETH", address: "", balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FUR", address: getAddress()['FurionToken'], balance: "", image: require("@/assets/images/liquidity/tokens/FUR.png") },
        { symbol: "F-COOL", address: getSeparatePools()['0']['address'], balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
        { symbol: "FFT-MIX", address: getAggregatePools()['0']['address'], balance: "", image: require("@/assets/images/liquidity/tokens/ETH.png") },
      ],
      searchKey: "",
      type: 1,
      balance_ready: false,
      ready: false,
    };
  },
  async mounted() {
    setTimeout(async () => {
      // console.log('Account info', this.account);
      await this.initBalance();
      this.balance_ready = true;
      await this.initUserNft();
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
