import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '@/service/axios'
import { Table } from '@/utils/structUtil';
import storage from "@/utils/storage";

interface IdsUnitsData {
  idTable: Table,
  unitTable: Table
}

export const asyncGetIdsUnits = createAsyncThunk(
  'async_get_ids_units',
  async (payload:string) => {
    let token
    token = window.location.search
      .substring(1)
      .replace('token=', '');
    
    if (token) {
      storage.setItem('token', token);
    }
    const {data} = await request(payload, {})
    const idTable = new Table('id', data.id)
    const unitTable = new Table('unit', data.unit)
    return {
      idTable: idTable,
      unitTable: unitTable
    } as IdsUnitsData
  }
)

const {reducer: bootReducer} = createSlice({
  name: 'boot_slice',
  initialState: {
    idTable: {},
    unitTable: {}
  } as IdsUnitsData,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(asyncGetIdsUnits.fulfilled, (state, {payload}) => ({...state, ...payload}))
  }
})

export default bootReducer
