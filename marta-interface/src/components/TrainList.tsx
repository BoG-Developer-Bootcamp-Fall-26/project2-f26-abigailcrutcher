import Train from "./Train";
import type { LineColor, Train as TrainData } from "../types";

type TrainListProps = {
  color: LineColor;
  data: TrainData[];
  station: string | null;
};

export default function TrainList({ color, data, station }: TrainListProps) {
  let trains = data.filter((train) => train.LINE === color.toUpperCase());

  if (station !== null) {
    trains = trains.filter((train) => train.STATION === station.toUpperCase());
  }

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
