import type { LineColor } from "../types";

type FilterButtonsProps = {
  color: LineColor;
  activeFilters: string[];
  onToggleFilter: (filter: string) => void;
};

function getFilterNames(color: LineColor): string[] {
  if (color === "green" || color === "blue") {
    return ["Arriving", "Scheduled", "Eastbound", "Westbound"];
  }
  return ["Arriving", "Scheduled", "Northbound", "Southbound"];
}

export default function FilterButtons({
  color,
  activeFilters,
  onToggleFilter,
}: FilterButtonsProps) {
  const filterNames = getFilterNames(color);

  return (
    <div className="flex flex-wrap gap-2">
      {filterNames.map((filter) => (
        <button
          key={filter}
          onClick={() => onToggleFilter(filter)}
          className={`rounded border px-4 py-2 font-medium ${
            activeFilters.includes(filter)
              ? "border-gray-800 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
