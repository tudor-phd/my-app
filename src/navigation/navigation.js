
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "../routes/about";
import Skills from "../routes/skills";
import Work from "../routes/work";
import MenuItems from "../components/menu/menu";
import Player from '../components/sound/sound';
import sound from '../components/sound/mrrobot.mp3';
import magicMouse from 'magicmouse.js'
import App from "../App"

const options = {
  "cursorOuter": "circle-basic",
  "hoverEffect": "circle-move",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options);

function Navigation() {
  return (
    <BrowserRouter>
      <MenuItems />
      <Player url={sound} />
      <Routes>
        <Route exact path="/my-app" element={<App />} />
        <Route exact path="/" element={<App />} />
        <Route exact path="/my-app/about" element={<About />} />
        <Route exact path="/my-app/skills" element={<Skills />} />
        <Route exact path="/my-app/work" element={<Work />} />
        <Route
          exact
          path="*"
          element={
            <main style={{ padding: "10rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
