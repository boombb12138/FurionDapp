<style lang="scss" scoped>
.bg {
  background: url('@/assets/images/detail.png') 100% no-repeat;
}
.btns {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  height: 48px;
  width: 184px;
  overflow: hidden;
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
  .br {
    border-right: 1px solid rgba(255, 255, 255, 0.12);
  }
}

.title {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.12) 9.68%,
    rgba(51, 53, 114, 0.15) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: calc(100% + 2px);
}

::v-deep {
  .el-table .el-table__header-wrapper {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>

<template>
  <div class="pt-30px px-60px">
    <div class="flex mb-32px">
      <img
        src="@/assets/images/cover0.png"
        class="w-400px h-400px rounded-20px mr-30px"
      />
      <div class="w-630px flex flex-col">
        <div class="flex justify-between mb-80px">
          <div>
            <div class="text-[#31C2C7] text-20px font-600 mb-20px">Azuki</div>
            <div class="text-32px font-700">Azuki #3957</div>
          </div>
          <div class="flex cursor-pointer btns">
            <div class="br">
              <img src="@/assets/images/icon_refresh.svg" class="w-24px" />
            </div>
            <div class="br">
              <img src="@/assets/images/icon_forward.svg" class="w-24px" />
            </div>
            <div class="br">
              <img src="@/assets/images/icon_share.svg" class="w-24px" />
            </div>
            <div>
              <img src="@/assets/images/icon_more.svg" class="w-24px" />
            </div>
          </div>
        </div>
        <div class="bg flex-1 p-30px">
          <div class="mb-15px opacity-60 font-500 text-20px">
            Reference Price
          </div>
          <div class="flex items-center mb-55px">
            <img src="@/assets/images/icon_eth.svg" class="w-24px mr-10px" />
            <div class="font-700 text-32px">6.4838</div>
          </div>
          <div class="btn_border w-380px">
            <el-button type="primary" class="w-1/1 !h-60px">
              <div class="text-22px font-800">BUY NOW</div>
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center pl-44px h-76px title">
        <img src="@/assets/images/icon_item.svg" class="mr-10px" />
        <div class="font-800 text-18px">Item Activity</div>
      </div>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="Event" label="Event">
          <template slot-scope="scope">
            <div class="flex items-center pl-30px py-12px">
              <img src="@/assets/images/icon_hand.svg" class="mr-10px" />
              <div class="text-16px font-600">{{ scope.row.Event }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Price" label="Price">
          <template slot-scope="scope">
            <div class="flex items-center">
              <img src="@/assets/images/icon_eth.svg" class="mr-5px" />
              <div class="text-16px font-600">{{ scope.row.Price }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="From" label="From">
          <template slot-scope="scope">
            <div
              class="text-16px font-600 text-[#40BAFF] underline cursor-pointer"
            >
              {{ scope.row.From }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="To" label="To"> </el-table-column>
        <el-table-column prop="Dates" label="Dates"> </el-table-column>
      </el-table>
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
    return {
      list: [
        {
          Event: 'Bid',
          Price: '6.4838',
          From: 'CICCBF',
          To: '',
          Dates: 'an hour ago',
        },
        {
          Event: 'Bid',
          Price: '6.4838',
          From: 'CB11E2',
          To: '',
          Dates: '2 hours ago',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
