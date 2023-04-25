import {combineReducers} from "redux"
import { LikeReduser } from "./Like-reducer"
import { CommentReduser } from "./Comments-reducer"

export const rootReducer=combineReducers({
    LikeReduser,
    CommentReduser
})