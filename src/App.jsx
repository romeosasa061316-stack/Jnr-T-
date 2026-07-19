import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen />
      ) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;