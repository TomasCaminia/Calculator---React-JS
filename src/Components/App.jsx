import React, { useState } from 'react';

//CSS
import '../Assets/CSS/style.css'

//EXPORTACIONES DE COMPONENTES
import { Display } from './Display'
import { PanelButton } from './PanelButton'

export const App = () => {

    const [ result , setResult ] = useState( "" )
    

    return (
        <>
            <div className='calculator-container'>

                <Display value={ result }/>
                <PanelButton value={ result } setValue={ setResult }/>

            </div>
        </>
    )
}