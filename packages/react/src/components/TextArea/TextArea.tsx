import * as React from 'react'
import * as S from './TextArea.styles'

export type TextAreaProps = S.TextAreaStyleProps & {}

function TextArea(props: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) {
  return <S.TextArea {...props} ref={ref} />
}

const TextAreaWithRef = React.forwardRef(TextArea)

TextAreaWithRef.displayName = 'TextArea'

export default TextAreaWithRef
