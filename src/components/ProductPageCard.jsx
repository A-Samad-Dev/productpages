import React from 'react'
import { useNavigate } from 'react-router'

const ProductPageCard = ({ product }) => {
    const navigate = useNavigate()
  return (
    <div className='w-full h-[300px] rounded-[10px] shadow-lg bg-white overflow-hidden relative'>
        {/* for product image */}
        <div className="w-full h-4/7 group bg-gray-200 rounded-tl-[10px] rounded-tr-[10px] relative">
            <div className='absolute group-hover:opacity-100 opacity-0 inset-0 bg-black/60 transition-opacity duration-300 flex flex-col justify-center items-center gap-4'>
                <button onClick={() => navigate(`/product/${product.id}`, {state: {product}})} className='py-2 px-4 bg-blue-600 rounded-[10px] text-white cursor-pointer hover:bg-blue-700 transition-all'>View</button>
            </div>
            <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain rounded-[10px]" />
        </div>
        {/* for the product content */}
        <div className="p-4 flex flex-col justify-between h-3/7">
            <div>
                <h1 className="text-[16px] font-bold leading-5">{product.title}</h1>
                <p className='text-[14px] text-gray-400'>{product.description.split(' ').splice(0, 8).join(' ')}...</p>
            </div>
            <div className='w-full flex justify-between items-center'>
                <p className='text-[14px] font-bold text-gray-700'>${product.price}</p>
                <button className='py-2 px-4 bg-blue-800 rounded-[10px] text-white cursor-pointer hover:bg-blue-950 transition-all'>Add to cart</button>
            </div>
        </div>

        <div className='absolute top-2 right-2 w-[40px] h-[40px] bg-red-500 rounded-full flex items-center justify-center'>
            <span className='text-white text-[12px] font-bold'>{Math.round(product.discountPercentage)}%</span>
        </div>
    </div>
  )
}   

export default ProductPageCard