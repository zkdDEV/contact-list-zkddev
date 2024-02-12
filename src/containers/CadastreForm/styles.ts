import styled from 'styled-components'
import { Campo, Main } from '../../styles'

export const ContainerForm = styled(Main)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  max-width: 580px;
  padding: 16px;
  background-color: #353b48;
  border-radius: 8px;
`
export const CampoForm = styled(Campo)`
  margin-bottom: 16px;
`
