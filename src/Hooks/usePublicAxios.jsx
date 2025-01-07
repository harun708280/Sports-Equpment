import React from 'react';
import axios from "axios";
const axiosPublic=axios.create({
    baseURL:'http://localhost:9000'
})
const usePublicAxios = () => {
    return axiosPublic
};

export default usePublicAxios;