import {createStore} from "redux"
import { rootReducer } from "./Reducer/Root-reducer"

const store=createStore(rootReducer)

export default store