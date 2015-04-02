// Title
var title = confirm ("Welcome to the game");
// Asking for age
var myAge = prompt("What is your age?");
if(myAge > 13) {
  alert("You can't play this game..................Just kiding :P");
             }
else{
 alert("Of course you can play this game, it isn't M rated :P");
    }
//Asking for name
var name;
name = prompt("What is your name?");
alert("Welcome to the game " + name +  " your adevnture awaits chosen hero");


//Intro to game
prompt("You are chosen to save this world " + name + ", I your creator have decided that you shall be the saviour of this world I created for you, DON'T SCREW UP!"); 
//Similiar beginning to almost every adventure game
alert("Voice in head:You woke up from a horrible dream, the village leader is summoning you hurry he has been waiting for an hour!");

alert("You have arrived in the village leader's house.");

alert("Village leader:There you are "+ name + ",where have you been?");

alert("you:Sleeping.....");

alert("village leader: I need you to go to the strafton city to speak with the council, they have requested for you, I don't know why your not very reliable but what ever.");

alert("You have arrived to Strafton City now you go find the council");

alert("You enter the council room and you only see Cylan the leader of the council.");
alert("Cylan:"+ name + ",I need you to do something for me. I need you to go search for the Legendary Item that no one has found but rumored about it, it is around the north part of the country, we are near it but it might take a few days.");
alert("Cylan:You aren't strong enough so I'll give you a job advancment!");

var fighter = 1;
var longranged = 2;
var balanced = 3;
var brawler = 4;
var knight = 5;
var theif = 6;
var player = prompt("Do you prefer to be a fighter, long ranged or balanced?").toUpperCase();
