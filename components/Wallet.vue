<style lang="scss" scoped>
.info {
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  height: 40px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  &:hover {
    border: 2px solid rgba(255, 255, 255, 0.4);
  }
}

.top1 {
  background: url('@/assets/images/icon_top_01.png');

  &:hover {
    background: url('@/assets/images/icon_top_01_hover.png');
  }
}
.top2 {
  background: url('@/assets/images/icon_top_02.png');

  &:hover {
    background: url('@/assets/images/icon_top_02_hover.png');
  }
}
</style>

<template>
  <div>
    <div class="flex items-center">
      <div class="w-36px h-36px mr-12px cursor-pointer top1"></div>
      <div class="w-36px h-36px mr-12px cursor-pointer top2"></div>

      <div
        class="info pr-15px"
        :class="{ '!bg-[#021735]': $route.path == '/explore/item' }"
        @click="$store.commit('update', ['admin.connectDialog', 'default'])"
      >
        <img src="@/assets/images/eth.png" class="mr-6px w-20px" />
        <div class="opacity-80">Ethereum</div>
      </div>
      <div
        class="info pr-1px py-2px"
        :class="{ '!bg-[#021735]': $route.path == '/explore/item' }"
        @click="$store.commit('update', ['admin.accountDialog', true])"
      >
        <div class="mr-10px opacity-80">11111 ETH</div>
        <div
          class="flex flex-1 bg-[#0c203d] h-1/1 rounded-8px items-center justify-between"
        >
          <div class="pl-8px mr-15px opacity-40">0x8D49...d7e9</div>
          <div class="h-20px w-20px bg-[#9A9999] rounded-4px mr-6px"></div>
        </div>
      </div>
      <el-button
        class="!h-44px w-170px !px-0 !text-12px"
        @click="
          $store.commit('update', ['admin.connectStatus', 'disconnected'])
        "
      >
        Connect Wallet
      </el-button>
    </div>
    <!-- <el-button
      round
      type="primary"
      class="!h-44px w-170px !px-0 !text-12px"
      v-if="connectStatus == 'disconnected'"
      @click="$store.commit('update', ['admin.connectDialog', 'simple'])"
    >
      Connect Wallet
    </el-button> -->
    <!-- <el-button
      round
      type="primary"
      class="!h-44px w-170px !px-0 !text-12px"
      v-if="connectStatus == 'pending'"
      @click="connected = 1"
    >
      PENDING TRANSACTION
    </el-button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {},
  computed: {
    ...mapState('admin', ['connectStatus']),
  },
  data() {
    return {
      connect: false,
      connectSmiple: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>
