function changeText(){
    var textsArray = ["Hi","Hello", "Morning", "Evening", "Night"]
    var number = getRandomNumberBetween(0,textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
    }
    function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }
