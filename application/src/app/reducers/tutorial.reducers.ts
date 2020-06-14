//Reducers take the incoming action and decides what to do with them
//It take the given state and returns a new state based on the payload

import { Action } from '@ngrx/store';
import { Tutorial } from '../models/data.models';
import * as TutorialActions from '../actions/data.actions';

const initialState: Tutorial ={
    name: 'init Tutorial',
    url: 'google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL: 
            return[...state, action.payload];
        default:
            return state;
    }
}