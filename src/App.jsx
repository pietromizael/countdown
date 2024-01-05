import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { CountdownContext } from "./context/CountdownContext";

import "./App.css";
import Comemoration from "../assets/Comemoration.avif";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;
  
  return (
    <>
      <div
        className="container"
        style={
          eventImage
            ? { backgroundImage: `url(${eventImage})` }
            : { backgroundImage: `url(${Comemoration})` }
        }
      >
        <div className="countdown-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
