import { combineReducers,createStore } from "redux";
import todolistReducer from "./reducers/todolist.reducer";
import counterReducer from "./reducers/counter.reducer";

var finalReducer = combineReducers({c:counterReducer,t:todolistReducer})

var store = new createStore(finalReducer);

export default store;