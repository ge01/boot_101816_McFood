var hungry = "no";
//var choice;
// Prompt the user if hungry
while (hungry === "no") {
    hungry = prompt("Are you hungry yet?");
    hungry.toLowerCase();
    //console.log(food);
}

// Decide what to eat
var choice = prompt("What are you in the mood for?" +
                    "Mexican, Chinese, or Idunno");
console.log(choice.toLowerCase());

// The user chose Mexican food
if (choice === "mexican" ) {
  console.log(choice);
  var mexicanChoice = prompt("Do you want Tacos or Enchiladas");
  mexicanChoice.toLowerCase();

  // Decide on Tacos or Enchilads
  if (mexicanChoice === "tacos") {
    prompt("Orale! Tacos de bistec is the way to go.");
  }
  else if (mexicanChoice === "enchiladas") {
    prompt("Ajua! Enchiladas all night long.")
  }
  else {
    prompt("Hmm...don't think you chose Tacos or Enchiladas?");
  }
}

else if (choice === "chinese") {
  console.log(choice);
}
else if (choice === "idunno") {
  console.log(choice);
}
else
{
  console.log("You didn't select one of the three options.")
}
