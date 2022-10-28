import * as S from './Button.styles'

export type ButtonProps = S.ButtonStyleProps & {}

function Button(props: ButtonProps) {
  return <S.Button {...props} />
}

export default Button
