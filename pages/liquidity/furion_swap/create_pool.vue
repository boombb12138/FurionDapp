<style lang="scss" scoped>
.go {
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 500px;
  margin-top: 100px;
  display: flex;
  background-color: rgba(51, 53, 114, 0.2);
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.description {
  font-size: 17px;
  color: rgba(252, 255, 253, 0.6);
  line-height: 28px;
  background-color: rgba(51, 53, 114, 0.2);
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 15px 30px;
  margin-top: 40px;
  border: 2px solid rgba(69, 96, 191, 0.1);
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  background-color: rgba(51, 53, 114, 0.2);
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 12px;
  border: 2px solid rgba(69, 96, 191, 0.1);
}
.input-wrap {
  height: 60px;
  background: rgba(1, 17, 41, 0.6) !important;
  border: 1px solid #172643 !important;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
  border-radius: 12px !important;
  color: rgba(252, 255, 253, 0.3) !important;
  font-size: 22px;
  font-weight: 600;
  @apply flex items-center;

  * {
    flex-shrink: 0;
  }
}
.box-input {
  background: transparent !important;

  &::v-deep {
    .el-input__inner {
      height: 56px;
      background: transparent !important;
      border: 1px solid #172643 !important;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
      border-radius: 12px !important;
      color: #fcfffd;
      font-size: 22px;
      font-weight: 600;

      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.3) !important;
      }
    }
  }

  &.no-border {
    &::v-deep {
      .el-input__inner {
        height: 56px;
        background: transparent !important;
        border: 0 !important;
        box-shadow: unset !important;
        border-radius: 12px !important;
        color: #fcfffd;
        font-size: 22px;
        font-weight: 600;

        &::-webkit-input-placeholder {
          color: rgba(204, 204, 204, 0.8);
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
.tag {
  background: linear-gradient(180deg,
      rgba(51, 53, 114, 0.16) -9.52%,
      rgba(51, 53, 114, 0.2) 109.52%);
  @apply w-48px h-28px leading-28px rounded-5px text-center text-13px font-700 cursor-pointer;
}
</style>

<template>
  <div class="!w-full">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
      <div class="go ml-23px">Back to Pools</div>
    </div>

    <div class="wrap mx-auto">
      <div class="w-917px h-435px flex justify-between">
        <!-- Title & description -->
        <div class="flex flex-col text-[#FCFFFD]">
          <p class="text-30px font-600 mt-20px">Create a Pool</p>
          <p class="description">
            You are the first liquidity provider.<br>
            The ratio of tokens you add will set the price of this pool.<br>
            Once you are happy with the rate, click supply to review.
          </p>
          <img src="@/assets/images/swimming-pool.png" class="w-220px h-220px mx-auto floating" />
        </div>

        <!-- Add liquidity -->
        <div class="box">
          <div class="flex justify-between items-center mb-8px px-10px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Input</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              Balance: 1000
            </p>
          </div>

          <div class="input-wrap">
            <el-input class="box-input no-border" placeholder="0.0" style="width: 160px" v-model="(token_0_amount)"
              @input.native="calAmount1">
            </el-input>
            <div class="tag" v-on:click="maxAmount0">MAX</div>
            <div class="divider ml-10px mr-12px"></div>

            <div class="flex items-center cursor-pointer" @click="pickToken(true)">
              <img class="flex-shrink-0 mr-8px" src="@/assets/images/liquidity/tokens/FUR.png" width="28px" />
              <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">FUR</p>
              <img class="flex-shrink-0 ml-10px" src="@/assets/images/liquidity/arrow_down.svg" />
            </div>
          </div>

          <div class="text-center mt-30px mb-8px">
            <img class="flex-shrink-0 text-center" src="@/assets/images/liquidity/plus.svg" />
          </div>

          <div class="flex justify-between items-center mb-8px px-10px mt-10px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Input</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              Balance: 1000
            </p>
          </div>
          <div class="input-wrap">
            <el-input class="box-input no-border" placeholder="0.0" style="width: 160px" v-model="token_1_amount"
              @input.native="calAmount0">
            </el-input>
            <div class="tag" v-on:click="maxAmount1">MAX</div>
            <div class="divider ml-10px mr-12px"></div>
            <div class="flex items-center cursor-pointer" @click="pickToken(true)">
              <img class="flex-shrink-0 mr-8px" src="@/assets/images/liquidity/tokens/ETH.png" width="28px" />
              <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">ETH</p>
              <img class="flex-shrink-0 ml-10px" src="@/assets/images/liquidity/arrow_down.svg" />
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="btn_border w-160px mt-60px">
              <el-button type="primary" class="!w-1/1 !h-52x !text-15px" :disabled="approved" @click="approveToken">{{ approved ?
              "Approved" : "Approve"
              }}
              </el-button>
            </div>
            
            <div class="btn_border w-160px mt-60px">
              <el-button type="primary" class="!w-1/1 !h-52x !text-15px" @click="addLiquidity" :disabled="!valid_add || !approved">
                {{ !approved ? "Approve first" : valid_add
                ?
                "Add liquidity" : "Insufficient"
                }}</el-button>
            </div>
          </div>
        </div>
        <!--div>
          <div class="flex justify-between items-center mb-8px px-10px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Input</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              Balance: {{ formatNumber(single_swap_pool.token_0_balance) }}
            </p>
          </div>

          <div class="input-wrap">
            <el-input class="box-input no-border" placeholder="0.0" style="width: 160px" v-model="(token_0_amount)"
              @input.native="calAmount1">
            </el-input>
            <div class="tag" v-on:click="maxAmount0">MAX</div>
            <div class="divider ml-10px mr-12px"></div>

            <div class="flex items-center select">
              <img class="flex-shrink-0 mr-8px" :src="single_swap_pool.token_0_image" width="28px" />
              <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">{{ single_swap_pool.token_0 }}</p>
            </div>
          </div>

          <div class="text-center mt-30px mb-8px">
            <img class="flex-shrink-0 text-center" src="@/assets/images/liquidity/plus.svg" />
          </div>

          <div class="flex justify-between items-center mb-8px px-10px mt-10px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Input</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              Balance: {{ formatNumber(single_swap_pool.token_1_balance) }}
            </p>
          </div>
          <div class="input-wrap">
            <el-input class="box-input no-border" placeholder="0.0" style="width: 160px" v-model="token_1_amount"
              @input.native="calAmount0">
            </el-input>
            <div class="tag" v-on:click="maxAmount1">MAX</div>
            <div class="divider ml-10px mr-12px"></div>
            <div class="flex items-center select">
              <img class="flex-shrink-0 mr-8px" :src="single_swap_pool.token_1_image" width="28px" />
              <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">{{ single_swap_pool.token_1 }}</p>
              
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="btn_border w-1/2 mt-60px">
              <el-button type="primary" class="!w-1/1 !h-52x" :disabled="approved" @click="approveToken">{{ approved ?
              "Approved" : "Approve"
              }}
              </el-button>
            </div>
            
            <div class="btn_border w-1/2 mt-60px">
              <el-button type="primary" class="!w-1/1 !h-52x" @click="addLiquidity" :disabled="!valid_add || !approved">
                {{ !approved ? "Approve first" : valid_add
                ?
                "Add liquidity" : "Insufficient"
                }}</el-button>
            </div>
          </div>
        </div-->
      </div>
    </div>

    <SelectToken :DialogVisible="select_token_visible" :DialogClose="closeTokenSelect" :Token0="pick_token0"
      :SelectToken="selectToken" />

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { _compareInt, getTxURL } from '@/utils/common';

import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';

import SelectToken from '@/components/Dialog/SelectToken.vue';
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';

export default {
  props: {},
  components: { SelectToken, ProceedingDetails },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    account() {
      return this.userInfo.userAddress;
    },
  },
  data() {
    return {
      token_0_amount: "",
      token_1_amount: "",
      approved: false,
      valid_add: true,
      select_token_visible: false,
      pick_token0: true,
      dialogue_info: DialogInfo,
    };
  },
  async mounted() {
  },
  methods: {
    closeTokenSelect() {
      this.select_token_visible = false;
    },
    async selectToken(item) {
      /*
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
      */
    },
    pickToken(pick_token_0) {
      this.pick_token0 = pick_token_0;
      this.select_token_visible = true;
    },
    maxAmount0() {
      /*
      this.token_0_amount = this.single_swap_pool.token_0_balance;
      this.calAmount1();
      if (this.token_1_amount > this.single_swap_pool.token_1_balance) {
        this.token_1_amount = this.single_swap_pool.token_1_balance;
        this.calAmount0();
      }
      */
    },
    maxAmount1() {
      /*
      this.token_1_amount = this.single_swap_pool.token_1_balance;
      this.calAmount0();
      if (this.token_0_amount > this.single_swap_pool.token_0_balance) {
        this.token_0_amount = this.single_swap_pool.token_0_balance;
        this.calAmount1();
      }
      */
    },
    calAmount0() {
      /*
      let reserve0 = this.single_swap_pool.token_0_reserve;
      let reserve1 = this.single_swap_pool.token_1_reserve;
      // console.log('Reserve info', reserve0, reserve1);
      if (reserve1 != 0) {
        let desired_amount_0 = reserve0 / reserve1 * this.token_1_amount;
        this.token_0_amount = desired_amount_0.toFixed(4);
        // console.log('Token 0 amount change to be', desired_amount_0);
      }
      if (this.token_1_amount > this.single_swap_pool.token_1_balance || this.token_0_amount > this.single_swap_pool.token_0_balance) {
        this.valid_add = false;
        return
      }
      this.valid_add = true;
      */
    },
    calAmount1() {
      /*
      let reserve0 = this.single_swap_pool.token_0_reserve;
      let reserve1 = this.single_swap_pool.token_1_reserve;
      // console.log('Reserve info', reserve0, reserve1);
      if (reserve0 != 0) {
        let desired_amount_1 = reserve1 / reserve0 * this.token_0_amount;
        this.token_1_amount = desired_amount_1.toFixed(4);
        // console.log('Token 1 amount change to be', desired_amount_1);
      }
      if (this.token_1_amount > this.single_swap_pool.token_1_balance || this.token_0_amount > this.single_swap_pool.token_0_balance) {
        this.valid_add = false;
        return
      }
      this.valid_add = true;
      */
    },
    async approveToken() {
      /*
      let account = this.userInfo.userAddress;

      let dialog_list = [];
      if (this.single_swap_pool.token_0 != 'ETH' && this.allowance_0 < ALLOWANCE_THRESHOLD) {
        dialog_list.push(ProcessInfo.SWAP_APPROVE_TOKEN_1)
      }
      if (this.single_swap_pool.token_1 != 'ETH' && this.allowance_1 < ALLOWANCE_THRESHOLD) {
        dialog_list.push(ProcessInfo.SWAP_APPROVE_TOKEN_2)
      }
      openDialog(this.dialogue_info, dialog_list);

      // console.log('Ready for approval')
      if (this.single_swap_pool.token_0 != 'ETH' && this.allowance_0 < ALLOWANCE_THRESHOLD) {
        try {
          await tokenApprove(this.single_swap_pool.token_0_address, account, this.single_swap_pool.router_address);
          stepDialog(this.dialogue_info);
        } catch (e) {
          console.warn(e);
          return
        }
        // console.log('Approve token', this.single_swap_pool.token_0);
      }

      if (this.single_swap_pool.token_1 != 'ETH' && this.allowance_1 < ALLOWANCE_THRESHOLD) {
        try {
          await tokenApprove(this.single_swap_pool.token_1_address, account, this.single_swap_pool.router_address);
        }
        catch (e) {
          console.warn(e);
          return
        }
        // console.log('Approve token', this.single_swap_pool.token_1);
      }
      this.approved = true;
      closeDialog(this.dialogue_info);
      */
    },
    async addLiquidity() {
      /*
      await openDialog(this.dialogue_info, [ProcessInfo.SWAP_ADD_LIQUIDITY]);
      let account = this.userInfo.userAddress;
      let router_contract = this.single_swap_pool.router_contract;
      let current_time = Date.parse(new Date());
      // console.log(this.single_swap_pool.token_0_decimal, this.single_swap_pool.token_1_decimal);

      if (this.single_swap_pool.token_0 == 'ETH') {
        try {
          let tx_result = await router_contract.methods.addLiquidityETH(
            this.single_swap_pool.token_1_address,
            toWei(this.token_1_amount, parseInt(this.single_swap_pool.token_1_decimal)),
            0, 0,
            account,
            current_time + 400).send({ from: account, value: toWei(this.token_0_amount) });
          this.successMessage(tx_result, 'Add Liquidity Successfully');
        } catch (e) {
          console.warn(e);
          this.errorMessage('Add Liquidity Error');
          closeDialog(this.dialogue_info);
          this.token_0_amount = '';
          this.token_1_amount = '';
          return
        }
      } else if (this.single_swap_pool.token_1 == 'ETH') {
        try {
          let tx_result = await router_contract.methods.addLiquidityETH(
            this.single_swap_pool.token_0_address,
            toWei(this.token_0_amount, parseInt(this.single_swap_pool.token_0_decimal)),
            0, 0,
            account,
            current_time + 400).send({ from: account, value: toWei(this.token_1_amount) });
          this.successMessage(tx_result, 'Add Liquidity Successfully');
        } catch (e) {
          console.warn(e);
          this.errorMessage('Add Liquidity Error');
          closeDialog(this.dialogue_info);
          this.token_0_amount = '';
          this.token_1_amount = '';
          return
        }
      }
      else {
        try {
          let tx_result = await router_contract.methods.addLiquidity(
            this.single_swap_pool.token_0_address,
            this.single_swap_pool.token_1_address,
            toWei(this.token_0_amount, parseInt(this.single_swap_pool.token_0_decimal)),
            toWei(this.token_1_amount, parseInt(this.single_swap_pool.token_1_decimal)),
            0, 0,
            account,
            current_time + 400).send({ from: account });
          this.successMessage(tx_result, 'Add Liquidity Successfully');
        } catch (e) {
          this.errorMessage('Add Liquidity Error');
          closeDialog(this.dialogue_info);
          this.token_0_amount = '';
          this.token_1_amount = '';
          return
        }
      }


      this.token_0_amount = '';
      this.token_1_amount = '';
      closeDialog(this.dialogue_info);
      await this.updatePool();
      await this.updateUserInfo();
      */
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
