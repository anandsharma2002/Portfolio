import React from 'react'

export default function introductionContact({ icon, title, value }) {
    return (
        <div className='flex items-center mb-4'>
            <div className='introductionContactIcon'>
                {icon}
            </div>
            <div className='text-[14px] ml-4 sm:text-[12px]'>
                <p>{title}</p>
                <p>{value}</p>
            </div>
        </div>
    )
}
