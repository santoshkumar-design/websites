import React from 'react'
import Layout from '../Components/Layout';
import { Menulist } from '../data/data';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


const Menu = () => {
  return (
    <Layout>
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>{
    Menulist.map(menu => (
          <Card sx={{ maxWidth: '390px', display: 'flex', m: 2, }}>
<CardActionArea>
<CardMedia 
  sx={{ minHeight: '300px' }} 
  component={'img'}
  src={menu.image}
  alt={menu.name}
  />
  <CardContent>
<Typography variant='h5' gutterBottom component={'div'}>
  {menu.name}
</Typography>

<Typography variant='body2'>
{menu.description}
</Typography>

<Typography variant='body2'>
{menu.price}
</Typography>

  </CardContent>

</CardActionArea>

          </Card>
        )

        )
      }
    </Box>
  </Layout>
  )
}

export default Menu;