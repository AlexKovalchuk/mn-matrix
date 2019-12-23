import { combineReducers } from "redux";
import { carsReducer } from "../pages/Cars/store/cars/cars.reducer";
import { homeReducer } from "../pages/Home/store/home.reducer";

export const rootReducer = combineReducers({
  cars: carsReducer,
  home: homeReducer
});
