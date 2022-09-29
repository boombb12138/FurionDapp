<style lang="scss" scoped>
.item {
  border: 1.5px solid #1a2a42;
  border-radius: 4px;
  @apply text-12px w-18px h-18px flex items-center justify-center text-[#8A92A2] cursor-pointer;
  &.active.\31 {
    background: #23cba0;
    color: #ffffff;
  }
  &.active.\32 {
    background: #3e94fc;
    color: #ffffff;
  }
  &.active.\33 {
    background: #e3723f;
    color: #ffffff;
  }
}
</style>

<template>
  <div class="flex">
    <div
      class="item"
      :class="{ active: value.includes(item), [item]: true, 'mr-18px': !readonly }"
      @click="select(item)"
      v-for="item in list"
      :key="item"
      v-if="!readonly || value.includes(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Array, String],
      default() {
        return [];
      },
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  computed: {},
  data() {
    return {
      list: ["1", "2", "3"],
    };
  },
  mounted() {},
  methods: {
    select(item) {
      if (this.readonly) {
        return;
      }

      const i = this.value.findIndex((item2) => {
        console.log(item, item2);
        return item == item2;
      });

      if (i != -1) {
        let arr = this.value;
        arr.splice(i, 1);
        this.$emit("input", arr);
      } else {
        let arr = this.value;
        arr.push(item);
        this.$emit("input", arr);
      }
    },
  },
};
</script>
