var listBG = [
    {
        nameJp: '屋久島',
        nameOc: 'Yakushima',
        img: 'yakushima.jpg'
    },
    {
        nameJp: '彦根城',
        nameOc: 'Château d\'Hikone',
        img: 'hikone_castle.jpg'
    },
    {
        nameJp: '礼文島',
        nameOc: 'île Rebun',
        img: 'rebun.jpg'
    }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function initBG() {
    var numBG = getRandomInt(listBG.length);
    var numBGD = numBG === (listBG.length-1) ? 0 : (numBG + 1);
    var body = document.getElementsByTagName("body")[0];
    for (var i = 0; i < 3; i++) {
        if (numBG === listBG.length) {
            numBG = 0;
        }
        document.getElementById("js-njp"+i).textContent= listBG[numBG].nameJp;
        document.getElementById("js-noc"+i).textContent= listBG[numBG].nameOc;
        numBG++;
    }
    body.style.backgroundImage = "url(images/"+listBG[numBGD].img+")";
}

function changeBG(e) {
    var body = document.getElementsByTagName("body")[0];

   if (e === "p") {
    body.style.backgroundImage = "url(images/yakushima.jpg)";
   } else if (e === "n") {
    body.style.backgroundImage = "url(images/rebun.jpg)";
   }
}

document.addEventListener("DOMContentLoaded", function () {
    initBG();

    var elePrev = document.getElementsByClassName('js-carrousel-prev');
    var eleNext = document.getElementsByClassName('js-carrousel-next');

    elePrev[0].addEventListener("click", function(){changeBG("p")}, false);
    eleNext[0].addEventListener("click", function(){changeBG("n")}, false);
});