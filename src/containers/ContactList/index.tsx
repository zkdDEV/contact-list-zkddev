import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Main } from '../../styles'
import Card from '../../components/Card'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.profile)

  return (
    <Main>
      <S.Options>
        <S.Title>Lista de contatos:</S.Title>
        <div>
          <S.AddButton to="/new">+ Adicionar Contato</S.AddButton>
          <S.ThemeButton>Trocar Tema</S.ThemeButton>
        </div>
      </S.Options>
      <S.Cards>
        {items.map((data) => (
          <Card key={data.id} nickname={data.nickname} name={data.name} />
        ))}
      </S.Cards>
    </Main>
  )
}

export default ContactList
