import { AUTHENTICATE_USER } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
  default: return state;

  case AUTHENTICATE_USER:
    return action.payload;
  }
}
