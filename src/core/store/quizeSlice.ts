import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiModule, ApiModuleOne } from '../models/data.models';
import { IStages } from '../types/stages';
import { IQuize } from '../types/quize';

const API = 'https://crm.metragegroup.com/API/REST.php';
// crm.training.get - слайд)
interface IQuizeState extends ApiModule {
  loading: boolean;
  adminMode: boolean;
}
export const fetchQuize = createAsyncThunk<
  ApiModule,
  undefined,
  { state: { quize: IQuizeState } }
>('quize/fetchQuize', async (_, { getState }) => {
  const res = await axios.post(API, {
    metrage_id: metrage_id,
    method: 'crm.training.list',
    fields: {
      adminMode: getState().quize.adminMode,
    },
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
});

const initialState: IQuizeState = {
  loading: false,
  stages: [],
  data: [],
  adminMode: false,
  rightsToMove: false,
};
const quizeSlice = createSlice({
  name: 'quize',
  initialState,
  reducers: {
    toggleAdminMode(state) {
      state.adminMode = !state.adminMode;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuize.fulfilled, (state, action) => {
      const apiData = action.payload;
      state.data = apiData.data;
      state.stages = apiData.stages;
      state.rightsToMove = apiData.rightsToMove;
    });
  },
});

export const { toggleAdminMode } = quizeSlice.actions;
export default quizeSlice.reducer;
