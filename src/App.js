import React, { useEffect } from 'react';
import './App.css';
import { Clouds } from "./components/clouds/clouds"
import Quote from './components/quote/quote'

function App() {
  useEffect(() => {
    Clouds('display');
    const cloud = document.getElementsByTagName('canvas')[0];
        // Specify how to clean up after this effect:
        return function cleanup() {
          
          if(cloud){
            cloud.style.display = "none";
          }
        };
  }, []);
  return (
    <main>
      <Quote />
    </main>
  );
}

export default App;

