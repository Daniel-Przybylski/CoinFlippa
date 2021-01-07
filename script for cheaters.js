
//The run function
function flip(){
    //For getting a random between 3 & 9
    const MIN = 3;
    const MAX = 9;
    let randomValue = getRndInteger(MIN, MAX);
    document.getElementById("coinImg").style.transform = "none";
    //for the Head and tail animation 
    for (let i = 0; i < randomValue * 2; i++){
        if (i % 2 == 0) {
          setTimeout(fliper,100*i);
        }
        setTimeout(animate, 100*i);
    }
    
    setTimeout(resultFlip, 200 * randomValue)
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
    document.getElementById("coinImg").style.transform = "none"
    let value = document.getElementById("coin").textContent;
    value = (value == "H") ? "Heads!" : "Tails!";
    document.getElementById("result").textContent = value;
    document.getElementById("result").classList.remove("hidden");
}
































function animate() {
    if (document.getElementById("coinImg").style.transform == "scale(1, 0)") {
        document.getElementById("coinImg").style.transform = "scale(1)";
    } else {
        document.getElementById("coinImg").style.transform = "scale(1, 0)";
    }
}