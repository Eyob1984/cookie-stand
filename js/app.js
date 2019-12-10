'use strict';
// creating an object for each city.
// creating string array.
var hours=['6am', '7am' , '8am', '9am' , '10am', '11am' , '12pm', '1pm' , '2pm', '3pm' , '4pm', '5pm' , '6pm', '7pm'];
var seattle = {
  name: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookiesSale: 6.3,
  randomSales: function () {
    var randomNum = Math.floor(Math.random()*( this.maxCus- this.minCus)) + this.minCus;
    console.log(randomNum);
    return randomNum;
  },
  hourSale: function(){
    var productAnswer = (this.avgCookiesSale * seattle.randomSales());
    console.log(productAnswer);
    return productAnswer;
  },
  render: function(){
    var cityHolder = document.getElementById('city-holder');
    // create var newH2 to hold seattle.name
    // for loop through the hours
    var newLi = document.createElement('li');
    // turn the string below into a template literal pulling in the hours[i], cookie count
    newLi.textContent = 'This is a new li content';
    cityHolder.appendChild(newLi);
  }
};
seattle.randomSales();
seattle.hourSale();
seattle.render();

