import { ADD_FORM, FormActionTypes } from './types';

export function addForm(count: number): FormActionTypes {
  return {
    type: ADD_FORM,
    payload: count,
  };
}
