import * as S from './TextArea.styles'

export type TextAreaProps = S.TextAreaStyleProps & {}

function TextArea(props: TextAreaProps) {
  return <S.TextArea {...props} />
}

export default TextArea
