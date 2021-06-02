var Won = false;

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
            if (Won) {
                document.querySelector(".victory-screen").style.display = "block";

                EndTime = Date.now();
                var timeTaken = EndTime - StartTime;
                console.log(timeTaken);
                var Score = Math.floor((10000000/timeTaken) + 10000/NoOfMoves);
                document.getElementById("Score").innerHTML = `You got a score of ${Score}`;

            }
        })
    }
)
if (NoOfMoves == 1) {
    StartTime = Date.now();
}


