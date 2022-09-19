<style lang="scss" scoped>
.chart {
  height: 260px;
}
.chart-title {
  width: 100%;
  color: #202425;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  height: 68px;
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.4) 9.21%,
    rgba(51, 53, 114, 0.5) 95.15%
  );
  border-radius: 12px;
}
.date-selector {
  position: relative;
  right: 25px;
}
.box {
  background: linear-gradient(
    180deg,
    rgba(51, 53, 114, 0.16) 0%,
    rgba(51, 53, 114, 0.2) 100%
  );
  border-radius: 20px;
}
</style>
<template>
  <div class="box p-10px h-380px">
    <div class="box-top mb-24px">
      <div class="chart-title">
        <div class="flex mb-10px h-full items-center pl-22px justify-between">
          <div class="flex items-center">
            <span class="text-[#C3C6CD] text-16px mr-10px font-700">Volume 24H</span>
            <span class="mr-10px text-[#FCFFFD] text-32px font-700">${{ num }}b</span>
          </div>
          <Date-Selector
            class="date-selector"
            :time.sync="timeBtn"
            @changeTime="setData"
          ></Date-Selector>
        </div>
      </div>
    </div>

    <v-chart ref="vChart" autoresize class="chart" :option="option" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { rowData, xTime } from "@/assets/chartData4.js";

export default {
  name: "PoolsMarketCaps",
  components: {},
  provide: {},
  props: {},
  data() {
    return {
      num: 12.98,
      timeBtn: "1M",
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
      let interval = 10;
      if (this.timeBtn === "24H") {
        interval = 30;
      } else if (this.timeBtn === "1W") {
        interval = 20;
      } else if (this.timeBtn === "1W") {
        interval = 10;
      } else if (this.timeBtn === "1Y") {
        interval = 10;
      }
      // console.log(interval);
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
            show: false,
          },
          axisLabel: {
            interval,
            fontSize: "14px",
            color: "rgba(252, 255, 253, 0.3)",
            margin: 10,
            align: "left",
          },
        },
        yAxis: {
          show: false,
        },
        grid: {
          top: "4%",
          left: "0%",
          right: "8%",
          bottom: "0%",
          containLabel: true,
        },
        series: [
          {
            type: "bar",
            showSymbol: false,
            data: this.valueList,
            smooth: true,
            barCategoryGap: "0%",
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
