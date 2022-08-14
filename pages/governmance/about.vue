<style lang="scss" scoped></style>

<template>
  <div>about</div>
</template>

<script>
export default {
  layout: "governmance",
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/governance"]);
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
