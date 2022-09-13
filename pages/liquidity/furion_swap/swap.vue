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
            <img class="flex-shrink-0 mr-18px ml-22px cursor-pointer" src="@/assets/images/liquidity/transfer.svg"
              v-on:click="switchToken" />
            <div
              class="tag flex item-center justify-center text-[#34F8FF] h-32px leading-32px w-76px font-800 cursor-pointer">
              Basic</div>
          </div>
          <!-- <img class="cursor-pointer" src="@/assets/images/liquidity/enlarge.svg" /> -->
        </div>
        <div class="mt-10px mr-10px">
          <client-only>
            <FurionSwapPrice :token_0="swap_info.token_0" :token_1="swap_info.token_1"></FurionSwapPrice>
          </client-only>
        </div>
      </div>


      <!-- swap part -->
      <div class="box-right box w-370px pt-24px px-16px pb-32px">
        <div class="flex items-center justify-between mb-5px">
          <div class="w-99px"></div>
          <p class="text-[#FCFFFD] text-19px font-700 text-center mr-80px">Swap</p>
          <div class="flex items-center">
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
            &nbsp;&nbsp;
            <span class="text-10px text-[rgba(252,255,253,0.4)] font-600">In Pool: {{
            formatNumber(this.swap_info.token_0_reserve)
            }}</span>
          </div>

          <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
            Balance: {{ formatNumber(this.swap_info.token_0_balance) }}


          </p>

        </div>
        <el-input class="box-input" placeholder="0.0" style="width:100%" v-model="token_0_amount"
          @input.native="calToken1Amount"></el-input>
        <div class="text-center mt-14px mb-5px">
          <img class="flex-shrink-0 text-center cursor-pointer" width="35px"
            src="@/assets/images/liquidity/icon_down.png" v-on:click="switchToken" />
        </div>

        <div class="flex justify-between items-center mb-8px px-10px mt-20px">
          <div class="flex items-center select" v-on:click="pickToken(false)">
            <img class="flex-shrink-0 mr-8px" :src="swap_info.token_1_image" width="28px" />
            <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">{{ swap_info.token_1 }}&nbsp;&nbsp;</p>

            <img class="flex-shrink-0" src="@/assets/images/liquidity/arrow_down.svg" />
            &nbsp;&nbsp;<span class="text-10px text-[rgba(252,255,253,0.4)] font-600">In Pool: {{
            formatNumber(this.swap_info.token_1_reserve)
            }}</span>
          </div>

          <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
            Balance: {{ formatNumber(this.swap_info.token_1_balance) }}
            <!-- <br /> -->

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
        <div class="flex items-center justify-between mt-14px text-center" v-if="swap_info.token_1 != 'ETH'">
          <p class="cursor-pointer ml-4px ml-100px text-[rgba(204, 204, 204, 0.3)] text-12px font-400 underline mt-10px"
            v-on:click="addToken">Add {{ swap_info.token_1 }} to my wallet</p>
        </div>
      </div>
    </div>

    <SelectToken :DialogVisible="select_token_visible" :DialogClose="closeTokenSelect" :Token0="pick_token0"
      :SelectToken="selectToken" />

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

// Components
import SelectToken from '@/components/Dialog/SelectToken.vue';
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';

import { initFurionSwapInfo, swap_info } from '@/config/furion_swap/swap';
import { newMultiCallProvider } from "@/utils/web3/multicall";
import { _formatNumber, ALLOWANCE_THRESHOLD, tokenApprove, getTxURL, fromWei, toWei, getNativeTokenAmount } from '@/utils/common';
import { addToken } from '@/utils/web3/wallet';


