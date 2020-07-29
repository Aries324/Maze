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
];

function maze(grid) {
  let game = document.createElement("div");

  for (let rowCount = 0; rowCount < grid.length; rowCount++) {
    let row = document.createElement("div");
    let currentRow = grid[rowCount];
    row.className = "row";

    row.id = rowCount;

    for (let column = 0; column < currentRow.length; column++) {
      let divEl = document.createElement("div");
      divEl.className = "cell";
      if (grid[rowCount][column] === "S") {
        divEl.classList.add("S");
      }
      if (grid[rowCount][column] === "W") {
          divEl.classList.add("W")
      }
      divEl.id = rowCount + "," + column;
      let text = document.createTextNode(currentRow[column]);
      divEl.appendChild(text);
      row.appendChild(divEl);
    }
    game.appendChild(row);
  }
  document.body.appendChild(game);
}

maze(map);

let startPosition = document.querySelector(".S");
let playerEl = document.createElement("img");
playerEl.src = "../PNG/Golem_01";
startPosition.appendChild(playerEl);
playerEl.className = "player";

let player = {
  x: 0,
  y: 9,
};

let playerTop = 0;
let playerLeft = 0;

function canMove(x, y) {
  if (
    y >= 0 &&
    x >= 0 &&
    y < map.length &&
    x < map[0].length &&
    map[y][x] != "W"
  )
    return true;
}

document.addEventListener("keydown", keydownHandler);
function keydownHandler(e) {
  console.log(event.key, player);

  if (e.key === "ArrowUp") {
    if (canMove(player.x, player.y - 1)) {
      player.y--;
      playerEl.style.top = playerTop - 50 + "px";
      playerTop -= 50;
      checkForWin(player.x, player.y);
    }
  } else if (e.key === "ArrowDown") {
    if (canMove(player.x, player.y + 1)) {
      player.y++;
      playerEl.style.top = playerTop + 50 + "px";
      playerTop += 50;
      checkForWin(player.x, player.y);
    }
  } else if (e.key === "ArrowLeft") {
    if (canMove(player.x - 1, player.y)) {
      player.x--;
      playerEl.style.left = playerLeft - 50 + "px";
      playerLeft -= 50;
      checkForWin(player.x, player.y);
    }
  } else if (e.key === "ArrowRight") {
    if (canMove(player.x + 1, player.y)) {
      player.x++;
      playerEl.style.left = playerLeft + 50 + "px";
      playerLeft += 50;
      checkForWin(player.x, player.y);
    }
  }
}
function checkForWin(x, y) {
    if (x === 20 && y === 8) {
        image = document.createElement('img')
        image
    window.alert("You won!!!");
  }
}
