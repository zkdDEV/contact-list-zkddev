import styled from 'styled-components'
import { Button } from '../../styles'

type Props = {
  fontSize: number
}

export const Center = styled.div`
  text-align: center;
`

export const Avatar = styled.img`
  margin-bottom: 8px;
  height: 172px;
`

export const Description = styled.textarea`
  resize: none;
  margin-bottom: 16px;
  width: 100%;
  font-size: 20px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  color: white;
  background-color: #2f3640;
  border-radius: 8px;
  padding-left: 8px;
  padding-right: 8px;
  border: none;
`

export const Paragrafo = styled.p<Props>`
  color: #00a8ff;
  font-weight: 400;
  font-family: 'Roboto Mono', monospace;
  font-size: ${(props) => props.fontSize + 'px'};
  margin-bottom: 16px;

  span {
    color: white;
  }
`

export const RemoveCancelButton = styled(Button)`
  background-color: #c23616;
  color: white;
`
