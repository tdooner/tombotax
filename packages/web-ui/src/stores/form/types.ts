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
