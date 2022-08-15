<style lang="scss" scoped>
.go {
  background: linear-gradient(273.69deg, #5df3c3 -12.38%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 600;
  font-size: 16px;
}

.tip {
  width: 381px;
  height: 28px;
  background: #36375e;
  opacity: 0.75;
  border-radius: 3px;
  @apply flex items-center justify-center;
}

.bar {
  background: linear-gradient(
    180deg,
    rgba(193, 99, 226, 0.162) 0%,
    rgba(51, 53, 114, 0.3) 113.94%
  );
  color: rgba(154, 163, 173, 0.8);
  font-weight: 400;
  font-size: 14px;
}

.line {
  background: rgba(255, 255, 255, 0.08);
  width: 1px;
  height: 18px;
  margin: 0 20px;
}

.box {
  position: relative;
  display: inline-block;
  width: auto;
  background: linear-gradient(
    0,
    rgba(250, 107, 225, 0.4) 17.23%,
    rgba(8, 19, 50, 0.4) 100%
  );
  border-radius: 30px;
}

.box-bg {
  position: absolute;
  // background: url("~@/assets/images/cart-bg.png") no-repeat;
  width: 100%;
  height: 225px;
  bottom: 0;
  background-size: 100% 100%;
}

.item {
  float: left;
  width: 212px;
  height: 284px;
  background: #172548;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
}

.cart {
  max-width: 910px;
}
</style>

<template>
  <div class="!w-full pb-180px">
    <div
      @click="$router.go(-1)"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80 flex items-center"
    >
      <img src="@/assets/images/icon_back.svg" />
      <div class="go ml-23px">Back to shopping</div>
    </div>

    <div class="absolute center-x top-105px tip">Cannot find your metamask wallet</div>

    <div class="pt-160px text-30px font-700 text-center mb-60px">Your cart items</div>

    <div class="text-center">
      <div class="box">
        <div class="box-bg relative">
          <img
            src="@/assets/images/cart_btn.svg"
            class="absolute center-x -bottom-20px"
          />
        </div>

        <div class="pl-12px clearfix cart" :class="{ 'pb-30px': list.length > 4 }">
          <el-scrollbar class="h-330px overflow-hidden">
            <div
              class="item"
              v-for="(item, index) in list"
              :key="index"
              @click="$router.push('/collection/detail?id=' + item.id)"
            >
              <el-image
                :src="item.cover"
                class="w-201px h-201px rounded-12px m-4px mb-12px"
                lazy
              >
                <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
              </el-image>
              <div class="px-15px">
                <div class="flex justify-between items-center mb-10px">
                  <div
                    class="opacity-40 text-12px w-140px line-clamp-1 overflow-ellipsis !block text-left"
                  >
                    {{ item.name }}
                  </div>
                  <div class="text-12px flex items-center">
                    <img src="@/assets/images/icon_eth.svg" class="mr-4px" />
                    <span class="font-600">13.6</span>
                  </div>
                </div>
                <div class="flex items-center justify-between text-12px">
                  <div class="font-600 flex-1 mr-10px flex w-110px">
                    <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                      {{ item.name }}
                    </span>
                    <span class="flex-shrink-0">#{{ item.id }}</span>
                  </div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 h-80px flex items-center justify-end bar w-1/1 pr-130px">
      <div class="flex items-center">
        <div class="mr-15px">Sub-total:</div>
        <img src="@/assets/images/icon_eth.svg" class="mr-6px" />
        <div class="text-16px font-600 text-[rgba(255,255,255,0.8)]">13.725</div>
      </div>
      <div class="line"></div>
      <div class="flex items-center">
        <div class="mr-15px">Gas fee:</div>
        <img src="@/assets/images/icon_eth.svg" class="mr-6px" />
        <div class="text-16px font-600 text-[rgba(255,255,255,0.8)]">0.00374</div>
      </div>
      <div class="btn_border ml-40px" @click="$router.push('/cart/payment_method')">
        <el-button type="primary" class="!w-140px !h-48px">
          <span class="font-900 text-16px">Check-out</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      list: new Array(10).fill({
        id: "3957",
        name: "Azuki",
        cover: require("@/assets/images/cover.png"),
        eth: "13.6",
        like: "13",
      }),
    };
  },
  mounted() {},
  methods: {},
};
</script>
