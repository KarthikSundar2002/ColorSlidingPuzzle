

const grid = document.querySelector("#playGrid");
const tiles = Array.from(document.querySelectorAll("#playGrid .cell"));
const emptyTile = document.querySelector(".empty-block");



tiles.map(tile => {
    tile.addEventListener("click", event => {

        var row = Number.parseInt(tile.getAttribute("data-row"));
        var col = Number.parseInt(tile.getAttribute("data-col"));

        // var tilePos = GetPos(tile);
        if(col-1 > -1){
            var Lefttile = document.querySelector(`#playGrid [data-col ="${col - 1}"][data-row ="${row}"]`);

            if(Lefttile.classList.contains("empty-block")) {
                swapTiles(tile.id);
            }
        }
        if(col + 1 <  5){

            var Righttile = document.querySelector(`#playGrid [data-col ="${col + 1}"][data-row ="${row}"]`);

            if(Righttile.classList.contains("empty-block")){
                swapTiles(tile.id);

            }
        }
        if(row-1 > -1){
            var Toptile = document.querySelector(`#playGrid [data-col ="${col}"][data-row ="${row-1}"]`);
            if(Toptile.classList.contains("empty-block")){
                swapTiles(tile.id);

            }
        }
        if(row+1 < 5){
            var Bottile = document.querySelector(`#playGrid [data-col ="${col}"][data-row ="${row + 1}"]`);
            if(Bottile.classList.contains("empty-block")){
                swapTiles(tile.id);

            }
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






