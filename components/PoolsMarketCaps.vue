<style lang="scss" scoped>
.chart {
  height: 230px;
}
.chart-title {
  width: 100%;
  color: #202425;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
}
.date-selector {
  position: relative;
  top: -72px;
  right: 25px;
}
</style>
<template>
  <div>
    <div class="chart-title flex mb-10px">
      <div class="ml-30px mt-5px">
        <div class="mb-5px">
          <span class="mr-10px text-[#FCFFFD] text-32px font-700"
            >${{ show(num) }}M</span
          >
          <span class="text-16px font-700 text-[#5DD393]">+1.77%</span>
        </div>
        <p class="text-[rgba(252,255,253,0.8)] text-13px font-400">
          {{ timeFormat }}
        </p>
      </div>
      <Date-Selector
        class="date-selector"
        :time.sync="timeBtn"
        @changeTime="setData"
      ></Date-Selector>
    </div>

    <v-chart ref="vChart" autoresize class="chart" :option="option" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { rowData, xTime } from "@/assets/chartData3.js";

export default {
  name: "PoolsMarketCaps",
  components: {},
  provide: {},
  props: [
    "data_24h",
    "data_1w",
    "data_1m",
    "time_list_24h",
    "time_list_1w",
    "time_list_1m",
    "time",
  ],
  data() {
    return {
      num: 12.98,
      timeBtn: "1M",
      activeBtn2: "Market Cap",
      dataList: [],
      valueList: [],
      options1: ["24H", "1W", "1M"],
    };
  },
  computed: {
    ...mapState("admin", ["connectStatus"]),
    timeArr() {
      if (this.timeBtn == "24H") {
        return this.time_list_24h;
      } else if (this.timeBtn == "1W") {
        return this.time_list_1w;
      } else if (this.timeBtn == "1M") {
        return this.time_list_1m;
      }
    },
    dataArr() {
      var arr = [];
      if (this.timeBtn == "24H") {
        arr = this.data_24h;
      } else if (this.timeBtn == "1W") {
        arr = this.data_1w;
      } else if (this.timeBtn == "1M") {
        arr = this.data_1m;
      }
      // for(let i = 0; i < arr.length; i++) {
      //   arr[i] = Math.floor((arr[i]/1000000) * 100) / 100
      // }
      return arr;
    },
    colorMap() {
      return {
        red: {
          main: "rgba(250, 107, 225, 1)",
          other: "rgba(250, 107, 225, 1)",
          deep: "rgba(10, 147, 150, 0.21)",
          bottom: "rgba(255, 255, 255, 0)",
        },
      };
    },
    option() {
      return {
        // todo visualMap
        visualMap: [
          {
            show: false,
            //  dimension ??? 1 ????????????????????????1??????????????????????????????????????????
            dimension: 1,
            pieces: [
              { min: 0, max: 100, color: this.colorMap.red.other },
              { min: 100, max: 400, color: this.colorMap.red.main },
            ],
          },
        ],
        title: [
          //????????????
          {
            left: "center", //title ??????????????????????????????
          },
        ],
        tooltip: {
          trigger: "axis",
          backgroundColor: "#1F1F41",
          className: "chart-tooltip-wrap",
          textStyle: {
            color: "#fff",
          },
          //todo  ??????????????????????????????
          formatter: (params) => {
            // console.log(params);
            const num = params[0].data;
            this.getNum(num);
          },
        },
        // ??????????????? grid ?????? x ???
        xAxis: {
          show: true,
          data: this.dataList,
          axisTick: {
            show: false, //????????????????????????
          },
          axisLine: {
            show: false, //???????????????????????????
          },
          // ????????????????????????????????????
          axisLabel: {
            interval: 5, //????????????????????????????????????
            fontSize: "14px",
            color: "rgba(252, 255, 253, 0.3)",
            margin: 10, //????????????????????????????????????
            align: "left",
          },
        },
        yAxis: {
          show: false,
        },
        //??????????????????????????????
        grid: {
          top: "4%",
          left: "0%",
          right: "8%",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            type: "line", //?????????
            showSymbol: false, //???????????? symbol, ?????? false ???????????? tooltip hover ??????????????????
            data: this.valueList,
            smooth: true, //????????????????????????
            // ??????????????????
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.colorMap.red.deep, // 0%????????????
                  },
                  {
                    offset: 1,
                    color: this.colorMap.red.bottom, // 100% ????????????
                  },
                ],
                globalCoord: false,
              },
            },
          },
        ],
      };
    },
    timeFormat() {
      let time = this.time.replace("T", " ").replace("Z", "");
      //2022-09-22 10:46:32
      const monthEnglish = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      time = time.split("");
      let month;
      if (time[5] == 0) {
        month = monthEnglish[time[6] - 1];
      } else {
        month = monthEnglish[time[6] + 9];
      }
      let date = time[8] + time[9];
      let year = time.splice(0, 4).join("");
      //2022-09-22 10:46:32
      let hourAndMin = time.slice(-8); //10:46:32
      let pmOrAm = "AM";
      let hour = hourAndMin[0] + hourAndMin[1]; //10
      if (hour > 12) {
        pmOrAm = "PM";
        hour = hourAndMin[0] + (hourAndMin[1] - 2);
      }
      let min = hourAndMin[3] + hourAndMin[4]; //46
      let timeFormatResult =
        date +
        " " +
        month +
        " " +
        year +
        "." +
        hour +
        ":" +
        min +
        pmOrAm +
        " (UTC)";
      return timeFormatResult;
    },
  },
  mounted() {
    this.$refs.vChart.clear();
    this.formatData(this.dataArr, this.timeArr);
    this.$refs.vChart.setOption(this.option, true);
  },
  methods: {
    formatData(data, time) {
      this.dataList = time.map(function (item) {
        return item;
      });
      this.valueList = data.map(function (item) {
        return item;
      });
    },
    setData(type) {
      // this.activeBtn1 = type;
      this.$refs.vChart.clear();
      this.formatData(this.dataArr, this.timeArr);
      this.$refs.vChart.setOption(this.option, true); //notMerge=true????????????????????????????????????????????? option ?????????????????????
    },
    getNum(num) {
      this.num = num;
    },
    show(num) {
      if (num > 1000000000) {
        return (num / 1000000000).toFixed(2) + "B";
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(2) + "M";
      } else if (num > 1000) {
        return (num / 1000).toFixed(2) + "K";
      } else {
        return num;
      }
    },
  },
};
</script>
