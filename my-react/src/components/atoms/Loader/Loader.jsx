import React from 'react';
import { Stack,CircularProgress } from '@mui/material';

const Loader = () => {
  return (
   <Stack display='flex' width={"100vw"} height={"25vh"} justifyContent={'center'} alignItems={'center'}>

    <CircularProgress size='5rem' thickness={1}  />
    
   
   </Stack>
  )
}

export default Loader