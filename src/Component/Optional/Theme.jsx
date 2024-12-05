import React, { createContext, useEffect, useState } from 'react';
export const DarkContext=createContext()
const Theme = ({children}) => {
    const [isDark,setIsDark]=useState(false)
    useEffect(()=>{
        if (isDark) {
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark')
        }

    },[isDark])
    const darkInfo={
        isDark,setIsDark

    }
    return (
        <div>
        <DarkContext.Provider value={darkInfo}>{children}</DarkContext.Provider>
        </div>
    );
};

export default Theme;