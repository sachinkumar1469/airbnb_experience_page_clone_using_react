import React from 'react';
import cover from '../images/photo-grid.png';
export default function Hero(){
    return(
        <div className='hero'>
            <img src={cover} alt="" className='grid-image'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}