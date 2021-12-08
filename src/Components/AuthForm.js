import React, {useState, useEffect} from 'react';

const RecipeForm = ( props) => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    
    const handleChange = (e) => {
        const {name, value} =  e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value
          }));
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.handleOnSubmit(credentials);
    }

    return (
      <form className="w-screen-lg my-auto flex flex-col items-center text-center" onSubmit={handleOnSubmit}>
        <h1 className="text-4xl my-2 text-primary text-center font-emilysCandy">Welcome back, Diana </h1>
          <p className="text-gray-500">(Please note, if you're not Diana, you're really not supposed to be here)</p>
        <div className="flex flex-col items-center mt-6">
          
          <label>Username:</label>
          <input name="username" value={credentials.username} onChange={handleChange}
          className={`border-b-2 border-primary py-1 px-3 mb-3 text-gray-900 
          text-center outline-none w-60`} />
          </div>
          <div className="flex flex-col items-center">
          <label>Password:</label>
          <input name="password" type="password" value={credentials.password} onChange={handleChange}
          className={`border-b-2 border-primary py-1 px-3 mb-3 text-gray-900 
          text-center outline-none w-60`} />
          </div>
          <input type="submit" value="Submit" className="w-48 p-2 rounded bg-primary text-white mb-12 mt-6 cursor-pointer" />
      </form>
    )
}

export default RecipeForm;