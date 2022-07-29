let levels = [];
let levels1 = [];
let firsTime = 0;
let startFlag = false;
let playerOneWon = false;
let playerTwoWon = false;

levels[0] = {
  map: [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  theseus: {
    // Theseus sprite beginning position
    x: 1,
    y: 0,
  },
  goal: {
    // The Minotaur sprite position at centre of maze
    x: 7,
    y: 9,
  },
  theme: "default",
};

levels1[0] = {
  map: [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  theseus: {
    // Second Theseus sprite beginning position
    x: 13,
    y: 0,
  },
  goal: {
    // The Minotaur sprite position at centre of maze
    x: 7,
    y: 9,
  },
  theme: "default",
};
const startBtn = document.querySelector('#start-button'); // Variable for Start button



//The Game Object:

// The id being passed in as the first argument is the id of the DOM element
// The two level objects are being passed in as the second argument
let playerName;

function Game(id, level , player) {
  
  playerName = player;
  
  console.log('level',player);
  
  this.el = document.getElementById(id);

  this.level_idx = 0; // the two levels of the game

  this.tileTypes = ["floor", "wall"];

  this.tileDim = 34; // dimensions of each tile in pixels

  // Inherits the level's properties: map, Theseus start for each of the two levels, Minotaur position in centre
  this.map = level.map;
  this.theme = level.theme;
  this.theseus = { ...level.theseus }; // spread operator
  // console.log('theseus',this.theseus);
  this.goal = { ...level.goal };
}

// Populates the map with each tile via a nested loop. X and Y are based on the normal coordinate system of
// x: horizontal axis, y: vertical axis

Game.prototype.populateMap = function() {

  this.el.className = 'game-container ' + this.theme;

  let tiles = document.getElementById('tiles');

  for (var y = 0; y < this.map.length; ++y) {

    for (var x = 0; x < this.map[y].length; ++x) {

      let tileCode = this.map[y][x];

      let tileType = this.tileTypes[tileCode];

      let tile = this.createEl(x, y, tileType);

      tiles.appendChild(tile); // add to tile layer
    }
  }
};

// Creates a tile or sprite element

// {Number} x = The x coordinate in map
// {Number} y = The y coordinate in map

Game.prototype.createEl = function(x,y,type) {
  // create one tile.
  let el = document.createElement('div');

  // two class names: one for tile, one for the tile type.
  el.className = type;

  // set width and height of tile based on the passed-in dimensions(34px for each tile)
  el.style.width = el.style.height = this.tileDim + 'px';

  // set left positions based on x coordinate.
  el.style.left = x * this.tileDim + 'px';

  // set top position based on y coordinate.
  el.style.top = y * this.tileDim + 'px';

  return el;
};

// Places the Theseus or Minotaur (goal) sprites

// The type being passed in as an argument is either a sprite or a tile

Game.prototype.placeSprite = function(type) {
  // syntactic sugar
  let x = this[type].x;

  let y = this[type].y;

  // reuse the createTile function
  let sprite = this.createEl(x,y,type);

  sprite.id = type;

  // get half the difference between tile and sprite.

  // grab the layer
  let layer = this.el.querySelector('#sprites');

  layer.appendChild(sprite);

  return sprite;
};

// Sizes up the map

Game.prototype.sizeUp = function() {
  // Sizing up of inner container
  let map = this.el.querySelector('.game-map');

  // Inner container, height, and width in pixels
  map.style.height = this.map.length * this.tileDim + 'px';

  map.style.width = this.map[0].length * this.tileDim + 'px';
};


// Moves the Theseus sprite using a switch statement

Game.prototype.moveTheseus = function(event) {
  event.preventDefault();

  if (event.keyCode < 37 || event.keyCode > 40) {
    return;
  }
  switch (event.keyCode) {
    case 37:
      this.moveLeft();
      break;

    case 38:
      this.moveUp();
      break;

    case 39:
      this.moveRight();
      break;

    case 40:
      this.moveDown();
      break;
  }
};


// Listens for a keyboard input

Game.prototype.keyboardListener = function() {
  document.addEventListener("keydown", (event) => {
    this.moveTheseus(event);
    this.checkGoal();
    this.endTimer();
    if(this.theseus.x===13){ // Starting position for second Theseus sprite
      Game('game-container-2',levels1[0],'playerTwo');
    }
  });
};


// Moves Theseus sprite left

Game.prototype.moveLeft = function() {
  if (this.theseus.x == 0) {
    return;
  }

  let nextTile = this.map[this.theseus.y][this.theseus.x - 1];
  if (nextTile == 1) {
    return;
  }

  this.theseus.x -= 1;

  this.updateHoriz();
};


// Moves Theseus sprite up

Game.prototype.moveUp = function() {
  if (this.theseus.y == 0) {
    return;
  }

  let nextTile = this.map[this.theseus.y - 1][this.theseus.x];
  if (nextTile == 1) {
    return;
  }

  this.theseus.y -= 1;

  this.updateVert();
};


// Moves Theseus sprite right

Game.prototype.moveRight = function() {
  if (this.theseus.x == this.map[this.theseus.y].length - 1) {
    return;
  }
  let nextTile = this.map[this.theseus.y][this.theseus.x + 1];

  if (nextTile == 1) {
    return;
  }

  this.theseus.x += 1;

  this.updateHoriz();
};


// Moves Theseus sprite down

Game.prototype.moveDown = function() {
  if (this.theseus.y == this.map.length - 1) {
    return;
  }
  let nextTile = this.map[this.theseus.y + 1][this.theseus.x];

  if (nextTile == 1) {
    return;
  }

  this.theseus.y += 1;

  this.updateVert();
};


// Update helpers for Theseus movement

Game.prototype.updateHoriz = function() {
  this.theseus.el.style.left = this.theseus.x * this.tileDim + 'px';
};

Game.prototype.updateVert = function() {
  this.theseus.el.style.top = this.theseus.y * this.tileDim + 'px';
};


// Sets movement of Theseus sprite via onscreen buttons

Game.prototype.buttonListeners = function() {

  let up = document.getElementById('up');

  let left = document.getElementById('left');

  let down = document.getElementById('down');

  let right = document.getElementById('right');

  let obj = this;


  if (startFlag) {

    up.addEventListener("mousedown", function() {
      obj.moveUp(); // Moves Theseus upwards using the onscreen buttons
      obj.checkGoal(); // Checks if Theseus has reached the Minotaur
      obj.endTimer();
      if(obj.theseus.x===13){ // Starting position for second Theseus sprite
        Game('game-container-2',levels1[0],'playerTwo');
      }
    });

    down.addEventListener("mousedown", function() {
      obj.moveDown(); // Moves Theseus downwards using the onscreen buttons
      obj.checkGoal();
      obj.endTimer();
      if(obj.theseus.x===13){ // Starting position for second Theseus sprite
        Game('game-container-2',levels1[0],'playerTwo');
      }
    });

    left.addEventListener("mousedown", function() {
      obj.moveLeft(); // Moves Theseus left using the onscreen buttons
      obj.checkGoal();
      obj.endTimer();
      if(obj.theseus.x===13){ // Starting position for second Theseus sprite
        Game('game-container-2',levels1[0],'playerTwo');
      }
    });

    right.addEventListener("mousedown", function() {
      obj.moveRight(); // Moves Theseus right using the onscreen buttons
      obj.checkGoal();
      obj.endTimer();
      if(obj.theseus.x===13){ // Starting position for second Theseus sprite
        Game('game-container-2',levels1[0],'playerTwo');
      }
    });
  }
};



Game.prototype.placeLevel = function() {

  this.populateMap();

  this.sizeUp();

  this.placeSprite('goal');

  let theseusSprite = this.placeSprite('theseus');

  this.theseus.el = theseusSprite;
};

// Detects if user has pressed onscreen buttons or clicked on maze to progress to next level

Game.prototype.addListeners = function() {

  this.keyboardListener();

  this.buttonListeners();

  this.addMazeListener();

};

// Process for clicking on maze to progress to next level

Game.prototype.addMazeListener = function() {
  let map = this.el.querySelector('.game-map');

  let obj = this;

  map.addEventListener("mousedown", function (e) {
    if (obj.theseus.y != obj.goal.y || obj.theseus.x != obj.goal.x) {
      return;
    }

    obj.changeLevel();

    let layers = obj.el.querySelectorAll('.layer');

    for (layer of layers) {
      layer.innerHTML = "";
    }

    obj.placeLevel();
    obj.checkGoal();
  });
};

// See comment above

Game.prototype.changeLevel = function() {

  this.level_idx++;

  let level = levels1[0];

  this.map = level.map;

  this.theme = level.theme;

  this.theseus = { ...level.theseus };

  this.goal = { ...level.goal };

  startTimer2();

};

// Initialisation

const myGame = new Game('game-container-1',levels[0],'playerOne');

const theseusSprite = myGame.placeSprite('theseus');

function init() {

  myGame.populateMap();

  myGame.sizeUp();

  myGame.placeSprite('goal');

  myGame.addMazeListener();

  myGame.buttonListeners();

  myGame.theseus.el = theseusSprite;

}

init();


// Controls the Start button

startBtn.addEventListener("click", () => {

  startFlag = true;

  myGame.theseus.el = theseusSprite;

  myGame.keyboardListener();

  init();

});


// Defines the timer element

const timer1 = document.getElementById('timer');
const timer2 = document.getElementById('timer');

let timerInterval1; let timerInterval2;
let finalTimeZone1; let finalTimeZone2;// Records the time that Theseus reaches his goal (the Minotaur)


if (levels[0] && playerName ==='playerOne') {

  startBtn.addEventListener("click", startTimer1);

} else if (levels1[0]  && playerName ==='playerTwo') {
  startBtn.addEventListener("click", startTimer2);
}

function startTimer1() {
  clearInterval(timerInterval1); // Clears an existing running timer so that it starts at 00:00

  let second = 0,
      minute = 0,
      hour = 0; // Initalisation of variables

  timerInterval1 = setInterval(function () {
    // Sets an interval every 1000 ms

    timer1.innerHTML = // Sets the timer to display a two digit representation
        (hour ? hour + ":" : "") + // Use ternary operators to set hours, minutes, and seconds
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second);

    second++; // Increments one second every time

    if (second == 60) {
      // Checks if the seconds equal 60, in which case one minute is added
      // and the seconds are reset to 0
      minute++;

      second = 0;
    }

    if (minute == 60) {
      hour++; // Checks if the minutes equal 60, in which case one hour is added
      // and the minutes are reset to 0

      minute = 0;
    }

    finalTimeZone1 =
        (hour ? hour + ":" : "") + // Sets an end to the timer interval and
        (minute < 10 ? "0" + minute : minute) + // stores it in variable
        ":" +
        (second < 10 ? "0" + second : second);
  }, 1000);

}

function startTimer2() {
  clearInterval(timerInterval2); // Clears an existing running timer so that it starts at 00:00

  let second = 0,
      minute = 0,
      hour = 0; // Initalisation of variables

  timerInterval2 = setInterval(function () {
    // Sets an interval every 1000 ms

    timer2.innerHTML = // Sets the timer to display a two digit representation
        (hour ? hour + ":" : "") + // Use ternary operators to set hours, minutes, and seconds
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second);

    second++; // Increments one second every time

    if (second == 60) {
      // Checks if the seconds equal 60, in which case one minute is added
      // and the seconds are reset to 0
      minute++;

      second = 0;
    }

    if (minute == 60) {
      hour++; // Checks if the minutes equal 60, in which case one hour is added
      // and the minutes are reset to 0

      minute = 0;
    }

    finalTimeZone2 =
        (hour ? hour + ":" : "") + // Sets an end to the timer interval and
        (minute < 10 ? "0" + minute : minute) + // stores it in variable
        ":" +
        (second < 10 ? "0" + second : second);
  }, 1000);

}


