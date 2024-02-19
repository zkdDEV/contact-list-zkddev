import { useEffect, useState } from 'react'
import ClassProfile from '../../models/Profile'
import { useDispatch } from 'react-redux'
import { edit, remove } from '../../store/reducers/profile'

import * as S from './styles'
import imagem from '../../img/avatar_1.png'
import { Button, Label, SaveButton } from '../../styles'

type Props = ClassProfile

const Profile = ({
  nickname: originalNickname,
  name: originalName,
  email: originalEmail,
  mobileNumber: originalMobileNumber,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [nickname, setNickname] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')

  useEffect(() => {
    setNickname(originalNickname)
    setName(originalName)
    setEmail(originalEmail)
    setMobileNumber(originalMobileNumber)
  }, [originalNickname, originalName, originalEmail, originalMobileNumber])

  function cancelEdit() {
    setIsEditing(!isEditing)
    setNickname(originalNickname)
    setName(originalName)
    setEmail(originalEmail)
    setMobileNumber(originalMobileNumber)
  }

  function saveEdit() {
    dispatch(edit({ nickname, name, email, mobileNumber, id }))
    setIsEditing(!isEditing)
  }

  function removeProfile() {
    dispatch(remove(id))
  }

  return (
    <>
      <S.Center>
        <S.Avatar src={imagem} alt="Avatar de Perfil" />
      </S.Center>

      {isEditing ? (
        <>
          <Label htmlFor="apelido">Apelido:</Label>
          <S.Description
            onChange={(evento) => setNickname(evento.target.value)}
            value={nickname}
            id="apelido"
            disabled={!isEditing}
          />

          <Label htmlFor="nome">Nome:</Label>
          <S.Description
            onChange={(evento) => setName(evento.target.value)}
            value={name}
            id="nome"
            disabled
          />

          <Label htmlFor="email">E-mail:</Label>
          <S.Description
            onChange={(evento) => setEmail(evento.target.value)}
            value={email}
            id="email"
            disabled={!isEditing}
          />

          <Label htmlFor="numero">Número:</Label>
          <S.Description
            onChange={(evento) => setMobileNumber(evento.target.value)}
            value={mobileNumber}
            id="numero"
            disabled={!isEditing}
          />
          <S.Center>
            <SaveButton onClick={saveEdit}>Salvar</SaveButton>
            <S.RemoveCancelButton onClick={cancelEdit}>
              Cancelar
            </S.RemoveCancelButton>
          </S.Center>
        </>
      ) : (
        <>
          <Label htmlFor="apelido">Apelido:</Label>
          <S.Paragrafo fontSize={24} id="apelido">
            {nickname}
          </S.Paragrafo>

          <Label htmlFor="nome">Nome:</Label>
          <S.Paragrafo fontSize={20} id="nome">
            {name}
          </S.Paragrafo>

          <Label htmlFor="email">E-mail:</Label>
          <S.Paragrafo fontSize={16} id="email">
            {email}
          </S.Paragrafo>

          <Label htmlFor="numero">Número:</Label>
          <S.Paragrafo fontSize={18} id="numero">
            {mobileNumber}
          </S.Paragrafo>
          <S.Center>
            <Button onClick={() => setIsEditing(!isEditing)}>Editar</Button>
            <S.RemoveCancelButton onClick={removeProfile}>
              Remover
            </S.RemoveCancelButton>
          </S.Center>
        </>
      )}
      <S.Paragrafo fontSize={18} id="numero">
        Number ID: <span>{id}</span>
      </S.Paragrafo>
    </>
  )
}

export default Profile
