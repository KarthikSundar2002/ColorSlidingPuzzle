var Won = false;
var PlayerName = "";
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

Tiles.map(
    tile => {
        tile.addEventListener("click",event => {
            WinChecker(3);
            Won = true;
            if (Won) {
                document.querySelector(".victory-screen").style.display = "block";

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
        })
    }
)
if (NoOfMoves == 1) {
    StartTime = Date.now();
}


