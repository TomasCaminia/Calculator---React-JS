import React from 'react';

export const PanelButton = ( { value , setValue } ) => {

    const handleClick = ( e ) => {
        setValue( value.concat(e.target.name) )
    }

    const clear = () => {
        setValue("")
    }

    const back = () => {
        setValue( value.slice( 0 , -1 ))
    }

    const calculate = () => {
        setValue( eval( value ) )
    }

    return(
        <>
            <div className='panelButton'>
                <button          id='clear' className='button reset special'                 onClick={ clear } >C</button>
                <button                     className='button special'><i class="fas fa-arrow-left"    onClick={ back } ></i></button>
                <button name=" / "            className='button special'                       onClick={ handleClick } >&divide;</button>
                <button name="7"            className='button'                                 onClick={ handleClick } >7</button>
                <button name="8"            className='button'                                 onClick={ handleClick } >8</button>
                <button name="9"            className='button'                                 onClick={ handleClick } >9</button>
                <button name=" * "            className='button special'                                 onClick={ handleClick } >&times;</button>
                <button name="4"            className='button'                                 onClick={ handleClick } >4</button>
                <button name="5"            className='button'                                 onClick={ handleClick } >5</button>
                <button name="6"            className='button'                                 onClick={ handleClick } >6</button>
                <button name=" - "            className='button special'                       onClick={ handleClick } >-</button>
                <button name="3"            className='button'                                 onClick={ handleClick } >3</button>
                <button name="2"            className='button'                                 onClick={ handleClick } >2</button>
                <button name="1"            className='button'                                 onClick={ handleClick } >1</button>
                <button name=" + "            className='button special'                                 onClick={ handleClick } >+</button>
                <button name="0"            className='button'                                 onClick={ handleClick } >0</button>
                <button name="."            className='button'                       onClick={ handleClick } >.</button>
                <button                     className='button igual special'                 onClick={ calculate } >=</button>
            </div>
        </>
    )
}