import React from 'react'

// import Button from "./components/button";
// import Button from " ../components/button";

import Navbar from "../components/navbar";
import BasicExample from "../components/mainBanner";
import Firstbanner from "../components/Firstbanner";
import Register from "../pages/Register";



function Home() {
  return (
    <>
    {/* <div>Home</div> */}

    <Navbar fixed="top"/>
      <BasicExample/>
      <Register/>
      <Firstbanner />
     {/* <Button variant="primary" size="lg">reUsed btn</Button> */}
    </>
  )
}

export default Home