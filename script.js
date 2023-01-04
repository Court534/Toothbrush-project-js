const api_url = "https://jsfge6apa6.execute-api.us-east-1.amazonaws.com/api";

async function getAPI() {
  const response = await fetch(api_url);
  const data = await response.json();

  document.getElementById("dt").textContent = JSON.stringify(data);
  document.getElementById("ages").textContent = JSON.stringify(data.ages);
  document.getElementById("ft").textContent = JSON.stringify(data.full_total);
  document.getElementById("total_sold_brushes").textContent = JSON.stringify(data.total_sold_brushes);
  document.getElementById("type_total").textContent = JSON.stringify(data.type_total);
  document.getElementById("delivery_status").textContent = JSON.stringify(data.delivery_status);
  
  console.log(data);
  console.log(data.ages);
  console.log(data.top_postcodes);
  console.log(data.full_total);
  console.log(Object.keys(data));
}
  
  getAPI();