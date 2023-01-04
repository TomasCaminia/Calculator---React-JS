import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

//CSS
import './Assets/CSS/style.css'

//EXPORTACIONES DE COMPONENTES
import { Display } from './Components/Display'
import { PanelButton } from './Components/PanelButton'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/*Creamos el contenedor de la calculadora*/}
    <div className='calculator-container'>.  

      <Display/>
      <PanelButton/>

    </div>

  </React.StrictMode>,
);

