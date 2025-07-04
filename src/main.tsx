import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter/wght.css';
import Routing from './routes.tsx'
import {  Header } from './components/index.ts';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routing />
      {/* <Footer /> */}
    </BrowserRouter>
  </StrictMode>,
)
