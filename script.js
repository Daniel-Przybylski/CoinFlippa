
//The run function
function flip(){

    //turns on flip animation
     const coiner = document.getElementById("coinImg");
     coiner.classList.toggle("flip");

    //disables a butotn temporarly 
    document.getElementById("button").disabled = true;
    document.getElementById("button").textContent = "Flipping!";
    
    //For getting a random between 3 & 9
    const MIN = 3;
    const MAX = 9;
    let randomValue = getRndInteger(MIN, MAX);
    //for the Head and tail animation 
    for (let i = 0; i < randomValue; i++){
        setTimeout(fliper,200*i);
    }
    
    setTimeout(resultFlip, 200 * randomValue);
    
}

//calculating a random interger between two numbers
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//The function which actively switches the coin within the loop
function fliper(){
    let value = document.getElementById("coin").textContent;
    value = (value == "H") ? "T" : "H";
    document.getElementById("coin").textContent = value;
    if (value == "H"){
        document.getElementById("coinImg").src = "/CoinFlippa/img/heds.png";
    } else if (value == "T") {
        document.getElementById("coinImg").src = "/CoinFlippa/img/tels.png";
    } 
}

//for determining the outcome of the toss text
function resultFlip(){ 
    let value = document.getElementById("coin").textContent;
    value = (value == "H") ? "Heads!" : "Tails!";
    document.getElementById("result").textContent = value;
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("button").disabled = false;
    document.getElementById("button").textContent = "Let's Flip!";
    
    //turn off flip animation
    const coiner = document.getElementById("coinImg");
    coiner.classList.toggle("flip");
}


