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
.menu-item {
  @apply flex items-center justify-center text-15px font-700  text-[rgba(252,2553,253,0.7)] cursor-pointer relative h-1/1;
  &.active {
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
    top: 70px;
    left: -5px;
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
    }
  }
}
</style>

<template>
  <div
    class="header-wrap w-1/1 h-80px flex justify-center items-center fixed left-0 right-0 top-0 z-100"
    :class="{ transparent }"
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
          <li class="menu-item ml-50px" :class="{ active: activeMenu === '/explore' }">
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
                  <nuxt-link to="/liquidity/borrow">Borrow & Lending</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/">Furine Swap</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li class="menu-item has-child ml-38px">
            <span>Mining</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/">Token farming</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/">Staking</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
          <li class="menu-item has-child ml-36px">
            <span>More</span>
            <img class="ml-7px" src="@/assets/images/index/arrow.svg" />
            <div class="submenu-list-wrap">
              <ul class="submenu-list">
                <li class="submenu-item">
                  <nuxt-link to="/">Coming soon</nuxt-link>
                </li>
                <li class="submenu-item">
                  <nuxt-link to="/">Governmance</nuxt-link>
                </li>
              </ul>
              <div class="shadow-top"></div>
            </div>
          </li>
        </ul>
      </div>
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
        <img class="cursor-pointer" src="@/assets/images/index/avatar.svg" />

        <img class="cursor-pointer ml-20px" src="@/assets/images/index/wallet.svg" />

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { connectMetamask } from '@/utils/web3/wallet';
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    showShotSearch() {
      return ["/collection/separate_pools", "/collection/aggregated_pools"].includes(
        this.$route.path
      );
    },
    showLongSearch() {
      // return ["/collection/separate_pools"].includes(this.$route.path);
    },
    activeMenu() {
      return this.$store.state.admin.activeMenu;
    },
    
  },
  data() {
    return {
      searchKey: "",
    };
  },
  async mounted() {await this.connectWallet();},
  methods: {
    onSearch() {},
    async getAlreadyConnectAccount() {
      try {
        if (this.walletType == 'Metamask') {
          ethereum.request({ method: 'eth_accounts' }).then(async accounts => {
            if (accounts.length != 0) {
              let userInfo = {
                isConnect: true,
                userAddress: accounts[0],
              };
              this.$store.dispatch('setUserInfo', userInfo);
            } else {
              console.log('The user is not connected');
              this.$store.commit('update', ['admin.connectDialog', 'simple']);
              console.log('user address:', this.userInfo.userAddress);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async connectWallet() {
      try {
        console.log('user connected:', this.userInfo.isConnect);
        if (this.userInfo.isConnect == true) {
          try {
            // console.log('user address:', this.userInfo.userAddress);
            await this.getAlreadyConnectAccount();
            this.$store.commit('update', ['admin.connectStatus', 'connected']);
          } catch (error) {
            console.log(error);
          }
        } else {
          // console.log('Currently not connected');

          if (!window.ethereum) {
            this.$message({
              message: 'Please install metamask',
              type: 'warning',
            });
            window.location.href = 'https://metamask.app.link/dapp';
          } else {
            connectMetamask();
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
