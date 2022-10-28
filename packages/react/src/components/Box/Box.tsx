import * as S from './Box.styles'

export type BoxProps = S.BoxStyleProps & {}

function Box(props: BoxProps) {
  return <S.Box {...props} />
}

export default Box
