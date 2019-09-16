export const ADD_FORM = 'ADD_FORM';
export const REMOVE_FORM = 'REMOVE_FORM';

export interface FormState {
  count: number
};

interface AddFormAction {
  type: typeof ADD_FORM
  payload: number
};

interface RemoveFormAction {
  type: typeof REMOVE_FORM
  payload: never
};

export type FormActionTypes = AddFormAction | RemoveFormAction;


export const FLOW_NEXT_PAGE = 'FLOW_NEXT_PAGE';
export const FLOW_PREVIOUS_PAGE = 'FLOW_PREVIOUS_PAGE';

export interface FlowState {
  pageIndex: number
};

interface FlowNextPageAction {
  type: typeof FLOW_NEXT_PAGE
};

interface FlowPreviousPageAction {
  type: typeof FLOW_PREVIOUS_PAGE
};

export type FlowActionTypes = FlowNextPageAction | FlowPreviousPageAction;
export type CombinedState = {
  form: FormState,
  flow: FlowState,
}
