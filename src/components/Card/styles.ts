import styled from 'styled-components'

export const ContentContainer = styled.div`
  text-align: center;
  margin-top: 32px;
  padding: 16px;
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: 148px;
`

export const Name = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: white;
  margin-bottom: 4px;
`

export const PreviewButton = styled.button`
  background-color: transparent;
  border: none;
  color: #00a8ff;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #353b48;
  }
`
