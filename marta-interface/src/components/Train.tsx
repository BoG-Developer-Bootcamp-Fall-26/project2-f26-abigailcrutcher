import type { Train as TrainData } from "../types";

type TrainProps = {
  train: TrainData;
};

export default function Train({ train }: TrainProps) {
  const isOnTime = train.DELAY === "T0S";

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold">{train.DESTINATION}</p>
        <p className="text-sm text-gray-600">Train {train.TRAIN_ID}</p>
        <p className="text-sm text-gray-600">Next station: {train.STATION}</p>
      </div>
      <div className="sm:text-right">
        <p className="text-lg font-semibold">{train.WAITING_TIME}</p>
        {isOnTime ? (
          <p className="text-sm text-green-600">On Time</p>
        ) : (
          <p className="text-sm text-red-600">Delayed</p>
        )}
      </div>
    </div>
  );
}
