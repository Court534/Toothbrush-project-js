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

// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();