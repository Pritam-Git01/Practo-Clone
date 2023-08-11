import React from 'react'
import Logo from '../../atoms/Logo/logo'

const Header = () => {
  return (
    <div style={{height:"10vh",background:"#fff", display: "flex",  alignItems:"center", paddingLeft:"10rem"}}>
        <Logo/>
    </div>
  )
}

export default Header