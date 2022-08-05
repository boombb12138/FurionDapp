<style lang="scss" scoped></style>

<template>
  <el-dialog
    title="Account"
    :visible.sync="dialogVisible"
    width="520px"
    :close-on-click-modal="false"
  >
    <div class="flex justify-between items-center mb-15px">
      <div>Connected with MetaMask Change</div>
      <el-tag class="w-84px">
        <span>Change</span>
      </el-tag>
    </div>

    <div
      class="bg-[#f5f5f5] rounded-12px flex items-center pl-24px h-56px mb-15px"
    >
      <div class="text-18px text-[#2C2D2F]">Ox5922..1FDO</div>
    </div>

    <div class="flex mb-20px font-500 text-14px">
      <div class="cursor-pointer flex items-center mr-40px">
        <div class="color-primary">
          <img src="@/assets/images/icon_View on explorer.svg" class="mr-5px" />
          View on explorer
        </div>
      </div>
      <div class="cursor-pointer flex items-center">
        <div class="color-primary">
          <img src="@/assets/images/icon_Copy Address.svg" class="mr-5px" />
          Copy Address
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center mb-10px">
      <div class="font-700 text-20px">Recent Transactions</div>
      <el-tag class="w-84px">
        <span>Clear all</span>
      </el-tag>
    </div>

    <div>Your transactions will appear here...</div>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  computed: {
    ...mapState('admin', ['accountDialog']),
    dialogVisible: {
      get() {
        return !!this.accountDialog;
      },
      set() {
        this.$store.commit('update', ['admin.accountDialog', false]);
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
