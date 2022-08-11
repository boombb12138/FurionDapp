<style lang="scss" scoped>
.box-input {
  &::v-deep {
    .el-input__inner {
      height: 60px;
      background: #091a39;
      background: rgba(1, 17, 41, 0.6);
      border: 1px solid #172643 !important;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25) !important;
      border-radius: 12px !important;
      color: #fcfffd;
      font-size: 18px;
      font-weight: 300;
      text-align: left;
      opacity: 0.8;

      &::-webkit-input-placeholder {
        color: rgba(204, 204, 204, 0.3) !important;
      }
    }
  }
}

.list {
  background: rgba(28, 42, 79, 0.4);
  border-radius: 16px;
  padding: 16px 14px;
}

.item {
  background: rgba(1, 17, 41, 0.7);
  border-radius: 8px;
  height: 55px;
  @apply flex items-center justify-between pl-18px pr-42px mb-10px;

  &:hover{
    background: rgba(16, 48, 96, 0.9);
  }
}
</style>

<template>
  <el-dialog title="NFT Contract Address:" :visible.sync="DialogVisible" width="37%"  :close-on-click-modal="false"
    append-to-body custom-class="el-dialog-dark">
    <div slot="title" class="flex font-800 text-24px">
      <div class="pb-2px">&nbsp;&nbsp;Select a token</div>
      &nbsp;&nbsp;
      <el-tooltip effect="light" :content="text" placement="bottom">
        <img src="@/assets/images/q.svg" alt="" width="4%" />
      </el-tooltip>
    </div>

    <el-input class="box-input" placeholder="Search name or input address" style="width:100%" v-model="value">
    </el-input>

    <br /><br /><br />
    <div class="h-474px mb-35px">
      <el-scrollbar class="h-1/1">
        <div class="list">
          <div class="item" v-for="n in 16">
            <div class="items-center flex">
            
              <img src="@/assets/images/token0.png" width="35px"/>
              <div class="font-300 text-18px text-[rgba(252,255,253,0.8)]"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WAVAX</div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['DialogVisible', 'DialogClose'],
  data() {
    return {
      Loading: false,
      text: 'Find a token by searching for its name or symbol, or by pasting its address below.',
      value: ''
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
