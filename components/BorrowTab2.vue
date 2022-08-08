<style lang="scss" scoped>
.box {
  background: rgba(79, 68, 148, 0.6);
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  .text {
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #86898c;
    border-radius: 12px;
    color: rgba(252, 255, 253, 0.6);
  }

  .active {
    font-weight: 800;
    background: linear-gradient(
      262.19deg,
      #67d6f5 -22.52%,
      #7853d6 42.29%,
      #f155ff 108.23%,
      #ff48cc 108.23%
    );
    box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.12),
      inset 0px 1px 1px rgba(245, 230, 255, 0.6);
    border-radius: 9px;
    color: #fff;
  }
}
</style>

<template>
  <div class="pt-70px mb-54px">
    <div class="w-500px h-48px mx-auto relative mb-30px box">
      <div class="flex h-1/1">
        <div
          class="flex-1 text"
          :class="{ active: value == 1 }"
          @click="$router.push('/liquidity/borrow_detail')"
        >
          Borrow
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 2 }"
          @click="$router.push('/liquidity/borrow_detail_repay')"
        >
          Repay
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 3 }"
          @click="$router.push('/liquidity/borrow_detail_deposit')"
        >
          Deposit
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 4 }"
          @click="$router.push('/liquidity/borrow_detail_withdraw')"
        >
          Withdraw
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
