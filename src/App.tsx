import { useEffect, useState } from "react";
import "./App.css";

import { Header } from "./components";
import Routing from "./routes";
import Toaster from "./components/ui/sonner";
import { useInitAuth } from "./hooks";
// import { SmoothCursor } from './components';

function App() {
  const [theme] = useState("light");

  // 👇 runs /auth/me or /auth/refresh to restore user on refresh
  useInitAuth();

  // 👇 dynamically load theme CSS
  useEffect(() => {
    import(`./themes/${theme}.css`);
  }, [theme]);

  return (
    <>
      <Toaster richColors position="top-center" />
      <Header />
      <Routing />
      {/* <Footer /> */}
      {/* <SmoothCursor /> */}
    </>
  );
}

export default App;
