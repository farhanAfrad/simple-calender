import React from 'react';

const Date = ({dt}) => {
    
    const {date,currentMonth,today} = dt;
    // console.log(date, currentMonth, today);
    return (
        <div className={`h-14 border-t grid place-content-center ${currentMonth?'':'text-gray-400'}`}>
            <p className={`h-8 grid place-content-center w-8 text-center rounded-full ${today? 'bg-red-600 text-white':'hover:bg-black hover:text-white transition-all'}`}>{date.date()}</p>
        </div>
    );
};

export default Date;