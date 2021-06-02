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
            console.log(Won);
            
            if (Won) {
                document.querySelector(".victory-screen").style.display = "block";
            }
        })
    }
)

if (Won) {
    document.getElementById("#playGrid").classList.add("victory-screen");
}
