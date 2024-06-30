import React from 'react';

import '../../../CSS/ByStyle.css'

export function PresentationBystyle({ Title, ImageOne, NameOne, ImageTwo, NameTwo, ImageThree, NameThree, ImageFour, NameFour }) {
    return (
        <div className='CoverListStyle'>
            <h6 className='d-flex align-items-center justify-content-center'>{Title}</h6>

            <ul className="Style d-flex align-items-center justify-content-center">
                <List Image={ImageOne} Name={NameOne} />
                <List Image={ImageTwo} Name={NameTwo} />
                <List Image={ImageThree} Name={NameThree} />
                <List Image={ImageFour} Name={NameFour} />
            </ul>
        </div>
    );
}

function List({ Image, Name }) {
    return (
        <li>
            <img src={Image} alt={Name} />
            <a href={`/${Name}`} className='text-decoration-none'>
                <p className="d-flex align-items-center justify-content-center">
                    {Name}
                </p>
            </a>
        </li>
    );
}