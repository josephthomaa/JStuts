var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
var myImage = document.querySelector('img');

myButton.addEventListener('click', setUserName);

function createParagraph() {
    var para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }
  
  var buttons = document.querySelectorAll('button');
  
  for(var i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/background.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }