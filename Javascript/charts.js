// Charts Section

// Bar Chart

var barChartOptions = {
  series: [{
  name: 'Number of Sales',
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
    columnWidth: '60%',
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
  name: 'Number of Brushes Sold',
  data: [8413, 14776, 4325, 3145, 3095, 3139, 3185]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar: {
    show: false
  }
},
colors: [
  '#008000',
  '#008000',
  '#008000',
  '#008000',
  '#008000',
  '#008000',
  '#008000',
  
],
plotOptions: {
  bar: {
    distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth: '60%',
  }
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
xaxis: {
  categories: ['Under 15','15-24', '25-34', '35-44', '45-54', '55-64', '65+'],
},
yaxis: {
  title: {
    text: "Number of brushes sold"
  }
},
};

var barChart = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions);
barChart.render();


// Pie Charts

var options = {
  series: [4795, 2732, 3330, 2920, 3101, 3032, 3064, 3205, 3110, 3210, 2837, 4614],
  chart: {
  width: 600,
  type: 'pie',
},
colors: ['#ff0000', '#001bea', '#e3ea00', '#46ea00', '#00eaa8', '#000000', '#a9a9a9', '#3cb44b', '#ffd8b1', '#808000', '#ea5200', '#ea00e6'],
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var pieChart = new ApexCharts(document.querySelector("#piechart"), options);
pieChart.render();

var options = {
  series: [8413, 14776, 4325, 3145, 3095, 3139, 3185],
  chart: {
  width: 600,
  type: 'pie',
},
colors: ['#ff0000', '#001bea', '#e3ea00', '#46ea00', '#00eaa8', '#ea00e6', '#ea5200'],
labels: ['Under 15','15-24', '25-34', '35-44', '45-54', '55-64', '65+'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var pieChart = new ApexCharts(document.querySelector("#piechart-2"), options);
pieChart.render();