# Socket 4
### An exploration of sockets

Okay so I've started working on this mainly because I wanted to build a
browser-based multiplayer game. I once built the infamous [treemagotchi](http://treemagotchi.herokuapp.com/)
game (which probably works but might not create new accounts correclty
because it depended on an API) and I had a lot of fun. This time I decided
to use my canvas experience to create another game; a completely new and
revolutionary game (almost certainly not true by the way) using the following:  

* HTML5/CSS/JS
* Canvas
* [KineticJS](http://agavestorm.com/kineticjs/index.html)
* [Socket.io](http://socket.io/get-started/chat/)
* [Node](https://nodejs.org/)
* Interesting data structures (More on that as it develops)

## Current Version: Alpha?

I think this is currently in alpha because the MVP game runs by itself, but
it is not using sockets for the time being. If you're reading this then you
somehow got here before I even added sockets, so you may be interested in 
more than just sockets but also in [new, revolutionary game designs](http://cdn.meme.am/instances/500x/50383234.jpg). 
If you want to look at my code for reference towards your own then go ahead! Just 
point people back here too so others know where it started.


[Joan Torres]  
October 10, 2015

### P.S. Live demo (Game only)
There's a demo of this alpha MVP, never-before-seen game if you follow this link:  

* [http://gunga.github.io/blog-posts/projects/socket4/](http://gunga.github.io/blog-posts/projects/socket4/)

## Milestone Reached

So now the game is playable using sockets! However, I still want to implement
a log that will add some security aspects to it. The main reason being that a
not-so-honest player can read the code and send events to his opponent where
he modifies his turn slightly. Now the log could in theory be modified, but
I'll just make sure to use some nifty tricks to make that quite hard.  

[Joan Torres]  
October 12, 2015
