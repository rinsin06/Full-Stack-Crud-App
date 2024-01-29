import React, { useEffect } from 'react'
import Login from '../Components/Login/Login'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div>
      <Login/>
    </div>
  )
}

export default LoginPage
