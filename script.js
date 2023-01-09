const api_url = "https://jsfge6apa6.execute-api.us-east-1.amazonaws.com/api";

async function getAPI() {
  const response = await fetch(api_url);
  const data = await response.json();

  document.getElementById("ft").textContent = JSON.stringify(data.full_total);
  document.getElementById("total_sold_brushes").textContent = JSON.stringify(data.total_sold_brushes);
  document.getElementById("type_total").textContent = JSON.stringify(data.type_total);
  document.getElementById("top_postcodes").textContent = JSON.stringify(data.top_postcodes);
  // document.getElementById("ages").textContent = JSON.stringify((data.ages));
  // document.getElementById("delivery_status").textContent = JSON.stringify(data.delivery_status);
  // document.getElementById("dispatch_status").textContent = JSON.stringify(data.dispatch_status);
  // document.getElementById("orders_by_day").textContent = JSON.stringify(data.orders_by_day);
  // document.getElementById("orders_by_month").textContent = JSON.stringify(data.orders_by_month);
  // document.getElementById("orders_by_year").textContent = JSON.stringify(data.orders_by_year);
  // document.getElementById("bill_match_deliv").textContent = JSON.stringify(data.bill_match_deliv);
  
  console.log(data);
  console.log(data.ages);
  console.log(data.top_postcodes);
  console.log(data.full_total);
  console.log(data.delivery_status);
//   console.log(Object.keys(data));


}
  
  getAPI();

// Charts Section

// Bar Chart
var options = {
  series: [{
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    borderRadius: 4,
    horizontal: true,
  }
},
dataLabels: {
  enabled: false
},
xaxis: {
  categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
    'United States', 'China', 'Germany'
  ],
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

