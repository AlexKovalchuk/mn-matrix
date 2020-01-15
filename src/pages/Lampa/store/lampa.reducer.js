import {INITIAL_STATE, INIT_LAMPA} from './lampa.constants';

export const lampaReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch(type) {
    case INIT_LAMPA: return {...state, payload};
    default:
      return state;
  }
};
