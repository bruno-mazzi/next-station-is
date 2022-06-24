var sliderPanel = (function () {

            var listBG = [{
                    nameJp: '屋久島',
                    nameOc: 'Yakushima',
                    img: 'yakushima.webp'
                },
                {
                    nameJp: '彦根市',
                    nameOc: 'Hikone',
                    img: 'hikone_castle.webp'
                },
                {
                    nameJp: '礼文島',
                    nameOc: 'île Rebun',
                    img: 'rebun.webp'
                },
                {
                    nameJp: '横浜市',
                    nameOc: 'Yokohama',
                    img: 'yokohama.webp'
                },
                {
                    nameJp: '大阪市',
                    nameOc: 'Osaka',
                    img: 'osaka.webp'
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

            var maskInter = document.getElementById('maskInterface');
            var prev = document.querySelectorAll("#js-njp0, #js-noc0");
            var next =  document.querySelectorAll("#js-njp2, #js-noc2");

            maskInter.addEventListener("click", function () {
                sliderPanel.maskInter()
            }, false);

            prev[0].addEventListener("click", function () {
                sliderPanel.changeBG("p")
            }, false);
           next[0].addEventListener("click", function () {
                sliderPanel.changeBG("n")
            }, false);
            prev[1].addEventListener("click", function () {
                sliderPanel.changeBG("p")
            }, false);
           next[1].addEventListener("click", function () {
                sliderPanel.changeBG("n")
            }, false);
        });