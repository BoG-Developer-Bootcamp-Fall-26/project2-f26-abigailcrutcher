import type { Train as TrainData } from "../types";

type TrainProps = {
  train: TrainData;
};

export default function Train({ train }: TrainProps) {
  // I changed delay to have a minute grace period as all were showing as late
  const delaySeconds = parseInt(train.DELAY?.replace(/[TS]/g, "") ?? "0", 10);
  const isLate = delaySeconds > 60;
  const isEarly = delaySeconds < -60;
  const isOnTime = !Number.isNaN(delaySeconds) && !isLate && !isEarly;

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold">{train.DESTINATION}</p>
        <p className="text-sm text-gray-600">Train {train.TRAIN_ID}</p>
        <p className="text-sm text-gray-600">Arriving at: {train.STATION}</p>
      </div>
      <div className="sm:text-right">
        <p className="text-lg font-semibold">{train.WAITING_TIME}</p>
        {isOnTime && <p className="text-sm text-green-600">On Time</p>}
        {isLate && <p className="text-sm text-red-600">Delayed</p>}
        {isEarly && <p className="text-sm text-blue-600">Early</p>}
      </div>
    </div>
  );
}
