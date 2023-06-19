import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EditorContainer = styled.div`
  background-color: #1b1c22;
  padding: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`
export const Title = styled.h1`
  font-size: 32px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Image = styled.img`
  width: 400px;
  height: 400px;
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`
export const TextContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 5px;
  width: 30vw;
  height: 40vw;
  margin: 20px;
  padding: 0px;
`
export const IconContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5px;
  list-style-type: none;
  padding-left: 0px;
`
export const IconListItem = styled.li`
  width: fit-content;
  margin-left: 0px;
`

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.bold ? '#faff00' : '#f1f5f9')};
`
export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.italic ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
`

export const Text = styled.textarea`
  font-size: 22px;
  width: 98%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #f1f5f9;
  padding: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`
