import * as S from './Box.styles'

export type BoxProps = S.BoxStyleProps & {}

function Box(props: BoxProps) {
  return <S.Box {...props} />
}

Box.displayName = 'Box'

export default Box
