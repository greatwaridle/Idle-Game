var humans = 0;
var birthrate = 0.01;
var partialHumanSpawn = 0;
var nextGen = Math.floor((humans/2) * birthrate);
var Born = 0;
var cursors = 0;
var resourcecollector = 0;
var resources = 2000;

function humansClick(number){ 
	if (resources >= 100){
		humans = humans + number;
		resources = resources - 100;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resources').innerHTML = resources;
	};
};

function spawnhumans(){
	nextGen = Math.floor((humans/2) * birthrate);
	birthrate = birthrate + 0.01;
	document.getElementById('pregorate').innerHTML = pregorate;

};

function addresourcecol(number){
		if (humans >= number){
			resourcecollector = resourcecollector + number;
			humans = humans - number;
			document.getElementById('resourcecollector').innerHTML = resourcecollector;
			document.getElementById('humans').innerHTML = humans;
		};
};
			
function remresourcecol(number){
		if (resourcecollector >= number){
			resourcecollector = resourcecollector - number;
			humans = humans + number;
			document.getElementById('resourcecollector').innerHTML = resourcecollector;
			document.getElementById('humans').innerHTML = humans;
		};
};


/* function buyCursor(){ 
	var cursorCost = Math.floor(10 * Math.pow(1.1,cursors)); //works out the cost of this cursor 
	if(humans >= cursorCost){ //checks that the player can afford the cursor 
	cursors = cursors + 1; //increases number of cursors 
	humans = humans - cursorCost; //removes the humans spent 
	document.getElementById('cursors').innerHTML = cursors; //updates the number of cursors for the user 
	document.getElementById('humans').innerHTML = humans; //updates the number of humans for the user 
	}; 
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors)); //works out the cost of the next cursor 
	document.getElementById('cursorCost').innerHTML = nextCost; //updates the cursor cost for the user 
}; */

/* window.setInterval(function(){

humansClick(nextGen);
}, 1000); */

window.setInterval(function(){

var humanspawnchance = (Math.random()* 1);
nextGen = Math.floor((humans/2) * birthrate);
resources = resources + resourcecollector;
	if (humanspawnchance <= birthrate && resources >= (nextGen * 100)){
			humans = humans + nextGen;
			Born = Born + nextGen;
			resources = resources - (nextGen * 100);
			document.getElementById('humans').innerHTML = humans;
			document.getElementById('Born').innerHTML = Born;
			document.getElementById('resources').innerHTML = resources;
			} else {
				humans = humans;
				Born = Born;
				resources = resources;
				document.getElementById('humans').innerHTML = humans;
				document.getElementById('Born').innerHTML = Born;
				document.getElementById('resources').innerHTML = resources;
		}
	

document.getElementById('pregorate').innerHTML = pregorate;
document.getElementById('humanspawnchance').innerHTML = humanspawnchance;
document.getElementById('birthrate').innerHTML = birthrate;
document.getElementById('nextGen').innerHTML = nextGen;
pregorate = ((birthrate*100)/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});

document.getElementById('resources').innerHTML = resources;
}, 1000);
