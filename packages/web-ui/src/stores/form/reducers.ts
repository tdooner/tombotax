import {
  ADD_FORM,
  FLOW_NEXT_PAGE,
  FLOW_PREVIOUS_PAGE,
  FlowActionTypes,
  FlowState,
  FormActionTypes,
  FormState,
  REMOVE_FORM
} from './types';

export function formReducer(
  state = { count: 0 } as FormState,
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

export function flowReducer(
  state = { pageIndex: 0 } as FlowState,
  action: FlowActionTypes
): FlowState {
  switch(action.type) {
    case FLOW_NEXT_PAGE:
      return {
        ...state,
        pageIndex: state.pageIndex + 1,
      };
    case FLOW_PREVIOUS_PAGE:
      return {
        ...state,
        pageIndex: state.pageIndex - 1,
      };
  }

  return state;
}
