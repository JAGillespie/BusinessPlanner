import { Tutorial } from './models/data.models'

export interface  AppState {
    readonly tutorial: Tutorial[];
}