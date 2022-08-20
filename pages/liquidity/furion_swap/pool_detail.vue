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
    height: 226px;
    background: linear-gradient(180deg,
        rgba(51, 53, 114, 0.192) 9.21%,
        rgba(51, 53, 114, 0.24) 95.15%);
    border-radius: 12px;
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

    &.small {
      &::v-deep {
        .el-input__inner {
          height: 30px;
        }
      }
    }
  }

  .label {
    @apply text-13px text-[rgba(252, 255, 253, 0.3)];
  }

  .value {
    @apply text-16px text-[rgba(252, 255, 253, 0.8)] mt-8px;
  }

  .value2 {
    @apply text-32px font-500 text-[rgba(252, 255, 253, 0.8)] mt-12px;
  }
}

.box-left {
  background: url(@/assets/images/liquidity/box_left_bg.png) 0 0/ 750px 540px no-repeat;
}

.box-right {
  background: url(@/assets/images/liquidity/box_right_bg.png) 0 0/ 370px 540px no-repeat;
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

  &.no-border {
    width: 90px !important;
    border: 0 !important;
    box-shadow: unset !important;
    padding: 0;
    background-color: transparent !important;
  }
}

.pool-stripe {
  width: 1158px;
  height: 84px;
  background: url(@/assets/images/liquidity/pool_stripe2.png) -40px -36px / // 1230px 300px no-repeat;
    1235px 165px no-repeat;
}

.tag {
  background: linear-gradient(180deg,
      rgba(51, 53, 114, 0.16) -9.52%,
      rgba(51, 53, 114, 0.2) 109.52%);
  @apply w-48px h-28px leading-28px rounded-5px text-center text-13px font-700 cursor-pointer;
}

.divider {
  background: rgba(217, 217, 217, 0.2);
  @apply w-1px h-32px;
}

.add-liquidity {
  margin-top: 20px;
}
</style>

