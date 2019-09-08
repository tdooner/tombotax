import { ADD_FORM, FormActionTypes, FormState, REMOVE_FORM } from './types';

const initialState: FormState = {
  count: 0
};

export default function formReducer(
  state = initialState,
  action: FormActionTypes
): FormState {
  switch(action.type) {
    case ADD_FORM:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case REMOVE_FORM:
      return {
        ...state,
        count: state.count - action.payload,
      };
  }

  return state;
}
