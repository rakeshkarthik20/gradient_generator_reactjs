// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
 background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
export const Heading = styled.h1`
  display: flex;
  justify-content: center;
`

export const Para = styled.p`
  display: flex;
  justify-content: center;
  font-family: Roboto;
  color: white;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  align-self: center;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`
export const ColorsSelectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Color = styled.p`
  color: white;
  font-weight: 500;
  text-align: center;
`
export const SelectColor = styled.input`
  border-radius: 5px;
  margin: 5px;
  min-width: 75px;
  padding: 0px;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  padding: 10px 30px;
  font-family: 'Open Sans';
  font-size: 13px;
  font-weight: bold;
  border-radius: 5px;
  border: 0px solid;
  color: #334155;
  cursor: pointer;
  width: 150px;
  align-self: center;
  margin: 10px;
`
