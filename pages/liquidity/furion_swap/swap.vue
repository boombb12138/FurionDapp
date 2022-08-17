<style lang="scss" scoped>
.search-section {
  .label {
    @apply ml-13px text-[rgba(204, 204, 204, 0.4)] text-12px font-500 mb-8px;
  }

  &::v-deep {
    .el-input__inner {
      background: #091a39;
      border: 1px solid #172643 !important;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
      border-radius: 8px !important;
      color: rgba(204, 204, 204, 0.8) !important;
      height: 34px;

      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.8);
      }
    }
  }
}

.box {
  height: 540px;
  background: linear-gradient(180deg,
      rgba(51, 53, 114, 0.16) 0%,
      rgba(51, 53, 114, 0.2) 100%);
  border-radius: 20px;

  .box-top {
    height: 68px;
    background: linear-gradient(180deg,
        rgba(51, 53, 114, 0.192) 9.21%,
        rgba(51, 53, 114, 0.24) 95.15%);
    border-radius: 12px;
  }

  .tag {
    background: rgba(252, 255, 253, 0.08);
    // opacity: 0.2;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 39px;
  }

  .box-input {
    &::v-deep {
      .el-input__inner {
        height: 60px;
        background: #091a39;
        background: rgba(1, 17, 41, 0.6);
        border: 1px solid #172643 !important;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
        border-radius: 12px !important;
        color: #fcfffd;
        font-size: 22px;
        font-weight: 600;
        text-align: right;

        &::-webkit-input-placeholder {
          color: rgba(204, 204, 204, 0.3) !important;
        }
      }
    }
  }
}

.divider {
  height: 1.6px;
  background: linear-gradient(270deg,
      rgba(221, 221, 221, 0) 12.5%,
      rgba(221, 221, 221, 0.4) 56.71%,
      rgba(221, 221, 221, 0) 100%);
}

.sort {
  background: #091a39;
  border: 1px solid #172643 !important;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
  border-radius: 8px !important;
  color: rgba(204, 204, 204, 0.8) !important;
  height: 34px;
  @apply px-15px w-154px flex items-center justify-between cursor-pointer;

  i {
    margin-left: 10px;
  }
}

.box-left {
  background: url(@/assets/images/liquidity/box_left_bg.png) 0 0/ 750px 540px no-repeat;
}

.box-right {
  background: url(@/assets/images/liquidity/box_right_bg.png) 0 0/ 370px 540px no-repeat;
}

.select {
  cursor: pointer;
}
</style>

