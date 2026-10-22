import TrainList from "./components/TrainList";
import type { Train as TrainData } from "./types";

const sampleTrains: TrainData[] = [
  {
    DESTINATION: "Doraville",
    DIRECTION: "N",
    EVENT_TIME: "10/21/2026 11:24:07 PM",
    IS_REALTIME: "true",
    LINE: "GOLD",
    NEXT_ARR: "11:24:32 PM",
    STATION: "CIVIC CENTER",
    TRAIN_ID: "302",
    WAITING_SECONDS: "4",
    WAITING_TIME: "Arriving",
    DELAY: "T0S",
    MARTA_STATION: "CIVIC CENTER STATION",
  },
  {
    DESTINATION: "Airport",
    DIRECTION: "S",
    EVENT_TIME: "10/21/2026 11:24:12 PM",
    IS_REALTIME: "true",
    LINE: "GOLD",
    NEXT_ARR: "11:32:55 PM",
    STATION: "MIDTOWN",
    TRAIN_ID: "312",
    WAITING_SECONDS: "500",
    WAITING_TIME: "8 min",
    DELAY: "T42S",
    MARTA_STATION: "MIDTOWN STATION",
  },
  {
    DESTINATION: "Bankhead",
    DIRECTION: "W",
    EVENT_TIME: "10/21/2026 11:24:12 PM",
    IS_REALTIME: "true",
    LINE: "GREEN",
    NEXT_ARR: "11:30:00 PM",
    STATION: "ASHBY",
    TRAIN_ID: "401",
    WAITING_SECONDS: "300",
    WAITING_TIME: "5 min",
    MARTA_STATION: "ASHBY STATION",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-4 text-3xl font-bold">MARTA Interface</h1>
      <TrainList color="gold" data={sampleTrains} />
    </div>
  );
}

export default App;
