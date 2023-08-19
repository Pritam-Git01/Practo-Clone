import { Alert, Stack } from '@mui/material'
import React from 'react'

const Error = ({message,width}) => {
  return (
    <Stack  width={width?width:"100vw"} height={"42vh"} display={"flex"} justifyContent={'center'} alignItems={'center'} >
        <Alert severity='error' sx={{width:"24vw", marginBottom:"2rem"}}>{message}</Alert>
    </Stack>
  )
}

export default Error;