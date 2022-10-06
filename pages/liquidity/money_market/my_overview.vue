<style lang="scss" scoped>
.info {
  background: #091839;
  border-radius: 20px;
  padding: 35px 20px;
  &.closed {
    background: linear-gradient(
      180deg,
      rgba(51, 53, 114, 0.4) 0%,
      rgba(51, 53, 114, 0.5) 100%
    );
    height: 90px;
  }
}
.title {
  margin-bottom: 20px;
  padding: 0 10px;
  @apply flex justify-between items-center;
}

::v-deep {
  .el-table .el-table__body tr:last-of-type .el-table__cell:last-of-type {
    border-bottom-right-radius: 0 !important;
  }
  .el-table .el-table__body tr:last-of-type .el-table__cell:first-of-type {
    border-bottom-left-radius: 0 !important;
  }
  .el-table {
    .el-table__header tr .el-table__cell {
      font-size: 15px;
      color: #8a92a2;
    }
    .el-table__header tr .el-table__cell:first-of-type {
      padding-left: 0;
    }
    .el-table__header-wrapper {
      border: none !important;
    }
    .el-table__header tr,
    .el-table__body {
      border: none;
      background: transparent !important;
    }
    .el-table__body-wrapper {
      overflow: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background: #051633;
        border-radius: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background: #22325a;
        border-radius: 15px;
      }
      .el-table__body .el-table__cell {
        border-top: 0 !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    .el-table__row:hover {
      box-shadow: none !important;
      position: relative;
      z-index: 10;
      transform: scale(1) !important;
      .el-table__cell {
        border: none !important;
        border-radius: 0 !important;
        &:first-of-type {
          border-top-left-radius: none !important;
          border-bottom-left-radius: none !important;
        }
        &:last-of-type {
          border-top-right-radius: none !important;
          border-bottom-right-radius: none !important;
        }
      }
    }
  }
}

.text-shadow {
  text-shadow: 0px 1px 0px #ffb5f2;
}

.dialog {
  width: 587px;
  height: 355px;
  background: url("~@/assets/images/dashboard/dialog.png") no-repeat 100%;

  .text-white {
    text-shadow: 0px 2px 0px #ffb7f3;
  }

  .input {
    background: rgba(1, 17, 41, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    @apply w-494px h-125px  relative mb-24px px-20px pt-24px;
    .custom {
      height: 30px;
      color: #c3c6cd;
      font-weight: 600;
      font-size: 30px;
      color: #fff;
      ::v-deep .el-input {
        padding-left: 0 !important;
        background: transparent !important;
      }
    }
  }
}

.tip {
  height: 44px;
  background: rgba(252, 255, 253, 0.12);
  border: 3px solid #364666;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25),
    inset 0px 0px 3px rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  margin-bottom: 20px;
  > div {
    border: 2px solid #fa6be1;
    height: 100%;
    border-radius: 12px;
    color: #8a92a2;
    font-weight: 600;
    font-size: 13px;
  }
}

.symbol {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.custom_btn {
  display: block;
  width: 523px;
  height: 50px;
  line-height: 45px;
  font-size: 19px;
  font-weight: 800;
  text-decoration: none;
  color: #f06fd2;
  border: 2px solid #f06fd2;
  text-align: center;
  position: relative;
  transition: all 0.5s ease-out;
  border-radius: 12px;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 2;
  }

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #f06fd2;
    border-radius: 9px;
    transition: all 0.5s;
  }

  &:hover {
    color: #0a1a3a;
  }

  &:hover:before {
    width: 100%;
  }
}
.disabled {
  filter: grayscale(80%);
}

.input-window {
  background: #011129;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fcfffd;
  @apply p-25px pr-30px pl-30px relative;
}
.box-input {
  height: 45px;
  width: 220px;
  &::v-deep {
    .el-input__inner {
      background: none;
      border: none;
      color: #fcfffd;
      font-size: 32px;
      font-weight: 500;
      text-align: left;
      padding: 0px;
      margin-right: 15px;

      &::-webkit-input-placeholder {
        color: rgba(252, 255, 253, 0.6) !important;
      }
    }
    .el-input__suffix-inner {
      display: flex;
      height: 100%;
      right: 15px;
    }
  }
}
.max {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) -9.52%,
    rgba(51, 53, 114, 0.2) 109.52%
  );
  @apply rounded-5px w-60px h-40px leading-40px text-[rgba(252,255,253,0.8)] text-15px font-700 text-center cursor-pointer;
}

