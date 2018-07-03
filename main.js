var humans = 0;
var birthrate = 0.01;
var partialHumanSpawn = 0;
var nextGen = Math.floor((humans/2) * birthrate);
var Born = 0;
var cursors = 0;
var resourcecollector = 0;
var resources = 20001;
var addcusthumannum = document.getElementById("addcusthumannum").value;
var maxbuyhumans = 0;
var halfbuyhumans = 0;
var maxresourcecoll = 0;
var halfresourcecoll = 0;
var addcustrescoll = document.getElementById("addcustrescoll").value;

//Buying custom # of Humans
function addcusthuman(number){ 
	addcusthumannum = document.getElementById("addcusthumannum").value;
	if (resources >= (addcusthumannum * 100)){
		humans = Math.floor(humans + addcusthumannum);
		resources = Math.floor(resources - (addcusthumannum * 100));
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resources').innerHTML = resources;
	};
};
//Buying 1 Human
function humansClick(number){ 
	if (resources >= 100){
		humans = humans + number;
		resources = resources - 100;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resources').innerHTML = resources;
	};
};
//Buying Max number of Humans possible
function maxbuyhum(number){
	humans = humans + maxbuyhumans;
	resources = resources - (maxbuyhumans * 100);
	document.getElementById('humans').innerHTML = humans;
	document.getElementById('resources').innerHTML = resources;
	document.getElementById('maxbuyhumans').innerHTML = maxbuyhumans;
};	

//Buy Half the number of Humans possible
function halfbuyhum(number){
	humans = humans + halfbuyhumans;
	resources = resources - (halfbuyhumans * 100);
	document.getElementById('humans').innerHTML = humans;
	document.getElementById('resources').innerHTML = resources;
	document.getElementById('halfbuyhumans').innerHTML = halfbuyhumans;
};	

//Add to BR
function spawnhumans(number){
	birthrate = birthrate + number;
	document.getElementById('pregorate').innerHTML = pregorate;

};
//Minus from BR
function minushumans(number){
	birthrate = birthrate - number;
	document.getElementById('pregorate').innerHTML = pregorate;

};
//Add Human resource collector
function addresourcecol(number){
		if (humans >= number){
			resourcecollector = resourcecollector + number;
			humans = humans - number;
			document.getElementById('resourcecollector').innerHTML = resourcecollector;
			document.getElementById('humans').innerHTML = humans;
		};
};

//Remove Human resource collector			
function remresourcecol(number){
		if (resourcecollector >= number){
			resourcecollector = resourcecollector - number;
			humans = humans + number;
			document.getElementById('resourcecollector').innerHTML = resourcecollector;
			document.getElementById('humans').innerHTML = humans;
		};
};
//Max number of Resource Collectors possible
function maxresourcecol(number){
	resourcecollector = resourcecollector + maxresourcecoll;
	humans = humans - maxresourcecoll;
	document.getElementById('humans').innerHTML = humans;
	document.getElementById('resourcecollector').innerHTML = resourcecollector;
};	

//Half the number of Resource Collectors possible
function halfresourcecol(number){
	resourcecollector = resourcecollector + halfresourcecoll;
	humans = humans - halfresourcecoll;
	document.getElementById('humans').innerHTML = humans;
	document.getElementById('resourcecollector').innerHTML = resourcecollector;
};

//Add Custom # of Resource Collectors
function addcustrescol(){
	addcustrescoll = document.getElementById("addcustrescoll").value;
	resourcecollector = Math.floor(resourcecollector + addcustrescoll);
	humans = Math.floor(humans - addcustrescoll);
	document.getElementById('humans').innerHTML = humans;
	document.getElementById('resourcecollector').innerHTML = resourcecollector;
};	

//Remove Custom # of Resource Collectors
function remcustrescol(){
	remcustrescoll = document.getElementById("remcustrescoll").value;
	resourcecollector = Math.floor(resourcecollector - remcustrescoll);
	humans = Math.floor(humans + remcustrescoll);
	document.getElementById('humans').innerHTML = humans;
	document.getElementById('resourcecollector').innerHTML = resourcecollector;
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


//Everything calulated every second
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
halfresourcecoll = Math.floor(humans/2);
maxresourcecoll = humans;
maxbuyhumans = Math.floor(resources/100);
halfbuyhumans = Math.floor((resources/100)/2);
document.getElementById('resources').innerHTML = resources;
document.getElementById('maxbuyhumans').innerHTML = maxbuyhumans;
document.getElementById('halfbuyhumans').innerHTML = halfbuyhumans;
document.getElementById('halfresourcecoll').innerHTML = halfresourcecoll;
document.getElementById('maxresourcecoll').innerHTML = maxresourcecoll;
}, 1000);

