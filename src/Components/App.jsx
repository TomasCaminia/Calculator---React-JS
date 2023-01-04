import React, { useState } from 'react';

//CSS
import '../Assets/CSS/style.css'

//EXPORTACIONES DE COMPONENTES
import { Display } from './Display'
import { PanelButton } from './PanelButton'

export const App = () => {

    const value = 0

    return (
        <>
            <div className='calculator-container'>

                <Display value={ value }/>
                <PanelButton />

            </div>
        </>
    )
}