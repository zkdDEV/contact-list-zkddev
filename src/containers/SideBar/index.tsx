import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Profile from '../../components/Profile'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Button, Campo } from '../../styles'
import { findTerm } from '../../store/reducers/filtro'

type Props = {
  viewPage: boolean
}

const SideBar = ({ viewPage }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { term } = useSelector((state: RootReducer) => state.filter)
  const { items } = useSelector((state: RootReducer) => state.profile)

  // const viewProfile = () => {
  //   let profiles = items
  //   profiles = profiles.filter(
  //     (person) => person.nickname.toLowerCase() === term.toLowerCase()
  //   )
  //   console.log(profiles)

  //   return profiles
  // }

  const searching = () => {
    let profiles = items
    profiles = profiles.filter(
      (p) => p.nickname.toLowerCase().search(term.toLowerCase()) >= 0
    )
    return profiles
  }

  return (
    <S.Aside>
      {viewPage ? (
        <>
          <Campo
            value={term}
            onChange={(e) => dispatch(findTerm(e.target.value))}
            type="text"
            placeholder="Buscar por apelido"
          />
          {searching().map((date) => (
            <S.ProfileContainer key={date.id}>
              <Profile
                nickname={date.nickname}
                name={date.name}
                email={date.email}
                mobileNumber={date.mobileNumber}
                id={date.id}
              />
            </S.ProfileContainer>
          ))}
        </>
      ) : (
        <>
          <Button style={{ width: '100%' }} onClick={() => navigate('/')}>
            Retornar aos Contatos
          </Button>
          <S.Paragraph>
            Não é possível cadastrar um contato que tenha o mesmo <em>NOME</em>{' '}
            que um contato já existente!
          </S.Paragraph>
        </>
      )}
    </S.Aside>
  )
}

export default SideBar
