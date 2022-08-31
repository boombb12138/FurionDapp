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

.bar {
  width: 100%;
  background: rgba(252, 255, 253, 0.12);
  height: 52px;
  @apply flex items-center justify-center mb-40px;
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
      <el-table
        :data="pools"
        ref="table"
        @cell-click="cell_click"
        class="custom w-1/1"
        @expand-change="expandChange"
      >
        <el-table-column prop="Pool" label="Pool" sortable width="230">
          <template slot-scope="scope">
            <div class="flex items-center py-10px">
              <div class="relative pl-15px flex-shrink-0">
                <img
                  class="w-46px"
                  :src="scope.row.token_0_image"
                />
              </div>
              <div class="relative -ml-12px flex-shrink-0 mr-12px">
                <img :src="scope.row.token_1_image" class="w-46px" />
              </div>
              <div>
                <Search-keyword
                  :keyword="query.key"
                  :text="scope.row.pool_name"
                ></Search-keyword>
                <div class="text-13px font-300 mt-6px">×1.2</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column type="expand" width="-1">
          <template slot-scope="scope">
            <div>
              <div
                class="flex justify-between items-center mb-24px"
                style="border-bottom: 1px solid rgba(252, 255, 253, 0.1)"
              >
                <div class="w-1/2 font-700 text-18px flex items-center py-22px">
                  Manage Position
                </div>
                <div class="flex text-15px font-500">
                  <img
                    src="@/assets/images/mining/myliquidity.jpg"
                    width="23"
                    class="mb-20px"
                  />
                  <div class="mr-40px mt-5px ml-4px">My Liquidity: {{scope.row.user_stake}}</div>
                  <img
                    src="@/assets/images/mining/reward.jpg"
                    width="23"
                    class="mb-20px"
                  />
                  <div class="mr-40px mt-5px ml-4px">Rewards: {{scope.row.user_reward}}</div>
                  <img
                    src="@/assets/images/mining/stake.jpg"
                    width="23"
                    class="mb-20px"
                  />
                  <div class="mt-5px ml-4px">Stake: xxxx.xx</div>
                </div>
              </div>

              <div class="mb-24px flex justify-between">
                <div></div>
                <el-button
                  type="primary"
                  style="text-transform: initial"
                  class="!p-0 !w-180px !h-42px !font-900 !text-16px"
                  @click="harvestReward(scope.row)"
                >
                  HARVEST
                </el-button>
              </div>

              <div class="flex justify-between mb-15px">
                <div class="flex items-center">
                  <img
                    src="@/assets/images/mining/btn1s.svg"
                    class="cursor-pointer"
                    v-if="scope.row.type == '1'"
                  />
                  <img
                    src="@/assets/images/mining/btn1.svg"
                    class="cursor-pointer"
                    v-else
                    @click="scope.row.type = '1'; percent_change(scope.row, scope.row.percent)"
                  />
                  <img
                    src="@/assets/images/mining/btn2s.svg"
                    class="cursor-pointer"
                    v-if="scope.row.type == '2'"
                  />
                  <img
                    src="@/assets/images/mining/btn2.svg"
                    class="cursor-pointer"
                    v-else
                    @click="scope.row.type = '2'; percent_change(scope.row, scope.row.percent)"
                  />
                </div>
                <div>
                  <el-tag
                    class="w-48px mr-15px"
                    size="medium"
                    type="primary"
                    @click="percent_change(scope.row, 25)"
                  >
                    <span>25%</span>
                  </el-tag>
                  <el-tag
                    class="w-48px mr-15px"
                    size="medium"
                    @click="percent_change(scope.row, 50)"
                  >
                    <span>50%</span>
                  </el-tag>
                  <el-tag
                    class="w-48px mr-15px"
                    size="medium"
                    @click="percent_change(scope.row, 75)"
                  >
                    <span>75%</span>
                  </el-tag>
                  <el-tag
                    class="w-48px"
                    size="medium"
                    @click="percent_change(scope.row, 100)"
                  >
                    <span>100%</span>
                  </el-tag>
                </div>
              </div>

              <div class="relative mb-24px">
                <el-input-number
                  v-model="scope.row.amt"
                  :precision="8"
                  :controls="false"
                  class="custom !w-1/1"
                  placeholder="0.0000"
                ></el-input-number>
                <div
                  class="absolute right-0 center-y font-400 text-13px text-right leading-16px pr-24px"
                  style="color: rgba(252, 255, 253, 0.4)"
                >
                  <div class="mb-5px">LP Token</div>
                  <div>=$ 0</div>
                </div>
              </div>

              <el-slider
                v-model="scope.row.percent"
                :max="100"
                :format-tooltip="
                  (v) => {
                    return (v += '%');
                  }
                "
                :marks="{
                  25: '',
                  50: '',
                  75: '',
                }"
                @change="percent_change(scope.row, scope.row.percent)"
              ></el-slider>

              <div class="flex text-center font-700 text-14px text-[#86898C]">
                <div class="flex-1">25%</div>
                <div class="flex-1">50%</div>
                <div class="flex-1">75%</div>
                <div class="flex-1">100%</div>
              </div>

              <div class="mt-32px">
                <el-button plain class="w-1/1 !h-70px !text-18px" @click="handleAmt(scope.row)">
                  ENTER AN AMOUNT
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="TVL" label="TVL" align="center"> </el-table-column>
        <el-table-column prop="Rewards" label="Rewards" align="center">
          <template slot-scope="scope">
            <div class="flex items-center justify-center">
              <div class="mr-15px">
                <img src="@/assets/images/mining/token.png" />
              </div>
              <div class="text-13px font-300">
                {{ scope.row.REWARD_PER_DAY }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="APR" label="APR" align="center" width="200">
          <template slot-scope="scope">
            <div class="mb-5px">
              <span class="font-600 mr-6px">{{ scope.row.APR }}</span>
              <el-popover
                placement="bottom"
                title=""
                trigger="hover"
                :visible-arrow="false"
                popper-class="el-tip"
              >
                <div class="text-center text-[#0B1A3B]">
                  <div>text...</div>
                </div>
                <img
                  src="@/assets/images/liquidity/q.svg"
                  class="cursor-pointer w-15px"
                  slot="reference"
                />
              </el-popover>
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
import { getFarmingPool } from '@/config/furion_farming/pool';
import { newMultiCallProvider } from "@/utils/web3/multicall";
import { _formatNumber, ALLOWANCE_THRESHOLD, tokenApprove, getTxURL, fromWei, toWei, getNativeTokenAmount } from '@/utils/common';
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
  async asyncData({ store, $axios, app, query}) {
    store.commit("update", ["admin.activeMenu", "/mining"]);
  },
  props: {},
  components: {ProceedingDetails},
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
      expanded: false,
      chainId: 4,
      active: 1,
      multicall: multicall,
      dialogue_info: DialogInfo,
      pools: [],
      index: 0 // count the number of pool and mark index of every newly added pool
    };
  },

  async mounted() {
    let pools = [];
    let index = this.index;
    let token_0_img = require('@/assets/images/liquidity/tokens/FUR.png')
    let token_1_img = require('@/assets/images/liquidity/tokens/ETH.png')
    let fur_eth_pool = await getFarmingPool(
    'FUR', token_0_img,
    'ETH', token_1_img,
    '0x7a01B3fDDA5046B66B3DBc561Ab33bA23017Fe70'
    );
    fur_eth_pool.index = index;
    pools[index] = fur_eth_pool;
    console.log(fur_eth_pool);

    index += 1;

    token_1_img = require('@/assets/images/liquidity/tokens/USDT.png')
    let fur_usdt_pool = await getFarmingPool(
    'FUR', token_0_img,
    'USDT', token_1_img,
    '0x3dFDc7821edCc79c92890E5404687D1B1C96D494'
    );
    fur_usdt_pool.index = index;
    pools[index] = fur_usdt_pool;
    console.log(fur_usdt_pool);

    index += 1;
    this.index = index;
    this.pools = pools;

    for(let i = 0; i < pools.length; i++) {
      // update user_balance, user_stake, user_reward
      //console.log('[Mounted] Updating user info ');
      await this.updateUserInfo(pools[i]);
      // check if enough allowance has been allowed to farming address by a user
      this.checkLPApproval(pools[i]);
    }
  },

  methods: {

    async updateUserInfo(pool) {
      let account = this.userInfo.userAddress;
      //console.log('[Token Farming] [User Update] user account ', account);
      if (account == null) {
        // account is not initialized;
        //console.log('[Token Farming] [User Update] account not init')
        return;
      }

      try {
        const balance = await pool.lp_token_contract.methods.balanceOf(account).call();
        pool.user_balance = fromWei(balance, parseInt(pool.lp_token_decimal)).toFixed(4);
        //console.log('[Token Farming] [User Update]user balance ', pool.user_balance);

        // update user stake and pending reward
        const pool_id = pool.pool_Id;
        const user_stake = await pool.farming_contract.methods.getUserBalance(pool_id, account).call();
        const user_reward = await pool.farming_contract.methods.pendingFurion(pool_id, account).call();

        //let multicall_list = [
          //pool.farming_contract.methods.getUserBalance(pool_id, account).call(),
          //pool.farming_contract.methods.pendingFurion(pool_id, account).call()
          //]
          //let results = await this.multicall.aggregate(multicall_list);
          pool.user_stake = fromWei(user_stake, parseInt(pool.lp_token_decimal)).toFixed(4);
          //console.log('[Token Farming] [User Update] user stake ', pool.user_stake);
          // the reward is in FUR
          pool.user_reward = fromWei(user_reward, 18).toFixed(4);
          //console.log('[Token Farming] [User Update] user reward ', pool.user_reward);

          this.pools[pool.index] = pool;

      } catch (e) {
        console.warn('[Token Farming] [user Update] Failed to update user info ', e);
        console.log(e);
      }
    },

    percent_change(pool, n) {
      //console.log('[Token Farming] [Amt Percent] calculating...')
      const type = pool.type;
      pool.percent = n;
      if (type == '1') {
        // add liquidity option, fix amt according to user lp token balance
        //console.log('[Token Farming] Adding Liquidity');
        const lp_token_bal = parseFloat(pool.user_balance);
        pool.amt = parseFloat((( (lp_token_bal * n) / 100 ))).toFixed(8);
      } else if (type == '2') {
        //console.log('[Token Farming] Removing Liquidity');
        const user_stake = parseFloat(pool.user_stake);
        pool.amt = parseFloat(( (user_stake * n) / 100 )).toFixed(8);
      }
      this.pools[pool.index] = pool;
    },

    cell_click(row) {
      this.$refs.table.toggleRowExpansion(row);
    },
    expandChange(row, rows) {
      this.expanded = rows.length;
    },

    checkLPApproval(pool) {
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
    },

    async approveLPToken(pool) {
      let account = this.userInfo.userAddress;
      openDialog(this.dialogue_info, [ProcessInfo.APPROVE_LIQUIDITY_TOKEN])
      //if (pool.allowance_liquidity < ALLOWANCE_THRESHOLD) {
        try {
          await tokenApprove(pool.lp_token_address, account, pool.farming_address);
        }
        catch (e) {
          console.warn(e);
          console.log('[Token Farming] [Approve LP Token] Error approving lp token');
          closeDialog(this.dialogue_info);
          this.errorMessage('Error approve token');
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
      })
      this.pools[pool.index] = pool;
      closeDialog(this.dialogue_info);
    },

    async harvestReward(pool) {
      //console.log('[Token Farming] [Harvest] harvesting...')
      if (parseFloat(pool.user_reward) <= 0) {
        //console.log('[Token Farming] [Harvest] Insufficient reward amt');
        this.errorMessage('Insufficient rewards');
        return;
      }
      await openDialog(this.dialogue_info, [ProcessInfo.FARM_HARVEST_REWARD]);
      let account = this.userInfo.userAddress;
      const farming_contract = pool.farming_contract;
      const pool_id = pool.pool_Id;
      try {
        let tx_result = await farming_contract.methods
                        .harvest(pool_id, account)
                        .send({from: account});
        //console.log('[Token Farming] [Harvest Reward] ', tx_result);
      } catch(e) {
        //console.log('[Token Farming] [Harvest] Error harvesting!!');
        console.warn(e);
        closeDialog(this.dialogue_info);
        this.errorMessage('Error Harvesting Reward');
        return;
      }
      // end harvest reward dialog
      //await this.refresh(pool);
      closeDialog(this.dialogue_info);
      await this.updateUserInfo(pool);
    },

    async handleAmt(pool) {
      //console.log('[Token Farming] [Amt Handle] handling amt...');
      if (pool.amt <= 0) {
        this.errorMessage('Please Enter Some Amount')
        //console.log('[Token Farming] [Amt Handle] You must enter some amt');
        return;
      }
      let account = this.userInfo.userAddress;
      const farming_contract = pool.farming_contract;
      const pool_id = pool.pool_Id;
      const amount = toWei(pool.amt, parseInt(pool.lp_token_decimal));

      // add liquidity
      if (pool.type == '1') {
        //console.log('[Token Farming] [Amt Handle] Adding liquidity')
        try {
          if (pool.amt > parseFloat(pool.user_balance)) {
            //console.log('[Token Farming] [Handle Amt] Insufficient LP Token Balance');
            this.errorMessage('Insufficient LP token Balance');
            return;
          }

          // approve liquidity token
          if (!pool.liquidity_approved || pool.allowance_liquidity < pool.amt) {
              // approve liquidity token first
              await this.approveLPToken(pool);
              //console.log('[Token Farming] [Add Liquidity] Amt: ', amount, ', allowance: ', pool.allowance_liquidity);
              if (pool.allowance_liquidity < pool.amt) {
                //console.log('[Token Farming] [Handle amt] Insufficient approval of tokens by a user');
                this.errorMessage('Insufficient approval of tokens to farming contract');
                return;
              }
          }
          //console.log('[Token Farming] [Add Liquidity] Amt: ', amount, ', allowance: ', pool.allowance_liquidity);
          await openDialog(this.dialogue_info, [ProcessInfo.FARM_ADD_LIQUIDITY]);
            let tx_result = await farming_contract.methods
            .stake(pool_id, amount)
            .send({from: account})
            this.successMessage(tx_result, 'Add Liquidity Successfully');

          } catch(e) {
            console.warn(e);
            this.errorMessage('Add Liquidity Error');
            pool.amt = 0.000;
            pool.percent = 0;
            pool.type = '1';
            closeDialog(this.dialogue_info);
            this.pools[pool.index] = pool;
            return
          }
      }
      // else remove liquidity
      else if (pool.type == '2') {
        try {
          if (pool.amt > parseFloat(pool.user_stake)) {
            //console.log('[Token Farming] [Handle Amt] Amt must be less than equal to the liquidity into the farming pool');
            this.errorMessage('Insufficient liquidity into the pool');
            return;
          }
          await openDialog(this.dialogue_info, [ProcessInfo.FARM_REMOVE_LIQUIDITY]);
          let tx_result = await farming_contract.methods
          .withdraw(pool_id, amount)
          .send({from: account})
          this.successMessage(tx_result, 'Remove Liquidity Successfully');

          } catch(e) {
            console.warn(e);
            this.errorMessage('Remove Liquidity Error');
            pool.amt = 0.000;
            pool.percent = 0;
            pool.type = '1';
            closeDialog(this.dialogue_info);
            this.pools[pool.index] = pool;
            return;
          }
        }
        pool.amt = 0.000;
        pool.percent = 0;
        pool.type = '1';
        closeDialog(this.dialogue_info);
        await this.updateUserInfo(pool);
        this.pools[pool.index] = pool;
      },

    async refresh() {
      // update all  the pools user info
    },

    async calLpTokenValue() {
      // calculate value of lp token based on user input amt
    },

    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
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

