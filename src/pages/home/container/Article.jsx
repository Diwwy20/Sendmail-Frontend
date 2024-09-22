import React from 'react'
import { images } from '../../../constants'
import ArticleCard from '../../../components/ArticleCard'

const position = [
    {
        id: 1,
        position: 'Web Developer',
        image: images.position1
    },
    {
        id: 2,
        position: 'Full Stack Developer',
        image: images.position2
    },
    {
        id: 3,
        position: 'Backend Developer',
        image: images.position3
    }
]
const Article = () => {
  return (
    <section className='flex flex-col container mx-auto px-5 py-10'>
        <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
            {position.map((item) => (
                <ArticleCard 
                key={item.id}
                position={item.position} 
                image={item.image}
                />
            ))}
        </div>
    </section>
  )
}

export default Article