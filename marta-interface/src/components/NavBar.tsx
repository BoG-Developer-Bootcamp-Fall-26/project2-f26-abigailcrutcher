import type { LineColor } from "../types";

type NavBarProps = {
  color: LineColor;
  data: string[];
  selectedStation: string | null;
  onSelectStation: (station: string | null) => void;
};

const activeStyles: Record<LineColor, string> = {
  gold: "bg-yellow-500 text-white",
  red: "bg-red-600 text-white",
  green: "bg-green-600 text-white",
  blue: "bg-blue-600 text-white",
};

export default function NavBar({ color, data, selectedStation, onSelectStation }: NavBarProps) {
  function handleClick(station: string) {
    if (station === selectedStation) {
      onSelectStation(null);
    } else {
      onSelectStation(station);
    }
  }

  return (
    <nav className="flex flex-wrap gap-2">
      {data.map((station) => (
        <button
          key={station}
          onClick={() => handleClick(station)}
          className={`rounded-full px-3 py-1 text-sm ${
            station === selectedStation ? activeStyles[color] : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          {station}
        </button>
      ))}
    </nav>
  );
}