<template>
  <div class="w-1150px">

    <!-- tab header and some sort box -->
    <div class="flex items-end justify-between my-70px">
      <SwapTab v-model="active"></SwapTab>
      <!-- <div class="flex search-section items-end">
        <div class="mr-30px">
          <p class="label">SORT BY</p>
          <el-popover placement="bottom-start" title trigger="click" popper-class="el-sort" :visible-arrow="false"
            width="154" ref="sort">
            <div class="el-sort-item" @click="onSort('HOT')">HOT</div>
            <div class="el-sort-item" @click="onSort('RECENT')">RECENT</div>

            <div class="sort" slot="reference">
              <div class="text-14px">{{ sort }}</div>
              <i class="el-icon-arrow-down"></i>
            </div>
          </el-popover>
        </div>
        <div class="mr-30px">
          <p class="label">SEARCH</p>
          <el-input v-model="searchKey" placeholder="Top" style="width:184px"></el-input>
        </div>
      </div> -->
    </div>

    <div class="flex justify-between pb-100px">

      <!-- graph part -->
      <div class="box-left box w-750px p-10px">
        <div class="box-top flex items-center justify-between pr-27px pl-30px">
          <div class="flex items-center text-14px">
            <img class="flex-shrink-0 w-40px" :src="swap_info.token_0_image" />
            <img class="flex-shrink-0 mr-10px -ml-5px w-40px" :src="swap_info.token_1_image" />
            <span>{{ swap_info.token_0 }}</span>
            <span class="mx-5px text-[#FCFFFD]">/</span>
            <span>{{ swap_info.token_1 }}</span>
            <img class="flex-shrink-0 mr-18px ml-22px cursor-pointer" src="@/assets/images/liquidity/transfer.svg" />
            <div
              class="tag flex item-center justify-center text-[#34F8FF] h-32px leading-32px w-76px font-800 cursor-pointer">
              Basic</div>
          </div>
          <!-- <img class="cursor-pointer" src="@/assets/images/liquidity/enlarge.svg" /> -->
        </div>
        <div class="mt-10px mr-10px">
          <client-only>
            <BitcioToUSDBlue></BitcioToUSDBlue>
          </client-only>
        </div>
      </div>


      <!-- swap part -->
      <div class="box-right box w-370px pt-24px px-16px pb-32px">
        <div class="flex items-center justify-between mb-5px">
          <div class="w-99px"></div>
          <p class="text-[#FCFFFD] text-19px font-700 text-center">Swap</p>
          <div class="flex items-center">
            <img class="flex-shrink-0 mr-12px cursor-pointer" src="@/assets/images/liquidity/setting.svg" />
            <img class="flex-shrink-0 mr-12px cursor-pointer" src="@/assets/images/liquidity/clock.svg" />
            <img class="flex-shrink-0 cursor-pointer" src="@/assets/images/liquidity/reload.svg" />
          </div>
        </div>
        <p class="text-13px text-[rgba(252,255,253,0.4)] font-500 mb-10px text-center">Trade tokens in seconds</p>

        <!-- pick tokens to trade -->
        <div class="divider mb-20px"></div>
        <div class="flex justify-between items-center mb-8px px-10px mt-20px">
          <div class="flex items-center select" v-on:click="pickToken(true)">
            <img class="flex-shrink-0 mr-8px" :src="swap_info.token_0_image" width="28px" />
            <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">{{ swap_info.token_0 }}&nbsp;&nbsp;</p>
            <img class="flex-shrink-0" src="@/assets/images/liquidity/arrow_down.svg" />


          </div>
          <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
            Balance: {{ formatNumber(this.swap_info.token_0_balance) }}
          </p>
        </div>
        <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="token_0_amount"
          @input.native="calToken1Amount"></el-input>
        <div class="text-center mt-14px mb-5px">
          <img class="flex-shrink-0 text-center cursor-pointer" src="@/assets/images/liquidity/arrow_down2.svg"
            v-on:click="switchToken" />
        </div>

        <div class="flex justify-between items-center mb-8px px-10px mt-20px">
          <div class="flex items-center select" v-on:click="pickToken(false)">
            <img class="flex-shrink-0 mr-8px" :src="swap_info.token_1_image" width="28px" />
            <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">{{ swap_info.token_1 }}&nbsp;&nbsp;</p>

            <img class="flex-shrink-0" src="@/assets/images/liquidity/arrow_down.svg" />
          </div>
          <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
            Balance: {{ formatNumber(this.swap_info.token_1_balance) }}
          </p>
        </div>

        <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="token_1_amount"
          @input.native="calToken0Amount"></el-input>
        <div class="flex items-center justify-between mt-14px">
          <p class="ml-16px text-[rgba(252,255,253,0.8)] text-13px font-500">Slippage Tolerance</p>
          <p class="mr-16px text-13px text-[#34F8FF]">0.5%</p>
        </div>



        <div class="flex justify-between items-center">
          <div class="btn_border w-1/2 mt-30px">
            <el-button type="primary" class="!w-1/1 !h-52x" :disabled="approved" @click="approveToken">{{ approved ?
                "Approved" : "Approve"
            }}
            </el-button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="btn_border w-1/2 mt-30px">
            <el-button type="primary" class="!w-1/1 !h-52x" @click="swap" :disabled="!valid_swap">{{ valid_swap ?
                "Swap" : "Insufficient"
            }}</el-button>
          </div>

        </div>
        <div class="flex items-center justify-between mt-14px text-center">
          <p class="cursor-pointer ml-4px ml-100px text-[rgba(204, 204, 204, 0.3)] text-12px font-400 underline mt-10px"
            v-on:click="addToken">Add {{ swap_info.token_1 }} to my wallet</p>
        </div>
      </div>
    </div>

    <SelectToken :DialogVisible="select_token" :DialogClose="closeTokenSelect" :Token0="pick_token0" />

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { initFurionSwapInfo, swap_info } from '@/config/furion_swap/swap';
import SelectToken from '@/components/Dialog/SelectToken.vue';
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';

import { newMultiCallProvider } from "@/utils/web3/multicall";
import { _formatNumber, ALLOWANCE_THRESHOLD, tokenApprove, getTxURL, fromWei, toWei } from '@/utils/common';
import { addToken } from '@/utils/web3/wallet';

