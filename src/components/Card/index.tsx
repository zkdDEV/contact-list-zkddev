import ClassProfile from '../../models/Profile'

import * as S from './styles'
import imagem from '../../img/avatar_1.png'

type Props = Omit<ClassProfile, 'email' | 'mobileNumber' | 'id'>

const Card = ({ nickname, name }: Props) => {
  return (
    <S.ContentContainer>
      <S.Avatar src={imagem} alt="" />
      <h3>{nickname}</h3>
      <S.Name>{name}</S.Name>
    </S.ContentContainer>
  )
}

export default Card
