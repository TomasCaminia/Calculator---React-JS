import React from 'react';

export const PanelButton = () => {
    return(
        <>
            <div className='panelButton'>
                <div className='button reset plus-size'>C</div>
                <div className='button'><i class="fas fa-arrow-left"></i></div>
                <div className='button plus-size'>&divide;</div>
                <div className='button'>7</div>
                <div className='button'>8</div>
                <div className='button'>9</div>
                <div className='button'>&times;</div>
                <div className='button'>4</div>
                <div className='button'>5</div>
                <div className='button'>6</div>
                <div className='button plus-size'>-</div>
                <div className='button'>3</div>
                <div className='button'>2</div>
                <div className='button'>1</div>
                <div className='button'>+</div>
                <div className='button igual plus-size'>=</div>
                <div className='button'>0</div>
                <div className='button plus-size'>.</div>
            </div>
        </>
    )
}