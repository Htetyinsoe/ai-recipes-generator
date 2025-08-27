function generateRecipe(event) {
    event.preventDefault();
    let generatedRecipeElement = document.querySelector("#recipe-output");
    generatedRecipeElement.innerHTML = "Here is your generated recipe: ... (This is a placeholder)";
    
    new Typewriter('#recipe-output', {
  strings: "Here is your generated recipe: ... (This is a placeholder)",
  autoStart: true,
  delay: 1,
  cursor: " ",
});
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);