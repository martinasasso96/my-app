/* eslint-disable @typescript-eslint/no-explicit-any */
interface IForecast {
  temp_c: string;
}

interface ILocation {
  lat: number;
  lon: number;
  country: string;
  localtime: string;
  name: string;
  region: string;
  tz_id: string;
}

interface IForecast {
  forecastday: { astro: any; date: string; day: any; hour: any }[];
}

export interface IForecastResponse {
  current: IForecast;
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
