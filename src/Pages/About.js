import React from 'react'
import Layout from '../Components/Layout';
import { Box, Typography } from '@mui/material';


const About = () => {
  return (
    <>
    <Layout>
   <Box sx={{
    my: 15,
    textAlign: 'center',
    padding: 2, 
    "& h4": {
      fontWeight: "bold",
      my: 2,
      fontSize: "2rem"
    },
    "& p": {
      textAlign: 'justify'
    },
    "@media (max-width:600px)": {
      mt: 0,
      " & h4 ":{
        fontSize: "1.5rem",
      } 

    }
   }}
   >
    <Typography variant='h4'>

      Welcome To My Restaurant
    </Typography>
    <p>
    Delicious Food Delivered to You
At My Restaurant, we pride ourselves on serving delightful dishes like paneer dosa, burger, chili potato, pizza, pulao, matar paneer, and more, all delivered right to your home.

a woman in a green jacket walking down a street
Taste the Difference
Savor Every Bite
Our commitment is to provide you with high-quality, flavorful meals that satisfy your cravings. Experience the joy of authentic Indian cuisine with every order from My Restaurant.


    </p>
    <br></br>
    <br></br>
<p>
Tasty Indian Cuisine
a man standing in front of a display of vegetables
Savor authentic dishes like matar paneer and saahi paneer, freshly prepared for you.

a man standing in front of a bunch of bananas
a man standing in front of a bunch of vegetables
Quick Home Delivery
Enjoy fast delivery service for all your favorite meals right to your doorstep.

Indulge in flavorful dishes made with fresh ingredients and traditional recipes for a delightful experience.

 
  
</p>   
    
  

   </Box>
  </Layout>
  </>
  )
}

export default About;