import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

type ModuleData = 'synthesis' | 'pollution' | 'water'
interface InitialState {
  module: ModuleData
}

const rootSlice = createSlice({
  name: 'root_slice',
  initialState: {
    module: 'synthesis'
  } as InitialState,
  reducers: {
    setModule: (state, action:PayloadAction<ModuleData>) => ({...state, module:action.payload})
  },
})

export const {setModule} = rootSlice.actions
export default rootSlice.reducer
