import React, {useState} from 'react';

const RecipeForm = (props) => {
    const [recipe, setRecipe] = useState({});

    const {name, ingredients, instructions, image } = {recipe};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRecipe((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleOnSubmit(recipe);
      }
    return (
        <form onSubmit={handleOnSubmit}>
        <label>
          Recipe name
          <textarea name="name" value={name} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default RecipeForm;