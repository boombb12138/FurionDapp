<style lang="scss" scoped>
.item {
  transition: all 0.3s;
  &:hover {
    background: linear-gradient(
      90deg,
      rgba(110, 101, 168, 0) 0.97%,
      rgba(110, 101, 168, 0.16) 48.94%,
      rgba(110, 101, 168, 0) 100%
    );
    border-radius: 12px;
  }
}
</style>

<template>
  <div class="px-40px pb-100px bg min-h-100vh">
    <div class="flex justify-between mb-24px pt-40px">
      <div>
        <img src="@/assets/images/governance/proposal.png" width="180" class="ml-30px mt-50px mb-20px"/>
        <img src="@/assets/images/governance/vector.svg" class="ml-20px mb-33px"/>
      </div>
    </div>

    <div>
      <div
        class="flex pt-17px pb-30px mb-20px item cursor-pointer"
        v-for="(item, index) in list"
        :key="index"
        @click="$router.push('/governance/detail?id=' + item.id)"
      >
        <div class="mr-14px flex-shrink-0 line-clamp-2">
          <img src="@/assets/images/avatar_g.png" class="rounded-full w-50px h-50px" />
        </div>

        <div>
          <div class="text-18px font-500 leading-28px">
            {{ item.title }}
          </div>
          <div class="text-12px leading-28px opacity-40">
            {{ item.time }}
          </div>
          <div class="text-14px leading-24px opacity-40">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "governance",
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/governance"]);
  },
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      list: [
        {
          id: 1,
          avatar: require("@/assets/images/avatar_g.png"),
          title: "Monthly Policy Reports",
          time: "davoice321 Policy 4 days ago",
          text:
            "Policy report, October 2021 The Olympus protocol treasury and protocol owned liquidity are rapidly expanding. Runway at the current reward rate has been increasing and is curr...",
        },
        {
          id: 2,
          avatar: require("@/assets/images/avatar_g.png"),
          title: "Please Use Our Discord for General Enquiry QGeneral ",
          time: "kschan started Dec 26,2021",
          text:
            "If you have any questions regarding how the protocol works and its various mechanisms, please head to the Olympus Discord, you are more likely to get immediate support there....",
        },
        {
          id: 2,
          avatar: require("@/assets/images/avatar_g.png"),
          title: "Please Use Our Discord for General Enquiry QGeneral ",
          time: "kschan started Dec 26,2021",
          text:
            "If you have any questions regarding how the protocol works and its various mechanisms, please head to the Olympus Discord, you are more likely to get immediate support there....",
        },
        {
          id: 2,
          avatar: require("@/assets/images/avatar_g.png"),
          title: "Please Use Our Discord for General Enquiry QGeneral ",
          time: "kschan started Dec 26,2021",
          text:
            "If you have any questions regarding how the protocol works and its various mechanisms, please head to the Olympus Discord, you are more likely to get immediate support there....",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
