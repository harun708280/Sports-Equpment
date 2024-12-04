import React, { useEffect, useState } from 'react';

import HomeCaro from './HomeCaro';
import { Outlet, useLoaderData } from 'react-router-dom';
import Product from './Product';
import Category from './Category';

const Home = () => {
    const loadData=useLoaderData()
    console.log(loadData);
    const [category,setCategory]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch(`http://localhost:9000/equipments/categories`)
            const data=await res.json()

            setCategory(data)
            
        }
        fetchData()


    },[])
    
    return (
        <div>
           <HomeCaro></HomeCaro>
           <div className="">

            <Category category={category} ></Category>

           </div>
           <div className="">
            <Outlet></Outlet>
           </div>




           
        </div>
    );
};

export default Home;