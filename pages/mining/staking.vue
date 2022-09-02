<style lang="scss" scoped>
.card {
  width: 566px;
  height: 608px;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.24) 1.44%,
    rgba(51, 53, 114, 0.3) 100%
  );
  border-radius: 20px;
  position: relative;
  .bar {
    background: url("~@/assets/images/staking/bar.png") 100%;
    @apply px-52px h-121px  flex justify-between mb-43px;
  }
  .bg {
    @apply absolute top-0 pointer-events-none;
  }

  .info {
    @apply flex justify-between items-center mb-46px px-43px;
  }
  .key {
    color: rgba(252, 255, 253, 0.6);
    @apply w-270px font-600 text-22px;
  }
  .value {
    font-weight: 700;
    font-size: 22px;
    color: rgba(252, 255, 253, 0.9);
  }
  .btn {
    width: 456px;
    height: 64px;
    background: url("~@/assets/images/staking/btn.png") no-repeat;
    background-size: 100% 100%;
    font-weight: 700;
    font-size: 24px;
    @apply flex justify-center items-center mx-auto cursor-pointer hover:opacity-80;
  }
}
</style>

<template>
  <div>
    <div class="pt-30px pb-44px">
      <div class="relative">
        <div class="absolute left-130px top-100px">
          <div class="font-900 text-44px mb-8px">Staking</div>
          <div class="font-900 text-16px">
            Earn veFUR by staking your FUR to share Furion’s income!
          </div>
        </div>
        <img
          src="@/assets/images/staking/staking.png"
          class="block mx-auto pointer-events-none"
        />
      </div>

      <div class="w-1168px mx-auto grid grid-cols-2 gap-x-25px">
        <div class="card">
          <img src="@/assets/images/staking/bg.png" class="bg" />
          <div class="bar flex justify-between items-center">
            <div class="flex items-center">
              <img src="@/assets/images/staking/icon.png" class="mr-21px" />
              <div class="font-700 text-34px">veFUR</div>
            </div>
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
                src="@/assets/images/staking/q.png"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
          <div class="info">
            <div class="key">Total Staked (FUR)</div>
            <div class="value">{{this.user.total_fur_stake}} FUR</div>
          </div>
          <div class="info">
            <div class="key">Total veFUR Supply</div>
            <div class="value">{{this.user.total_veFur_supply}} veFUR</div>
          </div>
          <div class="info">
            <div class="key">Your Stake (FUR)</div>
            <div class="value">{{this.user.current_fur_stake}} FUR</div>
          </div>
          <div class="info">
            <div class="key">Wallet Balance (FUR)</div>
            <div class="value">{{this.user.current_fur_balance}} FUR</div>
          </div>
          <div class="info">
            <div class="key">Claimable veFUR</div>
            <div class="value">{{this.user.pending_veFur_reward}} veFUR</div>
          </div>
          <div class="btn" @click="$router.push('/mining/staking_vefur')">Earn veFUR</div>
        </div>

        <div class="card">
          <img src="@/assets/images/staking/bg.png" class="bg" />
          <div class="bar flex justify-between items-center">
            <div class="flex items-center">
              <img src="@/assets/images/staking/icon.png" class="mr-21px" />
              <div class="font-700 text-34px">Income Sharing</div>
            </div>
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
                src="@/assets/images/staking/q.png"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
          <div class="info">
            <div class="key">Total Staked (veFUR)</div>
            <div class="value">0.00 veFUR</div>
          </div>
          <div class="info">
            <div class="key">Total veFUR Supply</div>
            <div class="value">0.00 veFUR</div>
          </div>
          <div class="info">
            <div class="key">Your Stake (FUR)</div>
            <div class="value">0.00 veFUR</div>
          </div>
          <div class="info">
            <div class="key">APR (7D)</div>
            <div class="value">0.00%</div>
          </div>
          <div class="info">
            <div class="key">Pending rewards</div>
            <div class="value">0.00 FUR</div>
          </div>
          <div class="btn" @click="$router.push('/mining/staking_income')">
            Share FUR Income
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { User, InitUserInfo, UpdateUserInfo } from '@/config/furion_staking/user_info';

  export default {
    async asyncData({ store, $axios, app, query }) {
      store.commit("update", ["admin.activeMenu", "/mining"]);
    },
    props: {},
    components: {},
    computed: {
      ...mapState('admin', ['connectStatus']),
      ...mapState(['userInfo']),
    },
    data() {
      return {
        user: User,
      };
    },
    async mounted() {
      this.user = await InitUserInfo(this.user);
      await this.UpdateUserInfo();
    },

    methods: {
      async UpdateUserInfo() {
        let account =  this.userInfo.userAddress;
        if (account == null) {
          return;
        }
        this.user = await UpdateUserInfo(this.user, account);
      },

    },
  };
</script>
