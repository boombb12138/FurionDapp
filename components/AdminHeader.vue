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
    class="header-wrap w-1/1 h-80px flex justify-center items-center fixed left-0 right-0 top-0 z-100" v-if="ready"
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
                  <nuxt-link to="/liquidity/money_market/my_overview">Money Market</nuxt-link>
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
import $ from 'jquery';
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
      ready: false,
      searchKey: "",
      test_claim: "",
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    this.$options.methods.clickEffect();
    $(".header-wrap").attr("style","display:none;");
    this.ready=true;
    await this.initTestClaim();
    $('.header-wrap').fadeIn(500);
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
        /***************************** Effect functions *****************************/

    clickEffect() {
        let balls = [];
        let longPressed = false;
        let longPress;
        let multiplier = 0;
        let width, height;
        let origin;
        let normal;
        let ctx;
        const colours = ["rgba(148,0,211,0.4)", "rgba(65,105,225,0.5)", "rgba(255,20,147,0.3)", "rgba(186,85,211,0.4)", "rgba(255,0,255,0.5)"];
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
        const pointer = document.createElement("span");
        pointer.classList.add("pointer");
        document.body.appendChild(pointer);
      
        if (canvas.getContext && window.addEventListener) {
          ctx = canvas.getContext("2d");
          updateSize();
          window.addEventListener('resize', updateSize, false);
          loop();
          window.addEventListener("mousedown", function(e) {
            pushBalls(randBetween(2, 8), e.clientX, e.clientY);
            document.body.classList.add("is-pressed");
            longPress = setTimeout(function(){
              document.body.classList.add("is-longpress");
              longPressed = true;
            }, 500);
          }, false);
          window.addEventListener("mouseup", function(e) {
            clearInterval(longPress);
            if (longPressed == true) {
              document.body.classList.remove("is-longpress");
              pushBalls(randBetween(10 + Math.ceil(multiplier), 20 + Math.ceil(multiplier)), e.clientX, e.clientY);
              longPressed = false;
            }
            document.body.classList.remove("is-pressed");
          }, false);
          window.addEventListener("mousemove", function(e) {
            let x = e.clientX;
            let y = e.clientY;
            pointer.style.top = y + "px";
            pointer.style.left = x + "px";
          }, false);
        } else {
          console.log("canvas or addEventListener is unsupported!");
        }
      
      
        function updateSize() {
          canvas.width = window.innerWidth * 2;
          canvas.height = window.innerHeight * 2;
          canvas.style.width = window.innerWidth + 'px';
          canvas.style.height = window.innerHeight + 'px';
          ctx.scale(2, 2);
          width = (canvas.width = window.innerWidth);
          height = (canvas.height = window.innerHeight);
          origin = {
            x: width / 2,
            y: height / 2
          };
          normal = {
            x: width / 2,
            y: height / 2
          };
        }
        class Ball {
          constructor(x = origin.x, y = origin.y) {
            this.x = x;
            this.y = y;
            this.angle = Math.PI * 2 * Math.random();
            if (longPressed == true) {
              this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
            } else {
              this.multiplier = randBetween(6, 12);
            }
            this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
            this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
            this.r = randBetween(8, 12) + 3 * Math.random();
            this.color = colours[Math.floor(Math.random() * colours.length)];
          }
          update() {
            this.x += this.vx - normal.x;
            this.y += this.vy - normal.y;
            normal.x = -2 / window.innerWidth * Math.sin(this.angle);
            normal.y = -2 / window.innerHeight * Math.cos(this.angle);
            this.r -= 0.2;
            this.vx *= 0.9;
            this.vy *= 0.9;
          }
        }
      
        function pushBalls(count = 1, x = origin.x, y = origin.y) {
          for (let i = 0; i < count; i++) {
            balls.push(new Ball(x, y));
          }
        }
      
        function randBetween(min, max) {
          return Math.floor(Math.random() * max) + min;
        }
      
        function loop() {
          ctx.fillStyle = "rgba(255, 255, 255, 0)";
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.r < 0) continue;
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
            ctx.fill();
            b.update();
          }
          if (longPressed == true) {
            multiplier += 0.2;
          } else if (!longPressed && multiplier >= 0) {
            multiplier -= 0.4;
          }
          removeBall();
          requestAnimationFrame(loop);
        }
      
        function removeBall() {
          for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
              balls.splice(i, 1);
            }
          }
        }
      }



  },
};
</script>
