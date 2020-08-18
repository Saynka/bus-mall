'use strict';

// Global Variables
var parentElement = document.getElementById('products');
var finalList = document.getElementById('ul');
var productArray = [];
var totalClicks = 0;
var maxClicks = 25;
var uniqueImageArray = [];



function Product (name){
  this.title = `${name}`.slice(0,-4);
  // slice function from StackOverflow: https://stackoverflow.com/questions/952924/javascript-chop-slice-trim-off-last-character-in-string
  this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
  // capitaliation code from: https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript
  this.alt = `${name}`;
  this.filepath = `../img/${name}`;
  this.clicks = 0;
  this.shown = 0;
  productArray.push(this);
}

new Product('bag.jpg');
new Product('banana.jpg');
new Product('bathroom.jpg');
new Product('boots.jpg');
new Product('breakfast.jpg');
new Product('bubblegum.jpg');
new Product('chair.jpg');
new Product('cthulhu.jpg');
new Product('dog-duck.jpg');
new Product('dragon.jpg');
new Product('pen.jpg');
new Product('pet-sweep.jpg');
new Product('scissors.jpg');
new Product('shark.jpg');
new Product('sweep.png');
new Product('tauntaun.jpg');
new Product('unicorn.jpg');
new Product('usb.gif');
new Product('water-can.jpg');
new Product('wine-glass.jpg');


function getRandomImage(){
  // I'm going to check my unique image array to see if my random Index is in it. If it is, I'm going to get a different random index. My array should only hold exactly 6 values
  var randomIndex = getRandomNumber(productArray.length);
  // [1, 2, 4, 8, 9, 19]
  // randomIndex = 2
  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(productArray.length);
  }

  // add the index to the end of the arraay
  uniqueImageArray.push(randomIndex);

  // remove the oldest index from the array - that would be the first index
  if(uniqueImageArray > 6){
    uniqueImageArray.shift();
  }

  var chosenImage = productArray[randomIndex];
  chosenImage.shown++;

  buildElements(chosenImage);

}

function buildElements(chosenImage){
 // building the image

 var imageElement = document.createElement('img');
 imageElement.setAttribute('src', chosenImage.filepath);
 imageElement.width = 400;
 imageElement.style.padding = '10px';
 // padding code from w3schools" http://webdevable.com/w3schools/jsref/prop_style_padding.html
 imageElement.setAttribute('alt', chosenImage.alt);
 imageElement.setAttribute('title', chosenImage.title);

 // create an input
   // needs to have a type="radio"
   // needs to have a value="alt"
 var radioButton = document.createElement('input');
 radioButton.setAttribute('type', 'radio');
 radioButton.setAttribute('value', chosenImage.alt);

 //<input type="radio" value=chosenImage.alt/>


 parentElement.appendChild(radioButton);
 parentElement.appendChild(imageElement);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){
  totalClicks++;
  console.log('The total clicks were: '+ totalClicks);
  console.log('the event.target', event.target.value);
  var alt = event.target.value;

  for(var i=0; i<productArray.length; i++){
    if(alt === productArray[i].alt){
      productArray[i].clicks++;
      productArray[i].shown++;
    }
  }

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();
  if (totalClicks>=maxClicks) {
    parentElement.removeEventListener('click', handleClick);
    for (var j = 0; j < productArray.length; j++){
      var li = document.createElement('li');
      li.textContent = productArray[j].title + ' had ' + productArray[j].clicks + ' votes and was shown ' + productArray[j].shown + ' times.';
      finalList.appendChild(li);
    }
  }
}


parentElement.addEventListener('click', handleClick);



getRandomImage();
getRandomImage();
getRandomImage();

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});