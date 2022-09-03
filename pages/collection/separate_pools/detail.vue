<style lang="scss" scoped>
.bg {
  background: url("@/assets/images/detail.png") 100% no-repeat;
  background-size: 100% 100%;
}
.btns {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  height: 48px;
  width: 184px;
  overflow: hidden;
  .br {
    width: 46px;
    display: flex;
    justify-content: center;
    border-right: 1px solid rgba(255, 255, 255, 0.12);
    &:hover {
      background: rgba(255, 255, 255, 0.12);
    }
  }
  ::v-deep {
    .el-popover__reference {
      height: 46px;
    }
  }
}
.title {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.12) 9.68%,
    rgba(51, 53, 114, 0.15) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: calc(100% + 2px);
}
::v-deep {
  .el-table .el-table__header-wrapper {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
.comments {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 11.11%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border: 0.8px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  .head {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.16) 11.11%,
      rgba(51, 53, 114, 0.2) 100%
    );
    border: 0.8px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 25px 70px;
    display: flex;
    align-items: center;
  }
  .body {
    padding: 52px 66px;
  }
}
.reply {
  background: transparent;
  border-bottom: 2px solid #2d4682;
  padding: 4px 0;
  font-weight: 500;
  font-size: 16px;
  color: #7d8599;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: #7d8599;
  }
}
.post {
  color: #7d8599 !important;
  border-color: #7d8599 !important;
  &:hover {
    opacity: 1 !important;
    color: #fa6be1 !important;
    border-color: #fa6be1 !important;
  }
}
</style>

