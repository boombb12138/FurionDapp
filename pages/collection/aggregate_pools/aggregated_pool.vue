<style lang="scss" scoped>
.avatar {
  border: 8px solid #01132e;
  transform: translateY(-56px);
}

.tag {
  background: rgba(250, 107, 225, 0.7);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0.6px #ffb7f3;
  border-radius: 8px;
  width: 200px;
  height: 34px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  @apply flex items-center justify-center;
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

.sort {
  font-weight: 600;
  color: #a9acb0;
  border: 2.32687px solid #1a2a42;
  border-radius: 8px;
  width: 200px;
  height: 40px;
  @apply px-15px flex items-center justify-between cursor-pointer;
  i {
    margin-left: 10px;
  }
}

::v-deep {
  .el-scrollbar__bar.is-vertical {
    width: 11px;
    opacity: 1;
    background: transparent;

    > div {
      background: #edf2ff;
      box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.1),
        inset 0px -2px 6px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      outline: 3px solid rgba(56, 205, 209, 0.2);
      border: 2px solid #55e7ec;
    }
  }
}

.filter {
  background: #1a2a42;
  border-radius: 10px;
  border: none;
  padding: 20px 56px;
  .popper__arrow {
    border: none;
  }
  .popper__arrow::after {
    border-bottom-color: #1a2a42 !important;
  }

  .filter-item {
    border: 2px solid #4b596f;
    border-radius: 8px;
    width: 80px;
    height: 26px;
    font-weight: 600;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    line-height: 1;
    @apply flex justify-center items-center;
    &.active {
      color: #02193a !important;
      background: #fa6be1 !important;
      border: none !important;
      text-shadow: none;
      font-weight: 800;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), inset 0px -1px 1px rgba(0, 0, 0, 0.4),
        inset 0px 1px 0.6px #ffb7f3;
    }
    &:hover {
      border: 2px solid #fa6be1;
      color: #fa6be1;
    }
  }
}
</style>

