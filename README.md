# facprojectsix

# THESEUS & THE MINOTAUR

## Preamble

###### For my Feature, I decided to construct a game based on the Greek legend of Theseus & the Minotaur, the background of which I've included on the page with the game as context. I wanted the Minotaur to be at the centre of the Labyrinth, and a number of Theseus sprites to navigate the Labyrinth and reach the Minotaur, whereupon they slay it. I envisaged that each Theseus would be timed as they made their way through the maze to reach Theseus, and each would be timed. The real objective of the game would be to time each Theseus sprite, and compare them, with a message on screen displaying which Theseus reached the Minotaur in the quickest time. 

## Planning, Preparation, and Considerations

###### Paul Vickers' book 'How To Think Like A Programmer', which I was introduced to when studying a stand-alone module in Problem-Solving for Programming module at Birkbeck, was helpful in instilling in me a rational, analytical, programming mindset, in which problem solving and planning takes up the majority of the time, with the coding only taking place afterwards. The book gets across helping to solve the problem of what is required first using pseudocode and other methods, before only committing to the code once the coder has understood what is necessary. Thus, being a coder is as much about problem-solving and planning as it is about actually sitting down and writing the code. 

###### My first step was to think about what were required and write them down in pseudocode.
1.	The game container, which contains the game
2.	The game map
3.	The controls
4.	The layers: how many? 
5. Floor
6. Walls
7. Sprites:
  - Theseus * ?
  - Minotaur
8. Background context on screen to the legend of Theseus and Minotaur
9. Score counter
10.	Start button
11.	Success message within the game map that appears when Theseus slays the minotaur, displaying the time that has taken for each Theseus to do so
12.	Instructions on controlling the Theseus sprite via cursor keys or buttons 
13.	Visual controls on the screens
14.	Final results that show which Theseus was the quickest to display the Minotaur

###### I then had to think about how many Theseus sprites I wanted. Initially I thought of four, to compare with each other, but this seemed excessive when the point of the game could be achieved with two. I also considered at one point having a red line follow each Theseus as they made their way through the Labyrinth, symbolising the ball of thread that Theseus took with him to find his way out of the maze after slaying the Minotaur, but this never came to fruition due to the complexity of working on the project. 

###### My next step was to construct a wireframe of the Labyrinth, with black walls and white floors. I looked at representations of Labyrinths online before using Google Sheets, where I experimented with different sizes of Labryinth, and permutations of wall layout and patterns. An important consideration when constructing the Labyrinth was that each of the two Theseuses had to have an equidistant path to the Minotaur, so that the comparisons between how long each took to get to the Minotaur was fair. In order for this to be realised, the left and right sides of the Labryinth had to mirror each other in the same pattern, once I decided where the two Theseuses would start respectively and the Minotaur would be located at the centre. I had to numerically devise a Labryinth that could accommodate an equidistant path to the Minotaur for each Theseus sprite, so that it would be the same number of steps for both to reach the Minotaur. My final design for the Labryinth was 19 rows x 15 columns, at 34px dimensions for each tile, with the Theseus sprites entering the Labyrinth via the top row on either side. I then sourced visual images of Theseus and the Minotaur to be used as sprites.     

## Building

###### Because of my limited knowledge in building computer game applications like this, I used Nevin Katz' 'Build A MazeGame with Vanilla JavaScript' tutorial as a basis, which can be viewed here: https://medium.com/codex/build-a-maze-game-with-vanilla-javascript-part-1-of-2-ddfd35e84e93
###### I wanted to use this basis as a template, but run with it and completely transform the code into something my own, which I hope I've done. 
###### My first step was to build the labyrinth/maze for the first level. It became obvious quickly that rather than doing this in the HTML, it made more sense to do it in the JavaScript, as a Map array, so that the maze structure could be viewed easily. This, in turn, was placed inside an array containing an object called Levels, with the digits 0 representing a floor tile, and 1 representing a wall tile. Within the Levels array, the first Theseus' beginning position was keyed in via x and y coordinates, along with that of the Minotaur (the "goal") at the centre of the Labyrinth.
###### The next step was to build the main Game prototype, from which all the subsequent functions referenced. This connected all the elements of the maze together.
###### For movement of the Theseus sprite, I followed the tutorial in allocating movement on a user's keyboard via the cursor keys. I also added on-screen buttons, so that people viewing the game through a mobile device or similar could easily move the Sprites via manipulating the DOM. The aforementioned demarcating of 0 as a floor tile and 1 as a wall tile meant that the Theseus sprite could be 'instructed' via the code to not walk over a wall tile via the sprite movement functions, which were confusing to understand to first.
###### Once Theseus was up and running in the maze, another big step was to construct a Start button and Timer, which I did via constructing a StartTimer function. The  StartTimer function included a variable called FinalTimeZone, which crucially recorded the time at which the Theseus sprite reached the Minotaur, at which point the endTimer function stopped the timer. I then constructed the checkGoal function to display feedback to the user on the time that the Theseus sprite had taken to reach the Minotaur.

## Debugging and Challenges

###### The project was the most complex and advanced that I have worked on, and brought up many challenges, which involved continual use of the console log. Understanding how a Game Prototype object hardwires everything together, with the keyword 'this' being used inside each function to reference that specific function, as part of the wider object, was the first. But the real challenge came in transitioning the first level to the second one. The breaking up of the startTimer and endTimer functions into two separate ones for each level seemed obvious, but more complicated was understanding that for the game to work, the two maps in the JavaScript could not be part of the same level array containing the objects of the two maps, with the first level array element 0 and the second element 1. Instead, after debugging, I realised that the best way to have two levels was to have them as two separate arrays.
###### An additionally complicated challenge when debugging was hardwiring the onscreen buttons so that they worked the same way as the keyboard buttons, including their potential for movement being controlled by the Start button. The solution was emplying a boolean called startFlag, but this took a while to fully comprehend, and deploying it in both the buttonListeners function and the startBtn addEventListener. In order for the onscreen buttons to work, the entire 13th column of the Labyrinth was demarcated in the buttonListeners function as playerTwo - the second Theseus - which meant that if the first Theseus went into any of the tiles in the 13th column, it transformed confusingly into the second Theseus (with this explained via the console log), and the game would then not work. I managed to 'hide' this fact that ensuring that the route that the first Theseus takes to the Minotaur would not go anywhere near the 13th column.
###### I also struggled at first to understand how to reset the timer when transitioning to the second level, until the obvious answer became clear - to include the startTimer(2) function in the changeLevel function. 
