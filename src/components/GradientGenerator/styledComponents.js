import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.generateValue});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  min-height: 100vh;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const DirectionTitleText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const DirectionListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  max-width: 450px;
`
export const ColorInputCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColorInputText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 6px;
`

export const ColorInput = styled.input`
  height: 40px;
  width: 80px;
  outline: none;
  border: none;
  cursor: pointer;
  opacity: 1;
`
export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
  background-color: #00c9b7;
  padding: 6px 12px 6px 12px;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
