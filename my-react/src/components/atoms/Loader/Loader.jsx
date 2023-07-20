import React from 'react';
import { Stack,CircularProgress } from '@mui/material';

const Loader = () => {
  return (
   <Stack height={"90vh"} justifyContent={'center'} alignItems={'center'}>

    <CircularProgress size='5rem' thickness={1}  />
    
   
   </Stack>
  )
}

export default Loader