// Stops the timer if Theseus gets to the goal (the Minotaur)

Game.prototype.endTimer = function() {



  if (levels[0] && playerName==='playerOne'  && this.theseus.y == this.goal.y && this.theseus.x == this.goal.x) {

    {
      // alert('called');
      clearInterval(timerInterval1);
    }

  }

  else if (levels1[0] && playerName==='playerTwo' && this.theseus.y == this.goal.y && this.theseus.x == this.goal.x) {

    {
      clearInterval(timerInterval2);
    }

  }

}


// Checks goal and if true, confirms text below

Game.prototype.checkGoal = function () {
  
  let body = document.querySelector('body');

  if (levels[0] && playerName==='playerOne' && this.theseus.y == this.goal.y && this.theseus.x == this.goal.x) {
    console.log('if called levels[0]');
    // Checks if Theseus gets to the Minotaur
    console.log("Called FinalTimeZone1"); // confirms in Console
    body.className = "success"; // Unleashes CSS effects
    message.innerHTML = `Well done! You have navigated the Labyrinth and slayed the Minotaur in ${finalTimeZone1} seconds.
        Tap the maze to launch the rival Theseus and compare who's slayed the Minotaur the quickest!`;
    console.log(finalTimeZone1);
    startFlag = false;
    playerOneWon = true;
  }

    else if (levels1[0] && playerName==='playerTwo' && this.theseus.y == this.goal.y && this.theseus.x == this.goal.x
    && finalTimeZone1 < finalTimeZone2) {

    console.log("Called FinalTimeZone2"); // confirms in Console
    body.className = "success"; // Unleashes CSS effects
    message.innerHTML = `Well done! You have navigated the Labyrinth and slayed the Minotaur in ${finalTimeZone2} seconds.
    The first Theseus is the winner with ${finalTimeZone1} seconds compared with the second Theseus' ${finalTimeZone2}!`;
    console.log(finalTimeZone2);
    startFlag = false;
    }

    else if (levels1[0] && playerName==='playerTwo' && this.theseus.y == this.goal.y && this.theseus.x == this.goal.x
    && finalTimeZone2 < finalTimeZone1) {

      console.log("Called FinalTimeZone2"); // confirms in Console
      body.className = "success";
      message.innerHTML = `Well done! You have navigated the Labyrinth and slayed the Minotaur in ${finalTimeZone2} seconds.
      The second Theseus is the winner with ${finalTimeZone2} seconds compared with the first Theseus' ${finalTimeZone1}!`;
      console.log(finalTimeZone2);
      startFlag = false;
    }

    else if (levels1[0] && playerName==='playerTwo' && this.theseus.y == this.goal.y && this.theseus.x == this.goal.x
    && finalTimeZone1 == finalTimeZone2) {

      message.innerHTML = `Both Theseuses took the same amount of time to slay the Minotaur at ${finalTimeZone1} seconds 
      and ${finalTimeZone2} seconds each. 
      Therefore, the result is a tie.`
      startFlag = false;
    }
  
    else {
    body.className = ""
    }

}