import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';
import { WETH_ADDRESS } from '@/utils/web3';
import FurionSwapPrice from '../../../components/FurionSwapPrice.vue';

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/liquidity']);
  },
  props: {},
  components: { SelectToken, ProceedingDetails, ProceedingDetails, FurionSwapPrice },
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
      select_token_visible: false,
      pick_token0: true,
      swap_info: swap_info,
      approved: false,
      valid_swap: true,
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    this.swap_info = await initFurionSwapInfo(this.swap_info, this.chainId);
    await this.updateUserInfo();
    // console.log('This is initialized furion swap', this.swap_info);
    await this.checkApproval();
  },
  methods: {

    /******************************* Components functions *******************************/
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },
    pickToken(pick_token_0) {
      this.pick_token0 = pick_token_0;
      this.select_token_visible = true;
    },
    closeTokenSelect() {
      this.select_token_visible = false;
    },
    async selectToken(item) {
      if (this.pick_token0) {
        if (item.symbol == swap_info.token_1) {
          this.errorMessage('Identical Token');
          return
        }
        swap_info.token_0 = item.symbol;
        swap_info.token_0_address = item.address;
        swap_info.token_0_image = item.image;
        // console.log('Update token 0', swap_info)
      } else {
        if (item.symbol == swap_info.token_0) {
          this.errorMessage('Identical Token');
          return
        }
        swap_info.token_1 = item.symbol;
        swap_info.token_1_address = item.address;
        swap_info.token_1_image = item.image;
        // console.log('Update token 1', swap_info)
      }
      this.token_0_amount = '';
      this.token_1_amount = '';
      this.refresh();
      this.closeTokenSelect();
    },

    switchSingle(key) {
      const temp_value = this.swap_info['token_0_' + key];
      this.swap_info['token_0_' + key] = this.swap_info['token_1_' + key];
      this.swap_info['token_1_' + key] = temp_value;
    },

    // swicth info for these two tokens
    switchToken() {
      // console.log('Switch token');
      const token_0 = this.swap_info.token_0;
      this.swap_info.token_0 = this.swap_info.token_1;
      this.swap_info.token_1 = token_0;
      // console.log('Switched token info', this.swap_info);

      let keys = ['address', 'image', 'decimal', 'balance', 'contract', 'reserve'];
      for (let index = 0; index < keys.length; index++) {
        this.switchSingle(keys[index]);
      }
      let token_1_amount = this.token_1_amount;
      this.token_1_amount = this.token_0_amount;
      this.token_0_amount = token_1_amount;
    },

    async addToken() {
      // console.log('Add token');
      await addToken({
        tokenAddress: this.swap_info.token_1_address,
        tokenSymbol: this.swap_info.token_1,
        tokenDecimals: this.swap_info.token_1_decimal,
        tokenImage: this.swap_info.token_1_image,
      })
    },

    /******************************* Update info *******************************/
    async refresh() {
      this.swap_info = await initFurionSwapInfo(this.swap_info, this.chainId);
      await this.updateUserInfo();
      // console.log('This is initialized furion swap', this.swap_info);
      await this.checkApproval();
    },
    async updateUserInfo() {
      let account = this.userInfo.userAddress;
      // console.log('Account info', account)
      try {
        if (this.swap_info.token_0 == 'ETH') {
          this.swap_info.token_0_balance = parseFloat(await getNativeTokenAmount(account));
          let token_1_contract = this.swap_info.token_1_contract;
          this.swap_info.token_1_balance = parseFloat(fromWei((await token_1_contract.methods.balanceOf(account).call()), parseInt(this.swap_info.token_1_decimal)));

        } else if (this.swap_info.token_1 == 'ETH') {
          this.swap_info.token_1_balance = parseFloat(await getNativeTokenAmount(account));
          let token_0_contract = this.swap_info.token_0_contract;
          this.swap_info.token_0_balance = parseFloat(fromWei((await token_0_contract.methods.balanceOf(account).call()), parseInt(this.swap_info.token_0_decimal)));
        }

        else {
          let token_0_contract = this.swap_info.token_0_contract;
          let token_1_contract = this.swap_info.token_1_contract;

          let multicall_list = [token_0_contract.methods.balanceOf(account), token_1_contract.methods.balanceOf(account)];
          const balance_results = await this.multicall.aggregate(multicall_list);
          // console.log('Balance info', balance_results);
          this.swap_info.token_0_balance = parseFloat(fromWei(balance_results[0], parseInt(this.swap_info.token_0_decimal)));
          this.swap_info.token_1_balance = parseFloat(fromWei(balance_results[1], parseInt(this.swap_info.token_1_decimal)));

        }
      } catch (e) {
        console.warn(e);
        console.warn('Fail to load balance')
      }
    },

    checkApproval() {
      let account = this.userInfo.userAddress;
      if (this.swap_info.token_0 == 'ETH') {
        this.allowance_0 = 10000000000000000000000000000;
        this.approved = true;
      }
      else {
        this.swap_info.token_0_contract.methods.allowance(account, this.swap_info.router_address).call().then((allowance) => {
          if (parseInt(allowance) > ALLOWANCE_THRESHOLD) {
            this.approved = true;
          }
        })
      }
    },

    async approveToken() {
      let account = this.userInfo.userAddress;
      if (this.swap_info.token_0 == 'ETH') {
        return
      }
      // console.log('Ready for approval')
      if (this.allowance_0 < ALLOWANCE_THRESHOLD) {
        await openDialog(this.dialogue_info, [ProcessInfo.SWAP_APPROVE_TOKEN]);
        await tokenApprove(this.swap_info.token_0_address, account, this.swap_info.router_address);
        // console.log('Approve token', this.swap_info.token_0);
      }
      closeDialog(this.dialogue_info);
    },

    /******************************* Contract functions *******************************/
    async swap() {
      await openDialog(this.dialogue_info, [ProcessInfo.SWAP_TOKEN]);
      let account = this.userInfo.userAddress;
      let router_contract = this.swap_info.router_contract;
      let current_time = Date.parse(new Date());
      // console.log(this.swap_info.token_0_decimal, this.swap_info.token_1_decimal);

      // swap ETH for other tokens
      if (this.swap_info.token_0 == 'ETH') {
        try {
          let tx_result = await router_contract.methods.swapExactETHForTokens(
            0,
            [this.swap_info.token_0_address, this.swap_info.token_1_address],
            account,
            current_time + 400
          ).send({ from: account, value: toWei(this.token_0_amount) });
          this.successMessage(tx_result, 'Swap Successfully');
        } catch (e) {
          console.warn(e);
          this.errorMessage('Swap Error');
          this.token_0_amount = '';
          this.token_1_amount = '';
          closeDialog(this.dialogue_info);
          return
        }
      }
      // swap for ETH
      else if (this.swap_info.token_1 == 'ETH') {
        try {
          let tx_result = await router_contract.methods.swapExactTokensForETH(
            toWei(this.token_0_amount, parseInt(this.swap_info.token_0_decimal)),
            0,
            [this.swap_info.token_0_address, this.swap_info.token_1_address],
            account,
            current_time + 400
          ).send({ from: account });
          this.successMessage(tx_result, 'Swap Successfully');
        } catch (e) {
          console.warn(e);
          this.errorMessage('Swap Error');
          closeDialog(this.dialogue_info);
          this.token_0_amount = '';
          this.token_1_amount = '';
          return
        }
      }

      // swap between general ERC-20 tokens
      else {
        //
        let trading_path = [];
        if (this.swap_info.pair_address.length < 4) {
          let weth_address;
          if (this.chainId == 4) {
            weth_address = WETH_ADDRESS['rinkeby']
          } else if (this.chainId == 1) {
            weth_address = WETH_ADDRESS['mainnet'];
          }
          trading_path = [this.swap_info.token_0_address, weth_address, this.swap_info.token_1_address]
        } else {
          trading_path = [this.swap_info.token_0_address, this.swap_info.token_1_address]
        }
        try {
          let tx_result = await router_contract.methods.swapExactTokensForTokens(
            toWei(this.token_0_amount, parseInt(this.swap_info.token_0_decimal)),
            0,
            trading_path,
            account,
            current_time + 400
          ).send({ from: account });
          this.successMessage(tx_result, 'Swap Successfully');
        } catch (e) {
          console.warn(e);
          this.errorMessage('Swap Error');
          this.token_0_amount = '';
          this.token_1_amount = '';
          closeDialog(this.dialogue_info);
          return
        }
      }
      this.token_0_amount = '';
      this.token_1_amount = '';
      await this.updateUserInfo();
      closeDialog(this.dialogue_info);
      await this.refresh();
    },

    /******************************* Helper functions *******************************/

    calToken1Amount() {
      if (this.token_0_amount > this.swap_info.token_0_balance) {
        this.valid_swap = false;
        return
      }
      if (this.swap_info.token_1_reserve * this.swap_info.token_0_reserve < 1) {
        this.errorMessage('Not enough liquidity for the pair')
        return
      }
      const middle_value = this.token_0_amount * (1 - this.swap_info.fee_rate);
      const token_1_desired = this.swap_info.token_1_reserve * middle_value / (this.swap_info.token_0_reserve + middle_value);
      this.token_1_amount = token_1_desired.toFixed(4);
      this.valid_swap = true;
    },
    calToken0Amount() {
      if (this.token_1_amount > this.swap_info.token_1_balance) {
        this.valid_swap = false;
        return
      }
      if (this.token_1_amount > this.swap_info.token_1_reserve) {
        this.token_1_amount = this.swap_info.token_1_reserve;
      }
      if (this.swap_info.token_1_reserve * this.swap_info.token_0_reserve < 1) {
        return
      }
      const token_0_desired = this.swap_info.token_0_reserve * this.token_1_amount / (1 - this.swap_info.fee_rate) / (this.swap_info.token_1_reserve - this.token_1_amount);
      this.token_0_amount = token_0_desired.toFixed(4);

      this.valid_swap = true;
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
