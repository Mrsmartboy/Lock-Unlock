import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#0b0c1e, #3c2940);
  min-height: 100vh;
  justify-content: center;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 70px;
  border: none;
  cursor: pointer;
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
`
export const ParagraphMsg = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto';
`
