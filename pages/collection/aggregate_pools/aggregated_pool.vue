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
  width: 350px;
  height: 475px;
  background: rgba(23, 37, 72, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  //cursor: pointer;
  box-sizing: border-box;
  position: relative;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

    /*
    .el-image {
      transition: all 0.3s;
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    }
    */
    .staked-data {
      font-size: 17px;
      opacity: 0.7;
    }
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

    > div {
      background: #edf2ff;
      box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.1),
        inset 0px -2px 6px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      outline: 3px solid rgba(56, 205, 209, 0.2);
      border: 2px solid #55e7ec;
    }
  }
}

.filter {
  background: #1a2a42;
  border-radius: 10px;
  border: none;
  padding: 20px 56px;
  .popper__arrow {
    border: none;
  }
  .popper__arrow::after {
    border-bottom-color: #1a2a42 !important;
  }

  .filter-item {
    border: 2px solid #4b596f;
    border-radius: 8px;
    width: 80px;
    height: 26px;
    font-weight: 600;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    line-height: 1;
    @apply flex justify-center items-center;
    &.active {
      color: #02193a !important;
      background: #fa6be1 !important;
      border: none !important;
      text-shadow: none;
      font-weight: 800;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.4),
        inset 0px 1px 0.6px #ffb7f3;
    }
    &:hover {
      border: 2px solid #fa6be1;
      color: #fa6be1;
    }
  }
}

.collection-name {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 20px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 70px;
  height: 252px;
  padding-top: 8px;
  letter-spacing: 1.5px;
  color: white;
  position: relative;
}

.collection-symbol {
  font-size: 21px;
  font-weight: 800;
  color: #f181de !important;
}

.staked-data {
   margin-top: 20px;
   margin-bottom: 18px;
   font-size: 16px;
   line-height: 20px;
   font-weight: 500;
   opacity: 0.5;
   transition: all 0.5s;
}

@mixin btn-style {
  font-size: 14px;
  font-weight: 500;
  text-shadow: 0 1px 0px rgb(1, 19, 46, 0.8);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  line-height: 40px;
  height: 40px;
  text-align: center;
  width: 320px;
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

.line {
  display: inline-block;
  position: relative;
  color: rgba(255, 255, 253, 0.9);

  
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: rgba(255, 255, 253, 0.9);
    visibility: hidden;
    transform: scaleX(0);
    animation: expand 0.4s ease-out 0.25s forwards; 
    //transition: all .5s ease-out;
  }
}
@keyframes expand {
  to {
    visibility: visible;
    transform: scaleX(1);
  }
}

