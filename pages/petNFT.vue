<style lang="scss" scoped>
.title {
  font-weight: 800;
  font-size: 16px;
  background: linear-gradient(273.69deg, #b8a0cf 25.62%, #fc64d9 96.07%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @apply absolute left-110px top-109px;
}
</style>

<template>
  <div>
    <!-- Back to Home -->
    <div class="flex">
      <img
        src="@/assets/images/icon_back.svg"
        class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
        @click="$router.push('/')"
      />
      <div class="title">Back to Home</div>
    </div>

    <PetNFTTab
      v-if="active == 1 || active == 2"
      class="mt-50px"
      v-model="active"
    ></PetNFTTab>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  computed: {},
  data() {
    return { active: 1 };
  },
  mounted() {},
  methods: {},
};
</script>
