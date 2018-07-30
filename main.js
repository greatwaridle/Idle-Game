var humans = 0;
var humansd = addCommas(humans);
var birthrate = 0.01;
var partialHumanSpawn = 0;
var nextGen = Math.floor((humans/2) * birthrate);
var nexGend = addCommas(nextGen);
var Born = 0;
var cursors = 0;
var resourcecollector = 0;
var resourcecollectord = addCommas(resourcecollector);
var resources = 200000;
var resourcesd = addCommas(resources);
var addcusthumannum = document.getElementById("addcusthumannum").value;
var addcusthumancost = Math.floor(+document.getElementById("addcusthumannum").value * 100);
var maxbuyhumans = 0;
var maxbuyhumansd = addCommas(maxbuyhumans);
var halfbuyhumans = 0;
var halfbuyhumansd = addCommas(halfbuyhumans);
var maxresourcecoll = 0;
var maxresourcecolld = addCommas(maxresourcecoll);
var halfresourcecoll = 0;
var halfresourcecolld = addCommas(halfresourcecoll);
var addcustrescoll = document.getElementById("addcustrescoll").value;
var totalpop = 0;
var scientist = 0;
var research = 0;
var researchd = addCommas(research);
var halfscientist = 0;
var maxscientist = 0;
var scientistlimit = 10;
var addcustscien = document.getElementById("addcustscien").value;
var factworker = 0;
var factworklimit = 10;
var factories = 0;
var production = 0;
var halffactwork = 0;
var maxfactwork = 0;
var addcustfactrwork = document.getElementById("addcustfactrwork").value;
var framenum = 500;
var researchlabs = 0;
var customnumber = +document.getElementById("addcustscien").value;
var reseachactivate = 1;
var researchprojectsElement = document.getElementById("researchprojects");