.input-window {
  background: #011129;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fcfffd;
  @apply p-25px pr-30px pl-30px relative;
}
.box-input {
    &::v-deep {
      .el-input__inner {
        height: 45px;
        width: 220px;
        background: #011129;
        border: none;
        color: #fcfffd;
        font-size: 32px;
        font-weight: 500;
        text-align: left;
        padding: 0px;
        margin-right: 15px;

        &::-webkit-input-placeholder {
          color: rgba(252,255,253,0.6) !important;
        }
      }
    }
}
::v-deep {
  .el-switch {
    height: 26px;
    line-height: 26px;
  }
  .el-switch .el-switch__core::after {
    height: 21px;
    width: 21px;
    top: 3px;
    color: rgba(5, 27, 61, 0.6);
    @apply flex items-center justify-center;
    background-image: url("~@/assets/images/switch.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .el-switch .el-switch__core {
    width: 48px !important;
  }
  .el-switch.is-checked .el-switch__core::after {
    left: calc(100% - 24px) !important;
    margin-left: 0 !important;
    background-image: none;
  }
}
.pulse-text {
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #f181de;
  margin-right: 13px;
  animation: pulseText 1.2s ease-in-out infinite alternate;
}
@keyframes pulseText {
  from {
    text-shadow: 0 0 0 #f181de;
  }
  to {
    text-shadow: 0 0 8px #f181de;
  }
}
</style>

<template>
  <div class="!w-1/1 pt-0">
    <img src="@/assets/images/mixed_back.jpg" class="w-1/1 h-280px object-cover" />
    <img
      src="@/assets/images/icon_back.svg"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
      @click="$router.go(-1)"
    />
    <div class="w-1124px mx-auto">
      <div class="px-20px">
        <div class="flex justify-between">
          <div class="pl-8px flex">
            <img :src="pool_info.avatar" class="w-142px rounded-full avatar" />
            <div class="pt-10px pl-20px flex relative">
              <div class="font-700 text-28px top-50px mr-5px"></div>

              <div class="absolute left-0 top-30px left-20px">
                <div class="font-700 text-28px top-50px mr-5px">{{ poolName }}</div>
                <!-- <div class="tag">
                  <div>FFT-A :</div>
                  <img
                    src="@/assets/images/icon_eth.svg"
                    width="18"
                    class="mx-10px -mt-2px"
                  />
                  <div>0.04</div>
                </div> -->
              </div>
            </div>
          </div>
          <div class="flex items-center h-94px">
            <!--div>
              <a href="/" class="block link flex items-center mr-42px">
                <img src="@/assets/images/icon_link.png" class="mr-10px" />
                <div class="text-13px mr-5px">AzukiZen</div>
                <div class="text-13px opacity-60">Linked</div>
              </a>
            </div-->

            <div class="text-center px-15px">
              <div class="font-600 mb-4px">3</div>
              <div class="opacity-40 text-12px">Collections</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">10.0K</div>
              <div class="opacity-40 text-12px">Owners</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">
                <img src="@/assets/images/icon_eth.svg" style="vertical-align: -2px" />
                0.04
              </div>
              <div class="opacity-40 text-12px">FFT-{{poolName}} Price</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">
                <img src="@/assets/images/icon_eth.svg" style="vertical-align: -2px" />
                115.0K
              </div>
              <div class="opacity-40 text-12px">Volume Traded</div>
            </div>
          </div>
        </div>
      </div>

      <div class="-mt-20px">
        <div class="flex justify-between items-center mb-12px">
          <el-input
            placeholder="Search by NFT name or address"
            v-model="searchKey"
            class="search !w-858px"
            clearable
            @input="search"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <!--div class="btn_border">
            <el-button
              type="primary"
              class="!w-170px !h-48px"
              @click="dialogVisible = true"
            >
              <div class="relative -top-2px">
                <span class="text-20px">+</span>
                ADD ASSET
              </div>
            </el-button>
          </div-->
        </div>

        <div class="flex items-center justify-between">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="ALL"></el-checkbox>
          </el-checkbox-group>

          <div class="pr-5px">
            <img
              src="@/assets/images/filter2.svg"
              alt=""
              v-if="showFilter"
              class="cursor-pointer"
              @click="showFilter = false"
            />
            <img
              src="@/assets/images/filter.svg"
              alt=""
              v-else
              class="cursor-pointer"
              @click="showFilter = true"
            />
          </div>
        </div>

        <!-- filter name -->
        <transition name="el-zoom-in-top">
          <div class="mt-12px relative" v-if="showFilter">
            <div class="el-popover el-popper !static filter" x-placement="bottom">
              <img
                src="@/assets/images/arrow_up.svg"
                class="absolute right-18px bottom-20px cursor-pointer"
                @click="showFilter = false"
              />
              <div class="grid grid-cols-11 gap-y-10px">
                <div
                  class="filter-item"
                  :class="{ active: !filter.length }"
                  @click="filter = []"
                >
                  ALL
                </div>
                <div
                  class="filter-item"
                  v-for="n in pool_info.collections"
                  @click="add(n)"
                  :class="{ active: filter.includes(n) }"
                >
                  {{n.symbol}}
                </div>
              </div>
              <div class="popper__arrow" style="right: 15px; top: -6px; left: auto"></div>
            </div>
          </div>
        </transition>

        <!-- Collections in pool -->

        <div class="pb-150px grid grid-cols-3 gap-30px mt-20px">
          <div
            class="item"
            v-for="(item, index) in pool_info.collections"
            :key="index"
          >
            <div class="flex justify-between w-350px px-15px pt-15px">
              <el-image
                :src="item.image_url"
                class="w-252px h-252px rounded-12px"
                lazy
              >
                <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
              </el-image>

              <div class="collection-name cursor-pointer">
                <span>{{ item.name }}</span><span class="collection-symbol">F-{{ item.symbol }}</span>
              </div>
            </div>
            <div class="px-15px">
              <div class="staked-data">In pool: {{ pool_info.in_pool.length == 0 ? "0.00" : displayFormat(pool_info.in_pool[index], 18, 0) }} F-{{ item.symbol }}</div>
              <div class="custom-btn mb-18px" @click="dialogVisible = true; collection_to_interact = item; action='STAKE'">STAKE</div>
              <div class="custom-btn" @click="dialogVisible = true; collection_to_interact = item; action='UNSTAKE'">UNSTAKE</div>
            </div>

            <div
              class="h-36px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center justify-between rounded-bl-12px rounded-br-12px"
            >
              <img src="@/assets/images/icon_eth.svg" />
              <div class="flex items-center">
                <div
                  class="w-24px h-24px flex items-center justify-center rounded-full hover:bg-[#1F2E48] icon cursor-pointer"
                >
                  <img src="@/assets/images/Vector.svg" class="w-12px icon1" />
                  <img src="@/assets/images/Vector2.svg" class="w-12px icon2" />
                </div>
                <div class="opacity-40 text-13px">{{ item.like }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="NFT Contract Address:"
      :visible.sync="dialogVisible"
      width="720px"
      :close-on-click-modal="true"
      append-to-body
      custom-class="el-dialog-dark"
      @close="stake_unstake_amount = ''; max_amount = false;"
    >
      <div slot="title" class="flex font-800 text-28px">
        <div class="pb-2px line" style="word-spacing: 10px;">{{ action }} F-{{ collection_to_interact.symbol }}</div>
      </div>

      <div class="input-window mb-25px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img :src="collection_to_interact.image_url" class="w-40px mr-15px rounded-full" />
            <div class="font-600 text-22px">F-{{ collection_to_interact.symbol }}</div>
          </div>
          <div class="flex items-center">
            <div class="pulse-text">{{ action }} ALL</div>
            <el-switch v-model="max_amount" class="mr-15px" @change="writeMaxAmount()"> </el-switch>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <el-input class="box-input" placeholder="0.0" v-model="stake_unstake_amount" type="number"></el-input>
          </div>
          <div class="text-16px text-[rgba(252,255,253,0.6)]">Balance: {{ getBalance() }}</div>
        </div>
      </div>

      <div class="btn_border">
        <el-button type="primary" class="!w-full !h-60px" @click="action === 'STAKE' ? stake(stake_unstake_amount) : unstake(stake_unstake_amount)" :disabled="disableBtn">
          <span class="font-800 text-20px" style="word-spacing: 5px">{{ action }} F-{{ collection_to_interact.symbol }}</span>
        </el-button>
      </div>
    </el-dialog>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { _formatNumber, _compareInt, getTxURL, toWei, fromWei, tokenApprove } from "@/utils/common";
import { user_info_default, pool_info_default, initPoolInfo, initAPoolContract, initFurContract } from '@/config/collection/aggregate_pools';
import { newMultiCallProvider } from "@/utils/web3/multicall";

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
    cart() {
      return this.$store.state.user.cart;
    },
    poolName() {
      return this.$route.query.name;
    },
    disableBtn() { // Disable button by default
      if (this.stake_unstake_amount === "") {
        return true;
      }

      const amount = toWei(parseFloat(this.stake_unstake_amount).toString());
      const index = this.collection_to_interact.id;

      if (this.action === "STAKE") {
        if (
          _compareInt(this.user_info.ftoken_balance[index], amount) != "smaller" && 
          _compareInt(this.user_info.fur_balance, this.pool_info.stake_fee) != "smaller"
        ) {
          return false;
        }
      }

      if (this.action === "UNSTAKE") {
        if (
          _compareInt(this.user_info.fft_balance, amount) != "smaller" &&
          _compareInt(this.user_info.fur_balance, this.pool_info.unstake_fee) != "smaller"
        ) {
          return false;
        }
      }

      return true;
    },
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      dialogVisible: false,
      checkList: [],
      searchKey: "",
      sort: "Price low to high",
      filter: [],
      showFilter: false,
      pool_info: pool_info_default,
      user_info: user_info_default,
      pool: {}, // Aggregate pool contract
      fur: {}, // FUR contract instance and address
      collection_to_interact: {}, // Collection object to interact with
      action: '',
      stake_unstake_amount: '',
      max_amount: false,
      multicall: multicall,
      dialogue_info: DialogInfo,
    };
  },
  async mounted() {
    this.pool_info = await initPoolInfo(this.poolName);
    this.pool = await initAPoolContract(this.pool_info.address);
    this.fur = await initFurContract();

    await this.updateUserInfo();
    await this.poolInfoFromContract();
  },
  methods: {
    /********************************** Utils **********************************/

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
    displayFormat(amount, decimal = 18, fixed = 2) {
      return this.formatNumber(fromWei(amount, decimal), fixed);
    },
    search() {
      console.log(this.searchKey);
    },
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },
    add(n) {
      let i = this.filter.findIndex((item) => item == n);
      if (i == -1) {
        this.filter.push(n);
      } else {
        this.filter.splice(i, 1);
      }
    },
    getBalance() {
      const account = this.userInfo.userAddress;
      const index = this.collection_to_interact.id;
      let balance;

      if (this.action === "STAKE") {
        balance = this.displayFormat(this.user_info.ftoken_balance[index]);
        return balance + ` F-${this.collection_to_interact.symbol}`;
      }

      if (this.action === "UNSTAKE") {
        balance = this.displayFormat(this.user_info.fft_balance);
        return balance + ` FFT-${this.pool_info.symbol}`;
      }

      return "0.00";
    },
    async writeMaxAmount() {
      if (this.max_amount) {        
        await this.updateAll();
        const account = this.userInfo.userAddress;
        const index = this.collection_to_interact.id;
        const balance = this.action === "STAKE" ? this.user_info.ftoken_balance[index] : this.user_info.fft_balance;

        if (balance == 0) {
          this.errorMessage("Zero balance");
          this.max_amount = false;
        } else {
          this.stake_unstake_amount = fromWei(balance);
        }
      } else {
        this.stake_unstake_amount = "";
      }
    },

    /************************** Init & update states **************************/

    async updateUserInfo() {
      const account = this.userInfo.userAddress;
      let multicall_list = [
        this.fur.contract.methods.balanceOf(account),
        this.pool.contract.methods.balanceOf(account),
      ];
      for (let collection of this.pool_info.collections) {
        multicall_list.push(collection.contract.methods.balanceOf(account));
      }
      const results = await this.multicall.aggregate(multicall_list);

      this.user_info.fur_balance = results[0];
      this.user_info.fft_balance = results[1];
      this.user_info.ftoken_balance = results.slice(2);
    },

    async poolInfoFromContract() {
      let multicall_list = [
        this.pool.contract.methods.stakeFee(),
        this.pool.contract.methods.unstakeFee(),
      ];
      for (let collection of this.pool_info.collections) {
        multicall_list.push(collection.contract.methods.balanceOf(this.pool.address));
      }
      const results = await this.multicall.aggregate(multicall_list);

      this.pool_info.stake_fee = results[0];
      this.pool_info.unstake_fee = results[1];
      this.pool_info.in_pool = results.slice(2);
    },
    async updateAll() {
      await this.updateUserInfo();
      await this.poolInfoFromContract();
    },

    /**************************** Allowance checks ****************************/

    async approvedFur() {
      const account = this.userInfo.userAddress;

      const allowance = await this.fur.contract.methods.allowance(account, this.pool.address).call();

      return _compareInt(allowance, this.pool_info.stake_fee) != "smaller" ? true : false;
    },
    async approvedFToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.collection_to_interact.contract.methods.allowance(account, this.pool_info.address).call();

      return _compareInt(allowance, amount) != "smaller" ? true : false;
    },

    /**************************** Contract functions ***************************/
    
    async stake(amount) {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(parseFloat(amount).toString());
      const approvedEnoughFur = await this.approvedFur();
      const approvedEnoughFToken = await this.approvedFToken(actualAmount);

      let dialog_list = [];
      if (!approvedEnoughFur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      if (!approvedEnoughFToken) {
        dialog_list.push(ProcessInfo.APPROVE_FX);
      }
      dialog_list.push(ProcessInfo.STAKE_FX);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedEnoughFur) {
        try {
          const approve_result = await tokenApprove(this.fur.address, account, this.pool.address);
          this.successMessage(approve_result, `Approve FUR succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Approve FUR failed`)
          console.warn(e);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      if(!approvedEnoughFToken) {
        try {
          const approve_result = await tokenApprove(this.collection_to_interact.ftoken_address, account, this.pool.address);
          this.successMessage(approve_result, `Approve F-${this.collection_to_interact.symbol} succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Approve F-${this.collection_to_interact.symbol} failed`)
          console.warn(e);
          closeDialog(this.dialogue_info);
          return;
        }
      }
      
      try {
        const tx_result = await this.pool.contract.methods.stake(this.collection_to_interact.ftoken_address, actualAmount).send({ from: account });
        this.successMessage(tx_result, `Stake F-${this.collection_to_interact.symbol} succeeded`);
      }catch (e) {
        console.warn(e);
        this.errorMessage(`Stake F-${this.collection_to_interact.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialogVisible = false;
      this.collection_to_interact = {};
      this.action = '';
      this.stake_unstake_amount = '';
      await this.updateAll();
    },
    async unstake(amount) {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(amount);
      const approvedEnoughFur = this.approvedFur();

      let dialog_list = [];
      if (!approvedEnoughFur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.UNSTAKE_FX);
      openDialog(this.dialogue_info, dialog_list);

      if (!approvedEnoughFur) {
        try {
          const approve_result = await tokenApprove(this.fur.address, account, this.pool.address);
          this.successMessage(approve_result, `Approve FUR succeeded`);
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Approve FUR failed`)
          console.warn(e);
          closeDialog(this.dialogue_info);
          return;
        }
      }

      try {
        const tx_result = await this.pool.contract.methods.unstake(this.collection_to_interact.ftoken_address, actualAmount).send({ from: account });
        this.successMessage(tx_result, `Unstake F-${this.collection_to_interact.symbol} succeeded`);
      }catch (e) {
        console.warn(e);
        this.errorMessage(`Unsstake F-${this.collection_to_interact.symbol} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
      this.dialogVisible = false;
      this.collection_to_interact = {};
      this.action = '';
      this.stake_unstake_amount = '';
      await this.updateAll();
    },
    
    /******************************** Tx handler *******************************/

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
