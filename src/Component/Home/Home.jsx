import React, { useEffect, useState } from "react";

import HomeCaro from "./HomeCaro";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Product from "./Product";
import Category from "./Category";
import Service from "./Service";
import NewLatest from "./NewLatest";
import About from "./About";
import NewsLatter from "./NewsLatter";
// import NewLatest from './NewLatest';
import v1 from "/v2.mp4";
const Home = () => {
  useEffect(() => {
    document.title = "Sports Zone || home";
  }, []);
  const loadData = useLoaderData();

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API}/equipments/categories`
      );
      const data = await res.json();

      setCategory(data);
    };
    fetchData();
  }, []);

  const navigate = useNavigation();

  return (
    <div>
      <div className="w-11/12  mx-auto py-10 flex gap-3">
        <div className="w-10/12 ">
          <HomeCaro></HomeCaro>
        </div>
        <div className="w-3/12 h-[60vh]">
          <video
            src={v1}
            className="w-full h-full object-fill rounded-lg"
            autoPlay
           
            loop
            muted
          />
        </div>
      </div>
      <Service></Service>
      <div className="">
        <Category category={category}></Category>
      </div>
      <div className="w-11/12 mx-auto">
        {navigate.state === "loading" ? <h1>loading</h1> : <Outlet></Outlet>}
      </div>

      <About></About>

      <NewLatest></NewLatest>
      <NewsLatter></NewsLatter>


      
    </div>
  );
};

export default Home;
