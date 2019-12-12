'use strict';
console.log('Js is working');
// creating an object for each city.
// creating string array.
var hours = ['6am', '7am' , '8am', '9am' , '10am', '11am' , '12pm', '1pm' , '2pm', '3pm' , '4pm', '5pm' , '6pm', '7pm'];
var storeTable = document.getElementById('store-table');
// creat constructor function
function Stores( name, minCus, maxCus, avgCookiesSale){
  this.name = name;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookiesSale = avgCookiesSale;
  this.hourlySales = [];
  this.totalCookie = 0;

}
var seattle = new Stores('seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo',3,24,1.2);
var dubai = new Stores('Paris', 20, 38, 2.3);
var paris = new Stores('Paris', 20, 38, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);
// create a function to calculate random number between mincus. and maxcus.
Stores.prototype.randomCust = function (){
  var randomNum = Math.floor(Math.random()*( this.maxCus- this.minCus)) + this.minCus;
  // console.log(randomNum);
  return randomNum;
};

// create a function to  calculate the hourly sale
Stores.prototype.calculateTheHourlySale = function (){
  for (var i = 0; i < hours.length; i++){
    var saleByHours = Math.floor(this.avgCookiesSale * this.randomCust());
    this.hourlySales.push(saleByHours);
    // console.log(this.hourlySales);
    this.totalCookie += saleByHours;
    // console.log = (this.totalCookie);
    //return this.hourlySales;
  }
  // console.log(this.totalCookie);
};

function renderTableHead() {

  // console.log (storeTable);
  var storeRow = document.createElement('tr');
  var emptyHourCell = document.createElement('th');
  // emptyHourCell.textContent = (null);
  storeRow.appendChild(emptyHourCell);
  // creating loop for the hours.
  for (var j = 0; j < hours.length; j++) {
    var hoursCell = document.createElement('th');
    hoursCell.textContent = hours[j];
    storeRow.appendChild(hoursCell);
  }
  // creating new cell for Daily Location Total.
  var newTotalCell = document.createElement('th');
  newTotalCell.textContent = 'Daily Location Total';
  storeRow.appendChild(newTotalCell);
  storeTable.appendChild(storeRow);
}

// Adding a prototype method to render a cookie table.
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
    // console.log(this.hourlySales[k]);
    hourlySalerow.appendChild(randomSalesNum);
  }
  //Feeding total cookies in "Daily Location total" columon.
  var totalCookieCell = document.createElement('td');
  totalCookieCell.textContent = this.totalCookie;
  hourlySalerow.appendChild(totalCookieCell);
  storeTable.appendChild(hourlySalerow);
};

// creating table by getting input form the user.
// Create a function to preventDefault.
function handleFormSubmitted(event){
  event.preventDefault();
  console.log('Whats up');

  var newLocInput = document.getElementById('new_location');
  var newLocValue = newLocInput.Value;
  console.log(newLocValue);
  var newlocation = new Stores(newLocValue,3,4);
}
var formElement = document.getElementById('new-store');
formElement.addEventListener('submit', handleFormSubmitted);

// create table footer for the total amount.
Stores.prototype.renderTableFooter = function(){
  var footerRow = document.createElement('tr');
  var footerCell = document.createElement('td');
  footerCell.textContent = 'Total';
  footerRow.appendChild(footerCell);
  storeTable.appendChild(footerRow);
};
// Stores.prototype.renderTabeleFooter = function (){

// };

// creating a new object inside constructor function.


renderTableHead();
seattle.calculateTheHourlySale();
seattle.renderTopRow();
seattle.randomCust();
tokyo.calculateTheHourlySale();
tokyo.renderTopRow();
tokyo.randomCust();
dubai.calculateTheHourlySale();
dubai.renderTopRow();
dubai.randomCust();
paris.calculateTheHourlySale();
paris.renderTopRow();
paris.randomCust();
lima.calculateTheHourlySale();
lima.renderTopRow();
lima.randomCust();
seattle.renderTableFooter();

// Create array to inside.
var stores = [seattle, tokyo, dubai, paris, lima];
