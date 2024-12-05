import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const LaodCategory = () => {
    const loadData=useLoaderData()
    console.log(loadData);
    
    return (
        <div className='flex '>
            
            <div className="grid grid-cols-3 gap-6 w-11/12 mx-auto my-12">
           
           {
               loadData.map(item=><Product key={item._id} item={item}></Product>)
           }
          </div>
        </div>
    );
};

export default LaodCategory;