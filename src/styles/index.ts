import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body{
    background-color: #2f3640;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
`

export const Campo = styled.input`
  padding: 4px 4px;
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  font-weight: 400;
  color: #2f3640;
  width: 100%;
  border-radius: 8px;
  border: 2px solid white;

  &:focus {
    outline-color: #4cd137;
  }
`
export const Button = styled.button`
  font-weight: bold;
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: #2f3640;
  color: white;
  cursor: pointer;
`
export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #4cd137;
`

export const SaveButton = styled(Button)`
  background-color: #4cd137;
`
export const Main = styled.main`
  padding: 40px 32px;
  color: #4cd137;
  border-left: 3px solid #4cd137;
  height: 100vh;
  overflow-y: scroll;
`

export default EstiloGlobal
