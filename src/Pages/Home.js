import React from 'react'
import Layout from '../Components/Layout'
import { Link } from 'react-router-dom';
import img from "../images/banner.jpeg";
import "../styles/HomeStyles.css";


const Home = () => {
  return (
    <Layout>
     
    <div className="home">
      <img src={img} alt={img}></img>
     
    
   <div className="headerContainer">
    
<div>
<h1>Food Website</h1>
<p>Best Food In India </p>
</div>
  <div>
  <Link to="/menu">
  <button>ORDER NOW</button>
  </Link>
  </div>
  
  

</div>
</div>
    
  </Layout>
  )
}

export default Home;