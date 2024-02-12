import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #4cd137;
`

export const Title = styled.h1`
  font-size: 40px;
`

export const AddButton = styled(Link)`
  padding: 4px 16px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #4cd137;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #4cd137;
  }
`
export const ThemeButton = styled.button`
  padding: 4px 16px;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  border: transparent;
  margin-left: 8px;
  color: #00a8ff;
  cursor: pointer;

  &:hover {
    background-color: #353b48;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
`
