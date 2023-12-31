import Head from "next/head";
import Navbar from "../../components/Navbar";
import WhatDo from "../../components/WhatDo";

import Footer from "../../components/Footer";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";


export default function Home() {

  const [ isOpent,setOpent] = useState(false);
  const toggleSidebar = () =>{
    setOpent(!isOpent);
  }

  return (
    <div>
      <Head>
        <title>Shohidul Islam || Protfolio </title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <header>
        <Navbar toggleSidebar={toggleSidebar}/>
      </header>

      <main>
        <Sidebar inOpen={isOpent} toggleSidebar={toggleSidebar}/>
      
       <WhatDo/>
    
      </main>
      <footer>
        <Footer/>
      </footer>

    </div>
   
  )
}
