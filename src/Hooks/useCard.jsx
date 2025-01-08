import React, { useContext } from 'react';
import AxiosSecure from '../Component/AxiosSecure';
import { UserAuthContext } from '../Firebase/Authentication';
import { useQuery } from '@tanstack/react-query';

const useCard = () => {
    const axiosSecure=AxiosSecure()
    const {user}=useContext(UserAuthContext)
    const {data:cart=[],refetch,isPending}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/cart/${user?.email}`)
            return res.data
        }
    })

    return [cart,refetch,isPending]
};

export default useCard;