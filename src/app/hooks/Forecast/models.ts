import { ICurrent } from "../Current";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface ILocation {
  lat: number;
  lon: number;
  country: string;
  localtime: string;
  name: string;
  region: string;
  tz_id: string;
}

export interface IForecast {
  forecastday?: {
    date: Date;
    day: {
      condition: {
        code: string;
      };
      mintemp_c: number;
      maxtemp_c: number;
    };
  }[];
}

export interface IForecastResponse {
  current: ICurrent;
  location: ILocation;
  forecast: IForecast;
}

export interface IForecastPayload {
  key: string;
  q: string;
}

export interface IForecastProps {
  city: string;
  days: number;
  onSuccess?: (a: IForecastResponse) => void;
  onError?: (a: string) => void;
}
