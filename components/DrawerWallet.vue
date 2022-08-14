<style lang="scss" scoped>
.drawer-wrap {
  width: 420px;
  height: 512px;
  position: fixed;
  top: 80px;
  right: 14px;
  transform: translateX(434px);
  transition: 0.3s transform;
  background-color: rgba(28, 42, 79, 1);
  // rgba(28, 42, 79, 1);
  // background: rgba(28, 42, 79, 1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  // position: relative;
  .wrap-bg-top {
    @apply absolute left-0 top-0 w-420px h-512px;
    background: url(@/assets/images/drawer/border_top.png) -1px -1px/ 422px 512px no-repeat;
  }
  .wrap-bg-bottom {
    @apply absolute left-0 top-0 w-420px h-512px;
    background: url(@/assets/images/drawer/border_bottom.png) -1px 1px/ 422px 512px
      no-repeat;
  }
  &.isShow {
    transform: translateX(0);
  }
  .drawer-header {
    height: 66px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
  }
  .section {
    background: rgba(1, 17, 41, 0.4);
    border-radius: 12px;
    padding: 24px 20px;
    margin: 0 12px;
  }
  .form-item {
    @apply text-14px flex justify-between items-center text-[rgba(252,255,253,0.8)] font-600;
  }
  .tab-btn {
    @apply text-14px font-700 flex justify-center items-center w-80px h-26px rounded-12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.4);
  }
  .close-btn {
    opacity: 0.3;
    @apply absolute top-15px right-18px cursor-pointer z-10;
    &:hover {
      opacity: 1;
    }
  }
}
</style>

<template>
  <div>
    <img
      id="wallet-icon"
      class="cursor-pointer"
      src="@/assets/images/index/wallet.svg"
      @click="toggle"
    />
    <div v-click-outside="hide" class="drawer-wrap" :class="{ isShow }">
      <div class="wrap-bg-top pointer-events-none"></div>
      <div class="wrap-bg-bottom pointer-events-none"></div>
      <img
        class="close-btn"
        src="@/assets/images/drawer/close_active.svg"
        @click="isShow = false"
      />
      <div class="drawer-header flex pt-17px cursor-pointer">
        <div class="flex items-center ml-26px">
          <img class="mr-12px" src="@/assets/images/drawer/avatar2.svg" />
          <p class="font-600 text-[#FCFFFD]">My wallet</p>
        </div>
      </div>
      <div
        class="leading-19px text-[rgba(252,255,253,0.5)] font-600 text-13px pt-24px pr-24px pb-20px pl-26px"
      >
        <p>
          Connect with one of our available
          <span class="text-[#FA6BE1]">wallet</span> providers or
        </p>
        <p>create a new one.</p>
      </div>
      <div class="section">
        <div class="form-item mb-18px">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/drawer/color.svg" />
            <p>ETH</p>
          </div>
          <div class="tab-btn text-[#B0B7F3] bg-[#614ED3]">Popular</div>
        </div>
        <div class="form-item mb-18px">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/drawer/color.svg" />
            <p>WETH</p>
          </div>
        </div>
        <div class="form-item mb-18px">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/drawer/color.svg" />
            <p>BEND</p>
          </div>
        </div>
        <div class="form-item mb-18px">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/drawer/color.svg" />
            <p>WETH</p>
          </div>
          <div class="tab-btn text-[rgba(176,183,243,0.4)] bg-[#162548]">Salana</div>
        </div>
        <div class="form-item">
          <div class="flex items-center">
            <img class="mr-16px" src="@/assets/images/drawer/color.svg" />
            <p>BEND</p>
          </div>
          <div class="tab-btn text-[rgba(176,183,243,0.4)] bg-[#162548]">Salana</div>
        </div>
      </div>
      <div class="btn_border w-310px mt-26px mx-auto">
        <el-button type="primary" plain class="!w-304px !h-48px">
          <span class="text-14px font-700">Show more options</span>
        </el-button>
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
    };
  },
  directives: {
    ClickOutside,
  },
  mounted() {},
  methods: {
    toggle() {
      // this.isShow = !this.isShow;
    },
    hide(e) {
      // console.log(e.target.id);
      if (e.target.id === "wallet-icon") {
        this.isShow = !this.isShow;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>
