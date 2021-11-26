import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "./authSlice";
import AuthForm from '../../Components/AuthForm';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const handleOnSubmit = async (credentials) => {
        await dispatch(login(credentials))
        navigate('/');
    }

    return (
        <AuthForm handleOnSubmit={handleOnSubmit} isLogin={isLogin} />
    )
}

export default Auth;