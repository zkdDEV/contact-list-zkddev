import { configureStore } from '@reduxjs/toolkit'
import reducerProfile from './reducers/profile'
import reducerFilter from './reducers/filtro'

const store = configureStore({
  reducer: {
    profile: reducerProfile,
    filter: reducerFilter
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
