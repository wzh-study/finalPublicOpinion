<template>
    <div class="DashBoard">
      <div class="left-container">
        <div class="stats">
        <div class="stat-group">
          <div class="stat">
            <div>声量</div>
            <div>{{ volume }} <span class="arrow down"></span></div>
          </div>
          <div class="stat">
            <div>敌意声量</div>
            <div>{{ fraudVolume }} ({{ fraudVolumePercentage }}%) <span class="arrow down"></span></div>
          </div>
          <div class="stat">
            <div>用户数</div>
            <div>{{ users }} <span class="arrow up"></span></div>
          </div>
          <div class="stat">
            <div>敌意用户数</div>
            <div>{{ fraudUsers }} ({{ fraudUsersPercentage }}%) <span class="arrow down"></span></div>
          </div>
        </div>
      </div>
      <div class="select-container">
        <div class="select-wrapper">
          <select v-model="selectedPlatform" @change="updateIcon" class="select">
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="youtube">YouTube</option>
            <option value="weibo">微博</option>
          </select>
          <div class="custom-arrow"></div>
        </div>
        <img :src="icon" alt="Platform Icon" v-if="icon"/>
      </div>
      </div>
      <div class="chart-container">
        <div class="chart-header">
          <strong>声量趋势</strong>
          <label>
            <input type="checkbox" v-model="compareLastWeek"> 对比上一周期
          </label>
          <span>本周期 {{ currentPeriod }}</span>
          <span>上周期 {{ lastPeriod }}</span>
        </div>
        <canvas id="trendChart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        volume: 38875,
        fraudVolume: 10686,
        fraudVolumePercentage: 35,
        users: 26483,
        fraudUsers: 11657,
        fraudUsersPercentage: 42,
        currentPeriod: '2024-08-15 ~ 08-28',
        lastPeriod: '2024-08-01 ~ 08-14',
        compareLastWeek: false,
        chart: null,
        selectedPlatform: 'facebook',
        icon: ''
      };
    },
    mounted() {
      this.createChart();
      this.updateIcon();
      
    },
    watch: {
      compareLastWeek() {
        this.updateChart();
      },
    },
    methods: {
      updateIcon() {
          const icons = {
            facebook: require('../../assets/overview/facebook.png'),
            twitter: require('../../assets/overview/twitter.png'),
            youtube: require('../../assets/overview/youtube.png'),
            weibo: require('../../assets/overview/weibo.png')
          };
          this.icon = icons[this.selectedPlatform];
        },
      createChart() {
        const ctx = document.getElementById('trendChart').getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 14 }, (_, i) => `-${14 - i}`),
            datasets: [
              { label: '本周期声量', data: this.generateRandomData(), borderColor: '#3f51b5', fill: false, tension: 0.4 },
              { label: '本周期用户数', data: this.generateRandomData(), borderColor: '#ff9800', fill: false, tension: 0.4 },
              { label: '上周期声量', data: this.generateRandomData(), borderColor: '#f44336', fill: false, tension: 0.4, hidden: !this.compareLastWeek },
              { label: '上周期用户数', data: this.generateRandomData(), borderColor: '#4caf50', fill: false, tension: 0.4, hidden: !this.compareLastWeek }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                ticks: {
                  display: false
                },
                grid: {
                  display: true
                }
              }
            }
          }
        });
      },
      updateChart() {
        if (this.chart) {
          this.chart.data.datasets[2].hidden = !this.compareLastWeek;
          this.chart.data.datasets[3].hidden = !this.compareLastWeek;
          this.chart.update();
        }
      },
      generateRandomData() {
        return Array.from({ length: 14 }, () => Math.floor(Math.random() * 50));
      }
    }
  };
  </script>
  
  <style>
  .DashBoard {
    display: flex;
    flex-direction: row;
    height: 100vh;
    /* justify-content: space-between; */
    /* align-items: flex-end; */
    /* height: 100%; */
    padding: 20px;
    /* background-color: #f9f9f9; */
    border-radius: 8px;
    margin-left: 150px;
    margin-right: 30px;
  }
  .stats {
    /* display: flex; */
    /* align-self: flex-start; */
    /* flex: 0 0 30%; */
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .select-container {
      display: flex;
      /* align-self: flex-start; */
      /* align-items: center; */
      /* flex: 0 0 20%; */
      background-color: #ffffff;
      padding: 15px;
      border-radius: 8px;
      margin-right: 20px;
    }
  .chart-container {
    /* flex-grow: 1; */
    /* align-self: flex-end; */
    flex: 1;
    background-color: #fff;
    padding: 10px;
    padding-bottom: 30px;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    /* width: 150px; */
    height: 200px;
    /* outline: none; */
  }
  .stat-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }
  .stat {
    padding: 10px;
    text-align: center;
  }
  .arrow {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    margin-left: 5px;
  }
  .arrow.up {
    border-width: 0 6px 10px 6px;
    border-color: transparent transparent red transparent;
  }
  .arrow.down {
    border-width: 10px 6px 0 6px;
    border-color: rgb(0, 255, 102) transparent transparent transparent;
  }
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 10px; */
  }
  .chart-header strong {
    font-size: 16px;
  }
  .chart-header span {
    font-size: 14px;
  }
  select {
      width: 100%;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      appearance: none;
      padding-right: 30px;
      outline: none;
    }
  
  .select-wrapper {
      position: relative;
      width: 300px;
    }
  .custom-arrow {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #009dff;
      pointer-events: none;
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin-left: 10px;
    }
  </style>