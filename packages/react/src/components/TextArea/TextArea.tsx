import * as S from './TextArea.styles'

export type TextAreaProps = S.TextAreaStyleProps & {}

function TextArea(props: TextAreaProps) {
  return <S.TextArea {...props} />
}

TextArea.displayName = 'TextArea'

export default TextArea
