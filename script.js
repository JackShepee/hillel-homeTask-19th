class Recipe {
  constructor(title, ingredients, description, preparationTime) {
    this.title = title;
    this.ingredients = ingredients;
    this.description = description;
    this.preparationTime = preparationTime;
  }

  isValid() {
    return (
      this.title &&
      this.ingredients.length &&
      this.description &&
      this.preparationTime
    );
  }
}

class RecipeBook {
  constructor() {
    this.recipes = [];
  }

  addRecipe(recipe) {
    if (recipe.isValid()) {
      this.recipes.push(recipe);
    }
  }

  findRecipesByTime(maxTime) {
    return this.recipes.filter((recipe) => recipe.preparationTime <= maxTime);
  }

  findRecipesByIngredients(ingredients) {
    return this.recipes.filter((recipe) =>
      ingredients.every((ing) => recipe.ingredients.includes(ing))
    );
  }
}

const scrambledEggs = new Recipe(
  "Scrambled Eggs",
  ["Eggs", "Milk", "Salt", "Pepper"],
  "Whisk eggs, milk, salt, and pepper. Pour egg mixture into a nonstick skillet. Cook and stir until eggs are fully set.",
  15
);
const vegetableSoup = new Recipe(
  "Vegetable Soup",
  ["Potato", "Carrot", "Onion", "Water", "Salt"],
  "Place chopped vegetables into a pot, cover with water, season with salt. Bring to a boil, then reduce heat and simmer until vegetables are tender.",
  60
);
const beefStew = new Recipe(
  "Beef Stew",
  ["Beef", "Potato", "Carrot", "Onion", "Water", "Salt", "Pepper"],
  "Brown beef in a pot. Add chopped vegetables, water, salt, and pepper. Bring to a boil, then reduce heat, cover, and simmer until beef and vegetables are tender.",
  120
);
const salad = new Recipe(
  "Salad",
  ["Lettuce", "Tomato", "Cucumber", "Olive Oil", "Salt"],
  "Chop lettuce, tomato, and cucumber. Toss with olive oil and salt.",
  10
);
const invalidRecipe = new Recipe("", [], "", null);

const book = new RecipeBook();
book.addRecipe(scrambledEggs);
book.addRecipe(vegetableSoup);
book.addRecipe(beefStew);
book.addRecipe(salad);
book.addRecipe(invalidRecipe);

const recipesByTime = book.findRecipesByTime(60);
console.log(
  "Recipes under 60 minutes: " +
    recipesByTime.map((recipe) => recipe.title).join(", ")
);

const recipesByIngredients = book.findRecipesByIngredients([
  "Potato",
  "Carrot",
]);
console.log(
  "Recipes with Potato and Carrot: " +
    recipesByIngredients.map((recipe) => recipe.title).join(", ")
);
