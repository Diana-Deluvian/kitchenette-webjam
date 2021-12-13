import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../features/auth/authSlice';
import {  categories } from "../features/search/searchSlice";

const RecipeForm = ( props) => {

  const isAuth = useSelector(selectIsAuth);


  const [recipe, setRecipe] = useState(() => {
    return {
      name: props.recipe ? props.recipe.name : '',
      cookTime: props.recipe ? props.recipe.cookTime : '',
      calories: props.recipe ? props.recipe.calories : '',
      servings: props.recipe ? props.recipe.servings : '',
      category: props.recipe ? props.recipe.category : 'Other',
      cost: props.recipe ? props.recipe.cost : ''
    };
  });
  const [categoryDropdown, setCategoryDropdown] = useState(false);

    const img = React.createRef();
    const [imgName, setImgName] = useState("");
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.ingredients : ['']);
    const [instructions, setInstructions] = useState(props.recipe ? props.recipe.instructions : ['']);
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      console.log(name, value, event);
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
      <span className="text-secondary"> ❃</span>
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
    rows="2" className="outline-none pl-2 pr-4 bg-gray-300 md:w-80"
    ></textarea>
    <button data-instructionindex={index}  onClick={deleteInstruction}
    className="text-primary absolute right-2"
    >X</button>
    </div>
));

const handleCategoryInput = (e) => {
  e.preventDefault();
  setCategoryDropdown(!categoryDropdown);
}

const handleCategoryChange = (e) => {
  e.preventDefault();
  setRecipe((prevState) => ({
    ...prevState,
    category: e.target.innerHTML
  }));
  setCategoryDropdown(false);
}

const handleImgChange = () => {
  if(img.current.files[0].name.length > 15) setImgName(img.current.files[0].name.substring(0, 15) + '...');
  else setImgName(img.current.files[0].name);
}
const categoriesList = categories.map(category => 
  <li className="cursor-pointer py-1" onClick={handleCategoryChange}>{category}</li>)

    const handleOnSubmit = (event) => {
        event.preventDefault();
        /*
        let formData = new FormData();
        const somefile = img.current.files[0];
        if(somefile) formData.append("somefile", somefile);
        formData.append("name", recipe.name);
        formData.append("cookTime", recipe.cookTime);
        formData.append("calories", recipe.calories);
        formData.append("servings", recipe.servings);
        formData.append("cost",  recipe.cost);
        formData.append("category", recipe.category);
        if(props.isEditing) formData.append("_id", props.recipe._id);
        //we can't use FormData(form) because of the need to stringify
        formData.append("ingredients", JSON.stringify(ingredients));
        formData.append("instructions", JSON.stringify(instructions));
        
        for (var p of formData) {
          console.log(p);
        }
        props.handleOnSubmit(formData); 

        */
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
          
          <div className="flex flex-col md:flex-row w-full justify-evenly p-3">
          <div className="flex flex-col items-center">
          <label>Recipe name:</label>
          <input name="name" value={recipe.name} onChange={handleInputChange}
          className={`border-b-2 border-primary py-1 px-3 mb-3 text-gray-900 
          text-center outline-none w-60 md:w-60`} />
          </div>
          <div className="flex flex-col items-center">
          <label>Category:</label>
          <button onClick={handleCategoryInput} className="relative py-1 px-3 border-b-2 border-primary w-32"> {recipe.category} </button>
          { categoryDropdown &&
          <ul className="absolute mt-16 border border-primary px-16 py-2 z-10 bg-white">
            {categoriesList}
          </ul>
          }
          </div>
          </div>
        <div className="flex w-full flex-col md:flex-row justify-content items-center  p-3">
          <div className="flex flex-col  mx-12">
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
          <div className="flex flex-col mx-12">
          <label>Cost(kr):</label>
          <input name="cost" value={recipe.cost} onChange={handleInputChange} placeholder="25"
          className={inputClassList} />
          </div>
          </div>
      <div className="flex flex-col justify-around items-center md:items-start md:flex-row mt-8">
        <div className="md:mr-12">
          <h2 className="mb-4 text-secondary font-emilysCandy text-2xl">Ingredients!</h2>
        {ingredientsList}
        <button className="bg-secondary text-white p-2 px-8 rounded mt-2" onClick={addIngredient}>Add ingredient!</button>
        </div>
        <div className="">
        <h2 className="mb-6 text-secondary font-emilysCandy text-2xl">Instructions!</h2>
        {instructionsList}
        <button className="bg-secondary text-white p-2 px-8 rounded" onClick={addInstruction}>Add instruction!</button>
        </div>
        </div>

        <div className="flex flex-col mt-4 items-center content-center mb-4">
          <label className="bg-secondary px-6 py-2 rounded cursor-pointer text-white">Select Image:
          <input type="file" ref={img} onChange={handleImgChange} className="p-2 flex items-center content-center hidden" />
          </label>
          {imgName.length === 0 ? 
            <p className="border-b-2 text-gray-500 border-primary w-48 mt-2">Your image here</p>
            :
            <p className="border-b-2 border-primary w-48 mt-2">{imgName}</p>
          }
          
          </div>

        
        <input type="submit" value="Submit" className="w-48 p-2 rounded bg-primary text-white mb-12 cursor-pointer" />
      </form>
    )
}

export default RecipeForm;