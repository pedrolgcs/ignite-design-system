import * as S from './Text.styles'

export type TextProps = S.TextStyleProps & {}

function Text(props: TextProps) {
  return <S.Text {...props} />
}

export default Text
