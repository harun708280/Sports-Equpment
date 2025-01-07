import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import useProduct from '../../Hooks/useProduct';

const LaodCategory = () => {
    const loadData=useLoaderData()

    const [product,loading,refetch]=useProduct()
    console.log(product);
    
    
    
    return (
        <div className='flex '>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto my-12">
           
           {
               product.map(item=><Product key={item._id} item={item}></Product>)
           }
          </div>
        </div>
    );
};

export default LaodCategory;