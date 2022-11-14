import * as React from 'react'
import * as S from './Button.styles'

export type ButtonProps = S.ButtonStyleProps & {
  as?: React.ElementType
}

function Button(props: ButtonProps) {
  return <S.Button {...props} />
}

Button.displayName = 'Button'

export default Button
