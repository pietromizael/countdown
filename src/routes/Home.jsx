import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

import {CountdownContext} from "../context/CountdownContext";

const Home = () => {
  const [title, setTitle] = useState();
  const [day, setDay] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const {setEvent} = useContext(CountdownContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const eventObject = {
        title,
        day,
        image,
        color
    }

    setEvent(eventObject)
    navigate("/countdown")
  }

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva!</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Digite o título"
            required
          />
        </label>
        <label>
          <span>Data do evento:</span>
          <input type="date" onChange={(e) => setDay(e.target.value)} name="date"  required/>
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            placeholder="Digite a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Cor:</span>
          <input type="color" name="color" onChange={(e) => setColor(e.target.value)}/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
