import React, { useEffect, useState } from "react";
import School from "./School/School";
import Academy from "./Academy/Academy";
import PreSchool from "./PreSchool/PreSchool";
import University from "./University/University";
import Banner from "./Banner/Banner";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos?page=2&query=house&client_id=lhn5Z3awPZLfxukFk0iuY4So1V_kE33hSIaFJ4mquZY')
      .then((res) => {        
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);


  return (
    <>
      <Banner />
      <Academy data={data} />
      <University data={data}/>
      <School data={data}/>
      <PreSchool data={data}/>
    </>
  );
}

export default Home;
