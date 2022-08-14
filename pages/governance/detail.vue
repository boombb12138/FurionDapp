<style lang="scss" scoped>
.bg {
  background: url('@/assets/images/bg.png') 100% 100% no-repeat;
  background-attachment: fixed;
}
.tag {
  width: 60px;
  height: 28px;
  text-align: center;
  color: #9aa3ad;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.post > div {
  margin-bottom: 12px;
}

.card {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 107.69%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  .title {
    padding: 8px 20px;
    color: rgba(252, 255, 253, 0.8);
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
  }
  .content {
    padding: 16px 20px;
    font-size: 13px;
    line-height: 24px;
    color: #9aa3ad;
  }
}

.badge {
  margin-left: 10px;
  color: #0a1e3f;
  background: #9aa3ad;
  border-radius: 99px;
  font-size: 12px;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
}

.more {
  color: rgba(252, 255, 253, 0.8);
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  width: 110px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  line-height: 30px;
  text-align: center;
  border-radius: 30px;
  position: absolute;
  bottom: -20px;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.mask {
  background: linear-gradient(
    179.99deg,
    rgba(5, 23, 52, 0) -62.58%,
    #021833 84.88%
  );
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 65px;
}

.moreList {
  width: calc(100% + 2px);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 0;
  height: 46px;
  line-height: 45px;
  font-weight: 600;
  font-size: 13px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 107.69%
  );
}

