export const GET_WEATEHER = 'GET_WEATEHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeaatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunride: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}
export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeaatherData | null;
  loading: boolean;
  error: string;
}
interface GetWeatherAction {
  type: typeof GET_WEATEHER;
  payload: WeaatherData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  paylaoad: string;
}

export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
