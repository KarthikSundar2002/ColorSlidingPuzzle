


const red = "#ff0000"
const yellow = "#ffff00"
const orange = "#ffa500"
const blue = "#0000ff"
const white = "#ffffff"
const green = "#00ff00"

var color;

var redCount = 0;
var yellowCount = 0;
var orangeCount = 0;
var blueCount = 0;
var whiteCount = 0;
var greenCount = 0;

var pRedCount = 0;
var pYellowCount = 0;
var pOrangeCount = 0;
var pBlueCount = 0;
var pWhiteCount = 0;
var pGreenCount = 0;

var solvable = false;
function colorSelect(gridID){
    let i = Math.floor(Math.random() * 6) + 1;
    switch (i){
        case 1:
            color = red;
            if (gridID == "finalGrid") {
                redCount++;
            }
            if(gridID == "playGrid"){
                pRedCount++;
            }

            break;
        case 2:
            color = yellow;
            if (gridID == "finalGrid") {
                yellowCount++;
            }
            if(gridID == "playGrid"){
                pYellowCount++;
            }

            break;
        case 3:
            color = orange;
            if (gridID == "finalGrid") {
                orangeCount++;
            }
            if(gridID == "playGrid"){
                pOrangeCount++;
            }

            break;
        case 4:
            color = blue;
            if (gridID == "finalGrid") {
                blueCount++;
            }
            if(gridID == "playGrid"){
                pBlueCount++;
            }
            break;
        case 5:
            color = white;
            if (gridID == "finalGrid") {
                whiteCount++;
            }
            if(gridID == "playGrid"){
                pWhiteCount++;
            }
            break;
        case 6:
            color = green;
            if (gridID == "finalGrid") {
                greenCount++;
            }
            if(gridID == "playGrid"){
                pGreenCount++;
            }
            break;
    }

}

function GridGenerator(rows,gridID){
    let k = 1;
    widthOfGrid = document.getElementById(gridID).clientWidth;
    heightOfGrid = document.getElementById(gridID).clientHeight;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            document.getElementById(gridID).innerHTML += "<div class='cell' id='" + gridID + k + "' data-row ='" + i + "' data-col ='" + j + "'></div>";
            k++;
        }
    }

    for (let t = 1; t < k; t++) {
        colorSelect(gridID);
        document.querySelector("#"+ gridID + t).style.background = color;
        document.querySelector("#"+ gridID + t).style.width = widthOfGrid/rows +"px";
        document.querySelector("#"+ gridID + t).style.height = heightOfGrid/rows + "px";


    }

    if (gridID == "playGrid") {
        let i = Math.floor(Math.random() * 25) + 1;
    document.getElementById(gridID+i).classList.add("empty-block");
    document.getElementsByClassName("empty-block")[0].style.background = "#000000"
    }




}

function CheckSolvablity(){
    if(pRedCount >= redCount && pBlueCount >=blueCount && pGreenCount >= greenCount && pOrangeCount >= orangeCount && pWhiteCount >= whiteCount && pYellowCount >= yellowCount){
        solvable = true;
    }else{
        solvable = false;
        redCount = 0;
        yellowCount = 0;
        orangeCount = 0;
        blueCount = 0;
        whiteCount = 0;
        greenCount = 0;

        pRedCount = 0;
        pYellowCount = 0;
        pOrangeCount = 0;
        pBlueCount = 0;
        pWhiteCount = 0;
        pGreenCount = 0;
    }
}

while(!solvable){
    GridGenerator(3,"finalGrid");
    GridGenerator(5,"playGrid");
    CheckSolvablity();

}
