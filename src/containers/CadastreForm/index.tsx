import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'

import { Label, SaveButton } from '../../styles'
import * as S from './styles'
import { add } from '../../store/reducers/profile'
import { useNavigate } from 'react-router-dom'

const CadastreForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nickname, setNickname] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  function cadastreProfile(e: FormEvent) {
    e.preventDefault()

    dispatch(
      add({
        nickname,
        name,
        email,
        mobileNumber
      })
    )
    navigate('/')
  }

  return (
    <S.ContainerForm>
      <S.Form onSubmit={cadastreProfile}>
        <Label htmlFor="nickname">Apelido:</Label>
        <S.CampoForm
          onChange={(e) => setNickname(e.target.value)}
          id="nickname"
          type="text"
          required
        />

        <Label htmlFor="name">Nome:</Label>
        <S.CampoForm
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          required
        />

        <Label htmlFor="email">E-mail:</Label>
        <S.CampoForm
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="text"
          required
        />

        <Label htmlFor="mobileNumber">Número:</Label>
        <S.CampoForm
          onChange={(e) => setMobileNumber(e.target.value)}
          id="mobileNumber"
          type="text"
          required
        />
        <SaveButton type="submit">Cadastrar</SaveButton>
      </S.Form>
    </S.ContainerForm>
  )
}

export default CadastreForm
