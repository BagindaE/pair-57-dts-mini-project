import React, {useEffect, useState} from 'react';
import './App.css';
import { Home, Form, DetailsMovie, PageNotFound } from './Component/Layout';
import { app } from './Component/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAction = (id) => {
    console.log(id)
    const authentication = getAuth();
    
    if(id === 1){
      signInWithEmailAndPassword(authentication, email, password)
        .then((resp) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', resp._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
        })
    }

    if(id === 2){
      createUserWithEmailAndPassword(authentication, email, password)
        .then((resp) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', resp._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token')

    if(authToken){
      navigate('/home')
    }
  }, [])

  return (
      <>
      <ToastContainer />
      <Routes>
        <Route  path='/login' 
                element={
                  <Form 
                    title="Log in"
                    setEmail={setEmail}
                    setPassword={setPassword} 
                    handleAction={() => handleAction(1)} />} 
        />
        <Route  path='/signup' 
                element={
                  <Form 
                    title="Sign up"
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleAction={() => handleAction(2)} />} 
        />
        <Route  path='/home'
                element={
                  <Home />
                }
        />
        <Route  path='/movie/:movieId'
                element={
                  <DetailsMovie />
                }
        />
        <Route  path='*'
                element={
                  <PageNotFound />
                }
        />
      </Routes>
      </>
  );
}

export default App;