//Add commas
function addCommas(nStr)
{
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

//Buying custom # of Humans
function addcusthuman(number){ 
	addcusthumannum = +document.getElementById("addcusthumannum").value;
	if (resources >= (addcusthumannum * 100)){
		humans = Math.floor(humans + addcusthumannum);
		resources = Math.floor(resources - (addcusthumannum * 100));
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcesd').innerHTML = resourcesd;
	};
};

//Buying 1 Human
function humansClick(number){ 
	if (resources >= 100){
		humans = humans + number;
		resources = resources - 100;
		document.getElementById('humans').innerHTML = humans;
		document.getElementById('resourcesd').innerHTML = resourcesd;
	};
};

//Buying Max number of Humans possible
function maxbuyhum(number){
	if (resources >= (maxbuyhumans * 100)){
		humans = humans + maxbuyhumans;
		resources = resources - (maxbuyhumans * 100);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcesd').innerHTML = resourcesd;
		document.getElementById('maxbuyhumansd').innerHTML = maxbuyhumansd;
	};	
};	

//Buy Half the number of Humans possible
function halfbuyhum(number){
	if (resources >= (halfbuyhumans * 100)){
		humans = humans + halfbuyhumans;
		resources = resources - (halfbuyhumans * 100);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcesd').innerHTML = resourcesd;
		document.getElementById('halfbuyhumansd').innerHTML = halfbuyhumansd;
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
			document.getElementById('resourcecollectord').innerHTML = resourcecollectord;
			document.getElementById('humansd').innerHTML = humansd;
		};
};

//Remove Human resource collector			
function remresourcecol(number){
		if (resourcecollector >= number){
			resourcecollector = resourcecollector - number;
			humans = humans + number;
			document.getElementById('resourcecollectord').innerHTML = resourcecollectord;
			document.getElementById('humansd').innerHTML = humansd;
		};
};

//Max number of Resource Collectors possible
function maxresourcecol(number){
	if (humans >= maxresourcecoll){
		resourcecollector = resourcecollector + maxresourcecoll;
		humans = humans - maxresourcecoll;
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcecollectord').innerHTML = resourcecollectord;
	};
};	

//Half the number of Resource Collectors possible
function halfresourcecol(number){
	if (humans >= halfresourcecoll){
		resourcecollector = resourcecollector + halfresourcecoll;
		humans = humans - halfresourcecoll;
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcecollectord').innerHTML = resourcecollectord;
	};
};

//Add Custom # of Resource Collectors
function addcustrescol(){
	addcustrescoll = +document.getElementById("addcustrescoll").value;
	if (addcustrescoll <= humans){
		resourcecollector = Math.floor(resourcecollector + addcustrescoll);
		humans = Math.floor(humans - addcustrescoll);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcecollectord').innerHTML = resourcecollectord;
	};
};	

//Remove Custom # of Resource Collectors
function remcustrescol(){
	remcustrescoll = +document.getElementById("remcustrescoll").value;
	if (remcustrescoll <= resourcecollector){
		resourcecollector = Math.floor(resourcecollector - remcustrescoll);
		humans = Math.floor(humans + remcustrescoll);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('resourcecollectord').innerHTML = resourcecollectord;
	};
};	

//Add Half # of Scientists
function addhalfscientist(number){
	if (humans >= halfscientist && halfscientist <= (scientistlimit - scientist)){
		scientist = scientist + halfscientist;
		humans = humans - halfscientist;
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('scientist').innerHTML = scientist;
	};
};

//Add Max # of Scientists
function addmaxscientist(number){
	if (humans >= maxscientist && maxscientist <= (scientistlimit - scientist)){
		scientist = scientist + maxscientist;
		humans = humans - maxscientist;
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('scientist').innerHTML = scientist;
	
	};	
};

//Add Custom # of Scientists
function addcustsci(){
	addcustscien = +document.getElementById("addcustscien").value;
		if (addcustscien <= (scientistlimit - scientist) && (addcustscien <= humans)){
			humans = humans - addcustscien;
			scientist = scientist + addcustscien;
			//scientist = scientist + Math.floor((addcustscien/2)*2);
		
 		};
/* 		if (addcustscien > (scientistlimit - scientist)){
			//if (addcustscien <= humans){
				humans =  humans - maxscientist;
				scientist = maxscientist;
				
		}; */
	document.getElementById('humansd').innerHTML = humansd;
	document.getElementById('scientist').innerHTML = scientist;	
};

//Remove Custom # of Scientists
function remcustsci(){
	remcustscien = +document.getElementById("remcustscien").value;
	if (remcustscien <= scientist){
		scientist = Math.floor(scientist - remcustscien);
		humans = Math.floor(humans + remcustscien);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('scientist').innerHTML = scientist;
	};
};

//Add Research Lab
function addsciencelab(number){
	researchlabs = researchlabs + 1;
	scientistlimit = scientistlimit + 5;
	document.getElementById('researchlabs').innerHTML = researchlabs;
	document.getElementById('scientistlimit').innerHTML = scientistlimit;

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

//Increase Reseach speed
function addframenum(number){
	framenum = framenum + number;
	document.getElementById('framenum').innerHTML = framenum;
};

//Add Factory
function addfactory(number){
	factworklimit = factworklimit + 5;
	factories = factories + 1;
	document.getElementById('factworklimit').innerHTML = factworklimit;
	document.getElementById('factories').innerHTML = factories;
};

//Add Half # of Factory Workers
function addhalffactwork(number){
	if (humans >= halffactwork && halffactwork <= (factworklimit - factworker)){
		factworker = factworker + halffactwork;
		humans = humans - halffactwork;
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('factworker').innerHTML = factworker;
	};
};

//Add Max # of Factory Workers
function addmaxfactwork(number){
	if (humans >= maxfactwork && maxfactwork <= (factworklimit - factworker)){
		factworker = factworker + maxfactwork;
		humans = humans - maxfactwork;
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('factworker').innerHTML = factworker;
	
	};	
};

//Add Custom # of Factory Workers
function addcustfactwork(){
	addcustfactrwork = +document.getElementById("addcustfactrwork").value;
	if (addcustfactrwork <= humans && addcustfactrwork <= (factworklimit - factworker)){
		factworker = Math.floor(factworker + addcustfactrwork);
		humans = Math.floor(humans - addcustfactrwork);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('factworker').innerHTML = factworker;
	};
};

//Remove Custom # of Factory Workers
function remcustfactwork(){
	remcustfactrwork = +document.getElementById("remcustfactrwork").value;
	if (remcustfactrwork <= factworker){
		factworker = Math.floor(factworker - remcustfactrwork);
		humans = Math.floor(humans + remcustfactrwork);
		document.getElementById('humansd').innerHTML = humansd;
		document.getElementById('factworker').innerHTML = factworker;
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

//Display RS Projects
/* if (reseachactivate > 0){
	displayRSProjects();
}; */


//Research Projects
function displayRSProjects(project){
	var rsdisplay = document.createElement("button");
	document.getElementById("researchprojects").appendChild(rsdisplay);
	rsdisplay.setAttribute("class", "projectButton");
    rsdisplay.setAttribute("id", project.id);
		researchprojectsElement.appendChild(project.element, researchprojectsElement.firstChild);
}

//Everything calulated every second
window.setInterval(function(){

var humanspawnchance = (Math.random()* 1);
resources = resources + resourcecollector;
humansd = addCommas(humans);
Bornd = addCommas(Born);
nextGend = addCommas(nextGen);
nextGen = Math.floor((humans/2) * birthrate);
	if (nextGen <= 1 && humans >=2){
		nextGen = 1
	};
	if (humanspawnchance <= birthrate && resources >= (nextGen * 100)){
			humans = humans + nextGen;
			Born = Born + nextGen;
			resources = resources - (nextGen * 100);
			document.getElementById('humansd').innerHTML = humansd;
			document.getElementById('Bornd').innerHTML = Bornd;
			document.getElementById('resourcesd').innerHTML = resourcesd;
			} else {
				humans = humans;
				Born = Born;
				resources = resources;
				document.getElementById('humansd').innerHTML = humansd;
				document.getElementById('Bornd').innerHTML = Bornd;
				document.getElementById('resourcesd').innerHTML = resourcesd;
		}


document.getElementById('pregorate').innerHTML = pregorate;
document.getElementById('humanspawnchance').innerHTML = humanspawnchance;
document.getElementById('birthrate').innerHTML = birthrate;
document.getElementById('nextGend').innerHTML = nextGend;
pregorate = ((birthrate*100)/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
halfresourcecoll = Math.floor(humans/2);
maxresourcecoll = humans;
maxresourcecolld = addCommas(maxresourcecoll);
halfresourcecolld = addCommas(halfresourcecoll);
maxbuyhumans = Math.floor(resources/100);
halfbuyhumans = Math.floor((resources/100)/2);
addcusthumancost = addCommas(Math.floor(+document.getElementById("addcusthumannum").value * 100));
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
totalpop = addCommas(Math.floor(humans + resourcecollector + scientist + factworker));
research = Math.floor(research + (scientist/5));
	if (research >= 1000){
		reseachactivate = 1;
	};
researchd = addCommas(research);
production = Math.floor(production + (factworker/2));
maxfactwork = humans;
	if (humans <= (factworklimit - factworker)){
		maxfactwork = humans;
	}; 
	if (humans > (factworklimit - factworker)){
		maxfactwork = Math.floor(factworklimit - factworker);
	};
halffactwork = Math.floor(humans/2)
	if (halffactwork >= (factworklimit/2)){
		halffactwork = Math.floor(maxfactwork/2);
	};
resourcesd = addCommas(resources);
maxbuyhumansd = addCommas(maxbuyhumans);
halfbuyhumansd = addCommas(halfbuyhumans);
customnumber = +document.getElementById("addcustscien").value;
resourcecollectord = addCommas(resourcecollector);
document.getElementById('customnumber').innerHTML = customnumber;
document.getElementById('resourcesd').innerHTML = resourcesd;
document.getElementById('maxbuyhumansd').innerHTML = maxbuyhumansd;
document.getElementById('halfbuyhumansd').innerHTML = halfbuyhumansd;
document.getElementById('halfresourcecolld').innerHTML = halfresourcecolld;
document.getElementById('maxresourcecolld').innerHTML = maxresourcecolld;
document.getElementById('totalpop').innerHTML = totalpop;
document.getElementById('halfscientist').innerHTML = halfscientist;
document.getElementById('maxscientist').innerHTML = maxscientist;
document.getElementById('addcusthumancost').innerHTML = addcusthumancost;
document.getElementById('researchd').innerHTML = researchd;
document.getElementById('halffactwork').innerHTML = halffactwork;
document.getElementById('maxfactwork').innerHTML = maxfactwork;
document.getElementById('production').innerHTML = addCommas(production);
document.getElementById('resourcecollectord').innerHTML = resourcecollectord;

}, 1000);

