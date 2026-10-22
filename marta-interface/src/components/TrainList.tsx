import Train from "./Train";
import type { LineColor, Train as TrainData } from "../types";

type TrainListProps = {
  color: LineColor;
  data: TrainData[];
  station: string | null;
  filters: string[];
};

function matchesFilter(train: TrainData, filter: string): boolean {
  if (filter === "Arriving") {
    return train.WAITING_TIME === "Arriving";
  }
  if (filter === "Scheduled") {
    return train.WAITING_TIME !== "Arriving";
  }
  if (filter === "Northbound") {
    return train.DIRECTION === "N";
  }
  if (filter === "Southbound") {
    return train.DIRECTION === "S";
  }
  if (filter === "Eastbound") {
    return train.DIRECTION === "E";
  }
  if (filter === "Westbound") {
    return train.DIRECTION === "W";
  }
  return true;
}

export default function TrainList({ color, data, station, filters }: TrainListProps) {
  let trains = data.filter((train) => train.LINE === color.toUpperCase());

  if (station !== null) {
    trains = trains.filter((train) => train.STATION === station.toUpperCase());
  }

  trains = trains.filter((train) => filters.every((filter) => matchesFilter(train, filter)));

  if (trains.length === 0) {
    return (
      <p className="rounded-lg bg-white p-6 text-center text-gray-500">
        No Current Trains Match Filters
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {trains.map((train, index) => (
        <Train key={index} train={train} />
      ))}
    </div>
  );
}