import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/liquidity']);
  },
  props: {},
  components: { SelectToken, ProceedingDetails, ProceedingDetails },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      chainId: 4,
      active: 1,
      num: 0,
      percent: 0,
      sort: 'HOT',
      searchKey: '',
      token_0_amount: '',
      token_1_amount: '',
      multicall: multicall,
      select_token: false,
      pick_token0: true,
      swap_info: swap_info,
      approved: false,
      valid_swap: true,
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    await openDialog(this.dialogue_info, [ProcessInfo.APPROVE_USDC, ProcessInfo.UNSTAKE_INCOME_SHARING_POOL]);
    // this.dialogue_info.StepsInfo = [ProcessInfo.APPROVE_USDC];
    // this.dialogue_info.DialogVisible = true;

    this.swap_info = await initFurionSwapInfo(this.swap_info, this.chainId);
    await this.updateUserInfo();
    console.log('This is initialized furion swap', this.swap_info);
    await this.checkApproval();
  },
  methods: {
    async updateUserInfo() {
      let account = this.userInfo.userAddress;
      // console.log('Account info', account)
      let token_0_contract = this.swap_info.token_0_contract;
      let token_1_contract = this.swap_info.token_1_contract;
      try {
        let multicall_list = [token_0_contract.methods.balanceOf(account), token_1_contract.methods.balanceOf(account)];
        const balance_results = await this.multicall.aggregate(multicall_list);
        // console.log('Balance info', balance_results);
        this.swap_info.token_0_balance = fromWei(balance_results[0], parseInt(this.swap_info.token_0_decimal));
        this.swap_info.token_1_balance = fromWei(balance_results[1], parseInt(this.swap_info.toke_1_decimal));
      } catch (e) {
        console.warn('Fail to load balance')
        console.warn(e);
      }
    },

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
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },
    pickToken(pick_token_0) {
      this.pick_token0 = pick_token_0;
      this.select_token = true;
    },
    closeTokenSelect() {
      this.select_token = false;
    },
    async swap() {
      let account = this.userInfo.userAddress;
      let router_contract = this.swap_info.router_contract;
      let current_time = Date.parse(new Date());
      // console.log(this.single_swap_pool.token_0_decimal, this.single_swap_pool.token_1_decimal);
      try {
        let tx_result = await router_contract.methods.swapExactTokensForTokens(
          toWei(this.token_0_amount, parseInt(this.swap_info.token_0_decimal)),
          0,
          [this.swap_info.token_0_address, this.swap_info.token_1_address],
          account,
          current_time + 400
        ).send({ from: account });
        this.successMessage(tx_result, 'Swap Successfully');
      } catch (e) {
        console.warn(e);
        this.errorMessage('Swap Err');
        return
      }
      this.token_0_amount = '';
      this.token_1_amount = '';
      await this.updateUserInfo();
    },
    async approveToken() {
      let account = this.userInfo.userAddress;
      // console.log('Ready for approval')
      if (this.allowance_0 < ALLOWANCE_THRESHOLD) {
        await tokenApprove(this.swap_info.token_0_address, account, this.swap_info.router_address);
        // console.log('Approve token', this.swap_info.token_0);
      }
    },
    checkApproval() {
      let account = this.userInfo.userAddress;
      // console.log('Router address', this.swap_info.router_address);
      let multicall_list = [
        this.swap_info.token_0_contract.methods.allowance(account, this.swap_info.router_address)
      ];
      this.multicall.aggregate(multicall_list).then((allowance) => {
        // console.log('Allowance', allowance);
        this.allowance_0 = allowance[0];
        if (parseInt(allowance[0]) > ALLOWANCE_THRESHOLD) {
          this.approved = true;
        }
      });
    },
    calToken1Amount() {
      if (this.swap_info.token_1_reserve * this.swap_info.token_0_reserve < 1) {
        return
      }
      const middle_value = this.token_0_amount * (1 - this.swap_info.fee_rate);
      const token_1_desired = this.swap_info.token_1_reserve * middle_value / (this.swap_info.token_0_reserve + middle_value);
      this.token_1_amount = token_1_desired.toFixed(4);
    },
    calToken0Amount() {
      if (this.token_1_amount > this.swap_info.token_1_reserve) {
        this.token_1_amount = this.swap_info.token_1_reserve;
      }
      if (this.swap_info.token_1_reserve * this.swap_info.token_0_reserve < 1) {
        return
      }
      const token_0_desired = this.swap_info.token_0_reserve * this.token_1_amount / (1 - this.swap_info.fee_rate) / (this.swap_info.token_1_reserve - this.token_1_amount);
      this.token_0_amount = token_0_desired.toFixed(4);
    },
    switchSingle(key) {
      const temp_value = this.swap_info['token_0_' + key];
      this.swap_info['token_0_' + key] = this.swap_info['token_1_' + key];
      this.swap_info['token_1_' + key] = temp_value;
    },

    // swicth info for these two tokens
    switchToken() {
      console.log('Switch token');
      const token_0 = this.swap_info.token_0;
      this.swap_info.token_0 = this.swap_info.token_1;
      this.swap_info.token_1 = token_0;
      // console.log('Switched token info', this.swap_info);

      let keys = ['address', 'image', 'decimal', 'balance', 'contract', 'reserve'];
      for (let index = 0; index < keys.length; index++) {
        this.switchSingle(keys[index]);
      }
      this.token_0_amount = '';
      this.token_1_amount = '';
    },

    async addToken() {
      console.log('Add token');
      await addToken({
        tokenAddress: this.swap_info.token_1_address,
        tokenSymbol: this.swap_info.token_1,
        tokenDecimals: this.swap_info.token_1_decimal,
        tokenImage: this.swap_info.token_1_image,
      })
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
