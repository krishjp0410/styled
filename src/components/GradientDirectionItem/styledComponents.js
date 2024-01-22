import styled from 'styled-components'

export const GradientList = styled.li`
  list-style-type: none;
  margin-right: 8px;
`
export const GradientListButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isActive ? '#1e293b' : '#334155')};
  background-color: #ffffff;
  padding: 6px 12px 6px 12px;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
