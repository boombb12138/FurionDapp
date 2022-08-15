<style lang="scss" scoped>
.drawer-wrap {
  width: 420px;
  // height: 943px;
  height: calc(100vh - 80px);
  position: fixed;
  top: 80px;
  right: 14px;
  transform: translateX(434px);
  transition: 0.3s transform;
  background: rgba(28, 42, 79, 1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  &.isShow {
    transform: translateX(0);
  }
  .drawer-header {
    height: 80px;
    background: #1c2a4f;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
    .header-tab {
      color: rgba(252, 255, 253, 0.6);
      position: relative;
      &.active {
        color: #ff88eb;
        font-weight: 700;
        background: linear-gradient(
          0deg,
          rgba(110, 101, 168, 0.4) -61.36%,
          rgba(110, 101, 168, 0) 95.45%
        );
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #f181de;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }

  .wrap-bg-top {
    @apply absolute left-0 top-0 w-420px h-944px;
    background: url(@/assets/images/drawer/border_top2.png) -1px -1px/ 422px 944px no-repeat;
  }
  .wrap-bg-bottom {
    @apply absolute left-0 bottom-0 w-420px h-944px;
    background: url(@/assets/images/drawer/border_bottom2.png) -1px 1px/ 422px 944px
      no-repeat;
  }
  .drawer-scroll-wrap {
    height: calc(100vh - 160px - 40px);
    margin-left: -2px;
  }
  .section {
    background: rgba(1, 17, 41, 0.4);
    border-radius: 12px;
    padding: 12px 20px 20px;
  }
  .section-title {
    font-size: 14px;
    color: rgba(252, 255, 253, 0.6);
    font-weight: 500;
    line-height: 28px;
  }
  .form-item {
    @apply flex items-center cursor-pointer;
    .icon-wrap {
      @apply w-30px h-30px flex items-center justify-center mr-19px bg-[rgba(109,121,139,0.4)] rounded-8px;
    }
    .label {
      @apply text-[rgba(252,255,253,0.8)] text-13px leading-28px font-600;
    }
  }
  .form-item2 {
    @apply cursor-pointer flex items-center justify-between text-[rgba(252,255,253,0.8)] font-600 text-14px;
    .icon {
      @apply w-34px h-34px mr-14px;
    }
  }
  .notification-item {
    padding: 9px 16px 12px 14px;
    background: rgba(1, 17, 41, 0.4);
    border-radius: 12px;
    margin-bottom: 14px;
    @apply flex items-center;
    .icon-wrap {
      @apply w-34px h-34px flex items-center justify-center mr-16px rounded-8px bg-[rgba(217,217,217,0.26)] flex-shrink-0;
    }
  }
  .close-btn {
    opacity: 0.3;
    @apply absolute top-18px right-18px cursor-pointer z-10;
    &:hover {
      opacity: 1;
    }
  }

  .more {
    color: rgba(252, 255, 253, 0.8);
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    width: 110px;
    height: 32px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    @apply mx-auto;
  }
}
</style>

<template>
  <div>
    <img
      id="avatar-icon"
      class="cursor-pointer"
      src="@/assets/images/index/avatar.svg"
      @click="toggle"
    />
    <div v-click-outside="hide" class="drawer-wrap" :class="{ isShow }">
      <div class="wrap-bg-top"></div>
      <div class="wrap-bg-bottom"></div>
      <img
        class="close-btn"
        src="@/assets/images/drawer/close_active.svg"
        @click.stop="isShow = false"
      />
      <div class="drawer-header flex pt-17px cursor-pointer">
        <div
          class="header-tab flex flex-1 items-center justify-center w-1/1"
          :class="{ active: tab === 'account' }"
          @click="changeTab('account')"
        >
          <img v-if="tab === 'account'" src="@/assets/images/drawer/avatar_pink.svg" />
          <img v-else src="@/assets/images/drawer/avatar.svg" />
          <p class="ml-5px mt-3px">Account</p>
        </div>
        <div
          class="header-tab flex flex-1 items-center justify-center w-1/1"
          :class="{ active: tab === 'notification' }"
          @click="changeTab('notification')"
        >
          <img v-if="tab === 'notification'" src="@/assets/images/drawer/bell_pink.svg" />
          <img v-else src="@/assets/images/drawer/bell.svg" />
          <p class="ml-5px">Notifications</p>
        </div>
      </div>
      <div class="py-35px px-12px overflow-hidden">
        <el-scrollbar class="drawer-scroll-wrap overflow-hidden w-401px">
          <div v-if="tab === 'account'">
            <div class="section mb-15px">
              <p class="section-title mb-20px">Connected wallet</p>
              <div class="flex items-center justify-between mb-25px">
                <div class="flex items-center">
                  <img class="mr-15px" src="@/assets/images/drawer/case.svg" />
                  <p class="text-[rgba(252,255,253,0.9)] font-600 text-16px">
                    OxA7A8a51D…bB357A36
                  </p>
                </div>
                <img
                  class="cursor-pointer"
                  src="@/assets/images/drawer/copy.svg"
                  @click="copy"
                />
              </div>
              <div class="flex justify-between items-center font-500 text-13px">
                <p class="text-[rgba(252,255,253,0.4)] leading-28px">
                  Connected with MetaMask
                </p>
                <p class="text-[#ff88eb] cursor-pointer leading-28px">Change provider</p>
              </div>
            </div>

            <div class="section mb-15px" v-show="isShowProfile">
              <p class="section-title mb-20px">My profile</p>
              <div class="ml-16px">
                <div class="form-item mb-22px">
                  <div class="icon-wrap">
                    <img src="@/assets/images/drawer/email.svg" />
                  </div>
                  <p class="label">E-mail 123@furion.com</p>
                </div>
                <div class="form-item mb-22px">
                  <div class="icon-wrap">
                    <img src="@/assets/images/drawer/bell2.svg" />
                  </div>
                  <p class="label">Notification Preferences</p>
                </div>
                <div class="flex mb-22px">
                  <div
                    class="form-item flex-1"
                    @click="profile.comment = !profile.comment"
                  >
                    <div class="icon-wrap">
                      <img
                        v-if="profile.comment"
                        src="@/assets/images/drawer/checkbox_checked.svg"
                      />
                      <img v-else src="@/assets/images/drawer/checkbox_empty.svg" />
                    </div>
                    <p class="label">Comment</p>
                  </div>
                  <div class="form-item flex-1" @click="profile.alert = !profile.alert">
                    <div class="icon-wrap">
                      <img
                        v-if="profile.alert"
                        src="@/assets/images/drawer/checkbox_checked.svg"
                      />
                      <img v-else src="@/assets/images/drawer/checkbox_empty.svg" />
                    </div>
                    <p class="label">Liquidation alert</p>
                  </div>
                </div>
                <div class="flex mb-22px">
                  <div class="form-item flex-1" @click="profile.news = !profile.news">
                    <div class="icon-wrap">
                      <img
                        v-if="profile.news"
                        src="@/assets/images/drawer/checkbox_checked.svg"
                      />
                      <img v-else src="@/assets/images/drawer/checkbox_empty.svg" />
                    </div>
                    <p class="label">Hot News</p>
                  </div>
                  <div class="form-item flex-1" @click="showProfile(false)">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/all.svg" />
                    </div>
                    <p class="label">All</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="section mb-15px" v-show="!isShowProfile">
              <p class="section-title mb-20px">Quicklinks</p>
              <div class="ml-16px">
                <div class="flex mb-14px">
                  <div class="form-item flex-1" @click="go('/myWallet')">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/wallet.svg" />
                    </div>
                    <p class="label">My wallet</p>
                  </div>
                  <div class="form-item flex-1" @click="showProfile(true)">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/profile.svg" />
                    </div>
                    <p class="label">My profile</p>
                  </div>
                </div>
                <div class="flex mb-14px">
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/nft.svg" />
                    </div>
                    <p class="label">My NFTs</p>
                  </div>
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/lock.svg" />
                    </div>
                    <p class="label">My Locking</p>
                  </div>
                </div>
                <div class="flex mb-14px">
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/swap.svg" />
                    </div>
                    <p class="label">Furion Swap</p>
                  </div>
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/market.svg" />
                    </div>
                    <p class="label">Money Market</p>
                  </div>
                </div>
                <div class="flex mb-30px">
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/farming.svg" />
                    </div>
                    <p class="label">Token farming</p>
                  </div>
                  <div class="form-item flex-1">
                    <div class="icon-wrap">
                      <img src="@/assets/images/drawer/governance.svg" />
                    </div>
                    <p class="label">Governance</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="section mb-15px">
              <p class="section-title mb-20px">Wallet balances</p>
              <div class="form-item2 mb-24px">
                <div class="flex items-center">
                  <img class="icon" src="@/assets/images/drawer/eth.svg" />
                  <p>ETH</p>
                </div>
                <p>0.22</p>
              </div>
              <div class="form-item2 mb-24px">
                <div class="flex items-center">
                  <img class="icon" src="@/assets/images/drawer/weth.svg" />
                  <p>WETH</p>
                </div>
                <p>0.0000</p>
              </div>
              <div class="form-item2 mb-40px">
                <div class="flex items-center">
                  <img class="icon" src="@/assets/images/drawer/bend.svg" />
                  <p>BEND</p>
                </div>
                <p>0.00</p>
              </div>
              <div class="flex justify-between">
                <div class="btn_border w-170px">
                  <el-button type="primary" class="!w-170px !h-48px">WRAP</el-button>
                </div>
                <div class="btn_border w-170px">
                  <el-button type="primary" class="!w-170px !h-48px">UNWRAP</el-button>
                </div>
              </div>
            </div>
          </div>
          <div v-if="tab === 'notification'" class="pb-20px">
            <ul>
              <li
                class="notification-item"
                v-for="(item, index) in notifications"
                :key="index"
              >
                <div class="icon-wrap">
                  <img src="@/assets/images/drawer/case2.svg" />
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <p
                      class="title font-600 leading-28px text-[rgba(252,255,253,0.8)] mb-3px"
                    >
                      {{ item.title }}
                    </p>
                    <p
                      class="time text-12px font-600 leading-28px text-[rgba(252,255,253,0.3)]"
                    >
                      {{ item.time }}
                    </p>
                  </div>
                  <div
                    class="content text-[rgba(252,255,253,0.4)] font-500 text-13px leading-17px"
                  >
                    {{ item.content }}
                  </div>
                </div>
              </li>
            </ul>

            <div class="more" @click="more">Show more</div>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      isShow: false,
      isShowProfile: true,
      tab: "account", // account notification
      notifications: [
        {
          title: "Connected wallet",
          time: "07:10",
          content:
            "Game Theory: DeFincentivesBenKapianin CryptoStarsStories for shang zh @zhshang1221-Become a member Today's highlights Game Theory:D...",
        },
        {
          title: "Connected wallet",
          time: "07:10",
          content:
            "Game Theory: DeFincentivesBenKapianin CryptoStarsStories for shang zh @zhshang1221-Become a member Today's highlights Game Theory:D...",
        },
        {
          title: "Connected wallet",
          time: "07:10",
          content:
            "Game Theory: DeFincentivesBenKapianin CryptoStarsStories for shang zh @zhshang1221-Become a member Today's highlights Game Theory:D...",
        },
      ],
      profile: {
        comment: true,
        alert: false,
        news: false,
      },
    };
  },
  directives: {
    ClickOutside,
  },
  mounted() {},
  methods: {
    more() {
      this.notifications = [
        ...this.notifications,
        {
          title: "Connected wallet",
          time: "07:10",
          content:
            "Game Theory: DeFincentivesBenKapianin CryptoStarsStories for shang zh @zhshang1221-Become a member Today's highlights Game Theory:D...",
        },
        {
          title: "Connected wallet",
          time: "07:10",
          content:
            "Game Theory: DeFincentivesBenKapianin CryptoStarsStories for shang zh @zhshang1221-Become a member Today's highlights Game Theory:D...",
        },
        {
          title: "Connected wallet",
          time: "07:10",
          content:
            "Game Theory: DeFincentivesBenKapianin CryptoStarsStories for shang zh @zhshang1221-Become a member Today's highlights Game Theory:D...",
        },
      ];
    },
    toggle() {
      // this.isShow = !this.isShow;
    },
    hide(e) {
      console.log("e.target.id", e.target.id);
      if (e.target.id === "avatar-icon") {
        this.isShow = !this.isShow;
      } else {
        this.isShow = false;
      }
    },
    changeTab(tab) {
      console.log(tab);
      this.tab = tab;
    },
    copy() {},
    go(url) {
      this.$router.push(url);
      this.isShow = false;
    },
    showProfile(flag) {
      this.isShowProfile = flag;
    },
  },
};
</script>
