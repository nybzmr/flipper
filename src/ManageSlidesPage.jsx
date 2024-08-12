import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { ServiceData } from "./constants";
import SpaceCity from "./assets/SpaceCity.jpg";


const ManageSlidesPage = () => {
    
    // const handleDelete = (id) => {
    //     
    // };

    return (
        <div className="flex flex-col lg:flex-row h-screen p-4 "
        style={{ backgroundImage: `url(${SpaceCity})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Delete Section */}
            <div className="w-full lg:w-[30%] h-full bg-white shadow-md rounded p-4 mb-4 mx-6 lg:mb-0 bg-transparent">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Uploaded Slides</h2>
                <div className="overflow-y-auto h-[90%] space-y-2">
                    {ServiceData.map(item => (
                        <div key={item.id} className="flex justify-between items-center p-2 bg-gray-200 rounded">
                            <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.question}</p>
                            </div>
                            <button 
                                // onClick={() => handleDelete(slide.id)} 
                                className="text-red-600 hover:text-red-800"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Section */}
            <div className="w-full lg:w-[70%] h-full rounded p-4 flex flex-col justify-between bg-transparent ">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Add New Slide</h2>
                    <div className="mb-4">
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
                        <textarea
                            id="question"
                            rows="2"
                            className="w-full p-2 mt-1 border rounded focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter the question"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
                        <textarea
                            id="answer"
                            rows="6"
                            className="w-full p-2 mt-1 border rounded focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter the answer"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button 
                        className="bg-blue-600 text-white py-2 px-4 rounded flex items-center gap-2 hover:bg-blue-700"
                    >
                        <FaPlus />
                        Add Slide
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageSlidesPage;
