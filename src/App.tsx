import { useEffect, useState } from 'react';
import './App.css'
import { Home } from './pages'
// import { SmoothCursor } from './components';


function App() {
  const [theme, _] = useState("light");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [user]);


  useEffect(() => {
    import(`./themes/${theme}.css`);
  }, [theme]);

  return (
    <>
      {/* <SmoothCursor /> */}
      <Home />
    </>
  )
}

export default App

