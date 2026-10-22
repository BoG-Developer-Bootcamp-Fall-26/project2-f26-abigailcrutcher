import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FilterButtons from "../components/FilterButtons";
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

function isLineColor(value: string | undefined): value is LineColor {
  return LINE_COLORS.includes(value as LineColor);
}

export default function LinesPage() {
  const params = useParams();
  const startingColor = isLineColor(params.color) ? params.color : "gold";

  const [currColor, setCurrColor] = useState<LineColor>(startingColor);
  const [loading, setLoading] = useState(true);
  const [trainData, setTrainData] = useState<TrainData[] | null>(null);
  const [stationData, setStationData] = useState<string[]>([]);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function changeLine(color: LineColor) {
    setCurrColor(color);
    setSelectedStation(null);
    setActiveFilters([]);
    setLoading(true);
  }

  function toggleFilter(filter: string) {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((name) => name !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  }

  useEffect(() => {
    let ignore = false;

    fetch(`${API_URL}/arrivals/${currColor}`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setTrainData(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!ignore) {
          setTrainData([]);
          setLoading(false);
        }
      });

    fetch(`${API_URL}/stations/${currColor}`)
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setStationData(data);
        }
      })
      .catch(() => {
        if (!ignore) {
          setStationData([]);
        }
      });

    return () => {
      ignore = true;
    };
  }, [currColor]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize sm:text-3xl">{currColor} Line</h1>
          <Link to="/" className="text-gray-700 hover:underline">
            Home
          </Link>
        </div>

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

        <div className="mb-4">
          <NavBar
            color={currColor}
            data={stationData}
            selectedStation={selectedStation}
            onSelectStation={setSelectedStation}
          />
        </div>

        <div className="mb-6">
          <FilterButtons
            color={currColor}
            activeFilters={activeFilters}
            onToggleFilter={toggleFilter}
          />
        </div>

        {loading || trainData === null ? (
          <p className="text-gray-500">Loading trains...</p>
        ) : (
          <TrainList
            color={currColor}
            data={trainData}
            station={selectedStation}
            filters={activeFilters}
          />
        )}
      </div>
    </div>
  );
}
