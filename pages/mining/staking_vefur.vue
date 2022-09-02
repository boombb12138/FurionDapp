<style lang="scss" scoped>
.card1 {
  width: 757px;
  height: 575px;
  margin-right: 25px;
  position: relative;
  &::after {
    opacity: 0.24;
    background: linear-gradient(0deg, rgba(150, 154, 182, 0.2), rgba(150, 154, 182, 0.2)),
      linear-gradient(
        59.65deg,
        #3b3faf 0.92%,
        rgba(96, 65, 181, 0.489583) 51.49%,
        rgba(131, 67, 186, 0) 100%
      ),
      #101d41;
    content: "";
    border: 4px solid #34355e;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08),
      inset 0px 4px 4px rgba(213, 166, 237, 0.4), inset 0px -2px 4px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    @apply absolute left-0 right-0 top-0 bottom-0 pointer-events-none block;
  }
  > div {
    position: relative;
    z-index: 10;
  }
}

.card2 {
  width: 373px;
  height: 575px;
  position: relative;
  &::after {
    opacity: 0.24;
    background: linear-gradient(0deg, rgba(150, 154, 182, 0.4), rgba(150, 154, 182, 0.4)),
      linear-gradient(202.82deg, #b070e4 0%, #4150b4 52.08%, rgba(16, 29, 65, 0) 100%);
    content: "";
    border: 4px solid #34355e;
    border-radius: 20px;
    @apply absolute left-0 right-0 top-0 bottom-0 pointer-events-none block;
  }
  > div {
    position: relative;
    z-index: 10;
  }
}

.box {
  background: #0c193a;
  border: 2px solid #2a326b;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.08),
    inset 0px 4px 4px rgba(213, 166, 237, 0.4), inset 0px -2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  @apply px-42px;
}

::v-deep {
  .el-progress-bar__inner {
    background: linear-gradient(90.41deg, #433cb8 0%, #619fd7 45.83%, #b38cf1 98.96%);
  }
  .el-progress-bar__outer {
    height: 10px !important;
  }

  .input {
    width: 100%;
    .el-input__inner {
      background: transparent;
      border: 3px solid #34355e;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      height: 60px;
      line-height: 60px;
      color: #fff;
    }
  }
}

.btn1 {
  width: 138px;
  height: 52px;
  background: url("~@/assets/images/staking/btn1.png") no-repeat;
  background-size: 100% 100%;
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.36);
  @apply flex justify-center items-center  cursor-pointer hover:opacity-80;
  &.grey {
    color: #5d667c;
    background: #1e2b49;
  }
}

.btn1-2 {
  width: 100%;
  height: 52px;
  background: url("~@/assets/images/staking/btn2.png") no-repeat;
  background-size: 100% 100%;
  font-weight: 600;
  font-size: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.36);
  @apply flex justify-center items-center  cursor-pointer hover:opacity-80;
  &.grey {
    color: #5d667c;
    background: #1e2b49;
  }
}
</style>

