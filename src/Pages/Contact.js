import React from 'react'
import Layout from '../Components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
  <Layout>
    <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
      <Typography variant='h4'>
        Contact My Restaurant
      </Typography>
      <p>
      Reach out for inquiries about our delicious food delivery options and menu items at My Restaurant.
      Enjoy our delicious paneer dosa, burgers, and more delivered right to your home. We serve a variety of tasty dishes for everyone.


      </p>
    </Box>
    <Box sx={{ m: 5, width: "600px", ml: 10, "@media (max-width:600px)":{
      width: "300px",
    }, }}>
<TableContainer component={Paper}>
 <Table aria-label='Contact table'>
  <TableHead>
    <TableRow>
      <TableCell 
      sx={{ bgcolor: "black", color: "white" }}
      align='center'
      >
      Contact Details</TableCell>
    </TableRow>
  </TableHead> 
  <TableBody>
    <TableRow>
      <TableCell>
        

  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />1800-00-0000(toll free)
      </TableCell>
            
    </TableRow>

    <TableRow>
      <TableCell>
        <MailIcon sx={{ color: "skyblue", pt: 1 }} />help@myrestaurant.com
      </TableCell>
      </TableRow>


    <TableRow>
    <TableCell>
        

    <CallIcon sx={{ color: "green", pt: 1 }} />05683 2443842
    </TableCell>

    </TableRow>
  </TableBody>


 </Table>


</TableContainer>

    </Box>
  </Layout>
  )
}

export default Contact;