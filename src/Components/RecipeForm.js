import React, {useState, useEffect} from 'react';

const RecipeForm = ( props) => {

  const [recipe, setRecipe] = useState(() => {
    return {
      name: props.recipe ? props.recipe.name : '',
      cookTime: props.recipe ? props.recipe.cookTime : '',
      calories: props.recipe ? props.recipe.calories : '',
      servings: props.recipe ? props.recipe.servings : '',
    };
  });

    const img = React.createRef(); 
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.ingredients : []);
    const [instructions, setInstructions] = useState(props.recipe ? props.recipe.instructions : []);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
          setRecipe((prevState) => ({
            ...prevState,
            [name]: value
          }));
    };

    function addIngredient(e) {
      e.preventDefault();
      setIngredients([...ingredients, ""]);
    }

    const handleChangeIngredient = e => {
      let newIngredient = e.target.value;
      let newIngredients =  [...ingredients]
      newIngredients[e.target.dataset.ingredientindex] = newIngredient;
      setIngredients([...newIngredients]);
  }

  const deleteIngredient = e => {
    e.preventDefault();
    let newIngredients = [...ingredients];
    newIngredients.splice(e.target.dataset.ingredientindex, 1);
    setIngredients([...newIngredients])
  }

  const ingredientsList = ingredients
  .map((ingredient, index) => (
    <div key={`ingredient-${index}`} className="ingredients"index = {`test${index}`} >
      <input data-ingredientindex={index} onChange={handleChangeIngredient} value={ingredient}></input>
      <button data-ingredientindex={index}  onClick={deleteIngredient}>X</button>
      </div>
  ));

  function addInstruction(e) {
    e.preventDefault();
    setInstructions([...instructions, ""]);
  }

  const handleChangeInstruction = e => {
    let newInstruction = e.target.value;
    let newInstructions =  [...instructions]
    newInstructions[e.target.dataset.instructionindex] = newInstruction;
    setInstructions([...newInstructions]);
}

const deleteInstruction = e => {
  e.preventDefault();
  let newInstructions = [...instructions];
  newInstructions.splice(e.target.dataset.instructionindex, 1);
  setInstructions([...newInstructions])
}

const instructionsList = instructions
.map((instruction, index) => (
  <div key={`instruction-${index}`} className="instructions"index = {`test${index}`} >
    <input data-instructionindex={index} onChange={handleChangeInstruction} value={instruction}></input>
    <button data-instructionindex={index}  onClick={deleteInstruction}>X</button>
    </div>
));

    const handleOnSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        const somefile = img.current.files[0];
        formData.append("somefile", somefile);
        formData.append("name", recipe.name);
        formData.append("cookTime", recipe.cookTime);
        formData.append("calories", recipe.calories);
        formData.append("servings", recipe.servings);
        //we can't use FormData(form) because of the need to stringify
        formData.append("ingredients", JSON.stringify(ingredients));
        formData.append("instructions", JSON.stringify(instructions));
        if(props.isEditing) formData.append("_id", props.recipe._id);
        for (var p of formData) {
          console.log(p);
        }
        props.handleOnSubmit(formData); 

        
      }
    return (
        <form onSubmit={handleOnSubmit}>
        <label>
          Recipe name
          <input name="name" value={recipe.name} onChange={handleInputChange} />
        </label>
        <label>
          Cook Time
          <input name="cookTime" value={recipe.cookTime} onChange={handleInputChange} />
        </label>
        <label>
          Calories per 100g
          <input name="calories" value={recipe.calories} onChange={handleInputChange} />
        </label>
        <label>
          Servings
          <input name="servings" value={recipe.servings} onChange={handleInputChange} />
        </label>
        <label>
          Image
          <input type="file" ref={img} />
        </label>
        <div className="ingredients">
        {ingredientsList}
        <button onClick={addIngredient}>Add ingredient!</button>
        </div>
        <div className="instructionss">
        {instructionsList}
        <button onClick={addInstruction}>Add instruction!</button>
        </div>
        
        <input type="submit" value="Submit" />
      </form>
    )
}

export default RecipeForm;