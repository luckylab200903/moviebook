import React, { useEffect, useState } from "react";
import Vediocard from "./Vediocard";

const Body = () => {
    const [jsondata,setjsondata]=useState([])

  const fetchdata = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json = await response.json();
      console.log(json);
      setjsondata(json)
    } catch (error) {
      console.log("error fetching details", error);
    }
  };
  

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="mx-auto p-4 flex justify-center font-bold p-12">
      <Vediocard data={jsondata}/>
    </div>
  );
};

export default Body;