<template>
  <div class="w-1150px">
    <div class="flex items-end justify-between my-70px">
      <SwapTab v-model="active"></SwapTab>
      <div class="flex search-section items-end">
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
          <el-input v-model="searchKey" placeholder="Searcg Farns" style="width: 184px"></el-input>
        </div>
      </div>
    </div>

    <div class="pool-stripe pl-35px mb-40px flex items-center">
      <img class="flex-shrink-0 mr-38px cursor-pointer" src="@/assets/images/liquidity/back.svg"
        @click="$router.push('/liquidity/furion_swap/pool')" />
      <h4 class="text-white text-32px font-900">POOL</h4>
    </div>

    <div class="flex justify-between pb-100px">

      <!-- left panel for basic info -->
      <div class="box-left box w-750px p-10px">
        <div class="box-top py-40px px-30px">
          <div class="flex items-center text-32px text-[#fcfffd]">
            <img class="flex-shrink-0 mr-15px w-40px" :src="single_swap_pool.token_0_image" />
            <span class="font-700">{{ single_swap_pool.token_0 }}</span>
            <span class="ml-5px mr-8px text-[rgba(252,255,253,0.4)]">/</span>
            <img class="flex-shrink-0 mr-15px w-40px" :src="single_swap_pool.token_1_image" />
            <span class="font-700">{{ single_swap_pool.token_1 }}</span>
          </div>
          <p class="text-13px text-[rgba(252,255,253,0.3)] mt-30px mb-46px">
            ({{ single_swap_pool.pair_address }})
          </p>
          <div class="flex">
            <div class="w-145px flex-shrink-0">
              <p class="label">{{ this.single_swap_pool.token_0 }} Reserve</p>
              <br />
              <p class="value">{{ formatNumber(this.single_swap_pool.token_0_reserve) }}</p>

            </div>
            <div class="w-155px flex-shrink-0">
              <p class="label">{{ this.single_swap_pool.token_1 }} Reserve</p>
              <br />
              <p class="value">{{ formatNumber(this.single_swap_pool.token_1_reserve) }}</p>
            </div>
            <div class="w-145px flex-shrink-0">
              <p class="label"> Fees (24h)</p>
              <br />
              <p class="value">{{ formatNumber(this.single_swap_pool.pool_liquidity / 1000) }}</p>
            </div>
            <div class="w-145px flex-shrink-0">
              <p class="label">APR</p>
              <br />
              <p class="value">21.4%</p>
            </div>
          </div>
        </div>
        <div class="pl-40px mt-55px">
          <div class="flex">
            <div class="w-330px">
              <p class="label">Your Pool Share</p>
              <br />
              <p class="value2">{{ formatNumber(this.single_swap_pool.user_liquidity_proportion * 100, 2) }} %</p>
            </div>
            <div>
              <p class="label">Pooled {{ single_swap_pool.token_0 }}</p>
              <br />
              <p class="value2">{{ formatNumber(single_swap_pool.token_0_pooled, 2) }}</p>
            </div>
          </div>
          <div class="flex mt-70px">
            <div class="w-330px">
              <p class="label">Pooled {{ single_swap_pool.token_1 }}</p>
              <br />
              <p class="value2">{{ formatNumber(single_swap_pool.token_1_pooled, 2) }}</p>
            </div>
            <div>
              <p class="label">Total Liquidity</p>
              <br />
              <p class="value2">{{ formatNumber(single_swap_pool.pair_liquidity, 2) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="box-right box w-370px pt-24px px-16px pb-32px">
        <div class="flex justify-center mb-36px">
          <SwapTab3 v-model="active2"></SwapTab3>
        </div>

        <!-- add liquidity part -->
        <template v-if="active2 === 1">
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
              <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">{{ single_swap_pool.token_0 }}</p>&nbsp;&nbsp;
            </div>
          </div>

          <div class="text-center mt-14px mb-8px">
            <img class="flex-shrink-0 text-center" src="@/assets/images/liquidity/plus.svg" />
          </div>

          <div class="flex justify-between items-center mb-8px px-10px mt-20px">
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
              <p class="font-600 text-[rgba(252,255,253,0.8)] text-13px">&nbsp;&nbsp;{{ single_swap_pool.token_1 }}</p>
              &nbsp;&nbsp;
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="btn_border w-1/2 mt-60px">
              <el-button type="primary" class="!w-1/1 !h-52x" :disabled="approved" @click="approveToken">{{ approved ?
                  "Approved" : "Approve"
              }}
              </el-button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div class="btn_border w-1/2 mt-60px">
              <el-button type="primary" class="!w-1/1 !h-52x" @click="addLiquidity" :disabled="!valid_add">{{ valid_add
                  ?
                  "Add liquidity" : "Insufficient"
              }}</el-button>
            </div>
          </div>

        </template>

        <!-- remove liquidity part -->
        <teamplate v-if="active2 === 2">
          <div class="flex justify-between items-center mb-8px px-10px">
            <p class="text-13px text-[rgba(252,255,253,0.4)] font-500">Your Pool Tokens</p>
            <p class="text-13px text-[rgba(252,255,253,0.8)] font-700">
              {{ formatNumber(single_swap_pool.user_liquidity, 2) }}
            </p>
          </div>
          <el-input class="box-input rounded-12px" placeholder="0.0"
            style="width: 100%; background-color: rgba(1, 17, 41, 0.6) !important" v-model="remove_amount"
            @input.native="calRemoval"></el-input>
          <div class="mt-10px mb-20px">
            <el-tag class="w-70px mr-14px" size type="primary" @click="percent_change(25)">
              <span class="leading-32px">25%</span>
            </el-tag>
            <el-tag class="w-70px mr-14px" size @click="percent_change(50)">
              <span class="leading-32px">50%</span>
            </el-tag>
            <el-tag class="w-70px mr-14px" size @click="percent_change(75)">
              <span class="leading-32px">75%</span>
            </el-tag>
            <el-tag class="w-72px" size @click="percent_change(100)">
              <span class="leading-32px">100%</span>
            </el-tag>
          </div>
          <div class="text-center mt-14px mb-17px">
            <img class="text-center" src="@/assets/images/liquidity/arrow_down2.svg" />
          </div>
          <div class="input-wrap !h-84px px-24px py-12px !block">
            <div class="flex items-center justify-between h-1/2">
              <span>-</span>
              <el-input class="box-input no-border small" style="width: 228px; height: 30px" v-model="token_0_removal"
                disabled>
              </el-input>
              <span class="text-16px text-[rgba(252,255,253,0.8)] font-500 ml-12px">{{ single_swap_pool.token_0
              }}</span>
            </div>
            <div class="flex items-center justify-between h-1/2">
              <span>-</span>
              <el-input class="box-input no-border small" style="width: 228px; height: 30px" v-model="token_1_removal"
                disabled>
              </el-input>
              <span class="text-16px text-[rgba(252,255,253,0.8)] font-500 ml-12px">{{ single_swap_pool.token_1
              }}</span>
            </div>
          </div>
          <div class="flex justify-between mt-10px">
            <p class="label">Your Pool Tokens</p>
            <div>
              <p class="label mb-5px">1 {{ single_swap_pool.token_0 }} = {{
                  formatNumber(single_swap_pool.token_1_reserve /
                    single_swap_pool.token_0_reserve, 4)
              }} {{ single_swap_pool.token_1 }}</p>
              <p class="label">1 {{ single_swap_pool.token_1 }} = {{ formatNumber(single_swap_pool.token_0_reserve /
                  single_swap_pool.token_1_reserve, 4)
              }} {{ single_swap_pool.token_0 }}</p>
            </div>
          </div>
          <div class="flex mt-35px justify-between">
            <div class="btn_border w-162px">
              <el-button type="primary" class="!w-1/1 !h-52x" :disabled="liquidity_approved" @click="approveLPToken">{{
                  liquidity_approved ? "Approved" : "Approve"
              }}
              </el-button>
            </div>
            <div class="btn_border w-162px">
              <el-button type="primary" class="!w-1/1 !h-52x" @click="removeLiquidity" :disabled="!valid_remove">
                <span class="-ml-5px">{{ valid_remove ? "Withdraw" : "Insufficient" }}</span>
              </el-button>
            </div>
          </div>
        </teamplate>
      </div>
    </div>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { single_swap_pool, initSinglePool } from '@/config/furion_swap/pool';
import { newMultiCallProvider } from "@/utils/web3/multicall";
import { fromWei, getNativeTokenAmount, toWei } from '@/utils/common';
import { _formatNumber, ALLOWANCE_THRESHOLD, tokenApprove } from '@/utils/common';
import { getTxURL } from '@/utils/common';

import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';

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
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      active: 2,
      active2: 1,
      num: 0,
      percent: 0,
      chainId: 4,
      sort: "HOT",
      searchKey: "",
      token_0_amount: "",
      token_1_amount: "",
      remove_amount: '',
      token_0_removal: '',
      token_1_removal: '',
      single_swap_pool: single_swap_pool,
      multicall: multicall,
      approved: false,
      liquidity_approved: false,
      allowance_0: 0,
      allowance_1: 0,
      allowance_liquidity: 0,
      valid_add: true,
      valid_remove: true,
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    this.single_swap_pool = single_swap_pool;
    this.single_swap_pool = await initSinglePool(this.single_swap_pool, this.chainId);
    if (!this.single_swap_pool.initialized) {
      this.$router.push('/liquidity/furion_swap/pool');
    }
    await this.updateUserInfo();
    // console.log('This is initialized single pool', this.single_swap_pool);
    this.checkApproval();
    this.checkLiquidityApprove();
  },
  methods: {

    async updateUserInfo() {
      let account = this.userInfo.userAddress;
      try {
        // console.log('Account info', account)
        if (this.single_swap_pool.token_0 == 'ETH') {
          this.single_swap_pool.token_0_balance = await getNativeTokenAmount(account);
          let token_1_contract = this.single_swap_pool.token_1_contract;
          this.single_swap_pool.token_1_balance = fromWei((await token_1_contract.methods.balanceOf(account).call()), parseInt(this.single_swap_pool.toke_1_decimal));
        } else {
          let token_0_contract = this.single_swap_pool.token_0_contract;
          let token_1_contract = this.single_swap_pool.token_1_contract;

          let multicall_list = [token_0_contract.methods.balanceOf(account), token_1_contract.methods.balanceOf(account)];
          const balance_results = await this.multicall.aggregate(multicall_list);
          // console.log('Balance info', balance_results);
          this.single_swap_pool.token_0_balance = fromWei(balance_results[0], parseInt(this.single_swap_pool.token_0_decimal));
          this.single_swap_pool.token_1_balance = fromWei(balance_results[1], parseInt(this.single_swap_pool.toke_1_decimal));

        }
      } catch (e) {
        console.warn('Fail to load balance')
      }


      let pair_contract = this.single_swap_pool.pair_contract;
      let new_multicall_list = [pair_contract.methods.totalSupply(), pair_contract.methods.balanceOf(account)];
      const pair_results = await this.multicall.aggregate(new_multicall_list);

      // console.log('Pair results', pair_results);
      this.single_swap_pool.pair_liquidity = parseInt(pair_results[0] / 1e14);
      this.single_swap_pool.user_liquidity = parseInt(pair_results[1] / 1e14);
      this.single_swap_pool.user_liquidity_proportion = this.single_swap_pool.user_liquidity / this.single_swap_pool.pair_liquidity;
      if (this.single_swap_pool.user_liquidity_proportion > 0.9999) {
        this.single_swap_pool.user_liquidity_proportion = 0.9999;
        this.single_swap_pool.user_liquidity = this.single_swap_pool.pair_liquidity * 0.9999;
      }

      this.single_swap_pool.token_0_pooled = this.single_swap_pool.user_liquidity_proportion * this.single_swap_pool.token_0_reserve;
      this.single_swap_pool.token_1_pooled = this.single_swap_pool.user_liquidity_proportion * this.single_swap_pool.token_1_reserve;
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

    maxAmount0() {
      this.token_0_amount = this.single_swap_pool.token_0_balance;
      this.calAmount1();
      if (this.token_1_amount > this.single_swap_pool.token_1_balance) {
        this.token_1_amount = this.single_swap_pool.token_1_balance;
        this.calAmount0();
      }
    },
    maxAmount1() {
      this.token_1_amount = this.single_swap_pool.token_1_balance;
      this.calAmount0();
      if (this.token_0_amount > this.single_swap_pool.token_0_balance) {
        this.token_0_amount = this.single_swap_pool.token_0_balance;
        this.calAmount1();
      }
    },
    calAmount0() {

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
    },
    calAmount1() {
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
    },
    checkApproval() {
      let account = this.userInfo.userAddress;
      if (this.single_swap_pool.token_0 == 'ETH') {
        this.single_swap_pool.token_1_contract.methods.allowance(account, this.single_swap_pool.router_address).call().then((allowance) => {
          this.allowance_0 = 10000000000000000000000000000;
          if (parseInt(allowance) > ALLOWANCE_THRESHOLD) {
            this.approved = true;
          }
        })

      } else {
        let multicall_list = [
          this.single_swap_pool.token_0_contract.methods.allowance(account, this.single_swap_pool.router_address),
          this.single_swap_pool.token_1_contract.methods.allowance(account, this.single_swap_pool.router_address)
        ];
        this.multicall.aggregate(multicall_list).then((allowance) => {
          // console.log('Allowance', allowance);
          this.allowance_0 = allowance[0];
          this.allowance_1 = allowance[1];
          if (parseInt(allowance[0]) > ALLOWANCE_THRESHOLD && parseInt(allowance[1]) > ALLOWANCE_THRESHOLD) {
            this.approved = true;
          }
        });
      }

    },
    checkLiquidityApprove() {
      let account = this.userInfo.userAddress;
      // console.log('Router address', this.single_swap_pool.router_address);
      let multicall_list = [
        this.single_swap_pool.pair_contract.methods.allowance(account, this.single_swap_pool.router_address)
      ];
      this.multicall.aggregate(multicall_list).then((allowance) => {
        // console.log('Allowance', allowance);
        this.allowance_liquidity = allowance[0];
        if (parseInt(allowance[0]) > ALLOWANCE_THRESHOLD) {
          this.liquidity_approved = true;
        }
      });
    },

    async approveToken() {
      let account = this.userInfo.userAddress;

      let dialog_list = [];
      if (this.single_swap_pool.token_0 != 'ETH' && this.allowance_0 < ALLOWANCE_THRESHOLD) {
        dialog_list.push(ProcessInfo.SWAP_APPROVE_TOKEN_1)
      }
      if (this.allowance_1 < ALLOWANCE_THRESHOLD) {
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

      if (this.allowance_1 < ALLOWANCE_THRESHOLD) {
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
    },
    async approveLPToken() {
      let account = this.userInfo.userAddress;
      // console.log('Ready for approval')
      openDialog(this.dialogue_info, [ProcessInfo.APPROVE_LIQUIDITY_TOKEN])
      if (this.allowance_liquidity < ALLOWANCE_THRESHOLD) {
        await tokenApprove(this.single_swap_pool.pair_address, account, this.single_swap_pool.router_address);
        // console.log('Approve token', this.single_swap_pool.token_0);
      }
      closeDialog(this.dialogue_info);
      this.liquidity_approved = true;
    },

    calRemoval() {
      // console.log('Pool liquidity', this.single_swap_pool.pool_liquidity)
      this.token_0_removal = (this.remove_amount / this.single_swap_pool.pair_liquidity * this.single_swap_pool.token_0_reserve).toFixed(18);
      this.token_1_removal = (this.remove_amount / this.single_swap_pool.pair_liquidity * this.single_swap_pool.token_1_reserve).toFixed(18);
      if (this.token_0_removal > single_swap_pool.token_0_pooled) {
        this.valid_remove = false;
        return
      }
      this.valid_remove = true;
      // console.log('Token removal changed', this.token_0_removal, this.token_1_removal);
    },

    async addLiquidity() {
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
      } else {
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

    },

    async removeLiquidity() {
      openDialog(this.dialogue_info, [ProcessInfo.SWAP_REMOVE_LIQUIDITY]);
      let account = this.userInfo.userAddress;
      let router_contract = this.single_swap_pool.router_contract;
      let current_time = Date.parse(new Date());
      // console.log(this.single_swap_pool.token_0_decimal, this.single_swap_pool.token_1_decimal);

      if (this.single_swap_pool.token_0 == 'ETH') {
        try {
          let tx_result = await router_contract.methods.removeLiquidityETH(
            this.single_swap_pool.token_1_address,
            toWei(this.remove_amount / 1e4),
            0, 0,
            account,
            current_time + 400).send({ from: account });
          this.successMessage(tx_result, 'Remove Liquidity Successfully');
        } catch (e) {
          console.warn(e)
          this.errorMessage('Remove Liquidity Error');
          this.remove_amount = '';
          this.token_0_removal = '';
          this.token_1_removal = '';
          closeDialog(this.dialogue_info);
          return
        }
      } else {
        try {
          let tx_result = await router_contract.methods.removeLiquidity(
            this.single_swap_pool.token_0_address,
            this.single_swap_pool.token_1_address,
            toWei(this.remove_amount / 1e4),
            0, 0,
            account,
            current_time + 400).send({ from: account });
          this.successMessage(tx_result, 'Remove Liquidity Successfully');
        } catch (e) {
          console.warn(e)
          this.errorMessage('Remove Liquidity Error');
          this.remove_amount = '';
          this.token_0_removal = '';
          this.token_1_removal = '';
          closeDialog(this.dialogue_info);
          return
        }
      }

      this.remove_amount = '';
      this.token_0_removal = '';
      this.token_1_removal = '';
      closeDialog(this.dialogue_info);
      await this.updatePool();
      await this.updateUserInfo();

    },

    async updatePool() {

      let pair_contract = this.single_swap_pool.pair_contract;
      const reserves = await pair_contract.methods.getReserves().call();
      if (this.single_swap_pool.token_0_address < this.single_swap_pool.token_1_address) {
        this.single_swap_pool.token_0_reserve = fromWei(reserves[0], parseInt(this.single_swap_pool.token_0_decimal));
        this.single_swap_pool.token_1_reserve = fromWei(reserves[1], parseInt(this.single_swap_pool.token_1_decimal));
      } else {
        this.single_swap_pool.token_0_reserve = fromWei(reserves[1], parseInt(this.single_swap_pool.token_0_decimal));
        this.single_swap_pool.token_1_reserve = fromWei(reserves[0], parseInt(this.single_swap_pool.token_1_decimal));
      }
      this.single_swap_pool.pool_liquidity = this.single_swap_pool.token_0_reserve * this.single_swap_pool.token_1_reserve;

    },

    percent_change(n) {
      if (n) {
        this.percent = n;
      }
      this.remove_amount = ((this.single_swap_pool.user_liquidity * n) / 100).toFixed(4);
      this.calRemoval();
    },
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },
    onSelect1(str) {
      this.$refs.type1.doClose();
      this.type1 = str;
    },
    onSelect2(str) {
      this.$refs.type2.doClose();
      this.type2 = str;
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
