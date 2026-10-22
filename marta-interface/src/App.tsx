import Train from "./components/Train";
import type { Train as TrainData } from "./types";

const sampleTrain: TrainData = {
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
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-4 text-3xl font-bold">MARTA Interface</h1>
      <Train train={sampleTrain} />
      <div className="mt-4">
        <Train train={{ ...sampleTrain, TRAIN_ID: "312", DELAY: "T42S", WAITING_TIME: "8 min" }} />
      </div>
    </div>
  );
}

export default App;
