<style lang="scss" scoped></style>

<template>
  <div>
    <div class="absolute center-y">
      <div class="font-800 text-48px leading-60px mb-25px">
        Stratified Borrowing & <br />
        Lending
      </div>
      <div class="text-22px text-[rgba(252,255,253,0.6)] leading-34px mb-64px">
        Furion is the world's first and largest NFT<br />
        marketplace
      </div>

      <div
        class="btn_border inline-block"
        @click="$router.push('/liquidity/money_market/list_A')"
      >
        <el-button type="success" class="!w-354px !h-56px !p-0"
          >Start Borrowing & Lending</el-button
        >
      </div>
    </div>
    <img
      src="@/assets/images/liquidity/borrow.png"
      class="absolute right-0 top-0 pointer-events-none"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
