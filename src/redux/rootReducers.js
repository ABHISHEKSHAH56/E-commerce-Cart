import { combineReducers } from "redux";
import shopReducers from "./shop/reducers";
const rootReducers=combineReducers({
        shop:shopReducers
});
export default rootReducers;