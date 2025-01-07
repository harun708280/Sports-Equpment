import React from 'react';
import usePublicAxios from './usePublicAxios';
import { useQuery } from '@tanstack/react-query';

const useProduct = () => {
    const axiosPublic=usePublicAxios()

    const {data:product=[],isPending:loading,refetch}=useQuery({
        queryKey:['product'],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/all-Equipment`)
            return res.data
        }
    })
    
    
    return [product,loading,refetch]
};

export default useProduct;