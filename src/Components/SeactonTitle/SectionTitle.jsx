import React from 'react';

const SectionTitle = ({underline,subUnderline}) => {
    return (
        <div className='mx-auto text-center mb-5 p-3 lg:w-3/12'>
            <p className='text-orange-300'>{subUnderline}</p>
            <p className='text-4xl border-y-2 p-2'>{underline}</p>
        </div>
    );
};

export default SectionTitle;