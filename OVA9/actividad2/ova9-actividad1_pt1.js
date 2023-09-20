const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");
document.getElementById("nextBtn").style.display="none";

//function for clear every explanation on click for all the cards and before presenting the new explanation
document.getElementById("nextBtn").onclick = function(){
    window.open("../OVA9.html","_self");
}

function clearExplanation(){
    document.getElementById("exp1").style.display="none";
    document.getElementById("exp2").style.display="none";
    document.getElementById("exp3").style.display="none";
    document.getElementById("exp4").style.display="none";
    document.getElementById("exp5").style.display="none";
    document.getElementById("exp6").style.display="none";
    document.getElementById("exp7").style.display="none";
    document.getElementById("exp8").style.display="none";
}

clearExplanation();

let maxTime = 60;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard(e) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        console.log("Cartas iguales: "+matchedCard);
        if(matchedCard == 8 && timeLeft > 0) {
            document.getElementById("nextBtn").style.display="block";
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img_${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

function showExp(e) {
    let clickedCard = e.target.outerHTML;

    if(clickedCard.match(/img_1/)){
        clearExplanation();
        document.getElementById("exp1").style.display="block";
    }
    else if(clickedCard.match(/img_2/)){
        clearExplanation();
        document.getElementById("exp2").style.display="block";
    }
    else if(clickedCard.match(/img_3/)){
        clearExplanation();
        document.getElementById("exp3").style.display="block";
    }
    else if(clickedCard.match(/img_4/)){
        clearExplanation();
        document.getElementById("exp4").style.display="block";
    }
    else if(clickedCard.match(/img_5/)){
        clearExplanation();
        document.getElementById("exp5").style.display="block";
    }
    else if(clickedCard.match(/img_6/)){
        clearExplanation();
        document.getElementById("exp6").style.display="block";
    }
    else if(clickedCard.match(/img_6/)){
        clearExplanation();
        document.getElementById("exp6").style.display="block";
    }
    else if(clickedCard.match(/img_7/)){
        clearExplanation();
        document.getElementById("exp7").style.display="block";
    }
    else if(clickedCard.match(/img_8/)){
        clearExplanation();
        document.getElementById("exp8").style.display="block";
    }
    
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
    card.addEventListener("click", showExp);
});

