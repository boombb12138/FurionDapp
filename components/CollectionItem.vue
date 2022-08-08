<style lang="scss" scoped>
.collection-item-wrap {
  width: 416px;
  height: 80px;
  background: rgba(23, 37, 72, 0.5);
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0 20px 0 24px;
  @apply flex items-center justify-between text-[rgba(252,255,253,0.5)];
}
</style>

<template>
  <div class="collection-item-wrap">
    <div class="flex items-center">
      <div class="no mr-20px text-white text-15px font-600">1</div>
      <div class="avatar-wrap relative mr-10px">
        <img src="@/assets/images/avatar1.svg" />
        <img class="checked absolute right-0 bottom-0" src="@/assets/images/index/checked.svg" />
      </div>
      <div class="info">
        <p class="text-white font-600 mr-10px mb-5px">AzukiAzukiAzuki</p>
        <div class="flex items-center text-13px">
          <p>Floor price:</p>
          <img class="mx-8px" src="@/assets/images/index/price.svg" />
          <p>1344.6</p>
        </div>
      </div>
    </div>
    <div class="numbers">
      <p v-if="index===0" class="text-[#50CD7E] mb-8px text-right text-13px">+42.36%</p>
      <p v-else class="text-[#D35D64] mb-8px text-right text-13px">-22.36%</p>
      <div class="flex items-center text-13px text-right">
        <img class="mr-8px" src="@/assets/images/index/price.svg" />
        <p>1344.6123123</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionItem',
  props: {
    index: {
      type: Number,
      default: 0,
    },
    detail: {
      type: Object,
      default: () => ({}),
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
