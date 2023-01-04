import React, { useState } from 'react';

//CSS
import '../Assets/CSS/style.css'

//EXPORTACIONES DE COMPONENTES
import { Display } from './Display'
import { PanelButton } from './PanelButton'

export const App = () => {
    return (
        <>
            <div className='calculator-container'>

                <Display />
                <PanelButton />

            </div>
        </>
    )
}