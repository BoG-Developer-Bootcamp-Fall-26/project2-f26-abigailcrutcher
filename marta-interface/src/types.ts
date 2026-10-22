export type LineColor = "gold" | "red" | "green" | "blue";

export type Train = {
  DESTINATION: string;
  DIRECTION: string;
  EVENT_TIME: string;
  IS_REALTIME: string;
  LINE: string;
  NEXT_ARR: string;
  STATION: string;
  TRAIN_ID: string;
  WAITING_SECONDS: string;
  WAITING_TIME: string;
  DELAY?: string;
  MARTA_STATION: string;
};

export const API_URL = "https://marta-bootcamp-api.vercel.app";

export const LINE_COLORS: LineColor[] = ["gold", "red", "green", "blue"];
