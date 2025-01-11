import React, { useContext } from 'react';
import AxiosSecure from '../Component/AxiosSecure';
import { UserAuthContext } from '../Firebase/Authentication';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const secureAxios=AxiosSecure()
    const {user}=useContext(UserAuthContext)
    const email=user?.email
    const {data:role}=useQuery({
        queryKey:['role',email],
        queryFn:async()=>{
            const {data}=await secureAxios.get(`/users-role/${email}`)
            return data
        }
    })
    return [role];
};

export default useRole;