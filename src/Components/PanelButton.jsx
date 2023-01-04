import React from 'react';

export const PanelButton = () => {
    return(
        <>
            <div className='panelButton'>
                <button className='button reset plus-size'>C</button>
                <button className='button'><i class="fas fa-arrow-left"></i></button>
                <button className='button plus-size'>&divide;</button>
                <button className='button'>7</button>
                <button className='button'>8</button>
                <button className='button'>9</button>
                <button className='button'>&times;</button>
                <button className='button'>4</button>
                <button className='button'>5</button>
                <button className='button'>6</button>
                <button className='button plus-size'>-</button>
                <button className='button'>3</button>
                <button className='button'>2</button>
                <button className='button'>1</button>
                <button className='button'>+</button>
                <button className='button igual plus-size'>=</button>
                <button className='button'>0</button>
                <button className='button plus-size'>.</button>
            </div>
        </>
    )
}