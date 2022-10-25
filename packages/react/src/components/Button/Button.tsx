import * as React from 'react'
import * as S from './Button.styles'

export type ButtonProps = React.ComponentProps<typeof S.Button>

function Button(props: ButtonProps) {
  return <S.Button {...props} />
}

export default Button
