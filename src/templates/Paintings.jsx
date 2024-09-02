import React, { useState } from 'react';
import Card from '../components/Card';

const Paintings = ({ painterData = [], painterName }) => {
    const [selectedYear, setSelectedYear] = useState('1470s');

    if (!painterData || painterData.length === 0) {
        return (
            <div className="text-center">
                <p>No paintings available for {painterName}.</p>
            </div>
        );
    }

    const filteredCards = painterData.filter(card => card.year === selectedYear).slice(0, 4);

    return (
        <div className="relative max-w-screen-2xl mx-auto py-12 md:py-24 w-full flex flex-col items-center px-5">
            <div className="text-center mb-12">
                <p className="text-primary text-xl md:text-2xl">{painterName}</p>
                <p className="font-bold text-4xl md:text-6xl lg:text-7xl">Paintings</p>
                <div className="bg-white/80 text-primary bg-opacity-75 rounded-3xl sedow w-full md:max-w-5xl text-center p-1 md:p-5 my-8 md:my-10">
                    <div className="flex flex-wrap gap-5 py-1 px-3 justify-center md:gap-16 text-sm md:text-lg lg:text-xl">
                        {['1470s', '1480s', '1490s', '1500s'].map(year => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`py-2 px-2 border-none cursor-pointer transition-colors duration-300 ease-in-out ${selectedYear === year ? 'bg-primary text-white rounded-lg' : 'bg-transparent rounded-lg hover:bg-gray-300'}`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
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
                    <p className="text-gray-500 text-lg">No paintings available for this decade.</p>
                )}
            </div>
        </div>
    );
};

export default Paintings;
