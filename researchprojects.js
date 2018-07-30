var projects = [];
//var activeProjects = [];

var project1 = {
    id: "projectButton1",
    title: "Improve Birth Rate ",
    priceTag: "(1,000 Research, 10,000 Resouces)",
    description: "Increases Birth Rate by 25%",
    //trigger: function(){return clipmakerLevel>=1},
    //uses: 1,
    cost: function(){return research >=1000 && resources >= 10000},
    flag: 0,
    element: null,
    effect: function(){
        project1.flag = 1;
        //displayMessage("AutoClippper performance boosted by 25%");
        research = research - 1000;
		resources = resources - 10000;
        birthrate = birthrate + .25;
        project1.element.parentNode.removeChild(project1.element);
        //var index = activeProjects.indexOf(project1);
        //activeProjects.splice(index, 1);
    }
}
