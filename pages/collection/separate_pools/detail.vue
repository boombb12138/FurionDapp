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
  font-size: 20px;
  color: #7d8599;
  &::placeholder {
    font-weight: 500;
    font-size: 20px;
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
.locked {
  opacity: 0.6;
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
          :class="{ locked: nft_item.lock_info.locker != zeroAddress }"
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
            <div class="flex justify-between">
              <div>
                <div class="mb-15px opacity-60 font-500 text-20px">1000 F&nbsp;-&nbsp;{{ nft_item.symbol }}
                </div>
                <div class="flex items-center mb-55px">
                  <img src="@/assets/images/icon_eth.svg" class="w-24px mr-10px" />
                  <div class="font-700 text-32px">{{nft_item.fXprice.toFixed(2)}}</div>
                </div>
              </div>
            </div>


            <div v-if="nft_item.lock_info.locker === zeroAddress" class="flex">
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

            <div v-if="nft_item.lock_info.locker != zeroAddress && nft_item.lock_info.locker.toLowerCase() != account" class="flex justify-end items-center mt-40px" style="color: rgba(255, 255, 255, 0.9)">
              <img src="@/assets/images/locked.png" class="w-22px h-26px mr-10px" />
              <p class="text-20px font-600 text-[#6D788A]">Locked Until {{ unixToDate(nft_item.lock_info.release_time) }}</p>
            </div>

            <div v-if="nft_item.lock_info.locker.toLowerCase() === account" class="flex">
              <div class="btn_border mr-18px">
                <el-button type="primary" class="w-310px !h-60px" plain @click="extend" :disabled="nft_item.lock_info.extended === true">
                  <div class="!flex items-center justify-center">
                    <div class="text-20px font-800">{{ nft_item.lock_info.extended === false ? "EXTEND" : "EXTENDED" }}</div>
                  </div>
                </el-button>
              </div>
              <div class="btn_border">
                <el-button type="primary" class="w-310px !h-60px" @click="unlock">
                  <div class="text-20px font-800">UNLOCK</div>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction activity log -->
      <div class="mb-53px">
        <div class="flex items-center pl-44px h-76px title">
          <div class="font-800 text-18px">Item Activity</div>
        </div>
        <el-table :data="nft_activity.activity_list" style="width: 100%" @row-click="clicktx">
          <el-table-column prop="Event" label="Event">
            <template slot-scope="scope" >
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
                {{ show(scope.row.from_user) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="To" label="To">
            <template slot-scope="scope">
              <div class="text-16px font-600 text-[#40BAFF] underline cursor-pointer" @click="clickaddress(scope.row.from_user)">
                {{ show(scope.row.to_user) }}
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
              <div class="flex items-center mb-12px">
                <img
                  src="@/assets/images/avatar.png"
                  width="80"
                  class="mr-20px rounded-full"
                />
                <div class="font-700 text-24px" @click="clickaddress(item.from_uid)" v-if="item.from_user.length>15">{{item.from_user.substring(0,12)}}...</div>
                <div class="font-700 text-24px" @click="clickaddress(item.from_uid)" v-else >{{item.from_user}}</div>
              </div>
              <div class="text-[#7D8599] text-16px font-700">{{item.created_time}}</div>
            </div>

            <div class="pl-73px">
              <div class="text-[#7D8599] font-600 text-24px mb-20px">
                {{item.content}}
              </div>

              <div class="flex items-center mb-30px">
                <div
                  class="font-700 text-20px text-[#6F788D] mr-35px mt-15px mb-8px cursor-pointer"
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
                  <div class="flex justify-between items-start mb-16px" :id='index_reply'>
                    <div class="flex items-center">
                      <img
                        src="@/assets/images/avatar.png"
                        width="54"
                        class="mr-15px rounded-full"
                      />
                      <div class="font-700 text-20px" @click="clickaddress(item_reply.from_uid)">{{item_reply.from_user}}</div>
                    </div>
                    <div class="text-[#7D8599] text-16px font-600">{{item_reply.created_time}}</div>
                  </div>

                  <div class="text-[#7D8599] font-600 text-20px mb-30px flex ml-50px">
                    <div @click="clickaddress(item_reply_uid)">
                      @{{item_reply.to_user}}
                    </div>
                    <div class="ml-10px">
                      {{ item_reply.content }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative" v-if="item.show">
                <img
                  src="@/assets/images/avatar.png"
                  width="60"
                  class="absolute -left-60px top-0 rounded-full"
                />

                <input
                  id="reply_content"
                  type="text"
                  class="block w-full reply mb-10px text-20px ml-10px"
                  placeholder="Add Reply..."
                />
                <div class="flex justify-between items-center">
                  <img src="@/assets/images/emoji.svg" class="cursor-pointer ml-10px" />
                  <div class="flex items-center">
                    <div
                      class="text-[#6F778D] font-700 text-18px cursor-pointer mr-30px"
                      @click="item.show = false"
                    >
                      Cancellation
                    </div>
                    <div class="btn_border">
                      <el-button plain class="!w-100px !h-50px !p-0 post" @click="addTheReply(item)">Post</el-button>
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
import { _compareInt, getTxURL, toWei, ALLOWANCE_THRESHOLD, tokenApprove } from '@/utils/common';


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
  user_info,
  inituserinfo,
  renew_user_email,
  renew_user_nick_name,
  renew_user_comment,
  renew_user_liquidation_alert,
  renew_user_hot_news
} from "@/config/user_info/profile";
import {
  nft_activity,
  initNftActivity,
  intoNftActivity,
  intoNftActivityByArray
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
    zeroAddress() {
      return '0x0000000000000000000000000000000000000000';
    },
    account() {
      return this.userInfo.userAddress;
    },
    currentTimestamp() {
      return Math.floor(Date.now() / 1000);
    }
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
      approved_fur: true,
      editorOption: {
        placeholder: "Share how you feel about the creation or even ask the creator a question.",
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
    await initNftItem(this.nft_item, this.$route.query.collection, this.$route.query.token_id, this.network);
    // console.log('NFT address', this.nft_item.address);
    this.poolContract = await initSeparatePoolContract(this.nft_item.address);
    this.furContract = await initFurContract();
    this.nft_comment = await initNftComment(this.network, this.nft_item.address, this.nft_item.token_id);
    this.nft_activity = await initNftActivity(this.network, this.nft_item.address, this.nft_item.token_id);
    this.user_info = await inituserinfo(this.network,this.userInfo.userAddress);
    await this.checkApproval();
    // console.log(nft_activity);
  },
  methods: {
    show(text){
      if(text == this.poolContract.address)
        return 'Furion pool';
      else if (text == this.userInfo.userAddress)
        return 'You';
      else
        return text.substring(0,12)+'...';
    },
    clicktx(row){
      window.open('https://rinkeby.etherscan.io/tx/'+row.tx_hash);
    },
    clickaddress(address) {
      window.open('https://rinkeby.etherscan.io/address/'+address);
    },
    toCart() {
      const address = this.nft_item.address;
      let arr = [];
      let info = {
        token_id: this.nft_item.token_id,
        name: this.nft_item.collection,
        symbol: this.nft_item.symbol, 
        image_url: this.nft_item.image,
        fx_price: this.nft_item.fXprice
      };

      for (let nft of this.cart.slice(1)) {
        if (info.token_id == nft.token_id) {
          this.$notify({
            title: `Added ${info.symbol} #${info.token_id} to cart`,
            dangerouslyUseHTMLString: true,
            type: 'success',
          });
          return;
        }
      }

      if (this.cart.length === 0) {
        arr = [...this.cart, address, info];
      } else {
        if (address != this.cart[0]) {
          this.errorMessage("Not same collection");
          return;
        }
        arr = [...this.cart, info];
      }
      
      this.$store.commit("save", ["user.cart", arr, this]);
      this.$notify({
        title: `Added ${info.symbol} #${info.token_id} to cart`,
        dangerouslyUseHTMLString: true,
        type: 'success',
      });
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
          from_user: this.user_info.info_list.nick_name,
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
          from_user: this.user_info.info_list.nick_name,
          from_avatar: 'from_avatar',
          to_uid: 'anonymous',
          to_user: item.from_user,
          to_avatar: 'to_avatar',
        };
        document.getElementById("reply_content").value = '';
        item.reply_count++;
        let res = intoNftReply(data);
        await this.clickViewReply(item);
      }
    },
    unixToDate(unixInSeconds) {
      const milli = unixInSeconds * 1000;
      const date = new Date(milli).toLocaleString().split(',');
      return date[0];
    },

    /************************* Balance & allowance checks *************************/

    async checkApproval() {
      const account = this.userInfo.userAddress;
      let multicall_list = [
        this.furContract.contract.methods.allowance(account, this.poolContract.address),
      ];

      const result = await this.multicall.aggregate(multicall_list); // [fur allowance]
      if (_compareInt(result[0], toWei(ALLOWANCE_THRESHOLD)) == "smaller") {
        this.approved_fur = false;
      }
    },
    async hasEnoughFur(account, amount) {
      let hasEnough = false;

      let multicall_list = [
        this.furContract.contract.methods.balanceOf(account),
      ];
      const result = await this.multicall.aggregate(multicall_list); // [balance]

      const requiredAmount = toWei(amount);
      if (_compareInt(result[0], requiredAmount) != "smaller") {
        hasEnough = true;
      }

      return hasEnough;
    },
    async hasEnoughFx(account, amount) {
      let hasEnough = false;

      let multicall_list = [
        this.poolContract.contract.methods.balanceOf(account),
      ];
      const result = await this.multicall.aggregate(multicall_list); // [balance]

      // console.log('F-X balance', result);

      const requiredAmount = toWei(amount);
      if (_compareInt(result[0], requiredAmount) != "smaller") {
        hasEnough = true;
      }

      return hasEnough;
    },

    /***************************** Contract functions *****************************/

    async buy() {
      const account = this.userInfo.userAddress;
      const checkFx = await this.hasEnoughFx(account, 1000);
      const checkFur = await this.hasEnoughFur(account, 100);


      if(!checkFx) {
        this.errorMessage(`Insufficient F-${this.nft_item.symbol} balance`);
        return;
      }
      if(!checkFur) {
        this.errorMessage("Insufficient FUR balance");
        return;
      }

      // initialize tx window
      let dialog_list = [];
      if (!this.approved_fur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.BUY_NFT);
      openDialog(this.dialogue_info, dialog_list);

      if (!this.approved_fur) {
        try {
          await tokenApprove(this.furContract.address, account, this.poolContract.address);
          stepDialog(this.dialogue_info);
          this.approved_fur = true;
        }
        catch (e) {
          console.warn(e);
          closeDialog(this.dialogue_info);
          return
        }
      }

      try {
        let tx_result = await this.poolContract.contract.methods.buy(this.nft_item.token_id).send({ from: account });
        this.successMessage(tx_result, `Purchase ${this.nft_item.symbol} #${this.nft_item.token_id} succeeded`);
        //put the message into the database when buy succeed
        let data = [];
        data.push({
            project: this.nft_item.collection,
            token_id: this.nft_item.token_id,
            address: this.nft_item.address,
            event: 'Redeem',
            event_type: 'success',
            eth_price: this.nft_item.fXprice.toFixed(2),
            from_user: this.poolContract.address,
            tx_hash: tx_result.transactionHash,
            to_user: account,
          });
        intoNftActivityByArray(this.network,data);
        await new Promise(r => setTimeout(r, 100));
        this.nft_activity = await initNftActivity(this.network, this.nft_item.address, this.nft_item.token_id);
      } catch(e) {
        this.errorMessage(`Purchase ${this.nft_item.symbol} #${this.nft_item.token_id} failed`);
        closeDialog(this.dialogue_info);
        return;
      }

      closeDialog(this.dialogue_info);
    },

    /*********************************** Unlock ***********************************/

    async unlock() {
      const checkFx = await this.hasEnoughFx(this.account, 1, 500);
      let tokenId = this.nft_item.token_id;

      if (!checkFx) {
        this.errorMessage(`Insufficient F-${this.nft_item.symbol} balance`);
        return;
      }

      const dialog_list = [ProcessInfo.UNLOCK_NFT];
      openDialog(this.dialogue_info, dialog_list);

      try {
        let tx_result = await this.poolContract.contract.methods.redeem(tokenId).send({ from: this.account });
        this.successMessage(tx_result, `Unlock ${this.nft_item.symbol} #${tokenId} succeeded`);
        //put the message into the database when buy succeed
        let data = [];
        data.push({
            project: this.nft_item.collection,
            token_id: this.nft_item.token_id,
            address: this.nft_item.address,
            event: 'Unlock',
            event_type: 'success',
            eth_price: this.nft_item.fXprice.toFixed(2),
            from_user: this.poolContract.address,
            tx_hash: tx_result.transactionHash,
            to_user: this.account,
          });
        intoNftActivityByArray(this.network,data);
        await new Promise(r => setTimeout(r, 100));
        this.nft_activity = await initNftActivity(this.network, this.nft_item.address, this.nft_item.token_id);
      } catch (e) {
        this.errorMessage(`Unlock ${this.nft_item.symbol} #${tokenId} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      closeDialog(this.dialogue_info);
    },

    /*************************** Extend locking period ***************************/

    async extend() {
      const checkFur = await this.hasEnoughFur(this.account, 1, 150);
      let tokenId = this.nft_item.token_id;

      if (!checkFur) {
        this.errorMessage(`Insufficient FUR balance`);
        return;
      }

      let dialog_list = [];
      if (!this.approved_fur) {
        dialog_list.push(ProcessInfo.APPROVE_FUR);
      }
      dialog_list.push(ProcessInfo.EXTEND_LOCK_PERIOD);
      openDialog(this.dialogue_info, dialog_list);

      try {
        let tx_result = await this.poolContract.contract.methods.payFee(tokenId).send({ from: this.account });
        this.successMessage(tx_result, `Extend locking ${this.nft_item.symbol} #${tokenId} succeeded`);
        let data = [];
        data.push({
            project: this.nft_item.collection,
            token_id: this.nft_item.token_id,
            address: this.nft_item.address,
            event: 'Extend',
            event_type: 'success',
            eth_price: this.nft_item.fXprice.toFixed(2),
            from_user: this.account,
            tx_hash: tx_result.transactionHash,
            to_user: this.account,
          });
        intoNftActivityByArray(this.network,data);
        await new Promise(r => setTimeout(r, 100));
        this.nft_activity = await initNftActivity(this.network, this.nft_item.address, this.nft_item.token_id);
      } catch (e) {
        this.errorMessage(`Extend locking ${this.nft_item.symbol} #${tokenId} failed`);
        closeDialog(this.dialogue_info);
        return;
      }
      closeDialog(this.dialogue_info);

      await initNftItem(this.nft_item, this.$route.query.collection, this.$route.query.token_id, this.network);
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
