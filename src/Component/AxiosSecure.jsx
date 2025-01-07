import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { UserAuthContext } from '../Firebase/Authentication';
import { useNavigate } from 'react-router-dom';
const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API}`,
    withCredentials:true
  });
const AxiosSecure = () => {
    const {Logout}=useContext(UserAuthContext)
    const navigate=useNavigate()

    useEffect(()=>{
        instance.interceptors.response.use(response=>{
            return response
        },error=>{
            if (error.status===401||error.status===403) {
                Logout()
                .then(result=>{
                    navigate('/login')

                })
                .catch(er=>{
                    console.log(er);
                    
                })
                
                
            }

            return Promise.reject(error)
        })

    },[])
    return instance
};

export default AxiosSecure;