
function changeBG(e) {
    var body = document.getElementsByTagName("body")[0];

   if (e === "p") {
    body.style.backgroundImage = "url(images/yakushima.jpg)";
   } else if (e === "n") {
    body.style.backgroundImage = "url(images/rebun.jpg)";
   }
}

document.addEventListener("DOMContentLoaded", function () {
    var elePrev = document.getElementsByClassName('js-carrousel-prev');
    var eleNext = document.getElementsByClassName('js-carrousel-next');

    elePrev[0].addEventListener("click", function(){changeBG("p")}, false);
    eleNext[0].addEventListener("click", function(){changeBG("n")}, false);
});