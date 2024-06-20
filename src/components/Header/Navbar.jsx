import { Search, ShoppingCart } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between shadow-lg py-5 md:px-12 max-md:px-6 items-center flex-wrap '>
      <p className=' text-2xl font-extrabold' >
        <span>Shop</span><span className='text-red-400'>Nest</span>
      </p>
      <div className='flex items-center rounded-2xl border pl-3 max-md:order-3 max-md:mt-4'>
        <input className='pr-20 ' placeholder='search product here...'/>
        <Button variant='contained' size='small' sx={{
          bgcolor:"red",
          "&:hover":{
            bgcolor:"red",
          }
        }}>
          <Search/>
        </Button>
      </div>
      <div className='flex gap-6 text-lg items-center '>
        <p >SignIn</p>
        <p>SignUp</p>
        <p className='ml-2'><ShoppingCart size="large"/></p>
       
      </div>
    </div>
  )
}

export default Navbar
