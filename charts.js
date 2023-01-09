// Charts Section

// Bar Chart
var barChartOptions = {
  series: [{
  data: [4795, 2732, 3330, 2920, 3101, 3032, 3064, 3205, 3110, 3210, 2837, 4614]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar: {
    show: false
  }
},
colors: [
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
],
plotOptions: {
  bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth: '40%',
  }
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
xaxis: {
  categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
},
yaxis: {
  title: {
    text: "Number of sales"
  }
},
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// Bar Chart 2
var barChartOptions = {
  series: [{
  data: [12748, 10313, 4325, 3145, 3095, 3139, 3185]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar: {
    show: false
  }
},
colors: [
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
  '#1b55e2',
],
plotOptions: {
  bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth: '40%',
  }
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
xaxis: {
  categories: ['Under 18','18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
},
yaxis: {
  title: {
    text: "Number of sales"
  }
},
};

var barChart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
barChart.render();