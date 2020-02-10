//welcome phrase
var welcomeSetence, i, firstSelector, secondSelector, thirdSelector, stop;

i = 0;
firstSelector = document.querySelector('h1');
secondSelector = document.querySelector('h3');
thirdSelector = document.querySelector('.download');
welcomeSetence = 'Welcome On Good Readers Library';

stop = setInterval(nameSlider, 70);

function nameSlider(){
    if(i <= welcomeSetence.length){
        firstSelector.textContent = firstSelector.textContent + welcomeSetence.charAt(i);

        if(i === welcomeSetence.length){
            secondSelector.style.transform = 'translate(0)';
            secondSelector.style.opacity = '1';
            thirdSelector.style.height = '150px';
            clearInterval(stop);
        }
        i++;
    }
    else
        i = 0;
}

//background img
var bodySelector, a;
a = 1;
bodySelector = document.querySelector('body');

setInterval(bgSlider, 5000);

function bgSlider(){
    if(a <= 5){
        bodySelector.style.backgroundImage = 'url(img/bg-' + a + '.png)';
        a++;
    }
    else{
        a = 1;
        bodySelector.style.backgroundImage = 'url(img/bg-' + a + '.png)';
        a++;
    }     
}

//captcha

var captchaSelector, captchaCode, max, min;

max = 9999;
min = 1000;
captchaSelector = document.querySelector('.captcha-code');

captchaCode = Math.floor((Math.random() * (max - min)) + min);
captchaSelector.textContent = captchaCode;

