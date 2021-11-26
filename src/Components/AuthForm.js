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
        <form onSubmit={handleOnSubmit}>
        <label>
          Username
          <input name="username" value={credentials.username} onChange={handleChange} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={credentials.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default RecipeForm;