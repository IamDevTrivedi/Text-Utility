import React from 'react';

export default function Main() {
    return (
        <div className='bg-blue-100 h-screen flex flex-col md:flex-row'>
            {/* Right Section */}
            <div className='w-full md:w-3/4 p-4 flex flex-col'>
                <div className='flex-grow'>
                    <h2 className='text-black text-4xl mb-4'>Enter Your Text Below</h2>
                    <div className='flex-grow'>

                        
                        {<div className='mt-10 '> </div>}

                        <textarea
                            className='w-full h-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300'
                            placeholder='Enter a piece of text here...'
                        ></textarea>
                    </div>
                </div>
            </div>

            {/* Left Section with 5x2 Table */}
            <div className='bg-green-500 w-full md:w-1/4 p-4 flex flex-col'>
                <div className='flex-grow'>
                    <h2 className='text-black text-2xl mb-4'>Summary report</h2>
                    <div className='flex-grow'>
                        


                    </div>
                </div>
            </div>
        </div>
    );
}
