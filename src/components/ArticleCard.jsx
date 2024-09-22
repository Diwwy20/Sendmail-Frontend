import React from 'react'

const ArticleCard = ({ position, image }) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]'>
        <div>
            <img 
            src={image}
            alt="title"
            className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'
            />
        </div>
        <div className='p-5'>
            <div>
                <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>
                    {position}
                </h2>
                <p className='text-dark-light mt-3 text-sm md:text-lg'>
                    Caption
                </p>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard