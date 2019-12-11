'use strict';
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
// create a function to calculate random number between mincus. and maxcus.
Stores.prototype.randomCust = function (){
  var randomNum = Math.floor(Math.random()*( this.maxCus- this.minCus)) + this.minCus;
  console.log(randomNum);
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
  console.log(this.totalCookie);
};

function renderTableHead() {

  // console.log (storeTable);
  var storeRow = document.createElement('tr');
  var emptyHourCell = document.createElement('th');
  emptyHourCell.textContent = (null);
  storeRow.appendChild(emptyHourCell);
  // creating loop for the hours.
  for (var j = 0; j < hours.length; j++) {
    var hoursCell = document.createElement('th');
    hoursCell.textContent = (hours[j]);
    storeRow.appendChild(hoursCell);
  }
  // creating new cell for Daily Location Total.
  var newTotalRow = document.createElement('tr');
  var newTotalCell = document.createElement('th');
  newTotalCell.textContent = ('Daily Location Total');
  storeRow.appendChild(newTotalCell);
  storeTable.appendChild(storeRow);
}

// Adding a prototype method to render a cookie table.
Stores.prototype.renderTopRow = function (){
  // creating row for random sale numbers under hourlySales Array.
  var hourlySalerow = document.createElement('tr');
  console.log(this.hourlySales, this.hourlySales.length);
  var locationRow = document.createElement('td');
  locationRow.textContent = (this.name);
  hourlySalerow.appendChild(locationRow);

  for (var k = 0; k < this.hourlySales.length; k++){
    var randomSalesNum = document.createElement('td');
    randomSalesNum.textContent = (this.hourlySales[k]);
    console.log(this.hourlySales[k]);
    hourlySalerow.appendChild(randomSalesNum);
  }
  //Feeding total cookies in Daily Location total columon
  var totalCookieRow = document.createElement('tr');
  var totalCookieCell = document.createElement('td');
  totalCookieCell.textContent = (this.totalCookie);
  hourlySalerow.appendChild(totalCookieCell);
  storeTable.appendChild(hourlySalerow);
};



var seattle = new Stores('seattle', 23, 65, 6.3);
var tokyo = new Stores('Tokyo',3,24,1.2);
var dubai = new Stores('Paris', 20, 38, 2.3);
var paris = new Stores('Paris', 20, 38, 2.3);
var lima = new Stores('Lima', 2, 16, 4.6);

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



var stores = [seattle, tokyo, dubai, paris, lima];







// name: ',
// minCus: 23,
// maxCus: 65,
// avgCookiesSale: 6.3,
// hourlyCookies: [],
// randomCust: function () {
//   var randomNum = Math.floor(Math.random()*( this.maxCus- this.minCus)) + this.minCus;
//   console.log(randomNum);
//   return randomNum;


// var tokiyo = new
// hourSale: function(){
//   for (var i = 0; i < hours.length; i++)
//   this.hourlyCookies[i] = Math.floor(Math.random()*( this.maxCus- this.minCus)) + this.minCus;
//   console.log(this.hourlyCookies[0]);

//   var productAnswer = (this.avgCookiesSale * seattle.randomSales());
//   console.log(productAnswer);
//   return productAnswer;
// },
// render: function(){
//   var cityHolder = document.getElementById('city-holder');
//   // create var newH2 to hold seattle.name
//   // for loop through the hours
//   var newLi = document.createElement('li');
//   // turn the string be`low into a template literal pulling in the hours[i], cookie count
//   newLi.textContent = 'This is a new li content';
//   cityHolder.appendChild(newLi);
// }
// // seattle.hourSale();
// seattle.render();
