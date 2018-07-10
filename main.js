var humans = 0;
var birthrate = 0.01;
var partialHumanSpawn = 0;
var nextGen = Math.floor((humans/2) * birthrate);
var Born = 0;
var cursors = 0;
var resourcecollector = 0;
var resources = 200000;
var addcusthumannum = document.getElementById("addcusthumannum").value;
var addcusthumancost = Math.floor(+document.getElementById("addcusthumannum").value * 100);
var maxbuyhumans = 0;
var halfbuyhumans = 0;
var maxresourcecoll = 0;
var halfresourcecoll = 0;
var addcustrescoll = document.getElementById("addcustrescoll").value;
var totalpop = 0;
var scientist = 0;
var research = 0;
var halfscientist = 0;
var maxscientist = 0;
var scientistlimit = 10;
var addcustscien = document.getElementById("addcustscien").value;
var production = 0;
var factworker = 0;
var factworklimit = 10;
var framenum = 500;
var researchlabs = 0;


//Add commas
//?

//Buying custom # of Humans
function addcusthuman(number){ 
	addcusthumannum = +document.getElementById("addcusthumannum").value;
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
	if (resources >= (maxbuyhumans * 100)){
		humans = humans + maxbuyhumans;
		resources = resources - (maxbuyhumans * 100);
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resources').innerHTML = resources;
		document.getElementById('maxbuyhumans').innerHTML = maxbuyhumans;
	};	
};	

//Buy Half the number of Humans possible
function halfbuyhum(number){
	if (resources >= (halfbuyhumans * 100)){
		humans = humans + halfbuyhumans;
		resources = resources - (halfbuyhumans * 100);
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resources').innerHTML = resources;
		document.getElementById('halfbuyhumans').innerHTML = halfbuyhumans;
	};
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
	if (humans >= maxresourcecoll){
		resourcecollector = resourcecollector + maxresourcecoll;
		humans = humans - maxresourcecoll;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resourcecollector').innerHTML = resourcecollector;
	};
};	

//Half the number of Resource Collectors possible
function halfresourcecol(number){
	if (humans >= halfresourcecoll){
		resourcecollector = resourcecollector + halfresourcecoll;
		humans = humans - halfresourcecoll;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resourcecollector').innerHTML = resourcecollector;
	};
};

//Add Custom # of Resource Collectors
function addcustrescol(){
	addcustrescoll = +document.getElementById("addcustrescoll").value;
	if (addcustrescoll <= humans){
		resourcecollector = Math.floor(resourcecollector + addcustrescoll);
		humans = Math.floor(humans - addcustrescoll);
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resourcecollector').innerHTML = resourcecollector;
	};
};	

//Remove Custom # of Resource Collectors
function remcustrescol(){
	remcustrescoll = +document.getElementById("remcustrescoll").value;
	if (remcustrescoll <= resourcecollector){
		resourcecollector = Math.floor(resourcecollector - remcustrescoll);
		humans = Math.floor(humans + remcustrescoll);
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resourcecollector').innerHTML = resourcecollector;
	};
};	

//Add Half # of Scientists
function addhalfscientist(number){
	if (humans >= halfscientist && halfscientist <= (scientistlimit - scientist)){
		scientist = scientist + halfscientist;
		humans = humans - halfscientist;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('scientist').innerHTML = scientist;
	};
};

//Add Max # of Scientists
function addmaxscientist(number){
	if (humans >= maxscientist && maxscientist <= (scientistlimit - scientist)){
		scientist = scientist + maxscientist;
		humans = humans - maxscientist;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('scientist').innerHTML = scientist;
	
	};	
};

//Add Custom # of Scientists
function addcustsci(number){
	addcustscien = +document.getElementById("addcustscien").value;
		if (addcustscien <= (scientistlimit - scientist)){
			scientist = (scientist + addcustscien);
			humans = (humans - addcusthuman);
			document.getElementById('humans').innerHTML = humans;
			document.getElementById('scientist').innerHTML = scientist;			
		};
		if (addcustscien >= (scientistlimit - scientist)){
			humans =  (humans - (Math.floor(scientistlimit - scientist)));
			scientist = (scientist + Math.floor(scientistlimit - scientist));
			document.getElementById('humans').innerHTML = humans;
			document.getElementById('scientist').innerHTML = scientist;
		};
};

//Remove Custom # of Scientists
function remcustsci(){
	remcustscien = +document.getElementById("remcustscien").value;
	if (remcustscien <= scientist){
		scientist = Math.floor(scientist - remcustscien);
		humans = Math.floor(humans + remcustscien);
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('scientist').innerHTML = scientist;
	};
};

//Add Research Lab
function addsciencelab(number){
	researchlabs = researchlabs + 1;
	scientistlimit = scientistlimit + 5;
	document.getElementById('scientistlimit').innerHTML = scientistlimit;
	document.getElementById('researchlabs').innerHTML = researchlabs;
};

//Progress bar movement
function move(){
	var elem = document.getElementById('scibarpercent');
	var width = 1;
	var id = setInterval(frame, framenum);
	function frame(){
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
			elem.innerHTML = width * 1 + '%';
		};
	};
};

//Increase Research speed
function addframenum(number){
	framenum = framenum + number;
	document.getElementById('framenum').innerHTML = framenum;
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
	if (nextGen <= 1 && humans >=2){
		nextGen = 1
	};
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
addcusthumancost = Math.floor(+document.getElementById("addcusthumannum").value * 100);
halfscientist = Math.floor(humans/2)
	if (halfscientist >= (scientistlimit/2)){
		halfscientist = Math.floor(maxscientist/2);
	};
maxscientist = humans;
	if (humans <= (scientistlimit - scientist)){
		maxscientist = humans;
	}; 
	if (humans >= (scientistlimit - scientist)){
		maxscientist = Math.floor(scientistlimit - scientist);
	};
totalpop = Math.floor(humans + resourcecollector + scientist + factworker);
research = Math.floor(research + (scientist/2));
production = Math.floor(production + factworker);
document.getElementById('resources').innerHTML = resources;
document.getElementById('maxbuyhumans').innerHTML = maxbuyhumans;
document.getElementById('halfbuyhumans').innerHTML = halfbuyhumans;
document.getElementById('halfresourcecoll').innerHTML = halfresourcecoll;
document.getElementById('maxresourcecoll').innerHTML = maxresourcecoll;
document.getElementById('totalpop').innerHTML = totalpop;
document.getElementById('halfscientist').innerHTML = halfscientist;
document.getElementById('maxscientist').innerHTML = maxscientist;
document.getElementById('addcusthumancost').innerHTML = addcusthumancost;
document.getElementById('research').innerHTML = research;
}, 1000);

