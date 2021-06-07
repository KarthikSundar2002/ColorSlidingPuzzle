var Won = false;
var PlayerName = "";
var VictoryAudio = new Audio("../audio/victory.mp3");
var multiplayerHighScore = 0;
const Tiles = Array.from(document.querySelectorAll("#playGrid .cell"));
function WinChecker(r1){
    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < r1; j++) {
            AnsTile = document.querySelector(`#finalGrid [data-row ="${i}"][data-col = "${j}"]`).style.backgroundColor;
            GivenTile = document.querySelector(`#playGrid [data-row ="${i+1}"][data-col = "${j+1}"]`).style.backgroundColor;
            if (AnsTile == GivenTile) {
                Won = true;
            }else{
                Won = false;
                return;
            }
        }

    }
}

function clearLocalStorageData() {
    for (let i = 0; i < 9; i++) {
        localStorage.removeItem(`FinalGrid${i}`);
    }
    for (let j = 0; j < 25; j++) {
        localStorage.removeItem(`PlayGrid${j}`);

    }
    localStorage.removeItem(`Player1Moves`);

}


Tiles.map(
    tile => {
        tile.addEventListener("click",event => {

            if (NoOfMoves == 1) {
                StartTime = Date.now();
                console.log("Karthik")
            }
            if(document.URL.includes("easy")){
                WinChecker(3);
            }
            if(document.URL.includes("medium")){
                WinChecker(4);
            }
            

            if (Won && !(document.URL.includes("multiplayer"))) {
                document.querySelector(".victory-screen").style.display = "block";
                VictoryAudio.play();
                EndTime = Date.now();
                var timeTaken = EndTime - StartTime;
                console.log(timeTaken);
                var Score = Math.floor((10000000/timeTaken) + 10000/NoOfMoves);
                document.getElementById("Score").innerHTML = `Your Score: ${Score}`;
                if (localStorage.getItem("HighScore") == null) {
                    localStorage.setItem("HighScore",Score);
                    PlayerName = window.prompt("Thanks for first trying out the game. What's your name: ");
                    localStorage.setItem("Player",PlayerName);

                }else{
                    var CurrentHighScore = localStorage.getItem("HighScore");
                    if (Score >= CurrentHighScore)  {
                        PlayerName = window.prompt("You are the Highscorer. Enter your name Champion: ");
                        localStorage.setItem("HighScore",Score);
                        localStorage.setItem("Player",PlayerName);
                        document.getElementById("Highscore").innerHTML = `Hey ${PlayerName}, You're the Champion now!`;
                    }
                    if (Score < CurrentHighScore) {
                        document.getElementById("Highscore").innerHTML = `${localStorage.getItem("Player")} is the champion with a score of ${localStorage.getItem("HighScore")}`;
                    }
                }

            }

            if (document.URL.includes("multiplayer_1") ) {

                WinChecker(3);


                console.log(Won);
                if(Won){
                    localStorage.setItem("Player1Moves",NoOfMoves);

                    NoOfMoves = 0;
                    Player2turn = true;
                    window.location.href = "../html/multiplayer_2.html"
                    console.log(Player2turn);
                }


            }
            if (document.URL.includes("multiplayer_2") ) {

                WinChecker(3);


                console.log(Won);
                if(Won){
                    var NoOfMovesPlayer2 = NoOfMoves;
                    NoOfMoves = 0;
                    var NoOfMovesPlayer1 = localStorage.getItem("Player1Moves");
                    document.querySelector(".victory-screen").style.display = "block";
                    VictoryAudio.play();
                    if (NoOfMovesPlayer2 > NoOfMovesPlayer1) {
                        multiplayerHighScore = NoOfMovesPlayer1;
                        document.querySelector(".victory-screen h1").innerHTML = "Player 1 Wins";

                    }
                    if (NoOfMovesPlayer2 < NoOfMovesPlayer1) {
                        multiplayerHighScore = NoOfMovesPlayer2;
                        document.querySelector(".victory-screen h1").innerHTML = "Player 2 Wins";
                    }
                    if (NoOfMovesPlayer2 = NoOfMovesPlayer1) {
                        multiplayerHighScore = NoOfMovesPlayer1;
                        document.querySelector(".victory-screen h1").innerHTML = "Draw";
                    }
                    document.getElementById("Score").innerHTML = `Player 1 Moves: ${NoOfMovesPlayer1} <br> Player 2 Moves: ${NoOfMovesPlayer2}`;
                    if (localStorage.getItem("Multiplayer_HighScore") == null) {
                        localStorage.setItem("Multiplayer_HighScore",multiplayerHighScore);
                        Multiplayer_PlayerName = window.prompt("Thanks for first trying out the game. What's your name, Highscorer: ");
                        localStorage.setItem("Multiplayer_Player",Multiplayer_PlayerName);
                        document.getElementsByID("Highscore").innerHTML = "Great Game Guys";
    
                    }else{
                        var Multiplayer_CurrentHighScore = localStorage.getItem("Multiplayer_HighScore");
                        if (multiplayerHighScore >= Multiplayer_CurrentHighScore)  {
                            Multiplayer_PlayerName = window.prompt("You are the Highscorer. Enter your name Champion: ");
                            localStorage.setItem("Multiplayer_HighScore",multiplayerHighScore);
                            localStorage.setItem("Multiplayer_Player",Multiplayer_PlayerName);
                            document.getElementById("Highscore").innerHTML = `Hey ${Multiplayer_PlayerName}, You're the Champion now!`;
                        }
                        if (multiplayerHighScore < Multiplayer_CurrentHighScore) {
                            document.getElementById("Highscore").innerHTML = `${localStorage.getItem("Multiplayer_Player")} is the champion with a score of ${Multiplayer_CurrentHighScore}`;
                        }
                    }

                    clearLocalStorageData();
                }


            }






        })
    }
)