.moreTable {
  ::v-deep {
    .el-table__body {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
  }
}
</style>

<template>
  <div class="px-90px pb-100px -mt-124px bg min-h-100vh">
    <div class="w-620px pt-124px">
      <div class="text-28px leading-42px pr-50px mb-12px">
        OIP-79:Approve FIAT DAO as an OHMDEBTOR
      </div>
      <div class="flex items-center justify-between mb-20px">
        <div class="flex items-center">
          <el-button
            class="!h-28px w-80px !p-0 !text-12px !font-800 !mr-12px !rounded-8px"
          >
            Closed
          </el-button>
          <img
            src="@/assets/images/avatar_g.png"
            class="w-22px h-22px rounded-full mr-8px"
          />
          <div class="text-14px mr-8px">
            <span class="text-[#9AA3AD]">OlympusDAO by</span>
            <span class="font-600"> OxdaA3..d5C9</span>
          </div>
          <div class="tag">Core</div>
        </div>
        <div class="flex items-center justify-between">
          <img
            src="@/assets/images/icon_forward.svg"
            class="w-24px mr-16px cursor-pointer"
          />
          <img
            src="@/assets/images/icon_more.svg"
            class="w-24px cursor-pointer"
          />
        </div>
      </div>

      <div
        class="text-14px text-[#9AA3AD] leading-24px mb-30px relative"
        :class="{
          '!mb-60px': !morePost,
        }"
      >
        <div
          class="post overflow-hidden"
          :class="{
            '!h-320px': !morePost,
          }"
        >
          <div>
            Forum Post:
            <a
              href="https://forum.olympusdao.finance/d/1055-oip-79- Snapshot 14,253,491G
            approve-fiat-dao-as-an-ohmdebtor"
              class="text-[#FCFFFD] font-600 hover:underline"
            >
              https://forum.olympusdao.finance/d/1055-oip-79- Snapshot
              14,253,491G approve-fiat-dao-as-an-ohmdebtor
            </a>
          </div>

          <div>Summary</div>
          <div>
            FIAT DAO is transitioning away from gOHM-denominated liquidity on
            Results mainnet Sushiswap to OHM-denominated liquldity on mainnet
            Uniswap v3.In consultation with the Treasury and Partnerships teams
            For 1IK OHM 99.86% of the Olympus DAO,we are proposing that we be
            approved as an OHMDEBTOR at a maximum loan-to-value ratio of 75% so
            as to Against 15 OHM 0.14% maximize the capital efficiency of our
            current OHM holdings. Motivation
          </div>
          <div>
            FIAT DAO is transitioning away from gOHM-denominated liquidity on
            Results mainnet Sushiswap to OHM-denominated liquldity on mainnet
            Uniswap v3.In consultation with the Treasury and Partnerships teams
            For 1IK OHM 99.86% of the Olympus DAO,we are proposing that we be
            approved as an OHMDEBTOR at a maximum loan-to-value ratio of 75% so
            as to Against 15 OHM 0.14% maximize the capital efficiency of our
            current OHM holdings. Motivation FIAT DAO is transitioning away from
            gOHM-denominated liquidity on Results mainnet Sushiswap to
            OHM-denominated liquldity on mainnet Uniswap v3.In consultation with
            the Treasury and Partnerships teams For 1IK OHM 99.86% of the
            Olympus DAO,we are proposing that we be approved as an OHMDEBTOR at
            a maximum loan-to-value ratio of 75% so as to Against 15 OHM 0.14%
            maximize the capital efficiency of our current OHM holdings.
            Motivation
          </div>
        </div>
        <div class="mask" v-if="!morePost"></div>
        <div class="more" v-if="!morePost" @click="morePost = true">
          Show more
        </div>
      </div>

      <div :class="{ moreTable: !moreList }">
        <el-table :data="list" style="width: 100%">
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <div class="flex items-center !-ml-10px">
                <span class="opacity-80">Votes</span>
                <div class="badge">85</div>
              </div>
            </template>

            <template slot-scope="scope">
              <div class="flex items-center pl-15px">
                <img
                  src="@/assets/images/avatar_g.png"
                  class="w-22px h-22px rounded-full mr-8px"
                />
                <div class="text-13px text-[#9AA3AD]">
                  {{ scope.row.address }}
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center">
            <template slot-scope="scope">
              <div class="text-13px text-[#9AA3AD]">
                {{ scope.row.type }}
              </div>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <div class="flex items-center justify-end pr-20px">
                <div class="text-13px mr-10px text-[#9AA3AD]">
                  {{ scope.row.detail }}
                </div>
                <img
                  src="@/assets/images/icon_forward.svg"
                  class="w-20px cursor-pointer"
                />
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="moreList" @click="more" v-if="!moreList">Show more</div>
      </div>
    </div>

    <div class="fixed top-140px left-1050px w-300px">
      <div class="card mb-20px">
        <div class="title">Information</div>
        <div class="content">
          <div class="flex justify-between items-center h-24px">
            <div class="opacity-60">Strategie(s)</div>
            <div>
              <img
                src="@/assets/images/avatar_g.png"
                class="w-18px h-18px rounded-full ml-4px"
              />
              <img
                src="@/assets/images/avatar_g.png"
                class="w-18px h-18px rounded-full ml-4px"
              />
              <img
                src="@/assets/images/avatar_g.png"
                class="w-18px h-18px rounded-full ml-4px"
              />
              <img
                src="@/assets/images/avatar_g.png"
                class="w-18px h-18px rounded-full ml-4px"
              />
            </div>
          </div>

          <div class="flex justify-between items-center h-24px">
            <div class="opacity-60">IPFS</div>
            <div>#QmTXxBiC</div>
          </div>
          <div class="flex justify-between items-center h-24px">
            <div class="opacity-60">Voting system</div>
            <div>Single choice voting</div>
          </div>
          <div class="flex justify-between items-center h-24px">
            <div class="opacity-60">Start date</div>
            <div>Feb2220224:33PM</div>
          </div>
          <div class="flex justify-between items-center h-24px">
            <div class="opacity-60">End date</div>
            <div>Feb2220224:33PM</div>
          </div>
          <div class="flex justify-between items-center h-24px">
            <div class="opacity-60">Snapshot</div>
            <div>14253,491G</div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="title">Results</div>
        <div class="content">
          <div class="flex justify-between items-center h-24px mb-6px">
            <div class="opacity-60">For11KOHM</div>
            <div class="opacity-60">99.86%</div>
          </div>
          <el-progress
            :percentage="99"
            :show-text="false"
            class="mb-18px"
          ></el-progress>

          <div class="flex justify-between items-center h-24px mb-6px">
            <div class="opacity-60">Against15 OHM</div>
            <div class="opacity-60">0.14%</div>
          </div>
          <el-progress
            :percentage="1"
            :show-text="false"
            class="mb-10px"
          ></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit('update', ['admin.activeMenu', '/governance']);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    let list = [];
    list.length = 6;
    list.fill({
      avatar: require('@/assets/images/avatar_g.png'),
      address: '0x3459.5sCC',
      type: 'For',
      detail: '2.2K OHM 22',
    });
    return {
      list,
      morePost: false,
      moreList: false,
    };
  },
  mounted() {},
  methods: {
    more() {
      let arr = [];
      arr.length = 6;
      arr.fill({
        avatar: require('@/assets/images/avatar_g.png'),
        address: '0x3459.5sCC',
        type: 'For',
        detail: '2.2K OHM 22',
      });
      this.list = [...this.list, ...arr];
      this.moreList = true;
    },
  },
};
</script>
