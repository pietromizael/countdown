import Counter from "../components/Counter";
import useNumber from "../hooks/useNumber";
import Title from "../components/Title";

import { CountdownContext } from "../context/CountdownContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


const Countdown = () => {
  
  const {event, setEvent} = useContext(CountdownContext)
  if (!event) return <Navigate to="/"/>
  
  const [day, hour, minute, second] = useNumber(event.day);
  

  return (
    <>
      <div className="countdown-title">
        <Title title={event.title} eventColor={event.color} />
      </div>
      <div className="counters">
        <Counter counterText="Dias" number={day} eventColor={event.color} />
        <Counter counterText="Horas" number={hour} eventColor={event.color} />
        <Counter counterText="Minutos" number={minute} eventColor={event.color} />
        <Counter counterText="Segundos" number={second} eventColor={event.color} />
      </div>
    </>
  );
};

export default Countdown;
