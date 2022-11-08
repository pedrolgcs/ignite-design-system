import * as React from 'react'
import * as S from './TextInput.styles'

export type TextInputProps = S.InputProps & {
  prefix?: string
}

function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}

      <S.Input {...props} />
    </S.TextInputContainer>
  )
}

export default TextInput