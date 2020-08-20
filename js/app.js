'use strict';
//GOAL: render two cat pictures to the page
// get the 'cat-container' parent element
var parentElement = document.getElementById('picture-array');
var finalList = document.getElementById('ul');
var imageArray = [];
var counter = 0;
var maxClicks = 25;
var uniqueImageArray = [];
// I'm gonna need a constructor function
// filepath
// alt
// title
function Pic(name, ext){
  this.filepath = `../img/${name}.${ext}`;
  this.alt = name;
  this.title = name;
  this.clicks = 0;
  this.shown = 0;
  imageArray.push(this);
}
new Pic('bag','jpg');
new Pic('bathroom','jpg');
new Pic('boots','jpg');
new Pic('breakfast','jpg');
new Pic('pen','jpg');
new Pic('bubblegum','jpg');
new Pic('chair','jpg');
new Pic('cthulhu','jpg');
new Pic('dog-duck','jpg');
new Pic('dragon','jpg');
new Pic('dog-duck','jpg');
new Pic('banana','jpg');
new Pic('pet-sweep','jpg');
new Pic('scissors','jpg');
new Pic('shark','jpg');
new Pic('sweep','png');
new Pic('tauntaun','jpg');
new Pic('unicorn','jpg');
new Pic('water-can','jpg');
new Pic('wine-glass','jpg');
new Pic('usb','gif');
// create a function that will get a random image
// get a random number between 0 and the length of the catArray
// assign that random number to index number in the catArray
// that will be that image that we show
function getRandomImage(){
  // get a random number from the helper function betweet 0 and one less than the length of the array
  var randomIndex = getRandomNumber(imageArray.length);
  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(imageArray.length);
  }
  uniqueImageArray.push(randomIndex);
  if(uniqueImageArray > 6){
    uniqueImageArray.shift();
  }
  // use that random number as the index for our catArray
  var chosenImage = imageArray[randomIndex];
  chosenImage.shown++;
  buildElements(chosenImage);
  // create an img tag
  var imageElement = document.createElement('img');
  // give that img tag a src = the path of where my image is
  imageElement.setAttribute('src', chosenImage.filepath);
  // give the img tag an alt
  imageElement.setAttribute('alt', chosenImage.alt);
  // give the img tag a title
  imageElement.setAttribute('title', chosenImage.title);
  // append it to the parent
  parentElement.appendChild(imageElement);
}
function buildElements(chosenImage){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.width = 401;
  imageElement.style.padding = '10px';
  // padding code from w3schools" http://webdevable.com/w3schools/jsref/prop_style_padding.html
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);

  // create an input// needs to have a type="radio"// needs to have a value="alt"
  // var radioButton = document.createElement('input');
  // radioButton.setAttribute('type', 'radio');
  // radioButton.setAttribute('value', chosenImage.alt);

  //<input type="radio" value=chosenImage.alt/>

  // parentElement.appendChild(radioButton);
  parentElement.appendChild(imageElement);
}
// helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function handleClick(event){
  counter++;
  // figure out what was clicked on
  console.log(`yes yes it works ${event.target.alt}`);
  var alt = event.target.alt;
  // loop through my catsArray until I find the alt that matches my alt
  for(var i=0; i<imageArray.length; i++){
    if(alt === imageArray[i].alt){
      imageArray[i].clicks++;
      imageArray[i].shown++;
    }
  }
  // once I've found my object instance
  // increment the clicks on that object instance
  console.log('an image was clicked');
  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();
  if (counter>=maxClicks) {
    parentElement.removeEventListener('click', handleClick);
    for (var j = 0; j < imageArray.length; j++){
      var li = document.createElement('li');
      li.textContent = imageArray[j].title + ' had ' + imageArray[j].clicks + ' votes and was shown ' + imageArray[j].shown + ' times.';
      finalList.appendChild(li);
    }
  }
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass', 'wireframe'],
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

parentElement.addEventListener('click', handleClick);
// initally generates the images on page load
getRandomImage();
getRandomImage();
getRandomImage();
