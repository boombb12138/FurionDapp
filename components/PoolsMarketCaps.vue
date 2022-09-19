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
          <span class="mr-10px text-[#FCFFFD] text-32px font-700">${{ num }}b</span>
          <span class="text-16px font-700 text-[#5DD393]">+1.77%</span>
        </div>
        <p class="text-[rgba(252,255,253,0.8)] text-13px font-600">
          8 September 2022.09:00AM
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
import { rowData, xTime } from "@/assets/chartData.js";

export default {
  name: "PoolsMarketCaps",
  components: {},
  provide: {},
  props: {},
  data() {
    return {
      num: 58.9,
      timeBtn: "1W",
      activeBtn2: "Market Cap",
      dataList: [],
      valueList: [],
      options1: ["24H", "1W", "1M", "1Y"],
    };
  },
  computed: {
    ...mapState("admin", ['connectStatus']),
    dataArr() {
      return rowData[this.activeBtn2][this.timeBtn];
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
        visualMap: [
          {
            show: false,
            dimension: 1,
            pieces: [
              { min: 0, max: 100, color: this.colorMap.red.other },
              { min: 100, max: 400, color: this.colorMap.red.main },
            ],
          },
        ],
        title: [
          {
            left: "center",
          },
        ],
        tooltip: {
          trigger: "axis",
          backgroundColor: "#1F1F41",
          className: "chart-tooltip-wrap",
          textStyle: {
            color: "#fff",
          },
          formatter: (params) => {
            // console.log(params);
            const num = params[0].data;
            this.getNum(num);
          },
        },
        xAxis: {
          show: true,
          data: xTime[this.timeBtn],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(250, 107, 225, .4)",
              type: "dashed",
            },
          },
          axisLabel: {
            interval: 5,
            fontSize: "14px",
            color: "rgba(252, 255, 253, 0.3)",
            margin: 10,
            align: "left",
          },
        },
        yAxis: {
          show: true,
          position: "right",
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "#BCC6DA",
            verticalAlign: "bottom",
            formatter: "${value}b",
          },
        },
        grid: {
          top: "20px",
          left: "4%",
          right: "1%",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            type: "line",
            showSymbol: false,
            data: this.valueList,
            smooth: true,
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: this.colorMap.red.deep, // 0%处的颜色
                  },
                  {
                    offset: 1,
                    color: this.colorMap.red.bottom, // 100% 处的颜色
                  },
                ],
                globalCoord: false,
              },
            },
          },
        ],
      };
    },
  },
  mounted() {
    this.$refs.vChart.clear();
    this.formatData(this.dataArr);
    this.$refs.vChart.setOption(this.option, true);
  },
  methods: {
    formatData(data) {
      this.dateList = data.map(function (item) {
        return item[0];
      });
      this.valueList = data.map(function (item) {
        return item[1];
      });
    },
    setData(type) {
      // this.activeBtn1 = type;
      this.$refs.vChart.clear();
      this.formatData(this.dataArr);
      this.$refs.vChart.setOption(this.option, true);
    },
    getNum(num) {
      this.num = num;
    },
  },
};
</script>
