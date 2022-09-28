import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

import { STATUS } from '@app/constants';

import { reducer } from './reducer';

const initialState = () => ({
  products: {
    list: [],
    orderedList: [],
    cartOrderInfo: [],
    countProducts: 0,
  },
  fetching: {
    status: STATUS.IDLE,
    error: null,
  },
  isCartModal: false,
});

const useStateValue = () => useReducer(reducer, initialState());

export const { Provider, useTrackedState, useUpdate: useDispatch } = createContainer(useStateValue);
