<style lang="scss" scoped>
.chart {
  height: 350px;
}

.chart-title {
  width: 100%;
  color: #202425;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
}
</style>
<template>
  <div>
    <div class="chart-title flex mb-20px">
      <div class="ml-30px">
        <div class="mb-8px">
          <span class="mr-20px text-[#FCFFFD] text-32px font-700">{{ num }}</span>
          <span class="text-16px font-700 text-[rgba(252,255,253,0.6)]">{{ token_0 }}&nbsp;/&nbsp;{{ token_1 }}</span>
          <span :class="{
            'text-[#5DB57D]': change.startsWith('+'),
            'text-[#D35D64]': change.startsWith('-')
          }" class="text-16px font-700">&nbsp;{{ change }}({{ change_percentage }}%)</span>
        </div>
        <p class="text-[rgba(252,255,253,0.8)] text-13px font-600">{{ date_str }}</p>
      </div>
      <Date-Selector class="date-selector" :class="{ '!top-80px': isMobile }" :time.sync="timeBtn"
        @changeTime="setData"></Date-Selector>
    </div>

    <v-chart ref="vChart" autoresize class="chart" :option="option" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getPriceInfo } from '@/config/furion_swap/swap';

import moment from "moment";

export default {
  name: 'FurionSwapPrice',
  components: {},
  provide: {},
  props: ["token_0", "token_1"],
  data() {
    return {
      num: 6.8899,
      date_str: '',
      change: '+0.01',
      change_percentage: '+0.01',
      price_data: [],
      timeBtn: '1W',
      activeBtn2: 'Market Cap',
      dataList: [],
      valueList: [],
      options1: ['24H', '1W', '1M'],
      price_array: [],
      date_array: []
    };
  },
  computed: {
    ...mapState('admin', ['isMobile']),
    ...mapState(['chainId']),
    colorMap() {
      return {
        green: {
          main: '#02AD6C',
          other: '#FF3E57',
          deep: '#C1E7D8',
          bottom: 'rgba(236,245,241,0)',
        },
        red: {
          main: '#ED5959',
          other: '#ED5959',
          deep: 'rgba(255, 155, 155, 0.4)',
          bottom: 'rgba(10, 25, 58, 0)',
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
            left: 'center',
          },
        ],
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#1F1F41',
          className: 'chart-tooltip-wrap',
          textStyle: {
            color: '#fff',
          },
          formatter: params => {
            // console.log(params);
            const num = params[0].data;
            this.getNum(num);
          },
        },
        xAxis: {
          show: true,
          data: this.date_array,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 5,
            fontSize: '14px',
            color: 'rgba(252, 255, 253, 0.3)',
            margin: -14,
            align: 'center',
          },
        },
        yAxis: {
          show: false,
          axisLabel: {
            color: '#BCC6DA',
            verticalAlign: 'bottom',
          },
        },
        grid: {
          top: '10%',
          left: '0%',
          right: '2%',
          bottom: '0%',
          containLabel: true,
        },
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: this.valueList,
            smooth: false,
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
  async mounted() {
    this.$refs.vChart.clear();
    this.getDate();

    await this.initPriceInfo(this.token_0, this.token_1, 2);

    this.formatData(this.price_array);
    this.$refs.vChart.setOption(this.option, true);
  },
  methods: {
    async initPriceInfo(token_0, token_1, frequency) {
      // initialize price data and price info
      this.price_data = await getPriceInfo(token_0, token_1, frequency, 4);

      let old_price = this.price_data[0]['price'];
      let new_price = this.price_data[this.price_data.length - 1]['price'];
      if (new_price > old_price) {
        this.change = '+' + (new_price - old_price).toFixed(4);
        this.change_percentage = '+' + ((new_price - old_price) / old_price * 100).toFixed(2);
      } else {
        this.change = '-' + (old_price - new_price).toFixed(4);
        this.change_percentage = '-' + ((old_price - new_price) / old_price * 100).toFixed(2);
      }
      this.num = new_price.toFixed(8);
      this.priceToData();
    },
    formatData(data) {
      // console.log('Raw data', data)
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
      this.num = num.toFixed(8);
    },
    getDate() {
      const date_now = moment().format('MMMM Do YYYY, h:mm:ss a');
      this.date_str = date_now;
    },

    priceToData() {
      let raw_data = this.price_data;
      let result = [];
      let date_array = [];
      for (let i = 0; i < raw_data.length; i++) {
        result.push([raw_data[i]['block_time'], raw_data[i]['price']]);
        if (this.timeBtn == '1W') {
          date_array.push(moment(raw_data[i]['block_time']).format('h:mm:ss'));
        }

      }
      this.price_array = result;
      this.date_array = date_array;
      // console.log('After getting price', this.price_array)
    }
  },
};
</script>
