import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import ClassProfile from '../../models/Profile'

type ProfileState = {
  items: ClassProfile[]
}

const initialState: ProfileState = {
  items: [
    {
      id: 1,
      nickname: 'Pedrão',
      name: 'Pedro Augusto',
      email: 'pedroaugusto21@gmail.com',
      mobileNumber: '9122342342'
    },
    {
      id: 2,
      nickname: 'Bundão',
      name: 'Bruno de Almeida',
      email: 'bruno321@hotmail.com',
      mobileNumber: '9127876423'
    },
    {
      id: 3,
      nickname: 'Barril',
      name: 'Paulo Vitor',
      email: 'matheusstang15@gmail.com',
      mobileNumber: '6237463628'
    }
  ]
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<ClassProfile>) => {
      const indexProfile = state.items.findIndex(
        (profile) => profile.id === action.payload.id
      )

      if (indexProfile >= 0) {
        state.items[indexProfile] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (profile) => profile.id !== action.payload
      )
    },
    add: (state, action: PayloadAction<Omit<ClassProfile, 'id'>>) => {
      const thereIsPerson = state.items.find((person) => {
        return person.name.toLowerCase() === action.payload.name.toLowerCase()
      })

      if (thereIsPerson) {
        alert('Essa pessoa já está na sua lista de contatos')
      } else {
        const lastProfile = state.items[state.items.length - 1]
        console.log(lastProfile)
        const newProfile = {
          ...action.payload,
          id: lastProfile ? lastProfile.id + 1 : 1
        }
        state.items.push(newProfile)
      }
    }
  }
})

export const { edit, remove, add } = profileSlice.actions
export default profileSlice.reducer
