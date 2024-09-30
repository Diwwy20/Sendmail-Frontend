import React from 'react'
import { images } from '../../../constants'
import ArticleCard from '../../../components/ArticleCard'

const position = [
    {
        id: 1,
        position: 'Web Developer',
        caption: 'A web developer or programmer is someone who takes a web design - which has been created by either a client or a design team - and turns it into a website. They do this by writing lines and lines of complicated code, using a variety of languages. Web developers have quite a difficult job, because they essentially have to take a language we understand, such as English, and translate it into a language that a computer understands, such as Python or HTML.',
        image: images.position1
    },
    {
        id: 2,
        position: 'Full Stack Developer',
        caption: 'A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.',
        image: images.position2
    },
    {
        id: 3,
        position: 'Backend Developer',
        caption: 'Back-end development means working on server-side software, which focuses on everything you can’t see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.',
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
                caption={item.caption}
                />
            ))}
        </div>
    </section>
  )
}

export default Article