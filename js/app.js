

var parentElement = document.getElementById('picture-array');


var picArray = [];

function Pic(path, alt, title) {
  this.filepath = path;
  this.alt = alt;
  this.title = title;
  this.click = 0;

  picArray.push(this);
}





