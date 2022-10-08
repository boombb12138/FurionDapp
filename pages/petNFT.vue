<style lang="scss" scoped>
.title {
  font-weight: 800;
  font-size: 16px;
  background: linear-gradient(273.69deg, #b8a0cf 25.62%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @apply absolute left-110px top-109px;
}
.main {
  width: 1080px;
  height: 640px;
  border: 1px solid #fff;
  .leftSide {
    width: 470px;
    height: 640px;
    background-color: pink;
    .leftTop {
      margin-top: -3px;
      background: no-repeat center url("@/assets/images/pet/bg.png");
      background-size: 100% 100%;
    }
  }
  .rightSide {
    width: 580px;
    height: 640px;
    background: no-repeat center url("@/assets/images/pet/bg3.png");
    background-size: 100% 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .rightTop {
      margin-top: 15px;
      background: no-repeat center url("@/assets/images/pet/bg4.png");
      background-size: 100% 100%;
    }
    // /deep/.el-pagination .btn-next {
    //   background-color: #99d26d;
    // }
    // /deep/.el-pagination .el-icon-arrow-left {
    //   background: url("@/assets/images/pet/arrow-left.png") center center
    //     no-repeat;
    // }
    // /deep/.el-pagination .el-icon-arrow-left:before {
    //   content: "";
    //   font-size: 16px;
    //   visibility: hidden;
    // }
    // /deep/.el-pagination .el-icon-arrow-right {
    //   background: url("@/assets/images/pet/arrow-right.png") center center
    //     no-repeat;
    // }
    // /deep/.el-pagination .el-icon-arrow-right:before {
    //   content: "";
    //   font-size: 16px;
    //   visibility: hidden;
    // }
  }
}
</style>

<template>
  <div class="flex justify-center min-h-100vh page">
    <!-- Back to Home -->
    <div class="flex">
      <img
        src="@/assets/images/icon_back.svg"
        class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
        @click="$router.push('/')"
      />
      <div class="title">Back to Home</div>
    </div>

    <div class="w-1270px flex justify-end">
      <PetNFTTab
        v-if="active == 1 || active == 2"
        class="mt-50px"
        v-model="active"
      ></PetNFTTab>
    </div>

    <div>
      <!-- NFT -->
      <!-- <div
        v-if="active == 1"
        class="relative top-245px left-155px flex justify-between main"
      >
        <div class="absolute left-0 top-0 leftSide"></div>
        <div class="absolute right-0 top-0 rightSide"></div>
      </div> -->

      <!-- badges -->
      <div
        v-if="active == 2"
        class="absolute top-200px left-100px flex justify-between mx-auto main"
      >
        <div class="absolute left-0 top-0 leftSide">
          <!-- //test Badget左侧布局 -->
          <div class="w-100% h-530px leftTop"></div>

          <!-- 1.如果有nft ta g就是徽章-->
          <template v-if="!empty">
            <div class="grid grid-cols-2 absolute right-10px top-60px z-10">
              <img src="@/assets/images/pet/tag.png" class="" width="30" />
              <img src="@/assets/images/pet/tag2.png" class="" width="30" />
              <img src="@/assets/images/pet/tag3.png" class="" width="30" />
              <img src="@/assets/images/pet/tag.png" class="" width="30" />
            </div>

            <img
              src="@/assets/images/pet/pet2.png"
              class="absolute center-x bottom-45px"
            />

            <div class="lv">1</div>

            <div class="exp">
              <div class="bar" :style="{ height: '70%' }"></div>
            </div>

            <div class="p w-40px text-center">70%</div>

            <div class="flex items-center absolute center-x bottom-20px">
              <img src="@/assets/images/pet/lock.svg" alt="" />
              <div class="ml-4px font-600 text-12px">#0001</div>
            </div>
          </template>
          <!-- 2.如果没有nft -->
          <template v-else>
            <img
              src="@/assets/images/pet/level.png"
              class="absolute left-10px top-60px z-10"
              width="70"
            />
            <img
              src="@/assets/images/pet/tag.png"
              class="absolute right-10px top-60px z-10"
              width="70"
            />
            <div
              class="absolute center-x w-1/1 flex items-center justify-center bottom-20px"
            >
              <div
                class="btn2 !w-245px !h-60px !text-[24px]"
                @click="empty = false"
              >
                FREEMINT
              </div>
            </div>
          </template>
        </div>

        <div class="absolute right-0 top-0 rightSide">
          <div class="rightTop w-540px h-500px"></div>
          <el-pagination layout="prev, pager, next" :total="30">
          </el-pagination>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return { active: 2, empty: true };
  },
  mounted() {},
  methods: {
    // test 初始化宠物信息 如果有宠物，那么empty就为false 展示第1个NFT界面
    async initPetInfo() {
      let account = this.userInfo.userAddress;
      this.pet = await InitPetInfo(this.pet, account);
      if (this.pet.cat.balance > 0) {
        this.empty = false;
      }
    },
  },
};
</script>
