

var parentElement = document.getElementById('picture-array');


var picArray = [];

function Pic(filepath, alt, title) {
  this.filepath = `../img/${name}.${ext}`;
  this.alt = alt;
  this.title = title;
  this.click = 0;

  picArray.push(this);
}

new Pic('bag', 'jpg');
new Pic('banana', 'jpg');
new Pic('bathroom', 'jpg');


function getRandomImage(){
  var randomIndex = getRandomNumber(picArray.length);
  var chosenImage = picArray[randomIndex];
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.path);
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
  parentElement.appendChild(imageElement);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function handleClick(event){
  console.log('an image was clicked');
  console.log('yes yes it works', event.target.alt);
  var alt = event.target.alt;

  for(var i=0; i<picArray.length; i++){
    if(alt === picArray[i].alt){
      picArray[i].clicks++;
    }
  }

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
}

parentElement.addEventListener('click', handleClick);

getRandomImage();
getRandomImage();