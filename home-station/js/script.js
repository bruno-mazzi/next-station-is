var sliderPanel = (function () {

            var listBG = [{
                    nameJp: '屋久島',
                    nameOc: 'Yakushima',
                    img: 'yakushima.jpg'
                },
                {
                    nameJp: '彦根市',
                    nameOc: 'Hikone',
                    img: 'hikone_castle.jpg'
                },
                {
                    nameJp: '礼文島',
                    nameOc: 'île Rebun',
                    img: 'rebun.jpg'
                },
                {
                    nameJp: '横浜市',
                    nameOc: 'Yokohama',
                    img: 'yokohama.jpg'
                },
                {
                    nameJp: '大阪市',
                    nameOc: 'Osaka',
                    img: 'osaka.jpg'
                }
            ]

            var body = document.getElementsByTagName("body")[0];
            var numBG = getRandomInt(listBG.length);
            var numBGD = numBG === (listBG.length - 1) ? 0 : (numBG + 1);
            var sign2 = document.getElementsByClassName('sign2');


            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }

            function insertPanel(num) {
                for (var i = 0; i < 3; i++) {
                    if (num === listBG.length) {
                        num = 0;
                    } else if (num < 0) {
                        num = (listBG.length - 1);
                    }
                    document.getElementById("js-njp" + i).textContent = listBG[num].nameJp;
                    document.getElementById("js-noc" + i).textContent = listBG[num].nameOc;
                    num++;
                }
            }

            return {
                changeBG: function (e) {
                    if (e === "p") {
                        numBG = numBG <= 0 ? (listBG.length - 1) : (numBG - 1);
                        numBGD = numBG === (listBG.length - 1) ? 0 : (numBG + 1);
                        insertPanel(numBG);
                        body.style.backgroundImage = "url(images/" + listBG[numBGD].img + ")";
                    } else if (e === "n") {
                        numBG = numBG === (listBG.length - 1) ? 0 : (numBG + 1);
                        numBGD = numBG === (listBG.length - 1) ? 0 : (numBG + 1);
                        insertPanel(numBG);
                        body.style.backgroundImage = "url(images/" + listBG[numBGD].img + ")";
                    }
                },

                initBG: function () {
                    body.style.backgroundImage = "url(images/" + listBG[numBGD].img + ")";
                    sign2[0].classList.add('js-style');
                    var addLinkFooter = document.querySelector('body footer p a');
                    var addLinkFooterButton = document.createElement('button');
                    addLinkFooterButton.id = 'maskInterface';
                    addLinkFooterButton.innerHTML = '<span>Je veux voir les photos, masquer l\'interface</span>';
                    addLinkFooter.parentNode.insertBefore(addLinkFooterButton, addLinkFooter.nextSibling);
                    insertPanel(numBG);
                },

                maskInter: function () {
                    body.classList.toggle('maskInter');
                    var textButton = document.getElementById("maskInterface");
                    if (textButton.innerHTML === "<span>Je veux voir les photos, masquer l'interface</span>") {
                            textButton.innerHTML = "<span>C'est bon, remettre l'interface</span>";
                        } else {
                            textButton.innerHTML = "<span>Je veux voir les photos, masquer l'interface</span>";
                        }
                    }

                }

            })();

        document.addEventListener("DOMContentLoaded", function () {
            sliderPanel.initBG();

            var elePrev = document.getElementsByClassName('js-carrousel-prev');
            var eleNext = document.getElementsByClassName('js-carrousel-next');
            var maskInter = document.getElementById('maskInterface');

            maskInter.style.display = 'inline-block';

            maskInter.addEventListener("click", function () {
                sliderPanel.maskInter()
            }, false);

            elePrev[0].addEventListener("click", function () {
                sliderPanel.changeBG("p")
            }, false);
            eleNext[0].addEventListener("click", function () {
                sliderPanel.changeBG("n")
            }, false);
        });