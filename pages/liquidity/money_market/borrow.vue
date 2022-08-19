<style lang="scss" scoped>
.box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.4) 0%,
    rgba(51, 53, 114, 0.5) 100.69%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(252, 255, 253, 0.6);
}

.bar {
  background: rgba(1, 17, 41, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  height: 60px;
  @apply flex items-center justify-between px-25px mb-30px;
}

.item {
  background: #011129;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fcfffd;
  @apply p-25px pr-18px relative;
}
</style>

<template>
  <div class="!w-1150px">
    <BorrowTab2 v-model="active"></BorrowTab2>

    <div class="w-600px mx-auto box py-28px px-15px">
      <div class="flex px-25px mb-27px">
        <div class="flex-1 text-14px leading-18px">
          <div class="mb-4px">Collateralized</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0</span>
            WAWAX
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-center">
          <div class="mb-4px">Borrowed</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0</span>
            USDC.e
          </div>
        </div>
        <div class="flex-1 text-14px leading-18px text-right">
          <div class="mb-4px">Health</div>
          <div class="font-500 text-16px">
            <span class="font-600 text-[#FCFFFD]">0%</span>
            <span class="inline-block bg-[#50CD7E] w-10px h-10px rounded-full"></span>
          </div>
        </div>
      </div>

      <div class="item mb-16px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/token1.png" class="w-32px mr-18px" />
            <div class="font-600 text-22px">0 WAWAX</div>
          </div>
          <div class="flex items-center">
            <div class="text-16px text-[rgba(252,255,253,0.8)] mr-16px">Deposit from</div>
            <div class="btn_border !rounded-full mr-16px">
              <el-button type="primary" plain round class="!w-70px !h-32px !p-0">
                <span class="text-14px font-800 normal-case">Wallet</span>
              </el-button>
            </div>

            <el-popover
              placement="bottom"
              title=""
              trigger="hover"
              :visible-arrow="false"
              popper-class="el-tip"
            >
              <div class="text-center text-[#0B1A3B]">
                <div>text...</div>
              </div>
              <img
                src="@/assets/images/liquidity/q.svg"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <div class="text-30px font-600 mr-16px">0.00</div>
            <div class="text-14px text-[rgba(252,255,253,0.6)]">~$15.82</div>
          </div>
          <div class="text-14px text-[rgba(252,255,253,0.6)]">Balance:1.02868</div>
        </div>
      </div>
      <div class="item mb-20px">
        <img
          class="absolute center-x -top-27px"
          src="@/assets/images/liquidity/arrow_down2.svg"
        />

        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img src="@/assets/images/token2.png" class="w-32px mr-18px" />
            <div class="font-600 text-22px">0 WAWAX</div>
          </div>
          <div class="flex items-center">
            <div class="text-16px text-[rgba(252,255,253,0.8)] mr-16px">Receive in</div>
            <div class="btn_border !rounded-full mr-16px">
              <el-button type="primary" plain round class="!w-70px !h-32px !p-0">
                <span class="text-14px font-800 normal-case">Wallet</span>
              </el-button>
            </div>

            <el-popover
              placement="bottom"
              title=""
              trigger="hover"
              :visible-arrow="false"
              popper-class="el-tip"
            >
              <div class="text-center text-[#0B1A3B]">
                <div>text...</div>
              </div>
              <img
                src="@/assets/images/liquidity/q.svg"
                class="cursor-pointer"
                slot="reference"
              />
            </el-popover>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <div class="text-30px font-600 mr-16px">0.00</div>
          </div>
        </div>
      </div>

      <div class="bar">
        <div class="flex items-center">
          <img src="@/assets/images/liquidity/info.svg" />
          <div class="font-500 text-16px text-[rgba(252,255,253,0.8)] ml-12px">
            Liquidation Price None
          </div>
        </div>
        <img src="@/assets/images/liquidity/arrow.svg" />
      </div>

      <div class="btn_border">
        <el-button type="primary" class="!w-full !h-60px" disabled>
          <span class="font-800 text-20px">Enter an amount</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: {},
  computed: {
    query() {
      return this.$route.query;
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  mounted() {},
  methods: {},
};
</script>
