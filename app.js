console.log("Name: " + "Franco Silva".toUpperCase());
console.log("Career: Crew Member/Fast Food Restaurant");
console.log("Description: A guy that is interest in coding");
console.log("\n");
console.log("My Interest: ");
console.log("* Sleeping in weekends");
console.log("* Watching Soccer"); 
console.log("* taking long walks");
console.log("* Vidoe games late at night");
console.log("\n");
console.log("My Pervious Experience:");
displayPosition("Crew Member","AMC Theartes","Maintained selling food/drinks, tickets, and cleaning the place");
displayPosition("Crew Member","Chipotle Mexican Grill","Cook and prep foods and clean dishes");
console.log("\n");
console.log("My skills:"); 
displaySkills("Spanish", true);
displaySkills("Javascript", true);
displaySkills("Playing Tuda", false);

function displayPosition(company, title, description) {
    console.log("* " + title + " in" + company + " - " + description);
}

function displaySkills(skillName, skillIsCool) {
    if(skillIsCool) {
        console.log("* BAM: " + skillName);
    }
    else {
        console.log("* " + skillName)
    }
}
