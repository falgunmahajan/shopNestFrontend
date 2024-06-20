import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden mx-2 border'>
      <div className='h-[13rem] w-3/4'>
        <img src={product.imageUrl} alt="" className='w-full h-full object-cover object-top'/>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  )
}

export default ProductsCard
