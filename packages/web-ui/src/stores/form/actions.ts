import {
  ADD_FORM,
  FLOW_NEXT_PAGE,
  FLOW_PREVIOUS_PAGE,
  FlowActionTypes,
  FormActionTypes
} from './types';

export function addForm(count: number): FormActionTypes {
  return {
    type: ADD_FORM,
    payload: count,
  };
}

export function flowNextPage(): FlowActionTypes {
  return {
    type: FLOW_NEXT_PAGE,
  };
}

export function flowPreviousPage(): FlowActionTypes {
  return {
    type: FLOW_PREVIOUS_PAGE,
  };
}
