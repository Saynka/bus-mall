var parentElement = document.getElementById('img-container');
var dataParentElement = document.getElementById('rendered data');
var imageNames = ['bag.jpg',"banana.jpg","bathroom.jpg","boots.jpg","breakfast.jpg","bubblegum.jpg","chair.jpg","cthulhu.jpg","dog-duck.jpg","dragon.jpg","pen.jpg","pet-sweep.jpg","scissors.jpg","shark.jpg","sweep.png","tauntaun.jpg","unicorn.jpg","usb.gif","water-can.jpg","wine-glass.jpg"];
var maxVotes = 5;
var voteOnNum = 3
var imageObjects = [];
var matchImages = [] ;


//for graph use only right now
var lablesArr= [];
var clicksArr = [];
var looksArr = [];


//constructor to make item instanaces
function Image(name){    
    this.filepath = `../img/${name}`;
    this.alt = `${name}.alt`;
    this.title = `${name}.alt`;
    console.log(this);
    this.clicks = 0;
    this.looks = 0;
    imageObjects.push(this);
}

function objectBuilder(){
    for(var i =0;i < imageNames.length ; i++){
        console.log(imageObjects)
        new Image(imageNames[i]);
        console.log('line 34 this is my objects', imageObjects[i] )
    }
}

//sets number of images that shows up to be voted on
function imgSet(numberOfPics){
    for(var i = 0;i<numberOfPics;i++){
        getRandomImgs();
    }
}
//generate random img  and creates display
function getRandomImgs(){
    //randomize the images
    var randomIndex = getRandomMax(imageObjects.length);
    //make an array with 6 non matching images and compare to current random to keep repitition down
    while(matchImages.includes(randomIndex)){
        randomIndex = getRandomMax(imageObjects.length);
      }
    matchImages.push(randomIndex);
    if(matchImages.length > (voteOnNum*2)){
        matchImages.shift();
    }
    var randomImg = imageObjects[randomIndex];
    //display image on page
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src',randomImg.filepath);
    imageElement.setAttribute('alt',randomImg.alt);
    imageElement.setAttribute('title', randomImg.title);
    parentElement.appendChild(imageElement);
    randomImg.looks++;
}
// pulls data out of objects and puts it in to global arrays
function pullInfo(){
    for(var i = 0 ; i < imageObjects.length; i++){
    lablesArr.push(imageObjects[i].alt);
    clicksArr.push(imageObjects[i].clicks);
    looksArr.push(imageObjects[i].looks);
    }
}
//does math to get a random number between 0 and max
function getRandomMax(max){
    return Math.floor(Math.random()* Math.floor(max));
}
// Puts text version of data on page
function generateData(){
    for (var i = 0; i < imageObjects.length; i++) {
        var dataElement = document.createElement("li");
        console.log(imageObjects[i])
        dataElement.textContent = `for product: ${imageObjects[i].alt} it has ${imageObjects[i].clicks} clicks and ${imageObjects[i].looks} views`;
        console.log(imageObjects[i]);
        dataParentElement.appendChild(dataElement);
    }
}
// creates the graphical data
function graph(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: lablesArr,
            datasets: [{
                label: '# of Votes',
                data: clicksArr,
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
}
function graph2(){
    var ctx = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lablesArr,
            datasets: [{
                label: '# of Votes',
                data: looksArr,
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
}
//click handeler
function userClick(){
    var alt = event.target.alt;
    maxVotes--;
        console.log(`event.target is ${event.target}`)
        if (maxVotes !== 0) {
            for (var i = 0; i < imageObjects.length; i++) {
              if (alt === imageObjects[i].alt) {
                imageObjects[i].clicks++;
                }       
            }
            parentElement.innerHTML = '';
            imgSet(voteOnNum);
            } else{
            parentElement.innerHTML = '';
            pullInfo();
            generateData();
            graph();
            graph2();
            };
}

objectBuilder();
imgSet(voteOnNum);
parentElement.addEventListener('click', userClick);
