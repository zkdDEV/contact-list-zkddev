import { PayloadAction, createSlice } from '@reduxjs/toolkit'
type FilterState = {
  term: string
}

const initialState: FilterState = {
  term: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    findTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    }
  }
})

export const { findTerm } = filterSlice.actions
export default filterSlice.reducer
