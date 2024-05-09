import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  MainContainer,
  Heading,
  Para,
  UnorderedList,
  ListItem,
  ColorsSelectionContainer,
  SelectColor,
  GenerateButton,
  Color,
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
    direction: 'top',
    color2: '#014f7b',
    color1: '#8ae323',
    gradientValue: ` to top, #8ae323, #014f7b`,
  }

  onChangeColor1 = e => {
    this.setState({color1: e.target.value})
  }

  onChangeColor2 = e => {
    this.setState({color2: e.target.value})
  }

  changeDirection = e => {
    this.setState({direction: e})
  }

  changeColor = () => {
    const {color1, color2, direction} = this.state
    this.setState({gradientValue: ` to ${direction}, ${color1}, ${color2}`})
  }

  render() {
    const {direction, color1, color2, gradientValue} = this.state

    return (
      <MainContainer gradientValue={gradientValue}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <ListItem key={each.directionId}>
              <GradientDirectionItem
                value={each.value}
                Details={each}
                active={direction === each.value}
                changeDirection={this.changeDirection}
              />
            </ListItem>
          ))}
        </UnorderedList>

        <Para> Pick the colors</Para>
        <ColorsSelectionContainer>
          <div>
            <Color>{color1}</Color>
            <SelectColor
              type="color"
              color={color1}
              onChange={this.onChangeColor1}
            />
          </div>
          <div>
            <Color>{color2}</Color>
            <SelectColor
              type="color"
              color={color2}
              onChange={this.onChangeColor2}
            />
          </div>
        </ColorsSelectionContainer>
        <GenerateButton type="button" onClick={this.changeColor}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
