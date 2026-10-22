import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TrainList from "../components/TrainList";
import { API_URL, LINE_COLORS } from "../types";
import type { LineColor, Train as TrainData } from "../types";

const lineButtonStyles: Record<LineColor, string> = {
  gold: "bg-yellow-500 text-white",
  red: "bg-red-600 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-600 text-white",
};

export default function LinesPage() {
  const [currColor, setCurrColor] = useState<LineColor>("gold");
  const [loading, setLoading] = useState(true);
  const [trainData, setTrainData] = useState<TrainData[] | null>(null);
  const [stationData, setStationData] = useState<string[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  function changeLine(color: LineColor) {
    setCurrColor(color);
    setSelectedStation(null);
    setLoading(true);
  }

  useEffect(() => {
    fetch(`${API_URL}/arrivals/${currColor}`)
      .then((response) => response.json())
      .then((data) => {
        setTrainData(data);
        setLoading(false);
      });

    fetch(`${API_URL}/stations/${currColor}`)
      .then((response) => response.json())
      .then((data) => setStationData(data));
  }, [currColor]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-4 text-3xl font-bold capitalize">{currColor} Line</h1>

      <div className="mb-4 flex flex-wrap gap-2">
        {LINE_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => changeLine(color)}
            className={`rounded px-4 py-2 font-semibold capitalize ${lineButtonStyles[color]} ${
              color === currColor ? "ring-2 ring-black" : "opacity-70"
            }`}
          >
            {color}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <NavBar
          color={currColor}
          data={stationData}
          selectedStation={selectedStation}
          onSelectStation={setSelectedStation}
        />
      </div>

      {loading || trainData === null ? (
        <p className="text-gray-500">Loading trains...</p>
      ) : (
        <TrainList color={currColor} data={trainData} station={selectedStation} />
      )}
    </div>
  );
}
