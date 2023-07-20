import { Alert, Stack } from '@mui/material'
import React from 'react'

const Error = ({message}) => {
  return (
    <Stack height={'80vh'} justifyContent={'flex-end'} alignItems={'center'} >
        <Alert severity='error' sx={{width:"24vw", marginBottom:"2rem"}}>{message}</Alert>
    </Stack>
  )
}

export default Error;