import React from 'react'
import { Button } from "@mui/material";
import { buttonStyle } from './ProductsCarouselStyle';
const ButtonComponent = ({children,style,click}) => {

  return (
    <Button variant="contained" className="z-50 " sx={{...buttonStyle,...style}} onClick={click} >
    {children}
  </Button>
  )
}

export default ButtonComponent
