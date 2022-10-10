<style lang="scss" scoped>
// .indicator-list {
//   height: 10px;
//   .indicator {
//     transition: 0.3s background;
//     @apply w-9px h-9px rounded-1/2 mr-12px bg-[rgba(217,217,217,0.4)] cursor-pointer;
//     &.active {
//       width: 10px;
//       height: 10px;
//       background: #fa6be1;
//       border: 2.14286px solid #364666;
//       box-sizing: content-box;
//       // box-shadow: 0px 2.85714px 8.57143px rgba(0, 0, 0, 0.1),
//       //   inset 0px -0.428571px 0.428571px rgba(0, 0, 0, 0.4),
//       //   inset 0px 0.428571px 0.428571px #ffb7f3;
//     }
//     &:nth-last-of-type(1) {
//       margin-right: 0;
//     }
//   }
// }
.slide-item {
  width: 540px !important;
  overflow: hidden;
}
::v-deep .swiper-wrapper {
}
</style>

<template>
  <div class="relative">
    <div style="height: 630px; width: 540px">
      <client-only>
        <swiper
          ref="swiper"
          :options="swiperOption"
          @slide-change="slideChange"
          :list="list"
          class="mySwiper"
        >
          <swiper-slide
            class="slide-item cursor-pointer"
            v-for="(item, index) in list"
            :key="index"
          >
            <slot :item="item"></slot>
          </swiper-slide>
          <div
            class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"
          ></div>
          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
// import { Pagination, Navigation } from "swiper";
// import Swiper from "swiper/swiper-bundle.min";
// import "swiper/swiper-bundle.min.css";
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  computed: {},
  data() {
    return {
      swiperOption: {
        pagination: {
          type: "fraction",
        },
        navigation: true,
        // loop: true,
        // speed: 500,
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 3,
        // autoplay: { delay: 600033, disableOnInteraction: false },
        // modules: [Pagination, Navigation],
      },
      kvIndex: 0,
    };
  },
  mounted() {},
  methods: {
    slideChange() {
      this.kvIndex = this.$refs.swiper.$swiper.realIndex;
    },
    selectIndicator(index) {
      this.kvIndex = index;
      this.$refs.swiper.$swiper.slideTo(index);
    },
    turnLeft() {
      const swiper = this.$refs.swiper.$swiper;
      console.log("swiper", swiper);
      swiper.slidePrev();
    },
    turnRight() {
      const swiper = this.$refs.swiper.$swiper;
      console.log("swiper", swiper);
      swiper.slideNext();
    },
    goto(item) {
      this.$emit("goto", item);
    },
  },
};
</script>
