import {GradientList, GradientListButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirection, onChangeActiveValue, isActive} = props
  const {displayText, value} = gradientDirection

  const onClickChangeBgColor = () => {
    onChangeActiveValue(value)
  }

  return (
    <GradientList>
      <GradientListButton
        isActive={isActive}
        type="button"
        onClick={onClickChangeBgColor}
      >
        {displayText}
      </GradientListButton>
    </GradientList>
  )
}

export default GradientDirectionItem