<template>
  <div class="!w-1/1 pb-100px">
    <img
      src="@/assets/images/icon_back.svg"
      class="absolute left-60px cursor-pointer top-100px hover:opacity-80"
      @click="$router.go(-1)"
    />

    <div class="w-1150px mx-auto">

      <div class="pt-70px flex mb-32px">
        <!-- NFT image -->
        <img
          :src="nft_item.image"
          class="w-400px h-400px rounded-20px mr-30px"
        />
        <div class="flex-1 flex flex-col">
          <div class="flex justify-between mb-80px">
            <!-- NFT basic info -->
            <div class="pl-30px">
              <div class="text-[#31C2C7] text-20px font-600 mb-20px">{{nft_item.collection}}</div>
              <div class="text-32px font-700">{{nft_item.symbol}} #{{nft_item.token_id}}</div>
            </div>
            <div class="flex cursor-pointer btns">
              <div class="br">
                <img src="@/assets/images/icon_refresh.svg" class="w-24px" />
              </div>
              <div class="br">
                <img src="@/assets/images/icon_forward.svg" class="w-24px" />
              </div>
              <el-popover
                placement="bottom"
                title=""
                trigger="click"
                popper-class="el-sort"
                :visible-arrow="true"
                width="200"
              >
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share1.png" />
                  </div>

                  copy Link
                </div>
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share2.png" />
                  </div>
                  share on Facebook
                </div>
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share3.png" />
                  </div>
                  share on Twitter
                </div>
                <div class="el-sort-item">
                  <div class="w-40px flex items-center justify-center">
                    <img src="@/assets/images/share4.png" />
                  </div>
                  Embed ltem
                </div>
                <div class="br" slot="reference">
                  <img src="@/assets/images/icon_share.svg" class="w-24px" />
                </div>
              </el-popover>
              <div class="br" style="border-right: none">
                <img src="@/assets/images/icon_more.svg" class="w-24px" />
              </div>
            </div>
          </div>
          <!-- NFT price and user functions box -->
          <div class="bg flex-1 p-30px">
            <div class="mb-15px opacity-60 font-500 text-20px">1000 F&nbsp;-&nbsp;{{nft_item.symbol}}=</div>
            <div class="flex items-center mb-55px">
              <img src="@/assets/images/icon_eth.svg" class="w-24px mr-10px" />
              <div class="font-700 text-32px">{{nft_item.fXprice.toFixed(2)}}</div>
            </div>

            <div class="flex">
              <div class="btn_border mr-18px">
                <el-button type="primary" class="w-310px !h-60px" plain @click="toCart">
                  <div class="!flex items-center justify-center">
                    <img src="@/assets/images/add.svg" class="mr-15px" />
                    <div class="text-20px font-800">Add to cart</div>
                  </div>
                </el-button>
              </div>
              <div class="btn_border">
                <el-button type="primary" class="w-310px !h-60px" @click="buy">
                  <div class="text-20px font-800">BUY NOW</div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction activity log -->
      <div class="mb-53px">
        <div class="flex items-center pl-44px h-76px title">
          <img src="@/assets/images/icon_item.svg" class="mr-10px" />
          <div class="font-800 text-18px">Item Activity</div>
        </div>
        <el-table :data="nft_activity.activity_list" style="width: 100%">
          <el-table-column prop="Event" label="Event">
            <template slot-scope="scope">
              <div class="flex items-center pl-30px py-12px">
                <img src="@/assets/images/icon_hand.svg" class="mr-10px" />
                <div class="text-16px font-600">{{ scope.row.event }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Price" label="Price">
            <template slot-scope="scope">
              <div class="flex items-center">
                <img src="@/assets/images/icon_eth.svg" class="mr-5px" />
                <div class="text-16px font-600">{{ scope.row.eth_price }}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="From" label="From">
            <template slot-scope="scope">
              <div class="text-16px font-600 text-[#40BAFF] underline cursor-pointer" @click="clickaddress(scope.row.from_user)">
                Furion Pool
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="To" label="To">
            <template slot-scope="scope">
              <div class="text-16px font-600 text-[#40BAFF] underline cursor-pointer" v-if="scope.row.to_user.length>12" @click="clickaddress(scope.row.to_user)">
                {{ scope.row.to_user.substring(0,10) }}...
              </div>
              <div class="text-16px font-600 text-[#40BAFF] underline cursor-pointer" v-else>
                {{ scope.row.to_user }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="Dates" label="Date">
            <template slot-scope="scope">
              <div class="text-16px font-600">
                {{ scope.row.date }}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- Comment section -->
      <div class="comments" id="head" >
        <div class="head" >
          <img src="@/assets/images/message.svg" class="mr-12px" />
          <div class="font-800 text-18px">Comments</div>
        </div>
        <div class="body">
          <client-only>
            <quill-editor v-model="html" :options="editorOption" class="!mb-24px" />
          </client-only>
          <div class="flex justify-between mb-50px">
            <div></div>
            <div class="btn_border">
              <el-button type="primary" class="!w-284px !h-56px" @click="addTheComment(html)" plain >
                <div class="!flex items-center justify-center">
                  <div class="text-19px font-700">Post a comment</div>
                </div>
              </el-button>
            </div>
          </div>

          <div v-for="(item, index) in nft_comment.comment_list" :key="index" class="mb-40px" :id="index">
            <div class="flex justify-between items-start" :id='index'>
              <div class="flex items-center">
                <img
                  src="@/assets/images/avatar.png"
                  width="54"
                  class="mr-20px rounded-full"
                />
                <div class="font-700 text-24px" v-if="item.from_uid.length>15">{{item.from_uid.substring(0,12)}}...</div>
                <div class="font-700 text-24px" v-else>{{item.from_uid}}</div>
              </div>
              <div class="text-[#7D8599] text-16px font-700">{{item.created_time}}</div>
            </div>

            <div class="pl-73px">
              <div class="text-[#7D8599] font-600 text-20px mb-15px">
                {{item.content}}
              </div>

              <div class="flex items-center mb-5px">
                <div
                  class="font-700 text-14px text-[#6F788D] mr-35px cursor-pointer"
                  @click="clickReply(item)"
                >
                  REPLY
                </div>
                <div class="flex items-center cursor-pointer">
                  <img src="@/assets/images/more3.svg" alt="" />
                  <div class="text-[#FA6BE1] ml-5px text-16px font-600" @click="clickViewReply(item)">
                    View {{item.reply_count}} replies
                  </div>
                </div>
              </div>
              <div v-if="item.show_reply">
                <div v-for="(item_reply, index_reply) in nft_reply.reply_list" :key="index_reply" class="mb-40px" :id="index">
                  <div class="flex justify-between items-start" :id='index_reply'>
                    <div class="flex items-center">
                      <img
                        src="@/assets/images/avatar.png"
                        width="38"
                        class="mr-15px rounded-full"
                      />
                      <div class="font-700 text-14px">{{item_reply.from_uid}}</div>
                    </div>
                    <div class="text-[#7D8599] text-10px font-500">{{item_reply.created_time}}</div>
                  </div>

                  <div class="pl-73px">
                    <div class="text-[#7D8599] font-400 text-14px mb-15px">
                      @{{item_reply.to_uid}}   {{item_reply.content}}
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative" v-if="item.show">
                <img
                  src="@/assets/images/avatar.png"
                  width="30"
                  class="absolute -left-40px top-0 rounded-full"
                />

                <input
                  id="reply_content"
                  type="text"
                  class="block w-full reply mb-5px"
                  placeholder="Add Reply..."
                />
                <div class="flex justify-between items-center">
                  <img src="@/assets/images/emoji.svg" class="cursor-pointer" />
                  <div class="flex items-center">
                    <div
                      class="text-[#6F778D] font-700 text-12px cursor-pointer mr-30px"
                      @click="item.show = false"
                    >
                      Cancellation
                    </div>
                    <div class="btn_border">
                      <el-button plain class="!w-100px !h-40px !p-0 post" @click="addTheReply(item)">Post</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProceedingDetails :DialogInfo="dialogue_info" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { nft_item, initNftItem } from '@/config/collection/nft_item';
import { initSeparatePoolContract, initFurContract } from "@/config/collection/separate_pool";
import { newMultiCallProvider } from "@/utils/web3/multicall";
import { getTxURL, toWei } from '@/utils/common';


import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from '~/config/loading_info';
import {
  nft_comment,
  nft_reply,
  initNftComment,
  initNftReply,
  intoNftComment,
  intoNftReply,
} from "@/config/collection/nft_comment";
import {
  nft_activity,
  initNftActivity,
  intoNftActivity,
} from "@/config/collection/nft_activity";
import ProceedingDetails from '@/components/Dialog/ProceedingDetails.vue';
export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/collection"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState('admin', ['connectStatus']),
    ...mapState(['userInfo']),
    cart() {
      return this.$store.state.user.cart;
    },
  },
  data() {
    const multicall = newMultiCallProvider(4);
    return {
      html: "",
      network: "rinkeby",
      nft_item: nft_item,
      nft_comment: nft_comment,
      nft_reply: nft_reply,
      nft_activity: nft_activity,
      poolContract: {},
      furContract: {},
      editorOption: {
        placeholder:
          "Share how you feel about the creation or even ask the creator a question.",
        modules: {
          toolbar: [
            [
              "bold",
              "italic",
              "underline",
              "code-block",
              "link",
              { header: 1 },
              { header: 2 },
              { list: "ordered" },
              { list: "bullet" },
            ],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
      //comments: [{}, {}, {}],
      multicall: multicall,
      dialogue_info: DialogInfo
    };
  },
  async mounted() {
    this.nft_item = await initNftItem(this.nft_item, this.$route.query.collection, this.$route.query.token_id, this.network);
    // console.log('NFT address', this.nft_item.address);
    this.poolContract = await initSeparatePoolContract(this.nft_item.address);
    this.furContract = await initFurContract();
    this.nft_comment = await initNftComment(this.network, this.nft_item.address, this.nft_item.token_id);
    this.nft_activity = await initNftActivity(this.network, this.nft_item.address, this.nft_item.token_id);
    // console.log(nft_activity);
  },
  methods: {
    clickaddress(address) {
      window.open('https://etherscan.io/address/'+address);
    },
    toCart() {
      let arr = [...this.cart, 1];
      this.$store.commit("save", ["user.cart", arr, this]);
    },
    async addTheComment(html) {
      //console.log(html.replace(/<[^>]+>|&[^>]+;/g,"").trim());
      let text = html.replace(/<[^>]+>|&[^>]+;/g,"").trim();
      if (text.length > 0) {
        let data = {
          network: this.network,
          address: this.nft_item.address,
          token_id: this.nft_item.token_id,
          content: text,
          from_uid: this.userInfo.userAddress,
          from_avatar: 'from_avatar',
          reply_count: 0,
        };
        this.html = '';
        window.location.hash = "#head";
        let res = intoNftComment(data);
        await new Promise(r => setTimeout(r, 100));
        this.nft_comment =await initNftComment(this.network, this.nft_item.address, this.nft_item.token_id);
      }
      return;
    },
    clickReply(item){
      for (let i = 0; i < this.nft_comment.comment_list.length; i++) {
          this.nft_comment.comment_list[i].show = false;
          this.nft_comment.comment_list[i].show_reply = false;
      }
      item.show_reply = false;
      item.show = true;
    },
    async clickViewReply(item){
      for (let i = 0; i < this.nft_comment.comment_list.length; i++) {
          this.nft_comment.comment_list[i].show = false;
          this.nft_comment.comment_list[i].show_reply = false;
      }
      item.show_reply = true;
      this.nft_reply = await initNftReply(this.network, item.id);
      // console.log(this.nft_reply)

    },
    async addTheReply(item,reply_type='comment'){
      let text = document.getElementById("reply_content").value;
      if (text.length > 0) {
        let data = {
          network: this.network,
          comment_id: item.id,
          reply_id: item.id,
          reply_type: reply_type,
          content: text,
          from_uid: this.userInfo.userAddress,
          from_avatar: 'from_avatar',
          to_uid: 'anonymous',
          to_avatar: 'to_avatar',
        };
        document.getElementById("reply_content").value = '';
        item.reply_count++;
        let res = intoNftReply(data);
        await this.clickViewReply(item);
      }
    },
    /** Balance & allowance checks **/

    async hasEnoughFur(account) {
      let hasEnough = [false, false];

      let multicall_list = [
        this.furContract.contract.methods.balanceOf(account),
        this.furContract.contract.methods.allowance(account, this.poolContract.address)
      ];
      const result = await this.multicall.aggregate(multicall_list); // [balance, allowance]
      const requiredAmount = toWei(100);
      if(result[0] > requiredAmount) {
        hasEnough[0] = true;
      }
      if(result[1] > requiredAmount) {
        hasEnough[1] = true;
      }

      return hasEnough;
    },
    async hasEnoughFx(account) {
      let hasEnough = false;

      let multicall_list = [
        this.poolContract.contract.methods.balanceOf(account),
      ];
      const result = await this.multicall.aggregate(multicall_list); // [balance, allowance]

      const requiredAmount = toWei(1000);
      if(result[0] >= requiredAmount) {
        hasEnough = true;
      }

      return hasEnough;
    },

    /** Contract functions **/

    async buy() {
      const account = this.userInfo.userAddress;
      const checkFx = await this.hasEnoughFx(account);
      const checkFur = await this.hasEnoughFur(account);


      if(!checkFx) {
        this.errorMessage(`Insufficient F-${this.nft_item.symbol} balance`);
        return;
      }
      if(!checkFur[0]) {
        this.errorMessage("Insufficient FUR balance");
        return;
      }
      if(!checkFur[1]) {
        this.errorMessage("Insufficient FUR allowance");
        return;
      }

      openDialog(this.dialogue_info, [ProcessInfo.BUY_NFT]);

      try {
        let tx_result = await this.poolContract.contract.methods.buy(this.nft_item.token_id).send({ from: account });
        this.successMessage(tx_result, `Purchase F-${this.nft_item.symbol} #${this.nft_item.token_id} succeeded`);
        //put the message into the database when buy succeed
        let data = {
          network: this.network,
          project: this.nft_item.collection,
          token_id: this.nft_item.token_id,
          address: this.nft_item.address,
          event: 'Redeem',
          event_type: 'success',
          eth_price: this.nft_item.fXprice.toFixed(2),
          from_user: this.poolContract.address,
          to_user: account,
        };
        intoNftActivity(data);
        await new Promise(r => setTimeout(r, 100));
        this.nft_activity = await initNftActivity(this.network, this.nft_item.address, this.nft_item.token_id);
      } catch(e) {
        this.errorMessage(`Purchase F-${this.nft_item.symbol} #${this.nft_item.token_id} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);

    },
    successMessage(receipt, title) {
      const txURL = getTxURL(receipt.transactionHash);
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: txURL,
        type: 'success',
      });
    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: '',
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>