<template>
  <div class="!w-1/1 pt-0">
    <img src="@/assets/images/item.png" class="w-1/1 h-280px object-cover" />
    <img
      src="@/assets/images/icon_back.svg"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
      @click="$router.go(-1)"
    />
    <div class="w-1124px mx-auto">
      <div class="px-20px">
        <div class="flex justify-between">
          <div class="pl-8px flex">
            <img src="@/assets/images/avatar.png" class="w-142px rounded-full avatar" />
            <div class="pt-10px pl-20px flex relative">
              <div class="font-700 text-28px mb-5px mr-5px">Azuki</div>

              <div class="mr-10px text-14px mt-10px">
                Created by
                <span class="text-[#34F8FF] font-600">TeamAzuki</span>
              </div>
              <div class="pt-15px">
                <img src="@/assets/images/icon_badge.png" alt="" />
              </div>

              <div class="absolute left-0 top-50px left-20px">
                <div class="tag">
                  <div>FFT-A :</div>
                  <img
                    src="@/assets/images/icon_eth.svg"
                    width="18"
                    class="mx-10px -mt-2px"
                  />
                  <div>0.04</div>
                </div>
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
                <img src="@/assets/images/icon_eth.svg" style="vertical-align: -2px" />
                10.0K
              </div>
              <div class="opacity-40 text-12px">floor price</div>
            </div>
            <el-divider direction="vertical" class="!h-40px"></el-divider>
            <div class="text-center px-15px">
              <div class="font-600 mb-4px">
                <img src="@/assets/images/icon_eth.svg" style="vertical-align: -2px" />
                115.0K
              </div>
              <div class="opacity-40 text-12px">volume traded</div>
            </div>
          </div>
        </div>
      </div>

      <div class="-mt-20px">
        <div class="flex justify-between items-center mb-12px">
          <el-input
            placeholder="Search by name or attribute"
            v-model="searchKey"
            class="search !w-858px"
            clearable
            @input="search"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <div class="btn_border">
            <el-button
              type="primary"
              class="!w-170px !h-48px"
              @click="dialogVisible = true"
            >
              <div class="relative -top-2px">
                <span class="text-20px">+</span>
                ADD ASSET
              </div>
            </el-button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="ALL"></el-checkbox>
            <el-checkbox label="STORED"></el-checkbox>
            <el-checkbox label="LOCKED"></el-checkbox>
          </el-checkbox-group>

          <div class="pr-5px">
            <img
              src="@/assets/images/filter2.svg"
              alt=""
              v-if="showFilter"
              class="cursor-pointer"
              @click="showFilter = false"
            />
            <img
              src="@/assets/images/filter.svg"
              alt=""
              v-else
              class="cursor-pointer"
              @click="showFilter = true"
            />
          </div>
        </div>
        <transition name="el-zoom-in-top">
          <div class="mt-12px relative" v-if="showFilter">
            <div class="el-popover el-popper !static filter" x-placement="bottom">
              <img
                src="@/assets/images/arrow_up.svg"
                class="absolute right-18px bottom-20px cursor-pointer"
                @click="showFilter = false"
              />
              <div class="grid grid-cols-11 gap-y-10px">
                <div
                  class="filter-item"
                  :class="{ active: !filter.length }"
                  @click="filter = []"
                >
                  ALL
                </div>
                <div
                  class="filter-item"
                  v-for="n in 20"
                  @click="add(n)"
                  :class="{ active: filter.includes(n) }"
                >
                  NAME
                </div>
              </div>
              <div class="popper__arrow" style="right: 15px; top: -6px; left: auto"></div>
            </div>
          </div>
        </transition>
        <div class="pb-150px grid grid-cols-4 mt-20px">
          <div
            class="item"
            v-for="(item, index) in list"
            :key="index"
            @click="$router.push('/collection/detail?id=' + item.id)"
          >
            <el-image
              :src="item.cover"
              class="w-252px h-252px rounded-12px m-6px mb-16px"
              lazy
            >
              <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
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

                <div class="btn2 mr-5px" @click.stop="toCart(item)">
                  <img src="@/assets/images/cart.png" class="icon mr-5px -mt-1px" />
                  <img src="@/assets/images/cart2.png" class="icon2 mr-5px -mt-1px" />
                  CART
                </div>

                <div class="btn2">
                  <img src="@/assets/images/buy.png" class="icon mr-5px" />
                  <img src="@/assets/images/buy2.png" class="icon2 mr-5px" />
                  BUY
                </div>
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
      </div>
    </div>

    <el-dialog
      title="NFT Contract Address:"
      :visible.sync="dialogVisible"
      width="850px"
      :close-on-click-modal="false"
      append-to-body
      custom-class="el-dialog-dark"
    >
      <div slot="title" class="flex font-800 text-20px">
        <div class="pb-2px" style="border-bottom: 2px solid #fff">ADD ASSET</div>

        <el-popover
          placement="bottom"
          title=""
          trigger="hover"
          :visible-arrow="false"
          popper-class="el-tip"
        >
          <div class="text-center text-[#0B1A3B]">
            <div class="text-20px font-600 mb-30px">
              By {locking/storing} (X} (AZUKI), you get
            </div>
            <div class="font-900 text-36px">1000 F-AZUKI</div>
          </div>
          <img
            src="@/assets/images/q.svg"
            class="ml-14px cursor-pointer -mt-3px"
            slot="reference"
          />
        </el-popover>
      </div>

      <div class="h-474px mb-35px">
        <el-scrollbar class="h-1/1">
          <div class="grid grid-cols-3 gap-y-38px">
            <img
              src="@/assets/images/cover.png"
              class="w-218px h-218px rounded-12px"
              v-for="(item, index) in 9"
              :key="index"
            />
          </div>
        </el-scrollbar>
      </div>

      <div class="flex justify-between items-center pr-44px">
        <div></div>
        <div class="flex">
          <div class="btn_border mr-15px">
            <el-button plain class="!w-124px !h-38px !p-0">LOCK</el-button>
          </div>
          <div class="btn_border">
            <el-button type="primary" class="!w-124px !h-38px !p-0">STORE</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/collection"]);
  },
  props: {},
  components: {},
  computed: {
    cart() {
      return this.$store.state.user.cart;
    },
  },
  data() {
    let list = [];
    list.length = 4;
    list.fill({
      id: "3957",
      name: "Azuki",
      cover: require("@/assets/images/cover.png"),
      eth: "13.6",
      like: "13",
    });
    list.unshift({
      id: "2222",
      name: "Azuki",
      cover: require("@/assets/images/cover2.png"),
      eth: "23.6",
      like: "23",
    });
    return {
      dialogVisible: false,
      list,
      checkList: [],
      searchKey: "",
      sort: "Price low to high",
      filter: [],
      showFilter: false,
    };
  },
  mounted() {},
  methods: {
    search() {
      console.log(this.searchKey);
    },
    onSort(str) {
      this.$refs.sort.doClose();
      this.sort = str;
    },
    toCart(item) {
      let arr = [...this.cart, item.id];
      this.$store.commit("save", ["user.cart", arr, this]);
    },
    add(n) {
      let i = this.filter.findIndex((item) => item == n);
      if (i == -1) {
        this.filter.push(n);
      } else {
        this.filter.splice(i, 1);
      }
    },
  },
};
</script>
