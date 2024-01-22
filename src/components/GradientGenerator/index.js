import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  MainHeading,
  DirectionTitleText,
  DirectionListContainer,
  ColorInputContainer,
  ColorInputCard,
  ColorInputText,
  ColorInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGenerateDirection: gradientDirectionsList[0].value,
    fromInputColor: '#8ae323',
    toInputColor: '#014f7b',
    generateValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerate = () => {
    const {fromInputColor, toInputColor, activeGenerateDirection} = this.state
    this.setState({
      generateValue: `to ${activeGenerateDirection}, ${fromInputColor} ${toInputColor}`,
    })
  }

  onChangeFirstColor = event => {
    this.setState({fromInputColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({toInputColor: event.target.value})
  }

  onChangeActiveValue = value => {
    this.setState({activeGenerateDirection: value})
  }

  renderPickColor = () => {
    const {fromInputColor, toInputColor} = this.state
    return (
      <>
        <DirectionTitleText>Pick the Colors</DirectionTitleText>
        <ColorInputContainer>
          <ColorInputCard>
            <ColorInputText>{fromInputColor}</ColorInputText>
            <ColorInput
              value={fromInputColor}
              type="color"
              onChange={this.onChangeFirstColor}
            />
          </ColorInputCard>
          <ColorInputCard>
            <ColorInputText>{toInputColor}</ColorInputText>
            <ColorInput
              value={toInputColor}
              type="color"
              onChange={this.onChangeSecondColor}
            />
          </ColorInputCard>
        </ColorInputContainer>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </>
    )
  }

  renderGradientList = () => {
    const {activeGenerateDirection} = this.state
    return (
      <DirectionListContainer>
        {gradientDirectionsList.map(eachItem => (
          <GradientDirectionItem
            key={eachItem.directionId}
            gradientDirection={eachItem}
            onChangeActiveValue={this.onChangeActiveValue}
            isActive={activeGenerateDirection === eachItem.value}
          />
        ))}
      </DirectionListContainer>
    )
  }

  render() {
    const {generateValue} = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        generateValue={generateValue}
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <DirectionTitleText>Choose Direction</DirectionTitleText>
        {this.renderGradientList()}
        {this.renderPickColor()}
      </AppContainer>
    )
  }
}

export default GradientGenerator
