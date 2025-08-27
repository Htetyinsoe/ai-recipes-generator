function displayRecipe(response) {
  let recipeOutputElement = document.querySelector("#recipe-output");
  recipeOutputElement.innerHTML = ""; 

  new Typewriter(recipeOutputElement, {
    autoStart: true,
    delay: 10,
    loop: false,
    cursor: " " 
  })
    .typeString(response.data.answer)
    .start();
}

function generateRecipe(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#instruction");
    let apiKey = "7fc062ate0o7d407f4902a3f2bcc6bac"; 
    let prompt = `Generate a recipe of ${instructionInput.value}`;
    let context = `You are a world-class chef and will generate a recipe based on the recipe name or ingredient/s provided by the user.The recipe must include the following sections, each clearly separated by line breaks:- Recipe Name- Ingredients- Instructions- Notes. Each section must be divided by line breaks. Use appropriate emojis for the recipe name and ingredients.Do not format the recipe as a paragraph. Do not include any extra commentary or explanation.Keep the recipe simple, clear, and easy to follow. Do not display recipes like a paragraph. Display it like a lists with line breaks. Make sure your recipe is align with user's ingredients or recipe name. Lists the instructions, list the ingredients, and list the note. List all with bullet points. Add line break, br tag after every lines and every ingredients. Add the br element every line for clear display. Aligh the heading like, recipe name, ingredients etc in the center. Your recipe is not exactly align with user keywords. Make sure your recipe is appropriately align with the user's keywords, ingredients or recipe names. Make sure your recipe is at least align with one of the user's keywords. For example, if the user type egg, your recipe must have egg as an ingredients. Behave and follow my instructions. Sign the recipe with "SheCode" at the end using a <strong> tag.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    
    axios.get(apiUrl).then(displayRecipe);
   
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);