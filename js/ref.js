//GOAL: render two cat pictures to the page
  // get the 'cat-container' parent element
  var parentElement = document.getElementById('cat-container');


  // I'm gonna need a constructor function
    // filepath
    // alt
    // title
var catArray = [];
  
function Cat(filepath, alt, title){
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clicks = 0;

  catArray.push(this);
}

new Cat('../img/boxCat.jpg', 'boxCat', 'boxCat');
new Cat('../img/chargingCat.jpg', 'chargingCat', 'chargingCat');
new Cat('../img/cuddleCats.jpg', 'cuddleCats', 'cuddleCats');
new Cat('../img/multiTaskingCat.jpg', 'multiTaskingCat', 'multiTaskingCat');
new Cat('../img/outsideCat.jpg', 'outsideCat', 'outsideCat');
new Cat('../img/sleepyCat.jpg', 'sleepyCat', 'sleepyCat');
new Cat('../img/tomatoCat.jpg', 'tomatoCat', 'tomatoCat');
new Cat('../img/yogaCat.jpg', 'yogaCat', 'yogaCat');

// create a function that will get a random image
  // get a random number between 0 and the length of the catArray
  // assign that random number to index number in the catArray
  // that will be that image that we show

function getRandomImage(){
  // get a random number from the helper function betweet 0 and one less than the length of the array
  var randomIndex = getRandomNumber(catArray.length);

  // use that random number as the index for our catArray
  var chosenImage = catArray[randomIndex];

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

// helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){
  console.log('an image was clicked');
  // figure out what was clicked on
  console.log('this is my event.target.alt', event.target.alt)
  var alt = event.target.alt;

  // loop through my catsArray until I find the alt that matches my alt
  for(var i=0; i<catArray.length; i++){
    if(alt === catArray[i].alt){
      catArray[i].clicks++;
    }
  }
  // once I've found my object instance
    // increment the clicks on that object instance

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
}

parentElement.addEventListener('click', handleClick);

// initally generates the images on page load
getRandomImage();
getRandomImage();

// 4 parts
