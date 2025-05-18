// import { useEffect, useState } from 'react';
import './App.css'
import { Home } from './pages'
import { SmoothCursor } from './components';


function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   import(`./themes/${theme}.css`);
  // }, [theme]);

  return (
    <>
      <SmoothCursor />
      <Home />
    </>
  )
}

export default App
