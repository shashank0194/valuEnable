import { createStore} from "redux";

import { Auth } from "./Auth/reducer.js";

// global store for App
export const store = createStore(Auth, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

 
 