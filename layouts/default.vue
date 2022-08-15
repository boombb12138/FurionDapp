<style lang="scss" scoped>
.light-left {
  position: absolute;
  left: 0;
  width: 800px;
}
</style>

<template>
  <div>
    <div class="min-h-100vh bg-[#01132e] text-[#FCFFFD] relative">
      <img
        src="@/assets/images/light_left_bg.png"
        class="light-left pointer-events-none"
      />

       <Admin-header></Admin-header>
      <nuxt class="min-h-100vh w-1280px relative pt-80px mx-auto" />
    </div>

    <!-- <Wallet-connect></Wallet-connect>
    <Wallet-account></Wallet-account> -->

    <CartIcon></CartIcon>
  </div>
</template>

<script>
export default {
  head: {
    meta: [
      {
        hid: "viewport",
        name: "viewport",
        content: "width=1440,user-scalable=no",
      },
    ],
  },
  computed: {
    // transparent() {
    //   let list = ["/faq", "/governance", "/governance/detail"];
    //   return list.includes(this.$route.path);
    // },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
