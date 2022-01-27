import Card from "./components/Card";
import { carsData } from './data';

export default function App() {

  const cars = carsData.map(info => (<Card key={info.id} {...info} />))

  return (
    <div className="cards-container">
      {cars}
    </div>
  );
}