<template>
  <div class="pb-75px !static">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
      <div class="text-[#9DA5B2] ml-23px">Back To Staking</div>
    </div>

    <div class="pt-110px">
      <div class="relative">
        <div class="absolute left-100px center-y flex items-center">
          <div class="mr-5px -mt-5px">
            <img src="@/assets/images/staking/icon2.png" alt="" />
          </div>
          <div class="mb-15px">
            <div class="font-700 text-36px mb-5px">Stake FUR to earn veFUR</div>
            <div class="font-400 text-14px text-[#E9E9E9]">
              Rewards distributed every week
            </div>
          </div>
        </div>
        <img
          src="@/assets/images/staking/head.png"
          class="block mx-auto pointer-events-none"
        />
      </div>
    </div>

    <div class="flex mx-auto w-1160px" :data="user">
      <div class="card1 px-32px">
        <div>
          <div class="font-700 text-32px pt-24px leading-38px mb-16px">Overview</div>
        </div>
        <div class="flex justify-between mb-35px">
          <div class="box w-341px h-128px pt-36px">
            <div class="text-[#83899A] font-500 text-20px mb-6px">Total Staked (FUR)</div>
            <div class="text-[#D9D9D9] font-500 text-30px">$ {{this.user.total_fur_stake}}</div>
          </div>
          <div class="box w-341px h-128px pt-36px">
            <div class="text-[#83899A] font-500 text-20px mb-6px">Total veFUR Supply</div>
            <div class="text-[#D9D9D9] font-500 text-30px">{{this.user.total_veFur_supply}} veFUR</div>
          </div>
        </div>
        <div class="box h-198px pt-30px">
          <div class="text-[#83899A] font-500 text-20px mb-28px">veFUR progress</div>
          <div class="flex justify-between items-center mb-8px">
            <div class="font-500 text-16px text-[#8B93A2]">
              <span class="text-white">400 veFUR</span>
              /2000 veFUR
            </div>
            <div class="font-500 text-16px text-[#8B93A2]">
              <span class="text-white">20%</span>
              /100%
            </div>
          </div>

          <el-progress
            :percentage="20"
            :show-text="false"
            color="linear-gradient(90.41deg, #433CB8 0%, #619FD7 45.83%, #B38CF1 98.96%);"
          ></el-progress>

          <div class="text-[#8B93A2] font-500 text-15px leading-18px mt-16px">
            One FUR can generate 100 veFUR at most, which takes half a year to generate
            all. (⚠Please also note that unstaking FUR will make veFUR balance zero
            instantly.)
          </div>
        </div>
      </div>

      <div class="card2 px-22px pt-28px">
        <div class="flex text-[#83899A] mb-20px font-500 text-20px pl-16px">
          <div
            class="cursor-pointer mr-20px"
            :class="{ 'text-white': type == 1 }"
            @click="type = 1"
          >
            Stake
          </div>
          <div
            class="cursor-pointer"
            :class="{ 'text-white': type == 2 }"
            @click="type = 2"
          >
            Unstake
          </div>
        </div>
        <div class="box pt-26px h-230px mb-20px !px-17px">
          <div class="flex justify-between mb-27px">
            <div class="text-[#8B93A2] font-500 text-14px">Balance</div>
            <div class="text-white font-500 text-16px">{{this.user.current_fur_balance}} FUR</div>
          </div>

          <div class="relative mb-20px">
            <el-input-number
              v-model="num"
              :precision="1"
              placeholder="0.0"
              :controls="false"
              class="input"
            ></el-input-number>
            <div class="flex absolute center-y right-12px items-center">
              <div
                class="cursor-pointer font-500 text-13px text-white bg-[rgba(250,107,225,0.64)] rounded-20px py-2px px-8px"
              >
                MAX
              </div>
              <div class="mx-9px w-2px h-17px bg-[#F181DE]"></div>
              <div class="font-500 text-13px text-[#D9D9D9]">FUR</div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="btn1" @click="stake = 1" :class="{ grey: stake != 1 }">Stake</div>
            <div class="btn1" @click="stake = 2" :class="{ grey: stake != 2 }">
              Stake & Lock
            </div>
          </div>
        </div>

        <div class="box pt-26px h-230px !px-17px">
          <div class="font-500 text-16px mb-24px">My Positions</div>
          <div class="flex mb-20px">
            <div class="flex-1">
              <div class="font-500 text-16px text-[#8B93A2] mb-5px">Staked</div>
              <div class="font-700 text-24px">{{this.user.current_fur_stake}} FUR</div>
              <div class="text-[#FA6BE1] font-500 text-16px mt-9px">$0</div>
            </div>
            <div class="flex-1">
              <div class="font-500 text-16px text-[#8B93A2] mb-5px">Pending Rewards</div>
              <div class="font-700 text-24px">{{this.user.pending_veFur_reward}} veFUR</div>
              <div
                class="cursor-pointer font-500 text-12px text-white bg-[rgba(250,107,225,0.64)] rounded-20px py-4px px-12px mt-7px"
              >
                Add veFUR to Wallet
              </div>
            </div>
          </div>

          <div class="btn1-2" v-if="connected">Claim veFUR</div>
          <div class="btn1-2" v-else @click="connected = true">Connect Wallet</div>
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
        type: 1,
        stake: 1,
        num: undefined,
        connected: false,
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
