import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/authSlice';

const RecipeForm = ( props) => {

  const isAuth = useSelector(selectIsAuth);


  const [recipe, setRecipe] = useState(() => {
    return {
      name: props.recipe ? props.recipe.name : '',
      cookTime: props.recipe ? props.recipe.cookTime : '',
      calories: props.recipe ? props.recipe.calories : '',
      servings: props.recipe ? props.recipe.servings : '',
    };
  });

    const img = React.createRef(); 
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.ingredients : ['']);
    const [instructions, setInstructions] = useState(props.recipe ? props.recipe.instructions : ['']);
    
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
    <div key={`ingredient-${index}`} className="relative" index = {`test${index}`} >
      <span> ✬</span>
      <input data-ingredientindex={index} onChange={handleChangeIngredient} value={ingredient}
      className="outline-none m-2 pl-2 bg-gray-300"
      ></input>
      <button data-ingredientindex={index}  onClick={deleteIngredient}
      className="text-primary absolute right-4 top-2">X</button>
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
  <div key={`instruction-${index}`} className="relative m-4" index = {`test${index}`} >
    <span>{index + 1}. </span>
    <textarea data-instructionindex={index} onChange={handleChangeInstruction} value={instruction}
    rows="2" cols="30" className="outline-none pl-2 bg-gray-300"
    ></textarea>
    <button data-instructionindex={index}  onClick={deleteInstruction}
    className="text-primary absolute right-2"
    >X</button>
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

      const inputClassList = `border-b-2 border-primary py-1 px-3  mb-3 text-gray-900 
      text-center outline-none w-32`;

      if(!isAuth) {
        return (
          <div className="flex flex-col">
            <p className="text-lg mt-8">You need to be authenticated to visit this page!</p>
            <Link className="bg-secondary p-4 text-white rounded mt-4 w-max text-center" to="/">Back to the main website</Link>
          </div>
        )
      }
    return (
        <form className="w-screen-lg flex flex-col items-center text-center" onSubmit={handleOnSubmit}>
          <h1 className="text-4xl my-6 text-primary text-center font-emilysCandy">New recipe! </h1>
          <div className="flex flex-col items-center">
          <label>Recipe name:</label>
          <input name="name" value={recipe.name} onChange={handleInputChange}
          className={`border-b-2 border-primary py-1 px-3 mb-3 text-gray-900 
          text-center outline-none w-80`} />
          </div>
        <div className="flex w-full justify-content  p-3">
          <div className="flex flex-col mx-12">
          <label>Cook time:</label>
          <input name="cookTime" value={recipe.cookTime} onChange={handleInputChange} placeholder="15 minutes"
          className={inputClassList} />
          </div>          
          <div className="flex flex-col mx-12">
          <label>Calories/100g:</label>
          <input name="calories" value={recipe.calories} onChange={handleInputChange} placeholder="100"
          className={inputClassList} />
          </div>          
          <div className="flex flex-col mx-12">
          <label>Servings:</label>
          <input name="servings" value={recipe.servings} onChange={handleInputChange} placeholder="4"
          className={inputClassList} />
          </div>
          </div>
      <div className="flex mt-8">
        <div className=" mr-12">
          <h2 className="mb-4 text-secondary font-emilysCandy text-2xl">Ingredients!</h2>
        {ingredientsList}
        <button className="bg-secondary text-white p-2 px-8 rounded" onClick={addIngredient}>Add ingredient!</button>
        </div>
        <div className="">
        <h2 className="mb-4 text-secondary font-emilysCandy text-2xl">Instructions!</h2>
        {instructionsList}
        <button className="bg-secondary text-white p-2 px-8 rounded cursor-pointer" onClick={addInstruction}>Add instruction!</button>
        </div>
        </div>

        <div className="flex flex-col mt-4 items-center mb-4">
          <label>Image:</label>
          <input type="file" ref={img} className="p-2" />
          </div>
        
        <input type="submit" value="Submit" className="w-48 p-2 rounded bg-primary text-white mb-12" />
      </form>
    )
}

export default RecipeForm;