import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter/wght.css';
import Routing from './routes.tsx'
import { Header } from './components/index.ts';
import Toaster from './components/ui/sonner.tsx';
import { Provider } from 'react-redux';
import { store } from "./store"



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster richColors position='top-center' />
        <Header />
        <Routing />
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
