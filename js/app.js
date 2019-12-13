'use strict';
console.log('Js is working');


var hours = ['6am', '7am' , '8am', '9am' , '10am', '11am' , '12pm', '1pm' , '2pm', '3pm' , '4pm', '5pm' , '6pm', '7pm'];
var storeTable = document.getElementById('store-table');
var stores = [];
//var totalPerHour = [];

function Stores( name, minCus, maxCus, avgCookiesSale){
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookiesSale = avgCookiesSale;
  this.hourlySales = [];
  this.calculateTheHourlySale();
  this.totalCookie = 0;
  stores.push(this);
 // this.totalOfTotal = 0;
}


//var stores = [seattle, tokyo, dubai, paris, lima];


Stores.prototype.randomCust = function (){
  var randomNum = Math.floor(Math.random()*( this.maxCus- this.minCus)) + this.minCus;

  return randomNum;
};


Stores.prototype.calculateTheHourlySale = function (){
  for (var i = 0; i < hours.length; i++){
    var saleByHours = Math.floor(this.avgCookiesSale * this.randomCust());
    this.hourlySales.push(saleByHours);
    this.totalCookie += saleByHours;
  }
};


function renderTableHead() {
  var storeRow = document.createElement('tr');
  var emptyHourCell = document.createElement('th');
  storeRow.appendChild(emptyHourCell);
  for (var j = 0; j < hours.length; j++) {
    var hoursCell = document.createElement('th');
    hoursCell.textContent = hours[j];
    storeRow.appendChild(hoursCell);
  }
  var newTotalCell = document.createElement('th');
  newTotalCell.textContent = 'Daily Location Total';
  storeRow.appendChild(newTotalCell);
  storeTable.appendChild(storeRow);
}




Stores.prototype.renderTopRow = function (){
  // creating row for random sale numbers under hourlySales Array.
  var hourlySalerow = document.createElement('tr');
  // console.log(this.hourlySales, this.hourlySales.length);
  var locationRow = document.createElement('td');
  locationRow.textContent = this.name;
  hourlySalerow.appendChild(locationRow);

  for (var k = 0; k < this.hourlySales.length; k++){
    var randomSalesNum = document.createElement('td');
    randomSalesNum.textContent = this.hourlySales[k];
    hourlySalerow.appendChild(randomSalesNum);
  }
  var totalCookieCell = document.createElement('td');
  totalCookieCell.textContent = this.totalCookie;
  hourlySalerow.appendChild(totalCookieCell);
  storeTable.appendChild(hourlySalerow);
};

new Stores('Seattle', 23, 65, 6.3);
new Stores('Tokyo',3,24,1.2);
new Stores('Dubai', 20, 38, 2.3);
new Stores('Paris', 20, 38, 2.3);
new Stores('Lima', 2, 16, 4.6);
function handleFormSubmitted(event){
  event.preventDefault();
  console.log('Whats up');

  var newLocInput = document.getElementById('new_location');
  var newLocValue = newLocInput.value;
  var newMinInput = document.getElementById('min_customer');
  var newMinValue = newMinInput.value;
  var newMaxInput = document.getElementById('max_customer');
  var newMaxValue = newMaxInput.value;
  var newAvgInput = document.getElementById('avg_customer');
  var newAvgValue = newAvgInput.value;

  console.log(newLocValue,newMinValue,newMaxValue,newAvgValue);
  new Stores(newLocValue,parseInt(newMinValue),parseInt(newMaxValue),parseInt(newAvgValue));
  //stores.push(newlocation);
  storeTable.innerHTML = '';
  callAllFunctions();
}

// function calcHourlyTotals(){
//   var newFooterRow = document.createElement('tr');
//   var newFooterCell = document.createElement('td');
//   newFooterCell.textContent = 'Total';
//   newFooterRow.appendChild(newFooterCell);
//   for (var k=0; k<hours.length; k++){
//     var hourlySum = 0;
//     for (var x=0; x<stores.length; x++){
//       hourlySum = hourlySum + stores[x].hourlySales[k];
      
//       var newTotalSumCell = document.createElement('td');
//       newTotalSumCell.textContent = hourlySum;
//       newFooterRow.appendChild(newTotalSumCell);
//     }
//    // totalPerHour.push(hourlySum);
//   }
//   storeTable.appendChild(newFooterRow);
//   console.log(totalPerHour);
// }


var formElement = document.getElementById('new-store');
formElement.addEventListener('submit', handleFormSubmitted);


function callAllFunctions(){
  renderTableHead();
  for (var b=0; b<stores.length; b++){
    console.log(stores);
    // stores[b].calculateTheHourlySale();
    stores[b].renderTopRow();
  }

}

callAllFunctions();
// calcHourlyTotals();



