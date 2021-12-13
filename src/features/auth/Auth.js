import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, register, resetError, selectError,selectIsAuth, selectIsLoading } from "./authSlice";
import AuthForm from '../../Components/AuthForm';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authError = useSelector(selectError);
    const isAuth = useSelector(selectIsAuth);
    const isLoading = useSelector(selectIsLoading);
    const [isLogin, setIsLogin] = useState(true);


    const handleOnSubmit = async (credentials) => {
        await dispatch(login(credentials))
    }

    useEffect(() => {
        if(isAuth) navigate('/');
        return () => {
            dispatch(resetError())
        }
    },[isAuth])

    return (
        <AuthForm handleOnSubmit={handleOnSubmit} 
        isLogin={isLogin} authError={authError} isLoading={isLoading} />
    )
}

export default Auth;