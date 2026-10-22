import Train from "./Train";
import type { LineColor, Train as TrainData } from "../types";

type TrainListProps = {
  color: LineColor;
  data: TrainData[];
};

export default function TrainList({ color, data }: TrainListProps) {
  const trainsOnLine = data.filter((train) => train.LINE === color.toUpperCase());

  if (trainsOnLine.length === 0) {
    return (
      <p className="rounded-lg bg-white p-6 text-center text-gray-500">
        No Current Trains Match Filters
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {trainsOnLine.map((train, index) => (
        <Train key={index} train={train} />
      ))}
    </div>
  );
}
