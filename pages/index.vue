<style lang="scss" scoped>
.page {
  min-height: 100vh;
  .page-wrap {
    @apply w-1300px mx-auto relative;
  }
  .cover-bg {
    background: url(@/assets/images/cover_bg.png) center / cover no-repeat;
    @apply w-484px h-512px flex justify-center pt-14px;
  }
  .page-title {
    @apply font-700 text-24px text-[#fcfffd];
  }
  .collection-item {
    margin: 0 24px 24px 0;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  .float-bg {
    @apply w-max-1440px h-626px absolute top-0 -left-70px flex justify-center;
  }
}
.swiper-item-wrap {
  .float-top {
    background: linear-gradient(
      180deg,
      rgba(253, 136, 255, 0.3) -36.81%,
      rgba(229, 125, 255, 0) 100%
    );
  }
  .float-bottom {
    background: linear-gradient(
      180deg,
      rgba(32, 32, 32, 0.8) 17.01%,
      rgba(46, 46, 46, 0) 100%
    );
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
}
.swiper-item-wrap2,
.category-list {
  .img-wrap {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
  .swiper-img {
    background: #d9d9d9;
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
  .img-float {
    background: linear-gradient(
      3.88deg,
      rgba(32, 32, 32, 0.5) 15.87%,
      rgba(46, 46, 46, 0) 97.02%
    );
    background: linear-gradient(
      180deg,
      rgba(32, 32, 32, 0.8) 17.01%,
      rgba(46, 46, 46, 0) 100%
    );
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
}

.vue-typer {
  font-weight: 800;
  font-size: 85px;
  line-height: 85px;
  -webkit-text-stroke: 2.5px white; //设置文字边框
  // 设置文本填充为透明
  ::v-deep .custom.char {
    color: rgba(0, 0, 0, 0.08);
  }

  ::v-deep .custom.caret {
    //光标
    background-color: white !important;
    width: 2px;
    margin-left: 5px;
  }
}
</style>

<template>
  <div class="page pt-80px bg-[#01132E] overflow-hidden">
    <div class="loading-wrapper" id="loading-wrapper">
      <div class="loading la-ball-running-dots">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="page-wrap pt-0px" v-if="ready">
      <div class="float-bg">
        <img class="w-1/1 h-626px" src="@/assets/images/cover3_float.png" />
      </div>
      <div class="flex justify-center items-center relative z-1 h-626px">
        <div class="flex justify-between items-center w-1182px">
          <div class="pt-0px">
            <div
              class="flex items-center mb-17px"
              @click="clickLearnmoreaboutFurion()"
            >
              <img
                class="mr-13px cursor-pointer"
                src="@/assets/images/index/video.svg"
              />
              <p class="text-16px text-[#FF7AE8] font-700 cursor-pointer">
                Learn more about Furion
              </p>
            </div>
            <p class="text-44px font-500 mb-10px">At Furion, you can...</p>
            <div class="mb-25px w-540px">
              <vue-typer
                :text="[
                  'Buy NFT',
                  'Sell NFT',
                  'Explore NFT',
                  'Unleash NFTLiquidity.',
                ]"
                :shuffle="false"
                :repeat="0"
                initial-action="typing"
                :pre-type-delay="100"
                :type-delay="100"
                :pre-erase-delay="1800"
                :erase-delay="80"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="blink"
                v-if="ready"
              ></vue-typer>
            </div>
            <div
              class="text-[rgba(252,255,253,0.6)] font-400 leading-32px text-20px"
            >
              <p>All-in-one NFT platform with better liquidity,</p>
              <p>price oracle, and AMM solutions.</p>
            </div>
            <div class="mt-35px">
              <div class="flex items-center">
                <div class="btn_border w-190px mr-35px">
                  <el-button
                    type="primary"
                    class="!w-210px !h-56px"
                    @click="$router.push('/collection/separate_pools')"
                    >VIEW COLLECTIONS</el-button
                  >
                </div>
                <div class="btn_border">
                  <el-button type="primary" plain class="!w-190px !h-56px"
                    >GET MY NFT PASS</el-button
                  >
                </div>
              </div>
            </div>
            <!--mark 推特、dc等多个小图标跳转链接可以用ul li配合数组 -->
            <ul class="w-200px flex mb-20px mt-20px ml-10px">
              <li
                v-for="(item, index) in linkList"
                :key="index"
                @click="clicklinkListItem(item.url)"
                class="cursor-pointer mr-30px"
              >
                <img :src="item.img" />
              </li>
            </ul>
          </div>
          <div class="cover-bg">
            <div>
              <div
                class="cover-img-wrap w-460px h-420px mb-18px overflow-hidden rounded-20px"
              >
                <img
                  class="cover-img w-1/1 h-1/1 -ml-1px"
                  src="@/assets/images/cover3.gif"
                />
              </div>
              <p
                style="
                  width: 100%;
                  height: 90px;
                  display: block;
                  line-height: 45px;
                  text-align: center;
                  font-weight: bold;
                "
              >
                Welcome to Furion!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-center mt-120px mb-60px"
        data-aos="fade-right"
      >
        <img src="@/assets/images/index/fire.svg" />
        <p class="page-title">Notable Drops</p>
      </div>

      <div class="w-1150px mx-auto mt-60px mb-90px">
        <SwiperPc :list="dropList" height="564px">
          <template v-slot="slotProps">
            <div
              class="swiper-item-wrap h-570px rounded-20px overflow-hidden border-3px border-[#364666] relative"
              data-aos="fade-up"
              :data-aos-delay="400 + dropList.indexOf(slotProps.item) * 200"
            >
              <div class="float-top absolute left-0 top-0 w-1/1 h-45px"></div>
              <div
                class="float-bottom absolute left-0 bottom-0 w-1/1 h-128px"
              ></div>
              <a @click="clickDropItem(slotProps.item.twitter)">
                <img
                  class="w-1/1 h-1/1 object-cover"
                  :src="slotProps.item.img"
                />
              </a>
              <div class="info absolute left-0 top-490px w-1/1 pl-20px">
                <p class="text-20px font-600 text-[#fcfffd] mb-10px">
                  {{ slotProps.item.name }}
                </p>
                <p class="text-14px font-400 text-[rgba(252,255,253,0.7)]">
                  {{ slotProps.item.description }}
                </p>
                <p class="text-14px font-400 text-[rgba(252,255,253,0.7)]">
                  {{ slotProps.item.description2 }}
                </p>
              </div>
            </div>
          </template>
        </SwiperPc>
      </div>

      <div
        class="flex items-center justify-center mt-100px mb-60px"
        data-aos="fade-left"
      >
        <p class="page-title">Top collections over</p>
        <p class="page-title !text-[#FF7AE8] mr-12px ml-8px">last 24 hours</p>
      </div>
      <ul class="collection-list flex flex-wrap">
        <li
          class="collection-item"
          v-for="(item, index) in nft_info.nft_list"
          :key="index"
        >
          <CollectionItem
            :index="index"
            :detail="item"
            data-aos="fade-up"
            :data-aos-delay="300 + index * 150"
          />
        </li>
      </ul>

      <div
        class="flex items-center justify-center mt-100px mb-60px"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p class="page-title">Trending</p>
        <p class="page-title !text-[#FF7AE8] mr-12px ml-8px">Now</p>
      </div>

      <div class="w-1250px mx-auto mt-60px mb-90px">
        <SwiperPc :list="swiperList" height="334px">
          <template v-slot="slotProps">
            <div
              class="swiper-item-wrap2 h-334px rounded-16px overflow-hidden border-3px border-[rgba(255,255,255,0.1)] bg-[rgba(23,37,72,0.8)] relative"
              @click="clickSwiperItem(slotProps.item.collection)"
              data-aos="fade-up"
              :data-aos-delay="800 + swiperList.indexOf(slotProps.item) * 200"
            >
              <div
                class="img-wrap h-180px rounded-18px overflow-hidden relative"
              >
                <img
                  class="w-1/1 h-1/1 object-cover swiper-img"
                  :src="slotProps.item.img"
                />
                <div
                  class="img-float absolute w-1/1 h-80px left-0 bottom-0"
                ></div>
              </div>
              <div
                class="avatar-wrap w-60px h-60px rounded-1/2 border-3px border-[#baaffb] absolute left-1/2 -ml-30px top-143px overflow-hidden flex items-center justify-center"
              >
                <img
                  class="w-66px h-66px object-cover"
                  :src="slotProps.item.avatar"
                />
              </div>
              <div class="info absolute left-0 bottom-64px w-1/1">
                <p
                  class="text-16px font-600 text-[#fcfffd] mb-10px text-center"
                >
                  {{ slotProps.item.name }}
                </p>
                <p
                  class="text-14px font-400 text-[rgba(252,255,253,0.7)] text-center"
                >
                  <span class="text-[rgba(252,255,253,0.4)]">by</span>
                  <span class="text-[#34F8FF]">{{
                    slotProps.item.description
                  }}</span>
                </p>
              </div>
              <div
                class="slide-bottom bg-[rgba(1,19,46,0.6)] h-40px absolute w-1/1 left-0 bottom-0 leading-40px text-center text-[rgba(252,255,253,0.6)] font-500"
              >
                {{ slotProps.item.question }}
              </div>
            </div>
          </template>
        </SwiperPc>
      </div>

      <div class="flex items-center justify-center mt-100px mb-60px">
        <div>
          <p class="page-title" data-aos="fade-left">
            Unleashing NFT Liquidity
          </p>
          <p
            class="text-18px font-500 text-[rgba(252,255,253,0.6)] mt-15px text-center"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            All-in-one NFT marketplace
          </p>
        </div>
      </div>

      <ul class="w-1300px flex justify-between">
        <li
          class="flex flex-col items-center flex-1"
          v-for="(item, index) in List"
          :key="index"
        >
          <a
            @click="clickListItem(item.docs_url)"
            data-aos="fade-down"
            :data-aos-delay="500 + index * 200"
          >
            <img
              :src="require(`@/assets/images/index/pool${index + 1}.png`)"
              class="cursor-pointer"
              height="240"
              width="240"
            />
          </a>
          <div
            data-aos="fade-up"
            :data-aos-delay="300 + index * 200"
            class="text-center"
          >
            <a @click="clickListItem(item.docs_url)">
              <p
                class="text-16px font-700 text-[#fcfffd] mt-5px mb-14px cursor-pointer"
              >
                {{ item.tital }}
              </p>
            </a>
            <p
              class="text-[rgba(252,255,253,0.6)] text-16px leading-24px font-500"
            >
              {{ item.remark1 }}
            </p>
            <p
              class="text-[rgba(252,255,253,0.6)] text-16px leading-24px font-500"
            >
              {{ item.remark2 }}
            </p>
            <p
              class="text-[rgba(252,255,253,0.6)] text-16px leading-24px font-500"
            >
              {{ item.remark3 }}
            </p>
          </div>
        </li>
      </ul>

      <div
        class="flex items-center justify-center mt-100px mb-60px"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p class="page-title">Learn with</p>
        <p class="page-title !text-[#FF7AE8] mr-12px ml-8px">Furion</p>
      </div>

      <ul
        class="category-list w-1300px flex justify-between mb-140px cursor-pointer"
      >
        <li
          v-for="(item, index) in categoryList"
          :key="index"
          class="w-376px h-290px rounded-16px overflow-hidden border-3px border-[rgba(255,255,255,0.1)] bg-[rgba(23,37,72,0.8)] relative"
          @click="clickCategoryList(item.url)"
          data-aos="fade-up"
          :data-aos-delay="800 + index * 200"
        >
          <div class="img-wrap h-220px rounded-16px overflow-hidden relative">
            <img class="w-1/1 h-1/1 object-cover swiper-img" :src="item.img" />
            <div class="img-float absolute w-1/1 h-80px left-0 bottom-0"></div>
          </div>
          <p class="font-500 text-16px text-[#fcfffd] text-center mt-26px">
            {{ item.remark1 }}
          </p>
        </li>
      </ul>
    </div>
    <AdminFooter v-if="ready"></AdminFooter>
  </div>
</template>
<script>
import { nft_info, initNftInfo } from "@/config/collection/nft_info";
import $ from "jquery";
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/"]);
  },
  layout: "blank",
  props: {},
  components: {},
  computed: {},
  data() {
    return {
      network: "goerli",
      dialogVisible: false,
      asset: "default text",
      nft_info: nft_info,
      option: {},
      ready: false,
      showAnimation: false,
      dropList: [
        {
          img: require("@/assets/images/index/drop1.jpg"),
          name: "Thunderbrawl Royalty",
          description:
            "Thunder Brawl is a P2E economy revolves around $THB, and Royalty NFTs!",
          description2: "      ",
          twitter: "THB_crypto",
        },
        {
          img: require("@/assets/images/index/drop2.jpg"),
          name: "MEGAMI",
          description: "MEGAMI is a collection of 10,000 PFPs designed by",
          description2: "illustrator and YouTuber Naoki Saito",
          twitter: "MEGAMINFT",
        },
        {
          img: require("@/assets/images/index/drop3.jpg"),
          name: "Saphire",
          description: "777 Genesis; 80% of profits are invested in the",
          description2: "utilities for this project",
          twitter: "SaphireNFT",
        },
      ],
      linkList: [
        {
          img: require("@/assets/images/index/twitter.png"),
          url: "https://twitter.com/ProjectFurion?s=20&t=ZJNt4qEB9JuLaVMfwyaYbw",
        },
        {
          img: require("@/assets/images/index/medium.png"),
          url: "https://medium.com/@project.furion",
        },
        {
          img: require("@/assets/images/index/discord.png"),
          url: "https://t.co/zPliDryypW",
        },
      ],
      List: [
        {
          tital: "Instant Liquidity",
          remark1: "Lock or store your NFT into our",
          remark2: "separate pools to get the instant liquidity",
          remark3: "",
          docs_url: "furion-pools/furion-separate-pools",
        },
        {
          tital: "Aggregating Liquidity",
          remark1: "Get your market-driven index tokens",
          remark2: "by joining our aggregate pools",
          remark3: "",
          docs_url: "furion-pools/furion-aggregate-pools",
        },
        {
          tital: "Swapping",
          remark1: "Swap any tokens that you want in our",
          remark2: "automated market maker protocol",
          remark3: "",
          docs_url: "furion-swap",
        },
        {
          tital: "Borrowing & Lending",
          remark1: "Borrow & lend your ERC-20 tokens and",
          remark2: "NFTs via peer-to-pool methods",
          remark3: "",
          docs_url: "furion-money-market",
        },
      ],
      swiperList: [
        {
          collection: "Cool%20Cats",
          img: require("@/assets/images/index/swiper1.jpg"),
          avatar: require("@/assets/images/index/avatar1.jpg"),
          name: "Cool Cats NFT",
          description: "CoolCatsContract",
          question: "Some cats are cooler than others",
        },
        {
          collection: "Invisible%20Friends",
          img: require("@/assets/images/index/swiper2.jpg"),
          avatar: require("@/assets/images/index/avatar2.jpg"),
          name: "Invisible Friends",
          description: "RandomCharacterCollective",
          question: "5000 animated invisible characters",
        },
        {
          collection: "World%20Of%20Women",
          img: require("@/assets/images/index/swiper3.jpg"),
          avatar: require("@/assets/images/index/avatar3.jpg"),
          name: "World of Women",
          description: "WorldofWomen",
          question: "Celebrate inclusivity & equal opportunities",
        },
      ],
      categoryList: [
        {
          img: require("@/assets/images/index/category1.jpg"),
          remark1: "NFT-Fi Trilemma",
          url: "https://medium.com/@project.furion/the-nft-fi-trilemma-f1f86b045ed8",
        },
        {
          img: require("@/assets/images/index/category2.jpg"),
          remark1: "Introducing Furion",
          url: "https://docs.furion.io",
        },
        {
          img: require("@/assets/images/index/category3.jpg"),
          remark1: "NFT News of the Week",
          url: "https://twitter.com/ProjectFurion/status/1561278693103652864?s=20&t=KMuIrzivXA4M9eemZKK9Jg",
        },
      ],
      collectionList: new Array(4).fill({
        floorPrice: 1344.6,
        currentPrice: 1344.9232,
        percent: 23,
        avatar: require("@/assets/images/avatar1.svg"),
        name: "",
      }),
    };
  },
  async mounted() {
    this.showAnimation = true;
    this.nft_info = await initNftInfo(this.network);
    this.ready = true;
    $(".loading-wrapper").fadeOut(500);
  },
  methods: {
    clickSwiperItem(collection) {
      this.$router.push(
        "/collection/separate_pools/nft_pool?collection=" + collection
      );
    },
    clickDropItem(twitter) {
      window.open("https://twitter.com/" + twitter, "_blank");
    },
    clickListItem(url) {
      window.open("https://docs.furion.io/function/" + url, "_blank");
    },
    clickLearnmoreaboutFurion() {
      window.open("https://docs.furion.io/", "_blank");
    },
    clickCategoryList(url) {
      window.open(url, "_blank");
    },
    clicklinkListItem(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
