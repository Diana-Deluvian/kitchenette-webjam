import React, {useState, useEffect} from 'react';

const RecipeForm = ( props) => {
    const [name, setName] = useState(props.recipe ? props.recipe.name : '');
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.ingredients : []);
    const [instructions, setInstructions] = useState(props.recipe ? props.recipe.instructions : []);
    
    const handleNameChange = (e) => {
      setName(e.target.value);
    }

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
        <input type="submit" value="Submit" />
      </form>
    )
}

export default RecipeForm;