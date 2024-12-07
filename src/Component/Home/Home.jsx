import React, { useEffect, useState } from 'react';

import HomeCaro from './HomeCaro';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Product from './Product';
import Category from './Category';
import Service from './Service';
import NewLatest from './NewLatest';
// import NewLatest from './NewLatest';

const Home = () => {
    useEffect(()=>{
        document.title="Sports Zone || home"

    },[])
    const loadData=useLoaderData()
    console.log(loadData);
    const [category,setCategory]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch(`https://sports-equiepment.vercel.app/equipments/categories`)
            const data=await res.json()

            setCategory(data)
            
        }
        fetchData()
        


    },[])

    const navigate=useNavigation()
    
    return (
        <div>
           <HomeCaro></HomeCaro>
           <Service></Service>
           <div className="">

            <Category category={category} ></Category>

           </div>
           <div className="w-11/12 mx-auto">
           {
            navigate.state==='loading'?<h1>loading</h1>:
            <Outlet></Outlet>
           }
            
           </div>
           {/* <div className="">
            <NewLatest></NewLatest>

           </div> */}
           <NewLatest></NewLatest>




           
        </div>
    );
};

export default Home;