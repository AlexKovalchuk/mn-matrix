import { combineReducers } from "redux";
import { carsReducer } from "../pages/Cars/store/cars/cars.reducer";
import { matrixReducer } from "../components/Matrix/store/matrix.reducer";
import { lampaReducer } from '../pages/Lampa/store/lampa.reducer'

export const rootReducer = combineReducers({
  cars: carsReducer,
  matrixReducer: matrixReducer,
  lampaReducer: lampaReducer,
});
