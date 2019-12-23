import { combineReducers } from "redux";
import { carsReducer } from "../pages/Cars/store/cars/cars.reducer";
import { matrixReducer } from "../components/Matrix/store/matrix.reducer";

export const rootReducer = combineReducers({
  cars: carsReducer,
  matrixReducer: matrixReducer
});
