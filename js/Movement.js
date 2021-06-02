
const grid = document.querySelector("#playGrid");
const tiles = Array.from(document.querySelectorAll("#playGrid .cell"));
const emptyTile = document.querySelector(".empty-block");
var NoOfMoves = 0;
var StartTime = 0;
var EndTime = 0;


tiles.map(tile => {
    tile.addEventListener("click", event => {

        var row = Number.parseInt(tile.getAttribute("data-row"));
        var col = Number.parseInt(tile.getAttribute("data-col"));
        var Lefttile = document.querySelector(`#playGrid [data-col ="${col - 1}"][data-row ="${row}"]`);

        if(Lefttile != null && Lefttile.classList.contains("empty-block")) {
            swapTiles(tile.id);

            NoOfMoves++;
        }


        var Righttile = document.querySelector(`#playGrid [data-col ="${col + 1}"][data-row ="${row}"]`);

        if(Righttile != null && Righttile.classList.contains("empty-block")){
            swapTiles(tile.id);
            NoOfMoves++;
        }

        var Toptile = document.querySelector(`#playGrid [data-col ="${col}"][data-row ="${row-1}"]`);
        if(Toptile != null && Toptile.classList.contains("empty-block")){
            swapTiles(tile.id);
            NoOfMoves++;
        }

        var Bottile = document.querySelector(`#playGrid [data-col ="${col}"][data-row ="${row + 1}"]`);

        if(Bottile != null && Bottile.classList.contains("empty-block")){
            swapTiles(tile.id);
            NoOfMoves;

        }
      

    })
})


function swapTiles(cell1){
    var temp = document.getElementById(cell1).style.backgroundColor;

    document.getElementsByClassName("empty-block")[0].style.background = temp;
    document.getElementsByClassName("empty-block")[0].classList.remove("empty-block");
    document.getElementById(cell1).classList.add("empty-block");
    document.getElementsByClassName("empty-block")[0].style.background = "#000000";
}








