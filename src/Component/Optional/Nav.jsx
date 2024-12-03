import React, { useContext, useState } from 'react';
import { UserAuthContext } from '../../Firebase/Authentication';

const Nav = () => {
    const {name,LoginGoogle}=useContext(UserAuthContext)
    const handleLoginGoogle=()=>{
        LoginGoogle()
        .then(result=>{
            console.log(result.user);
            
        })
        .catch(er=>{
            console.log(er);
            
        })

    }
    
    return (
        <div>
            <h1>Hay NAv {name}</h1>
            <button onClick={handleLoginGoogle} className='btn bg-yellow-400'>Login</button>
        </div>
    );
};

export default Nav;