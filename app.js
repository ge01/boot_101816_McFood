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

  // Decide on Tacos or Enhiladas
  var mexicanChoice = prompt("Do you want Tacos or Enchiladas");
  mexicanChoice.toLowerCase();

  // Response to Tacos or Enchilads
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

// The user chose Chinese food
else if (choice === "chinese") {
  console.log(choice);

  // Decide on Wonton or Tofu
  var chineseChoice = prompt("Do you want Wonton or Tofu");
  chineseChoice.toLowerCase();

  // Response to Wonton or Tofu
  if (chineseChoice === "wonton") {
    prompt("Ni Hao! Wonton-amera it is.");
  }
  else if (chineseChoice === "tofu") {
    prompt("Bùcuò! I pitty the tofu...")
  }
  else {
    prompt("Hmm...don't think you chose Wonton or Tofu?");
  }
}

// The user does not know
else if (choice === "idunno") {
  console.log(choice);
  prompt("You're going to get a cold cut trio from Subway");
}

// The user didn't enter a valid choice
else
{
  console.log("You didn't select one of the three options.")
}
