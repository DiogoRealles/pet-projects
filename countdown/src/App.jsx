import Title from "./components/Title"
import Counter from "./components/Counter";

import bg from './assets/bg-01.jpg';
import useCountdown from './hooks/useCountdown';

import './App.css';

function App() {
  const [day, hour, minute, second] = useCountdown('Jan 1, 2027 00:00:00');

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <div className="container">
        <Title title="contagem regressiva para 2027" />

        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
