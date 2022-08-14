<style lang="scss" scoped>
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

.sort {
  margin-left: 30px;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.12) 9.68%,
    rgba(51, 53, 114, 0.15) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 190px;
  height: 40px;
  padding-left: 22px;
  padding-right: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  opacity: 0.6;
  i {
    transition: all 0.3s;
  }
}
</style>

<template>
  <div>
    <div class="px-40px mb-24px flex justify-between">
      <div></div>
      <div class="flex">
        <el-popover
          placement="bottom"
          width="190"
          trigger="click"
          :visible-arrow="false"
          popper-class="tooltip"
          v-model="tooltip1"
        >
          <div>
            <div
              class="cursor-pointer hover:opacity-60"
              @click="setdata('without locked')"
            >
              without locked
            </div>
            <el-divider class="!my-12px"></el-divider>
            <div
              class="cursor-pointer hover:opacity-60"
              @click="setdata('with locked')"
            >
              with locked
            </div>
          </div>
          <div class="sort flex justify-between items-center" slot="reference">
            <div>{{ RecentlyListed || 'Recently Listed' }}</div>
            <i
              class="el-icon-caret-top transform"
              :class="{ 'rotate-180': tooltip1 }"
            ></i>
          </div>
        </el-popover>

        <el-popover
          placement="bottom"
          width="190"
          trigger="click"
          :visible-arrow="false"
          popper-class="tooltip"
          v-model="tooltip2"
        >
          <div>
            <div
              class="cursor-pointer hover:opacity-60"
              @click="setdata2('price low to high')"
            >
              price low to high
            </div>
            <el-divider class="!my-12px"></el-divider>
            <div
              class="cursor-pointer hover:opacity-60"
              @click="setdata2('price high to low')"
            >
              price high to low
            </div>
          </div>
          <div class="sort flex justify-between items-center" slot="reference">
            <div>{{ RecentlyListed2 || 'Recently Listed' }}</div>
            <i
              class="el-icon-caret-top transform"
              :class="{ 'rotate-180': tooltip2 }"
            ></i>
          </div>
        </el-popover>
      </div>
    </div>
    <div class="pl-40px pb-100px clearfix">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="$router.push('/myWallet/detail?id=' + item.id)"
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
            <div>
              <div class="flex items-center mb-5px">
                <div
                  class="opacity-40 text-13px w-170px line-clamp-1 overflow-ellipsis !block"
                >
                  {{ item.name }}
                </div>
                <img src="@/assets/images/icon_badge.png" alt="" />
              </div>

              <div class="flex items-center justify-between text-13px">
                <div class="font-600 flex-1 mr-10px flex w-110px">
                  <span class="line-clamp-1 overflow-ellipsis !block mr-4px">
                    {{ item.name }}
                  </span>
                  <span class="flex-shrink-0">#{{ item.id }}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center font-600 text-13px">
              <img src="@/assets/images/icon_eth.svg" class="mr-5px" />
              <span>6.4838</span>
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
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/myWallet']);
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
      list,
      RecentlyListed: '',
      RecentlyListed2: '',
      tooltip1: false,
      tooltip2: false,
    };
  },
  mounted() {},
  methods: {
    setdata(v) {
      this.RecentlyListed = v;
      this.tooltip1 = false;
    },
    setdata2(v) {
      this.RecentlyListed2 = v;
      this.tooltip2 = false;
    },
  },
};
</script>
