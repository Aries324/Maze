//2D  array of cells
    // need floors key are marked with empty cells
    // need walls key are marked with W
    // needs a start key is marked with S
    // needs a finish key is marked with F
        //each cell needs to b a div
//get the player's position
    //need player
    //keep track of player's current position

//make the player move
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
]

function createMaze (grid) {
    
    let tableEl = document.createElement('div');

    for (let rowCount = 0; rowCount < grid.length; rowCount++){
        
        let trEl = document.createElement('div');
        let currentRow = grid [rowCount];
        trEl.className = 'row';
        
        trEl.id = rowCount;

        for (let cellCount = 0; cellCount < currentRow.length; cellCount++){
            let divEl = document.createElement('div');
             divEl.className = 'cell';
            if (grid[rowCount][cellCount] === 'S'){
                divEl.classList.add ('S');
            }
            if (grid[rowCount][cellCount]=== 'W'){
                divEl.classList.add('W');
            }
            divEl.id = rowCount + "," + cellCount;
            let text = document.createTextNode(currentRow[cellCount]);
            divEl.appendChild(text);
            trEl.appendChild(divEl);
        }
        tableEl.appendChild(trEl);
    
    
    } 
document.body.appendChild(tableEl);
} 
createMaze(map)


        let startPosition = document.querySelector('.S')
        let playerEl = document.createElement ('div');
        startPosition.appendChild(playerEl);
        playerEl.className = 'player'

    let player = {
        x: 0,
        y: 9
    };

    let playerTop = 0;
    let playerLeft = 0;
   

    function canMove(x, y) {
        if(y >= 0 && x >= 0 &&
            y < map.length &&
            x < map[0].length &&
            map[y][x] != 'W')
            return true;
    }

    
   document.addEventListener('keydown',keydownHandler);
   function keydownHandler (e) {
       console.log(event.key, player)
      
           if (e.key === 'ArrowUp'  ) {
               if(canMove(player.x, player.y-1)){
                player.y--;
                playerEl.style.top =(playerTop -  25 )+ 'px';
                playerTop -= 25;
                checkForWin(player.x, player.y);
            }
       }    else if (e.key === 'ArrowDown' ) {
            if(canMove(player.x, player.y+1)){
                player.y++;
                playerEl.style.top =(playerTop +  25 )+ 'px';
                playerTop += 25;
                checkForWin(player.x, player.y);
            }
       }    else if (e.key === 'ArrowLeft') {
           if(canMove(player.x-1, player.y)){
           
                player.x--;
                playerEl.style.left =(playerLeft -  25 )+ 'px';
                playerLeft -= 25;
                checkForWin(player.x, player.y);
            }
       }    else if (e.key === 'ArrowRight' ){
           if(canMove(player.x + 1, player.y)){
                player.x++;
                playerEl.style.left =(playerLeft +  25 )+ 'px';
                playerLeft += 25;
                checkForWin(player.x, player.y);
            }
       }
       
      
       }
       function checkForWin(x,y){
           if (x === 20 && y === 8){
              let winEl = document.createElement('div')
              winEl.innerHTML = '<h2>YOU WIN!!!!</h2>'
              document.body.appendChild(winEl)

           }
       }
       