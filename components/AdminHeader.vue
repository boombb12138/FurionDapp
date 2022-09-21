<style lang="scss" scoped>
.light-left {
  @apply absolute left-0 w-800px;
}
.header-wrap {
  background: linear-gradient(
      180deg,
      rgba(193, 99, 226, 0.162) 0%,
      rgba(51, 53, 114, 0.3) 113.94%
    ),
    rgba(1, 19, 46, 0.8);
  border-bottom: 1px solid rgba(76, 53, 139, 0.14);
}
.test {
  border-radius: 40px;
  height: 45px !important;
  color: #88FFFF !important;
  font-size: 14px;
  font-weight: 500 !important;
}
.menu-item {
  @apply flex items-center justify-center text-15px font-700  text-[rgba(252,2553,253,0.7)] cursor-pointer relative h-1/1;
  &.active,
  &:hover {
    color: #f181de;
    &::after {
      content: "";
      width: 75px;
      height: 20px;
      background: rgba(255, 101, 222, 0.5);
      filter: blur(30px);
      position: absolute;
      top: 30px;
    }
  }
  .highlight {
    // left: -50%;
  }
  .submenu-list-wrap {
    width: 162px;
    height: 90px;
    background: url(@/assets/images/index/menu_bg.png);
    background-position: -20px -11px;
    position: absolute;
    top: 80px;
    left: 0px;
    transition: opacity 0.4s ease-in;
    padding: 15px 20px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    box-sizing: border-box;
    // visibility: visible;
    // opacity: 1;
    .submenu-item {
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;
      color: rgba(252, 255, 253, 0.7);
      &:hover {
        color: #fff;
      }
      a {
        display: block;
      }
    }
  }
  &.has-child {
    &:hover {
      .submenu-list-wrap {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
.search-wrap ::v-deep {
  border-radius: 8px;
  .search-icon {
    margin-top: 8px;
    margin-left: 15px;
  }
  .el-input__inner {
    border-color: transparent;
    background: rgba(255, 255, 255, 0.1);
    padding-left: 54px;
    color: rgba(252, 2553, 253, 0.7);
    border-radius: 8px;
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
      font-size: 13px;
    }
  }
}
</style>

<template>
  <div
    class="header-wrap w-1/1 h-80px flex justify-center items-center fixed left-0 right-0 top-0 z-100"
  >
    <img src="@/assets/images/light_left_bg.png" class="light-left pointer-events-none" />
    <div class="w-1176px h-1/1 flex justify-center items-center justify-between">
      <div class="flex items-center h-1/1">
        <img
          class="cursor-pointer"
          src="@/assets/images/index/logo.svg"
          @click="$router.push('/')"
        />
        <ul class="flex items-center h-1/1">
          <li
            class="menu-item ml-50px"
            :class="{ active: activeMenu === '/explore' }"
            @click="$router.push('/')"
          >
            <span>Explore</span>
          </li>
          <li
            class="menu-item ml-40px"
            :class="{ active: activeMenu === '/collection' }"
            @click="$router.push('/collection/separate_pools')"
          >
            <span>Collection</span>
          </li>
          <li
            class="menu-item has-child ml-30px"
            :class="{ active: activeMenu === '/liquidity' }"
          >
            <span>Liquidity</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/liquidity/money_market/intro">Money Market</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/liquidity/furion_swap/swap">Furion Swap</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item has-child ml-38px"
            :class="{ active: activeMenu === '/mining' }"
          >
            <span>Mining</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/mining/token_farming">Token Farming</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/mining/staking">Staking</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li
            class="menu-item has-child ml-36px"
            :class="{ active: activeMenu === '/more' }"
          >
            <span>More</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/comingsoon">Coming Soon</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/governance">Governance</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <!-- <li
            class="menu-item ml-40px"
            :class="{ active: activeMenu === '/dashboard' }"
            @click="$router.push('/dashboard/dashboard')"
          >
            <span>Dash Board</span>
          </li> -->
        </ul>
      </div>
      <el-button plain class="!w-160px !h-56px test" @click="claimToken"> Test Tokens</el-button>
      <div class="flex items-center">
        <el-input
          style="width: 170px"
          v-if="showShotSearch"
          clearable
          placeholder="Search"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input>
        <el-input
          style="width: 300px"
          v-if="showLongSearch"
          clearable
          placeholder="Search by token or pair"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input>
        <!-- <el-input
          style="width: 300px"
          v-if="showLongSearch2"
          clearable
          placeholder="search by name, symbol, address"
          class="search-wrap mr-25px"
          v-model="searchKey"
          @keyup.enter.native="onSearch"
        >
          <img class="search-icon" src="@/assets/images/index/search.svg" slot="prefix" />
        </el-input> -->

        <CartIcon></CartIcon>
        <Pet></Pet>
        <DrawerAccount></DrawerAccount>
        <DrawerWallet class="ml-20px mt-5px"></DrawerWallet>
      </div>
    </div>
    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { getContract } from '@/utils/common';
import { getTestClaimABI } from '@/utils/common/contractABI';
import { mapState } from 'vuex';
import { connect_info } from "@/config/user_info/profile";
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
  props: {},
  components: {ProceedingDetails,},
  computed: {
    ...mapState(['showInfo']),
  },
  computed: {
    showShotSearch() {
      return ["/collection/separate_pools", "/collection/aggregate_pools"].includes(
        this.$route.path
      );
    },
    showLongSearch() {
      return [].includes(this.$route.path);
    },
    showLongSearch2() {
      return ["/mining/token_farming"].includes(this.$route.path);
    },
    activeMenu() {
      return this.$store.state.admin.activeMenu;
    },
  },
  data() {
    return {
      searchKey: "",
      test_claim: "",
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    await this.initTestClaim();
  },
  methods: {
    onSearch() {},
    async initTestClaim() {
      const test_claim_contract = await getContract(await getTestClaimABI(), '');
      // console.log('This is test claim contract', test_claim_contract);
      this.test_claim = test_claim_contract;
    },

    async claimToken() {
      // console.log('User info', connect_info);
      const account = connect_info.address;
      try {
        if (account == '' || account == undefined) {
          console.warn('User not connected');
          this.errorMessage("Please connect wallet firstly");
          return
        }
      }
      catch (e) {
        console.warn(e);
        this.errorMessage("Please connect wallet firstly");
        return
      }
      await openDialog(this.dialogue_info, [ProcessInfo.CLAIM_TEST_TOKEN]);
      try {
        let tx_result = await this.test_claim.methods.claimTest().send({ from: account });
        this.successMessage(tx_result, 'Cliam test token successfully');
      }
      catch (e) {
        console.warn(e);
        this.errorMessage("Already claimed");
      }
      closeDialog(this.dialogue_info);
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
