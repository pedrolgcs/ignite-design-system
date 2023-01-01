import React from 'react'
import * as S from './TextInput.styles'

export type TextInputProps = Omit<S.InputProps, 'size'> &
  S.TextInputContainerProps & {
    prefix?: string
  }

function TextInput(
  { prefix, size, ...props }: TextInputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <S.TextInputContainer size={size}>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}

      <S.Input {...props} ref={ref} />
    </S.TextInputContainer>
  )
}

const TextInputWithRef = React.forwardRef(TextInput)

TextInputWithRef.displayName = 'TextInput'

export default TextInputWithRef
