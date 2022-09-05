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
      <el-table :data="pools" ref="table" @cell-click="cell_click" class="custom w-1/1" @expand-change="expandChange">
        <el-table-column prop="Pool" label="Pool" sortable width="230">
          <template slot-scope="scope">
            <div class="flex items-center py-10px">
              <div class="relative pl-15px flex-shrink-0">
                <img class="w-46px" :src="scope.row.token_0_image" />
              </div>
              <div class="relative -ml-12px flex-shrink-0 mr-12px">
                <img :src="scope.row.token_1_image" class="w-46px" />
              </div>
              <div>
                <Search-keyword :keyword="query.key" :text="scope.row.pool_name"></Search-keyword>
                <div class="text-13px font-300 mt-6px">×1.2</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column type="expand" width="-1">
          <template slot-scope="scope">
            <div>
              <div class="flex justify-between items-center mb-24px"
                style="border-bottom: 1px solid rgba(252, 255, 253, 0.1)">
                <div class="w-1/2 font-700 text-18px flex items-center py-22px">
                  Manage Position
                </div>
                <div class="flex text-13px font-600">
                  <div class="mr-50px">My Liquidity: {{formatNumber(scope.row.user_stake)}}</div>
                  <div>Rewards: {{formatNumber(scope.row.user_reward)}}</div>
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
                    @click="scope.row.type = '1'; resetAmt(scope.row.index)" />
                  <img src="@/assets/images/mining/btn2s.svg" class="cursor-pointer" v-if="scope.row.type == '2'" />
                  <img src="@/assets/images/mining/btn2.svg" class="cursor-pointer" v-else
                    @click="scope.row.type = '2'; resetAmt(scope.row.index)" />
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
                <el-input-number v-model="scope.row.amt" :controls="false" class="custom !w-1/1" placeholder="0.0"
                  @input.native="calLpTokenValue(scope.row.amt, scope.row.index)"></el-input-number>
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
                <el-button plain class="w-1/1 !h-70px !text-18px"
                  @click="handleAmt(scope.row.amt, scope.row.index, scope.row.type)">
                  ENTER AN AMOUNT
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
              <span class="font-600 mr-6px">{{formatNumber(scope.row.apr)}}</span>
              <el-popover placement="bottom" title="" trigger="hover" :visible-arrow="false" popper-class="el-tip">
                <div class="text-center text-[#0B1A3B]">
                  <div>text...</div>
                </div>
                <img src="@/assets/images/liquidity/q.svg" class="cursor-pointer w-15px" slot="reference" />
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
  import { InitialPoolList, getFarmingPool, getPoolSummary } from '@/config/furion_farming/pool';
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
        pools: InitialPoolList,
        index: 0, // count the number of pool and mark index of every newly added pool
      };
    },
  
    async mounted() {
      let pools = [];
      let index = this.index;
  
  
      // get fur/eth pool
      let fur_eth_pool = await getFarmingPool('FUR', 'ETH', '0x7a01B3fDDA5046B66B3DBc561Ab33bA23017Fe70', 4);
      fur_eth_pool.index = index;
      pools[index] = fur_eth_pool;
      //console.log(fur_eth_pool);
  
      index += 1;
  
      
      // get fur/usdt pool
      let fur_usdt_pool = await getFarmingPool('FUR', 'USDT', '0x3dFDc7821edCc79c92890E5404687D1B1C96D494', 4);
      fur_usdt_pool.index = index;
      pools[index] = fur_usdt_pool;
      //console.log(fur_usdt_pool);
  
      index += 1;
  
  
      /**
       * Testing with fur/fur pool as the pending furion for previous pools, fur/eth and fur/usdt,
       *  exceeded the supply limit of furion token.
       */
  
      /**
       * FUR/FUR pool, where lp token is same as FUR. Users can stake FUR token and earn rewards
       * in FUR.
       */
  
      // get fur/fur pool
      let fur_fur_pool = await getFarmingPool('FUR', 'FUR', "0x175940b39014cD3a9c87cd6b1d7616a097db958E", 4);
      fur_fur_pool.index = index;
      pools[index] = fur_fur_pool;
  
      index += 1;
      
      // mount index and pool list
      this.index = index;
      this.pools = pools;
  
      for(let i = 0; i < pools.length; i++) {
        await this.updateUserInfo(pools[i].index);
        this.checkLPApproval(pools[i].index);
      }
    },
  
    methods: {
  
      async updateUserInfo(index) {
        let pool = this.pools[index];
        let account = this.userInfo.userAddress;
        //console.log('[Token Farming] [User Update] user account ', account);
        if (account == null) {
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
          
         
          pool.user_stake = fromWei(user_stake, parseInt(pool.lp_token_decimal)).toFixed(4);
          pool.user_reward = fromWei(user_reward, 18).toFixed(4);
          this.pools[pool.index] = pool;
  
        } catch (e) {
          console.warn(e);
        }
      },
  
      async percent_change(index, n) {
        //console.log('[Token Farming] [Amt Percent] calculating...')
        let pool = this.pools[index];
        const type = pool.type;
        this.pools[index].percent = n;
  
        if (type == '1') {
          //console.log('[Token Farming] Adding Liquidity');
          const lp_token_bal = parseFloat(pool.user_balance);
          const amt = parseFloat(( (lp_token_bal * n) / 100 ));
          if (amt <= 0) {
            pool.amt = '';
          } else {
            this.pools[index].amt = amt.toFixed(6);
          }
        } 
        
        else if (type == '2') {
          const user_stake = parseFloat(pool.user_stake);
          const amt = parseFloat( ((user_stake * n) / 100 ) );
          if (amt <= 0) {
            pool.amt = '';
          } else {
            this.pools[index].amt = amt.toFixed(6);
          }
        }
  
        await this.calLpTokenValue(this.pools[index].amt, index);
  
      },
  
      checkLPApproval(index) {
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
  
      async harvestReward(index) {
        let pool = this.pools[index];
        //console.log('[Token Farming] [Harvest] harvesting...')
        if (parseFloat(pool.user_reward) <= 0) {
          //console.log('[Token Farming] [Harvest] Insufficient reward amt');
          this.errorMessage('Insufficient rewards');
          await this.refresh(pool);
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
           closeDialog(this.dialogue_info);
           this.successMessage(tx_result, 'Successfully harvested rewards')
        } catch(e) {
          //console.log('[Token Farming] [Harvest] Error harvesting!!');
          console.warn(e);
          closeDialog(this.dialogue_info);
          this.errorMessage('Error Harvesting Reward');
          return;
        }
  
        await this.refresh(index);
  
      },
  
      async handleAmt(user_value, index, type) {
        //console.log('[Token Farming] [Amt Handle] handling amt...');
  
        if (user_value == '') {
          this.errorMessage('Enter an amount');
          this.resetAmt(index);
          return;
        }
  
        const amt = parseFloat(user_value);
  
        if (amt <= 0) {
          this.errorMessage('Amount must be greater than zero');
          this.resetAmt(index);
          return;
        }
  
        let pool = this.pools[index];
        try {
          //const amt = parseFloat(pool.amt);
          this.pools[index].amt = user_value;
          this.pools[index].type = type;
          const user_balance = parseFloat(pool.user_balance);
          const user_stake = parseFloat(pool.user_stake);
  
          // add liquidity
          if (type == '1') {
            if (amt > user_balance) {
              this.errorMessage('Insufficient balance');
              this.resetAmt(index);
              return;
            }
            await this.addLiquidity(index);
          }
  
        
          // remove liquidity
          else if (type == '2') {
            //console.log('[Token Farming] Removing Liquidity ...')
            if (amt > user_stake) {
              this.errorMessage('Insufficient liquidity in Farm Pool');
              this.resetAmt(index);
              return;
            }
            await this.removeLiquidity(index);
          } 
  
          else {
            this.resetAmt(index);
            return;
          }
  
          await this.refresh(index);
  
        } catch(e) {
          console.warn(e);
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
                              .send({from: account, gas: gas});
  
              closeDialog(this.dialogue_info);
              this.successMessage(tx_result, 'Liquidity Added');
  
          } catch(e) {
              console.warn(e);
              closeDialog(this.dialogue_info);
              this.errorMessage('Error adding liquidity');
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
                              .send({from: account, gas: gas});
              closeDialog(this.dialogue_info);
              this.successMessage(tx_result, 'Liquidity Added');
  
            } catch(e) {
              console.warn(e);
              closeDialog(this.dialogue_info);
              this.errorMessage('Error adding liquidity');
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
                                .send({from: account, gas: gas});
          this.successMessage(tx_result, 'Remove Liquidity Successfully');
            
        } catch(e) {
            console.warn(e);
            closeDialog(this.dialogue_info);
            this.errorMessage('Remove Liquidity Error');
          }
  
      },
  
      async refresh(index) {
        // update user and pool info 
        //console.log('[Token Farming] Refreshing Pool ...');
        try {
          await this.updateUserInfo(index);
          let summary = await getPoolSummary(this.pools[index], this.chainId);
          this.pools[index].tvl = summary['tvl'];
          this.pools[index].apr = summary['apr'];
          this.pools[index].amt = '';
          this.pools[index].percent = 0;
          this.pools[index].lp_token_value = '0.000';
          //console.log('Updated Pool ', this.pools[index]);
        } catch (e) {
          console.warn(e);
        }
  
      },
  
      async resetAmt(index) {
        let pool = this.pools[index];
        pool.amt = '';
        pool.percent = 0;
        pool.lp_token_value = '0.000';
      },
  
      async calLpTokenValue(amt, index) {
        // calculate value of lp token based on user input amt
        if (amt == '') {
            this.pools[index].lp_token_value = '0.000';
            return;
        }
        let pool = this.pools[index];
        let user_amt = parseFloat(amt);
  
        if (user_amt <= 0) {
            this.pools[index].lp_token_value = '0.000';
            return;
        }
       
        pool.lp_token_value = (pool.lp_token_price * user_amt).toFixed(4);
        this.pools[index] = pool;
        return;
  
      },
  
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
  
      cell_click(row) {
        this.$refs.table.toggleRowExpansion(row);
      },
  
      expandChange(row, rows) {
        this.expanded = rows.length;
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
  
  