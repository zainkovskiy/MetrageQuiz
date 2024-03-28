import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApiModule, ApiModuleOne } from '../models/data.models';
import { IStages } from '../types/stages';
import { IQuize } from '../types/quize';

const API = 'https://crm.metragegroup.com/API/REST.php';
// crm.training.get - слайд)

export const fetchQuize = createAsyncThunk<ApiModule>(
  'quize/fetchQuize',
  async () => {
    const res = await axios.post(API, {
      metrage_id: metrage_id,
      method: 'crm.training.list',
    });
    if (res.statusText === 'OK') {
      return res.data.result;
    }
  }
);

interface IQuizeState extends ApiModule {
  loading: boolean;
}
const initialState: IQuizeState = {
  loading: false,
  stages: [],
  data: [],
  rightsToMove: false,
};
const quizeSlice = createSlice({
  name: 'quize',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuize.fulfilled, (state, action) => {
      const apiData = action.payload;
      state.data = apiData.data;
      state.stages = apiData.stages;
      state.rightsToMove = apiData.rightsToMove;
    });
  },
});

export const {} = quizeSlice.actions;
export default quizeSlice.reducer;
