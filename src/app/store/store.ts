import { combineReducers, createStore } from "redux";
import { weatherReducer } from "./weatherReducer";

const rootReducer = combineReducers({
  weatherData: weatherReducer,
});

export const store = createStore(rootReducer);
