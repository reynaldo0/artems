import React, { useState } from 'react'
import Card from '../components/Card'
import CardLeo from '../docs/CardLeo'

const Paintings = () => {
    const [selectedYear, setSelectedYear] = useState('1470s');

    const filteredCards = CardLeo.filter(card => card.year === selectedYear);

    return (
        <div className="relative max-w-screen-2xl mx-auto py-24 md:py-36 w-full flex flex-col items-center px-5">
            <div className="text-center">
                <p className="text-primary text-2xl">Leonardo Da Vinci</p>
                <p className="font-bold text-7xl">Paintings</p>
                <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl shadow w-full md:max-w-5xl text-center p-7 md:p-8 my-10">
                    <div className="flex gap-5 justify-center md:gap-16 text-lg md:text-2xl">
                        <button
                            onClick={() => setSelectedYear('1470s')}
                            className={`block ${selectedYear === '1470s' ? 'text-primary/80' : 'hover:text-primary/80'}`}
                        >
                            1470s
                        </button>
                        <button
                            onClick={() => setSelectedYear('1480s')}
                            className={`block ${selectedYear === '1480s' ? 'text-primary/80' : 'hover:text-primary/80'}`}
                        >
                            1480s
                        </button>
                        <button
                            onClick={() => setSelectedYear('1490s')}
                            className={`block ${selectedYear === '1490s' ? 'text-primary/80' : 'hover:text-primary/80'}`}
                        >
                            1490s
                        </button>
                        <button
                            onClick={() => setSelectedYear('1500s')}
                            className={`block ${selectedYear === '1500s' ? 'text-primary/80' : 'hover:text-primary/80'}`}
                        >
                            1500s
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-5">
                {filteredCards.length > 0 ? (
                    filteredCards.map((data, index) => (
                        <Card
                            key={index}
                            title={data.title}
                            description={data.description}
                            image={data.image}
                        />
                    ))
                ) : (
                    <p className="text-gray-500">No paintings available for this decade.</p>
                )}
            </div>
        </div>
    )
}

export default Paintings