@mixin btn-style {
  font-size: 13px;
  font-weight: 700;
  text-shadow: 0 1px 0px rgb(1, 19, 46, 0.8);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4);
  line-height: 30px;
  height: 30px;
  text-align: center;
  width: 100px;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
}
@mixin psuedo-style {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  transition: all 0.3s;
}
.small-btn {
  @include btn-style;
  color: #f181de;

  &::before {
    @include psuedo-style;
    background-color: rgba(241, 129, 222, 0.1);
  }

  &:hover::before {
    opacity: 0;
    transform: scale(0.3, 0.3);
  }

  &::after {
    @include psuedo-style;
    opacity: 0;
    border: 2px solid rgba(241, 129, 222, 0.8);
    transform: scale(1.2, 1.2);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.value {
  color: #8a92a2;
  font-size: 13px;
}
</style>

<template>
  <div class="page py-156px text-[#FCFFFD]">
    <el-dialog
      :visible.sync="dialog"
      width="587px"
      height="355px"
      :close-on-click-modal="true"
      append-to-body
      custom-class="el-dialog-dark"
      @close="interact_amount = ''"
    >
      <div slot="title" class="flex font-800 text-28px">
        <div class="pb-2px line" style="word-spacing: 10px">
          {{ action }} {{ symbol }}
        </div>
      </div>

      <div class="input-window mb-25px">
        <div class="flex items-center justify-between mb-20px">
          <div class="flex items-center">
            <img :src="token_info.image" class="w-40px mr-15px rounded-full" />
            <div class="font-600 text-22px">{{ symbol }}</div>
          </div>
        </div>

        <div class="flex justify-between items-end">
          <el-input
            class="box-input"
            placeholder="0.0"
            v-model="interact_amount"
            type="number"
          ></el-input>
          <div class="flex">
            <div
              class="text-13px text-[rgba(252,255,253,0.4)] mr-15px flex items-end"
            >
              <!--mark  approxValue作用：转为美元？  -->
              ~${{ displayFormat(approxValue(symbol, interact_amount), 18, 2) }}
            </div>
            <!-- mark writeMaxDeposit作用：将用户有的钱都填入表格 -->
            <div class="flex items-center" @click="writeMax()">
              <div class="max">MAX</div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="custom_btn mt-30px mx-auto cursor-pointer"
        :class="{ disabled: disableBtn() }"
        @click="disableBtn() ? undefined : execute()"
      >
        <span>{{ error ? error : action }}</span>
      </a>
      <!--el-button
        type="primary"
        class="!w-full"
        :disabled="disableBtn()"
        @click="execute()"
      >
        <span class="font-800 text-20px" style="word-spacing: 5px; text-transform: uppercase">
          {{ error ? error : action }}
        </span>
      </el-button-->
    </el-dialog>

    <div class="w-1270px mx-auto">
      <MarketTab
        v-if="active == 1 || active == 2"
        class="mt-50px"
        v-model="active"
      ></MarketTab>
      <!-- //test nft和badges的跳转2 -->
      <div v-if="active == 0 || active == 1" class="flex justify-between">
        <div class="wrapper">
          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-290px' : 'h-auto']"
            class="w-620px mb-30px"
          >
            <div class="info" :class="{ closed: !show1 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Your Supplies</div>
                  <Abc v-model="abc"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show1 = !show1"
                >
                  <template v-if="show1">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>
              <!-- 第一个table -->
              <div class="content" v-if="show1 && !loading1">
                <el-table :data="tableData1" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="130"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="market_info[scope.row.Asset].tier"
                          readonly
                        ></Abc>
                        <div
                          class="flex items-center cursor-pointer"
                          @click="
                            $router.push(
                              `/liquidity/money_market/detail?asset=${
                                scope.row.Asset
                              }&tier=${market_info[scope.row.Asset].tier}`
                            )
                          "
                        >
                          <img
                            :src="token_list[scope.row.Asset].image"
                            class="mr-8px"
                            width="25"
                            height="25"
                          />
                          <div class="symbol">{{ scope.row.Asset }}</div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="Supplied" align="center" width="116">
                    <template slot-scope="scope">
                      {{
                        displayFormat(
                          user_info[scope.row.Asset].supplied,
                          decimals(scope.row.Asset),
                          2
                        )
                      }}
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="APY"
                    label="APY"
                    align="center"
                    width="115"
                  >
                    <template slot-scope="scope">
                      {{
                        displayFormat(
                          market_info[scope.row.Asset].supply_rate,
                          18,
                          2
                        )
                      }}%
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="Collateral"
                    label="Collateral"
                    align="center"
                    width="115"
                  >
                    <template slot-scope="scope">
                      {{
                        market_info[scope.row.Asset].is_collateral
                          ? "YES"
                          : "NO"
                      }}
                    </template>
                  </el-table-column>
                  <el-table-column width="104px">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="small-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.Asset, 'Withdraw');
                          "
                        >
                          Withdraw
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>

          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-358px' : 'h-auto']"
            class="w-620px"
          >
            <div class="info" :class="{ closed: !show3 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Assets to Supply</div>
                  <Abc v-model="abc2"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show3 = !show3"
                >
                  <template v-if="show3">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show3 && !loading1">
                <!--div class="tip">
                  <div class="flex items-center pl-30px">
                    <img src="@/assets/images/dashboard/tip.svg" class="mr-15px" />
                    <div>
                      Your Ethereum wallet is empty.Purchase or transfer assets
                    </div>
                  </div>
                </div-->
                <el-table :data="tableData2" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="130"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="market_info[scope.row.Asset].tier"
                          readonly
                        ></Abc>
                        <div
                          class="flex items-center cursor-pointer"
                          @click="
                            $router.push(
                              `/liquidity/money_market/detail?asset=${
                                scope.row.Asset
                              }&tier=${market_info[scope.row.Asset].tier}`
                            )
                          "
                        >
                          <img
                            :src="token_list[scope.row.Asset].image"
                            class="mr-8px"
                            width="25"
                            height="25"
                          />
                          <div class="symbol">{{ scope.row.Asset }}</div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="Balance" width="133" align="center"
                    ><template slot-scope="scope">{{
                      displayFormat(
                        user_info[scope.row.Asset].token_balance,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}</template></el-table-column
                  >
                  <el-table-column label="APY" align="center" width="80"
                    ><template slot-scope="scope"
                      >{{
                        displayFormat(
                          market_info[scope.row.Asset].supply_rate,
                          18,
                          2
                        )
                      }}%</template
                    ></el-table-column
                  >
                  <el-table-column
                    label="Total Supplied"
                    align="center"
                    width="133"
                    ><template slot-scope="scope">{{
                      displayFormat(
                        market_info[scope.row.Asset].supplied,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}</template></el-table-column
                  >
                  <el-table-column width="104" align="right">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="small-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.Asset, 'Supply');
                          "
                        >
                          Supply
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>
        </div>

        <div class="wrapper">
          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-290px' : 'h-auto']"
            class="w-620px mb-30px"
          >
            <div class="info" :class="{ closed: !show2 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Your Borrows</div>
                  <Abc v-model="abc3"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show2 = !show2"
                >
                  <template v-if="show2">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show2 && !loading1">
                <el-table :data="tableData3" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="130"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="market_info[scope.row.Asset].tier"
                          readonly
                        ></Abc>
                        <div
                          class="flex items-center cursor-pointer"
                          @click="
                            $router.push(
                              `/liquidity/money_market/detail?asset=${
                                scope.row.Asset
                              }&tier=${market_info[scope.row.Asset].tier}`
                            )
                          "
                        >
                          <img
                            :src="token_list[scope.row.Asset].image"
                            class="mr-8px"
                            width="25"
                            height="25"
                          />
                          <div class="symbol">{{ scope.row.Asset }}</div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="Borrowed" width="133" align="center"
                    ><template slot-scope="scope">{{
                      displayFormat(
                        user_info[scope.row.Asset].borrowed,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}</template></el-table-column
                  >
                  <el-table-column label="APY" align="center" width="80"
                    ><template slot-scope="scope"
                      >{{
                        displayFormat(
                          market_info[scope.row.Asset].borrow_rate,
                          18,
                          2
                        )
                      }}%</template
                    ></el-table-column
                  >
                  <el-table-column label="Borrowable" align="center" width="133"
                    ><template slot-scope="scope">{{
                      displayFormat(
                        user_info[scope.row.Asset].borrow_quota,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}</template></el-table-column
                  >
                  <el-table-column width="104">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="small-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.Asset, 'Repay');
                          "
                        >
                          Repay
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>

          <Loading
            :loading="loading1"
            :class="[loading1 ? 'h-358px' : 'h-auto']"
            class="w-620px"
          >
            <div class="info" :class="{ closed: !show4 }">
              <div class="title">
                <div class="flex items-center">
                  <div class="text-18px font-700 mr-30px">Assets to Borrow</div>
                  <Abc v-model="abc4"></Abc>
                </div>
                <div
                  class="flex items-center text-[#8A92A2] text-13px font-700 cursor-pointer"
                  @click="show4 = !show4"
                >
                  <template v-if="show4">
                    <div class="mr-2px">Hide</div>
                    <i class="el-icon-minus"></i>
                  </template>
                  <template v-else>
                    <div class="mr-2px">Show</div>
                    <i class="el-icon-caret-bottom"></i>
                  </template>
                </div>
              </div>

              <div class="content" v-if="show4 && !loading1">
                <!--div class="tip">
                  <div class="flex items-center pl-30px">
                    <img src="@/assets/images/dashboard/tip.svg" class="mr-15px" />
                    <div>
                      To borrow you need to supply any asset to be used as
                      collateral.
                    </div>
                  </div>
                </div-->
                <el-table :data="tableData4" style="width: 100%">
                  <el-table-column
                    prop="Asset"
                    label="Asset"
                    width="130"
                    align="left"
                  >
                    <template slot-scope="scope">
                      <div class="flex items-center w-1/1">
                        <Abc
                          class="mr-10px"
                          v-model="market_info[scope.row.Asset].tier"
                          readonly
                        ></Abc>
                        <div
                          class="flex items-center cursor-pointer"
                          @click="
                            $router.push(
                              `/liquidity/money_market/detail?asset=${
                                scope.row.Asset
                              }&tier=${market_info[scope.row.Asset].tier}`
                            )
                          "
                        >
                          <img
                            :src="token_list[scope.row.Asset].image"
                            class="mr-8px"
                            width="25"
                            height="25"
                          />
                          <div class="symbol">{{ scope.row.Asset }}</div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="Available" width="133" align="center"
                    ><template slot-scope="scope">{{
                      displayFormat(
                        market_info[scope.row.Asset].cash,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}</template></el-table-column
                  >
                  <el-table-column label="APY" align="center" width="80"
                    ><template slot-scope="scope"
                      >{{
                        displayFormat(
                          market_info[scope.row.Asset].borrow_rate,
                          18,
                          2
                        )
                      }}%</template
                    ></el-table-column
                  >
                  <el-table-column
                    label="Total Borrowed"
                    align="center"
                    width="133"
                    ><template slot-scope="scope">{{
                      displayFormat(
                        market_info[scope.row.Asset].borrowed,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}</template></el-table-column
                  >
                  <el-table-column width="104">
                    <template slot-scope="scope">
                      <div class="flex items-center justify-end">
                        <div
                          class="small-btn"
                          @click="
                            dialog = true;
                            initInteraction(scope.row.Asset, 'Borrow');
                          "
                        >
                          Borrow
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </Loading>
        </div>
      </div>

      <div v-if="active == 2">
        <div class="flex justify-between items-center mb-35px mt-50px">
          <el-input
            placeholder="Search asset"
            v-model="searchKey"
            class="search !w-858px"
            clearable
            @input="handleSearch"
          >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>

          <!--el-checkbox-group v-model="checkList">
            <el-checkbox label="Tier 1"></el-checkbox>
            <el-checkbox label="Tier 2"></el-checkbox>
            <el-checkbox label="Tier 3"></el-checkbox>
          </el-checkbox-group-->
        </div>

        <Loading
          :loading="loading1"
          :class="[loading1 ? 'h-358px' : 'h-auto']"
          class="mb-30px w-1270px"
        >
          <div>
            <el-table :data="mtableData" style="width: 100%">
              <el-table-column
                prop="Asset"
                label="Asset"
                width="260"
                sortable=""
                align="left"
              >
                <template slot-scope="scope">
                  <div class="flex items-center">
                    <Abc
                      class="mr-10px"
                      v-model="market_info[scope.row.Asset].tier"
                      readonly
                    ></Abc>
                    <div
                      class="flex items-center cursor-pointer"
                      @click="
                        $router.push(
                          `/liquidity/money_market/detail?asset=${
                            scope.row.Asset
                          }&tier=${market_info[scope.row.Asset].tier}`
                        )
                      "
                    >
                      <img
                        :src="token_list[scope.row.Asset].image"
                        class="mr-8px"
                        width="32"
                        height="32"
                      />
                      <div class="leading-16px text-15px">
                        {{ scope.row.Asset }}
                        <div class="text-[#A5A7AA] mt-5px text-14px">
                          {{ token_list[scope.row.Asset].name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                label="Total Supplied"
                align="center"
                width="180"
                sortable=""
              >
                <template slot-scope="scope">
                  <div>
                    <div>
                      {{
                        displayFormat(
                          market_info[scope.row.Asset].supplied,
                          decimals(scope.row.Asset),
                          2
                        )
                      }}
                    </div>
                    <div class="value">
                      ${{
                        displayFormat(
                          approxValue(
                            scope.row.Asset,
                            market_info[scope.row.Asset].supplied
                          ),
                          18 + decimals(scope.row.Asset),
                          2
                        )
                      }}
                    </div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                label="Supply APY"
                align="center"
                width="180"
                sortable=""
              >
                <template slot-scope="scope"
                  >{{
                    displayFormat(
                      market_info[scope.row.Asset].supply_rate,
                      18,
                      2
                    )
                  }}%</template
                >
              </el-table-column>

              <el-table-column
                label="Total Borrowed"
                align="center"
                width="180"
                sortable=""
              >
                <template slot-scope="scope">
                  <div>
                    <div>
                      {{
                        displayFormat(
                          market_info[scope.row.Asset].borrowed,
                          decimals(scope.row.Asset),
                          2
                        )
                      }}
                    </div>
                    <div class="value">
                      ${{
                        displayFormat(
                          approxValue(
                            scope.row.Asset,
                            market_info[scope.row.Asset].borrowed
                          ),
                          18 + decimals(scope.row.Asset),
                          2
                        )
                      }}
                    </div>
                  </div>
                </template>
              </el-table-column>

              <el-table-column
                label="Borrow APY"
                align="center"
                width="180"
                sortable=""
              >
                <template slot-scope="scope"
                  >{{
                    displayFormat(
                      market_info[scope.row.Asset].borrow_rate,
                      18,
                      2
                    )
                  }}%</template
                >
              </el-table-column>

              <el-table-column
                label="Available"
                align="center"
                width="180"
                sortable=""
              >
                <template slot-scope="scope">
                  <div>
                    {{
                      displayFormat(
                        market_info[scope.row.Asset].cash,
                        decimals(scope.row.Asset),
                        2
                      )
                    }}
                  </div>
                  <div class="value">
                    ${{
                      displayFormat(
                        approxValue(
                          scope.row.Asset,
                          market_info[scope.row.Asset].cash
                        ),
                        18 + decimals(scope.row.Asset, 2)
                      )
                    }}
                  </div>
                </template>
              </el-table-column>

              <el-table-column width="104" align="right">
                <template slot-scope="scope">
                  <div class="flex items-center justify-end">
                    <div
                      class="small-btn"
                      @click="
                        $router.push(
                          `/liquidity/money_market/detail?asset=${
                            scope.row.Asset
                          }&tier=${market_info[scope.row.Asset].tier}`
                        )
                      "
                    >
                      Details
                    </div>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </Loading>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  _formatNumber,
  _compareInt,
  getTxURL,
  toWei,
  fromWei,
  tokenApprove,
  getNativeTokenAmountRaw,
} from "@/utils/common";

import {
  token_list,
  market_list,
  user_info_default,
  market_info_default,
  initTokenContract,
  initMarketContract,
  initManagerContract,
  initPriceOracle,
} from "@/config/money_market/market";

import { newMultiCallProvider } from "@/utils/web3/multicall";

import {
  DialogInfo,
  initDialog,
  closeDialog,
  openDialog,
  stepDialog,
  ProcessInfo,
} from "~/config/loading_info";
import ProceedingDetails from "@/components/Dialog/ProceedingDetails.vue";

export default {
  async asyncData({ store, $axios, app, query }) {
    store.commit("update", ["admin.activeMenu", "/liquidity"]);
  },
  props: {},
  components: { ProceedingDetails },
  computed: {
    ...mapState("admin", ["connectStatus"]),
    ...mapState(["userInfo"]),
    // Returns symbol of underlying token of the market that user is interacting with
    symbol() {
      return this.token_info.symbol;
    },
    tableData1() {
      let newArr = [];
      for (let i = 0; i < this.abc.length; i++) {
        newArr.push(this.tableData[parseInt(this.abc[i]) - 1]);
      }
      return newArr;
    },
    tableData2() {
      let newArr = [];
      for (let i = 0; i < this.abc2.length; i++) {
        newArr.push(this.tableData[parseInt(this.abc2[i]) - 1]);
      }
      return newArr;
    },
    tableData3() {
      let newArr = [];
      for (let i = 0; i < this.abc3.length; i++) {
        newArr.push(this.tableData[parseInt(this.abc3[i]) - 1]);
      }
      return newArr;
    },
    tableData4() {
      let newArr = [];
      for (let i = 0; i < this.abc4.length; i++) {
        newArr.push(this.tableData[parseInt(this.abc4[i]) - 1]);
      }
      return newArr;
    },
  },
  data() {
    const multicall = newMultiCallProvider(5);
    return {
      dialog: false,
      loading1: true,
      abc: ["1", "2", "3"],
      abc2: ["1", "2", "3"],
      abc3: ["1", "2", "3"],
      abc4: ["1", "2", "3"],
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      token_list: token_list,
      tableData: [
        {
          Asset: "USDT",
        },
        {
          Asset: "ETH",
        },
        {
          Asset: "FUR",
        },
      ],
      mtableData: [],
      user_info: {}, // user info
      market_info: {}, // market info
      token_info: {},
      tokens: {}, // token addresses & contracts
      markets: {}, // market addresses & contracts
      manager: {},
      priceOracle: {},
      action: "Supply",
      interact_amount: "",
      is_collateral: false,
      collateralize: false,
      active: 0,
      searchKey: "",
      error: "",
      dialogue_info: DialogInfo,
      multicall: multicall,
    };
  },
  async mounted() {
    setTimeout(async () => {
      this.priceOracle = await initPriceOracle();
      this.manager = await initManagerContract();

      console.time();
      let symbols = [];
      for (let symbol in token_list) {
        this.tokens[symbol] = await initTokenContract(symbol);
        this.markets[symbol] = await initMarketContract(symbol);
        symbols.push(symbol);
      }
      await this.updateAll(symbols);
      console.timeEnd();

      this.active = 1;
      this.loading1 = false;
    }, 1000);
    if (!this.searchKey) {
      this.mtableData = this.tableData;
    }
  },
  methods: {
    decimals(symbol) {
      return symbol ? token_list[symbol].decimals : 18;
    },
    async initInteraction(symbol, action) {
      this.action = action;

      this.token_info = token_list[symbol];
      this.token_info.symbol = symbol;
    },
    async writeMax() {
      await this.updateAll([this.symbol]);

      switch (this.action) {
        case "Supply":
          if (this.user_info[this.symbol].token_balance == 0) {
            this.errorMessage(`No ${this.symbol} in wallet`);
          } else {
            const decimals =
              this.token_info.decimals > 8 ? 8 : this.token_info.decimals;
            this.interact_amount = parseFloat(
              fromWei(
                this.user_info[this.symbol].token_balance,
                this.token_info.decimals
              )
            ).toFixed(decimals);
            if (this.symbol == "ETH") {
              this.interact_amount = (this.interact_amount - 0.001).toFixed(8);
            }
          }
          break;
        case "Withdraw":
          if (this.user_info[this.symbol].withdraw_quota == 0) {
            this.errorMessage("No withdraw quota");
          } else {
            const decimals =
              this.token_info.decimals > 8 ? 8 : this.token_info.decimals;
            this.interact_amount = parseFloat(
              fromWei(
                this.user_info[this.symbol].withdraw_quota,
                this.token_info.decimals
              )
            ).toFixed(decimals);
          }
          break;
        case "Borrow":
          if (this.user_info[this.symbol].borrow_quota == 0) {
            this.errorMessage("No borrow quota");
          } else {
            const decimals =
              this.token_info.decimals > 8 ? 8 : this.token_info.decimals;
            this.interact_amount = parseFloat(
              fromWei(
                this.user_info[this.symbol].borrow_quota,
                this.token_info.decimals
              )
            ).toFixed(decimals);
          }
          break;
        case "Repay":
          if (this.user_info[this.symbol].borrowed == 0) {
            this.errorMessage("No outstanding borrowings");
          } else {
            const decimals =
              this.token_info.decimals > 8 ? 8 : this.token_info.decimals;
            this.interact_amount = parseFloat(
              fromWei(
                this.user_info[this.symbol].borrowed,
                this.token_info.decimals
              )
            ).toFixed(decimals);
          }
          break;
      }
    },
    async execute() {
      switch (this.action) {
        case "Supply":
          await this.supply();
          break;
        case "Withdraw":
          await this.withdraw();
          break;
        case "Borrow":
          await this.borrow();
          break;
        case "Repay":
          await this.repay();
          break;
      }
    },
    disableBtn() {
      if (
        this.interact_amount == "" ||
        this.interact_amount == 0 ||
        this.interact_amount[0] == "."
      ) {
        return true;
      }

      switch (this.action) {
        case "Repay":
        case "Supply":
          if (
            _compareInt(
              this.compareFormat(
                this.interact_amount,
                this.token_info.decimals
              ),
              this.user_info[this.symbol].token_balance
            ) == "larger"
          ) {
            this.error = "Insufficient balance";
            return true;
          } else {
            this.error = "";
            return false;
          }
        case "Withdraw":
          if (
            _compareInt(
              this.compareFormat(
                this.interact_amount,
                this.token_info.decimals
              ),
              this.user_info[this.symbol].withdraw_quota
            ) == "larger" ||
            _compareInt(
              this.compareFormat(
                this.interact_amount,
                this.token_info.decimals
              ),
              this.user_info[this.symbol].supplied
            ) == "larger"
          ) {
            this.error = "Quota exceeded";
            return true;
          } else {
            this.error = "";
            return false;
          }
        case "Borrow":
          if (
            _compareInt(
              this.compareFormat(
                this.interact_amount,
                this.token_info.decimals
              ),
              this.user_info[this.symbol].borrow_quota
            ) == "larger" ||
            _compareInt(
              this.compareFormat(
                this.interact_amount,
                this.token_info.decimals
              ),
              this.market_info[this.symbol].cash
            ) == "larger"
          ) {
            this.error = "Quota exceeded";
            return true;
          } else {
            this.error = "";
            return false;
          }
      }
    },

    /********************************* State management *********************************/

    async updateAll(symbols) {
      const account = this.userInfo.userAddress;
      let multicall_list = [];
      for (let symbol of symbols) {
        let temp = [
          // Market info
          this.markets[symbol].contract.methods.supplyRatePerBlock(),
          this.markets[symbol].contract.methods.borrowRatePerBlock(),
          this.priceOracle.contract.methods.getUnderlyingPrice(
            this.markets[symbol].address
          ),
          this.markets[symbol].contract.methods.totalCash(),
          this.markets[symbol].contract.methods.totalReserves(),
          this.markets[symbol].contract.methods.totalBorrowsCurrent(),
          this.manager.contract.methods.markets(this.markets[symbol].address),
          this.manager.contract.methods.checkMembership(
            account,
            this.markets[symbol].address
          ),
          // User info
          this.markets[symbol].contract.methods.balanceOf(account),
          this.markets[symbol].contract.methods.balanceOfUnderlying(account),
          this.markets[symbol].contract.methods.borrowBalanceCurrent(account),
          this.manager.contract.methods.getAccountLiquidity(account),
        ];

        multicall_list = [...multicall_list, ...temp];
        if (symbol != "ETH") {
          multicall_list.push(
            this.tokens[symbol].contract.methods.balanceOf(account)
          );
        }
      }
      const results = await this.multicall.aggregate(multicall_list);

      let i = 0;
      for (let symbol of symbols) {
        this.$set(this.market_info, symbol, {});
        this.$set(this.user_info, symbol, {});

        // Number of blocks assumed per year in interest rate contract: 2102400
        const supplyRatePerBlock = results[i];
        i++;
        this.market_info[symbol].supply_rate =
          supplyRatePerBlock * 2102400 * 100;
        const borrowRatePerBlock = results[i];
        i++;
        this.market_info[symbol].borrow_rate =
          borrowRatePerBlock * 2102400 * 100;
        this.market_info[symbol].token_price = results[i][0];
        i++;
        this.market_info[symbol].cash = results[i];
        i++;
        this.market_info[symbol].reserve = results[i];
        i++;
        this.market_info[symbol].borrowed = results[i];
        this.market_info[symbol].supplied =
          parseInt(results[i - 2]) +
          parseInt(results[i]) -
          parseInt(results[i - 1]); // cash + borrow - reserve
        i++;
        this.market_info[symbol].tier = results[i][2].toString(); // [isListed, collateral factor mantissa, tier]
        i++;
        this.market_info[symbol].is_collateral = results[i];
        i++;

        this.user_info[symbol].ftoken_balance = results[i];
        i++;
        this.user_info[symbol].supplied = results[i];
        i++;
        this.user_info[symbol].borrowed = results[i];
        i++;

        if (results[i]["1"] > 0) {
          // results[3]["1"]: shortfall
          this.user_info[symbol].borrow_quota = 0;
          this.user_info[symbol].withdraw_quota = 0;
          i++;
        } else {
          let tempLiquidity = 0;

          for (let j = 0; j < this.market_info[symbol].tier; j++) {
            const liquidityValue = results[i]["0"][j]; // results[3]["0"]: liquidities array
            const tokenEquivalent =
              liquidityValue / this.market_info[symbol].token_price;
            tempLiquidity += parseInt(
              toWei(tokenEquivalent, token_list[symbol].decimals)
            );
          }
          this.user_info[symbol].borrow_quota =
            _compareInt(
              tempLiquidity.toString(),
              this.market_info[symbol].cash
            ) == "larger"
              ? this.market_info[symbol].cash
              : tempLiquidity.toString();
          this.user_info[symbol].withdraw_quota =
            _compareInt(
              tempLiquidity.toString(),
              this.user_info[symbol].supplied
            ) == "larger"
              ? this.user_info.supplied
              : tempLiquidity.toString();
          i++;
        }

        if (symbol != "ETH") {
          this.user_info[symbol].token_balance = results[i];
          i++;
        } else {
          this.user_info[symbol].token_balance = await getNativeTokenAmountRaw(
            account
          );
        }
      }
    },

    /***************************** Allowance & balance checks *****************************/

    async approvedEnoughToken(amount) {
      const account = this.userInfo.userAddress;

      const allowance = await this.tokens[this.symbol].contract.methods
        .allowance(account, this.markets[this.symbol].address)
        .call();

      return _compareInt(allowance, amount) != "smaller" ? true : false;
    },

    /********************************* Contract functions *********************************/

    async borrow() {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(
        this.interact_amount,
        this.token_info.decimals
      );

      openDialog(this.dialogue_info, [ProcessInfo.BORROW_TOKEN]);

      try {
        const tx_result = await this.markets[this.symbol].contract.methods
          .borrow(actualAmount)
          .send({ from: account });
        this.successMessage(tx_result, `Borrow ${this.symbol} succeeded`);
      } catch (e) {
        this.errorMessage(`Borrow ${this.symbol} failed`);
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
      await this.updateAll([this.symbol]);
    },
    async repay() {
      const account = this.userInfo.userAddress;
      let actualAmount = toWei(this.interact_amount, this.token_info.decimals);
      let approvedEnoughToken;

      let dialog_list = [];
      if (this.symbol != "ETH") {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      dialog_list.push(ProcessInfo.REPAY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (this.symbol != "ETH") {
        if (!approvedEnoughToken) {
          try {
            const approve_result = await tokenApprove(
              this.tokens[this.symbol].address,
              account,
              this.markets[this.symbol].address
            );
            this.successMessage(
              approve_result,
              `Approve ${this.symbol} succeeded`
            );
            stepDialog(this.dialogue_info);
          } catch (e) {
            this.errorMessage(`Approve ${this.symbol} failed`);
            console.warn(e);
            closeDialog(this.dialogue_info);
            this.dialog = false;
            return;
          }
        }
      }

      try {
        let tx_result;
        if (this.symbol != "ETH") {
          tx_result = await this.markets[this.symbol].contract.methods
            .repayBorrow(actualAmount)
            .send({ from: account });
        } else {
          tx_result = await this.markets[this.symbol].contract.methods
            .repayBorrow()
            .send({ from: account, value: actualAmount });
        }
        this.successMessage(tx_result, `Repay ${this.symbol} succeeded`);
      } catch (e) {
        this.errorMessage(`Repay ${this.symbol} failed`);
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
      await this.updateAll([this.symbol]);
    },
    async supply() {
      const account = this.userInfo.userAddress;
      const actualAmount = toWei(
        this.interact_amount,
        this.token_info.decimals
      );
      let approvedEnoughToken;

      let dialog_list = [];

      if (this.symbol != "ETH") {
        approvedEnoughToken = await this.approvedEnoughToken(actualAmount);
        if (!approvedEnoughToken) {
          dialog_list.push(ProcessInfo.APPROVE_TOKEN);
        }
      }
      /*
      if (this.collateralize && !this.is_collateral) {
        dialog_list.push(ProcessInfo.ENTER_MARKET);
      }
      */
      dialog_list.push(ProcessInfo.SUPPLY_TOKEN);
      openDialog(this.dialogue_info, dialog_list);

      if (this.symbol != "ETH") {
        if (!approvedEnoughToken) {
          try {
            const approve_result = await tokenApprove(
              this.tokens[this.symbol].address,
              account,
              this.markets[this.symbol].address
            );
            this.successMessage(
              approve_result,
              `Approve ${this.symbol} succeeded`
            );
            stepDialog(this.dialogue_info);
          } catch (e) {
            this.errorMessage(`Approve ${this.symbol} failed`);
            console.warn(e);
            closeDialog(this.dialogue_info);
            this.dialog = false;
            return;
          }
        }
      }
      /*
      if (this.collateralize && !this.is_collateral) {
        try {
          const tx_result = await this.manager.contract.methods
            .enterMarkets([this.market.address])
            .send({ from: account });
          this.successMessage(
            tx_result,
            `Enter ${this.token_info.symbol} market succeeded`
          );
          stepDialog(this.dialogue_info);
        } catch (e) {
          this.errorMessage(`Enter ${this.token_info.symbol} market failed`);
          closeDialog(this.dialogue_info);
          return;
        }
      }
      */

      try {
        let tx_result;
        if (this.symbol != "ETH") {
          tx_result = await this.markets[this.symbol].contract.methods
            .supply(actualAmount)
            .send({ from: account });
        } else {
          tx_result = await this.markets[this.symbol].contract.methods
            .supply()
            .send({ from: account, value: actualAmount });
        }
        this.successMessage(tx_result, `Supply ${this.symbol} succeeded`);
      } catch (e) {
        console.warn(e);
        this.errorMessage(`Supply ${this.symbol} failed`);
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
      await this.updateAll([this.symbol]);
      console.log("updated");
    },
    async withdraw() {
      const account = this.userInfo.userAddress;
      let actualAmount = toWei(this.interact_amount, this.token_info.decimals);

      openDialog(this.dialogue_info, [ProcessInfo.WITHDRAW_TOKEN]);

      try {
        const tx_result = await this.markets[this.symbol].contract.methods
          .redeemUnderlying(actualAmount)
          .send({ from: account });
        this.successMessage(tx_result, `Withdraw ${this.symbol} succeeded`);
      } catch (e) {
        this.errorMessage(`Withdraw ${this.symbol} failed`);
      }

      closeDialog(this.dialogue_info);
      this.dialog = false;
      this.interact_amount = "";
      await this.updateAll([this.symbol]);
    },
    successMessage(receipt, title) {
      // receipt是交易块的详细信息
      const txURL = getTxURL(receipt.transactionHash);
      //txURL :<a href="https://rinkeby.etherscan.io/tx/0xe34eefe362b89f8032c0375267505b62e6b1f84df11dd1e2a4bc793c60d927c2" style="color: blue" target="blank">View on Explorer</a>
      // 弹出小窗口
      this.$notify({
        title: title,
        dangerouslyUseHTMLString: true,
        message: txURL,
        type: "success",
      });
    },
    errorMessage(title) {
      this.$notify.error({
        title: title,
        message: "",
        dangerouslyUseHTMLString: true,
      });
    },
    formatNumber(value, fixed = 2) {
      let reserve = value - parseInt(value);
      let final_result;
      if (value - reserve < 1) {
        final_result = "0" + reserve.toFixed(fixed).toString().substr(1);
      } else {
        final_result =
          _formatNumber(value).split(".")[0] +
          reserve.toFixed(fixed).toString().substr(1);
      }
      if (final_result[0] == "-" || final_result[0] == "N") {
        final_result = "--";
      }
      return final_result;
    },
    approxValue(symbol, tokenAmount) {
      const actualAmount = tokenAmount == "" ? 0 : tokenAmount;
      return symbol ? this.market_info[symbol].token_price * actualAmount : 0;
    },
    displayFormat(amount, decimal = 18, fixed = 0) {
      if (!amount) {
        return 0;
      }
      return this.formatNumber(fromWei(amount, decimal), fixed);
    },
    compareFormat(amount, decimal) {
      const actualAmount =
        amount == "" ? 0 : parseFloat(amount).toFixed(decimal);
      return toWei(actualAmount, decimal);
    },
    handleSearch(event) {
      this.mtableData = [];
      console.log(event);
      if (event == "") {
        this.mtableData = this.tableData;
      }
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.searchKey.toUpperCase().includes(this.tableData[i].Asset)) {
          if (this.mtableData.indexOf(this.tableData[i]) == -1) {
            this.mtableData.push(this.tableData[i]);
          }
        }
      }
    },
  },
};
</script>
