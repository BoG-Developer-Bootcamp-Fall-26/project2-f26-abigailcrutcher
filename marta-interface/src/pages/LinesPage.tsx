import { useState } from "react";
import TrainList from "../components/TrainList";
import { LINE_COLORS } from "../types";
import type { LineColor, Train as TrainData } from "../types";

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

const lineButtonStyles: Record<LineColor, string> = {
  gold: "bg-yellow-500 text-white",
  red: "bg-red-600 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-600 text-white",
};

export default function LinesPage() {
  const [currColor, setCurrColor] = useState<LineColor>("gold");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-4 text-3xl font-bold capitalize">{currColor} Line</h1>

      <div className="mb-6 flex flex-wrap gap-2">
        {LINE_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setCurrColor(color)}
            className={`rounded px-4 py-2 font-semibold capitalize ${lineButtonStyles[color]} ${
              color === currColor ? "ring-2 ring-black" : "opacity-70"
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      <TrainList color={currColor} data={sampleTrains} />
    </div>
  );
}
