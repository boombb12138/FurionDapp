<style lang="scss" scoped>
.box {
  background: rgba(79, 68, 148, 0.6);
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  .text {
    font-weight: 600;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #86898c;
    border-radius: 12px;
    border: 2px solid transparent;
  }

  .active {
    font-weight: 800;
    background: linear-gradient(
      259.84deg,
      #67d6f5 -18.22%,
      #7853d6 43.85%,
      #f155ff 107.01%,
      #ff48cc 107.01%
    );
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 1);
  }
}
</style>

<template>
  <div class="pt-40px mb-32px">
    <div class="w-660px h-66px mx-auto relative mb-30px box">
      <div class="w-660px flex h-66px relative -top-2px -left-2px">
        <div
          class="flex-1 text"
          :class="{ active: value == 1 }"
          @click="change(1)"
        >
          A-Class Assets Pool
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 2 }"
          @click="change(2)"
        >
          B-Class Assets Pool
        </div>
        <div
          class="flex-1 text"
          :class="{ active: value == 3 }"
          @click="change(3)"
        >
          C-Class Assets Pool
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
  methods: {
    change(val) {
      this.$emit('input', val);
      
      switch (val) {
        case 1:
          this.$router.push('/liquidity/money_market/list_A');
          break;
        case 2:
          this.$router.push('/liquidity/money_market/list_B');
          break;
        case 3:
          this.$router.push('/liquidity/money_market/list_C');
      }
    }
  },
};
</script>
