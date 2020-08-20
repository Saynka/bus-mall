var parentElement = document.getElementById('picture-array');
var finalList = document.getElementById('ul');
var picArray = [];
var counter = 0;
var maxClicks = 25;
var uniqueImageArray = [];


function Pic(name, filepath){
  this.filepath = `./img/${name}`;
  this.alt = `${name}`;
  this.title = name;
  this.click = 0;
  this.shown = 0;

  picArray.push(this);
}
// just hard code this
new Pic('bag', './img/bag.jpg');
new Pic('banana', 'jpg');
new Pic('bathroom', 'jpg');
new Pic('boots', 'jpg');
new Pic('breakfast', 'jpg');
new Pic('bubblegum', 'jpg');
new Pic('chair', 'jpg');
new Pic('cthulhu', 'jpg');
new Pic('dog-duck', 'jpg');
new Pic('dragon', 'jpg');
new Pic('pen', 'jpg');
new Pic('pet-sweep', 'jpg');
new Pic('scissors', 'jpg');
new Pic('shark', 'jpg');
new Pic('sweep', 'png');
new Pic('tauntaun', 'jpg');
new Pic('unicorn', 'jpg');
new Pic('usb', 'gif');
new Pic('water-can', 'jpg');
new Pic('wine-glass', 'jpg');
new Pic('wireframe', 'png');





function getRandomImage(){
  var randomIndex = getRandomNumber(picArray.length);
  while(uniqueImageArray.includes(randomIndex)){
    randomIndex = getRandomNumber(picArray.length);
  }
  uniqueImageArray.push(randomIndex);
  if(uniqueImageArray > 6){
    uniqueImageArray.shift();
  }
  var chosenImage = picArray[randomIndex];
  chosenImage.shown++;
  // var imageElement = document.createElement('img');
  // imageElement.setAttribute('src', chosenImage.filepath);
  // imageElement.setAttribute('alt', chosenImage.alt);
  // imageElement.setAttribute('title', chosenImage.title);
  // parentElement.appendChild(imageElement);
  buildElements(chosenImage);

}
  
// building the image

function buildElements(chosenImage){
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chosenImage.filepath);
  imageElement.width = 400;
  imageElement.style.padding = '10px';
  // padding code from w3schools" http://webdevable.com/w3schools/jsref/prop_style_padding.html
  imageElement.setAttribute('alt', chosenImage.alt);
  imageElement.setAttribute('title', chosenImage.title);
 
  // create an input// needs to have a type="radio"// needs to have a value="alt"
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
  counter++;
  console.log('an image was clicked');
  var alt = event.target.value;
  console.log('yes yes it works', event.target.value);

  for(var i=0; i<picArray.length; i++){
    if(alt === picArray[i].alt){
      picArray[i].clicks++;
      picArray[i].shown++;
      // console.log(picArray.clicks);
    }
  }

  parentElement.innerHTML = '';
  getRandomImage();
  getRandomImage();
  getRandomImage();
  // buildElements();
  // getRandomNumber();
  if (counter>=maxClicks) {
    parentElement.removeEventListener('click', handleClick);
    for (var j = 0; j < picArray.length; j++){
      var li = document.createElement('li');
      li.textContent = picArray[j].title + ' had ' + picArray[j].clicks + ' votes and was shown ' + picArray[j].shown + ' times.';
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

getRandomNumber();
getRandomImage();
getRandomImage();
getRandomImage();
buildElements();


// var inputElement = document.createElement('INPUT');
// inputElement.setAttribute('type', 'radio');
// inputElement.setAttribute('value', picArray.alt);