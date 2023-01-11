const api_url = "https://jsfge6apa6.execute-api.us-east-1.amazonaws.com/api";

async function getAPI() {
  const response = await fetch(api_url);
  const data = await response.json();
  
  
  var ft = document.getElementById("ft").textContent = JSON.stringify(data.full_total);
  document.getElementById("total_sold_brushes").textContent = JSON.stringify(data.total_sold_brushes);
  document.getElementById("bill_match_deliv").textContent = JSON.stringify(data.bill_match_deliv);
  document.getElementById("delivery_status_delivered").textContent = JSON.stringify(data.delivery_status.Delivered);
  document.getElementById("delivery_status_unsuccessful").textContent = JSON.stringify(data.delivery_status.Unsuccessful);
  document.getElementById("dispatch_status_dispatched").textContent = JSON.stringify(data.dispatch_status.Dispatched);
  // document.getElementById("top_postcodes").textContent = JSON.stringify(data.top_postcodes);
  // document.getElementById("type_total").textContent = JSON.stringify(data.type_total);
  // document.getElementById("ages").textContent = JSON.stringify((data.ages)); <=== Data too large
  // document.getElementById("orders_by_day").textContent = JSON.stringify(data.orders_by_day);
  // document.getElementById("orders_by_month").textContent = JSON.stringify(data.orders_by_month);
  // document.getElementById("orders_by_year").textContent = JSON.stringify(data.orders_by_year);
  
  console.log(data.ages);
  // console.log(data.orders_by_month);
  // console.log(data.ages);
  // console.log(data.top_postcodes);
  // console.log(type_total.split(",")[0]);

  // var type_total_ammount = type_total.split(",")[0].split(":")[1].replace(/"/g, '');
  // .split(":")[1].replace(/"/g, ''));
  // console.log(data.delivery_status);
  // console.log(data);


}
  
  getAPI();

