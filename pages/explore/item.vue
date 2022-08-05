<style lang="scss" scoped>
.avatar {
  border: 8px solid #01132e;
  transform: translateY(-56px);
}

.link {
  border: 0.8px solid rgba(255, 255, 255, 0.12);
  border-radius: 40px;
  padding: 12px 20px;
}

.item {
  width: 266px;
  height: 392px;
  background: rgba(23, 37, 72, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  float: left;
  margin-right: 12px;
  margin-bottom: 15px;
  position: relative;

  &:hover .el-image {
    transition: all 0.3s;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    .icon1 {
      display: block;
    }
    .icon2 {
      display: none;
    }
    &:hover {
      .icon2 {
        display: block;
      }
      .icon1 {
        display: none;
      }
    }
  }
}

.cart {
  position: fixed !important;
  width: 1200px;
  height: 295px;
  left: 50%;
  bottom: 48px;
  transform: translateX(-50%);
  background: #d5dcee;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.3),
    inset 0px 2px 0px rgba(255, 255, 255, 0.5),
    inset 0px -3px 2px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(100px);
  border-radius: 20px;
  z-index: 99999;

  .collapse {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 136px;
    height: 36px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-end-start-radius: 40px;
    border-end-end-radius: 40px;
  }

  .cart-item {
    position: relative;
    margin-bottom: 24px;
    padding-top: 12px;
    .cover {
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 106px;
      height: 106px;
      background: #fff;
      overflow: hidden;
    }
  }

  .mask {
    height: 40px;
    width: 712px;
    background: linear-gradient(
      180deg,
      rgba(213, 220, 238, 0) 0%,
      rgba(213, 220, 238, 0.2) 30%,
      rgba(213, 220, 238, 1) 100%
    );
  }

  ::v-deep {
    .el-scrollbar__bar.is-vertical {
      opacity: 1;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.06) 52.08%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    .less4 {
      .el-scrollbar__bar.is-vertical {
        opacity: 0;
      }
    }
  }
}

.buy {
  width: 340px;
  height: 60px;
  border: 3px solid #999;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 0px 3px rgba(0, 0, 0, 0.8);
  border-radius: 14px;
}
</style>

<template>
  <div class="w-1/1 -mt-124px">
    <img src="@/assets/images/item.png" class="w-1/1 h-280px object-cover" />

    <div class="px-40px">
      <div class="flex justify-between">
        <div class="pl-8px flex">
          <img
            src="@/assets/images/avatar.png"
            class="w-142px rounded-full avatar"
          />
          <div class="pt-20px pl-20px">
            <div class="font-700 text-28px mb-5px">Azuki</div>
            <div class="text-14px flex items-center">
              <div class="mr-5px">
                Created by
                <span class="text-[#31C2C7]">TeamAzuki</span>
              </div>
              <img src="@/assets/images/icon_badge.png" alt="" />
            </div>
          </div>
        </div>
        <div class="flex items-center h-94px">
          <div>
            <a href="/" class="block link flex items-center mr-42px">
              <img src="@/assets/images/icon_link.png" class="mr-10px" />
              <div class="text-13px mr-5px">AzukiZen</div>
              <div class="text-13px opacity-60">Linked</div>
            </a>
          </div>

          <div class="text-center px-15px">
            <div class="font-600 mb-4px">10.0K</div>
            <div class="opacity-40 text-12px">items</div>
          </div>
          <el-divider direction="vertical" class="!h-40px"></el-divider>
          <div class="text-center px-15px">
            <div class="font-600 mb-4px">10.0K</div>
            <div class="opacity-40 text-12px">owners</div>
          </div>
          <el-divider direction="vertical" class="!h-40px"></el-divider>
          <div class="text-center px-15px">
            <div class="font-600 mb-4px">
              <img
                src="@/assets/images/icon_eth.svg"
                style="vertical-align: -2px"
              />
              10.0K
            </div>
            <div class="opacity-40 text-12px">floor price</div>
          </div>
          <el-divider direction="vertical" class="!h-40px"></el-divider>
          <div class="text-center px-15px">
            <div class="font-600 mb-4px">
              <img
                src="@/assets/images/icon_eth.svg"
                style="vertical-align: -2px"
              />
              10.0K
            </div>
            <div class="opacity-40 text-12px">volume traded</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pl-40px pb-150px -mt-20px clearfix">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="$router.push('/explore/detail?id=' + item.id)"
      >
        <el-image
          :src="item.cover"
          class="w-252px h-252px rounded-12px m-6px mb-16px"
          lazy
        >
          <img
            src="@/assets/images/placeholder.png"
            alt=""
            slot="placeholder"
          />
        </el-image>
        <div class="px-15px">
          <div class="flex justify-between items-center mb-10px">
            <div
              class="opacity-40 text-13px w-180px line-clamp-1 overflow-ellipsis !block"
            >
              {{ item.name }}
            </div>
            <div class="text-13px">
              <img src="@/assets/images/icon_eth.svg" />
              <span class="font-600">13.6</span>
            </div>
          </div>
          <div class="flex items-center justify-between text-13px">
            <div class="font-600 flex-1 mr-10px flex w-110px">
              <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                {{ item.name }}
              </span>
              <span class="flex-shrink-0">#{{ item.id }}</span>
            </div>
            <el-button
              type="primary"
              class="!w-110px !h-27px !flex items-center justify-center flex-shrink-0"
              @click.stop="cart.push(item)"
            >
              <div class="text-13px">BUY</div>
            </el-button>
          </div>
        </div>

        <div
          class="h-36px bg-opacity-60 bg-[#01132E] w-1/1 absolute bottom-0 left-0 px-15px flex items-center justify-between rounded-bl-12px rounded-br-12px"
        >
          <img src="@/assets/images/icon_eth.svg" />
          <div class="flex items-center">
            <div
              class="w-24px h-24px flex items-center justify-center rounded-full hover:bg-[#1F2E48] icon"
            >
              <img src="@/assets/images/Vector.svg" class="w-12px icon1" />
              <img src="@/assets/images/Vector2.svg" class="w-12px icon2" />
            </div>
            <div class="opacity-40 text-13px">{{ item.like }}</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="cart"
      v-if="cart.length && !collapse"
      :class="{ '!h-260px': cart.length <= 4 }"
    >
      <div
        class="collapse flex items-center justify-center cursor-pointer"
        @click="collapse = true"
      >
        <img src="@/assets/images/arrow.svg" alt="" />
      </div>
      <div class="flex">
        <div class="flex-1 pt-30px pl-50px flex flex-col">
          <div class="text-[#0B1A3B] font-600 text-22px mb-30px">
            YOU RECEIVE:
          </div>

          <div
            class="h-208px relative"
            :class="{
              less4: cart.length <= 4,
            }"
          >
            <div
              class="mask absolute bottom-0 left-0 z-10"
              v-if="cart.length > 4"
            ></div>
            <el-scrollbar class="h-1/1">
              <div class="grid grid-cols-4">
                <div
                  class="cart-item"
                  v-for="(item, index) in cart"
                  :key="index"
                >
                  <img
                    src="@/assets/images/del.svg"
                    class="absolute top-0 left-94px cursor-pointer"
                    @click="cart.splice(index, 1)"
                  />
                  <div class="cover">
                    <img :src="item.cover" class="w-1/1 h-1/1" />
                  </div>

                  <div class="text -mt-14px relative">
                    <img src="@/assets/images/text.svg" />
                    <div
                      class="absolute left-0 top-22px text-14px w-124px text-center text-[#0B1A3B] text-opacity-70 font-600 flex px-10px"
                    >
                      <span
                        class="line-clamp-1 overflow-ellipsis !block mr-4px"
                      >
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
        <div class="w-428px pl-28px pt-100px">
          <div class="relative w-340px h-60px">
            <el-button
              type="primary"
              class="!w-334px !h-54px relative top-3px left-3px z-10"
            >
              <span class="text-22px">BUY NOW 21.7384 ETH</span>
            </el-button>
            <div class="buy absolute top-0"></div>
          </div>
          <div
            class="text-13px text-[#0B1A3B] text-opacity-70 pr-54px mt-15px leading-20px text-center"
          >
            <span class="font-600">Dislcaimer:</span>
            You might end up with a slightly different amount due to Uniswap
            price impact, checkout 100 KONGZ20 price on Uniswap for exact.
          </div>
        </div>
      </div>
    </div>

    <div class="cart !h-80px" v-if="cart.length && collapse">
      <div
        class="collapse flex items-center justify-center cursor-pointer"
        @click="collapse = false"
      >
        <img src="@/assets/images/arrow.svg" class="transform rotate-180" />
      </div>
      <div class="flex justify-between pl-50px pr-30px items-center h-1/1">
        <div class="text-[#0B1A3B] font-600 text-22px">YOU RECEIVE:</div>
        <div class="relative w-340px h-60px transform scale-80">
          <el-button
            type="primary"
            class="!w-334px !h-54px relative top-3px left-3px z-10"
          >
            <span class="text-22px">BUY NOW 21.7384 ETH</span>
          </el-button>
          <div class="buy absolute top-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/explore']);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    let list = [];
    list.length = 4;
    list.fill({
      id: '3957',
      name: 'AzukiAzukiAzukiAzukiAzukiAzukiAzukiAzuki',
      cover: require('@/assets/images/cover.png'),
      eth: '13.6',
      like: '13',
    });
    list.unshift({
      id: '2222',
      name: '2AzukiAzukiAzukiAzukiAzukiAzukiAzukiAzuki',
      cover: require('@/assets/images/cover2.png'),
      eth: '23.6',
      like: '23',
    });
    return {
      collapse: false,
      list,
      cart: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>
