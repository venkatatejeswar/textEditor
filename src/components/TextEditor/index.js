import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  EditorContainer,
  ImageContainer,
  Title,
  Image,
  TextContainer,
  IconContainer,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  Text,
  IconListItem,
} from './styledComponent'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onBoldIcon = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onItalicIcon = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onUnderlineIcon = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <AppContainer>
        <EditorContainer>
          <ImageContainer>
            <Title>Text Editor</Title>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <IconContainer>
              <IconListItem>
                <BoldButton
                  data-testid="bold"
                  type="button"
                  onClick={this.onBoldIcon}
                  bold={bold}
                >
                  <VscBold size={22} />
                </BoldButton>
              </IconListItem>
              <IconListItem>
                <ItalicButton
                  data-testid="italic"
                  type="button"
                  onClick={this.onItalicIcon}
                  italic={italic}
                >
                  <GoItalic size={22} />
                </ItalicButton>
              </IconListItem>
              <IconListItem>
                <UnderlineButton
                  data-testid="underline"
                  type="button"
                  onClick={this.onUnderlineIcon}
                  underline={underline}
                >
                  <AiOutlineUnderline size={22} />
                </UnderlineButton>
              </IconListItem>
            </IconContainer>
            <hr color="#334155" width="100%" />
            <Text
              type="text"
              bold={bold}
              italic={italic}
              underline={underline}
              rows={18}
              cols={80}
            />
          </TextContainer>
        </EditorContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
