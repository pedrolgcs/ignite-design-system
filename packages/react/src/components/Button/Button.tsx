import * as S from './Button.styles'

export type ButtonProps = S.ButtonProps

function Button(props: ButtonProps) {
  return <S.Button {...props} />
}

export default Button
