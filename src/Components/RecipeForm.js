import React, {useState, useEffect} from 'react';

const RecipeForm = ( props) => {
    const [name, setName] = useState(props.recipe ? props.recipe.name : '');
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.ingredients : []);
    const [instructions, setInstructions] = useState(props.recipe ? props.recipe.instructions : []);
    
    const handleNameChange = (e) => {
      setName(e.target.value);
    }

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
        const recipe = { name, ingredients, instructions } 
        if(props.isEditing) recipe._id = props.recipe._id;
        props.handleOnSubmit(recipe);
      }
    return (
        <form onSubmit={handleOnSubmit}>
        <label>
          Recipe name
          <input name="name" value={name} onChange={handleNameChange} />
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