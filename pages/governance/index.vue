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
        <img src="@/assets/images/governance/Proposal.png" width="180" class="ml-30px mt-50px mb-20px"/>
        <img src="@/assets/images/governance/Vector.svg" class="ml-20px mb-33px"/>
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
          title: "FUWA#1 Adjusting Protection Liquidation Mechanism, the Base Rate and the Collateral Listing",
          time: "08/09/2022",
          text:
            "Summary: A proposal for enhancing the market risk management to optimize capital efficiency, and mitigate the risk of bad debts...",
        },
        {
          id: 2,
          avatar: require("@/assets/images/avatar_g.png"),
          title: "FUWA#2 Setting Up the Non-performing Assets Fund",
          time: "08/09/2022",
          text:
            "Summary: Taking 20% from the revenue in Money Market to create a fund that can underwrite the non-performing assets, which could increase the confidence of depositors and decrease the risk of bad debts...",
        },
        {
          id: 3,
          avatar: require("@/assets/images/avatar_g.png"),
          title: "FUWA#3 FUR Reward Adjustment",
          time: "08/09/2022",
          text:
            "Summary: Slowing down the emission rate of FUR reward, and helping the economy of FUR run well...",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
