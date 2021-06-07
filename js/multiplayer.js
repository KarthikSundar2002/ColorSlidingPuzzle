var PlayerBoard = document.getElementById("PlayerAnnoucement");
var Player2turn = false;
if(document.URL.includes("multiplayer_1")){
    while(!solvable){
        document.getElementById("finalGrid").innerHTML = '';
        document.getElementById("playGrid").innerHTML = '<div class="victory-screen"><h1>You Win</h1><h2 id="Score"></h2><p id="Highscore"></p></div>';
        GridGenerator(3,"finalGrid");
        GridGenerator(5,"playGrid");
        CheckSolvablity();
        console.log(solvable);

    }
    PlayerBoard.innerHTML = "It is Player 1's turn";
    var FinalGridState = document.querySelectorAll("#finalGrid .cell")

    for (let i = 0; i < FinalGridState.length; i++) {
        localStorage.setItem(`FinalGrid${i}`,FinalGridState[i].style.backgroundColor);

    }


    var PlayGridState = document.querySelectorAll("#playGrid .cell");

    for (let i = 0; i < PlayGridState.length; i++) {
        localStorage.setItem(`PlayGrid${i}`,PlayGridState[i].style.backgroundColor);


    }

}





if(document.URL.includes("multiplayer_2")){


    Won = false;
    document.getElementById("finalGrid").innerHTML = '';
    document.getElementById("playGrid").innerHTML = '<div class="victory-screen"><h1>You Win</h1><h2 id="Score"></h2><p id="Highscore"></p></div>';
    let k = 0;
    let t = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById("finalGrid").innerHTML += "<div class='cell' id='" + "finalGrid" + k + "' data-row ='" + i + "' data-col ='" + j + "'></div>";
            document.querySelector("#finalGrid" + k).style.background = localStorage.getItem(`FinalGrid${k}`);
            
            k++;

        }
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("playGrid").innerHTML += "<div class='cell' id='" + "playGrid" + t + "' data-row ='" + i + "' data-col ='" + j + "'></div>";
            document.querySelector("#"+ "playGrid" + t).style.background = localStorage.getItem(`PlayGrid${t}`);
            if (localStorage.getItem(`PlayGrid${t}`) == "rgb(0, 0, 0)") {
                document.querySelector("#"+ "playGrid" + t).classList.add("empty-block");
            }
            t++;
        }
    }
    PlayerBoard.innerHTML = "It is Player2's Turn";







}