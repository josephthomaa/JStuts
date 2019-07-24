var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(i=1;i<6;i++){
	var imagename='images/pic'+i+'.jpg';
	var newImage = document.createElement('img');
	newImage.setAttribute('src', imagename);
	thumbBar.appendChild(newImage);
	newImage.onclick = function(e) {
    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}
/* Wiring up the Darken/Lighten button */
function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}

btn.onclick = function() {
  var btnClass = btn.getAttribute('class'); 
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}