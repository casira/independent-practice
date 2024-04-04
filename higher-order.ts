//Create a higher order function called recipeBook that consumes the name of a recipe and returns a function
//The returned function consumes an array of ingredients and returns a string w/ the name of the recipe, then makes it.
const recipes = ["pancakes", "french toast", "waffles"];
let Recipe = {
  name: "",
  ingredients: [""],
  instructions: () => {
    console.log(`Mix the ${Recipe.ingredients}. Then cook.`);
    makeFood();
  },
};
function recipeBook(food: string, ingredients: string[]) {
  if (recipes.includes(food)) {
    Recipe.name = food;
    Recipe.ingredients = ingredients;
    console.log(`You are going to make ${food}.`);
    Recipe.instructions();
  } else console.log(`Sorry, there is no ${food} recipe in this book.`);
}

function makeFood() {
  console.log(`You made ${Recipe.name}!`);
}

const ingredientList = ["eggs", "milk", "butter", "sugar"];
recipeBook("pancakes", ingredientList);

//
function buildFurniture(furniture: string, tools: string[], furnitureDirections: (f: string, t: string[]) => void) {
  console.log(`You are going to make a ${furniture}.`);
  furnitureDirections(furniture, tools);
  console.log(`You made a ${furniture}!`);
}
//
function getDirections(furniture: string, tools: string[]) {
  console.log(`Use the ${tools} to make a ${furniture}.`);
}
//
buildFurniture("chair", ["wood", "hammer", "nails"], getDirections);

// Multiplier
function multiplier(amount: number) {
  return function (value: number) {
    return amount * value;
  };
}

const doubler = multiplier(2);
console.log(doubler(5));
console.log(doubler(3));

const tripler = multiplier(3);
console.log(tripler(2));
