<style lang="scss" scoped>
.title {
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.title2 {
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
  font-size: 20px;
}

.single {
  margin-left: 15%;
  margin-right: 15%
}

.bar {
  width: 100%;
  background: rgba(252, 255, 253, 0.12);
  height: 52px;
  @apply flex items-center justify-center mb-40px;
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
      text-align: left;

      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.3) !important;
      }
    }
  }
}
</style>
  
<template>
  <div class="!w-full pb-100px">
    <div class="flex pt-60px justify-center mb-60px" v-if="!expanded">
      <div class="title mr-10px">Token Farming</div>
      <img src="@/assets/images/farming.svg" alt="" />
    </div>

    <div v-else class="bar">
      <div class="title2">Token Farming</div>
    </div>

    <div class="!w-1150px mx-auto">
      <el-table :data="pools" ref="table" @cell-click="cell_click" class="custom w-1/1" @expand-change="expandChange">
        <el-table-column prop="Pool" label="Pool" sortable width="230">
          <template slot-scope="scope">
            <div class="flex items-center py-10px" v-if="scope.row.token_1 != ''">
              <div class="relative pl-15px flex-shrink-0">
                <img class="w-46px" :src="scope.row.token_0_image" />
              </div>
              <div class="relative -ml-12px flex-shrink-0 mr-12px">
                <img :src="scope.row.token_1_image" class="w-46px" />
              </div>
              <div>
                <Search-keyword :keyword="query.key" :text="scope.row.pool_name"></Search-keyword>
                <div class="text-13px font-300 mt-6px">{{scope.row.token_1 == ''? "×1.0": "x1.2"}}</div>
              </div>
            </div>
            <div class="flex items-center py-10px" v-else>
              <div class="single flex-shrink-0">
                <img class="w-46px" :src="scope.row.token_0_image" />
              </div>
              <div>
                <Search-keyword :keyword="query.key" :text="scope.row.pool_name"></Search-keyword>
                <div class="text-13px font-300 mt-6px">{{scope.row.token_1 == ''? "×1.0": "x1.2"}}</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column type="expand" width="-1">
          <template slot-scope="scope">
            <div>
              <div class="flex justify-between items-center mb-10px"
                style="border-bottom: 1px solid rgba(252, 255, 253, 0.1)">
                <div class="w-1/2 font-700 text-18px flex items-center py-22px">
                  Manage Position
                </div>
                <div class="flex text-13px font-600">
                  <div class="mr-50px"> <img class="w-18px" src="@/assets/images/mining/balance.png" /> &nbsp;Balance:
                    {{formatNumber(scope.row.user_balance)}}</div>
                  <div class="mr-50px"><img class="w-18px" src="@/assets/images/mining/liquidity.png" /> &nbsp;
                    Liquidity: {{formatNumber(scope.row.user_stake)}}</div>
                  <div><img class="w-16px" src="@/assets/images/mining/reward.png" /> &nbsp;Rewards:
                    {{formatNumber(scope.row.user_reward)}}</div>
                </div>
              </div>

              <div class="mb-24px flex justify-between">
                <div></div>
                <el-button type="primary" style="text-transform: initial"
                  class="!p-0 !w-180px !h-42px !font-900 !text-16px" @click="harvestReward(scope.row.index)">
                  HARVEST
                </el-button>
              </div>

              <div class="flex justify-between mb-15px">
                <div class="flex items-center">
                  <img src="@/assets/images/mining/btn1s.svg" class="cursor-pointer" v-if="scope.row.type == '1'" />
                  <img src="@/assets/images/mining/btn1.svg" class="cursor-pointer" v-else
                    @click="scope.row.type = '1'; reset(scope.row.index)" />
                  <img src="@/assets/images/mining/btn2s.svg" class="cursor-pointer" v-if="scope.row.type == '2'" />
                  <img src="@/assets/images/mining/btn2.svg" class="cursor-pointer" v-else
                    @click="scope.row.type = '2'; reset(scope.row.index)" />
                </div>
                <div>
                  <el-tag class="w-48px mr-15px" size="medium" type="primary"
                    @click="percent_change(scope.row.index, 25)">
                    <span>25%</span>
                  </el-tag>
                  <el-tag class="w-48px mr-15px" size="medium" @click="percent_change(scope.row.index, 50)">
                    <span>50%</span>
                  </el-tag>
                  <el-tag class="w-48px mr-15px" size="medium" @click="percent_change(scope.row.index, 75)">
                    <span>75%</span>
                  </el-tag>
                  <el-tag class="w-48px" size="medium" @click="percent_change(scope.row.index, 100)">
                    <span>100%</span>
                  </el-tag>
                </div>
              </div>

              <div class="relative mb-24px">
                <el-input v-model="num" :controls="false" type="number" class="custom box-input !w-1/1"
                  placeholder="0.0 " @input.native="calLpTokenValue(scope.row.index); calAmt(scope.row.index)">
                </el-input>
                <div class="absolute right-0 center-y font-400 text-13px text-right leading-16px pr-24px"
                  style="color: rgba(252, 255, 253, 0.4)">
                  <div class="mb-5px text-gray-700">LP Token</div>
                  <div class="text-gray-700">=$ {{scope.row.lp_token_value}}</div>
                </div>
              </div>

              <el-slider v-model="scope.row.percent" :max="100" :format-tooltip="
                (v) => {
                  return (v += '%');
                }
              " :marks="{
                25: '',
                50: '',
                75: '',
              }" @change="percent_change(scope.row.index, scope.row.percent)"></el-slider>

              <div class="flex text-center font-700 text-14px text-[#86898C]">
                <div class="flex-1">25%</div>
                <div class="flex-1">50%</div>
                <div class="flex-1">75%</div>
                <div class="flex-1">100%</div>
              </div>

              <div class="mt-32px">
                <el-button plain class="w-1/1 !h-70px !text-18px" :disabled="disable"
                  @click="handleAmt(scope.row.index)">
                  {{info}}
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="TVL" label="TVL" align="center">
          <template slot-scope="scope">
            <div class="mb-5px">
              <span class="font-600 mr-6px">{{formatNumber(scope.row.tvl)}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Rewards" label="Rewards" align="center">
          <template slot-scope="scope">
            <div class="flex items-center justify-center">
              <div class="mr-15px">
                <img src="@/assets/images/mining/token.png" />
              </div>
              <div class="text-13px font-300">{{formatNumber(scope.row.reward_per_day)}} PER/DAY</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="APR" label="APR" align="center" width="200">
          <template slot-scope="scope">
            <div class="mb-5px">
              <span class="font-600 mr-6px">{{formatNumber(scope.row.apr)}} %</span>
              <!-- <el-popover placement="bottom" title="" trigger="hover" :visible-arrow="false" popper-class="el-tip">
                <div class="text-center text-[#0B1A3B]">
                  <div>APR on daily basis</div>
                </div>
                <img src="@/assets/images/liquidity/q.svg" class="cursor-pointer w-15px" slot="reference" />
              </el-popover> -->
            </div>
            <div class="font-400 text-13px">annualized</div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import { InitialPoolList, InitFarmingPool, getPoolSummary } from '@/config/furion_farming/pool';
import { newMultiCallProvider } from "@/local/utils/web3/multicall";
import { _formatNumber, ALLOWANCE_THRESHOLD, tokenApprove, getTxURL, fromWei, toWei, getNativeTokenAmount } from '@/local/utils/common';
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
    store.commit("update", ["admin.activeMenu", "/mining"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    query() {
      return this.$route.query;
    },
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
  },

  data() {
    const multicall = newMultiCallProvider(4);
    return {
      searchKey: "",
      num: '',
      expanded: false,
      chainId: 4,
      active: 1,
      multicall: multicall,
      dialogue_info: DialogInfo,
      pools: InitialPoolList,
      disable: true,
      info: 'ENTER AN AMOUNT',
    };
  },

  async mounted() {
    let index = 0;
    for (; index < this.pools.length; index++) {
      this.pools[index] = await InitFarmingPool(this.pools[index], index, this.chainId);
      await this.updateUserInfo(index);
      this.checkLPApproval(index);
      //console.log('[Pool Id] ', this.pools[index].index);
    }
  },

  methods: {

    /******************************* Components functions *******************************/

    cell_click(row) {
      this.$refs.table.toggleRowExpansion(row);
      this.reset()
    },

    expandChange(row, rows) {
      this.expanded = rows.length;
    },

    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },

    async percent_change(index, n) {
      let pool = this.pools[index];
      const type = pool.type;
      pool.percent = n;
      try {
        // percent amt for adding liquidity
        if (type == '1') {
          const lp_token_bal = parseFloat(pool.user_balance);
          const amt = parseFloat(((lp_token_bal * n) / 100));
          if (amt <= 0) {
            this.reset(index);
            return;
          }
          this.num = amt.toFixed(6);
          this.pools[index].amt = parseFloat(amt.toFixed(6));
          await this.calAmt(index);
        }

        // percent amt for removing liquidity
        else if (type == '2') {
          const user_stake = parseFloat(pool.user_stake);
          const amt = parseFloat(((user_stake * n) / 100));
          if (amt <= 0) {
            this.reset(index);
            return;
          }
          this.num = amt.toFixed(6);
          this.pools[index].amt = parseFloat(amt.toFixed(6));
          await this.calAmt(index);
        }
        await this.calLpTokenValue(index);
      } catch (e) {
        console.warn(e);
        this.reset(index);
        return;
      }
    },

    async handleAmt(index) {
      let pool = this.pools[index];
      //console.log('Handling amt: ', pool.amt);
      try {
        const res = await this.validateAmt(index);
        //console.log('Handling Amount...', res);
        if (res) {
          const type = this.pools[index].type;
          if (type == '1') {
            // add liquidity
            await this.addLiquidity(index);
          } else if (type == '2') {
            // remove liquidity
            await this.removeLiquidity(index);
          } else {
            this.reset(index);
            return;
          }
        } else {
          this.reset(index);
          return;
        }
        this.reset(index);
        await this.refresh(index);

      } catch (e) {
        console.warn(e);
        this.errorMessage('Error Handling Amount');
        this.reset(index);
        return;
      }
    },

    async calLpTokenValue(index) {
      if (this.num == '') {
        this.reset(index);
        return;
      }
      let pool = this.pools[index];
      const amt = this.num;
      pool.lp_token_value = (pool.lp_token_price * parseFloat(amt)).toFixed(4);
      this.pools[index] = pool;
      return;
    },

    async calAmt(index) {
      if (this.num == '') {
        this.reset(index);
        this.info = 'ENTER AN AMOUNT';
        this.disable = true;
        return;
      }
      const pool = this.pools[index];
      const type = pool.type;
      const amt = parseFloat(this.num);
      if (amt <= 0.0) {
        this.reset(index);
        this.info = 'ENTER AN AMOUNT';
        this.disable = true;
        return;
      }
      if (type == '1') {
        const user_balance = parseFloat(this.pools[index].user_balance);
        if (amt > user_balance) {
          this.info = 'INSUFFICIENT BALANCE';
          this.disable = true;
        } else {
          this.info = 'ADD LIQUIDITY';
          this.disable = false;
        }
      } else if (type == '2') {
        const user_stake = parseFloat(pool.user_stake);
        if (amt > user_stake) {
          this.info = 'INSUFFICIENT LIQUIDITY';
          this.disable = true;
        } else {
          this.info = 'REMOVE LIQUIDITY';
          this.disable = false;
        }
      }
      pool.amt = amt;
      this.pools[index] = pool
      return;
    },
    
    /******************************* Check & Update info *******************************/

    async updateUserInfo(index) {
      let pool = this.pools[index];
      let account = this.userInfo.userAddress;
      if (account == null) {
        return;
      }

      try {
        const balance = await pool.lp_token_contract.methods.balanceOf(account).call();
        pool.user_balance = fromWei(balance, parseInt(pool.lp_token_decimal));

        // update user stake and pending reward
        const pool_id = pool.pool_Id;
        const user_stake = await pool.farming_contract.methods.getUserBalance(pool_id, account).call();
        const user_reward = await pool.farming_contract.methods.pendingFurion(pool_id, account).call();


        pool.user_stake = fromWei(user_stake, parseInt(pool.lp_token_decimal));
        pool.user_reward = fromWei(user_reward, 18);
        this.pools[pool.index] = pool;

      } catch (e) {
        console.warn(e);
      }
    },

    async refresh(index) {
      try {
        // update user balance, user stake, user rewards
        await this.updateUserInfo(index);
        // get summary based on updated user info
        let summary = await getPoolSummary(this.pools[index], this.chainId);
        this.pools[index].tvl = summary['tvl'];
        this.pools[index].apr = summary['apr'];

      } catch (e) {
        console.warn(e);
        return;
      }
    },

    async reset(index) {
      this.num = '';
      this.info = 'ENTER AN AMOUNT';
      this.disable = true;
      if (index == -1) {
        // reset all the pools;
        for (let id = 0; id < this.pools.length; id++) {
          this.pools[id].amt = undefined;
          this.pools[id].percent = 0;
          this.pools[id].lp_token_value = '0.000';
        }
      } else if (index >= 0) {
        // reset only specific pool
        this.pools[index].amt = undefined;
        this.pools[index].percent = 0;
        this.pools[index].lp_token_value = '0.000';
      }
    },

    checkLPApproval(index) {
      try {
        let pool = this.pools[index];
        let account = this.userInfo.userAddress;
        const lp_token_contract = pool.lp_token_contract;
        let multicall_list = [
          lp_token_contract.methods.allowance(account, pool.farming_address)
        ];
        this.multicall.aggregate(multicall_list).then((allowance) => {
          // console.log('Allowance', allowance);
          pool.allowance_liquidity = allowance[0];
          if (parseInt(allowance[0]) > ALLOWANCE_THRESHOLD) {
            pool.liquidity_approved = true;
          }
        });
        this.pools[pool.index] = pool;

      } catch (e) {
        console.warn(e);
      }
    },

    async approveLPToken(index) {
      let pool = this.pools[index];
      let account = this.userInfo.userAddress;
      try {
        await tokenApprove(pool.lp_token_address, account, pool.farming_address);
      } catch (e) {
        console.warn(e);
        return;
      }

      await pool.lp_token_contract.methods.allowance(account, pool.farming_address).call()
        .then(res => {
          const allowance = fromWei(res, parseInt(pool.lp_token_decimal));
          //console.log('[Allowance] ', allowance);
          if (allowance > ALLOWANCE_THRESHOLD) {
            pool.allowance_liquidity = allowance;
            pool.liquidity_approved = true;
          }
        });

      this.pools[index] = pool;

    },

    async validateAmt(index) {
      let pool = this.pools[index];
      const amt = pool.amt;
      if (amt == undefined) {
        this.errorMessage('Enter Amount');
        return false;
      }
      if (amt < 0) {
        this.errorMessage('Amount must be greater than 0.0');
        return false;
      }
      // compare amt for different user options such as add or remove liquidity
      const type = pool.type;
      // user wants to add liquidity, check amt against user balance
      if (type == '1') {
        const lp_token_bal = parseFloat(pool.user_balance);
        if (amt > lp_token_bal) {
          this.errorMessage('Insufficient Balance');
          return false;
        }
        pool.amt = parseFloat(amt.toFixed(6));
        this.pools[index] = pool;
        return true;
      }

      // user wants to remove liquidity, check amt against user current stake in the farming pool
      if (type == '2') {
        const user_current_stake = parseFloat(pool.user_stake);
        if (amt > user_current_stake) {
          this.errorMessage('Insufficient Liquidity Inside The Pool');
          return false;
        }
        pool.amt = parseFloat(amt.toFixed(6));
        this.pools[index] = pool;
        return true;
      }

      return false;
    },

    /******************************* Contract functions *******************************/
    
    async harvestReward(index) {
      let pool = this.pools[index];
      if (parseFloat(pool.user_reward) <= 0) {
        this.errorMessage('Insufficient Rewards');
        this.reset(index);
        return;
      }

      const account = this.userInfo.userAddress;
      const farming_contract = pool.farming_contract;
      const pool_id = pool.pool_Id;
      try {
        await openDialog(this.dialogue_info, [ProcessInfo.FARM_HARVEST_REWARD]);
        const gas = await farming_contract.methods.harvest(pool_id, account).estimateGas({
          from: account,
        });
        let tx_result = await farming_contract.methods
          .harvest(pool_id, account)
          .send({ from: account, gas: gas });
        closeDialog(this.dialogue_info);
        this.successMessage(tx_result, 'Successfully harvested rewards');
        this.reset(index);
        await this.refresh(index);

      } catch (e) {
        //console.log('[Token Farming] [Harvest] Error harvesting!!');
        console.warn(e);
        closeDialog(this.dialogue_info);
        this.errorMessage('Error Harvesting Reward');
        this.reset(index);
        return;
      }
    },

    async addLiquidity(index) {
      let pool = this.pools[index];
      let account = this.userInfo.userAddress;
      const farming_contract = pool.farming_contract;
      const pool_id = pool.pool_Id;
      const amount = toWei(pool.amt, parseInt(pool.lp_token_decimal));

      if (!pool.liquidity_approved || pool.allowance_liquidity < parseFloat(pool.amt)) {
        //console.log('Approve contract and add liquidity');
        //approve liquidity token && add liquidity in a single dialogue
        try {
          await openDialog(
            this.dialogue_info,
            [ProcessInfo.APPROVE_LIQUIDITY_TOKEN, ProcessInfo.FARM_ADD_LIQUIDITY]);

          await this.approveLPToken(index);
          if (!pool.liquidity_approved || pool.allowance_liquidity < parseFloat(pool.amt)) {
            closeDialog(this.dialogue_info);
            this.errorMessage('Approve token error');
            return;
          }

          stepDialog(this.dialogue_info);

          const gas = await farming_contract.methods.stake(pool_id, amount).estimateGas({
            from: account
          });
          let tx_result = await farming_contract.methods
            .stake(pool_id, amount)
            .send({ from: account, gas: gas });

          closeDialog(this.dialogue_info);
          this.successMessage(tx_result, 'Liquidity Added');

        } catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          this.errorMessage('Error adding liquidity');
          this.reset(index);
          return;
        }

      } else {
        try {
          await openDialog(this.dialogue_info, [ProcessInfo.FARM_ADD_LIQUIDITY]);
          const gas = await farming_contract.methods.stake(pool_id, amount).estimateGas({
            from: account
          });
          let tx_result = await farming_contract.methods
            .stake(pool_id, amount)
            .send({ from: account, gas: gas });
          closeDialog(this.dialogue_info);
          this.successMessage(tx_result, 'Liquidity Added');

        } catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          this.errorMessage('Error adding liquidity');
          this.reset(index);
          return;
        }
      }
    },

    async removeLiquidity(index) {
      let pool = this.pools[index];
      let account = this.userInfo.userAddress;
      const farming_contract = pool.farming_contract;
      const pool_id = pool.pool_Id;
      const amount = toWei(pool.amt, parseInt(pool.lp_token_decimal));

      try {
        const gas = await farming_contract.methods.withdraw(pool_id, amount).estimateGas({
          from: account
        });
        await openDialog(this.dialogue_info, [ProcessInfo.FARM_REMOVE_LIQUIDITY]);
        let tx_result = await farming_contract.methods
          .withdraw(pool_id, amount)
          .send({ from: account, gas: gas });
        closeDialog(this.dialogue_info);
        this.successMessage(tx_result, 'Remove Liquidity Successfully');

      } catch (e) {
        console.warn(e);
        closeDialog(this.dialogue_info);
        this.errorMessage('Remove Liquidity Error');
        this.reset(index);
        return;
      }
    },


    /******************************* Helper functions *******************************/

    formatNumber(value, fixed = 2) {
      const val = parseFloat(value);
      //console.log('[Format Number] ', value, val);
      // return the value if greater than 2 significant decimals
      if (val * 100 < 1) {
        return value;
      }
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
  
  