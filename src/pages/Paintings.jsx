import React from 'react'
import Card from '../components/Card'
import CardLeo from '../docs/CardLeo'

const Paintings = () => {
    
    return (
        
        <div className="relative max-w-screen-2xl mx-auto py-24 md:py-36 w-full flex flex-col items-center px-5">
            <div className="text-center">
                <p className="text-primary text-2xl">Leonardo Da Vinci</p>
                <p className="font-bold text-7xl">Paintings</p>
                <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl sedow w-full md:max-w-5xl text-center p-7 md:p-8 my-10">
                    <div className="flex gap-5 justify-center md:gap-16 text-lg md:text-2xl">
                        <a href="index.html" className="block hover:text-primary/80">
                            1470s
                        </a>
                        <a href="2-vincent.html" className="block hover:text-primary/80">
                            1480s
                        </a>
                        <a
                            href="3-pablopicasso.html"
                            className="block hover:text-primary/80"
                        >
                            1490s
                        </a>
                        <a
                            href="4-michaelangelo.html"
                            className="block hover:text-primary/80"
                        >
                            1500s
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5">
                {CardLeo.map((data, index) => (
                    <Card
                        key={index}
                        title={data.title}
                        description={data.description}
                        image={data.image}
                    />
                ))}
            </div>
        </div>
    )

}

export default Paintings