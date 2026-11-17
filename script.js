
let recipes = [
    {
        id: 1,
        name: "Chicken Biryani",
        ingredients: "Chicken, Rice, Onion, Oil, Spices",
        preparationTime: "20 minutes",
        cookingTime: "40 minutes",
        instructions: "First wash the rice. Then cook chicken with onion and spices. Finally, mix rice with chicken and cook together."
    },

    {
        id: 2,
        name: "Vegetable Khichuri",
        ingredients: "Rice, Lentils, Carrot, Potato, Spices",
        preparationTime: "10 minutes",
        cookingTime: "30 minutes",
        instructions: "Wash rice and lentils. Add vegetables, spices and water. Cook everything until soft."
    },

    {
        id: 3,
        name: "Egg Sandwich",
        ingredients: "Egg, Bread, Onion, Butter, Salt",
        preparationTime: "5 minutes",
        cookingTime: "10 minutes",
        instructions: "Fry the egg with onion and salt. Put the egg between two slices of bread and serve."
    },

    {
        id: 4,
        name: "Pasta",
        ingredients: "Pasta, Tomato, Onion, Oil, Salt",
        preparationTime: "10 minutes",
        cookingTime: "20 minutes",
        instructions: "Boil the pasta. Cook tomato and onion with spices. Add pasta and mix everything together."
    }
];


// Display Recipes

function displayRecipes(recipeArray) {

    let recipeList = document.getElementById("recipeList");

    recipeList.innerHTML = "";

    if (recipeArray.length === 0) {
        recipeList.innerText = "No recipes found.";
        return;
    }

    for (let i = 0; i < recipeArray.length; i++) {

        let card = document.createElement("div");
        card.className = "recipe-card";

        let name = document.createElement("h3");
        name.innerText = recipeArray[i].name;

        let ingredients = document.createElement("p");
        ingredients.innerText = "Ingredients: " + recipeArray[i].ingredients;

        let button = document.createElement("button");
        button.innerText = "View Details";

        button.onclick = function() {
            viewRecipe(recipeArray[i].id);
        };

        card.appendChild(name);
        card.appendChild(ingredients);
        card.appendChild(button);

        recipeList.appendChild(card);
    }
}


// Search Recipes

function searchRecipes() {

    let searchValue = document.getElementById("searchInput").value.toLowerCase();

    let filteredRecipes = [];

    for (let i = 0; i < recipes.length; i++) {

        if (
            recipes[i].name.toLowerCase().includes(searchValue) ||
            recipes[i].ingredients.toLowerCase().includes(searchValue)
        ) {
            filteredRecipes.push(recipes[i]);
        }
    }

    displayRecipes(filteredRecipes);
}


// Show All Recipes

function showAllRecipes() {

    document.getElementById("searchInput").value = "";

    displayRecipes(recipes);
}


// View Recipe Details

function viewRecipe(id) {

    let selectedRecipe = null;

    for (let i = 0; i < recipes.length; i++) {

        if (recipes[i].id === id) {
            selectedRecipe = recipes[i];
            break;
        }
    }

    if (selectedRecipe !== null) {

        document.getElementById("detailsMessage").innerText = "";

        let details = document.getElementById("detailsContent");

        details.innerHTML = "";

        let name = document.createElement("h3");
        name.innerText = selectedRecipe.name;

        let ingredients = document.createElement("p");
        ingredients.innerText = "Ingredients: " + selectedRecipe.ingredients;

        let preparation = document.createElement("p");
        preparation.innerText = "Preparation Time: " + selectedRecipe.preparationTime;

        let cooking = document.createElement("p");
        cooking.innerText = "Cooking Time: " + selectedRecipe.cookingTime;

        let instructions = document.createElement("p");
        instructions.innerText = "Instructions: " + selectedRecipe.instructions;

        details.appendChild(name);
        details.appendChild(ingredients);
        details.appendChild(preparation);
        details.appendChild(cooking);
        details.appendChild(instructions);
    }
}


// Display Recipes When Page Loads

displayRecipes(recipes);
