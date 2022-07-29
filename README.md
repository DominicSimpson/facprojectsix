# facprojectsix

# THESEUS & THE MINOTAUR

## Preamble

###### For my Feature, I decided to construct a game based on the Greek legend of Theseus & the Minotaur, the background of which I've included on the page with the game as context. I wanted the Minotaur to be at the centre of the Labyrinth, and a number of Theseus sprites to navigate the Labyrinth and reach the Minotaur, whereupon they slay it. I envisaged that each Theseus would be timed as they made their way through the maze to reach Theseus, and each would be timed. The real objective of the game would be to time each Theseus sprite, and compare them, with a message on screen displaying which Theseus reached the Minotaur in the quickest time. 

## Planning, Preparation, and Considerations

###### Paul Vickers' book 'How To Think Like A Programmer', which I was introduced to when studying a stand-alone module in Problem-Solving for Programming module at Birkbeck, was helpful in instilling in me a rational, analytical, programming mindset, in which problem solving and planning takes up the majority of the time, with the coding only taking place afterwards. The book gets across helping to solve the problem of what is required first before only committing to the code once the coder has understood what is necessary. Thus, being a coder is as much about problem-solving and planning as it is about actually sitting down and writing the code. 

###### My first step was to think about what were required and write them down:
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

###### My next step was to construct a wireframe of the Labyrinth, with black walls and white floors. I looked at representations of Labyrinths online before using Google Sheets, where I experimented with different sizes of Labryinth, and permutations of wall layout and patterns. An important consideration when constructing the Labyrinth was that each of the two Theseuses had to have an equidistant path to the Minotaur, so that the comparisons between how long each took to get to the Minotaur was fair. In order for this to be realised, the left and right sides of the Labryinth had to mirror each other in the same pattern, once I decided where the two Theseuses would start respectively and the Minotaur would be located at the centre. I had to numerically devise a Labryinth that could accommodate an equidistant path to the Minotaur for each Theseus sprite, so that it would be the same number of steps for both to reach the Minotaur. My final design for the Labryinth was 19 rows x 15 columns, with the Theseus sprites entering the Labyrinth via the top row on either side. I then sourced visual images of Theseus and the Minotaur to be used as sprites.     

## Building

###### Because of my limited knowledge in building computer game applications like this, I used Nevin Katz' 'Build A MazeGame with Vanilla JavaScript' tutorial as a basis, which can be viewed here: https://medium.com/codex/build-a-maze-game-with-vanilla-javascript-part-1-of-2-ddfd35e84e93
###### My first step was to build the maze for the first level. Rather than doing this in the HTML, it made more sense to do it in the JavaScript, as a Map array. This, in turn, was placed inside an object called Levels, with the digits 0 representing a floor tile, and 1 representing a wall tile. Within the Levels object, the first Theseus' beginning position was keyed in via x and y coordinates, along with that of the Minotaur (the "goal") at the centre of the Labyrinth.  
###### For movement of the Theseus sprite, I followed the tutorial in allocating movement on a user's keyboard via the cursor keys. I also added on-screen buttons, so that people viewing the game through a mobile device or similar could easily move the Sprites via manipulating the DOM. The aforementioned demarcating of 0 as a floor tile and 1 as a wall tile meant that the Theseus sprite could be 'instructed' via the code to not walk over a wall tile via the sprite movement functions.
###### Once Theseus was up and running in the maze, another big step was to construct a Start button and Timer, which I did via constructing a StartTimer function. The  StartTimer function included a variable called FinalTimeZone, which crucially recorded the time at which the Theseus sprite reached the Minotaur, at which point the endTimer function stopped the timer. I then constructed the checkGoal function to display feedback to the user on the time that the Theseus sprite had taken to reach the Minotaur.  
