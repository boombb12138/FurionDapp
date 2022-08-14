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

.type {
  font-weight: 500;
  font-size: 15px;
  color: #667181;
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  &.active {
    color: #fff;
  }
  & + .type {
    margin-left: 35px;
  }
}
</style>

<template>
  <div class="!w-1160px">
    <div class="pl-40px pr-20px mb-28px flex justify-between pt-36px">
      <el-input
        placeholder="search"
        v-model="searchKey"
        class="search !w-590px"
        clearable
        @input="search"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>

      <div class="flex flex-1 items-center justify-end">
        <div
          class="flex items-center type"
          :class="{ active: type == 1 }"
          @click="type = 1"
        >
          <img src="@/assets/images/mywallet/icon1s.svg" alt="" v-if="type == 1" />
          <img src="@/assets/images/mywallet/icon1.svg" alt="" v-else />
          <div>My Wallet</div>
        </div>
        <div
          class="flex items-center type"
          :class="{ active: type == 2 }"
          @click="type = 2"
        >
          <img src="@/assets/images/mywallet/icon2s.svg" alt="" v-if="type == 2" />
          <img src="@/assets/images/mywallet/icon2.svg" alt="" v-else />
          <div>Locked In Pool</div>
        </div>
        <div
          class="flex items-center type"
          :class="{ active: type == 3 }"
          @click="type = 3"
        >
          <img src="@/assets/images/mywallet/icon3s.svg" alt="" v-if="type == 3" />
          <img src="@/assets/images/mywallet/icon3.svg" alt="" v-else />
          <div>My Furion Token</div>
        </div>
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
          <img src="@/assets/images/placeholder.png" alt="" slot="placeholder" />
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
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      list: new Array(15).fill({
        id: "3957",
        name: "AzukiAzukiAzukiAzukiAzukiAzukiAzukiAzuki",
        cover: require("@/assets/images/cover.png"),
        eth: "13.6",
        like: "13",
      }),
      searchKey: "",
      type: 1,
    };
  },
  mounted() {},
  methods: {
    search() {
      console.log(this.searchKey);
    },
  },
};
</script>
