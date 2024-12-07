export interface ICurrent {
  temp_c?: string;
  wind_kph?: string;
  humidity?: string;
  cloud?: string;
}

export interface ILocation {
  lat?: number;
  lon?: number;
  country?: string;
  localtime?: string;
  name?: string;
  region?: string;
  tz_id?: string;
}

export interface ICurrentResponse {
  current: ICurrent;
  location: ILocation;
}

export interface ICurrentPayload {
  key: string;
  q: string;
}

export interface ICurrentProps {
  city: string;
  onSuccess?: (a: ICurrentResponse) => void;
  onError?: (a: string) => void;
}
