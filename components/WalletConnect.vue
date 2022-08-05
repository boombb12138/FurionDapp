<style lang="scss" scoped>
.item {
  border: none;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 56px;
  background: #fff;
  border: 1px solid #fff;
  &:hover {
    border-color: #fa6be1;
  }
}
</style>

<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    width="520px"
    @open="open"
  >
    <div class="text-16px leading-24px" v-if="showText">
      You are currently browsing
      <span class="text-$primary font-500">DEGIS</span>
      <br />
      on the <span class="font-500">Polygon(Matic)</span> network
    </div>
    <div class="grid grid-cols-2 gap-12px pt-25px">
      <div v-for="n in 10" class="item cursor-pointer" @click="select(n)">
        <div class="flex items-center h-1/1 pl-12px">
          <img src="@/assets/images/eth.png" width="32" class="mr-8px" />
          <div>Ethereum</div>
        </div>
      </div>
    </div>
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
    ...mapState('admin', ['connectDialog']),
    smiple() {
      return this.connectDialog == 'simple';
    },
    dialogVisible: {
      get() {
        return !!this.connectDialog;
      },
      set() {
        this.$store.commit('update', ['admin.connectDialog', false]);
      },
    },
  },
  data() {
    return {
      title: '',
      showText: '',
    };
  },
  mounted() {},
  methods: {
    open() {
      if (this.connectDialog == 'simple') {
        this.title = 'Connect a wallet';
        this.showText = false;
      }
      if (this.connectDialog == 'default') {
        this.title = 'Select a Network';
        this.showText = true;
      }
    },
    select(n) {
      this.$store.commit('update', ['admin.connectStatus', 'connected']);
      this.$store.commit('update', ['admin.connectDialog', false]);
    },
  },
};
</script>
