import React from "react";
import Navbar from "../components/Navbar";
import GridBox from "../components/GridBox";
import Tables from "../components/Tables";

function Home() {
  return (
    <>
      <Navbar />
      <GridBox compo={<Tables />} />
    </>
  );
}

export default Home;
